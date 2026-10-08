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
 }
];
