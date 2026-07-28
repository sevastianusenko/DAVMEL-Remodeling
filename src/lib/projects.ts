// Project case studies. Written as stories: what we walked into, what we did,
// what the owner should know. Paragraphs support [text](url) and **bold**.
// City assignments: verify with David before changing. No em dashes anywhere.

export type ProjectSection = { h2: string; ps: string[]; list?: string[] };

export type Project = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  city: { name: string; slug: string };
  serviceSlugs: string[];
  duration: string;
  scope: string[];
  hero: string;
  photos: string[];
  intro: string[];
  sections: ProjectSection[];
};

export const PROJECTS: Project[] = [
  {
    slug: "porch-refinishing-lancaster-pa",
    title: "One Week, One Porch: A Full Refinish in Lancaster",
    metaTitle: "Porch Refinishing in Lancaster PA: Before & After Case Study",
    metaDescription:
      "How we brought a weathered Lancaster PA porch back in one week: step repairs, sanding, stain, door and shutter refinishing. Real before and after photos with honest advice.",
    city: { name: "Lancaster", slug: "lancaster-pa" },
    serviceSlugs: ["porch-deck-refinishing"],
    duration: "6 working days",
    scope: ["Step tread replacement", "Full sand to bare wood", "Penetrating stain", "Door and shutter refinish"],
    hero: "porch-steps-refinishing-before-after-pa",
    photos: [
      "weathered-porch-steps-before-pa",
      "porch-steps-stained-after-pa",
      "porch-door-refinishing-before-after-pa",
      "shutters-refinishing-before-after-pa",
    ],
    intro: [
      "The owners of this Lancaster home did not want a new porch. They wanted their porch, the one from the family photos, minus fifteen years of sun and snow. Every contractor before us had quoted a full rebuild. We quoted a week of honest labor instead.",
    ],
    sections: [
      {
        h2: "What fifteen winters actually do",
        ps: [
          "The steps were gray and fuzzy, the 15 lite door had faded to driftwood, and the shutters looked chalky. But the screwdriver test told the real story: solid wood almost everywhere. Pennsylvania weather kills finishes long before it kills lumber. That gap between how a porch looks and what it is structurally is where refinishing lives, and where homeowners overspend most often.",
          "We replaced two treads that had genuinely rotted, sanded every horizontal surface to clean wood, and stained on the first dry 70 degree stretch of the spring. The door and shutters got stripped and refinished in a dark walnut that made the brick pop.",
        ],
      },
      {
        h2: "Advice we gave the owners",
        ps: [
          "Use a penetrating stain, never a film forming one, on horizontal exterior wood. Film products look glossy for two seasons and then peel, and stripping them costs more than the original job. With penetrating stain, maintenance is a wash and a recoat every two to four years.",
          "If your own porch looks like the before photos, run the screwdriver test on the ledger and stringers before believing any rebuild quote. Our full decision guide is in [Refinish, Resurface or Rebuild](/blog/deck-refinishing-vs-replacement), and the service details are on the [porch refinishing page](/services/porch-deck-refinishing).",
        ],
      },
    ],
  },
  {
    slug: "marble-bathroom-remodel-lancaster-pa",
    title: "A 60 Year Old Bathroom Learns Marble in Lancaster",
    metaTitle: "Bathroom Remodel in Lancaster PA: Marble Tile Case Study",
    metaDescription:
      "Full bathroom remodel in Lancaster PA: a 1960s room gutted to studs and rebuilt with marble look tile, new subfloor and chrome fixtures. Timeline, process and advice.",
    city: { name: "Lancaster", slug: "lancaster-pa" },
    serviceSlugs: ["bathroom-remodeling", "tile-installation"],
    duration: "3 weeks",
    scope: ["Gut to studs", "Subfloor repair", "Marble look tile", "New vanity and fixtures"],
    hero: "bathroom-remodel-marble-tile-lancaster-pa",
    photos: [
      "bathroom-remodel-marble-tile-lancaster-pa",
      "bathroom-remodel-skylight-white-tile-pa",
      "porcelain-floor-tile-leveling-system-pa",
    ],
    intro: [
      "This bathroom was installed when Kennedy was president, and it had the plumbing to prove it. The owners lived with it for years because every quote they got started with a scary number and ended with a shrug about surprises. We started with the surprises instead.",
    ],
    sections: [
      {
        h2: "Open first, quote honestly",
        ps: [
          "In houses this age we tell clients up front: the subfloor around the toilet is guilty until proven innocent. Sure enough, demo revealed soft plywood and a corroded galvanized supply line. Because we had flagged both as likely, the change order was small, written and expected instead of a mid project ambush.",
          "The rebuild went by the book: new subfloor, cement board in the wet zone, a waterproofing membrane behind every tile, then large format marble look porcelain set on a leveling system. Chrome fixtures and an oversized mirror finished a room that now gets shown to guests on purpose.",
        ],
      },
      {
        h2: "What owners of older homes should know",
        ps: [
          "Budget a 10 to 15 percent contingency on any bathroom older than 1980, and ask every bidder how they price hidden damage before it is found. The difference between a written contingency process and we will see is the difference between a remodel and a hostage situation.",
          "Our full pricing breakdown is in [Bathroom Remodel Cost in Lancaster County](/blog/bathroom-remodel-cost-lancaster-pa), and the process details live on the [bathroom remodeling page](/services/bathroom-remodeling).",
        ],
      },
    ],
  },
  {
    slug: "elevated-composite-deck-denver-pa",
    title: "An Elevated Deck for a Brick Ranch Near Denver",
    metaTitle: "Composite Deck Builder in Denver PA: Elevated Deck Case Study",
    metaDescription:
      "Building an elevated composite deck on a brick ranch near Denver PA: engineered posts, white vinyl railing, gray decking and a blue door that ties it together.",
    city: { name: "Denver", slug: "denver-pa" },
    serviceSlugs: ["deck-building"],
    duration: "2 weeks on site",
    scope: ["Engineered post structure", "Gray composite decking", "White vinyl railing", "Stair run"],
    hero: "elevated-composite-deck-brick-ranch-pa",
    photos: [
      "elevated-composite-deck-brick-ranch-pa",
      "elevated-deck-corner-white-railing-pa",
      "composite-deck-build-in-progress-pa",
      "composite-deck-white-railing-blue-door-pa",
    ],
    intro: [
      "Ten minutes from our shop, this brick ranch had a back door that opened onto a story of air. The owners wanted an elevated deck big enough for family dinners, and they wanted to never stain anything again. Composite it was.",
    ],
    sections: [
      {
        h2: "Elevation changes the engineering",
        ps: [
          "A deck eight feet up is not a patio on stilts. Post sizing, beam spans, bracing and footing depth all change, and the township rightly wants drawings. We sized the structure to code, poured footings below frost line, and bolted a flashed ledger to the house band joist. The visible part, gray decking with white vinyl rail, went on last and fastest.",
          "The proudest detail is the one nobody notices: diagonal bracing that keeps the structure from ever developing that subtle sway elevated decks get when someone skips it.",
        ],
      },
      {
        h2: "Composite advice from this build",
        ps: [
          "Composite boards expand and contract with temperature more than wood. Gapping per the manufacturer's chart matters, especially on a deck that takes full afternoon sun. So does joist spacing: most composite wants 16 inches or tighter, which is exactly why board swaps on old 24 inch frames go wrong. [Trex's care guidance](https://www.trex.com/care/) covers cleaning, and it amounts to soap and water twice a year.",
          "Planning something similar? Start at the [deck building page](/services/deck-building) for real 2026 pricing, or read [how we decide between refinish, resurface and rebuild](/blog/deck-refinishing-vs-replacement).",
        ],
      },
    ],
  },
  {
    slug: "double-vanity-bathroom-denver-pa",
    title: "Two Sinks, Zero Morning Traffic: A Denver PA Bath",
    metaTitle: "Bathroom Remodel in Denver PA: Double Vanity Case Study",
    metaDescription:
      "A Denver PA bathroom remodel built around a double vanity, LED mirrors and black fixtures. How we planned the layout, what it cost to run, and lighting advice.",
    city: { name: "Denver", slug: "denver-pa" },
    serviceSlugs: ["bathroom-remodeling"],
    duration: "2.5 weeks",
    scope: ["Double vanity install", "LED mirrors", "Black fixture package", "Tile flooring"],
    hero: "bathroom-double-vanity-led-mirrors-pa",
    photos: ["bathroom-double-vanity-led-mirrors-pa", "bathroom-wood-look-tile-floor-install-pa"],
    intro: [
      "Two adults, one sink, thirty rushed minutes every weekday morning. The math of this Denver bathroom did not work, and the owners knew exactly what they wanted: two sinks, good light and fixtures that did not look like every rental they had ever lived in.",
    ],
    sections: [
      {
        h2: "The layout question that decides the budget",
        ps: [
          "A double vanity needs two drain connections and two supply pairs. If your existing plumbing wall can host them, the upgrade is moderate. If the vanity moves across the room, you are paying for new drain runs and the floor comes up. Here the wall cooperated, which kept the project in the middle of our [bathroom pricing ranges](/blog/bathroom-remodel-cost-lancaster-pa).",
          "LED mirrors replaced the usual bar light, black faucets tied into black hardware, and wood look tile went down where carpet, in a bathroom, had committed its slow crime for twenty years.",
        ],
      },
      {
        h2: "Lighting advice worth stealing",
        ps: [
          "Choose LED mirrors with a color temperature switch and set them around 3500K to 4000K for grooming. Warmer light flatters the room but lies about how you look leaving the house. And put the bathroom fan on a timer switch: it should run 20 minutes after every shower, which no human remembers to do manually.",
          "The rest of our bathroom thinking is on the [bathroom remodeling page](/services/bathroom-remodeling).",
        ],
      },
    ],
  },
  {
    slug: "tub-surround-rebuild-ephrata-pa",
    title: "Demo Day to Spa Day: A Tub Surround Rebuild in Ephrata",
    metaTitle: "Tub Surround & Bathroom Rebuild in Ephrata PA: Case Study",
    metaDescription:
      "Full tub surround rebuild in Ephrata PA documented from demolition through framing, shower pan and marble look tile to the finished bathroom. Process and advice.",
    city: { name: "Ephrata", slug: "ephrata-pa" },
    serviceSlugs: ["bathroom-remodeling", "custom-framing", "tile-installation"],
    duration: "2 weeks",
    scope: ["Full demo", "Framing corrections", "Waterproofing system", "Marble look tile surround"],
    hero: "tub-surround-marble-tile-remodel-pa",
    photos: [
      "tub-surround-demo-before-pa",
      "bathroom-demolition-before-pa",
      "shower-framing-cement-board-pa",
      "shower-pan-liner-install-pa",
      "marble-shower-wall-tile-installation-pa",
      "tub-surround-marble-tile-remodel-pa",
    ],
    intro: [
      "This Ephrata bathroom is our favorite kind of case study because we photographed every stage: the tired tub surround, the demo, the framing, the waterproofing and the finish. If you have ever wondered what you are actually paying for between day one and done, scroll this one slowly.",
    ],
    sections: [
      {
        h2: "The part you are really buying",
        ps: [
          "Behind the old tile we found what decades of moisture do to walls built before modern waterproofing: stained studs and framing that had drifted out of plumb. We reframed the alcove square, set cement board, and installed the pan liner with a flood test before a single tile went up. [Oatey's pan liner system](https://www.oatey.com/) is the industry workhorse for a reason, and testing it before tile is the step bad contractors skip because nobody can see it later.",
          "The marble look surround went on last. Tile is the reward, not the work. The work is everything in the middle photos.",
        ],
      },
      {
        h2: "For anyone planning the same",
        ps: [
          "Ask every bidder one question: what is your waterproofing system, by name? A real answer sounds like a product and a method. A bad answer sounds like cement board is waterproof, which it is not.",
          "See finished examples on the [bathroom remodeling page](/services/bathroom-remodeling), or start with a [free estimate](/contact). Ephrata is ten minutes from our shop, so scheduling is easy.",
        ],
      },
    ],
  },
  {
    slug: "window-replacement-capping-ephrata-pa",
    title: "New Windows, Wrapped Right: Replacement and Capping in Ephrata",
    metaTitle: "Window Replacement & Capping in Ephrata PA: Case Study",
    metaDescription:
      "Replacement windows with aluminum capping on a brick home near Ephrata PA. Why capping ends exterior trim painting and what to check before ordering windows.",
    city: { name: "Ephrata", slug: "ephrata-pa" },
    serviceSlugs: ["window-door-installation"],
    duration: "3 days",
    scope: ["Double hung replacements", "Aluminum capping bent on site", "Interior trim returns"],
    hero: "replacement-windows-aluminum-capping-pa",
    photos: [
      "replacement-windows-aluminum-capping-pa",
      "replacement-windows-tan-trim-brick-pa",
      "white-double-hung-window-install-pa",
    ],
    intro: [
      "The owners of this brick home had repainted their window trim three times in ten years, and the wood was still peeling on the south side. The windows themselves were single pane veterans that whistled in February. One project fixed both problems for good.",
    ],
    sections: [
      {
        h2: "Windows are half the job. Capping is the other half.",
        ps: [
          "We installed new double hung units, insulated the gaps with low expansion foam, and then bent color matched aluminum on our brake to wrap every piece of exterior trim. Capping seals the wood from weather permanently. This house will simply never need its window trim painted again, which over twenty years quietly pays for a chunk of the windows.",
          "When choosing replacement units, look for the [ENERGY STAR certification](https://www.energystar.gov/products/residential_windows_doors_and_skylights) for our climate zone. The U factor matters more than the brand sticker, and a mid range certified window installed carefully beats a premium one installed casually.",
        ],
      },
      {
        h2: "The one thing to check before ordering",
        ps: [
          "Open your existing frames and probe the sills. Rot means insert replacements will seal problems inside the wall, and full frame replacement is the honest path. We check this during the estimate and show you what we find. Details and 2026 pricing are on the [window and door page](/services/window-door-installation).",
        ],
      },
    ],
  },
  {
    slug: "gold-black-bathroom-lititz-pa",
    title: "Gold on Black: A Lititz Bathroom With Opinions",
    metaTitle: "Bathroom Remodel in Lititz PA: Gold & Black Design Case Study",
    metaDescription:
      "A bold Lititz PA bathroom remodel with black fluted vanities and gold fixtures. How to do dramatic design without regret, and where to spend in a statement bath.",
    city: { name: "Lititz", slug: "lititz-pa" },
    serviceSlugs: ["bathroom-remodeling"],
    duration: "3 weeks",
    scope: ["Black fluted double vanity", "Gold fixture package", "Framed mirror wall", "Stone counters"],
    hero: "bathroom-gold-fixtures-black-vanity-pa",
    photos: ["bathroom-gold-fixtures-black-vanity-pa"],
    intro: [
      "Lititz clients come with vision boards, and this one arrived fully formed: black fluted cabinetry, brushed gold everything, and absolutely no gray. Our job was to make the drama permanent instead of trendy, which is a real engineering question, not just taste.",
    ],
    sections: [
      {
        h2: "How to be bold without being sorry",
        ps: [
          "The rule we use: put the drama in things that unscrew. Faucets, hardware, mirrors and lights can change in an afternoon five years from now. Keep the things that demo, tile and tubs, in classic materials. Here the tile stayed timeless while the vanity and gold package carried the personality, so a future style change costs hundreds, not ten thousand.",
          "Gold finish quality varies wildly. We steer clients toward PVD finishes, which bond the color at a molecular level and shrug off Pennsylvania hard water. Cheap plated gold starts wearing at the handle within a year, and there is no fixing it.",
        ],
      },
      {
        h2: "Thinking about a statement bath?",
        ps: [
          "Bring the boldest photo you have to the [estimate](/contact). We will tell you which parts of it are forever money and which are afternoon money, then price it honestly against our [bathroom ranges](/blog/bathroom-remodel-cost-lancaster-pa). More of our finished work is on the [projects page](/projects).",
        ],
      },
    ],
  },
  {
    slug: "full-interior-remodel-lititz-pa",
    title: "The Whole First Floor: An Open Concept Remodel in Lititz",
    metaTitle: "Full Interior Remodel in Lititz PA: Open Concept Case Study",
    metaDescription:
      "A complete first floor remodel in Lititz PA: open concept living space, white and gray kitchen with quartz, and a rebuilt oak staircase. One crew, six weeks.",
    city: { name: "Lititz", slug: "lititz-pa" },
    serviceSlugs: ["interior-remodeling", "kitchen-remodeling", "full-room-renovation"],
    duration: "6 weeks",
    scope: ["Open concept conversion", "Kitchen with quartz counters", "Oak staircase rebuild", "LVP throughout"],
    hero: "open-concept-living-remodel-lancaster-pa",
    photos: [
      "open-concept-living-remodel-lancaster-pa",
      "kitchen-remodel-quartz-farmhouse-sink-pa",
      "oak-staircase-renovation-lancaster-pa",
    ],
    intro: [
      "This is the project we point to when someone asks what one crew for everything actually means. Kitchen, living space, staircase and floors, all in six continuous weeks, because the framer, drywaller, tile setter and trim carpenter shared one schedule and, frequently, one lunch break.",
    ],
    sections: [
      {
        h2: "Sequencing is the whole game",
        ps: [
          "An open concept conversion touches structure, so the beam went in first with proper engineering. Then the dominoes fell in order: framing corrections, drywall, the kitchen with its quartz counters templated the same day cabinets landed, LVP flooring in one continuous run, and finally the staircase rebuilt in oak with white balusters while paint dried elsewhere. No trade waited on an outside company, which is how six weeks stayed six weeks.",
          "The staircase deserves its own sentence. It was rebuilt in place, treads and railing, and it is the first thing every visitor touches. Spend where hands go.",
        ],
      },
      {
        h2: "Advice for whole floor projects",
        ps: [
          "Combine everything you are considering into one estimate even if you plan to phase it. Setup, protection and mobilization cost the same whether we renovate one room or four, so the combined price is always better than the sum of separate projects. The reasoning is laid out in [One Contractor vs. a Parade of Subs](/blog/one-contractor-vs-subcontractors), and the service overview is on the [interior remodeling page](/services/interior-remodeling).",
        ],
      },
    ],
  },
  {
    slug: "onyx-shower-remodel-reading-pa",
    title: "Midnight Stone: An Onyx Look Shower Near Reading",
    metaTitle: "Shower Remodel in Reading PA: Black Onyx Tile Case Study",
    metaDescription:
      "A dramatic black onyx look shower rebuild near Reading PA. Working with dark large format tile, lighting a dark bathroom, and honest costs for shower rebuilds.",
    city: { name: "Reading", slug: "reading-pa" },
    serviceSlugs: ["bathroom-remodeling", "tile-installation"],
    duration: "2 weeks",
    scope: ["Shower gut and rebuild", "Large format onyx look tile", "New vanity", "Lighting plan"],
    hero: "bathroom-black-onyx-shower-tile-pa",
    photos: ["bathroom-black-onyx-shower-tile-pa"],
    intro: [
      "Most people see a tile like this on a hotel Instagram and assume it is out of reach. The owners near Reading called us with exactly that screenshot and a modest budget. The secret: dramatic porcelain costs a fraction of the real stone it imitates, and labor is the same either way.",
    ],
    sections: [
      {
        h2: "Dark tile is unforgiving. Good.",
        ps: [
          "Glossy black tile shows every wave in the wall behind it, the way a black car shows every dent. That means substrate prep is everything: we flattened the walls to large format standards before setting a single piece, following the flatness specs the [Tile Council of North America](https://www.tcnatile.com/) publishes for exactly this situation. On dark glossy tile, the prep either happened or it is visible from the doorway.",
          "We paired the walls with a gray vanity and warm lighting, because a black shower in cold light feels like a very stylish cave.",
        ],
      },
      {
        h2: "Budget honesty",
        ps: [
          "A full shower rebuild like this lands in the $6,000 to $12,000 labor range we publish on the [tile installation page](/services/tile-installation), with the tile itself running the spread between porcelain and real stone. If a contractor cannot explain where your project sits in a published range, ask why the range is a secret.",
        ],
      },
    ],
  },
  {
    slug: "basement-framing-reading-pa",
    title: "From Concrete Box to Blank Canvas: Basement Framing in Reading",
    metaTitle: "Basement Finishing in Reading PA: Framing Stage Case Study",
    metaDescription:
      "The framing and insulation stage of a Reading PA basement finishing project: spray foam, steel ceiling grid, moisture strategy and what happens before drywall.",
    city: { name: "Reading", slug: "reading-pa" },
    serviceSlugs: ["basement-finishing", "custom-framing"],
    duration: "Framing stage: 1.5 weeks",
    scope: ["Perimeter framing", "Spray foam insulation", "Ceiling grid", "Mechanical chases"],
    hero: "basement-remodel-framing-spray-foam-pa",
    photos: [
      "basement-remodel-framing-spray-foam-pa",
      "wall-framing-plumbing-rough-in-pa",
      "ceiling-insulation-vent-framing-pa",
    ],
    intro: [
      "Finished basement photos always show the movie night couch. This case study shows the part that decides whether movie night smells like popcorn or mildew: the framing, insulation and moisture strategy underneath a Reading area basement build.",
    ],
    sections: [
      {
        h2: "The order of operations",
        ps: [
          "First, two months of moisture observation through spring rains, because we do not frame over a question mark. Then pressure treated bottom plates on the slab, straight walls floated clear of minor foundation waves, and closed cell spray foam on the rim joists where basements leak heat worst. Ducts and pipes got clean chases with access panels, so the water shutoff is behind a door, not behind drywall and regret.",
          "Every wall you see in these photos exists to make the drywall stage boring. Boring drywall is the goal. Exciting drywall means somebody found a problem too late.",
        ],
      },
      {
        h2: "For Reading area basements specifically",
        ps: [
          "Older Berks County foundations are often stone or early block, which breathe more moisture than modern poured walls. That changes insulation choices: closed cell foam or rigid board against masonry, never fiberglass batts alone, which turn into a wet sweater. We cover the whole decision tree on the [basement finishing page](/services/basement-finishing) and the cost math in [our basement pricing guide](/blog/basement-finishing-cost-pa).",
        ],
      },
    ],
  },
  {
    slug: "mobile-home-deck-stairs-lebanon-pa",
    title: "Small Job, Big Difference: Deck Stairs Rebuilt in Lebanon County",
    metaTitle: "Deck Stair Rebuild in Lebanon PA: Before & After Case Study",
    metaDescription:
      "Rebuilding failing deck stairs at a Lebanon County home: new stringers, treated wood, code compliant railings. Why small exterior jobs deserve real contractors.",
    city: { name: "Lebanon", slug: "lebanon-pa" },
    serviceSlugs: ["porch-deck-refinishing", "deck-building"],
    duration: "3 days",
    scope: ["Demo of failed stairs", "New stringers and treads", "Code compliant railings", "Landing rebuild"],
    hero: "new-porch-steps-railings-after-pa",
    photos: [
      "deck-stairs-peeling-paint-before-pa",
      "porch-step-framing-stringers-pa",
      "new-porch-steps-railings-after-pa",
      "treated-wood-stairs-side-entrance-pa",
    ],
    intro: [
      "The owners had called four contractors about these stairs. Three never called back and one quoted a number that assumed they would go away. Stairs with peeling paint and soft stringers are apparently beneath the industry's attention. They are not beneath ours, and this three day job shows why the small ones matter.",
    ],
    sections: [
      {
        h2: "Stairs fail at the stringers",
        ps: [
          "The treads looked bad, but the stringers, the sawtooth boards carrying everything, were the real problem: cracked at the notches and soft at ground contact. We rebuilt from the stringers up in ground contact rated treated lumber, set the rise and run to a comfortable, legal geometry, and added railings built to take a real fall, not just a casual lean.",
          "Deck and stair collapses spike every summer, and railings are usually the villain. The [deck safety checklist from NADRA](https://www.nadra.org/consumers/) is worth ten minutes of any homeowner's time each spring.",
        ],
      },
      {
        h2: "Why we take three day jobs",
        ps: [
          "Half our biggest projects started as a client who hired us for something small and watched how we treated it. Stairs, a door, a drywall patch: the audition works both ways. If your small exterior job keeps getting ignored, the [porch and exterior repair page](/services/porch-deck-refinishing) is where to start, and Lebanon is comfortably inside [our service area](/service-areas/lebanon-pa).",
        ],
      },
    ],
  },
  {
    slug: "storm-door-installation-lebanon-pa",
    title: "The Quiet Upgrade: A Storm Door Done Right in Lebanon",
    metaTitle: "Storm Door Installation in Lebanon PA: Case Study",
    metaDescription:
      "Installing a black nine lite storm door on a Lebanon County porch: measuring, mounting and adjustment details that separate a soft click from a slam.",
    city: { name: "Lebanon", slug: "lebanon-pa" },
    serviceSlugs: ["window-door-installation"],
    duration: "Half a day",
    scope: ["Storm door supply and install", "Frame squaring", "Closer adjustment"],
    hero: "black-storm-door-board-batten-pa",
    photos: ["black-storm-door-board-batten-pa", "black-storm-door-nine-lite-brick-pa"],
    intro: [
      "A storm door is the cheapest exterior upgrade that touches your house fifty times a week, and the industry treats it as an afterthought sold in a cardboard box. This Lebanon install took half a day and changed the whole face of the porch. The difference is entirely in the details.",
    ],
    sections: [
      {
        h2: "Why storm doors slam",
        ps: [
          "Box store installs mount the frame to whatever the existing casing is doing, which is usually not plumb. The door then closes unevenly, catches the strike, and the closer fights physics until something bends. We square the mounting frame first, shim where the old casing has wandered, and set the closer tension so the door shuts with a soft click you could operate holding a sleeping baby.",
          "The black nine lite glass on this one lets light into the entry all winter while the main door stays open behind it. That is the real function of a storm door in Pennsylvania: a see through storm layer from November to March, a screen door all summer.",
        ],
      },
      {
        h2: "Worth knowing",
        ps: [
          "Measure the opening at three heights before ordering. Old openings are trapezoids more often than anyone admits, and the widest measurement wins. Or skip the geometry homework: our [door installation service](/services/window-door-installation) includes the measuring, the door and the warranty in one price.",
        ],
      },
    ],
  },
  {
    slug: "winter-composite-deck-elizabethtown-pa",
    title: "Yes, We Build Decks in February: A Cable Railing Deck Near Elizabethtown",
    metaTitle: "Winter Deck Build in Elizabethtown PA: Cable Railing Case Study",
    metaDescription:
      "Building a composite deck with black cable railing in a Pennsylvania winter near Elizabethtown. Why off season deck building works and what cable rail really costs.",
    city: { name: "Elizabethtown", slug: "elizabethtown-pa" },
    serviceSlugs: ["deck-building"],
    duration: "10 days, in the snow",
    scope: ["Composite decking", "Black cable railing", "Stair run", "Winter build logistics"],
    hero: "composite-deck-cable-railing-lancaster-pa",
    photos: ["composite-deck-cable-railing-lancaster-pa", "cable-railing-deck-stairs-pa"],
    intro: [
      "There is snow in these photos because we built this deck in it. The owners near Elizabethtown wanted to grill on new boards by the first warm Saturday of spring, and the only way to guarantee that is to build while everyone else waits for it.",
    ],
    sections: [
      {
        h2: "The case for the off season build",
        ps: [
          "Frost line footings pour fine in winter with the right precautions, composite does not care about temperature the way stain does, and township permit offices move faster when their inbox is not full of April dreams. Winter clients get faster scheduling and their deck is simply done when the season starts, instead of half built through it.",
          "The black cable railing was the design centerpiece: it disappears against the treeline and keeps the sight line open. Cable systems must be engineered for tension so the 4 inch sphere rule holds between wires. Hardware store wire on wood posts is not that, and inspectors know the difference on sight.",
        ],
      },
      {
        h2: "Numbers and next steps",
        ps: [
          "Cable rail runs at the premium end of our [deck pricing](/services/deck-building), typically adding 20 to 35 percent over vinyl balusters, and it earns it on views. If a spring deck is the goal, the estimate should happen in fall or winter. Call it counterintuitive, then call [us](/contact).",
        ],
      },
    ],
  },
  {
    slug: "spa-bathroom-jetted-tub-elizabethtown-pa",
    title: "The Everything Bathroom: Jetted Tub and Glass Shower in Elizabethtown",
    metaTitle: "Primary Bathroom Remodel in Elizabethtown PA: Case Study",
    metaDescription:
      "A primary bathroom remodel in Elizabethtown PA with a jetted corner tub, marble surround, glass slider shower and LVP flooring. Layout advice for tub plus shower baths.",
    city: { name: "Elizabethtown", slug: "elizabethtown-pa" },
    serviceSlugs: ["bathroom-remodeling", "tile-installation"],
    duration: "4 weeks",
    scope: ["Jetted corner tub", "Marble tile surround", "Glass slider shower", "Pendant lighting"],
    hero: "bathroom-jetted-tub-marble-surround-pa",
    photos: ["bathroom-jetted-tub-marble-surround-pa", "walk-in-shower-glass-slider-marble-pa"],
    intro: [
      "The owners of this Elizabethtown home had one non negotiable each. She wanted a real soaking tub with jets. He wanted a shower he did not have to sidestep into. The room was just big enough to grant both wishes, if every inch behaved.",
    ],
    sections: [
      {
        h2: "Tub and shower, separately great",
        ps: [
          "The corner jetted tub got a marble tile surround and pendant lights overhead, because a tub you use deserves better than a bare bulb. The shower went full height marble look tile with niches for the bottle collection every household denies having, behind a glass slider that makes the room read twice its size.",
          "Jetted tubs need two things people forget: an access panel for the pump, which we built in flush and paintable, and a dedicated circuit, which our electrician ran during rough in rather than as a surprise later.",
        ],
      },
      {
        h2: "Layout advice for the tub plus shower dream",
        ps: [
          "You need roughly 100 square feet to do both without squeezing. Under that, our honest advice is usually a great walk in shower and no tub, and we will say so even though the tub version costs more. Resale panic about needing a tub applies to the last bathroom in the house, not the primary. Pricing context is in the [bathroom cost guide](/blog/bathroom-remodel-cost-lancaster-pa), and the process is on the [bathroom remodeling page](/services/bathroom-remodeling).",
        ],
      },
    ],
  },
  {
    slug: "twin-vanity-bathroom-west-chester-pa",
    title: "Wainscoting Meets Waterworks: A Twin Vanity Bath in West Chester",
    metaTitle: "Bathroom Remodel in West Chester PA: Twin Vanity Case Study",
    metaDescription:
      "A West Chester PA bathroom remodel with twin white vanities, sconce lighting and wainscoting. Blending classic borough character with modern plumbing.",
    city: { name: "West Chester", slug: "west-chester-pa" },
    serviceSlugs: ["bathroom-remodeling", "interior-doors-trim"],
    duration: "3.5 weeks",
    scope: ["Twin vanity installation", "Wainscoting", "Sconce lighting", "Marble tops"],
    hero: "bathroom-twin-vanities-wainscoting-pa",
    photos: ["bathroom-twin-vanities-wainscoting-pa", "marble-mosaic-vanity-wall-tile-pa"],
    intro: [
      "West Chester houses have manners, and their bathrooms should too. This remodel paired twin white vanities under individual sconces with wainscoting wrapping the room, the kind of detail that looks original to a borough home even when the plumbing behind it is brand new.",
    ],
    sections: [
      {
        h2: "Character is a set of proportions",
        ps: [
          "What makes a bathroom feel period correct is not antique fixtures. It is proportion: wainscoting at the right height, casing with actual profile, sconces at face level instead of a light bar glaring off the mirror. We ran the wainscoting at 38 inches, aligned the sconce centers to the mirrors, and let marble tops carry the luxury quietly.",
          "Behind the manners, everything is modern: new supply lines, proper venting and outlets where code wants them, which in older borough homes is rarely where they currently are.",
        ],
      },
      {
        h2: "For borough homeowners",
        ps: [
          "If your West Chester bathroom still has its original everything, assume the wiring needs attention during any remodel and budget for it up front. Our [trim carpentry](/services/interior-doors-trim) and [bathroom remodeling](/services/bathroom-remodeling) crews work as one team on projects like this, which is exactly the point of hiring one contractor for a room where the trades interlock.",
        ],
      },
    ],
  },
  {
    slug: "dining-room-wainscoting-west-chester-pa",
    title: "The Two Day Room Upgrade: Picture Frame Wainscoting in West Chester",
    metaTitle: "Wainscoting Installation in West Chester PA: Case Study",
    metaDescription:
      "Installing picture frame wainscoting in a West Chester PA dining room: layout math, materials and why trim is the highest value upgrade per dollar in older homes.",
    city: { name: "West Chester", slug: "west-chester-pa" },
    serviceSlugs: ["interior-doors-trim"],
    duration: "2.5 days",
    scope: ["Picture frame wainscoting", "Chair rail", "Caulk and paint prep"],
    hero: "wainscoting-picture-frame-molding-pa",
    photos: ["wainscoting-picture-frame-molding-pa", "accent-wall-trim-carpentry-pa"],
    intro: [
      "No walls moved, no permits filed, no dust storm. Two and a half days of careful trim carpentry turned a plain West Chester dining room into the room where holidays happen. Wainscoting is the highest return per dollar move in interior work, and this project shows why.",
    ],
    sections: [
      {
        h2: "The math nobody sees",
        ps: [
          "Picture frame wainscoting lives or dies on layout. Box widths have to breathe evenly across each wall, negotiate windows and outlets, and land at corners without a sliver. We map every wall on paper first, adjusting box count per wall so the spacing reads consistent even where the walls are not. Then it is glue, nails, fill, caulk and a sharp paint line at the chair rail.",
          "On plaster walls, which most older West Chester homes have, we locate the studs the patient way and adhesive plays a bigger role. Trim that relies on nails finding century old lath is trim that pops loose by Christmas.",
        ],
      },
      {
        h2: "Where this upgrade makes sense",
        ps: [
          "Dining rooms, entries, stair walls and home offices, in that order. It photographs beautifully, which matters if a sale is anywhere in your five year plan. Explore the options on the [doors and trim page](/services/interior-doors-trim), or see how it combines with bigger work in our [full room renovations](/services/full-room-renovation).",
        ],
      },
    ],
  },
  {
    slug: "marble-shower-linear-drain-downingtown-pa",
    title: "Built Like a Watch: A Marble Shower With Linear Drain in Downingtown",
    metaTitle: "Custom Shower Build in Downingtown PA: Linear Drain Case Study",
    metaDescription:
      "A custom marble tile shower with mosaic pan, quartz curb and linear drain in Downingtown PA. What linear drains cost, when they are worth it, and waterproofing details.",
    city: { name: "Downingtown", slug: "downingtown-pa" },
    serviceSlugs: ["bathroom-remodeling", "tile-installation"],
    duration: "2.5 weeks",
    scope: ["Custom shower build", "Linear drain", "Mosaic pan", "Quartz curb"],
    hero: "marble-shower-mosaic-pan-linear-drain-pa",
    photos: [
      "marble-shower-mosaic-pan-linear-drain-pa",
      "subway-tile-shower-hex-marble-floor-pa",
      "mosaic-tile-bathroom-wall-progress-pa",
    ],
    intro: [
      "A linear drain is the difference between a shower floor that slopes four ways to a hole and one that planes cleanly to a slot along the wall. This Downingtown build got the full treatment: marble tile walls, a mosaic pan pitched to a linear drain, and a quartz curb because grout on a curb is a maintenance sentence.",
    ],
    sections: [
      {
        h2: "Why the details in this shower matter",
        ps: [
          "A single plane floor means large format tile can run the pan, the slope is one consistent grade, and the whole floor reads calm. The quartz curb is one solid piece: nothing to regrout, nothing to stain, no caulk line begging for attention every spring. Behind the marble, a bonded waterproofing membrane covers every inch of the wet zone. The [Schluter shower system](https://www.schluter.com/schluter-us/en_US/shower-system) approach we follow treats the shower as a sealed unit, not a tile box that hopes.",
          "The 2000s era builder shower this replaced had lasted 20 years. This one is built to double that, and the difference is entirely in layers no one will ever see again.",
        ],
      },
      {
        h2: "Is a linear drain worth it?",
        ps: [
          "It adds roughly $800 to $1,500 over a center drain by the time the pan work is counted. Worth it for large format floors, curbless ambitions and anyone who winces at busy mosaic. Skippable in a standard tub swap. We will give you the straight recommendation for your room at the [estimate](/contact), and the broader menu is on the [tile installation page](/services/tile-installation).",
        ],
      },
    ],
  },
  {
    slug: "entry-door-sidelites-downingtown-pa",
    title: "First Impressions Department: An Entry Door With Sidelites in Downingtown",
    metaTitle: "Entry Door Installation in Downingtown PA: Case Study",
    metaDescription:
      "Replacing a Downingtown PA entry door with a modern unit and sidelites: flashing done right, rot found and fixed, and why door installation quality outlives the door.",
    city: { name: "Downingtown", slug: "downingtown-pa" },
    serviceSlugs: ["window-door-installation"],
    duration: "2 days",
    scope: ["Entry door with sidelites", "Opening flashed with ZIP tape", "Rot repair", "Interior casing"],
    hero: "modern-front-door-sidelites-stone-pa",
    photos: [
      "old-front-door-before-replacement-pa",
      "door-opening-flashing-zip-tape-pa",
      "modern-front-door-sidelites-stone-pa",
    ],
    intro: [
      "The before photo shows a door that had greeted three decades of Downingtown weather and lost the argument. The owners wanted light in the entry without giving up security or efficiency. A modern unit with sidelites answered all three, but the story of this project is in the middle photo: the naked opening, flashed and ready.",
    ],
    sections: [
      {
        h2: "The two days explained",
        ps: [
          "Day one is demolition and truth. Out came the old door, and at the sill we found the early rot that single pane doors with tired weatherstripping always feed. We cut it back to sound wood, rebuilt the sill area, and flashed the entire opening with ZIP tape in shingle fashion so any future water is directed out, not in. Day two the new unit went in shimmed to perfect square, insulated, and cased inside.",
          "A door with sidelites is really three units in one frame, which means racking during install is the main enemy. Square and shim patience on day two is why this door will close with one finger in 2040.",
        ],
      },
      {
        h2: "Buying advice",
        ps: [
          "Fiberglass doors have won the entry door argument in our climate: steel dents and wood demands paint, while fiberglass shrugs at both. Look for [ENERGY STAR rated](https://www.energystar.gov/products/residential_windows_doors_and_skylights) units and spend the savings on the sidelites you actually want. Full options and pricing live on the [window and door page](/services/window-door-installation).",
        ],
      },
    ],
  },
  {
    slug: "porch-railings-coatesville-pa",
    title: "Iron Manners: New Metal Railings for a Coatesville Brick Porch",
    metaTitle: "Porch Railing Installation in Coatesville PA: Case Study",
    metaDescription:
      "Installing black metal railings on a brick porch in Coatesville PA: anchoring into masonry, meeting code height and the curb appeal math of railing upgrades.",
    city: { name: "Coatesville", slug: "coatesville-pa" },
    serviceSlugs: ["porch-deck-refinishing", "exterior-remodeling"],
    duration: "2 days",
    scope: ["Black metal railing system", "Masonry anchoring", "Code height compliance"],
    hero: "brick-porch-black-metal-railings-pa",
    photos: ["brick-porch-black-metal-railings-pa", "porch-railing-hydrangea-garden-pa"],
    intro: [
      "Coatesville was built by steelworkers, and this brick porch deserved railings with the same backbone. The old ones were loose, low and mostly decorative in the least useful sense. The new black metal system is anchored into the masonry itself, standing next to hydrangeas that clearly approve.",
    ],
    sections: [
      {
        h2: "Anchoring into brick is its own trade",
        ps: [
          "Railing posts on masonry live or die at the anchor. We drill into the brick body or the mortar joint depending on the condition of each, set sleeve anchors or epoxy anchors accordingly, and torque to spec. A railing should take the full weight of an adult stumbling into it, because one day it will. Code asks for 200 pounds of resistance at any point, and grandma asks for more.",
          "Height matters too: old porch railings often sit below the 36 inches modern code requires. Replacing them is a chance to fix the geometry without losing the look.",
        ],
      },
      {
        h2: "The curb appeal math",
        ps: [
          "Railings, a refinished door and house numbers you can read cost a fraction of any remodel and change how the whole block sees the house. For rowhome and twin owners along the Route 30 corridor, it is the highest visibility work per dollar there is. See what else we do outside on the [exterior remodeling page](/services/exterior-remodeling), or check [our Coatesville page](/service-areas/coatesville-pa) for local notes.",
        ],
      },
    ],
  },
  {
    slug: "concrete-steps-resurfacing-coatesville-pa",
    title: "No Jackhammer Required: Concrete Steps Resurfaced in Coatesville",
    metaTitle: "Concrete Step Resurfacing in Coatesville PA: Case Study",
    metaDescription:
      "Resurfacing worn concrete steps at a Coatesville PA home instead of replacing them: bonded overlay process, cost comparison and when resurfacing works.",
    city: { name: "Coatesville", slug: "coatesville-pa" },
    serviceSlugs: ["porch-deck-refinishing"],
    duration: "2 days",
    scope: ["Surface prep and cleaning", "Bonded resurfacing overlay", "Edge and nosing rebuild"],
    hero: "concrete-steps-resurfaced-after-pa",
    photos: ["concrete-steps-before-resurfacing-pa", "concrete-steps-resurfaced-after-pa"],
    intro: [
      "Every quote the owners had collected for these chipped Coatesville steps started with a jackhammer and ended near five figures. Nobody had mentioned that solid concrete with an ugly face does not need demolition. It needs a new face.",
    ],
    sections: [
      {
        h2: "How resurfacing actually works",
        ps: [
          "The steps passed the soundness test: no deep cracks through the mass, no movement, just decades of surface wear, chips and old patch attempts. We cleaned and profiled the surface so a bonded polymer modified overlay could grip, rebuilt the worn nosings, and finished with a uniform texture that looks like new concrete because functionally it is, in the layer that matters.",
          "Two days, a fraction of replacement cost, and no dumpster of rubble. The before and after photos speak for the method.",
        ],
      },
      {
        h2: "When resurfacing is the wrong answer",
        ps: [
          "Structural cracks that go through the steps, movement between sections, or crumbling that runs deep mean the concrete is done and replacement is honest. We tap test and tell you which case you have, the same way we approach [deck refinishing decisions](/blog/deck-refinishing-vs-replacement). Details on the [porch and exterior repair page](/services/porch-deck-refinishing).",
        ],
      },
    ],
  },
  {
    slug: "blue-entry-door-denver-pa",
    title: "The Blue Door Effect: An Entry Transformation Near Denver",
    metaTitle: "Front Door Replacement Near Denver PA: Blue Door Case Study",
    metaDescription:
      "Replacing a plain entry with a blue front door and fan transom near Denver PA. Color advice for front doors, flashing details and what installed doors cost.",
    city: { name: "Denver", slug: "denver-pa" },
    serviceSlugs: ["window-door-installation", "exterior-remodeling"],
    duration: "1.5 days",
    scope: ["Blue entry door", "Fan transom", "Flashing and insulation", "Interior finish"],
    hero: "blue-entry-door-fan-transom-pa",
    photos: [
      "blue-front-door-installation-pa",
      "blue-entry-door-fan-transom-pa",
      "white-entry-door-paver-walkway-pa",
    ],
    intro: [
      "Some projects are structural. This one was psychological. The house near our Denver shop was fine, the entry was fine, everything was relentlessly fine. Then a blue door with a fan transom went in, and suddenly neighbors slowed down on their evening walks. Total time: a day and a half.",
    ],
    sections: [
      {
        h2: "Small opening, full protocol",
        ps: [
          "A short job gets the same physics as a long one. The opening was stripped, checked for rot, flashed properly, and the new unit was shimmed square, foamed and sealed. The fan transom above brings daylight into the hallway that the old solid door had kept out for forty years, which the owners now mention more than the color.",
          "The click of a well hung door is a real thing. Doors that need a shoulder are doors that were installed on a Friday afternoon.",
        ],
      },
      {
        h2: "Choosing a front door color",
        ps: [
          "Pick the color from across the street, not from a paint chip in your hand, and check it against the roof and shutters at noon and at dusk. Blues and deep greens flatter brick and light siding. And remember the door swings in, so the inside face color is a separate decision you get to make. More door thinking, with prices, on the [window and door installation page](/services/window-door-installation).",
        ],
      },
    ],
  },
  {
    slug: "accent-wall-room-refresh-ephrata-pa",
    title: "One Wall Carries the Room: A Geometric Accent Wall Near Ephrata",
    metaTitle: "Accent Wall & Room Refresh Near Ephrata PA: Case Study",
    metaDescription:
      "A geometric trim accent wall with new LVP flooring transforms a plain room near Ephrata PA. Design rules for accent walls that age well, and the build process.",
    city: { name: "Ephrata", slug: "ephrata-pa" },
    serviceSlugs: ["full-room-renovation", "interior-doors-trim"],
    duration: "4 days",
    scope: ["Geometric trim accent wall", "New LVP flooring", "Paint", "Baseboard"],
    hero: "geometric-accent-wall-lvp-flooring-pa",
    photos: ["geometric-accent-wall-lvp-flooring-pa", "accent-wall-trim-carpentry-pa"],
    intro: [
      "The room was a rectangle with carpet and apologies. The budget was firmly not a renovation budget. So we spent it where eyes go: one geometric trim accent wall, painted a deep confident color, over new LVP flooring. Four days later the room reads designed, because one wall is carrying it on purpose.",
    ],
    sections: [
      {
        h2: "Accent walls that age well",
        ps: [
          "The trend graveyard is full of accent walls that were just paint. Dimension is what survives: trim geometry throws real shadows that read as architecture, not as a color choice from a specific year. We laid out the pattern to land clean at outlets and corners, because geometry that ignores the switch plate announces itself forever.",
          "Painting trim wall and base the same color in the same sheen is the trick that makes the wall feel intentional. Contrast trim on an accent wall turns architecture back into decoration.",
        ],
      },
      {
        h2: "The budget refresh formula",
        ps: [
          "Floor plus one feature wall plus paint plus new baseboard is our standard answer for make this room feel new for four figures. It works in bedrooms, offices and dens, and it is a [full room renovation](/services/full-room-renovation) in spirit at a fraction of the scope. When the room deserves more, the same crew scales up.",
        ],
      },
    ],
  },
  {
    slug: "plaster-restoration-lititz-pa",
    title: "Saving the Walls a Century Built: Plaster Restoration in Lititz",
    metaTitle: "Plaster Repair & Skim Coating in Lititz PA: Case Study",
    metaDescription:
      "Restoring cracked plaster walls in a Lititz PA home: repair versus replace decisions, skim coating over sound plaster, and lead safe practices in older houses.",
    city: { name: "Lititz", slug: "lititz-pa" },
    serviceSlugs: ["drywall-installation-repair"],
    duration: "1.5 weeks",
    scope: ["Plaster reattachment", "Crack repair with mesh", "Full skim coat", "Level 5 finish"],
    hero: "drywall-skim-coat-hallway-pa",
    photos: ["drywall-skim-coat-hallway-pa", "drywall-taping-stone-accent-beam-pa", "ceiling-drywall-mudded-pa"],
    intro: [
      "The walls of this Lititz home went up when the borough's chocolate factory was young, and they had the cracks to show for a century of Pennsylvania seasons. Two contractors had quoted full demolition. We quoted keeping them, because the tap test said they deserved it.",
    ],
    sections: [
      {
        h2: "Repair, not replace, when the keys hold",
        ps: [
          "Most of the plaster was still keyed solidly to its lath, so demolition would have destroyed sound walls to fix cosmetic sins. We reattached the few hollow sections with adhesive and plaster washers, bridged the settlement cracks with mesh and setting compound, then skim coated entire walls for a finish flat enough to embarrass new drywall.",
          "One practical note for pre 1978 homes: sanding old painted surfaces can disturb lead paint, so containment and HEPA cleanup are not optional extras. The [EPA's lead safe renovation rules](https://www.epa.gov/lead/renovation-repair-and-painting-program) exist for exactly this work, and following them is part of doing it professionally.",
        ],
      },
      {
        h2: "What this preserves",
        ps: [
          "Plaster walls are quieter, harder and older than anything sold today, and in a borough like Lititz they are part of what the house is worth. Full demolition has its place, and our [decision guide on plaster](/blog/drywall-repair-or-replace) explains where the line sits. When your walls are worth saving, the [drywall and plaster page](/services/drywall-installation-repair) is where to start.",
        ],
      },
    ],
  },
];

import { PROJECTS2 } from "./projects2";
import { PROJECTS3 } from "./projects3";

PROJECTS.push(...PROJECTS2, ...PROJECTS3);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
