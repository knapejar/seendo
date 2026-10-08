#!/usr/bin/env python3
"""SEENDO: public social signals + business care capabilities -> small human gestures.

Usage:  python seendo.py examples/02-lisbon
Reads   <dir>/input/profile.md   (what the person shared publicly, with sources)
        <dir>/input/journey.md   (the trip/visit and what each business can do)
Writes  <dir>/output.md          (signals, touches, rejections, all traceable)

Runs on the Claude Code CLI (`claude -p`), so a Claude subscription is enough, no API key.
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

RULES = """Hard rules (never break):
- Use ONLY information the person made public. Anything marked owner-only/private, contact details,
  birthdays, home address, and relationships inferred from other people's accounts are DISCARDED.
- The product stays the same; only attention changes. Every touch costs at most a few euros.
- Most touches should be silent (the customer never notices it was targeted). If a guess is wrong, nothing bad happens.
- Explicit mentions ("we saw your post") only with opt-in.
- The "How do you know that?" test: if the customer could feel watched, reject the touch.
- Several touches that are each harmless can add up to a profile when they land at one place; avoid stacking.
- Make sure every signal is about THIS person (namesakes, other people's accounts) and is meant seriously (jokes are not facts)."""


def claude(prompt: str) -> dict:
    """One Claude Code call, returns the JSON object the model was asked for."""
    exe = shutil.which("claude") or sys.exit("Claude Code CLI not found (npm i -g @anthropic-ai/claude-code)")
    out = subprocess.run([exe, "-p", "--output-format", "json"], input=prompt,
                         capture_output=True, text=True, encoding="utf-8", check=True).stdout
    text = json.loads(out)["result"]
    return json.loads(text[text.index("{"): text.rindex("}") + 1])


def social_signals(profile: str) -> dict:
    return claude(f"""You are the Social Signals step of SEENDO.
From the public profile notes below, extract signals (interests, passions, creative pursuits, habits).
For each: what it is, the public source, confidence (high/medium/low) and usable: "yes", "conditional"
(say the condition) or "no" (say why, e.g. owner-only, inferred relationship, contact detail, sensitive category,
someone else's data). The note explains the verdict only; do NOT suggest gestures or businesses here, that is a later step.
Also write a one-sentence persona.
{RULES}
Reply with JSON only:
{{"persona": str, "signals": [{{"id": "S1", "signal": str, "source": str, "confidence": str, "usable": str, "note": str}}]}}

PROFILE:
{profile}""")


def care_intelligence(signals: dict, journey: str) -> dict:
    return claude(f"""You are the Care Intelligence step of SEENDO.
Match the person's usable signals with what each business can really do (its care capabilities and limits).
Propose 3-6 tiny, feasible, low-cost, non-intrusive touches per business. Be concrete and local, the way a
thoughtful staff member who knew the guest would act. Then run the "How do you know that?" test on your own
ideas and move every creepy, private or showy one to "rejected" with the reason. Include at least 3 rejected.
Visibility: "silent" (guest won't notice it is targeted), "subtle" (looks like attentive staff), "explicit" (needs opt-in).
{RULES}
Reply with JSON only:
{{"businesses": [{{"name": str, "can_change": str, "limits": str,
   "touches": [{{"id": str, "touch": str, "signals": [str], "cost_eur": number, "visibility": str}}]}}],
  "rejected": [{{"idea": str, "reason": str}}]}}

SIGNALS:
{json.dumps(signals, ensure_ascii=False)}

JOURNEY AND BUSINESSES:
{journey}""")


VIS = {"silent": "🟢 silent", "subtle": "🟡 subtle", "explicit": "🔵 explicit"}
USE = {"yes": "✅", "conditional": "⚠️", "no": "❌"}


def render(name: str, sig: dict, care: dict) -> str:
    md = [f"# SEENDO output: {name}\n", "## Step 1: Social Signals (public only)\n",
          "| # | Signal | Public source | Confidence | Usable? |", "|---|---|---|---|---|"]
    for s in sig["signals"]:
        use = USE.get(s["usable"].split()[0].lower().strip(":,"), s["usable"])
        md.append(f"| {s['id']} | {s['signal']} | {s['source']} | {s['confidence']} | {use} {s.get('note', '')} |")
    md += [f"\n**Persona in one sentence:** {sig['persona']}\n", "## Step 2: Care Capabilities\n",
           "| Business | What it can change | Limits |", "|---|---|---|"]
    md += [f"| {b['name']} | {b['can_change']} | {b['limits']} |" for b in care["businesses"]]
    md.append("\n## Step 3: Care Intelligence → Human Gestures\n")
    for b in care["businesses"]:
        md += [f"### {b['name']}\n", "| ID | Touch | Why (signal) | Cost | Visibility |", "|---|---|---|---|---|"]
        md += [f"| {t['id']} | {t['touch']} | {', '.join(t['signals'])} | €{t['cost_eur']:g} | {VIS.get(t['visibility'], t['visibility'])} |"
               for t in b["touches"]]
        md.append("")
    md += ["## Rejected by the guardrail (\"How do you know that?\")\n"]
    md += [f"- ❌ {r['idea'].rstrip('.')}: {r['reason']}" for r in care["rejected"]]
    return "\n".join(md) + "\n"


def main(folder: str) -> None:
    d = Path(folder)
    profile = (d / "input" / "profile.md").read_text(encoding="utf-8")
    journey = (d / "input" / "journey.md").read_text(encoding="utf-8")
    print("1/2 Social Signals ...", flush=True)
    sig = social_signals(profile)
    print("2/2 Care Intelligence ...", flush=True)
    care = care_intelligence(sig, journey)
    (d / "output.json").write_text(json.dumps({"signals": sig, "care": care}, ensure_ascii=False, indent=2), encoding="utf-8")
    (d / "output.md").write_text(render(d.name, sig, care), encoding="utf-8")
    print(f"Done: {d / 'output.md'}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "examples/02-lisbon")
