// Sub-service landing pages. Same rules as services.ts: plain, specific,
// confident, one light joke per page at most. No em dashes anywhere.

import type { Service } from "./services";

export const SERVICES2: Service[] = [
  {
    slug: "cabinet-installation",
    name: "Cabinet Installation",
    short: "Labor only cabinet installation. Your boxes or ours, set dead level, scribed tight and finished with crown and hardware.",
    hero: "kitchen-remodel-quartz-farmhouse-sink-pa",
    metaTitle: "Cabinet Installation in Lancaster County PA",
    metaDescription:
      "Cabinet installation in Lancaster PA and Chester County. Labor only install of customer supplied or contractor sourced cabinets, set dead level with crown and hardware. Free written estimates.",
    intro: [
      "Cabinet installation is a labor job with furniture grade expectations. The boxes come off a truck square, and everything after that is on the installer: finding the high spot in the floor, snapping level lines around the room, and setting every cabinet to those lines so the counters land flat and the doors line up. We do cabinet installation across Lancaster County as its own service. No full remodel required.",
      "Bring us cabinets from a kitchen dealer, a big box store or an online order, or have us source them through our suppliers. Either way we check the order list before you buy. Missing fillers, wrong depth panels and forgotten toe kicks are the classic ways a two day install becomes a three week wait for one part.",
      "The result you are paying for is simple: dead level boxes screwed to studs, filler panels scribed to walls that are never straight, crown that meets tight in the corners, and hardware drilled with a jig. Forty knobs drilled by eye never comes out even. The jig has no opinions, it just puts the hole in the same place every time. You can see a full set we installed in our [Downingtown kitchen remodel](/projects/kitchen-remodel-downingtown-pa) case study.",
    ],
    included: [
      { t: "Base and wall cabinet setting", d: "Level lines snapped off the high point of the floor, boxes shimmed and screwed to studs with cabinet screws, not drywall screws." },
      { t: "Order review before you buy", d: "We read the cabinet list and catch missing fillers, panels and trim pieces while they are still easy to add." },
      { t: "Filler panels and scribes", d: "Fillers scribed to the real wall so runs end clean instead of ending in a caulked gap." },
      { t: "Crown, light rail and trim", d: "Crown molding, under cabinet light rail and matching trim cut tight and pinned clean." },
      { t: "Island anchoring", d: "Islands blocked and anchored to the floor so they do not shift when someone leans on the counter." },
      { t: "Hardware installation", d: "Knobs and pulls drilled with a jig for identical placement on every door and drawer front." },
    ],
    process: [
      { t: "Measure and order check", d: "We confirm the layout against the actual room and go through the order list line by line before anything ships." },
      { t: "Prep and layout", d: "Old cabinets out if needed, walls patched, studs marked, level lines snapped around the room." },
      { t: "Set the boxes", d: "Uppers first, then bases, shimmed level and screwed to framing. Runs get clamped and joined face frame to face frame." },
      { t: "Trim, hardware and adjust", d: "Fillers, crown, toe kicks and hardware go on, then every door and drawer gets adjusted for even reveals." },
    ],
    price: {
      note: "Labor pricing for 2026, consistent with our kitchen remodeling page. The cabinets themselves are whatever you or we order, and countertops are quoted separately by the fabricator.",
      rows: [
        { label: "Full kitchen cabinet install, labor", range: "$3,000 to $6,000" },
        { label: "Per cabinet box", range: "$90 to $160" },
        { label: "Crown and trim package", range: "add $500 to $1,200" },
        { label: "Hardware install, per piece", range: "$4 to $8" },
      ],
    },
    photos: [
      "kitchen-remodel-quartz-farmhouse-sink-pa",
      "open-concept-living-remodel-lancaster-pa",
      "built-in-bookcase-wall-pa",
      "accent-wall-trim-carpentry-pa",
    ],
    faqs: [
      {
        q: "Do you install cabinets from IKEA or the big box stores?",
        a: "Yes, regularly. Flat pack cabinets take longer because assembly is on us, and we price that up front. The install standard is the same either way: level, screwed to studs, doors aligned. A budget box hung well beats an expensive box hung crooked.",
      },
      {
        q: "Should I replace my cabinets or just update them?",
        a: "If your boxes are plywood and solid, new doors, paint and hardware can get you most of the look for a third of the money, and we will say so at the estimate. Replacement makes sense when the boxes are sagging particle board, water damaged, or the layout itself is the problem.",
      },
      {
        q: "How long does cabinet installation take?",
        a: "A typical kitchen of 15 to 25 boxes takes two to four days to set and trim. Flat pack assembly adds a day or two. We coordinate with your counter fabricator so templating happens as soon as the base cabinets are set, which keeps the whole kitchen timeline tight.",
      },
    ],
    related: ["kitchen-remodeling", "interior-doors-trim", "tile-installation"],
  },

  {
    slug: "tub-to-shower-conversion",
    name: "Tub to Shower Conversion",
    navName: "Tub to Shower",
    short: "The tub goes out, a waterproofed walk in shower goes in. Our most requested bathroom job, usually five to eight days.",
    hero: "walk-in-shower-glass-slider-marble-pa",
    metaTitle: "Tub to Shower Conversion in Lancaster County PA",
    metaDescription:
      "Tub to shower conversion in Lancaster County PA, our most requested bathroom job. Tiled walk in showers with tested waterproofing and glass, typically $7,000 to $14,000.",
    intro: [
      "The tub to shower conversion is the most requested job we do. Most people stand in their tub to shower anyway, stepping over a 15 inch wall twice a day. Taking the tub out and building a real walk in shower makes the room feel bigger, makes it safer, and makes it easier to clean, all in about a week of work.",
      "Here is the part other websites skip: the drain. A tub drain sits at the end of the alcove, and a shower drain usually wants to be closer to the center, which means opening the floor and rerouting pipe between the joists. Most of the time it is routine. Once in a while a joist or a main line sits exactly where the drain wants to go, and the layout adjusts. We tell you which case you have during planning, not on day three.",
      "Everything gets built as a tested system: sloped pan, waterproofing membrane on the walls and floor, a flood test held overnight before a single tile goes on, and solid blocking in the walls so grab bars can go up now or ten years from now. You can walk through a finished one in our [Lancaster tub to shower conversion](/projects/tub-to-shower-conversion-lancaster-pa) case study.",
    ],
    included: [
      { t: "Demo and haul off", d: "Tub, surround and old walls out, debris gone the same day. Cast iron tubs leave in pieces, loudly, but only for an hour." },
      { t: "Plumbing relocation", d: "Drain moved to the shower location and the valve set at shower height, coordinated with a licensed plumber." },
      { t: "Waterproofing as a system", d: "Sloped pan, membrane on walls and floor, and a flood test before tile. This is the part that decides how the shower ages." },
      { t: "Tile walls and floor", d: "Porcelain, marble or subway tile with niches and benches where you want them." },
      { t: "Glass", d: "Sliding doors or fixed panels measured after tile, so they fit the real opening instead of the drawing." },
      { t: "Grab bar blocking", d: "Solid wood blocking in the walls as standard, so bars can be added anytime without hunting for studs." },
    ],
    process: [
      { t: "Estimate and materials", d: "We measure, talk through the layout and lock in tile, base and glass before demo. Nothing starts until materials are on site." },
      { t: "Demo and rough in", d: "Days one and two. Tub out, walls open, drain and valve relocated, blocking installed." },
      { t: "Waterproofing and tile", d: "Pan built and flood tested, membrane up, then tile. The middle of the week belongs to the part you will never see again." },
      { t: "Glass and punch list", d: "Glass installed, fixtures set, silicone cured, and a final walkthrough together before we call it done." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. The spread covers tile selection and how far the drain has to travel. Written quotes are free and exact.",
      rows: [
        { label: "Tub to shower conversion, complete", range: "$7,000 to $14,000" },
        { label: "Drain or valve relocation, complex cases", range: "add $600 to $1,500" },
        { label: "Upgrade to frameless glass", range: "add $800 to $1,500" },
        { label: "Grab bars installed on blocking", range: "$150 to $300 each" },
      ],
    },
    photos: [
      "walk-in-shower-glass-slider-marble-pa",
      "tub-surround-demo-before-pa",
      "shower-pan-liner-install-pa",
      "marble-shower-wall-tile-installation-pa",
      "tub-surround-marble-tile-remodel-pa",
      "subway-tile-shower-hex-marble-floor-pa",
    ],
    faqs: [
      {
        q: "Does removing the tub hurt resale value?",
        a: "If it is the only tub in the house and you might sell within a few years, think twice. Families with small kids look for at least one tub, and appraisers notice. If another bathroom has a tub, or you plan to stay put, convert without guilt. We have talked people out of this job for exactly that reason.",
      },
      {
        q: "How long does a tub to shower conversion take?",
        a: "Five to eight working days is typical. Drain relocation and tile complexity set the pace. Glass sometimes arrives a few days after tile because it is measured against the finished opening, so plan on full use within two weeks of demo day.",
      },
      {
        q: "Can you just put an acrylic insert over everything instead?",
        a: "Insert companies exist and they are faster. What a cover up cannot do is fix what is under the old tub, and there is often something under the old tub. We open it up, repair the subfloor and framing, and build tile that outlasts any liner. Different product, different price, different decade of service.",
      },
    ],
    related: ["bathroom-remodeling", "tile-installation", "full-room-renovation"],
  },

  {
    slug: "walk-in-shower-installation",
    name: "Walk-In Shower Installation",
    navName: "Walk-In Showers",
    short: "Curbless and low curb walk in showers with linear drains, benches and niches, built on tested membrane systems.",
    hero: "marble-shower-mosaic-pan-linear-drain-pa",
    metaTitle: "Walk-In Shower Installation in Lancaster County PA",
    metaDescription:
      "Walk in shower installation in Lancaster County PA. Curbless and low curb showers, linear drains, benches and full membrane waterproofing by a licensed contractor.",
    intro: [
      "A walk in shower is the centerpiece of a modern bathroom, and it is also the most technical thing we build. The floor has to slope exactly right, the waterproofing has to run unbroken from the drain to above the shower head, and the glass has to land on tile that was planned for it weeks earlier. When those three things happen in the right order, you get a shower that looks like a showroom and shrugs off water for twenty years.",
      "Curbless is the look everyone asks about, and it is real construction, not a trick. The shower floor has to sit lower than the bathroom floor, which usually means recessing the subfloor between the joists or building the rest of the floor up. In some houses that is straightforward. In others, a low curb of 2 to 4 inches gets you 95 percent of the look for far less structural work, and we will say so when that is the honest answer.",
      "Linear drains along the wall let the floor slope in one clean plane. Benches get waterproofed like the floor they sit on. Niches get sized for actual shampoo bottles. Under all of it goes a full bonded membrane system, flood tested before tile. We install Schluter class systems because they work, not because the orange is pretty.",
    ],
    included: [
      { t: "Curbless and low curb entries", d: "Subfloor recessed or floor built up for a flush or near flush entry that still drains properly." },
      { t: "Linear drains", d: "Wall side linear drains that let large format tile stay flat while the floor slopes one direction." },
      { t: "Benches and niches", d: "Framed, waterproofed and tiled as part of the system, not tacked on after." },
      { t: "Full membrane waterproofing", d: "Bonded membrane across the pan, walls, bench and niche, with a flood test before tile day." },
      { t: "Glass panels and doors", d: "Fixed panels, frameless doors and sliders measured to the finished tile." },
      { t: "Aging in place details", d: "Grab bar blocking, seat heights and low thresholds planned in, whether you need them now or later." },
    ],
    process: [
      { t: "Layout and drain planning", d: "Slopes, drain location and glass get planned before demo, because a walk in shower is designed backwards from the drain." },
      { t: "Structure and recess", d: "Subfloor recessed or built up, framing for benches and niches, plumbing rough in." },
      { t: "Waterproof and flood test", d: "Membrane installed as one continuous system, then the pan holds water overnight to prove it." },
      { t: "Tile, glass and finish", d: "Tile set with leveling systems, then glass, fixtures and a walkthrough before we call it finished." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. Tile selection and glass configuration swing the number more than anything else. Written quotes are free.",
      rows: [
        { label: "Standard walk in shower, built and tiled", range: "$8,000 to $14,000" },
        { label: "Curbless entry upgrade", range: "add $1,500 to $3,000" },
        { label: "Glass panels and doors", range: "$1,200 to $2,800" },
      ],
    },
    photos: [
      "marble-shower-mosaic-pan-linear-drain-pa",
      "walk-in-shower-glass-slider-marble-pa",
      "subway-tile-shower-hex-marble-floor-pa",
      "bathroom-remodel-marble-tile-lancaster-pa",
      "shower-pan-liner-install-pa",
    ],
    faqs: [
      {
        q: "Is a curbless shower worth the extra cost?",
        a: "If anyone in the house will be over 65 within the next decade, or the curb simply bothers you, yes. If the budget is tight, a 2 to 4 inch low curb shower delivers most of the same feel without floor surgery, and guests will never notice the difference. We price both and let you choose with real numbers.",
      },
      {
        q: "Does a walk in shower without a door get water everywhere?",
        a: "Designed right, no. A fixed glass panel, a shower head aimed along the wall and a floor sloped to a linear drain keep water where it belongs. In smaller bathrooms we usually add a second panel or a door to keep spray in check, and we will tell you if your layout is one of those.",
      },
      {
        q: "What size does a walk in shower need to be?",
        a: "A comfortable walk in starts around 36 by 48 inches. Doorless designs want 42 by 60 or more so the spray stays inside. If your current footprint is smaller, we look at borrowing space from a closet or vanity wall before promising a layout that will feel cramped.",
      },
    ],
    related: ["bathroom-remodeling", "tub-to-shower-conversion", "tile-installation"],
  },

  {
    slug: "popcorn-ceiling-removal",
    name: "Popcorn Ceiling Removal",
    navName: "Popcorn Removal",
    short: "Popcorn texture scraped or skimmed over, refinished flat and painted. Tested first if the house is older than 1980.",
    hero: "ceiling-drywall-mudded-pa",
    metaTitle: "Popcorn Ceiling Removal in Lancaster County PA",
    metaDescription:
      "Popcorn ceiling removal in Lancaster County PA. Scrape or skim over, plain asbestos guidance for pre 1980 homes, level 5 finish and paint. Typical room $600 to $1,400.",
    intro: [
      "Popcorn ceilings had a run from the 1960s into the 1980s because they hid every taping flaw and soaked up a little sound. The run is over. Today the texture dates a room instantly, collects dust and cobwebs, and is nearly impossible to patch invisibly. Removing it is one of the highest impact, lowest glamour projects in remodeling.",
      "First, the caveat we give every caller with a pre 1980 house: popcorn texture from that era can contain asbestos. Before anyone scrapes anything, a sample goes to a lab. The test costs about $50 to $100 and takes a few days. If it comes back positive, we do not scrape it, period. The safe options become skimming over the texture to encapsulate it, covering it with new drywall, or hiring a licensed abatement company. We explain all three in plain English, and we are upfront about which ones we can do ourselves.",
      "For newer or clean tested ceilings there are two roads. Wet scraping takes the texture down to the board, and then the whole ceiling gets skim coated, because scraping always leaves scars. Skimming over buries the texture under new compound without the mess, and it is the right call for painted popcorn, which does not scrape willingly. Either way the target is the same: a flat, level 5 ceiling, primed and painted, that looks like the texture was never there. The decision logic is the same [repair or replace thinking](/blog/drywall-repair-or-replace) we apply to walls.",
    ],
    included: [
      { t: "Asbestos test coordination", d: "Sample and lab testing arranged before any pre 1980 ceiling gets touched." },
      { t: "Full containment", d: "Plastic on floors and walls, sealed doorways, covered vents. The texture ends up in bags, not in your ductwork." },
      { t: "Wet scraping", d: "Texture misted and scraped down to the drywall, with joints and scars repaired afterward." },
      { t: "Skim over encapsulation", d: "New compound floated over the texture in multiple coats when scraping is the wrong tool." },
      { t: "Level 5 finish", d: "A full skim and sand, because ceilings catch raking light all day and show every wave." },
      { t: "Prime and paint", d: "Ceiling primer and flat ceiling paint, cut clean where the ceiling meets the walls." },
    ],
    process: [
      { t: "Test and quote", d: "Age check, asbestos test when the house calls for one, and a written per square foot quote." },
      { t: "Mask everything", d: "Floors, walls, fixtures and vents sealed in plastic before the first scrape." },
      { t: "Scrape or skim", d: "The texture comes down or gets buried, then the ceiling is skim coated flat." },
      { t: "Finish and paint", d: "Sand, prime, paint, and the plastic leaves the house with the mess inside it." },
    ],
    price: {
      note: "2026 ranges for our area. Scraping and skimming price similarly, because the finishing after a scrape is most of the work either way.",
      rows: [
        { label: "Scrape and refinish", range: "$2 to $4 per sq ft" },
        { label: "Skim over, encapsulation", range: "$2.50 to $4.50 per sq ft" },
        { label: "Typical bedroom or living room", range: "$600 to $1,400" },
      ],
    },
    photos: [
      "ceiling-drywall-mudded-pa",
      "drywall-skim-coat-hallway-pa",
      "drywall-taping-mudding-pa",
      "recessed-drywall-access-panel-pa",
    ],
    faqs: [
      {
        q: "How do I know if my popcorn ceiling has asbestos?",
        a: "You cannot tell by looking. If the house was built before 1980, test it. A lab test runs $50 to $100. Asbestos was banned in these textures in 1977, but existing stock stayed on shelves and ceilings for years after, which is why we draw the line at 1980 instead of 1977.",
      },
      {
        q: "Can I remove popcorn ceiling myself?",
        a: "A small unpainted bedroom in a post 1980 house, sure. Buy a garden sprayer and a wide scraper, and accept that it will be the least fun weekend of your year. The catch is the finishing: a scraped ceiling still needs skimming and sanding to look right, and that second half is most of what you are paying us for.",
      },
      {
        q: "What if my popcorn ceiling has been painted?",
        a: "Paint seals the texture so water cannot soften it, which makes scraping slow and ugly. For painted popcorn we usually skim over it instead. Same flat result, less suffering, similar price.",
      },
    ],
    related: ["drywall-installation-repair", "full-room-renovation", "interior-remodeling"],
  },

  {
    slug: "lvp-flooring-installation",
    name: "LVP Flooring Installation",
    navName: "LVP Flooring",
    short: "Luxury vinyl plank installed on properly prepped subfloors, with clean transitions and baseboard that fits.",
    hero: "geometric-accent-wall-lvp-flooring-pa",
    metaTitle: "LVP Flooring Installation in Lancaster County PA",
    metaDescription:
      "LVP flooring installation in Lancaster County PA. Luxury vinyl plank for main floors and basements with honest subfloor prep and clean transitions. Labor from $2.50 per sq ft.",
    intro: [
      "Luxury vinyl plank earned its spot as the workhorse floor of Pennsylvania houses. It is waterproof, warm underfoot, quiet with the right underlayment, and tough enough for dogs, kids and basements. We install LVP through whole main floors, single rooms and finished basements across Lancaster and Chester County.",
      "Now the truth nobody puts in the ad: LVP is only as good as the subfloor under it. Click lock planks want flatness within about 3/16 of an inch over 10 feet. Lay them over a hump and the joints click apart. Lay them over a dip and the floor bounces and gaps. The prep, meaning grinding humps, filling dips with leveler and replacing soft OSB, is the boring half of the job and the half that decides whether the floor lasts.",
      "The other tell of a careful install is at the edges. Transitions at doorways sit flat and match. Planks run under door casings instead of being caulked against them. Baseboard comes off and goes back on, so there is no quarter round strip nailed over the gap. Quarter round is how a floor says someone was in a hurry. We are not.",
    ],
    included: [
      { t: "Moisture and flatness check", d: "Concrete slabs get moisture tested and every subfloor gets checked with a straightedge before we quote the prep." },
      { t: "Subfloor prep and repair", d: "Humps ground down, dips filled with floor leveler, soft or water damaged sheets replaced." },
      { t: "Plank installation", d: "Proper expansion gaps, staggered joints, and planks racked from multiple boxes so the pattern never repeats." },
      { t: "Doorways and transitions", d: "Casings undercut so planks slide beneath, with low profile transitions where floors meet." },
      { t: "Baseboard and trim", d: "Existing base pulled and reinstalled, or new baseboard as part of the job. No quarter round unless you ask for it." },
      { t: "Stairs", d: "Matching tread and nosing systems so the staircase flows with the new floor." },
    ],
    process: [
      { t: "Measure and inspect", d: "Square footage, straightedge check, moisture test on slabs, and a written quote with prep priced separately." },
      { t: "Prep", d: "Old flooring out, subfloor repaired and flattened, underlayment or vapor barrier down where the product calls for it." },
      { t: "Install", d: "Planks laid with correct expansion space, tight joints and clean scribed cuts at every wall and pipe." },
      { t: "Trim out", d: "Baseboard, transitions and thresholds installed, floor cleaned and ready to live on." },
    ],
    price: {
      note: "2026 labor ranges for our area. The plank itself runs about $2 to $7 per square foot at the store and is on top of these numbers.",
      rows: [
        { label: "LVP install, labor", range: "$2.50 to $4.50 per sq ft" },
        { label: "Subfloor repair, per sheet", range: "$60 to $95" },
        { label: "Typical 500 sq ft main floor, labor", range: "$2,500 to $4,500" },
      ],
    },
    photos: [
      "geometric-accent-wall-lvp-flooring-pa",
      "open-concept-living-remodel-lancaster-pa",
      "basement-remodel-framing-spray-foam-pa",
      "interior-door-casing-install-pa",
    ],
    faqs: [
      {
        q: "Is LVP good for basements?",
        a: "It is the best floor for most basements. It handles slab moisture that would ruin hardwood and laminate, and it is warmer and quieter than tile. The slab still gets moisture tested first, because a wet basement needs drainage fixed, not a waterproof floor hiding the problem.",
      },
      {
        q: "Can you install LVP over my existing floor?",
        a: "Over tile, sheet vinyl or wood that is flat and solid, often yes, and it saves demo money. The added height matters at doorways, appliances and stair nosings, so we check those spots before saying yes. Over carpet, never.",
      },
      {
        q: "When is LVP the wrong choice?",
        a: "In a full bathroom remodel we still prefer tile, because tile over proper waterproofing survives standing water while LVP seams only resist it. And in an older house with original hardwood under the carpet, refinishing the real wood usually beats covering it. We look first, and we have told plenty of people not to buy LVP for those exact rooms.",
      },
    ],
    related: ["full-room-renovation", "basement-finishing", "interior-doors-trim"],
  },

  {
    slug: "wainscoting-installation",
    name: "Wainscoting & Panel Molding",
    navName: "Wainscoting",
    short: "Picture frame wainscoting, board and batten and panel molding, laid out to the room and installed paint ready.",
    hero: "wainscoting-picture-frame-molding-pa",
    metaTitle: "Wainscoting & Panel Molding in Lancaster County PA",
    metaDescription:
      "Wainscoting installation in Lancaster County PA. Picture frame boxes, board and batten and panel molding laid out right and installed paint ready by a licensed contractor.",
    intro: [
      "Wainscoting is layout math wearing nice clothes. Anyone can nail molding to a wall. The reason some rooms look custom and others look like a long weekend is spacing: box widths that stay consistent around the room, margins that repeat, and corners, outlets and windows that land inside the pattern instead of fighting it. We work the math out on paper first, then draw the full layout on the wall in pencil before a single piece gets cut.",
      "Picture frame boxes under a chair rail make a dining room formal. Board and batten runs taller and reads modern farmhouse. Full wall panel molding turns a flat bedroom wall into the focal point of the room. We build all three, and the [West Chester dining room](/projects/dining-room-wainscoting-west-chester-pa) in our projects section shows what finished layout math looks like.",
      "One caveat for older Lancaster County homes: plaster walls play by different rules. Nails alone will not hold molding in aging plaster, so pieces get construction adhesive plus pins into the framing, and wavy plaster means extra scribing and caulk time. It all works fine, it just takes longer than drywall, and we price that honestly at the estimate instead of discovering it on your invoice.",
    ],
    included: [
      { t: "Picture frame wainscoting", d: "Chair rail and boxes with consistent margins, mitered tight and returned cleanly at doorways." },
      { t: "Board and batten", d: "Flat stock verticals and rails over smooth or skimmed walls, capped with a ledge if you want one." },
      { t: "Full wall panel molding", d: "Floor to ceiling frames for accent walls and primary bedrooms." },
      { t: "Chair rail and cap details", d: "Profiles matched to your existing trim so the new work looks original to the house." },
      { t: "Layout drawings", d: "The whole pattern drawn on the wall for your approval before we cut anything." },
      { t: "Paint ready finish", d: "Glued, nailed, filled, sanded and caulked. Paint ready means paint ready, and we can paint it too." },
    ],
    process: [
      { t: "Measure and design", d: "Wall dimensions, outlet and window positions, and a box layout worked out on paper with you." },
      { t: "Pencil layout on the wall", d: "The full size pattern goes up in pencil first. Spacing problems get caught here, while they still cost nothing." },
      { t: "Install", d: "Rails, stiles and frames glued and nailed, scribed to the floors and corners the house actually has." },
      { t: "Fill, caulk and finish", d: "Nail holes filled, joints caulked, then primed and painted if painting is in your scope." },
    ],
    price: {
      note: "2026 ranges for our area. MDF keeps painted work affordable, poplar and hardwood raise it, and plaster walls add labor as described above.",
      rows: [
        { label: "Dining room, picture frame package", range: "$1,400 to $2,600" },
        { label: "Board and batten accent wall", range: "$900 to $1,800" },
        { label: "Panel molding, per linear foot", range: "$14 to $24" },
      ],
    },
    photos: [
      "wainscoting-picture-frame-molding-pa",
      "accent-wall-trim-carpentry-pa",
      "built-in-bookcase-wall-pa",
      "interior-door-casing-install-pa",
      "white-two-panel-interior-door-pa",
    ],
    faqs: [
      {
        q: "MDF or real wood for wainscoting?",
        a: "For painted work in dry rooms, MDF is the right answer: stable, smooth and it takes paint beautifully. We switch to poplar around bathrooms and mudrooms where moisture and shoe scuffs live. Stain grade hardwood only makes sense when the wood will actually show.",
      },
      {
        q: "Can you install wainscoting on plaster walls?",
        a: "Yes, with adjustments. Construction adhesive plus nails into framing instead of nails alone, and extra scribing where the plaster waves. If the plaster is loose or badly cracked we repair that first, because molding cannot hold a wall together. Our drywall crew handles that in the same project.",
      },
      {
        q: "Is wainscoting a DIY project?",
        a: "Board and batten honestly is, if you are patient and own a nail gun. Picture frame wainscoting is where we get the rescue calls, because forty miters compound every small spacing error. If you want to try it yourself, we will not talk you out of it. If you want it done in two days with someone else vacuuming, that is us.",
      },
    ],
    related: ["interior-doors-trim", "full-room-renovation", "drywall-installation-repair"],
  },
];
