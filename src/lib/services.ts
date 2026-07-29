// All service page content. Written by hand. Keep the voice: plain, specific,
// confident, one light joke per page at most. No em dashes anywhere.

export type PriceRow = { label: string; range: string };
export type Step = { t: string; d: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  navName?: string;
  short: string;
  hero: string;
  metaTitle: string;
  metaDescription: string;
  pillar?: boolean;
  children?: string[];
  intro: string[];
  included: Step[];
  process?: Step[];
  price?: { note: string; rows: PriceRow[] };
  photos: string[];
  faqs: Faq[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "interior-remodeling",
    name: "Interior Remodeling",
    short: "Full interior renovations from framing to the final coat of paint. One team, one schedule, one person to call.",
    hero: "open-concept-living-remodel-lancaster-pa",
    metaTitle: "Interior Remodeling Contractor in Lancaster County PA",
    metaDescription:
      "Turnkey interior remodeling in Lancaster and Chester County. Framing, drywall, tile, doors, trim and full room renovations by one licensed contractor. PA #PA214721. Free estimates.",
    pillar: true,
    children: [
      "bathroom-remodeling",
      "kitchen-remodeling",
      "basement-finishing",
      "drywall-installation-repair",
      "tile-installation",
      "custom-framing",
      "interior-doors-trim",
      "full-room-renovation",
      "tub-to-shower-conversion",
      "walk-in-shower-installation",
      "cabinet-installation",
      "lvp-flooring-installation",
      "popcorn-ceiling-removal",
      "wainscoting-installation",
      "vanity-installation",
      "bathroom-ventilation-fans",
      "tile-backsplash-installation",
      "tile-repair-regrouting",
      "load-bearing-wall-removal",
      "basement-bathroom-addition",
      "egress-window-installation",
      "plaster-repair-restoration",
      "skim-coating",
      "interior-door-installation",
      "accent-wall-installation",
    ],
    intro: [
      "Most interior remodels go sideways for one reason: too many companies on one job. The framer blames the drywaller, the drywaller blames the tile guy, and you spend your evenings playing referee.",
      "DAVMEL Remodeling does it differently. Our own team handles framing, drywall, tile, doors, trim and finishes. When one trade ends and the next begins, nobody waits three weeks for a callback. The schedule holds because it all belongs to one crew.",
      "We are a licensed Pennsylvania contractor (PA #PA214721) based in Denver, Lancaster County. Since 2020 we have rebuilt bathrooms, finished basements and renovated whole floors across Lancaster and Chester County. The photos on this site are our actual work, not a stock library.",
    ],
    included: [
      { t: "Full bathroom and kitchen remodels", d: "Demo to done, including tile, vanities, fixtures and lighting coordination." },
      { t: "Basement finishing", d: "Framing, insulation, drywall, flooring, doors and trim. A real living space, not a damp afterthought." },
      { t: "Drywall and plaster work", d: "New hangs, skim coats, repairs and level 4 or 5 finishes that hold up under raking light." },
      { t: "Tile installation", d: "Floors, showers, backsplashes. Flat, level and waterproofed the correct way." },
      { t: "Doors, trim and carpentry", d: "Interior doors, casing, baseboard, wainscoting and accent walls with tight miters." },
      { t: "Whole room renovations", d: "Everything above, sequenced in the right order, on one written schedule." },
    ],
    process: [
      { t: "Walkthrough and estimate", d: "We look at the actual conditions, talk through what you want, and give you a written number. Free, and you get it fast." },
      { t: "Fixed scope and schedule", d: "You know what is included, what is not, and when we start. Changes get priced in writing before we do them." },
      { t: "Build", d: "Dust protection goes up first. The site gets broom cleaned at the end of every day. Your house stays livable." },
      { t: "Walkthrough and punch list", d: "We walk the job together, fix what needs fixing, and only then call it finished." },
    ],
    photos: [
      "oak-staircase-renovation-lancaster-pa",
      "geometric-accent-wall-lvp-flooring-pa",
      "built-in-bookcase-wall-pa",
      "wainscoting-picture-frame-molding-pa",
      "drywall-taping-stone-accent-beam-pa",
      "kitchen-remodel-quartz-farmhouse-sink-pa",
    ],
    faqs: [
      {
        q: "Do you use subcontractors?",
        a: "Our core trades are in house: framing, drywall, tile, doors, trim and finish work. For licensed specialty trades like electrical and plumbing we bring in the same local pros we use on every job, and we manage them. You never have to coordinate anyone.",
      },
      {
        q: "Can we live in the house during the remodel?",
        a: "Almost always yes. We seal off the work zone with dust barriers, protect floors along the paths we use, and clean up daily. A bathroom remodel or basement build out rarely requires you to move anywhere.",
      },
      {
        q: "Do you handle permits?",
        a: "Yes. When a project needs a permit, we pull it through your township or borough and schedule the inspections. Permit rules vary a lot between Lancaster County municipalities, and we deal with them weekly.",
      },
      {
        q: "How far do you travel?",
        a: "We are based in Denver PA and work across Lancaster County, Chester County and nearby parts of Berks and Lebanon County. Roughly 75 miles around home base.",
      },
    ],
    related: ["bathroom-remodeling", "basement-finishing", "full-room-renovation"],
  },

  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    short: "Complete bathroom rebuilds with proper waterproofing, clean tile work and fixtures that sit straight.",
    hero: "bathroom-remodel-marble-tile-lancaster-pa",
    metaTitle: "Bathroom Remodeling in Lancaster County PA",
    metaDescription:
      "Full bathroom remodels in Lancaster and Chester County PA. Waterproofed showers, custom tile, new vanities and fixtures by a licensed contractor. See real project photos and honest price ranges.",
    intro: [
      "A bathroom is the hardest room in the house to get right. Water wants to find every shortcut, and in a bathroom there are a hundred places to take one. We take none. Shower pans get tested before tile goes on. Cement board goes where cement board belongs. Waterproofing gets done as a system, not a coat of paint on drywall.",
      "We have rebuilt bathrooms across Lancaster and Chester County in every style: marble tile with chrome, black onyx look walls, gold fixtures on black fluted vanities, and plenty of sensible white subway tile. Scroll down, the photos are all our jobs.",
      "Most of our bathroom projects run two to three weeks from demo to done. You get one crew, one schedule, and a shower you will not have to think about again for twenty years.",
    ],
    included: [
      { t: "Full gut and rebuild", d: "Demo, framing corrections, subfloor repair, plumbing and electrical coordination, walls, tile, fixtures, paint." },
      { t: "Walk in showers", d: "Curbless or curbed, glass panels, niches, benches, linear drains. Waterproofed as a tested system." },
      { t: "Tub to shower conversions", d: "The most requested job we do. Usually five to eight days." },
      { t: "Tile floors and walls", d: "Porcelain, marble, mosaic. Laid flat with leveling systems and honest grout lines." },
      { t: "Vanities and fixtures", d: "Supplied by you or sourced by us. Installed level, caulked clean, no wobble." },
      { t: "Lighting and ventilation", d: "LED mirrors, sconces and properly ducted exhaust fans. Yes, the fan has to duct outside. We check." },
    ],
    process: [
      { t: "Estimate and layout", d: "We measure, talk through the layout, and flag anything that will change the price early, like moving a drain or hidden subfloor damage." },
      { t: "Materials locked in", d: "Tile, vanity, fixtures all chosen and on site before demo day. Bathrooms stall when parts arrive late, so we do not start until they are in hand." },
      { t: "Demo and rough in", d: "One to three days. Dust barriers up, floor protection down, debris hauled off." },
      { t: "Waterproofing and tile", d: "Pan test, membrane, then tile. This is the part nobody sees and the part that matters most." },
      { t: "Fixtures, paint and punch list", d: "Everything set, sealed and cleaned. We walk it with you before we call it done." },
    ],
    price: {
      note: "Real ranges for Lancaster and Chester County in 2026. Your number depends on size, tile choices and how much plumbing moves. We give exact written quotes for free.",
      rows: [
        { label: "Tub to shower conversion", range: "$7,000 to $14,000" },
        { label: "Hall bathroom, full remodel", range: "$12,000 to $22,000" },
        { label: "Primary bathroom, full remodel", range: "$20,000 to $40,000+" },
        { label: "Tile shower rebuild only", range: "$6,000 to $12,000" },
      ],
    },
    photos: [
      "walk-in-shower-glass-slider-marble-pa",
      "bathroom-jetted-tub-marble-surround-pa",
      "bathroom-double-vanity-led-mirrors-pa",
      "bathroom-gold-fixtures-black-vanity-pa",
      "bathroom-black-onyx-shower-tile-pa",
      "marble-shower-mosaic-pan-linear-drain-pa",
      "tub-surround-marble-tile-remodel-pa",
      "bathroom-twin-vanities-wainscoting-pa",
      "shower-pan-liner-install-pa",
      "bathroom-demolition-before-pa",
    ],
    faqs: [
      {
        q: "How long does a bathroom remodel take?",
        a: "A tub to shower conversion runs five to eight working days. A full hall bath remodel usually takes two to three weeks. Larger primary baths with moved plumbing can take four. We give you the schedule in writing before demo starts.",
      },
      {
        q: "How much does a bathroom remodel cost in Lancaster County?",
        a: "Most full hall bathroom remodels land between $12,000 and $22,000. Primary baths run $20,000 to $40,000 or more depending on size and finishes. The biggest price drivers are tile selection and whether plumbing moves.",
      },
      {
        q: "Do I need a permit to remodel a bathroom in PA?",
        a: "If we keep fixtures in the same locations, many townships treat it as repair and no permit is needed. Moving plumbing, adding circuits or changing framing usually requires one. We check with your specific municipality and pull it if required.",
      },
      {
        q: "Can you make an old house bathroom look modern?",
        a: "That is most of our work. Lancaster County is full of houses from the 1900s to the 1960s with plaster walls and floors that sag a little. We fix the structure first, then make it beautiful. The marble bathroom at the top of this page started as a 60 year old room.",
      },
    ],
    related: ["tile-installation", "drywall-installation-repair", "full-room-renovation"],
  },

  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    short: "Kitchen renovations built around how you actually cook. Cabinets, counters, tile and lighting on one schedule.",
    hero: "kitchen-remodel-quartz-farmhouse-sink-pa",
    metaTitle: "Kitchen Remodeling in Lancaster County PA",
    metaDescription:
      "Kitchen remodeling in Lancaster and Chester County PA. Cabinet installation, quartz counters, tile backsplashes and full renovations by a licensed contractor. Free written estimates.",
    intro: [
      "A kitchen remodel is really five projects wearing one name: demolition, construction, cabinetry, counters and finishes. The trick is sequencing them so your family is not eating microwave dinners for three months. Our record from demo to cooking again is under four weeks, and we plan every kitchen with that goal.",
      "We handle the full scope: layout changes, framing, drywall, flooring, cabinet installation, tile backsplashes, trim and paint. Counters get templated by the fabricator the day cabinets are set, which shaves a week off the usual timeline.",
      "You choose the style. We have set shaker cabinets with quartz and a farmhouse sink, and we have done clean modern slab fronts. What stays constant is level boxes, straight runs and doors that line up.",
    ],
    included: [
      { t: "Full kitchen renovations", d: "Demo, layout changes, framing, drywall, flooring, cabinets, counters coordination, backsplash, trim and paint." },
      { t: "Cabinet installation", d: "Stock, semi custom or custom boxes set dead level and screwed to studs, not to hope." },
      { t: "Tile backsplashes", d: "Subway, mosaic, full height slabs. Tight cuts around outlets and windows." },
      { t: "Open concept conversions", d: "Wall removal with proper structural support. We assess, and bring in an engineer when the span calls for one." },
      { t: "Lighting layout", d: "Recessed lights, under cabinet strips and pendants placed where you actually work, coordinated with a licensed electrician." },
      { t: "Windows and doors", d: "New kitchen windows and exterior doors installed and flashed correctly during the same project." },
    ],
    price: {
      note: "Honest 2026 ranges for our area. The spread is wide because cabinets alone can be one third of the budget.",
      rows: [
        { label: "Refresh: counters, backsplash, paint", range: "$8,000 to $18,000" },
        { label: "Pull and replace, same layout", range: "$25,000 to $45,000" },
        { label: "Full remodel with layout change", range: "$45,000 to $80,000+" },
      ],
    },
    photos: [
      "kitchen-remodel-quartz-farmhouse-sink-pa",
      "open-concept-living-remodel-lancaster-pa",
      "kitchen-window-installation-pa",
      "marvin-window-installation-interior-pa",
    ],
    faqs: [
      {
        q: "How long will my kitchen be out of commission?",
        a: "For a pull and replace remodel, plan on three to five weeks without a working kitchen. We set up a temporary station with your fridge and microwave, and we sequence the job so the sink comes back online as early as possible.",
      },
      {
        q: "Can you remove the wall between my kitchen and living room?",
        a: "Usually yes. Many walls in ranch homes and townhouses around Lancaster County are load bearing, which means the opening needs a properly sized beam. We evaluate it, bring in a structural engineer when needed, and pull the permit.",
      },
      {
        q: "Should I remodel before selling?",
        a: "A full kitchen remodel rarely pays back its whole cost at sale. A smart refresh often does: counters, hardware, backsplash and paint. Tell us your plans honestly and we will tell you where to stop spending. We would rather do the right sized job.",
      },
      {
        q: "Do you install customer supplied cabinets and appliances?",
        a: "Yes. Plenty of clients order cabinets from a dealer or big box store and have us do everything else. We check the order list before you buy so nothing critical is missing, like filler panels. It is always the filler panels.",
      },
    ],
    related: ["tile-installation", "full-room-renovation", "interior-remodeling"],
  },

  {
    slug: "basement-finishing",
    name: "Basement Finishing",
    short: "Turn the concrete box under your house into real living space. Framed, insulated, drywalled and trimmed.",
    hero: "basement-remodel-framing-spray-foam-pa",
    metaTitle: "Basement Finishing in Lancaster County PA",
    metaDescription:
      "Basement finishing contractor in Lancaster and Chester County PA. Framing, insulation, drywall, flooring and egress compliance. Licensed, insured, free written estimates.",
    intro: [
      "A finished basement is the cheapest square footage you will ever add to your house. The foundation, roof and utilities already exist. What is missing is framing, insulation, drywall, flooring and someone who knows the code requirements for ceiling height, egress and mechanicals.",
      "We finish basements as a system. Moisture gets evaluated first, because carpet on a damp slab is a science experiment, not a rec room. Then framing with pressure treated bottom plates, proper insulation, drywall rated for the space, and flooring that can survive Pennsylvania humidity.",
      "Game room, home office, gym, guest suite with a bathroom. We have built them all, and we will tell you plainly what your basement can and cannot become.",
    ],
    included: [
      { t: "Moisture assessment first", d: "We check the slab and walls before quoting finishes. If there is a water problem, it gets solved before framing, not hidden behind it." },
      { t: "Framing and insulation", d: "Pressure treated plates on concrete, straight walls, spray foam or rigid board where each belongs." },
      { t: "Drywall and ceilings", d: "Hung, taped and finished. Drop ceilings or drywall ceilings with access panels where the shutoffs live." },
      { t: "Flooring", d: "LVP over proper underlayment is the workhorse down here. Warm, waterproof and good looking." },
      { t: "Bathrooms and wet bars", d: "Rough in coordination, tile and fixtures if your plans include plumbing." },
      { t: "Egress and code compliance", d: "Bedroom in the basement means an egress window. We handle the cut, the well and the inspection." },
    ],
    price: {
      note: "Basement pricing in our area runs by the square foot. These 2026 ranges assume a dry basement with normal ceiling height.",
      rows: [
        { label: "Basic finish: open room, one space", range: "$35 to $55 per sq ft" },
        { label: "Full finish with rooms and doors", range: "$50 to $75 per sq ft" },
        { label: "With full bathroom added", range: "add $15,000 to $25,000" },
      ],
    },
    photos: [
      "basement-remodel-framing-spray-foam-pa",
      "wall-framing-plumbing-rough-in-pa",
      "ceiling-insulation-vent-framing-pa",
      "drywall-green-board-hung-taped-pa",
    ],
    faqs: [
      {
        q: "Do I need a permit to finish my basement in Pennsylvania?",
        a: "Yes, almost every municipality in Lancaster and Chester County requires one for basement finishing because it involves framing, electrical and often plumbing. We pull the permit and meet the inspector so you do not have to learn the code chapter on emergency escape openings.",
      },
      {
        q: "My basement gets damp in summer. Can it still be finished?",
        a: "Often yes, but the moisture has to be handled first. Sometimes it is as simple as grading and gutters outside plus a dehumidifier. Sometimes it needs interior drainage. We tell you which case you have before you spend money on drywall.",
      },
      {
        q: "How long does basement finishing take?",
        a: "A typical 600 to 800 square foot basement takes four to six weeks including inspections. Adding a bathroom adds about two weeks.",
      },
      {
        q: "Does a finished basement add value?",
        a: "In our market, appraisers typically credit finished basement space at half to seventy percent of above grade value. More importantly, it is space your family uses every day. That beats a storage room full of boxes you have not opened since the move.",
      },
    ],
    related: ["custom-framing", "drywall-installation-repair", "bathroom-remodeling"],
  },

  {
    slug: "drywall-installation-repair",
    name: "Drywall Installation & Repair",
    navName: "Drywall",
    short: "Hanging, taping, skim coats and repairs. Flat walls with finishes that survive raking light.",
    hero: "drywall-taping-mudding-pa",
    metaTitle: "Drywall Contractor in Lancaster County PA | Installation & Repair",
    metaDescription:
      "Drywall installation and repair in Lancaster and Chester County PA. New hangs, taping, skim coats, plaster repair and ceiling work by a licensed contractor. Free estimates.",
    intro: [
      "Drywall is the one trade where everyone can see your mistakes. Every bad seam shows up at sunset when the light rakes across the wall. We hang square, tape tight and sand until the wall reads flat from every angle. Then we check it with a work light anyway.",
      "Half of our drywall work in Lancaster County is repair: water stains, cracked plaster in older homes, holes from plumbing access, and the ceilings that popcorn forgot. We match texture and blend patches so you cannot find them a month later.",
      "Small patch or whole house hang, we treat it the same way. Clean site, sharp lines, dust kept under control with plastic and negative air when the job calls for it.",
    ],
    included: [
      { t: "New drywall installation", d: "Additions, basements, garages and remodels. Hung, taped and finished to level 4, or level 5 where the paint sheen demands it." },
      { t: "Repairs and patches", d: "Holes, cracks, water damage, failed corner bead. Blended so the patch disappears." },
      { t: "Plaster wall restoration", d: "Older Lancaster and Reading homes have plaster over lath. We repair, skim or overlay it depending on condition." },
      { t: "Skim coating", d: "Full wall skim coats over ugly texture, wallpaper damage or previous bad jobs." },
      { t: "Ceilings", d: "Popcorn removal, sagging ceiling repair and flush access panels that sit invisible in the finish." },
      { t: "Moisture rated board", d: "Green board and cement board in bathrooms and other wet areas, where regular drywall does not belong." },
    ],
    price: {
      note: "Typical 2026 ranges for our area. Small repairs are priced per visit, larger work by the square foot.",
      rows: [
        { label: "Patch repair visit, 1 to 3 patches", range: "$250 to $600" },
        { label: "Hang, tape and finish, new work", range: "$2.50 to $4.00 per sq ft" },
        { label: "Full wall skim coat", range: "$1.50 to $3.00 per sq ft" },
        { label: "Water damage ceiling repair", range: "$400 to $1,200" },
      ],
    },
    photos: [
      "drywall-taping-mudding-pa",
      "drywall-skim-coat-hallway-pa",
      "ceiling-drywall-mudded-pa",
      "recessed-drywall-access-panel-pa",
      "drywall-taping-stone-accent-beam-pa",
      "drywall-green-board-hung-taped-pa",
    ],
    faqs: [
      {
        q: "Can you match my existing wall texture?",
        a: "Yes. Most homes here are smooth finish or light orange peel, and both blend well. We spray or hand apply the texture to match, then prime the patch so the paint takes evenly.",
      },
      {
        q: "My old house has cracked plaster walls. Replace or repair?",
        a: "If the plaster is still keyed to the lath, repair and skim coating is cheaper and keeps the character. If it is loose across large areas, an overlay with new drywall or a full replacement is more honest. We tap the walls and tell you which one you have.",
      },
      {
        q: "How soon can walls be painted after drywall work?",
        a: "Joint compound needs to dry between coats, and the final sanding happens after the last coat cures. On a typical repair you are priming in two to three days. New hangs take about a week of finishing time.",
      },
      {
        q: "Do you just do drywall, or does it need to be a big project?",
        a: "We take standalone drywall jobs all the time. A patch visit is a real service, not a favor. It is also how a lot of clients meet us before trusting us with a bathroom.",
      },
    ],
    related: ["custom-framing", "interior-remodeling", "full-room-renovation"],
  },

  {
    slug: "tile-installation",
    name: "Tile Installation",
    short: "Showers, floors and backsplashes set flat and true, with waterproofing done as a system.",
    hero: "marble-shower-wall-tile-installation-pa",
    metaTitle: "Tile Installation in Lancaster County PA | Showers, Floors, Backsplashes",
    metaDescription:
      "Professional tile installation in Lancaster and Chester County PA. Shower tile, bathroom floors, kitchen backsplashes, marble and porcelain. Licensed contractor, real project photos.",
    intro: [
      "Tile is unforgiving. A crooked outlet cover can be fixed in a minute. A crooked tile line is forever, and you will see it every morning while brushing your teeth. That is why we set tile with laser lines and leveling systems, and why we dry lay the pattern before mixing a single bag of thinset.",
      "Behind the pretty part is the part that matters: substrate prep and waterproofing. Floors get flattened. Showers get membranes and flood tested pans, not just cement board and optimism. Movement joints go where movement happens, so your grout does not crack the first winter.",
      "Porcelain, ceramic, marble, mosaic sheets, large format panels. If you can pick it, we can set it.",
    ],
    included: [
      { t: "Shower and tub surrounds", d: "Waterproofed walls, sloped and tested pans, niches and benches wrapped watertight." },
      { t: "Bathroom and kitchen floors", d: "Porcelain and ceramic over prepared, flat substrates. Heated floor systems on request." },
      { t: "Backsplashes", d: "Subway, herringbone, mosaic. Clean edges, sharp cuts around outlets, no lippage." },
      { t: "Large format tile", d: "Panels and 24 inch plus tile set with the flatness prep they demand." },
      { t: "Marble and natural stone", d: "Sealed and set with white thinset where the stone requires it." },
      { t: "Repairs and regrouting", d: "Cracked tile swaps, regrouting and recaulking of showers that are showing their age." },
    ],
    price: {
      note: "Labor ranges for 2026. Tile itself is on top and varies wildly, from $2 to $40 per square foot at the store.",
      rows: [
        { label: "Backsplash install", range: "$800 to $2,000" },
        { label: "Bathroom floor", range: "$900 to $2,500" },
        { label: "Tub surround tile", range: "$2,500 to $5,000" },
        { label: "Full custom shower", range: "$5,000 to $12,000" },
      ],
    },
    photos: [
      "marble-shower-wall-tile-installation-pa",
      "porcelain-floor-tile-leveling-system-pa",
      "marble-mosaic-vanity-wall-tile-pa",
      "subway-tile-shower-hex-marble-floor-pa",
      "baseboard-trim-hex-marble-tile-floor-pa",
      "mosaic-tile-bathroom-wall-progress-pa",
    ],
    faqs: [
      {
        q: "What is the best tile for a shower?",
        a: "Porcelain is the workhorse: dense, waterproof and available in every look including marble. Real marble is beautiful but needs sealing and gentler cleaners. We walk you through the tradeoffs before you order, not after.",
      },
      {
        q: "Do you install tile over existing tile?",
        a: "We can, but we usually advise against it in wet areas. You inherit whatever is wrong underneath and raise the floor height. Demo is cheap insurance. For a dry floor in good condition, tile over tile can make sense.",
      },
      {
        q: "Why does my grout keep cracking?",
        a: "Usually movement: a bouncy subfloor, missing expansion joints, or grout where caulk should be at plane changes. A proper install addresses all three. If your shower corners are grouted instead of caulked, that is your answer.",
      },
      {
        q: "How soon can we use the new shower?",
        a: "Grout needs about 72 hours to cure before regular use, and silicone wants 24. We tell you the exact date when we finish. Patience here buys you years.",
      },
    ],
    related: ["bathroom-remodeling", "kitchen-remodeling", "drywall-installation-repair"],
  },

  {
    slug: "custom-framing",
    name: "Custom Framing",
    short: "Walls, openings, soffits and structural corrections. The bones of the remodel, done square and plumb.",
    hero: "shower-framing-cement-board-pa",
    metaTitle: "Framing Contractor in Lancaster County PA",
    metaDescription:
      "Custom interior framing in Lancaster and Chester County PA. New walls, wall removal, basement framing, soffits and structural corrections by a licensed remodeling contractor.",
    intro: [
      "Every straight wall and every door that closes without a shove starts with framing. It is the part of the job that disappears behind drywall, which is exactly why it has to be right. Nobody frames for the inspector. You frame for the tile setter, the door hanger and the next twenty years.",
      "We frame new walls, close old openings, open new ones with proper headers, and correct the creative decisions of previous owners. Older homes around Lancaster County are full of surprises: notched joists, missing studs, walls floating on nothing. We find them and fix them.",
      "All framing is done to current IRC code with the right lumber, the right fasteners and pressure treated plates wherever wood meets concrete.",
    ],
    included: [
      { t: "New partition walls", d: "Rooms divided, closets added, offices created. Straight, plumb and quiet with insulation on request." },
      { t: "Wall openings and headers", d: "New doorways and pass throughs with correctly sized headers. Engineering brought in for structural spans." },
      { t: "Basement framing", d: "Full perimeter and partition framing over concrete, built for drywall to land flat." },
      { t: "Shower and tub framing", d: "Alcoves, niches, benches and curbs framed to the exact dimensions the tile system needs." },
      { t: "Soffits and chases", d: "Ductwork and pipes boxed in clean, with access where the code and common sense want it." },
      { t: "Structural corrections", d: "Sagging openings, cut joists, bouncy floors. Diagnosed honestly, repaired properly." },
    ],
    photos: [
      "shower-framing-cement-board-pa",
      "shower-alcove-framing-pa",
      "wall-framing-plumbing-rough-in-pa",
      "ceiling-insulation-vent-framing-pa",
      "basement-remodel-framing-spray-foam-pa",
    ],
    faqs: [
      {
        q: "How do I know if a wall is load bearing?",
        a: "Direction of the joists above, what sits on the wall in the attic or floor above, and where the beams run in the basement. We check all three in person. Rule of thumb guesses from the internet are how headers end up undersized.",
      },
      {
        q: "Can you add a closet to a bedroom?",
        a: "Yes, and it is a smaller job than most people expect. A framed, drywalled and trimmed closet usually takes three to five days including doors.",
      },
      {
        q: "Do framing changes need a permit?",
        a: "Non structural partition walls often do not, but anything load bearing, and most basement finishing, does. Rules differ by township. We know the local offices and handle the paperwork.",
      },
      {
        q: "My floors bounce. Is that fixable?",
        a: "Usually yes. Sistering joists, adding blocking or a mid span beam are all standard fixes. We look at what is under the floor and give you options from cheapest to bulletproof.",
      },
    ],
    related: ["basement-finishing", "drywall-installation-repair", "interior-remodeling"],
  },

  {
    slug: "interior-doors-trim",
    name: "Interior Doors & Trim",
    navName: "Doors & Trim",
    short: "Doors that latch, casing that meets tight, and trim carpentry that makes a room look finished.",
    hero: "white-two-panel-interior-door-pa",
    metaTitle: "Interior Door Installation & Trim Carpentry in Lancaster County PA",
    metaDescription:
      "Interior door installation, casing, baseboard, wainscoting and accent walls in Lancaster and Chester County PA. Finish carpentry by a licensed remodeling contractor.",
    intro: [
      "Trim is the handwriting of a house. You can have perfect walls and floors, but if the miters gap and the doors rub, the whole room reads sloppy. Finish carpentry is where we are pickiest, because it is the layer you actually touch every day.",
      "We hang and adjust interior doors, replace flat 1970s casing with something that has a profile, run baseboard that hugs the floor, and build wainscoting and accent walls that look original to the house.",
      "Every piece gets glued, nailed, filled and caulked. Paint ready means paint ready, not almost.",
    ],
    included: [
      { t: "Interior door installation", d: "Prehung and slab doors hung plumb, with even reveals and latches that click on the first try." },
      { t: "Casing and baseboard", d: "Full house trim packages or single rooms. Tight miters, scribed to real world floors and walls." },
      { t: "Wainscoting and panel molding", d: "Picture frame boxes, board and batten, shiplap. Laid out to the room, not to a formula." },
      { t: "Accent walls", d: "Geometric trim walls, built ins and feature walls that give a room a focal point." },
      { t: "Window trim", d: "Stools, aprons and casing for new and existing windows." },
      { t: "Closet doors and hardware", d: "Bifolds, barn doors, pocket door retrofits and all the hardware fiddling they require." },
    ],
    photos: [
      "white-two-panel-interior-door-pa",
      "interior-door-casing-install-pa",
      "wainscoting-picture-frame-molding-pa",
      "accent-wall-trim-carpentry-pa",
      "geometric-accent-wall-lvp-flooring-pa",
      "black-grid-windows-interior-trim-pa",
    ],
    faqs: [
      {
        q: "How much does it cost to replace interior doors?",
        a: "A prehung door swap with new casing typically runs $350 to $600 per door installed, less per unit when we do the whole house in one visit. Slab only swaps in existing frames cost less but only make sense when the frames are square.",
      },
      {
        q: "Can you match the trim in my older home?",
        a: "Usually. Many profiles from the early 1900s are still milled, and for the rest we combine stock profiles or have a knife made for larger runs. Bring us a sample piece and we will find it.",
      },
      {
        q: "Painted or stained trim?",
        a: "Painted trim is more forgiving and what most buyers expect today. Stained trim is beautiful when the wood deserves it. If your house has original stained chestnut or oak, think twice before painting it, and we will say so out loud.",
      },
      {
        q: "How long does a wainscoting project take?",
        a: "A dining room in picture frame wainscoting is typically two to three days including caulk and ready for paint. We can paint it too.",
      },
    ],
    related: ["full-room-renovation", "drywall-installation-repair", "interior-remodeling"],
  },

  {
    slug: "full-room-renovation",
    name: "Full Room Renovation",
    short: "One room, completely redone. Floors, walls, ceiling, doors, trim and light, sequenced right.",
    hero: "geometric-accent-wall-lvp-flooring-pa",
    metaTitle: "Room Renovation Contractor in Lancaster County PA",
    metaDescription:
      "Complete room renovations in Lancaster and Chester County PA. Bedrooms, living rooms, offices and staircases rebuilt from subfloor to ceiling by one licensed team.",
    intro: [
      "Sometimes a room does not need a gut job. It needs everything else: new flooring, patched and skimmed walls, a modern door, real trim, better lighting and a coat of paint applied by someone who tapes properly. Done together, in the right order, that is a renovation. Done separately over two years, it is a hobby.",
      "We take a room from tired to finished in one continuous run. Because our crew covers framing, drywall, doors, trim and tile, there are no gaps between trades and no month long pauses while everyone waits for the flooring guy.",
      "Living rooms, bedrooms, home offices, staircases and hallways. The oak staircase in our gallery was one of these projects: same footprint, entirely new room.",
    ],
    included: [
      { t: "Flooring", d: "LVP, laminate, tile and prep of whatever surprise lives under the carpet." },
      { t: "Wall and ceiling restoration", d: "Patches, skim coats and paint ready surfaces on old plaster or drywall." },
      { t: "Doors and trim", d: "New doors, casing and baseboard so the room reads finished, not refreshed." },
      { t: "Feature elements", d: "Accent walls, wainscoting, built ins and staircase rebuilds." },
      { t: "Lighting coordination", d: "Recessed lighting and fixture swaps with a licensed electrician." },
      { t: "Paint", d: "Proper prep, two coats, straight lines where wall meets ceiling." },
    ],
    price: {
      note: "Ballparks for a typical 12 by 14 room in 2026. Written quotes are free and exact.",
      rows: [
        { label: "Refresh: floors, paint, trim", range: "$4,000 to $8,000" },
        { label: "Full renovation with wall repair and doors", range: "$8,000 to $16,000" },
        { label: "With built ins or staircase work", range: "$15,000 to $30,000" },
      ],
    },
    photos: [
      "geometric-accent-wall-lvp-flooring-pa",
      "oak-staircase-renovation-lancaster-pa",
      "built-in-bookcase-wall-pa",
      "sitting-room-before-renovation-pa",
      "open-concept-living-remodel-lancaster-pa",
    ],
    faqs: [
      {
        q: "How long does a full room renovation take?",
        a: "A standard bedroom or office runs one to two weeks. Add built ins or a staircase and it stretches to three. You get the schedule up front and daily progress you can see.",
      },
      {
        q: "Is it cheaper to do several rooms at once?",
        a: "Yes, noticeably. Setup, protection and mobilization happen once instead of three times, and material orders combine. If you are planning three rooms over three years, ask us to price them together first.",
      },
      {
        q: "Can you match new flooring to what I have?",
        a: "Often we can get close enough to flow between rooms. When a match is not realistic we plan a clean transition at a doorway. What we will not do is pretend two floors match when they do not.",
      },
      {
        q: "What do you do about furniture?",
        a: "We move it, wrap it and stage it in an adjacent room or garage. It goes back when the paint is dry. You lift nothing.",
      },
    ],
    related: ["interior-doors-trim", "drywall-installation-repair", "interior-remodeling"],
  },

  {
    slug: "exterior-remodeling",
    name: "Exterior Remodeling",
    short: "Decks, windows, doors and porches. The outside jobs, done by the same licensed crew you trusted inside.",
    hero: "composite-deck-white-railing-blue-door-pa",
    metaTitle: "Exterior Remodeling Contractor in Lancaster County PA",
    metaDescription:
      "Exterior remodeling in Lancaster and Chester County PA. Composite decks, replacement windows, entry doors, porch restoration and railings by a licensed contractor. PA #PA214721.",
    pillar: true,
    children: [
      "deck-building",
      "window-door-installation",
      "porch-deck-refinishing",
      "deck-railing-installation",
      "window-capping",
      "entry-door-installation",
      "storm-door-installation",
      "concrete-step-resurfacing",
    ],
    intro: [
      "Pennsylvania weather is a demolition crew that works for free. Sun cooks the south side, freeze and thaw pries apart everything with a gap, and one missed flashing detail becomes a rotted sill in three winters. Exterior work here is about doing the boring details right: flashing, slope, sealant, fasteners.",
      "We build composite decks, install replacement windows and entry doors, rebuild porch steps and railings, and bring weathered exteriors back to life. Same crew, same license, same phone number as our interior work.",
      "Every exterior photo on this page was taken on our own jobs within driving distance of Denver PA. Some were taken from the ladder.",
    ],
    included: [
      { t: "Deck building", d: "Composite and wood decks, elevated structures, cable and vinyl railings." },
      { t: "Window replacement", d: "Full frame and insert replacements with aluminum capping bent on site." },
      { t: "Entry and storm doors", d: "Measured, flashed, insulated and adjusted until they close like a bank vault." },
      { t: "Porch restoration", d: "Steps, railings, columns and floors repaired, rebuilt or refinished." },
      { t: "Exterior stairs and railings", d: "Treated wood stairs and code compliant railings for decks, porches and side entrances." },
      { t: "Concrete step resurfacing", d: "Worn steps resurfaced clean without the cost of full replacement." },
    ],
    photos: [
      "composite-deck-cable-railing-lancaster-pa",
      "elevated-composite-deck-brick-ranch-pa",
      "modern-front-door-sidelites-stone-pa",
      "replacement-windows-aluminum-capping-pa",
      "brick-porch-black-metal-railings-pa",
      "porch-steps-refinishing-before-after-pa",
    ],
    faqs: [
      {
        q: "When is the best season for exterior work in PA?",
        a: "April through November is prime, but decks and doors go in year round. We built the cable railing deck in our gallery in the snow. Stain and sealant are the only things that truly wait for warm, dry days.",
      },
      {
        q: "Do decks need permits in Lancaster County?",
        a: "Most attached decks and anything 30 inches or more above grade require a permit and inspections. Rules vary by township. We handle the drawings, the application and the inspector.",
      },
      {
        q: "Composite or wood?",
        a: "Composite costs more up front and then asks nothing of you for 25 years. Pressure treated wood is cheaper and wants stain every two to three years. We price both and let the math talk.",
      },
      {
        q: "Can you fix just the steps, not the whole porch?",
        a: "Yes. Step rebuilds, railing swaps and resurfacing are regular jobs for us, not too small to bother with. Half our exterior clients started with exactly that.",
      },
    ],
    related: ["deck-building", "window-door-installation", "porch-deck-refinishing"],
  },

  {
    slug: "deck-building",
    name: "Deck Building",
    short: "Composite and wood decks built on proper footings, flashed to the house and railed to code.",
    hero: "composite-deck-cable-railing-lancaster-pa",
    metaTitle: "Deck Builder in Lancaster County PA | Composite & Wood Decks",
    metaDescription:
      "Custom deck builder in Lancaster and Chester County PA. Composite decks, elevated decks, cable railing and treated wood. Licensed, insured, permits handled. Free estimates.",
    intro: [
      "A deck is a structure first and a hangout spot second. The parts that matter most are the parts you never see: footings below frost line, a ledger flashed and bolted to the house correctly, joists sized and spaced for the decking, and hardware rated for outdoor use. Get those right and the deck is boring for thirty years. Get them wrong and it is exciting exactly once.",
      "We build with composite decking for most clients because Pennsylvania weather eats wood finishes. Cable railing, vinyl railing or aluminum, black or white, your call. For budget builds, pressure treated wood still makes a fine deck, and we will tell you honestly which fits your situation.",
      "Elevated decks, ground level platforms, stair runs and landings. Permits, drawings and inspections are on us.",
    ],
    included: [
      { t: "Composite decks", d: "Trex class decking on treated frames, hidden fasteners, picture frame borders." },
      { t: "Elevated and second story decks", d: "Engineered posts and beams, proper bracing, built to inspection standards." },
      { t: "Railings", d: "Cable, vinyl, aluminum and wood railing systems, all built to the 200 pound code load." },
      { t: "Stairs and landings", d: "Comfortable rise and run, lit and railed where code requires." },
      { t: "Deck rebuilds", d: "Keep the solid frame, replace the tired surface and rails. Big savings when the bones are good." },
      { t: "Ledger and flashing repair", d: "The number one cause of deck failures, fixed properly with flashing and structural screws." },
    ],
    process: [
      { t: "Design, drawings and permit", d: "We measure the yard, agree the size and rail system, produce the drawings your township wants and file the permit. Paperwork overlaps material lead times." },
      { t: "Footings and frame", d: "Footings poured below frost line, ledger flashed and bolted, joists sized and spaced for your decking. The inspector sees it before anything is covered." },
      { t: "Decking and railings", d: "Boards with hidden fasteners and a picture frame border, then railings built to the 200 pound code load. This is the fast, satisfying week." },
      { t: "Final inspection and cleanup", d: "Township final, site raked and hauled, hardware torque checked. You get the maintenance one-pager and the warranty in writing." },
    ],
    price: {
      note: "2026 installed ranges for our area, including footings, framing and railings.",
      rows: [
        { label: "Pressure treated wood deck", range: "$40 to $60 per sq ft" },
        { label: "Composite deck", range: "$60 to $95 per sq ft" },
        { label: "Resurface existing frame", range: "$25 to $45 per sq ft" },
        { label: "Stairs, per flight", range: "$1,500 to $4,000" },
      ],
    },
    photos: [
      "composite-deck-cable-railing-lancaster-pa",
      "composite-deck-white-railing-blue-door-pa",
      "elevated-composite-deck-brick-ranch-pa",
      "elevated-deck-corner-white-railing-pa",
      "composite-deck-build-in-progress-pa",
      "cable-railing-deck-stairs-pa",
    ],
    faqs: [
      {
        q: "How much does a composite deck cost in Lancaster County?",
        a: "Most of our composite builds land between $60 and $95 per square foot installed, so a 12 by 16 deck typically runs $12,000 to $18,000 with railings and stairs. Elevated decks and premium rail systems push the top of the range.",
      },
      {
        q: "How long does a deck build take?",
        a: "A typical attached deck takes one to two weeks on site once the permit is issued. Township permit turnaround varies from a few days to a few weeks, and we start the paperwork immediately so the wait overlaps with material lead times.",
      },
      {
        q: "Can you replace just the deck boards?",
        a: "If the frame is sound and correctly built, yes, and it saves serious money. We inspect the joists, ledger and footings first. If the frame is bad we show you why with photos, not just a bigger number.",
      },
      {
        q: "Is cable railing legal for residential decks?",
        a: "Yes, when installed with proper tension and spacing so a 4 inch sphere cannot pass. Ours are engineered systems, not hardware store wire. They pass inspection and they look sharp doing it.",
      },
    ],
    related: ["porch-deck-refinishing", "exterior-remodeling", "window-door-installation"],
  },

  {
    slug: "window-door-installation",
    name: "Window & Door Installation",
    navName: "Windows & Doors",
    short: "Replacement windows, entry doors and storm doors, measured right, flashed right, sealed right.",
    hero: "modern-front-door-sidelites-stone-pa",
    metaTitle: "Window & Entry Door Installation in Lancaster County PA",
    metaDescription:
      "Replacement window and entry door installation in Lancaster and Chester County PA. Aluminum capping, storm doors, proper flashing and insulation. Licensed contractor, free estimates.",
    intro: [
      "A window is only as good as its installation. The best glass on the market leaks if the flashing is wrong, and a mid range window installed correctly outperforms a premium one installed on a Friday afternoon. We measure twice, flash with the right tape in the right order, insulate the gaps with low expansion foam and cap the exterior in bent aluminum so it never needs paint.",
      "Doors get the same respect. An entry door has one job: close perfectly for decades. That takes a square frame, correct shimming, sill sealing and hardware adjustment. The blue door with the fan transom in our gallery closes with a click you can feel in your teeth, in a good way.",
      "We install windows and doors as standalone projects or as part of bigger remodels across Lancaster and Chester County.",
    ],
    included: [
      { t: "Replacement windows", d: "Insert and full frame replacements in vinyl, wood and fiberglass, including Marvin units." },
      { t: "Aluminum capping", d: "Exterior trim wrapped in color matched aluminum, bent on site on our brake. No more painting trim." },
      { t: "Entry doors", d: "Fiberglass and steel entry doors, sidelites and transoms, flashed and insulated correctly." },
      { t: "Storm doors", d: "Measured and installed square so they close softly instead of slamming like a screen door in a movie." },
      { t: "Interior finish", d: "Casing, stools and returns finished inside, so the job is done when we leave, not almost done." },
      { t: "Rot repair", d: "Sills and framing repaired when we open a wall and find history. We fix it and show you photos." },
    ],
    price: {
      note: "Typical 2026 installed prices in our area. Window pricing assumes standard sizes, first floor access.",
      rows: [
        { label: "Vinyl replacement window, insert", range: "$550 to $950 each" },
        { label: "Full frame window replacement", range: "$900 to $1,600 each" },
        { label: "Entry door, installed", range: "$2,200 to $5,500" },
        { label: "Storm door, installed", range: "$650 to $1,200" },
      ],
    },
    photos: [
      "modern-front-door-sidelites-stone-pa",
      "blue-front-door-installation-pa",
      "blue-entry-door-fan-transom-pa",
      "replacement-windows-aluminum-capping-pa",
      "replacement-windows-tan-trim-brick-pa",
      "white-double-hung-window-install-pa",
      "black-storm-door-nine-lite-brick-pa",
      "door-opening-flashing-zip-tape-pa",
    ],
    faqs: [
      {
        q: "Insert replacement or full frame: which do I need?",
        a: "If your existing frames are square and rot free, inserts are faster and cheaper. If there is rot, air leakage or you want more glass area, full frame is the honest fix. We open up one window with you and decide on evidence.",
      },
      {
        q: "How many windows can you do in a day?",
        a: "A two person crew installs four to eight insert windows a day depending on size and floor. Your house is never left open overnight. Every opening we start gets finished and sealed the same day.",
      },
      {
        q: "What is aluminum capping and do I need it?",
        a: "Capping is color matched aluminum bent to wrap your exterior window trim. It seals the wood from weather and ends trim painting forever. If your trim is peeling every few years, capping pays for itself in skipped paint jobs.",
      },
      {
        q: "Can you install a door I bought myself?",
        a: "Yes. We install customer supplied windows and doors regularly. We just ask to confirm the measurements before you order, because a door that is an inch too wide is a very heavy paperweight.",
      },
    ],
    related: ["exterior-remodeling", "deck-building", "interior-doors-trim"],
  },

  {
    slug: "porch-deck-refinishing",
    name: "Porch & Deck Refinishing",
    navName: "Porch Refinishing",
    short: "Weathered porches, steps and decks brought back: repairs, sanding, stain and new railings.",
    hero: "porch-steps-refinishing-before-after-pa",
    metaTitle: "Porch & Deck Refinishing in Lancaster County PA",
    metaDescription:
      "Porch restoration and deck refinishing in Lancaster and Chester County PA. Step rebuilds, sanding and staining, railing replacement and concrete step resurfacing. Free estimates.",
    intro: [
      "You do not always need a new porch. Often you need the one you have, minus fifteen years of weather. Refinishing is the underrated middle option between ignoring the problem and paying for full replacement, and it is a job most contractors will not pick up the phone for. We will.",
      "The process is honest work: rotten boards and treads replaced, everything sanded to clean wood, then penetrating stain or porch enamel applied when the forecast cooperates. Railings get tightened or replaced with new code compliant ones. Concrete steps get resurfaced instead of jackhammered.",
      "The before and after collages in our gallery are one house in Lancaster County: steps, door and shutters, one week of work. The neighbors noticed. That is the point.",
    ],
    included: [
      { t: "Step rebuilds", d: "New treads, risers and stringers where rot or wobble has won, in treated wood or composite." },
      { t: "Sanding and staining", d: "Floors, steps and rails sanded to sound wood and finished with penetrating stain or porch paint." },
      { t: "Railing replacement", d: "Loose, low or ugly railings swapped for solid wood, vinyl or metal systems that meet code." },
      { t: "Concrete step resurfacing", d: "Chipped and worn concrete steps resurfaced with a bonded overlay. New look, no demolition." },
      { t: "Door and shutter refinishing", d: "Front doors and shutters stripped, sanded and refinished. Small job, huge curb appeal." },
      { t: "Board replacement", d: "Selective deck board and fascia replacement when the frame is still good." },
    ],
    price: {
      note: "Typical 2026 ranges. Refinishing is weather dependent, so we schedule these jobs around dry stretches.",
      rows: [
        { label: "Porch steps rebuild", range: "$800 to $2,500" },
        { label: "Porch floor sand and stain", range: "$900 to $2,500" },
        { label: "Concrete steps resurfacing", range: "$600 to $1,800" },
        { label: "Railing replacement, per run", range: "$500 to $1,500" },
      ],
    },
    photos: [
      "porch-steps-refinishing-before-after-pa",
      "porch-door-refinishing-before-after-pa",
      "shutters-refinishing-before-after-pa",
      "concrete-steps-before-resurfacing-pa",
      "concrete-steps-resurfaced-after-pa",
      "new-porch-steps-railings-after-pa",
      "treated-wood-stairs-side-entrance-pa",
      "porch-steps-stained-after-pa",
    ],
    faqs: [
      {
        q: "Is refinishing worth it, or should I just replace the deck?",
        a: "If the frame and most boards are structurally sound, refinishing costs a fraction of replacement and buys 5 to 10 good years. If the structure is going, we say so and quote the rebuild. We make money either way, so you get the real answer.",
      },
      {
        q: "How often does a wood porch need restaining?",
        a: "In Pennsylvania sun and freeze cycles, every two to four years for horizontal surfaces. Verticals last longer. Using a quality penetrating stain instead of a film forming one means the next refresh is a wash and recoat, not a full strip.",
      },
      {
        q: "Can concrete steps really be fixed without replacing them?",
        a: "Yes, if the concrete is solid underneath. A bonded resurfacing layer fixes chips, wear and ugly patches, and it is finished in a day or two. The pair of before and after photos on this page is exactly that job.",
      },
      {
        q: "What time of year can you do this work?",
        a: "Stain wants dry days above 50 degrees, so May through October is the window for finishing. Rebuild and repair work happens year round, and we can split the job: build in March, stain in May.",
      },
    ],
    related: ["deck-building", "exterior-remodeling", "window-door-installation"],
  },
];

import { SERVICES2 } from "./services2";
import { SERVICES3 } from "./services3";
import { SERVICES4 } from "./services4";

SERVICES.push(...SERVICES2, ...SERVICES3, ...SERVICES4);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
export const INTERIOR = SERVICES.filter(
  (s) => !s.pillar && SERVICES[0].children!.includes(s.slug)
);
export const EXTERIOR = SERVICES.filter(
  (s) => !s.pillar && (SERVICES.find((x) => x.slug === "exterior-remodeling")!.children!).includes(s.slug)
);
