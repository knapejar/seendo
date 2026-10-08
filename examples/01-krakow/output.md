# SEENDO output: 01-krakow

> This is the run the demo video is built on. Jarda is a real person (a team member) and these are his own public profiles.

## Step 1: Social Signals (public only)

| # | Signal | Public source | Confidence | Usable? |
|---|---|---|---|---|
| S1 | Developer (Java, AI, agentic automation), works at esgrovia | LinkedIn profile | high | ✅ |
| S2 | Built the game **Groundbound** with Claude over a weekend two days ago; studies Computer Games at FEL CTU | LinkedIn post, public FB group post | high | ✅ |
| S3 | Mountains: Dachstein, Krkonoše, rocky summits, 360° "little planet" photos | Instagram (public) | high | ✅ |
| S4 | Skiing (St. Anton 2026, France 2025) | Instagram | high | ✅ (not very relevant in October) |
| S5 | Bike touring with panniers (Denmark 2025) | Instagram | high | ✅ |
| S6 | Robotics: MRS Summer School 2026, ROS, Arduino | Instagram, LinkedIn | high | ✅ |
| S7 | Values: education, science and technology | LinkedIn "Causes" | high | ✅ |
| S8 | Has a German shepherd | Instagram (public photos) | high | ⚠️ only if the dog travels (the business knows from the booking) |
| S9 | Cipher games and city games, guitar and jams, drones/FPV | Facebook events and groups | medium | ⚠️ visibility unverified, use only silently |
| S10 | Founder of Selevo (e-shop personalisation), exchange in Texas | LinkedIn | high | ✅ context only, not for a touch |
| ✗ | Phone, e-mails, birthday, home town | Facebook "only me" | | ❌ never |
| ✗ | Partner, sibling (inferred from IG collaborations and comments) | inferred | | ❌ never |

**Persona in one sentence:** an engineer who loves building things (robots, games, AI), recharges in the mountains and on the bike, and shoots everything with a 360° camera.

## Step 2: Care Capabilities

| Business | What it can change | Limits |
|---|---|---|
| Train | seat choice, drink from the steward, printed/digital "reading for the journey", a note from the steward | no expensive gifts, timetable and carriage are fixed |
| Hotel | room choice, welcome card, reception tips, breakfast time and form, partner bike rental | room standard stays, no rebuilding the room for a guest |
| Tour | emphasis and order of stops, the stories the guide tells, pace, closing tip | route and price stay, the group is shared |
| Restaurant | table, dish recommendation, a small tasting on the house, a tip for the evening | menu is fixed, care budget about €2–3 |

## Step 3: Care Intelligence → Human Gestures

### 🚆 Train Prague → Kraków

| ID | Touch | Why (signal) | Cost | Visibility |
|---|---|---|---|---|
| V1 | Table seat with a socket in a quiet carriage, away from the doors | S1: 7 h on the train, he will probably work | €0 | 🟢 silent |
| V2 | Steward offers coffee right after Ostrava, where most people's journey "breaks" | S1 | €0 (coffee included) | 🟢 silent |
| V3 | **Cipher on the napkin:** the coffee comes with a card holding a short cipher. The answer is a Kraków tip ("Plac Nowy, zapiekanka after midnight") | S9 cipher games, S2 gamer | €0.10 | 🟡 subtle |
| V4 | Top of the digital "reading for the journey": an article on Kraków's game-dev scene (one of the hubs of Polish studios, e.g. Bloober Team) | S2 | €0 | 🟢 silent |
| V5 | Short note from the operator: "In 7 hours you could build a game, they say. Good luck with Groundbound!" | S2 (public post) | €0 | 🔵 explicit |

### 🏨 Hotel in Kazimierz

| ID | Touch | Why (signal) | Cost | Visibility |
|---|---|---|---|---|
| H1 | Room with a proper desk and chair, higher floor, facing the courtyard | S1 | €0 | 🟢 silent |
| H2 | **Handwritten welcome card with 3 tips**, not a brochure: (1) Kościuszko Mound at sunrise, on clear mornings you can see the Tatras, (2) the cycle path along the Vistula to Tyniec Abbey, about 12 km and flat, (3) Plac Nowy in the evening | S3, S5 | €0.20 | 🟡 subtle |
| H3 | Reception offers a **breakfast to go** on Friday morning if the guest mentions the sunrise | S3 | €2 | 🟡 subtle |
| H4 | Discount at the partner bike rental, with a pannier and a phone mount available | S5 (Denmark with panniers) | €0 (commission) | 🟢 silent |
| H5 | Note on the card: "best panorama spot: the rooftop / Town Hall Tower" | S3 (360° photos) | €0 | 🟢 silent |
| H6 | If the booking includes a dog: room near the lift to the park, a bowl and a map of dog zones | S8 + booking data | €1 | 🟡 subtle |
| H7 | Slip with the no-fly zones over the centre and the DroneRadar app, "in case you brought a drone" | S9 drones | €0 | 🟢 silent (no drone, no harm) |

### 🗺️ Old Town tour

The route stays the same (Rynek → Cloth Hall → Collegium Maius → Wawel). The guide only knows where to put the emphasis.

| ID | Touch | Why (signal) | Cost | Visibility |
|---|---|---|---|---|
| T1 | At the Wawel Dragon, tells the legend as **Kraków's first hack**: the cobbler's apprentice Skuba stuffed a sheep with sulphur. Then shows how the bronze dragon's gas burner works | S1, S6 | €0 | 🟢 silent |
| T2 | More time at the astronomical instruments in Collegium Maius and Copernicus, who studied there | S7 science | €0 | 🟢 silent |
| T3 | On the Rynek: "Stand in the middle, this is where the best 360° shot is, I'll hold the camera" | S3 | €0 | 🟡 subtle |
| T4 | Instead of a generic "enjoy the city", one tip: Nowa Huta as a socialist urban-planning experiment (for an engineer and a Cities: Skylines player) | S1, FB interests | €0 | 🟢 silent |
| T5 | View south from Wawel: "On clear days you can see the Tatras on the horizon from here" | S3 | €0 | 🟢 silent |

### 🍽️ Lunch at the restaurant

| ID | Touch | Why (signal) | Cost | Visibility |
|---|---|---|---|---|
| R1 | Window table with a view, not by the kitchen | general | €0 | 🟢 silent |
| R2 | The waiter recommends a highlander dish and brings a **free taste of oscypek with cranberries** with the coffee: "Smoked sheep cheese from the Tatras, in case you ever head there" | S3 mountains | €2 | 🟡 subtle |
| R3 | With the bill, a card with an evening tip: open mic / jam in Kazimierz | S9 music | €0.10 | 🟢 silent |
| R4 | If he comes with the dog: a terrace seat and a bowl of water without asking | S8 | €0 | 🟡 subtle |
| R5 | Thank-you on the receipt: "Enjoy your meal, and good luck with the next build" | S1 | €0 | 🔵 explicit |

## Rejected by the guardrail ("How do you know that?")

- ❌ "Welcome, Jarda, a room for two like last time with [partner]?": a private relationship inferred from other people's accounts.
- ❌ A birthday cake: the birthday is an "only me" field, and probably wrong anyway.
- ❌ German shepherd bedsheets, his favourite band playing in the room: too intimate and too showy. Caring, not creepy.
- ❌ "Congratulations on 2nd place in Můj první milion": public, but unrelated to the trip and feels like surveillance.
- ❌ Anything that requires mentioning his home town, school or employer without a reason.
