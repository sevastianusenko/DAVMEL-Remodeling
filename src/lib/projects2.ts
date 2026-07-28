// Case studies, batch 2 of 3: Lancaster, Denver, Ephrata, Lititz, Reading.
// Longer form. New keywords only, no overlap with batch 1. No em dashes.
import type { Project } from "./projects";

export const PROJECTS2: Project[] = [
  {
    slug: "tub-to-shower-conversion-lancaster-pa",
    title: "Goodbye Tub Nobody Used: A Tub to Shower Conversion in Lancaster",
    metaTitle: "Tub to Shower Conversion in Lancaster PA: Cost & Case Study",
    metaDescription:
      "A complete tub to shower conversion in a Lancaster PA rowhome: demo, waterproofing, glass slider and grab bar blocking. Real cost, 7 day timeline and aging in place advice.",
    city: { name: "Lancaster", slug: "lancaster-pa" },
    serviceSlugs: ["bathroom-remodeling", "tile-installation"],
    duration: "7 working days",
    scope: ["Tub removal", "Curbed shower build", "Glass slider", "Grab bar blocking", "Marble look tile"],
    hero: "walk-in-shower-glass-slider-marble-pa",
    photos: [
      "walk-in-shower-glass-slider-marble-pa",
      "tub-surround-demo-before-pa",
      "shower-pan-liner-install-pa",
    ],
    intro: [
      "The owners of this Lancaster rowhome had taken exactly four baths in nineteen years, and two of those involved a sick toddler. The tub occupied a third of the bathroom as a full time towel shelf. Meanwhile, stepping over its wall was getting less funny every year for knees that had opinions about it.",
      "A tub to shower conversion is the most requested single project in our bathroom work, and this one shows the whole anatomy: what leaves, what has to be built behind the new walls, and why the good conversions cost more than the kit from a TV commercial.",
    ],
    sections: [
      {
        h2: "What a conversion actually involves",
        ps: [
          "Day one, the tub came out, and with it fifty pounds of grout, old caulk and the story of every leak the wall had been hiding. The drain moves in almost every conversion, because a tub drains at the end and a shower drains where the slope says. That means opening the floor, resetting the trap and building a properly pitched pan. Anyone quoting a conversion without discussing the drain has not done many.",
          "From there it went like our full shower builds: cement board, a bonded waterproofing membrane over every inch of the wet zone, a flood tested pan, then marble look porcelain and a glass slider. Seven working days from tub to towels back on the hooks, in the same footprint.",
        ],
      },
      {
        h2: "The invisible upgrade: blocking",
        ps: [
          "While the walls were open we added solid wood blocking at grab bar heights, even though the owners did not want grab bars yet. Blocking costs almost nothing during construction and makes future bars a ten minute install into solid wood instead of a hollow wall gamble. The [National Institute on Aging's fall prevention guidance](https://www.nia.nih.gov/health/falls-and-falls-prevention) is blunt about bathrooms being where falls happen, and a conversion is the one moment the fix is nearly free.",
          "We put blocking in every shower we build now, for clients of every age. Nobody has ever complained about wood they cannot see.",
        ],
      },
      {
        h2: "Cost and whether it is worth it",
        ps: [
          "This conversion landed in the middle of the $7,000 to $14,000 range we publish on the [bathroom remodeling page](/services/bathroom-remodeling). The TV commercial acrylic systems quote less until the fine print arrives, and they solve the problem by covering it in plastic. Tile and real waterproofing cost more once and then stop costing anything.",
          "One honest caveat we give every conversion client: keep a tub somewhere in the house if small children or resale within five years are in the plan. This house had a second bath with a tub, which made the decision easy. Our thinking on that tradeoff is in the [bathroom cost guide](/blog/bathroom-remodel-cost-lancaster-pa).",
        ],
      },
    ],
  },
  {
    slug: "load-bearing-wall-removal-lancaster-pa",
    title: "The Wall Between Them: A Load Bearing Wall Removal in Lancaster",
    metaTitle: "Load Bearing Wall Removal in Lancaster PA: Beam Install Case Study",
    metaDescription:
      "Removing a load bearing wall between kitchen and living room in Lancaster PA: engineering, temporary shoring, LVL beam install, permits and real cost ranges.",
    city: { name: "Lancaster", slug: "lancaster-pa" },
    serviceSlugs: ["custom-framing", "interior-remodeling"],
    duration: "2 weeks including engineering",
    scope: ["Structural engineering", "Temporary shoring", "LVL beam install", "Permit and inspections", "Drywall and finish"],
    hero: "open-concept-living-remodel-lancaster-pa",
    photos: [
      "open-concept-living-remodel-lancaster-pa",
      "wall-framing-plumbing-rough-in-pa",
      "drywall-taping-mudding-pa",
    ],
    intro: [
      "Every episode of every renovation show has the moment where someone swings a sledgehammer into a wall and the kitchen becomes one glorious room. What the shows cut out is the three days before that swing: the engineering letter, the temporary shoring, and the beam sized by math instead of vibes. This Lancaster project kept all three, which is why the ceiling above it is not sagging into a smile.",
      "The wall between this kitchen and living room carried the second floor joists. Removing it is a routine project for us and a genuinely dangerous one for anyone winging it, so this case study walks through how load bearing wall removal actually goes when it goes right.",
    ],
    sections: [
      {
        h2: "First, prove what the wall carries",
        ps: [
          "Joist direction above, beam lines below, and what sits on the wall two floors up all tell the story. This one was carrying, no question. We brought in a structural engineer who sized an LVL beam and specified the post loads at each end, which have to travel through the floor system all the way to footings. That last part surprises homeowners most: the beam is easy, the path to the ground is the engineering.",
          "Penn State's [Pennsylvania Housing Research Center](https://www.phrc.psu.edu/) publishes excellent residential construction guidance for our state, and their consistent theme applies here: structure is a system, not a part. Change one element and you change the load path of everything above it.",
        ],
      },
      {
        h2: "Two hours of drama, two weeks of care",
        ps: [
          "Demo day itself is quick. Temporary shoring walls went up on both sides, the old wall came out, the LVL went in on engineered posts, and the shoring came down after the connections were inspected. The township inspector saw it twice: rough framing and final. Then came the quiet week that makes the project disappear: drywall, taping, flooring transition and paint, until the room looks like the house was always built this way.",
          "The floor transition is the detail that exposes cheap wall removals. Where the wall stood, the flooring never existed. We laced new boards into the old on both sides rather than laying a bandage strip of trim over the scar.",
        ],
      },
      {
        h2: "Cost, honestly",
        ps: [
          "In our area, straightforward load bearing wall removals with a flush beam run $8,000 to $15,000 including engineering, permit, beam, finish work and the floor lacing. Point loads that need new footings, hidden ducts or plumbing in the wall push it higher, and we scope all three before quoting. The [framing page](/services/custom-framing) covers our structural work, and [One Contractor vs. a Parade of Subs](/blog/one-contractor-vs-subcontractors) explains why a wall removal is the worst possible project to coordinate yourself.",
        ],
      },
    ],
  },
  {
    slug: "garage-drywall-installation-denver-pa",
    title: "The Garage Grows Up: Drywall and Fire Separation in Denver",
    metaTitle: "Garage Drywall Installation in Denver PA: Fire Code Case Study",
    metaDescription:
      "Hanging and finishing garage drywall near Denver PA: fire separation requirements, insulation, and turning a bare stud garage into a clean workspace.",
    city: { name: "Denver", slug: "denver-pa" },
    serviceSlugs: ["drywall-installation-repair"],
    duration: "1 week",
    scope: ["Full garage drywall hang", "Fire separation wall", "Insulation", "Tape and finish"],
    hero: "drywall-green-board-hung-taped-pa",
    photos: [
      "drywall-green-board-hung-taped-pa",
      "drywall-taping-mudding-pa",
      "ceiling-insulation-vent-framing-pa",
    ],
    intro: [
      "A garage with bare studs is a garage that eats heat, collects cobwebs at industrial scale, and makes every project feel like it is happening in a barn. The owner of this Denver garage wanted a workspace he could stand in past November, and the path there ran through insulation and a lot of drywall.",
      "Garage drywall looks like the simplest job we do. It carries one code requirement most homeowners have never heard of, and skipping it can matter to both safety and insurance: the fire separation between garage and house.",
    ],
    sections: [
      {
        h2: "The wall that buys you time",
        ps: [
          "The wall and ceiling between an attached garage and the living space are a fire separation assembly. Code wants specific drywall there, typically 5/8 inch Type X on the ceiling under living space, with penetrations sealed, because a garage is where the cars, fuel cans and questionable extension cords live. The [Gypsum Association](https://www.gypsum.org/) publishes the fire resistance data these assemblies are built from, and the difference between regular and Type X board is measured in minutes your family gets that a fire does not.",
          "We hung Type X where the separation required it, standard board elsewhere, and sealed every penetration. The self closing hinge on the house door completed the assembly, a two dollar part that most garages are missing.",
        ],
      },
      {
        h2: "Insulation first, comfort forever",
        ps: [
          "Before a single board went up, the exterior walls got batts and the rim joists got sealed. An uninsulated garage with beautiful drywall is a beautifully finished refrigerator. With insulation and drywall together, this garage now rides ten to fifteen degrees closer to the house year round with zero added heating.",
          "We finished the walls to a level appropriate for a garage: taped, two coats, sanded honest. Nobody needs a level 5 skim coat behind a tool wall, and we say so rather than billing for polish the room will never show.",
        ],
      },
      {
        h2: "Small building, real trade",
        ps: [
          "A full two car garage hang and finish runs a fraction of any interior remodel and pays back in usable months per year. If your garage still shows its skeleton, the [drywall page](/services/drywall-installation-repair) covers what we do, and Denver homeowners get our shortest drive in the whole [service area](/service-areas/denver-pa).",
        ],
      },
    ],
  },
  {
    slug: "wood-porch-steps-landing-denver-pa",
    title: "Four Steps and a Landing: Treated Wood Stairs Near Denver",
    metaTitle: "Wood Porch Steps Builder Near Denver PA: Case Study",
    metaDescription:
      "Building new treated wood porch steps and a landing near Denver PA: stringer layout, ground contact lumber, railing geometry and the code numbers that matter.",
    city: { name: "Denver", slug: "denver-pa" },
    serviceSlugs: ["porch-deck-refinishing", "deck-building"],
    duration: "2 days",
    scope: ["New stringers and treads", "Landing platform", "Railings both sides", "Ground contact lumber"],
    hero: "treated-wood-stairs-side-entrance-pa",
    photos: [
      "treated-wood-stairs-side-entrance-pa",
      "porch-step-framing-stringers-pa",
      "treated-wood-landing-gate-rail-pa",
    ],
    intro: [
      "The old steps at this side entrance near Denver had reached the stage where the family had unconsciously memorized which board not to trust. That is the stage right before somebody's ankle finds out the hard way, and it is exactly when a two day rebuild is cheap insurance.",
      "New wood steps are carpentry at its most honest: geometry, good lumber and correct fasteners, visible to anyone who looks. Here is what correct looks like, because the difference between these stairs and a weekend improvisation is all in the numbers.",
    ],
    sections: [
      {
        h2: "The geometry your feet already know",
        ps: [
          "Your legs expect a stair rise around 7 inches and a run around 10 to 11, and they expect every step to match its neighbors within about a quarter inch. Uneven steps are how people fall on stairs that look perfectly fine in photos. We laid out new stringers to a consistent rise, which meant correcting the old layout that had drifted almost an inch between the top and bottom step.",
          "The [American Wood Council's DCA 6 guide](https://awc.org/publications/2021-dca-6/) is the reference we build exterior wood stairs against, and it is free reading for any homeowner who wants to check a builder's work. Stringer spans, fastener types and railing loads are all in there in plain tables.",
        ],
      },
      {
        h2: "Lumber that touches dirt is its own species",
        ps: [
          "Where wood meets ground or concrete, standard treated lumber is not enough. Ground contact rated lumber carries roughly twice the preservative, and it is what our stringer bases and landing posts are cut from. The landing itself got a slight pitch away from the door, because water that cannot decide where to go always decides wrong.",
          "Railings went on both sides at code height with graspable profiles. On stairs, a railing you cannot close your hand around is furniture, not safety equipment.",
        ],
      },
      {
        h2: "What two days buys",
        ps: [
          "Step rebuilds like this run in the lower band of our [porch and exterior repair pricing](/services/porch-deck-refinishing), and they remove the daily gamble a failing stair quietly runs on every trip to the car. If your steps have a board the family avoids by habit, that is the estimate trigger. [Call us](/contact) before the ankle does the scheduling.",
        ],
      },
    ],
  },
  {
    slug: "hall-bathroom-remodel-skylight-ephrata-pa",
    title: "Daylight in a Windowless Bath: A Hall Bathroom Remodel in Ephrata",
    metaTitle: "Hall Bathroom Remodel in Ephrata PA: Skylight Case Study",
    metaDescription:
      "A hall bathroom remodel in Ephrata PA built around an existing skylight: white tile, smart storage in a small footprint, and ventilation done right. Costs included.",
    city: { name: "Ephrata", slug: "ephrata-pa" },
    serviceSlugs: ["bathroom-remodeling"],
    duration: "2.5 weeks",
    scope: ["Full hall bath remodel", "White tile package", "Skylight trim rebuild", "Ventilation upgrade"],
    hero: "bathroom-remodel-skylight-white-tile-pa",
    photos: ["bathroom-remodel-skylight-white-tile-pa", "bathroom-remodel-in-progress-black-vanity-pa"],
    intro: [
      "Hall bathrooms are the workhorses of family life: they process the school rush, the guests and the muddy dog, all in five by eight feet. This Ephrata hall bath had one glorious asset going for it, a skylight, and one problem undermining everything else, which was the entire rest of the room.",
      "The remodel brief was simple: keep the daylight, fix everything under it, and find storage in a footprint that has none to spare. Small bathroom remodeling is a game of inches and priorities, and this project shows how we play it.",
    ],
    sections: [
      {
        h2: "Small room, strict priorities",
        ps: [
          "In a hall bath the budget goes to surfaces and storage, in that order. We ran white tile high on the wet walls to bounce the skylight's daylight around the room, chose a vanity with actual drawers instead of the ancient under sink cave of forgotten bottles, and used a recessed medicine cabinet to steal storage from the wall cavity instead of the room.",
          "The skylight well itself got rebuilt drywall with crisp corners and semi gloss paint. A skylight well in a bathroom lives a hard humid life, and it is usually the first place cheap paint tells on itself.",
        ],
      },
      {
        h2: "Humidity is the hidden client",
        ps: [
          "A windowless bath lives or dies by its exhaust fan, skylight or not. We sized the new fan to the room with headroom to spare, ducted it to the exterior with smooth rigid duct, and put it on a timer. [ENERGY STAR's ventilation fan guidance](https://www.energystar.gov/products/ventilation_fans) is a solid reference for sizing, and the certified fans are dramatically quieter, which matters because loud fans get turned off, and fans that are off grow mildew.",
          "We also found the old fan had been venting into the attic for years, which is how attics grow their own weather. It now vents outside like it always should have. If your bathroom fan just goes up, that is worth checking this week, not during a remodel.",
        ],
      },
      {
        h2: "The numbers for a hall bath",
        ps: [
          "This project sat in the heart of our published hall bathroom range of $12,000 to $22,000, detailed in the [bathroom cost guide](/blog/bathroom-remodel-cost-lancaster-pa). Ephrata is ten minutes from our shop, so if your own workhorse bathroom is overdue, the [estimate](/contact) is easy to schedule and free either way.",
        ],
      },
    ],
  },
  {
    slug: "basement-family-room-ephrata-pa",
    title: "The House Gains a Room: A Basement Family Room in Ephrata",
    metaTitle: "Basement Family Room Remodel in Ephrata PA: Case Study",
    metaDescription:
      "Finishing an Ephrata PA basement into a family room: insulation choices against masonry, LVP flooring over concrete, soffit planning and honest per square foot costs.",
    city: { name: "Ephrata", slug: "ephrata-pa" },
    serviceSlugs: ["basement-finishing", "drywall-installation-repair"],
    duration: "5 weeks",
    scope: ["Full basement finish", "Insulated perimeter walls", "LVP flooring", "Drywall ceiling with access panels"],
    hero: "wall-framing-plumbing-rough-in-pa",
    photos: [
      "wall-framing-plumbing-rough-in-pa",
      "drywall-green-board-hung-taped-pa",
      "recessed-drywall-access-panel-pa",
      "geometric-accent-wall-lvp-flooring-pa",
    ],
    intro: [
      "The family in this Ephrata township house had outgrown their living room by approximately one teenager and one drum kit. Above ground, more space meant an addition with an addition sized price. Below ground, it meant finishing the basement they already owned, which is the cheapest square footage in residential construction and the whole reason [our basement pricing guide](/blog/basement-finishing-cost-pa) exists.",
      "Five weeks later the house had a family room, and the drum kit had a door that closes. This case study covers the decisions that matter below grade, because basements punish improvisation more than any room above them.",
    ],
    sections: [
      {
        h2: "Concrete is not a wall, it is a climate",
        ps: [
          "Masonry walls breathe moisture inward all summer, which is why the insulation strategy against them decides the smell of the finished room for the next thirty years. We used rigid foam against the concrete with framed walls in front, keeping fiberglass away from the masonry where it turns into a damp sweater. The [Department of Energy's basement insulation guidance](https://www.energy.gov/energysaver/insulation) explains the physics, and it agrees with what our noses learned on other people's old basements: foam against concrete, always.",
          "The slab got LVP over a proper underlayment. Below grade, wood flooring is a hostage and carpet is a sponge. LVP is warm enough, waterproof and looks like the hardwood upstairs without the anxiety.",
        ],
      },
      {
        h2: "Plan the ceiling around the day you need it open",
        ps: [
          "Every shutoff, junction and cleanout above a finished basement ceiling will someday need a human hand on it. We mapped them all before drywalling and placed flush access panels at each, painted to disappear. Drywall ceilings look far better than drop grids in a family room, and access panels remove their one real drawback.",
          "Ducts and beams got clean straight soffits planned on paper first, so the ceiling reads as design instead of apology. The difference between a basement that feels like a room and one that feels like a finished basement is mostly soffit discipline.",
        ],
      },
      {
        h2: "What it cost and what it returned",
        ps: [
          "This project landed mid range of the $50 to $75 per square foot full finish band on the [basement finishing page](/services/basement-finishing). The house effectively gained a room for a third of addition money, the upstairs living room returned to adult custody, and the drums are now a rumor instead of a presence. Ephrata basements are our backyard specialty, and the estimate starts with the moisture inspection, free.",
        ],
      },
    ],
  },
  {
    slug: "black-grid-windows-lititz-pa",
    title: "Frames Worth Framing: Black Grid Windows in a Lititz Renovation",
    metaTitle: "Black Grid Window Installation in Lititz PA: Case Study",
    metaDescription:
      "Installing black grid Marvin windows during a Lititz PA renovation: why dark frames work, interior trim details, energy performance and cost guidance.",
    city: { name: "Lititz", slug: "lititz-pa" },
    serviceSlugs: ["window-door-installation", "interior-doors-trim"],
    duration: "4 days across the project",
    scope: ["Marvin window installation", "Black grid units", "Interior trim package", "Floor protection throughout"],
    hero: "black-grid-windows-interior-trim-pa",
    photos: ["black-grid-windows-interior-trim-pa", "marvin-window-installation-interior-pa"],
    intro: [
      "Somewhere in the last decade, black window frames went from farmhouse magazine fantasy to the most requested window look in every renovation we quote. This Lititz project shows why the trend has legs: black grids turn every window into a picture frame, and suddenly the backyard maple is art.",
      "The owners chose Marvin units with black grids for a renovation we were already running, which is the single best time to upgrade windows: the trim is open, the painters are coming anyway, and the install slots into the schedule instead of disrupting one.",
    ],
    sections: [
      {
        h2: "Dark frames are a commitment. Make it properly.",
        ps: [
          "Black frames show dust less than everyone fears and show sloppy trim more than anyone expects. The dark line of the frame draws the eye exactly to where casing meets unit, so our reveals had to run even to the sixteenth all the way around. We trimmed these windows with flat stock casing in warm white, which is the pairing that makes black grids read crisp instead of heavy.",
          "One planning note we give every client: pick black on the inside only if your interior scheme can hold it. These owners ran black inside and out, and their furniture calibrates around it beautifully. In a house of oak trim and warm walls, black interior frames can land like a tuxedo at a picnic.",
        ],
      },
      {
        h2: "Performance under the paint",
        ps: [
          "Style aside, these are modern low E argon units replacing tired builder glass, and the room they serve stopped participating in Pennsylvania winter. When comparing window packages, the [Efficient Windows Collaborative](https://efficientwindows.org/) has plain language tools for decoding U factor and solar gain numbers by climate, which beats choosing glass by brand advertising budget.",
          "Install followed our standard: square, shimmed, foamed with low expansion, flashed and sealed. A premium window installed carelessly performs like a cheap one, a point we make at length on the [window and door page](/services/window-door-installation).",
        ],
      },
      {
        h2: "If you are renovating anyway",
        ps: [
          "Windows mid renovation cost noticeably less in labor and disruption than windows as a standalone project, because the trim and paint stages merge. If a room renovation is on your Lititz horizon and the windows are original to a mortgage you have paid off, price them together. The combined estimate is free and the math usually argues for it.",
        ],
      },
    ],
  },
  {
    slug: "built-in-bookcase-lititz-pa",
    title: "The Wall That Reads: A Built In Bookcase Near Lititz",
    metaTitle: "Custom Built In Bookcase in Lititz PA: Carpentry Case Study",
    metaDescription:
      "Building a floor to ceiling built in bookcase near Lititz PA: design around a glazed door, scribing to old walls, and why built ins beat furniture in older homes.",
    city: { name: "Lititz", slug: "lititz-pa" },
    serviceSlugs: ["interior-doors-trim", "full-room-renovation"],
    duration: "1 week",
    scope: ["Floor to ceiling built in", "Scribed to plaster walls", "Glazed door integration", "Paint grade finish"],
    hero: "built-in-bookcase-wall-pa",
    photos: ["built-in-bookcase-wall-pa", "sitting-room-before-renovation-pa"],
    intro: [
      "Bookshelves from a box store stand in front of a wall. A built in becomes the wall. This Lititz area project turned an awkward alcove beside a glazed door into a floor to ceiling library wall, and in the process demonstrated the entire difference between furniture and carpentry.",
      "The before photo shows the honest starting point: a fine room with nowhere for a book collection that had been breeding in boxes since the last move. The owners wanted storage that looked original to the house, which in a home with real plaster walls is a specific carpentry challenge with a specific solution.",
    ],
    sections: [
      {
        h2: "Old walls, straight shelves",
        ps: [
          "No wall in an older home is flat, and a built in that ignores this shows a taper gap that ruins the original to the house illusion from day one. Every vertical panel of this bookcase was scribed, meaning cut to follow the wall's actual wander, so the cabinet meets plaster in a tight line top to bottom. Scribing is slow, unphotogenic work and it is the entire secret of built ins that look inevitable.",
          "The bamboo floor got the same respect: the base of the unit was leveled to the room's real floor, not its theoretical one, so shelves read level against the door casing beside them. In old houses, level and parallel to the floor are different goals, and the eye judges against the casing every time.",
        ],
      },
      {
        h2: "Design decisions that age well",
        ps: [
          "Fixed shelves at book heights beat adjustable everywhere the plan is known, because shelf pin holes are the acne of cabinetry. We fixed the lower shelving around the owners' actual collection, measured stack by stack, and left one adjustable bay for the future. Paint grade poplar with a brushed enamel finish matched the room's existing trim, letting the new wall claim seniority it has not earned.",
          "Lighting was the one modern giveaway we allowed: a discreet LED strip washing the upper shelves, on a switch by the door. Books deserve it and evening rooms are better for it.",
        ],
      },
      {
        h2: "Built ins as an investment",
        ps: [
          "Custom built ins run more than flat pack furniture and considerably less than people guess, especially inside a [larger room renovation](/services/full-room-renovation) where the crew is already mobilized. They are also one of the few improvements that photograph like architecture when a house sells. Our [trim and carpentry page](/services/interior-doors-trim) shows the range, from single alcoves like this to full wall systems.",
        ],
      },
    ],
  },
  {
    slug: "wood-look-tile-bathroom-reading-pa",
    title: "Wood Where Wood Cannot Live: A Tile Floor Rethink Near Reading",
    metaTitle: "Wood Look Tile Bathroom Floor in Reading PA: Case Study",
    metaDescription:
      "Installing wood look tile in a Reading PA bathroom: why porcelain planks beat hardwood in wet rooms, layout rules that sell the illusion, and grout color advice.",
    city: { name: "Reading", slug: "reading-pa" },
    serviceSlugs: ["tile-installation", "bathroom-remodeling"],
    duration: "1 week",
    scope: ["Wood look porcelain planks", "Substrate flattening", "New vanity install", "Transition detail"],
    hero: "bathroom-wood-look-tile-floor-install-pa",
    photos: ["bathroom-wood-look-tile-floor-install-pa", "baseboard-trim-hex-marble-tile-floor-pa"],
    intro: [
      "The owners near Reading wanted hardwood floors in the bathroom, and they are far from alone. Wood in a bathroom is a romance with a bad ending: humidity swells it, splashes stain it, and one supply line failure writes the final chapter. Wood look porcelain planks exist precisely for this heartbreak, and done well, guests genuinely cannot tell without kneeling.",
      "Done badly, wood look tile screams tile from the doorway. The difference is not the product. It is three installation decisions this project shows off.",
    ],
    sections: [
      {
        h2: "The three decisions that sell the illusion",
        ps: [
          "First, layout: real wood floors run boards in random staggered lengths, so we set these planks with offsets that never repeat in a visible pattern, avoiding the brick wall stack that instantly reads as ceramic. Second, grout joints as thin as the tile's rectification allows, in a color matched to the plank's darker grain tones rather than its surface. Grout that matches the field disappears; grout that contrasts draws a grid over your forest.",
          "Third, and least visible: plank format tile bows slightly in manufacturing, so offsets over a third of the plank length create lippage at every joint. We keep offsets tight and flatten the substrate first, which is the boring hour of work that decides whether bare feet feel boards or edges.",
        ],
      },
      {
        h2: "Why porcelain wins the wet rooms",
        ps: [
          "Porcelain planks shrug at humidity, clean with anything, and handle the heated floor mats that make winter bathrooms humane. Under the [ANSI standards that certified porcelain meets](https://www.tcnatile.com/), water absorption is under half a percent, which is a number hardwood cannot dream about. The planks in this bathroom will outlast the vanity, the tub and most opinions about them.",
          "The one honest tradeoff: tile is colder and harder than wood without heating mats, and dropped glassware loses every argument with it. We tell clients both, then they pick tile anyway, and they are right.",
        ],
      },
      {
        h2: "Where this fits in a budget",
        ps: [
          "A bathroom floor in wood look porcelain sits in the standard bathroom floor band on our [tile installation page](/services/tile-installation), with the planks themselves ranging from $3 to $9 per square foot at the store. It also travels well beyond bathrooms: we have run the same planks through Reading rowhome kitchens and mudrooms where real wood had already died once. If your floor plan includes water, plan the wood that can swim.",
        ],
      },
    ],
  },
  {
    slug: "ceiling-water-damage-repair-reading-pa",
    title: "The Stain That Grew: Ceiling Water Damage Repair Near Reading",
    metaTitle: "Water Damage Ceiling Repair in Reading PA: Case Study",
    metaDescription:
      "Repairing a water damaged ceiling near Reading PA: finding the leak first, cutting back to sound drywall, drying, mold prevention and invisible texture blending.",
    city: { name: "Reading", slug: "reading-pa" },
    serviceSlugs: ["drywall-installation-repair"],
    duration: "3 days plus drying time",
    scope: ["Leak diagnosis", "Controlled demo", "Drying verification", "New drywall and blend", "Ceiling repaint"],
    hero: "ceiling-drywall-mudded-pa",
    photos: ["ceiling-drywall-mudded-pa", "recessed-drywall-access-panel-pa", "drywall-skim-coat-hallway-pa"],
    intro: [
      "It started, as it always does, as a faint tea colored ring the owners decided to monitor. Ceiling stains do not appreciate being monitored. By the time we got the call, the ring near Reading had grown continents, the tape joint had let go, and the drywall above the dining table had developed a subtle but sincere sag.",
      "Water damage repair is two jobs wearing one invoice: solve the water, then repair the ceiling. Doing them in the wrong order is how the same ceiling gets repaired twice, so this case study covers the sequence that makes the fix permanent.",
    ],
    sections: [
      {
        h2: "The water always gets found first",
        ps: [
          "Water travels along framing and shows up rudely far from its source, so the stain location is a clue, not an answer. We traced this one to a slow supply fitting drip at the upstairs toilet, tightened years ago by hope alone. A plumber replaced the fitting before we touched a sheet of drywall, because patching under an unsolved leak is redecorating a problem.",
          "Then we cut back to dry, sound board and verified moisture readings in the framing before closing anything. Wet material that gets sealed behind new drywall becomes a mold farm with a warranty claim attached. The [EPA's mold cleanup guidance](https://www.epa.gov/mold) draws the practical line: dry it fast, remove what stayed wet, and never entomb moisture.",
        ],
      },
      {
        h2: "Making the repair vanish",
        ps: [
          "A ceiling patch that shows is a patch you paid for twice. New board went in with staggered seams tied into the old, tape and three coats feathered wide, and the texture blended to match the existing finish. Then, the step most repairs skip: we repainted the entire ceiling plane, corner to corner. Paint ages like everything else, and a fresh rectangle on an old ceiling is a signed confession under every dinner conversation.",
          "While the ceiling was open we added one upgrade: a flush access panel below the repaired plumbing, painted to disappear. The next fitting that misbehaves will be a five minute look instead of a demolition.",
        ],
      },
      {
        h2: "What to do about your own stain",
        ps: [
          "If a ceiling ring is growing, moving from tea to brown, or the surface is soft to a gentle press, the monitoring phase is over. Repairs at the small stain stage cost a fraction of the sagging stage, and both cost less than the collapse stage, which we have also met. Our [drywall repair service](/services/drywall-installation-repair) handles the full sequence, leak coordination included, across Reading and [the wider service area](/service-areas/reading-pa).",
        ],
      },
    ],
  },
];
