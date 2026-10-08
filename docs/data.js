window.SEENDO_CASES = [
 {
  "id": "01-krakow",
  "title": "Jarda → Kraków",
  "note": "Real person (team member), own public profiles. The case from the video.",
  "profile": "# Public profile notes: Jaroslav \"Jarda\" Knápek\n\nCollected from his own public profiles (Facebook, Instagram @knaapek, LinkedIn), Oct 2026.\nContact details, birthday and home town are visible on Facebook only to the owner; they are listed here as \"owner-only\" with values removed.\n\n## LinkedIn (public)\n- Developer at esgrovia (Prague). 4+ years of enterprise Java, now moving to AI and agentic automation.\n- Studies Open Informatics at FEL CTU Prague (incl. the Computer Games course).\n- Post (Oct 2026): built the game **Groundbound** (groundbound.fun) over one weekend with Claude. 47 reactions, ~3,200 views.\n- 2025: co-founded **Selevo**, e-shop personalisation. 2nd place in \"Můj první milion\".\n- Causes: education, science and technology.\n- Skills: Java, Python, ROS, Arduino, Fusion 360, 3D printing.\n\n## Instagram (public, 17 posts)\n- Mountains everywhere: Dachstein / Hoher Gjaidstein (7/2024), Krkonoše and Sněžka (7/2025), rocky summits.\n- 360° \"little planet\" photos.\n- Skiing: France (2/2025), St. Anton am Arlberg (2/2026).\n- Bike touring with panniers across Denmark (7/2025).\n- Robotics: MRS Summer School 2026.\n- Black German shepherd in many photos.\n- Tagged collaborations with other accounts (relationships could be inferred from them).\n\n## Facebook\n- Public post in a group about Groundbound.\n- Events and groups (visibility not verified): cipher games and city games (Dejvická šifrovačka, Gangy Práglu), guitar jams, FPV drones (Drone Builders Club), Cities: Skylines.\n- Owner-only: phone number, two e-mail addresses, birthday, home town.\n",
  "journey": "# Journey: Prague → Kraków, Thu 15 Oct 2026\n\nDirect train Prague → Kraków (~7 h), three nights in a hotel in Kazimierz, Friday guided tour of the Old Town, Saturday lunch in a restaurant.\n\n## Train (rail operator)\n- Can change: seat choice, drink from the steward, printed/digital \"reading for the journey\", a note from the steward.\n- Limits: no expensive gifts; timetable and carriage are fixed.\n\n## Hotel in Kazimierz\n- Can change: room choice, welcome card, reception tips, breakfast time and form, partner bike rental.\n- Limits: room standard stays; no rebuilding the room for a guest.\n\n## Old Town guided tour\n- Can change: emphasis at stops (Rynek → Cloth Hall → Collegium Maius → Wawel), which stories the guide tells, pace, closing tip.\n- Limits: route and price stay; the group is shared.\n\n## Restaurant (Saturday lunch)\n- Can change: table, dish recommendation, a small tasting on the house, a tip for the evening.\n- Limits: menu is fixed; care budget about €2–3.\n",
  "signals": {
   "persona": "an engineer who loves building things (robots, games, AI), recharges in the mountains and on the bike, and shoots everything with a 360° camera.",
   "signals": [
    {
     "id": "S1",
     "signal": "Developer (Java, AI, agentic automation), works at esgrovia",
     "source": "LinkedIn profile",
     "confidence": "high",
     "usable": "yes",
     "note": ""
    },
    {
     "id": "S2",
     "signal": "Built the game Groundbound with Claude over a weekend two days ago; studies Computer Games at FEL CTU",
     "source": "LinkedIn post, public FB group post",
     "confidence": "high",
     "usable": "yes",
     "note": ""
    },
    {
     "id": "S3",
     "signal": "Mountains: Dachstein, Krkonoše, rocky summits, 360° \"little planet\" photos",
     "source": "Instagram (public)",
     "confidence": "high",
     "usable": "yes",
     "note": ""
    },
    {
     "id": "S4",
     "signal": "Skiing (St. Anton 2026, France 2025)",
     "source": "Instagram",
     "confidence": "high",
     "usable": "yes",
     "note": "not very relevant in October"
    },
    {
     "id": "S5",
     "signal": "Bike touring with panniers (Denmark 2025)",
     "source": "Instagram",
     "confidence": "high",
     "usable": "yes",
     "note": ""
    },
    {
     "id": "S6",
     "signal": "Robotics: MRS Summer School 2026, ROS, Arduino",
     "source": "Instagram, LinkedIn",
     "confidence": "high",
     "usable": "yes",
     "note": ""
    },
    {
     "id": "S7",
     "signal": "Values: education, science and technology",
     "source": "LinkedIn \"Causes\"",
     "confidence": "high",
     "usable": "yes",
     "note": ""
    },
    {
     "id": "S8",
     "signal": "Has a German shepherd",
     "source": "Instagram (public photos)",
     "confidence": "high",
     "usable": "conditional",
     "note": "only if the dog travels (the business knows from the booking"
    },
    {
     "id": "S9",
     "signal": "Cipher games and city games, guitar and jams, drones/FPV",
     "source": "Facebook events and groups",
     "confidence": "medium",
     "usable": "conditional",
     "note": "visibility unverified, use only silently"
    },
    {
     "id": "S10",
     "signal": "Founder of Selevo (e-shop personalisation), exchange in Texas",
     "source": "LinkedIn",
     "confidence": "high",
     "usable": "yes",
     "note": "context only, not for a touch"
    },
    {
     "id": "✗",
     "signal": "Phone, e-mails, birthday, home town",
     "source": "Facebook \"only me\"",
     "confidence": "",
     "usable": "no",
     "note": "never"
    },
    {
     "id": "✗",
     "signal": "Partner, sibling (inferred from IG collaborations and comments)",
     "source": "inferred",
     "confidence": "",
     "usable": "no",
     "note": "never"
    }
   ]
  },
  "care": {
   "businesses": [
    {
     "name": "🚆 Train Prague → Kraków",
     "can_change": "seat choice, drink from the steward, printed/digital \"reading for the journey\", a note from the steward",
     "limits": "no expensive gifts, timetable and carriage are fixed",
     "touches": [
      {
       "id": "V1",
       "touch": "Table seat with a socket in a quiet carriage, away from the doors",
       "signals": [
        "S1: 7 h on the train, he will probably work"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "V2",
       "touch": "Steward offers coffee right after Ostrava, where most people's journey \"breaks\"",
       "signals": [
        "S1"
       ],
       "cost_eur": 0.0,
       "cost_note": "coffee included",
       "visibility": "silent"
      },
      {
       "id": "V3",
       "touch": "Cipher on the napkin: the coffee comes with a card holding a short cipher. The answer is a Kraków tip (\"Plac Nowy, zapiekanka after midnight\")",
       "signals": [
        "S9 cipher games, S2 gamer"
       ],
       "cost_eur": 0.1,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "V4",
       "touch": "Top of the digital \"reading for the journey\": an article on Kraków's game-dev scene (one of the hubs of Polish studios, e.g. Bloober Team)",
       "signals": [
        "S2"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "V5",
       "touch": "Short note from the operator: \"In 7 hours you could build a game, they say. Good luck with Groundbound!\"",
       "signals": [
        "S2 (public post)"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "explicit"
      }
     ]
    },
    {
     "name": "🏨 Hotel in Kazimierz",
     "can_change": "room choice, welcome card, reception tips, breakfast time and form, partner bike rental",
     "limits": "room standard stays, no rebuilding the room for a guest",
     "touches": [
      {
       "id": "H1",
       "touch": "Room with a proper desk and chair, higher floor, facing the courtyard",
       "signals": [
        "S1"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "H2",
       "touch": "Handwritten welcome card with 3 tips, not a brochure: (1) Kościuszko Mound at sunrise, on clear mornings you can see the Tatras, (2) the cycle path along the Vistula to Tyniec Abbey, about 12 km and flat, (3) Plac Nowy in the evening",
       "signals": [
        "S3, S5"
       ],
       "cost_eur": 0.2,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "H3",
       "touch": "Reception offers a breakfast to go on Friday morning if the guest mentions the sunrise",
       "signals": [
        "S3"
       ],
       "cost_eur": 2.0,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "H4",
       "touch": "Discount at the partner bike rental, with a pannier and a phone mount available",
       "signals": [
        "S5 (Denmark with panniers)"
       ],
       "cost_eur": 0.0,
       "cost_note": "commission",
       "visibility": "silent"
      },
      {
       "id": "H5",
       "touch": "Note on the card: \"best panorama spot: the rooftop / Town Hall Tower\"",
       "signals": [
        "S3 (360° photos)"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "H6",
       "touch": "If the booking includes a dog: room near the lift to the park, a bowl and a map of dog zones",
       "signals": [
        "S8 + booking data"
       ],
       "cost_eur": 1.0,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "H7",
       "touch": "Slip with the no-fly zones over the centre and the DroneRadar app, \"in case you brought a drone\"",
       "signals": [
        "S9 drones"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      }
     ]
    },
    {
     "name": "🗺️ Old Town tour",
     "can_change": "emphasis and order of stops, the stories the guide tells, pace, closing tip",
     "limits": "route and price stay, the group is shared",
     "touches": [
      {
       "id": "T1",
       "touch": "At the Wawel Dragon, tells the legend as Kraków's first hack: the cobbler's apprentice Skuba stuffed a sheep with sulphur. Then shows how the bronze dragon's gas burner works",
       "signals": [
        "S1, S6"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "T2",
       "touch": "More time at the astronomical instruments in Collegium Maius and Copernicus, who studied there",
       "signals": [
        "S7 science"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "T3",
       "touch": "On the Rynek: \"Stand in the middle, this is where the best 360° shot is, I'll hold the camera\"",
       "signals": [
        "S3"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "T4",
       "touch": "Instead of a generic \"enjoy the city\", one tip: Nowa Huta as a socialist urban-planning experiment (for an engineer and a Cities: Skylines player)",
       "signals": [
        "S1, FB interests"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "T5",
       "touch": "View south from Wawel: \"On clear days you can see the Tatras on the horizon from here\"",
       "signals": [
        "S3"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      }
     ]
    },
    {
     "name": "🍽️ Lunch at the restaurant",
     "can_change": "table, dish recommendation, a small tasting on the house, a tip for the evening",
     "limits": "menu is fixed, care budget about €2–3",
     "touches": [
      {
       "id": "R1",
       "touch": "Window table with a view, not by the kitchen",
       "signals": [
        "general"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "R2",
       "touch": "The waiter recommends a highlander dish and brings a free taste of oscypek with cranberries with the coffee: \"Smoked sheep cheese from the Tatras, in case you ever head there\"",
       "signals": [
        "S3 mountains"
       ],
       "cost_eur": 2.0,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "R3",
       "touch": "With the bill, a card with an evening tip: open mic / jam in Kazimierz",
       "signals": [
        "S9 music"
       ],
       "cost_eur": 0.1,
       "cost_note": "",
       "visibility": "silent"
      },
      {
       "id": "R4",
       "touch": "If he comes with the dog: a terrace seat and a bowl of water without asking",
       "signals": [
        "S8"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "subtle"
      },
      {
       "id": "R5",
       "touch": "Thank-you on the receipt: \"Enjoy your meal, and good luck with the next build\"",
       "signals": [
        "S1"
       ],
       "cost_eur": 0.0,
       "cost_note": "",
       "visibility": "explicit"
      }
     ]
    }
   ],
   "rejected": [
    {
     "idea": "\"Welcome, Jarda, a room for two like last time with [partner]?\"",
     "reason": "a private relationship inferred from other people's accounts."
    },
    {
     "idea": "A birthday cake",
     "reason": "the birthday is an \"only me\" field, and probably wrong anyway."
    },
    {
     "idea": "German shepherd bedsheets, his favourite band playing in the room",
     "reason": "too intimate and too showy. Caring, not creepy."
    },
    {
     "idea": "\"Congratulations on 2nd place in Můj první milion\"",
     "reason": "public, but unrelated to the trip and feels like surveillance."
    },
    {
     "idea": "Anything that requires mentioning his home town, school or employer without a reason.",
     "reason": ""
    }
   ]
  }
 },
 {
  "id": "02-lisbon",
  "title": "Marta → Lisbon",
  "note": "Fictional persona. Raw output of seendo.py.",
  "profile": "# Public profile notes: Marta (fictional persona for the demo)\n\n## Instagram (public)\n- Runs a lot: Prague Half Marathon 2025 and 2026 finish-line photos, Strava screenshots of 6 a.m. runs.\n- Shoots film: Pentax K1000 posts tagged #35mm #portra400.\n- Paediatric nurse (bio: \"night shifts & sunrise runs\").\n- Posts about learning Portuguese on Duolingo (412-day streak).\n\n## LinkedIn (public)\n- Paediatric nurse, Motol University Hospital. Volunteers with a children's hospital clown charity.\n\n## Facebook\n- Owner-only: phone, e-mail, birthday.\n- Public check-in at a vegan bistro \"every Sunday\".\n- Comments by another account suggest she recently went through a breakup (inferred, not stated by her).\n",
  "journey": "# Journey: Prague → Lisbon, 4 nights, November\n\n## Airline\n- Can change: seat (window/aisle), meal preference prompt, a crew note, in-flight magazine page.\n- Limits: no upgrades for free, fare class fixed.\n\n## Guesthouse in Alfama\n- Can change: room on a quiet side, welcome card, breakfast time, local tips, loaned items (map, umbrella).\n- Limits: small family business, budget for care ~€3.\n\n## Surf school (one beginner lesson)\n- Can change: instructor pairing, lesson time, a small photo of the lesson, closing tip.\n- Limits: group lesson, price fixed.\n\n## Café near Miradouro da Graça\n- Can change: table, recommendation, a small taste on the house, chat with the barista.\n- Limits: menu fixed, care budget ~€2.\n",
  "signals": {
   "persona": "An early-rising paediatric nurse and keen runner who shoots 35mm film, is steadily learning Portuguese, and likes calm plant-based Sundays.",
   "signals": [
    {
     "id": "S1",
     "signal": "Keen distance runner who trains early in the morning (half-marathon finisher, 6 a.m. runs)",
     "source": "Instagram (public): Prague Half Marathon 2025/2026 photos, Strava screenshots",
     "confidence": "high",
     "usable": "yes",
     "note": "Silent touches: a printed local running-route map at check-in, early grab-and-go breakfast or a water bottle on request, a quiet room away from the lift. Many hotels give these to all guests, so nothing feels targeted. Never mention her races or Strava."
    },
    {
     "id": "S2",
     "signal": "Shoots film (Pentax K1000, Portra 400)",
     "source": "Instagram (public): #35mm #portra400 posts",
     "confidence": "high",
     "usable": "conditional",
     "note": "Only generic, silent touches: a 'best sunrise and golden-hour spots nearby' card in the room (it fits with S1). Do not give her film or anything camera-specific unless she brings up photography herself, because that would fail the 'How do you know that?' test."
    },
    {
     "id": "S3",
     "signal": "Learning Portuguese (long Duolingo streak)",
     "source": "Instagram (public): Duolingo posts, 412-day streak",
     "confidence": "high",
     "usable": "conditional",
     "note": "Only if a natural hook exists, e.g. pastel de nata on the breakfast buffet. Never greet her in Portuguese or mention it unless she says it first or has opted in."
    },
    {
     "id": "S4",
     "signal": "Prefers plant-based food (regular at a vegan bistro)",
     "source": "Facebook (public): repeated check-in at a vegan bistro 'every Sunday'",
     "confidence": "medium",
     "usable": "yes",
     "note": "Silent: make sure clearly labelled vegan options are on the menu or breakfast offer, and staff can point to them if asked. Never mention the bistro or her Sunday routine, because that is a location pattern and would feel like being watched."
    },
    {
     "id": "S5",
     "signal": "Works night shifts as a paediatric nurse",
     "source": "Instagram bio (public): 'night shifts & sunrise runs'; LinkedIn (public): paediatric nurse",
     "confidence": "high",
     "usable": "conditional",
     "note": "Use only as a generic comfort touch: proactively offer late checkout or blackout curtains / an eye mask, as you would to any tired guest. Never mention her job, and never name her employer (Motol University Hospital) to staff or to her."
    },
    {
     "id": "S6",
     "signal": "Volunteers with a children's hospital clown charity",
     "source": "LinkedIn (public)",
     "confidence": "high",
     "usable": "conditional",
     "note": "Use only as background tone for staff (warm, playful service is welcome). No charity-related gestures or mentions without opt-in, because that would show we read her LinkedIn."
    },
    {
     "id": "S7",
     "signal": "Phone number, e-mail, birthday",
     "source": "Facebook (owner-only)",
     "confidence": "high",
     "usable": "no",
     "note": "DISCARDED: owner-only, contact details and birthday. Do not store or use."
    },
    {
     "id": "S8",
     "signal": "Possible recent breakup",
     "source": "Facebook: comments by another account (inferred, not stated by her)",
     "confidence": "low",
     "usable": "no",
     "note": "DISCARDED: a relationship inferred from someone else's account, and sensitive. Do not store it, act on it, or pass it to staff."
    }
   ]
  },
  "care": {
   "businesses": [
    {
     "name": "Airline (Prague → Lisbon)",
     "can_change": "Seat (window/aisle), meal preference prompt, a crew note, in-flight magazine page.",
     "limits": "No free upgrades; fare class fixed.",
     "touches": [
      {
       "id": "A1",
       "touch": "If a seat is free at check-in, assign a window seat on the side that gets the morning light. Only the seat assignment changes.",
       "signals": [
        "S1",
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "A2",
       "touch": "Make sure the standard meal-preference prompt clearly lists a vegan/plant-based option, so the guest can choose it without searching.",
       "signals": [
        "S4"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "A3",
       "touch": "Generic crew note: 'offer extra water and don't wake for service if asleep'. Crew can say this to any tired passenger, and it says nothing about who the guest is.",
       "signals": [
        "S1",
        "S5"
       ],
       "cost_eur": 0.5,
       "visibility": "silent"
      }
     ]
    },
    {
     "name": "Guesthouse in Alfama",
     "can_change": "Room on a quiet side, welcome card, breakfast time, local tips, loaned items (map, umbrella).",
     "limits": "Small family business; care budget ~€3.",
     "touches": [
      {
       "id": "G1",
       "touch": "Give the room on the quiet courtyard side, away from the street and stairs, with blackout curtains drawn at turn-down.",
       "signals": [
        "S1",
        "S5"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "G2",
       "touch": "At check-in, hand over a printed map of an early-morning riverside loop (Alfama → Ribeira das Naus → Belém direction) along with the usual town map, the same way it would go to any guest.",
       "signals": [
        "S1"
       ],
       "cost_eur": 0.2,
       "visibility": "silent"
      },
      {
       "id": "G3",
       "touch": "On the welcome card, list three sunrise and golden-hour viewpoints within walking distance (Senhora do Monte, Graça, Portas do Sol) as general tips.",
       "signals": [
        "S1",
        "S2"
       ],
       "cost_eur": 0.1,
       "visibility": "silent"
      },
      {
       "id": "G4",
       "touch": "Offer an early grab-and-go breakfast bag (fruit, bread, water) for guests heading out before breakfast starts, and include a clearly labelled vegan option in it and on the buffet.",
       "signals": [
        "S1",
        "S4"
       ],
       "cost_eur": 2,
       "visibility": "subtle"
      },
      {
       "id": "G5",
       "touch": "Put a pastel de nata on the breakfast table, as a local treat everyone gets.",
       "signals": [
        "S3"
       ],
       "cost_eur": 0.8,
       "visibility": "silent"
      },
      {
       "id": "G6",
       "touch": "On the last day, offer late checkout if the room is free, phrased as 'if it helps after your trip'. Many guesthouses offer this anyway.",
       "signals": [
        "S5"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Surf school (one beginner lesson)",
     "can_change": "Instructor pairing, lesson time, a small photo of the lesson, closing tip.",
     "limits": "Group lesson; price fixed.",
     "touches": [
      {
       "id": "SF1",
       "touch": "When booking, offer the earliest group slot first ('the morning slot is usually calmer'), the same way it would be offered to anyone.",
       "signals": [
        "S1"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "SF2",
       "touch": "Pair the guest with the instructor known for a warm, playful, encouraging style.",
       "signals": [
        "S6"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "SF3",
       "touch": "Ask everyone in the group the same question: 'Would you like a photo of your first wave?' Take and send the photo only to people who say yes.",
       "signals": [
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "explicit"
      },
      {
       "id": "SF4",
       "touch": "Closing tip: name one nearby beach café that has good plant-based options and the nicest late-afternoon light, given as a general local recommendation.",
       "signals": [
        "S4",
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Café near Miradouro da Graça",
     "can_change": "Table, recommendation, a small taste on the house, chat with the barista.",
     "limits": "Menu fixed; care budget ~€2.",
     "touches": [
      {
       "id": "C1",
       "touch": "If it's free, seat the guest at the window or terrace table facing the view.",
       "signals": [
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "C2",
       "touch": "When recommending, mention the oat-milk option and the vegan pastry among the usual favourites.",
       "signals": [
        "S4"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "C3",
       "touch": "Offer a small taste of the house's local pastry (vegan if available), the way it would be offered to a first-time visitor.",
       "signals": [
        "S3",
        "S4"
       ],
       "cost_eur": 1.5,
       "visibility": "subtle"
      },
      {
       "id": "C4",
       "touch": "Reactive only: if the guest tries ordering in Portuguese, the barista answers slowly and kindly in Portuguese and doesn't switch to English. If the guest starts in English, stay in English.",
       "signals": [
        "S3"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    }
   ],
   "rejected": [
    {
     "idea": "Leave a roll of Portra 400 in the room, or have the surf school shoot the lesson on film.",
     "reason": "Fails 'How do you know that?': it is camera-specific and points straight at the guest's Instagram. S2 is conditional and allows generic touches only."
    },
    {
     "idea": "Greet the guest in Portuguese at check-in or praise the Duolingo streak.",
     "reason": "Shows we read the guest's posts. S3 forbids starting in Portuguese unless the guest does first or has opted in."
    },
    {
     "idea": "Welcome card saying 'Congrats on the Prague Half Marathon, here's a running map!'",
     "reason": "Mentions a race the guest posted about and reveals profiling. The running map has to come without any personal reference."
    },
    {
     "idea": "Crew note or welcome card saying 'Thank you for your work as a nurse' or 'Rest after your night shifts'.",
     "reason": "Mentions the guest's job and employer context, which S5 forbids, and passes a profile to staff. Comfort touches must stay generic."
    },
    {
     "idea": "Red clown nose on the pillow or a donation to a children's hospital charity in the guest's name.",
     "reason": "Showy and reveals we read the guest's LinkedIn. S6 is background tone only unless the guest opts in."
    },
    {
     "idea": "Suggest a vegan restaurant 'like your Sunday bistro', or set up a Sunday plant-based brunch.",
     "reason": "Uses a location and routine pattern (S4 note), so the guest would feel watched. Only neutral vegan options are allowed."
    },
    {
     "idea": "Birthday cake or a message if the stay overlaps the guest's birthday.",
     "reason": "The birthday comes from owner-only data (S7), which is discarded and must not be used."
    },
    {
     "idea": "Seat the guest away from couples, or add a 'treat yourself' solo-traveller comfort gesture.",
     "reason": "Based on a relationship inferred from someone else's account (S8). That signal is discarded, sensitive and low-confidence."
    },
    {
     "idea": "Barista says 'perfect light for your camera'.",
     "reason": "Assumes the guest does photography before the guest has said so, which fails 'How do you know that?'. The barista can talk about light only if the guest asks."
    }
   ]
  }
 },
 {
  "id": "03-errands",
  "title": "Tomáš · Saturday errands in Brno",
  "note": "Fictional persona. Raw output of seendo.py. No travel at all.",
  "profile": "# Public profile notes: Tomáš (fictional persona for the demo)\n\n## Instagram (public)\n- Board-game designer by hobby: prototypes of his game \"Hedgehog Express\" on the kitchen table, Kickstarter link in bio.\n- New dad: one public photo of a pram on a forest path (\"week 6, still no sleep\").\n- Birdwatching from the balcony: photos of a great tit nest box he built.\n\n## LinkedIn (public)\n- Logistics planner at a regional distribution company in Brno.\n\n## Facebook\n- Owner-only: phone, e-mail, address.\n- Group membership (visibility unverified): \"Brno board-game nights\", \"Cyklo Brno\".\n- Friends' comments mention his wife's postnatal health issues (other people's posts, private matter).\n",
  "journey": "# Journey: one Saturday of errands in Brno (no travel)\n\n## Car service (annual inspection)\n- Can change: drop-off time, waiting-room setup, a short note on the invoice, which small fixes are mentioned.\n- Limits: price list fixed; no free repairs.\n\n## Optician (picking up new glasses)\n- Can change: fitting time, small accessories (cloth, case), a tip, staff chat.\n- Limits: care budget ~€3.\n\n## Bakery\n- Can change: what's offered to taste, packing, a note in the bag.\n- Limits: care budget ~€1.\n",
  "signals": {
   "persona": "Tomáš is a Brno logistics planner, a hands-on maker who designs his own board game, and a balcony birdwatcher who is currently short on sleep as a new father.",
   "signals": [
    {
     "id": "S1",
     "signal": "Board-game designer (hobby); prototyping his own game 'Hedgehog Express'",
     "source": "Instagram (public): prototype photos, Kickstarter link in bio",
     "confidence": "high",
     "usable": "yes",
     "note": "Silent touch: a well-chosen board game or card game left in the room or lounge (a few euros). Do not mention his game or Kickstarter unless he opts in; naming it fails the 'How do you know that?' test."
    },
    {
     "id": "S2",
     "signal": "Backs or runs a Kickstarter campaign for his game",
     "source": "Instagram bio link (public)",
     "confidence": "high",
     "usable": "conditional",
     "note": "Only with explicit opt-in, e.g. if he brings up the game himself. Otherwise it is an explicit mention and could feel like surveillance."
    },
    {
     "id": "S3",
     "signal": "Birdwatching; built his own great tit nest box",
     "source": "Instagram (public): balcony nest-box photos",
     "confidence": "high",
     "usable": "yes",
     "note": "Silent touch: room with a garden or tree view if available, a local bird-spotting leaflet or loaner binoculars at reception. Costs almost nothing and a wrong guess does no harm."
    },
    {
     "id": "S4",
     "signal": "Maker/DIY habit (prototypes, built nest box)",
     "source": "Instagram (public)",
     "confidence": "medium",
     "usable": "yes",
     "note": "Generic silent touch, e.g. a local craft or workshop tip in the welcome info. Low cost, low risk."
    },
    {
     "id": "S5",
     "signal": "New father with a ~6-week-old baby, sleep-deprived",
     "source": "Instagram (public): single pram photo, 'week 6, still no sleep'",
     "confidence": "high",
     "usable": "conditional",
     "note": "Use only if the booking itself shows an infant (cot request, child guest). Then offer standard family touches like a quiet room or a cot already set up. Never act on it from social media alone: family/baby context fails the 'How do you know that?' test."
    },
    {
     "id": "S6",
     "signal": "Works as a logistics planner at a regional distribution company in Brno",
     "source": "LinkedIn (public)",
     "confidence": "high",
     "usable": "no",
     "note": "This is employment data, not a passion. Using it adds no guest value and risks the guest feeling profiled. Location context is already in the booking."
    },
    {
     "id": "S7",
     "signal": "Member of 'Brno board-game nights' group",
     "source": "Facebook group membership (visibility unverified)",
     "confidence": "medium",
     "usable": "no",
     "note": "Public visibility is unverified, so it is discarded. S1 already covers the interest."
    },
    {
     "id": "S8",
     "signal": "Member of 'Cyklo Brno' cycling group",
     "source": "Facebook group membership (visibility unverified)",
     "confidence": "low",
     "usable": "no",
     "note": "Public visibility is unverified and there is no other public evidence of cycling, so it is discarded. It would become usable if he asks about bike storage or routes himself."
    },
    {
     "id": "S9",
     "signal": "Phone, e-mail, home address",
     "source": "Facebook (owner-only)",
     "confidence": "high",
     "usable": "no",
     "note": "These are owner-only contact details, discarded under the hard rules."
    },
    {
     "id": "S10",
     "signal": "Wife's postnatal health issues",
     "source": "Friends' comments on Facebook (other people's posts)",
     "confidence": "medium",
     "usable": "no",
     "note": "This is private health information about a third party, inferred from other people's accounts. Discarded entirely and never stored."
    }
   ]
  },
  "care": {
   "businesses": [
    {
     "name": "Car service (annual inspection)",
     "can_change": "Drop-off time, waiting-room setup, a short note on the invoice, which small fixes are mentioned.",
     "limits": "Price list is fixed; no free repairs.",
     "touches": [
      {
       "id": "CS1",
       "touch": "Put a small, well-made card or puzzle game (e.g. a pocket logic puzzle or a short two-player card game) on the waiting-room table next to the magazines. It stays there for every customer.",
       "signals": [
        "S1"
       ],
       "cost_eur": 3,
       "visibility": "silent"
      },
      {
       "id": "CS2",
       "touch": "Offer him the waiting-room seat by the window that looks onto the trees or yard, and keep a cheap seed feeder hanging outside that window all year so there is something to watch.",
       "signals": [
        "S3"
       ],
       "cost_eur": 2,
       "visibility": "silent"
      },
      {
       "id": "CS3",
       "touch": "Add a short, plain-language line to the invoice listing one or two things he could check or do himself (e.g. wiper blade swap, tyre pressure), shown as a simple numbered list. Keep paid small fixes to the safety-relevant ones only.",
       "signals": [
        "S4"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "CS4",
       "touch": "When booking, offer the earliest Saturday drop-off slot and a firm 'ready by' time, so the errand fits around the rest of his day. This is standard good practice and no signal is needed.",
       "signals": [],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Optician (picking up new glasses)",
     "can_change": "Fitting time, small accessories (cloth, case), a tip, staff chat.",
     "limits": "Care budget about €3.",
     "touches": [
      {
       "id": "OP1",
       "touch": "Pick the cleaning cloth from existing stock with a nature or bird print instead of the plain logo cloth. It is a free swap that he may simply enjoy.",
       "signals": [
        "S3"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "OP2",
       "touch": "During fitting, give the standard tip on using glasses with binoculars or cameras (fold down the eyecups, check field of view). Many opticians already say this. If he picks up on it, the staff member can follow his lead.",
       "signals": [
        "S3"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "OP3",
       "touch": "Add a small screwdriver and a spare nose-pad pair to the case, with a one-line note explaining how to tighten the hinge himself.",
       "signals": [
        "S4"
       ],
       "cost_eur": 2,
       "visibility": "silent"
      },
      {
       "id": "OP4",
       "touch": "Offer a short, unhurried fitting slot that he can rebook for free if the fit feels off after a few days.",
       "signals": [],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Bakery",
     "can_change": "What's offered to taste, packing, a note in the bag.",
     "limits": "Care budget about €1.",
     "touches": [
      {
       "id": "BK1",
       "touch": "Put a small printed brain-teaser or logic riddle in the bag (a rotating weekly card that every customer gets), with the answer on the back.",
       "signals": [
        "S1",
        "S4"
       ],
       "cost_eur": 0.05,
       "visibility": "silent"
      },
      {
       "id": "BK2",
       "touch": "Offer a taste of whatever new or seasonal pastry is out that day, the same way staff would for any regular.",
       "signals": [],
       "cost_eur": 0.5,
       "visibility": "subtle"
      },
      {
       "id": "BK3",
       "touch": "Pack in a sturdier bag with a fold-over top so the bread survives the rest of a day of errands in the car.",
       "signals": [],
       "cost_eur": 0.2,
       "visibility": "silent"
      }
     ]
    }
   ],
   "rejected": [
    {
     "idea": "Mention 'Hedgehog Express' or his Kickstarter at any business ('good luck with the campaign!').",
     "reason": "This fails the 'How do you know that?' test. It is an explicit mention without opt-in (S2 is conditional), so it is allowed only if he brings up the game himself."
    },
    {
     "idea": "A hedgehog-shaped roll at the bakery, or hedgehog-themed packaging.",
     "reason": "It points straight at his game. A wrong guess would look odd, and a right one would feel like surveillance. It is showy, not silent."
    },
    {
     "idea": "Congratulate him on the baby, give a baby-related freebie, or offer 'tired parent' coffee.",
     "reason": "S5 comes from social media only, and none of these businesses has a booking that shows an infant. Family context must never be acted on from social posts."
    },
    {
     "idea": "Ask after his wife or offer health-related tips.",
     "reason": "S10 is third-party health data taken from other people's posts. It is discarded entirely and must never be used or stored."
    },
    {
     "idea": "Chat with him about logistics or supply-chain work at the car service.",
     "reason": "S6 is employment data from LinkedIn and is marked unusable. It adds no guest value and amounts to profiling."
    },
    {
     "idea": "Give him a free Brno cycling route map or bike-check tips at the car service.",
     "reason": "S8 has low confidence and unverified visibility, so it is discarded. It becomes usable only if he asks himself."
    },
    {
     "idea": "Hand out a bag of bread crumbs 'for the birds' at the bakery.",
     "reason": "It is targeted and showy, and bread is bad for birds, so a thoughtful staff member would not do it."
    },
    {
     "idea": "Send a follow-up e-mail or text about birding events or game nights.",
     "reason": "It would use owner-only contact details (S9) and private group membership (S7), both of which are discarded."
    }
   ]
  }
 },
 {
  "id": "04-vienna-move",
  "title": "Ama · moving into a Vienna flat",
  "note": "Fictional persona. Raw output of seendo.py. Movers, fibre technician, locksmith, market stall.",
  "profile": "# Public profile notes: Ama (fictional persona for the demo)\n\nAma Owusu, 34. Collected from public profiles, end of Oct 2026.\n\n## LinkedIn (public)\n- Structural engineer specialising in timber buildings (CLT, cross-laminated timber). Born in Kumasi, Ghana; MSc TU Delft; five years at an engineering firm in Rotterdam.\n- Post (Sep 2026): \"New chapter: from Monday 2 November I'm joining a Vienna team working on mid-rise timber housing. First weeks in a serviced apartment, then my own place!\" 212 reactions.\n- Post (Oct 2026): photo of her Austrian Rot-Weiß-Rot Card with the caption \"Finally holding it, after 7 months of paperwork.\"\n\n## Instagram @ama.grows (public, 1.2k followers)\n- Houseplants everywhere: 40+ plants, water-propagation stations, grow lights on the shelves. Monstera, philodendrons, a fiddle-leaf fig she calls \"Kofi\".\n- Calls her big Monstera deliciosa \"my firstborn 👶🌿\" in captions.\n- Reel (Oct 2026): \"43 plants, 1,100 km, one rented car. The movers won't insure them, so I'm driving them myself. Pray for us.\" Shows plants being wrapped in newspaper.\n- Rides a heavy black Dutch \"omafiets\" everywhere; it is coming to Vienna \"in the truck, not negotiable\".\n- Cooks Ghanaian food on Sundays: jollof, light soup, kontomire stew. Caption: \"No idea where I'll find kontomire leaves in Vienna.\"\n\n## YouTube (public, a channel that isn't hers)\n- Livestreams of a Ghanaian Methodist congregation in Rotterdam; the descriptions name her as a soprano in the choir and soloist at the Christmas services.\n\n## Reddit (u/plantsandbeams)\n- Posts in r/wien: \"Where do you buy grow lights in Vienna?\" and \"Is Ottakring OK for a woman living alone?\"\n- The account never mentions her name; the same plant shelf appears in her Instagram photos.\n\n## Facebook\n- A 2023 post about her Rotterdam flat being burgled (\"I don't feel safe at home anymore\"). Deleted from her profile in 2024; a copy is still on the Wayback Machine.\n",
  "journey": "# Journey: moving into a new flat in Vienna, Fri 6 Nov 2026\n\nAma has been living in a serviced apartment since starting her job on Mon 2 Nov. Today she takes a day off to move into her own Altbau flat on the 4th floor (no lift) in Ottakring, Vienna's 16th district. The movers' truck from Rotterdam arrives at 8:00; it is about 6 °C outside. She drives the 43 plants herself in a rented car and arrives around 15:00, after the truck is unloaded. The internet is installed and the lock changed the same day, and she shops round the corner at the Brunnenmarkt.\n\nThe property manager has already turned the heating on in the empty flat for the new tenant.\n\nHouse rules of the building: no bikes in the stairwell or hallways; there is a bike room in the courtyard, opened with the building key.\n\n## Moving crew (Vienna partner of the international mover, unloading and carrying up)\n- Can change: unloading and carrying order, where furniture stands (e.g. keeping walls by the windows free), where boxes go by room label, which boxes are opened first, leaving spare boxes and tape, the company's own printed first-week checklist for anyone moving to Vienna (address registration, waste sorting, shop opening hours), which the crew lead can tick or annotate.\n- Limits: hourly rate fixed; plants excluded by contract and insurance; no furniture assembly beyond the quote; the bike can't be left in the stairwell; care budget ~€5.\n\n## Internet technician (fibre installation)\n- Can change: calling ahead within the 8–12 window, where the router goes (within reach of the socket), cable routing, a signal check in each room with a phone, advice on extenders, how the Wi-Fi and router settings are explained.\n- Limits: one-hour slot; explains the Wi-Fi and router the same way for every customer, no device-specific suggestions (smart plugs, timers, extenders for particular uses) unless the customer asks; tariff fixed; no free hardware or speed upgrades; care budget ~€2.\n\n## Locksmith (replaces the cylinder of the flat door)\n- Can change: timing, coloured key caps or tags, handing the keys to the crew lead or to the tenant, how the keys and key card are handed over, a short explanation of the lock and the building's key system, one practical tip.\n- Limits: security-certificate keys are copied only with the key card; the building key (main door, courtyard, bike room) belongs to the house's central locking system and can't be copied without the property manager's approval; no upselling; care budget ~€3.\n\n## Greengrocer stall at the Brunnenmarkt\n- Can change: advice on substitutes and how to cook them, pointing to nearby specialist shops, setting something aside or ordering it for the next market day, packing.\n- Limits: what's on the stall that day; market closed on Sundays; care budget ~€1.\n",
  "signals": {
   "persona": "Ama is a 34-year-old timber structural engineer relocating from Rotterdam to Vienna in early November 2026 to work on mid-rise timber housing, a dedicated houseplant grower who is personally driving her 43 plants across Europe, and an everyday cyclist on a heavy Dutch omafiets.",
   "signals": [
    {
     "id": "S1",
     "signal": "Professional passion for timber construction (CLT, mid-rise timber housing)",
     "source": "LinkedIn profile (public)",
     "confidence": "high",
     "usable": "yes",
     "note": "She posted this herself on her public professional profile and it is clearly about her. Referring to it does not reveal anything personal."
    },
    {
     "id": "S2",
     "signal": "Moving to Vienna and starting a new job on Monday 2 November 2026; staying in a serviced apartment first, then moving into her own place",
     "source": "LinkedIn post, Sep 2026 (public, 212 reactions)",
     "confidence": "high",
     "usable": "conditional",
     "note": "Only the general fact that she is new in Vienna is usable, through touches any newcomer could plausibly receive. Do not use the exact start date or the housing timeline to time a touch: she would ask 'How do you know that?', and it reveals her living situation."
    },
    {
     "id": "S3",
     "signal": "Holds an Austrian Rot-Weiß-Rot Card after 7 months of paperwork",
     "source": "LinkedIn post, Oct 2026 (public)",
     "confidence": "high",
     "usable": "no",
     "note": "It is public, but it reveals immigration and residence status, which is sensitive and could feel discriminatory or invasive if acted on. S2 already covers that she is a newcomer."
    },
    {
     "id": "S4",
     "signal": "Serious houseplant enthusiast: 40+ plants, water-propagation stations, grow lights; Monstera, philodendrons, a fiddle-leaf fig named 'Kofi'",
     "source": "Instagram @ama.grows (public, 1.2k followers)",
     "confidence": "high",
     "usable": "yes",
     "note": "This is her own public account, the plants are its central theme, and the interest is clearly meant seriously. It works well with silent touches because almost anyone might like a plant-related gesture, so a wrong guess costs nothing. Do not refer to the plant names in a touch."
    },
    {
     "id": "S5",
     "signal": "Calls her Monstera deliciosa 'my firstborn'",
     "source": "Instagram captions (public)",
     "confidence": "high",
     "usable": "conditional",
     "note": "This is a joke and must not be read as a fact about children. It only confirms how much she cares about her plants (see S4). Never use the wording."
    },
    {
     "id": "S6",
     "signal": "Personally driving her 43 plants 1,100 km in a rented car because movers won't insure them",
     "source": "Instagram reel, Oct 2026 (public)",
     "confidence": "high",
     "usable": "conditional",
     "note": "It strengthens S4 and suggests the plants will need recovery after the move. Use it only through silent, generic plant-friendly attention. Referring to the drive itself reveals that someone watched the reel, so that would need opt-in."
    },
    {
     "id": "S7",
     "signal": "Rides a heavy black Dutch omafiets everywhere; bringing it to Vienna",
     "source": "Instagram (public)",
     "confidence": "high",
     "usable": "yes",
     "note": "She shared this habit publicly herself. Bike-friendly attention is generic enough to stay silent, and a wrong guess does no harm."
    },
    {
     "id": "S8",
     "signal": "Cooks on Sundays and is unsure where to find specific ingredients (kontomire leaves) in Vienna",
     "source": "Instagram caption (public)",
     "confidence": "medium",
     "usable": "conditional",
     "note": "Usable only as a general interest in home cooking. Do not single her out for gestures based on ethnicity or national origin, and do not refer to the specific dishes or ingredients without opt-in. A touch aimed at her origin would feel profiled and would fail the 'How do you know that?' test."
    },
    {
     "id": "S9",
     "signal": "Born in Kumasi, Ghana; MSc from TU Delft; five years at a Rotterdam engineering firm",
     "source": "LinkedIn profile (public)",
     "confidence": "high",
     "usable": "no",
     "note": "Place of birth points to ethnic or national origin, a sensitive category, and must not drive any targeting. The education and career history add nothing beyond S1."
    },
    {
     "id": "S10",
     "signal": "Sings soprano in a church choir and was a soloist at Christmas services",
     "source": "YouTube livestreams on a congregation's channel (not her account)",
     "confidence": "medium",
     "usable": "no",
     "note": "This is someone else's data about her, not something she published herself, and it reveals her religious affiliation, a sensitive category. Discarded."
    },
    {
     "id": "S11",
     "signal": "Looking for grow lights in Vienna",
     "source": "Reddit u/plantsandbeams (r/wien)",
     "confidence": "low",
     "usable": "no",
     "note": "The account is pseudonymous and never names her. Linking it to her by matching a photo of a plant shelf is de-anonymization, and the link may be wrong. Discarded; S4 already covers the plant interest."
    },
    {
     "id": "S12",
     "signal": "Concerned about the safety of the Ottakring district for a woman living alone",
     "source": "Reddit u/plantsandbeams (r/wien)",
     "confidence": "low",
     "usable": "no",
     "note": "It comes from a pseudonymous account linked to her only by inference, and it touches on personal safety, gender and where she will live. Acting on it would feel like surveillance. Discarded."
    },
    {
     "id": "S13",
     "signal": "Rotterdam flat was burgled in 2023; she felt unsafe at home",
     "source": "Facebook post, deleted by her in 2024; copy on the Wayback Machine",
     "confidence": "high",
     "usable": "no",
     "note": "She deliberately removed this, so it is no longer something she makes public. It is also a traumatic, safety-related event. Never use it."
    }
   ]
  },
  "care": {
   "businesses": [
    {
     "name": "Moving crew (Vienna partner of the international mover)",
     "can_change": "Carrying order, where furniture stands, which room each box goes to, which boxes are opened first, leaving spare boxes and tape, and notes on the company's printed first-week checklist for newcomers to Vienna.",
     "limits": "Hourly rate is fixed. Plants are excluded by contract and insurance. No furniture assembly beyond the quote. The bike can't be left in the stairwell. Care budget about €5.",
     "touches": [
      {
       "id": "M1",
       "touch": "Place the large furniture against inner walls and keep the walls and floor next to the windows clear. Leave an empty, bright corner in the living room. It reads as a normal 'leave space for you to arrange' choice, and if she has no plants she gets a tidy, open room.",
       "signals": [
        "S4",
        "S6"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "M2",
       "touch": "The property manager has already put the heating on, so keep the flat warm: close the windows, and close the flat door between loads so it is not propped open for hours at 6 °C. Anything delicate she brings later then arrives in a warm room.",
       "signals": [
        "S6"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "M3",
       "touch": "Put the boxes labelled kitchen and bedroom in their rooms and open them first. Stack the rest along the walls by room label so the floors stay walkable. Leave 5 flat spare boxes and a roll of tape.",
       "signals": [
        "S2"
       ],
       "cost_eur": 4,
       "visibility": "subtle"
      },
      {
       "id": "M4",
       "touch": "On the standard first-week checklist, the crew lead ticks or adds the items that apply to this building: the bike room is in the courtyard and opens with the building key (no bikes in the stairwell); the nearby Brunnenmarkt is closed on Sundays; where the waste-sorting bins are in this courtyard.",
       "signals": [
        "S2",
        "S7",
        "S8"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Internet technician (fibre installation)",
     "can_change": "Calling ahead within the 8–12 window, where the router goes (within reach of the socket), cable routing, a signal check in each room, advice on extenders, and how the Wi-Fi and router settings are explained.",
     "limits": "One-hour slot. Explains the setup the same way for every customer, with no device-specific suggestions unless asked. Tariff fixed. No free hardware or speed upgrades. Care budget about €2.",
     "touches": [
      {
       "id": "I1",
       "touch": "Call ahead within the window and agree that the crew lead can let you in if the tenant isn't there yet. Same courtesy for every customer.",
       "signals": [
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "I2",
       "touch": "Run the cable along the skirting boards and put the router at the socket, not on a windowsill or in the middle of free floor. This is standard good practice and also keeps the bright spots and open space free.",
       "signals": [
        "S4"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "I3",
       "touch": "Check the signal in every room with a phone and write the results, the Wi-Fi name and the password on a card. Leave the card in an envelope by the router, because the tenant may arrive after the installation.",
       "signals": [
        "S2"
       ],
       "cost_eur": 1,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Locksmith (replaces the cylinder of the flat door)",
     "can_change": "Timing, coloured key caps or tags, who gets the keys (crew lead or tenant), how the keys and key card are handed over, a short explanation of the lock and building key system, and one practical tip.",
     "limits": "Security-certificate keys are copied only with the key card. The building key can't be copied without the property manager's approval. No upselling. Care budget about €3.",
     "touches": [
      {
       "id": "L1",
       "touch": "Give the crew lead one key for the day. Hand the other keys and the key card to the tenant personally, or leave them in a sealed envelope addressed to her. This is the standard handover, explained in one sentence.",
       "signals": [
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "L2",
       "touch": "Put different coloured caps on the new flat-door keys and the building key. Tag the building key 'Haustür · Hof · Radraum', so it is clear which key opens the bike room in the courtyard.",
       "signals": [
        "S7"
       ],
       "cost_eur": 2,
       "visibility": "silent"
      },
      {
       "id": "L3",
       "touch": "Give one practical tip, the same one every new tenant gets: keep the key card somewhere separate from the keys, and ask the property manager directly if you need a spare building key, because it can't be copied at a key shop.",
       "signals": [
        "S2"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      }
     ]
    },
    {
     "name": "Greengrocer stall at the Brunnenmarkt",
     "can_change": "Advice on substitutes and how to cook them, pointing to nearby specialist shops, setting something aside or ordering it for the next market day, and packing.",
     "limits": "Only what is on the stall that day. Closed on Sundays. Care budget about €1.",
     "touches": [
      {
       "id": "G1",
       "touch": "Only if she asks for something the stall doesn't have: suggest the closest leafy-green substitute on the stall and how to cook it, point to a nearby specialist shop, or offer to order it for the next market day. The stall does this for every customer who asks, and it never offers this unprompted.",
       "signals": [
        "S8"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "G2",
       "touch": "Mention the generic market tip in passing: closed on Sundays, so Saturday is the day to stock up for Sunday cooking.",
       "signals": [
        "S8"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "G3",
       "touch": "Pack heavy produce at the bottom and split the shopping into two balanced bags. Add a sprig of parsley, the usual market 'Draufgabe'.",
       "signals": [],
       "cost_eur": 0.5,
       "visibility": "silent"
      }
     ]
    }
   ],
   "rejected": [
    {
     "idea": "Moving crew leaves a small potted plant or a plant mister as a welcome gift.",
     "reason": "Showy and clearly targeted: 'Why a plant?' quickly becomes 'How do you know that?'. It also stacks a third plant touch on the same flat, alongside M1 and I2."
    },
    {
     "idea": "Crew lead says 'we heard you're driving your plants yourself, we left space for them'.",
     "reason": "This refers to her Instagram reel (S6) without opt-in. It shows someone watched her content, so it fails the 'How do you know that?' test."
    },
    {
     "idea": "Internet technician suggests a smart plug or timer for grow lights, or a Wi-Fi extender for the plant corner.",
     "reason": "Device-specific suggestions aren't allowed unless she asks. The grow-light need comes only from the pseudonymous Reddit account (S11), which is discarded as de-anonymization."
    },
    {
     "idea": "Locksmith recommends extra security (a second lock, a door chain, safety tips for living alone in Ottakring).",
     "reason": "It is based on discarded S12 (pseudonymous Reddit, personal safety, gender) and S13 (a deleted post about a burglary). It is also upselling. It would feel deeply invasive."
    },
    {
     "idea": "Greengrocer offers kontomire, cocoyam leaves or other West African ingredients without being asked, or points her to an African shop.",
     "reason": "This targets ethnic or national origin (S8 specifics, discarded S9). It would feel like profiling. Specific ingredients are allowed only if she asks for them herself."
    },
    {
     "idea": "A 'congratulations on your new job / your Rot-Weiß-Rot Card' note in the flat.",
     "reason": "It uses the exact job timeline (S2) and immigration status (S3, sensitive, discarded). Explicit and creepy."
    },
    {
     "idea": "Timing the visits around her start date or her move out of the serviced apartment, e.g. 'since you're back at work Monday...'.",
     "reason": "S2 allows only the general fact that she is new in Vienna. The exact dates and housing timeline reveal her living situation."
    },
    {
     "idea": "Mentioning the fiddle-leaf fig 'Kofi' or her Monstera 'firstborn', or anything about the choir or Christmas services.",
     "reason": "Plant names and the 'firstborn' joke must never be used (S4, S5). The choir information is someone else's data and reveals her religion (S10, discarded)."
    },
    {
     "idea": "Crew carries the omafiets up and parks it in the hallway outside her flat.",
     "reason": "This breaks the house rules (no bikes in the stairwell or hallways). The right touch is pointing to the courtyard bike room (M4, L2)."
    }
   ]
  }
 },
 {
  "id": "05-budapest-wednesday",
  "title": "Margit, 72 · a Wednesday in Budapest",
  "note": "Fictional persona. Raw output of seendo.py. Library, pharmacy, new hairdresser, thermal bath.",
  "profile": "# Public profile notes: Margit (fictional persona for the demo)\n\nMargit Horváth, 72, Budapest (Óbuda). Collected from public profiles on 20 Oct 2026. Contact details removed.\n\n## Facebook (most of her posts are set to Public)\n- Retired primary-school music teacher: taught singing with the Kodály method for 38 years in Zugló. Old class photos with a tuning fork in hand.\n- Every Saturday: a photo of the finished crossword in \"Füles\" magazine, caption \"done before the coffee got cold ☕\".\n- Shares old Budapest photos from Fortepan (the public photo archive), mostly trams, with comments like \"I rode the 6 tram to school every day in 1964\".\n- Balcony full of red geraniums (muskátli), posted every spring and autumn.\n- Photo at the Lukács Bath sitting on the steps of the thermal pool. Her comment under it: \"Of course I swim 100 lengths every morning 😂\".\n- Member of the public group \"Cukorbetegek Klubja\" (a diabetes support club); posts sugar-free cake recipes there.\n- Shared a political party's campaign post before the April 2026 election.\n- Post on 19 Oct 2026 with a photo of a man in his seventies: \"One year without you, László.\"\n- A former pupil, Ágnes, commented under the 1979 class photo: \"Margit néni, I still see you watering your geraniums every time I walk down Kórház utca!\"\n- Owner-only: phone, e-mail, address, birthday.\n\n## Facebook group \"Óbudai szomszédok\" (public, 9k members)\n- Another member posted a screenshot of a post by Margit (audience: Friends) in which she complains about her previous hairdresser by name.\n\n## Moly.hu (Hungarian book community, public reading shelf)\n- Read: Szabó Magda, \"Az ajtó\" (5 stars); Krúdy Gyula short stories (4 stars).\n- Currently reading: Szerb Antal, \"Utas és holdvilág\".\n- Her own review: \"Wonderful book, but the letters are so small I read it with a magnifier.\"\n\n## YouTube (public comments)\n- Comments on Liszt Academy (Zeneakadémia) concert streams, especially Kodály choral works: \"My pupils sang this in 1979.\"\n\n## Instagram @margit.horvath (public)\n- Knitting projects (shawls, baby blankets), a Hungarian vizsla called Bogyó, lavender fields.\n- The same name, but a different face, and every location tag is in Debrecen.\n",
  "journey": "# Journey: a Wednesday in Budapest, 21 Oct 2026 (no travel)\n\nMargit's old hairdresser has retired, so today she tries a new one. Before that she renews her card at the central library, picks up a prescription, and ends the day at the Lukács Bath, as she does most Wednesdays. She gets around by tram and bus. Friday 23 Oct is a national holiday in Hungary, so most shops and pharmacies are closed.\n\n## Metropolitan Ervin Szabó Library, central branch (Wenckheim Palace, Kálvin tér)\n- Can change: which librarian helps her, a short tour suggestion, book recommendations, pointing to the large-print and audiobook shelves, a seat in a reading room, a referral to the library's local-history collection (Budapest Collection) and how to request material there.\n- Limits: card fees and rules fixed; staff can't hold books outside the normal reservation system; care budget ~€1.\n\n## Pharmacy (patika) near her tram stop in Óbuda\n- Can change: the pharmacist's time and explanation, a chair while she waits, how the dosage label is written (size, wording), a note on the bag about holiday opening hours and the nearest on-duty (ügyeletes) pharmacy, a reminder of when the prescription runs out.\n- Limits: medicines and prices fixed by law; advice may be based only on the prescription and what she says at the counter; strict confidentiality; care budget ~€2.\n\n## New hairdresser (fodrász) on Bécsi út, first visit\n- Can change: appointment time, which stylist, coffee or tea, what plays on the salon radio, what's on the table to read, the chat, a small finishing touch.\n- Limits: price list fixed; at most one personalised ambient touch per visit (music, reading or drink, not all three); care budget ~€2.\n\n## Lukács Bath (thermal bath)\n- Can change: cabin or locker choice, which pool staff suggest she starts in, a tip on quieter times, a towel or bathrobe arrangement, a short tip about the bath's own history or its drinking hall.\n- Limits: public bath; ticket price set by the bath's price list; care budget ~€1.\n",
  "signals": {
   "persona": "Margit is a 72-year-old retired Kodály music teacher from Óbuda who loves choral music, Hungarian classic literature, her Saturday crossword with coffee, her red geraniums and old Budapest trams.",
   "signals": [
    {
     "id": "S1",
     "signal": "Retired primary-school music teacher who taught singing with the Kodály method for 38 years",
     "source": "Facebook (public posts, old class photos with a tuning fork)",
     "confidence": "high",
     "usable": "yes",
     "note": "She shares this herself in public posts, and it is a big part of who she is. It is about her career, not a sensitive category."
    },
    {
     "id": "S2",
     "signal": "Does the Füles crossword every Saturday, ideally with a coffee",
     "source": "Facebook (public weekly photo, caption \"done before the coffee got cold\")",
     "confidence": "high",
     "usable": "yes",
     "note": "She posts it publicly every week, and it is harmless. A guess based on it could not make her feel watched."
    },
    {
     "id": "S3",
     "signal": "Loves old Budapest photos, especially trams, and rode the 6 tram as a child",
     "source": "Facebook (public shares of Fortepan photos, with her own comments)",
     "confidence": "high",
     "usable": "yes",
     "note": "She shares and comments on these publicly and often. The interest is generic, so a guess would not reveal how we know."
    },
    {
     "id": "S4",
     "signal": "Grows red geraniums (muskátli) on her balcony",
     "source": "Facebook (her own public posts every spring and autumn)",
     "confidence": "high",
     "usable": "yes",
     "note": "Her own public posts, posted every season. Use the hobby only. Do not use where the balcony is (see S9)."
    },
    {
     "id": "S5",
     "signal": "Visits the Lukács Bath",
     "source": "Facebook (public photo on the thermal pool steps)",
     "confidence": "medium",
     "usable": "conditional",
     "note": "Use only that she visits the Lukács Bath. \"I swim 100 lengths every morning 😂\" is a joke, not a fact, so it must not be read as a swimming habit or a daily routine. Based on one photo."
    },
    {
     "id": "S6",
     "signal": "Hungarian classic literature: Szabó Magda (Az ajtó, 5 stars), Krúdy (4 stars), currently reading Szerb Antal, Utas és holdvilág",
     "source": "Moly.hu (public reading shelf and ratings)",
     "confidence": "high",
     "usable": "yes",
     "note": "Her public shelf, which she keeps on purpose. Use it only as a general literary taste. Do not point to the exact book she is reading now, because that could feel like being tracked."
    },
    {
     "id": "S7",
     "signal": "Small print is hard for her to read; she uses a magnifier",
     "source": "Moly.hu (her own public review)",
     "confidence": "high",
     "usable": "conditional",
     "note": "This touches on eyesight, which is close to health data. It is usable only as a general accessibility default offered to everyone (for example a large-print menu available on request). Never target it at her and never mention it."
    },
    {
     "id": "S8",
     "signal": "Follows Kodály choral works and Liszt Academy concert streams",
     "source": "YouTube (public comments, e.g. \"My pupils sang this in 1979\")",
     "confidence": "medium",
     "usable": "yes",
     "note": "The comments fit her teaching history, so the account is very likely hers, but the link between platforms is inferred, so confidence is medium. The interest itself is public and harmless."
    },
    {
     "id": "S9",
     "signal": "Location of her geranium balcony (a named street)",
     "source": "Facebook (comment by former pupil Ágnes under the 1979 class photo)",
     "confidence": "medium",
     "usable": "no",
     "note": "Someone else's comment, and it reveals her home location. Address data is discarded."
    },
    {
     "id": "S10",
     "signal": "Member of a diabetes support club; posts sugar-free cake recipes",
     "source": "Facebook (public group \"Cukorbetegek Klubja\")",
     "confidence": "high",
     "usable": "no",
     "note": "Health is a sensitive category. Acting on it, even with a sugar-free gesture, would fail the \"How do you know that?\" test."
    },
    {
     "id": "S11",
     "signal": "Shared a political party's campaign post",
     "source": "Facebook (public share before the April 2026 election)",
     "confidence": "high",
     "usable": "no",
     "note": "Political opinion is a sensitive category. Never use it."
    },
    {
     "id": "S12",
     "signal": "Widowed: \"One year without you, László\"",
     "source": "Facebook (public post, 19 Oct 2026)",
     "confidence": "high",
     "usable": "no",
     "note": "Grief and bereavement are deeply personal, and the post names another person. Any touch tied to it, especially near the anniversary, would feel intrusive."
    },
    {
     "id": "S13",
     "signal": "Complained about her previous hairdresser by name",
     "source": "Facebook group \"Óbudai szomszédok\" (another member's screenshot of her Friends-only post)",
     "confidence": "medium",
     "usable": "no",
     "note": "She did not make it public: she shared it with Friends only and someone else reposted it. It also names a third party."
    },
    {
     "id": "S14",
     "signal": "Knitting, a vizsla named Bogyó, lavender fields",
     "source": "Instagram @margit.horvath",
     "confidence": "low",
     "usable": "no",
     "note": "Probably a namesake: the face is different and every location tag is in Debrecen. This is not about this person."
    },
    {
     "id": "S15",
     "signal": "Phone, e-mail, address, birthday",
     "source": "Facebook (owner-only fields)",
     "confidence": "high",
     "usable": "no",
     "note": "These fields are owner-only and are contact or personal data. Discarded."
    }
   ]
  },
  "care": {
   "businesses": [
    {
     "name": "Metropolitan Ervin Szabó Library, central branch (Wenckheim Palace)",
     "can_change": "Which librarian helps her, a short tour suggestion, book recommendations, pointing to the large-print and audiobook shelves, a reading-room seat, a referral to the Budapest Collection and how to request material there.",
     "limits": "Card fees and rules are fixed. No holds outside the normal reservation system. Care budget about €1. To avoid stacking, use at most one interest-based touch (old Budapest). Her literary taste comes into play only if she asks for a recommendation.",
     "touches": [
      {
       "id": "L1",
       "touch": "During the card renewal, the librarian gives the short welcome-back tour line that every renewing reader hears. It mentions the palace's historic reading rooms and the Budapest Collection, which holds old city photographs, maps and transport material, and it shows how to request items there. Nothing is said about trams or photo sharing.",
       "signals": [
        "S3"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "L2",
       "touch": "If she asks for something to read, the librarian on duty who knows 20th-century Hungarian classics helps her. They suggest a Krúdy or Szabó Magda contemporary from the open shelves, in a large-print edition if one exists. They never name or ask about the book she is reading now.",
       "signals": [
        "S6"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "L3",
       "touch": "Every renewing reader gets the same printed renewal slip. It is set in clear 14pt type and mentions the large-print and audiobook shelves as a general service. It is never pointed out to her in particular.",
       "signals": [
        "S7"
       ],
       "cost_eur": 0.1,
       "visibility": "silent"
      },
      {
       "id": "L4",
       "touch": "If she wants to sit down, staff offer the free reading-room seat with the best daylight and a desk lamp, as they would for anyone.",
       "signals": [],
       "cost_eur": 0,
       "visibility": "silent"
      }
     ]
    },
    {
     "name": "Pharmacy (patika) near her tram stop in Óbuda",
     "can_change": "The pharmacist's time and explanation, a chair while she waits, the size and wording of the dosage label, a bag note on holiday hours and the on-duty pharmacy, a reminder of when the prescription runs out.",
     "limits": "Medicines and prices are fixed by law. Advice comes only from the prescription and what she says at the counter. No social-media signal is used here at all, because strict confidentiality applies. Care budget about €2.",
     "touches": [
      {
       "id": "P1",
       "touch": "This week every customer's bag gets a small printed note. It says the pharmacy is closed on Friday 23 Oct (national holiday) and gives the address and hours of the nearest on-duty (ügyeletes) pharmacy.",
       "signals": [],
       "cost_eur": 0.1,
       "visibility": "silent"
      },
      {
       "id": "P2",
       "touch": "The dosage label is printed in large, plain wording, such as \"1 tablet in the morning, with breakfast\". This is the pharmacy's default for every customer and is not adjusted for her.",
       "signals": [
        "S7"
       ],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "P3",
       "touch": "The pharmacist writes the date the prescription runs out on the label. The date is worked out only from the prescription itself, so she can plan around the long weekend.",
       "signals": [],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "P4",
       "touch": "The chair by the counter is offered to anyone with a wait longer than a minute. The pharmacist takes an unhurried moment to explain the dosage and asks, \"Any questions about how to take it?\"",
       "signals": [],
       "cost_eur": 0,
       "visibility": "silent"
      }
     ]
    },
    {
     "name": "New hairdresser (fodrász) on Bécsi út, first visit",
     "can_change": "Appointment time, which stylist, coffee or tea, the salon radio, what is on the table to read, the chat, a small finishing touch.",
     "limits": "The price list is fixed. Only ONE personalised ambient touch is allowed, and here it is the reading table (H1). Radio and drink stay at the house default. Care budget about €2.",
     "touches": [
      {
       "id": "H1",
       "touch": "This week's Füles and a pencil lie on the waiting and styling table among the usual magazines. Many Hungarian salons do this, so it reads as normal salon reading. Nobody points it out.",
       "signals": [
        "S2"
       ],
       "cost_eur": 1.5,
       "visibility": "silent"
      },
      {
       "id": "H2",
       "touch": "On booking, she is offered a calm mid-morning weekday slot with the stylist best at first-time consultations. That stylist starts by asking what she liked and disliked before and lets her describe what she wants. Her previous hairdresser is never mentioned.",
       "signals": [],
       "cost_eur": 0,
       "visibility": "silent"
      },
      {
       "id": "H3",
       "touch": "The house coffee or tea is offered as soon as she sits down, as it is for every guest. Radio and drink are not personalised, so the H1 ambient touch stays the only one.",
       "signals": [],
       "cost_eur": 0.5,
       "visibility": "silent"
      },
      {
       "id": "H4",
       "touch": "Chat rule: the stylist follows her lead. If she brings up teaching or singing herself, the stylist responds with genuine interest. The stylist never opens with topics she hasn't raised.",
       "signals": [
        "S1"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "H5",
       "touch": "Finishing touch: a hand mirror to see the back, and a short aftercare card printed in large type. Every client gets the same card.",
       "signals": [
        "S7"
       ],
       "cost_eur": 0.2,
       "visibility": "silent"
      }
     ]
    },
    {
     "name": "Lukács Bath (thermal bath)",
     "can_change": "Cabin or locker choice, which pool staff suggest starting in, a tip on quieter times, towel or bathrobe arrangement, a short tip about the bath's history or drinking hall.",
     "limits": "This is a public bath and the ticket price is fixed. Care budget about €1. Only the fact that she visits is used. No swimming habit or routine is assumed.",
     "touches": [
      {
       "id": "B1",
       "touch": "At the counter, staff give the same short history tip any guest might hear on a quiet evening: look at the gratitude plaques in the courtyard and the drinking hall (ivócsarnok).",
       "signals": [
        "S5"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "B2",
       "touch": "Staff mention that the Friday 23 Oct holiday may bring crowds and say which weekday hours are usually quietest. This general tip goes to all regulars this week.",
       "signals": [
        "S5"
       ],
       "cost_eur": 0,
       "visibility": "subtle"
      },
      {
       "id": "B3",
       "touch": "If any are free, staff assign a well-lit cabin close to the thermal pools and leave a towel folded ready. This is the standard choice when the bath is not busy.",
       "signals": [],
       "cost_eur": 0.5,
       "visibility": "silent"
      }
     ]
    }
   ],
   "rejected": [
    {
     "idea": "Hairdresser puts Kodály choral music on the radio, lays out Füles and an old-Budapest tram photo book, and serves her coffee \"just how she likes it\".",
     "reason": "This breaks the one-ambient-touch limit. Stacking her music, crossword, tram and coffee interests in one place adds up to a profile, and she would ask \"How do you know all that?\""
    },
    {
     "idea": "Offer a sugar-free pastry with the coffee at the salon, or have the pharmacist mention diabetes products.",
     "reason": "This is based on S10 (diabetes club), which is health data in a sensitive category. The pharmacist may use only the prescription and what she says at the counter."
    },
    {
     "idea": "Any extra warmth, condolence or gesture linked to her late husband László, given that the anniversary was two days earlier.",
     "reason": "S12 concerns bereavement and names another person. Any touch connected to it would feel deeply intrusive."
    },
    {
     "idea": "Bath staff suggest the lap-swimming pool or an early-morning slot \"for your 100 lengths\".",
     "reason": "\"I swim 100 lengths every morning 😂\" is a joke, not a fact. Acting on it is both wrong and creepy."
    },
    {
     "idea": "Librarian asks \"How are you finding Utas és holdvilág?\" or puts the next Szerb Antal book aside for her.",
     "reason": "Referring to the exact book she is reading now feels like tracking. Holding books outside the reservation system also breaks library rules."
    },
    {
     "idea": "Salon says \"don't worry, we're not like your last hairdresser\".",
     "reason": "S13 was a Friends-only post that someone else reposted, and it names a third party. It is not public, so it must not be used."
    },
    {
     "idea": "Hand her a pot of red geraniums, or offer to deliver something to her balcony.",
     "reason": "This is showy, it changes the product, and delivery would need her home location (S9), which is discarded address data."
    },
    {
     "idea": "Give a large-print label or menu to her alone because she uses a magnifier.",
     "reason": "Eyesight is close to health data (S7). It can be used only as a default for everyone, never targeted at her or mentioned."
    },
    {
     "idea": "Librarian or stylist says \"we loved your Fortepan tram photos\" or \"we saw your pupils sang this in 1979\".",
     "reason": "This is an explicit mention without opt-in. It fails the \"How do you know that?\" test immediately."
    },
    {
     "idea": "Small talk about the 23 October holiday or the recent election.",
     "reason": "Politics is a sensitive category (S11). Staff should mention the holiday only as practical information about opening hours."
    },
    {
     "idea": "Stylist chats about knitting, a vizsla or the lavender fields.",
     "reason": "S14 is probably a namesake in Debrecen, so it is not about this person."
    }
   ]
  }
 }
];
