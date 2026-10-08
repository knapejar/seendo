"""Bundle examples/*/input + output.json into docs/data.js for the GitHub Pages demo."""
import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
TITLES = {
    "01-krakow": ("Jarda → Kraków", "Real person (team member), own public profiles. The case from the video."),
    "02-lisbon": ("Marta → Lisbon", "Fictional persona. Raw output of seendo.py."),
    "03-errands": ("Tomáš · Saturday errands in Brno", "Fictional persona. Raw output of seendo.py. No travel at all."),
    "04-vienna-move": ("Ama · moving into a Vienna flat", "Fictional persona. Raw output of seendo.py. Movers, fibre technician, locksmith, market stall."),
    "05-budapest-wednesday": ("Margit, 72 · a Wednesday in Budapest", "Fictional persona. Raw output of seendo.py. Library, pharmacy, new hairdresser, thermal bath."),
}
cases = []
for d in sorted((root / "examples").iterdir()):
    title, note = TITLES[d.name]
    cases.append({
        "id": d.name, "title": title, "note": note,
        "profile": (d / "input/profile.md").read_text(encoding="utf-8"),
        "journey": (d / "input/journey.md").read_text(encoding="utf-8"),
        **json.loads((d / "output.json").read_text(encoding="utf-8")),
    })
(root / "docs/data.js").write_text("window.SEENDO_CASES = " + json.dumps(cases, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
print(f"{len(cases)} cases -> docs/data.js")
