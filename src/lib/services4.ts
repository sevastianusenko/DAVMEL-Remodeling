// Sub-service landing pages, batch B. Same rules as services.ts and services2.ts:
// plain, specific, confident, one light joke per page at most. No em dashes anywhere.

import type { Service } from "./services";

export const SERVICES4: Service[] = [
  {
    slug: "skim-coating",
    name: "Skim Coating",
    short: "Walls and ceilings skimmed dead flat to a level 5 finish. The cure for texture, wallpaper damage and drywall work that went wrong.",
    hero: "drywall-skim-coat-hallway-pa",
    metaTitle: "Skim Coating in Lancaster & Chester County PA",
    metaDescription:
      "Skim coating in Lancaster County and Chester County PA. Level 5 flat walls over texture, wallpaper damage and rough drywall, $1.50 to $3.00 per sq ft. Free estimates.",
    intro: [
      "Skim coating is the reset button for a wall. Thin coats of joint compound go over the entire surface, each pass tighter than the last, until everything is dead flat and ready for paint. The trade calls that a level 5 finish. Most production drywall stops at level 4, where the joints are finished but the field of the board is bare paper, and that difference hides until late afternoon, when low sun rakes across the wall and every joint band, roller mark and old patch stands up to be counted. Skim coating erases all of it. We do it as its own service across Lancaster County and Chester County: single walls, whole rooms, stairwells and ceilings, with no remodel attached. If you have ever repainted a room twice because it somehow looked worse in the new color, the wall was the problem, not the paint. Flat comes first. Paint only reports the news.",
      "Three patients show up most often. The first is texture: orange peel, knockdown and swirl finishes that date a room instantly and can never be patched invisibly. The second is wallpaper damage. When old paper comes down it usually takes chunks of the drywall face with it, and the adhesive residue left behind will bubble any paint rolled over it. Torn paper and glue get locked down with a penetrating sealer before any compound, because skimming over raw glue is how you get blisters the size of pancakes. The third patient is bad previous work: joints humped an eighth of an inch proud of the board, corner bead telegraphing through, sanding gouges, or a patch with edges you can find with your eyes closed. The fix is the same for all three. First passes go on in setting type compound, which cures hard and barely shrinks, then finish coats of lightweight topping get floated with wide blades in overlapping rows. Between coats a work light sits low against the wall, because raking light finds problems while they still cost nothing to fix.",
      "Now the honest part: skim coating fixes flat, it does not fix loose. Plaster that has separated from its lath, cracks that open and close with the seasons, and board gone soft from a leak all need real [drywall repair](/services/drywall-installation-repair) before any finish work. Burying an active problem under fresh compound just reschedules the same repair for later at a higher price. So we check adhesion and moisture before quoting, and if a wall is too far gone we will tell you replacement is cheaper than rescue, because past a certain point it is. On sound surfaces, plan on $1.50 to $3.00 per square foot depending on how rough the start is. A typical bedroom or living room runs $800 to $1,800, and a hallway or stairwell usually lands at $500 to $1,000. Either way the target does not move: walls flat enough that the four o'clock sun has nothing to say.",
    ],
    included: [
      { t: "Adhesion and moisture check", d: "Glossy paint gets scuff sanded, chalky surfaces get sealed, and anything loose comes off before the first coat goes on." },
      { t: "Sealing torn paper and glue", d: "Wallpaper damage and adhesive residue locked down with a penetrating sealer so the skim cannot blister later." },
      { t: "Texture burial", d: "Orange peel, knockdown and swirl buried under tight coats instead of being sanded into a dust storm." },
      { t: "Full level 5 skim", d: "The entire surface coated, not just the bad spots, so paint dries to one uniform sheen across the whole wall." },
      { t: "Raking light quality check", d: "A work light held low against every surface before we call it sanded. If our light passes it, your afternoon sun will too." },
      { t: "Priming for paint", d: "High build drywall primer so the finish paint behaves the same on fresh compound as everywhere else." },
    ],
    process: [
      { t: "Inspect and quote", d: "We measure, test adhesion, check for moisture and give you a written per square foot price with no surprises inside it." },
      { t: "Protect and seal", d: "Floors and fixtures masked, outlets covered, repairs made and problem surfaces sealed before compound day." },
      { t: "Skim coats", d: "Setting compound first for strength, then two or three topping passes floated with wide blades until the wall reads flat." },
      { t: "Sand, check, prime", d: "Vacuum sanders keep the dust down, the raking light signs off on every wall, then primer makes it paint ready." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. The starting condition of the surface sets the number, and ceilings price toward the top because every pass is overhead work.",
      rows: [
        { label: "Skim coating, per sq ft", range: "$1.50 to $3.00" },
        { label: "Typical room, all walls", range: "$800 to $1,800" },
        { label: "Hallway or stairwell", range: "$500 to $1,000" },
      ],
    },
    photos: [
      "drywall-skim-coat-hallway-pa",
      "drywall-taping-mudding-pa",
      "ceiling-drywall-mudded-pa",
      "accent-wall-trim-carpentry-pa",
    ],
    faqs: [
      {
        q: "Can you skim coat over painted texture?",
        a: "Yes, and it is usually the right move, because painted texture does not scrape willingly. The paint gets scuff sanded for adhesion, any slick areas get a bonding primer, then the texture disappears under two or three coats. Same flat result as scraping with far less mess.",
      },
      {
        q: "Should I skim coat or just replace the drywall?",
        a: "If the board is solid and the problem is cosmetic, skimming wins on cost, mess and speed. If the drywall is water damaged, crumbling or the plaster behind it is loose, replacement is the honest answer, and at $2.50 to $4.00 per square foot for new hang and finish it is sometimes barely more than a heavy rescue. We price both when it is close.",
      },
      {
        q: "How dusty does skim coating get?",
        a: "Less than people fear. Most of the mess in drywall work comes from demolition and heavy sanding, and a good skim needs little of either. We mask the room, use vacuum equipped sanders and keep the compound tight so there is less to sand in the first place. Plan on two to four days per room including drying time between coats.",
      },
    ],
    related: ["drywall-installation-repair", "plaster-repair-restoration", "popcorn-ceiling-removal"],
  },

  {
    slug: "interior-door-installation",
    name: "Interior Door Installation",
    navName: "Door Installation",
    short: "Prehung swaps, slab replacements and whole house door packages. Every door hung plumb, with hardware that finally matches.",
    hero: "white-two-panel-interior-door-pa",
    metaTitle: "Interior Door Installation in Lancaster & Chester County PA",
    metaDescription:
      "Interior door installation in Lancaster County and Chester County PA. Prehung doors installed at $350 to $600 each, whole house packages priced lower per door.",
    intro: [
      "Few things date a house faster than its interior doors. Hollow flat panels from the 1980s, brass knobs in three different styles collected over the decades, hinges painted over so many times they crackle when they move. And few things modernize a hallway faster than swapping them, because unlike paint, a door gets touched fifty times a day. We install interior doors across Lancaster County and Chester County as a standalone job: one door that never latched right, or every door in the house in a single scheduled pass. A crisp two panel door with a matte black lever changes how a hallway feels more than any color on the walls, and it is one of the few upgrades you interact with every single day you live there.",
      "There are two ways to replace a door, and picking the wrong one wastes money. A prehung door arrives already hinged in its own jamb, and the old jamb and casing come out with it. That is the answer when the frame is beat up, out of square or chewed by the dog. A slab replacement keeps your existing jamb: we mortise hinges into the new door to match the old locations, bore for the latch, and plane the edges to fit the opening the house actually has. That is the answer when the jambs and trim are in good shape, and it saves real money on every door. Either way the standard is the same: hung plumb so the door stays wherever you leave it, even reveals on all three sides, a long screw through the top hinge into the stud, and a latch that clicks shut with one finger. A door you have to lift and shove is not installed, it is parked.",
      "Most of our door work comes as whole house packages, like this [whole house door replacement in West Chester](/projects/interior-door-replacement-west-chester-pa), where every door, hinge and lever got replaced in one pass. Batching is where the price gets friendly: setup, delivery and disposal spread across ten or fifteen doors instead of one, which pulls the per door cost toward the low end of the range. We also unify the hardware in the same trip, one finish and one lever style throughout, privacy locks where bedrooms and bathrooms need them, so the house stops looking like a hardware store sampler. And the honest advice we give at estimates: if your doors are solid, latch cleanly and you simply hate the color, paint them. A gallon of enamel and a patient weekend beats thousands of dollars of new slabs, and we will say exactly that when it is true. Across Lancaster County and Chester County, most prehung installs land at $350 to $600 per door.",
    ],
    included: [
      { t: "Prehung replacement", d: "Old jamb and casing out, new unit shimmed plumb at the hinge points and screwed to framing, casing matched to your existing trim." },
      { t: "Slab fitting", d: "Hinges mortised, latches bored and edges planed so a new slab fits an opening that has settled for forty years." },
      { t: "Whole house packages", d: "Every door in the house replaced in one scheduled pass, old doors hauled away, priced by the batch." },
      { t: "Unified hardware", d: "Levers, hinges and stops in one finish across the whole house, with privacy locks where they belong." },
      { t: "Casing and trim", d: "New casing where jambs change, in profiles that match the rest of the house instead of arguing with it." },
      { t: "Bifold and closet doors", d: "Closet doors tracked, aligned and adjusted so they glide instead of derailing." },
    ],
    process: [
      { t: "Count and measure", d: "Sizes, swings and jamb depths recorded door by door, with a written per door price and a prehung or slab call for each opening." },
      { t: "Order and stage", d: "Doors and hardware ordered together and checked on arrival, so install day is installation, not shopping." },
      { t: "Hang", d: "Prehung units set plumb and screwed to framing, slabs mortised and fitted. Reveals even before we move to the next door." },
      { t: "Adjust and finish", d: "Hardware set, latches tuned, casing caulked and nail holes filled. Every door gets the one finger close test." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. Slab pricing assumes jambs worth keeping, and we tell you at the walkthrough which of your doors qualify.",
      rows: [
        { label: "Prehung interior door, installed", range: "$350 to $600" },
        { label: "Whole house package, per door", range: "$350 to $450" },
        { label: "Slab swap into existing jamb", range: "$200 to $350" },
      ],
    },
    photos: [
      "white-two-panel-interior-door-pa",
      "interior-door-casing-install-pa",
      "accent-wall-trim-carpentry-pa",
      "wainscoting-picture-frame-molding-pa",
    ],
    faqs: [
      {
        q: "Prehung or slab, how do I know which I need?",
        a: "Look at the jamb, not the door. If the frame is square, solid and the trim is worth keeping, a slab saves money. If the jamb is beat up, out of square or the door has been planed into a trapezoid over the years, prehung is faster and ends up straighter. In a whole house package we usually mix both, decided door by door.",
      },
      {
        q: "Do you paint the new doors?",
        a: "Doors typically arrive primed, and we can finish them as part of the package or hang them primed for your painter. If we are painting, we prefer to spray slabs before hanging, which leaves a factory smooth finish brushwork cannot match. Prefinished doors are also an option and skip the question entirely.",
      },
      {
        q: "How long does a whole house of doors take?",
        a: "Ten to fifteen doors usually takes two to three days including hardware and adjustments. We work one door at a time, so no bedroom or bathroom spends a night without its door. Single door swaps are usually done in two to three hours.",
      },
    ],
    related: ["interior-doors-trim", "wainscoting-installation", "full-room-renovation"],
  },

  {
    slug: "accent-wall-installation",
    name: "Accent Wall Installation",
    navName: "Accent Walls",
    short: "Geometric trim walls and board and batten, worked out on paper, drawn on the wall in pencil and delivered paint ready.",
    hero: "geometric-accent-wall-lvp-flooring-pa",
    metaTitle: "Accent Wall Installation in Lancaster & Chester County PA",
    metaDescription:
      "Accent wall installation in Lancaster County and Chester County PA. Geometric trim walls and board and batten laid out right, $800 to $2,200 finished and painted.",
    intro: [
      "Every accent wall photo you have saved was laid out by someone who did the math first. That is the whole secret. The geometric trim walls showing up in bedrooms, offices and living rooms across Lancaster County and Chester County look effortless in pictures, and the difference between the photo and a copy that feels slightly off is almost never the wood. It is spacing: shapes that repeat at consistent widths, margins that match at both ends of the wall, and outlets, windows and switches that land inside the pattern instead of interrupting it. We build geometric trim walls, board and batten and full height panel designs as standalone projects. One wall, a couple of days of work, and the room gets a focal point that paint alone cannot produce and furniture can only sit in front of.",
      "The work starts on paper. We measure the wall, mark every outlet, register and switch, then work out a pattern that divides the real dimensions evenly, because the design has to survive contact with baseboard heights, window casings and the one switch nobody remembers installing. Then the entire pattern goes onto the wall in pencil at full size before a single cut is made. A spacing mistake caught in pencil costs nothing. The same mistake caught in mitered MDF costs a trip to the lumberyard and an afternoon. Most painted work gets built from MDF, which is stable, smooth and takes paint beautifully, glued to the wall and pinned into studs so seasonal movement never opens the joints. Miters get cut tight, everything gets filled, sanded and caulked, and paint ready means exactly that: primer plus two coats and the wall is done. You can see the layout thinking in our [Ephrata room refresh with a geometric accent wall](/projects/accent-wall-room-refresh-ephrata-pa), where the finished wall carries the whole room.",
      "Two honest notes before you book. First, trim needs a flat wall behind it. Textured or badly patched drywall shows through between the boards and makes crisp trim look borrowed, so some walls need a skim coat first, and we price that at the estimate instead of discovering it on your invoice. Second, an accent wall is not always the right spend. If the budget is tight, a deep paint color on one smooth wall delivers a surprising share of the effect for the price of a gallon, and if you are renting, filling forty nail holes at move out is a bad trade. When trim is the right call, the numbers are friendly for what you get: geometric trim walls run $900 to $1,800, board and batten runs $800 to $1,500, and a wall delivered fully painted lands between $1,200 and $2,200 across Lancaster County and Chester County.",
    ],
    included: [
      { t: "Layout design", d: "The pattern worked out on paper against the real wall dimensions, with outlets, windows and switches placed inside the design." },
      { t: "Full size pencil layout", d: "The complete pattern drawn on the wall for your approval before anything gets cut. Changes at this stage are free." },
      { t: "Geometric trim walls", d: "Rectangles, grids and angled designs in MDF or poplar, mitered tight and pinned into framing." },
      { t: "Board and batten", d: "Flat stock verticals and rails, with an optional cap ledge, over walls smoothed to deserve them." },
      { t: "Paint ready finish", d: "Glued, nailed, filled, sanded and caulked. No gaps for the paint to point out later." },
      { t: "Paint, if you want it", d: "Primer and two coats so the wall is finished, not almost finished." },
    ],
    process: [
      { t: "Measure and design", d: "Wall dimensions and obstacles recorded, pattern options sketched, and one design agreed on paper." },
      { t: "Prep the wall", d: "Repairs or a skim coat where the surface needs it, because trim on a wavy wall advertises the wave." },
      { t: "Install the trim", d: "Boards glued and nailed to the pencil lines, miters tight, everything checked against the layout as it goes up." },
      { t: "Fill, caulk, paint", d: "Nail holes filled, joints caulked, sanded smooth, then painted if paint is in your scope." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. Wall size and pattern density move the number more than material choice does.",
      rows: [
        { label: "Geometric trim accent wall", range: "$900 to $1,800" },
        { label: "Board and batten accent wall", range: "$800 to $1,500" },
        { label: "Accent wall finished with paint", range: "$1,200 to $2,200" },
      ],
    },
    photos: [
      "geometric-accent-wall-lvp-flooring-pa",
      "accent-wall-trim-carpentry-pa",
      "wainscoting-picture-frame-molding-pa",
      "interior-door-casing-install-pa",
    ],
    faqs: [
      {
        q: "MDF or real wood for an accent wall?",
        a: "For painted work in dry rooms, MDF wins: stable, smooth, no knots bleeding through the paint. We switch to poplar in bathrooms, mudrooms and anywhere moisture or impact lives. Stain grade hardwood only makes sense when the grain will actually show, which on a painted accent wall it never does.",
      },
      {
        q: "Can you build an accent wall over a textured wall?",
        a: "Yes, but the texture has to go first. Trim over texture leaves shadowed gaps between the board and the wall that caulk cannot honestly fix. We skim coat the wall flat, then build. It adds a day and a few hundred dollars, and it is the difference between custom and crafty.",
      },
      {
        q: "How long does an accent wall take?",
        a: "Trim work is one to two days for most walls, plus a day for paint. If the wall needs skim coating first, add a day or two for drying time. There is no demolition and very little dust, so the room stays livable the whole time.",
      },
    ],
    related: ["wainscoting-installation", "full-room-renovation", "interior-doors-trim"],
  },

  {
    slug: "deck-railing-installation",
    name: "Deck & Porch Railing Installation",
    navName: "Deck Railings",
    short: "Vinyl, aluminum, cable and wood railings installed to the 200 pound code load, on decks, porches and masonry.",
    hero: "brick-porch-black-metal-railings-pa",
    metaTitle: "Deck & Porch Railing Installation in Lancaster & Chester County PA",
    metaDescription:
      "Deck and porch railing installation in Lancaster County and Chester County PA. Vinyl, aluminum, cable and wood rail runs built to code, $500 to $1,500 per run.",
    intro: [
      "A railing has one job, and it is not looking good. Residential code expects a guardrail to resist a 200 pound load at any point along the top without letting go, because the day it matters is the day someone stumbles into it with their full weight. Most of the wobbly railings we replace across Lancaster County and Chester County did not fail at the rail. They failed at the post, where a couple of lag screws driven into an aging rim joist gave up quietly years ago. So our railing work starts below the deck boards: blocking, through bolts and tension hardware that tie each post into the structure of the deck itself, and only then does the pretty part go on top. The style is the fun conversation. The connection is the actual job, and it is the part you are really paying a contractor for.",
      "Four material families cover almost every project. Vinyl is the maintenance free workhorse: never needs paint, cleans with a hose, and its heavier profiles suit porches and traditional homes. Aluminum runs slimmer and stronger, powder coated black being the current favorite, and it is what most people picture when they say modern. Cable railing keeps the view, which is why it lives on decks with something worth looking at, and it carries a real premium: the stainless cable, the tensioners and the stiffer frame the tension demands add 20 to 35 percent over comparable aluminum. Wood is the cheapest on day one and then bills you for paint or stain every couple of years, forever. Porches add their own wrinkle, because posts often have to anchor into brick, stone or a concrete slab instead of wood framing. That is wedge anchor and structural epoxy territory, drilled and set so each post is rigid before any rail touches it. Our [porch railing project in Coatesville](/projects/porch-railings-coatesville-pa) shows metal railings anchored into masonry and done right.",
      "Here is the honest check we run before quoting anything: the frame. A new railing bolted to a rotten rim joist is decoration, and we will not sell decoration whose job is catching a falling adult. If a screwdriver sinks into the framing, that gets repaired first or the railing money should wait. We will also gently talk you out of cable when the budget is fighting you, because black aluminum delivers most of the same open feel with less hardware and no annual re tensioning. Rail runs across Lancaster County and Chester County typically price at $500 to $1,500 per run depending on length and material, with masonry post anchoring at $150 to $300 per post. Everything we install meets the 36 inch guard height and the 4 inch sphere rule, which exists because toddlers are professional gap finders.",
    ],
    included: [
      { t: "Post anchoring and blocking", d: "Through bolts, tension hardware and added framing under the decking, because a railing is only as strong as its posts." },
      { t: "Vinyl and aluminum systems", d: "Manufactured rail systems set level, spaced to code and cut clean at every post." },
      { t: "Cable railing", d: "Stainless runs tensioned properly on frames stiff enough to hold that tension for years." },
      { t: "Wood railings", d: "Custom built runs in pressure treated or cedar, matched to existing porches where you want them to look original." },
      { t: "Masonry anchoring", d: "Posts set into brick, stone and concrete with wedge anchors or structural epoxy, not caulked hope." },
      { t: "Code compliance", d: "36 inch guard height, 4 inch sphere rule, and graspable handrails on the stairs." },
    ],
    process: [
      { t: "Frame check and measure", d: "We probe the framing, measure every run and give you a written price per run, with any needed repairs listed separately." },
      { t: "Set the posts", d: "Posts bolted into framing or anchored into masonry, plumbed and rigid before rails go anywhere near them." },
      { t: "Rails and infill", d: "Top and bottom rails, balusters or cable, cut and set with consistent spacing that passes both code and eyeball." },
      { t: "Tension and test", d: "Cable tensioned, fasteners checked, and every section leaned on hard by us before it gets leaned on by you." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. A run is one straight section between posts or corners, and material choice moves the number more than anything else.",
      rows: [
        { label: "Railing run, installed", range: "$500 to $1,500" },
        { label: "Cable railing systems", range: "add 20 to 35 percent" },
        { label: "Posts anchored into masonry", range: "$150 to $300 each" },
      ],
    },
    photos: [
      "brick-porch-black-metal-railings-pa",
      "porch-railing-hydrangea-garden-pa",
      "cable-railing-deck-stairs-pa",
      "composite-deck-white-railing-blue-door-pa",
      "new-porch-steps-railings-after-pa",
    ],
    faqs: [
      {
        q: "How high does a deck railing have to be?",
        a: "In Pennsylvania, residential decks more than 30 inches above grade need a guard at least 36 inches tall, with no opening that passes a 4 inch sphere. Stairs need a graspable handrail set 34 to 38 inches above the treads. If your current railing is 32 inches tall and wiggles, it is failing on two counts, and replacing it is a safety project, not a cosmetic one.",
      },
      {
        q: "Can you install railings on a concrete porch?",
        a: "Yes, that is a large share of our railing work. Posts get drilled and set into the concrete or brick with wedge anchors or structural epoxy, at $150 to $300 per post. The one thing we check first is the condition of the masonry itself, because an anchor is only as strong as what it grips.",
      },
      {
        q: "Is cable railing worth the extra cost?",
        a: "If your deck has a view, yes, that is exactly what cable is for. If it faces the neighbor's shed, black aluminum balusters give you most of the same open feel for 20 to 35 percent less money and no re tensioning. We price both and let the view make the call.",
      },
    ],
    related: ["deck-building", "porch-deck-refinishing", "exterior-remodeling"],
  },

  {
    slug: "window-capping",
    name: "Aluminum Window Capping",
    navName: "Window Capping",
    short: "Exterior window trim wrapped in aluminum bent on site. The last time that trim ever needs paint.",
    hero: "replacement-windows-aluminum-capping-pa",
    metaTitle: "Aluminum Window Capping in Lancaster & Chester County PA",
    metaDescription:
      "Aluminum window capping in Lancaster County and Chester County PA. Exterior trim wrapped in brake bent aluminum, $120 to $220 per window, never painted again.",
    intro: [
      "Window capping is custom bent aluminum fitted over your exterior window trim, and it exists to end a chore: repainting wood trim that peels again every three to five years no matter how good the paint was. Once a window is capped, the wood underneath is out of the weather and the aluminum never needs paint. We cap windows across Lancaster County and Chester County, usually starting with the second story trim nobody enjoys reaching, and often finishing the whole house once people see the first few windows done. If the term is new to you, our plain English explainer on [what window capping actually is](/blog/what-is-window-capping) goes deeper, but the short version fits in one sentence: coil stock aluminum, a portable brake, and trim that is permanently done asking for maintenance.",
      "The material arrives as flat aluminum coil in dozens of factory finished colors, and every piece gets brake bent on site to the exact profile of your trim: sill, brickmould and casing, each one measured and formed for that specific window, because no two openings on a house older than twenty years still match. Good capping has hemmed edges for stiffness, seams that lock mechanically instead of relying on a bead of caulk to do structural work, and sealant only where sealant belongs. The detail that separates careful capping from cheap capping is drainage. Some water always finds its way behind aluminum, and it needs a path back out at the bottom. Capping sealed airtight on all four sides does not protect the trim, it turns the trim into a terrarium. We also pair capping with window replacement constantly, like this [window replacement with full capping in Ephrata](/projects/window-replacement-capping-ephrata-pa), because the two jobs share ladder time and setup, and the bundle prices lower than doing them a year apart.",
      "Two situations where we will politely refuse to cap. First, rot. Aluminum over rotten wood does not fix rot, it hides it while the moisture keeps working into the sheathing behind it, so every window gets probed with an awl before we bend a single piece. Soft wood gets cut out and replaced first, as its own line on the written quote. Second, historic districts. Parts of Lancaster County and Chester County have review boards with firm opinions about wrapping 19th century profiles in aluminum, and honestly, they are often right, so check your district rules before falling in love with the idea. For everyone else the math is simple: $120 to $220 per window, $1,500 to $3,500 for a whole house, less per window when capping rides along with a window replacement we are already doing, and zero dollars of trim paint for the rest of the time you own the place.",
    ],
    included: [
      { t: "On site brake bending", d: "Every piece formed on our brake to the actual profile of your trim, not a stock shape that almost fits." },
      { t: "Sills, brickmould and casings", d: "The full trim package wrapped, including the sill nose where weather does its worst work." },
      { t: "Rot probing first", d: "Every window checked with an awl before capping. Soft wood gets replaced, never wrapped." },
      { t: "Locked seams and hemmed edges", d: "Mechanical seams and folded edges for stiffness, so panels stay tight and flat for decades." },
      { t: "Drainage detailing", d: "Sealant where it belongs and weep paths where water needs a way out, so moisture never gets trapped against wood." },
      { t: "Color matched coil stock", d: "Factory finished aluminum in the color that suits your siding, windows and trim." },
    ],
    process: [
      { t: "Probe and measure", d: "Every opening checked for rot and measured individually, with wood repairs quoted separately up front." },
      { t: "Bend on site", d: "Panels formed on the brake at your house, window by window, matched to each opening." },
      { t: "Fit and lock", d: "Pieces fitted tight, seams locked, fastened where fasteners stay hidden." },
      { t: "Seal and inspect", d: "Sealant tooled at the right joints, weeps left open, and every window checked before the ladder moves." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. Window count and second story access set the price. Rot repair, when needed, is quoted separately before any aluminum is bent.",
      rows: [
        { label: "Capping, per window", range: "$120 to $220" },
        { label: "Whole house capping", range: "$1,500 to $3,500" },
        { label: "Added during window replacement, per window", range: "$80 to $150" },
      ],
    },
    photos: [
      "replacement-windows-aluminum-capping-pa",
      "replacement-windows-tan-trim-brick-pa",
      "white-double-hung-window-install-pa",
      "door-opening-flashing-zip-tape-pa",
    ],
    faqs: [
      {
        q: "Does window capping cause rot?",
        a: "Bad capping does. Wrapping wet or rotten wood, or sealing the aluminum airtight so water that gets in can never get out, traps moisture against the trim. Done right, with dry sound wood underneath and weep paths at the bottom, capping protects the wood better than paint ever did. This is why we probe every window first.",
      },
      {
        q: "How long does aluminum capping last?",
        a: "Decades. The factory finish on quality coil stock typically outlasts the caulking around it, which is worth a quick check every few years. Colors hold up well, though a dark color on full southern sun exposure will fade slowly over a long time, the same way siding does.",
      },
      {
        q: "Should I cap now or wait until I replace the windows?",
        a: "If your windows have five or fewer good years left, wait and bundle. Capping alongside replacement runs $80 to $150 per window instead of $120 to $220, because we are already set up at each opening. If the windows are staying for the long haul, cap now and stop feeding the trim paint.",
      },
    ],
    related: ["window-door-installation", "exterior-remodeling", "entry-door-installation"],
  },

  {
    slug: "entry-door-installation",
    name: "Entry Door Installation",
    navName: "Entry Doors",
    short: "Fiberglass and steel entry doors installed square, flashed right and sealed tight. Rot fixed before the new door goes in.",
    hero: "modern-front-door-sidelites-stone-pa",
    metaTitle: "Entry Door Installation in Lancaster & Chester County PA",
    metaDescription:
      "Entry door installation in Lancaster County and Chester County PA. Fiberglass and steel doors with sidelites, flashed and sealed right, $2,200 to $5,500 installed.",
    intro: [
      "An entry door replacement is really three purchases wearing one price tag: curb appeal you see every day, security you hopefully never test, and a weather seal you feel every January. We install fiberglass and steel entry systems across Lancaster County and Chester County, from single doors to full units with sidelites and transoms. Fiberglass has become our usual recommendation: it does not dent, does not rust, insulates several times better than the old wood slab it replaces, and the current wood grain skins are convincing from a handshake away. Steel still wins on price and raw security, and loses at the bottom edge, where years of kicked snow and road salt eventually find bare metal. One honest note before any of it: if your current door is solid and just drafty, read our guide on [fixing a drafty front door](/blog/fix-drafty-front-door) first, because sometimes $40 of weatherstripping beats a $4,000 door, and we would rather tell you that today than after the invoice.",
      "The door on the truck is half the product. The other half happens in the opening. Old doors come out and show us what twenty years of wind driven rain accomplished, and at the sill it is often rot: soft subfloor, a rotted rough sill, sometimes the bottoms of both jack studs. We cut that out and rebuild it before anything new goes in. Then the opening gets flashed the way the manuals say and the shortcuts skip: a sill pan first, so any water that ever sneaks past the door is routed back outside instead of into the floor, flashing tape up the jambs, and low expansion foam around the frame so it seals without bowing the jambs inward. The unit gets shimmed at the hinge and latch points, adjusted until the reveal is even all the way around and the latch clicks home with one finger, and the threshold set so the sweep seals without dragging. Masonry openings, common in the rowhomes we work on, play by their own rules: out of square brick, masonry anchors and mortar patching instead of nailing fins. Our [rowhome entry door in Coatesville](/projects/rowhome-entry-door-coatesville-pa) shows exactly that situation handled cleanly.",
      "Sidelites and transoms turn a door into a wall of light, and they also turn the project into light structural work, because the rough opening gets wider and the header above it has to be verified for the new span before anything is ordered. Budget accordingly: complete installed entry doors run $2,200 to $5,500 across Lancaster County and Chester County, with sidelite and transom units living toward the top of that range. Two smaller notes that save money. A storm door added during the same visit costs noticeably less than a separate trip later, since the opening is prepped and we are already standing in front of it. And if a competing quote seems surprisingly low, ask one question: what is the flashing plan? A cheap install with no sill pan is a subfloor replacement on layaway.",
    ],
    included: [
      { t: "Fiberglass and steel systems", d: "Insulated door units from brands we would put on our own houses, with glass options from private to full lite." },
      { t: "Sidelites and transoms", d: "Wider units with the header checked for the new span before ordering, not after demolition." },
      { t: "Sill pans and flashing", d: "A pan under the threshold and tape up the jambs, so water that gets past the door gets shown the way out." },
      { t: "Rot repair", d: "Soft sills, subfloor and framing cut out and rebuilt before the new unit goes in. Never wrapped, never buried." },
      { t: "Masonry openings", d: "Rowhome and brick installs with masonry anchors, shims and mortar repairs where nailing fins cannot go." },
      { t: "Locks and hardware", d: "Deadbolts, handlesets and smart locks installed, strikes adjusted, keys tested before we leave." },
    ],
    process: [
      { t: "Measure and spec", d: "The opening measured, the door and hardware chosen, and a written quote that names the flashing details, not just the door." },
      { t: "Remove and rebuild", d: "Old unit out, opening inspected, any rot cut back to solid wood and reframed." },
      { t: "Flash and set", d: "Sill pan, tape, then the unit shimmed plumb at hinge and latch points and foamed with low expansion foam." },
      { t: "Finish and walk through", d: "Hardware, sweep and casing installed, exterior sealed, and the door cycled with you before we call it done." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. The door itself drives most of the spread. Rot repair is quoted at the opening, before it becomes a surprise.",
      rows: [
        { label: "Entry door, installed complete", range: "$2,200 to $5,500" },
        { label: "With sidelites or transom", range: "$4,000 to $5,500" },
        { label: "Rot repair at the opening", range: "add $300 to $900" },
        { label: "Storm door added same visit", range: "$500 to $1,000" },
      ],
    },
    photos: [
      "modern-front-door-sidelites-stone-pa",
      "blue-front-door-installation-pa",
      "blue-entry-door-fan-transom-pa",
      "exterior-entry-door-brick-install-pa",
      "door-opening-flashing-zip-tape-pa",
    ],
    faqs: [
      {
        q: "Fiberglass or steel entry door?",
        a: "Fiberglass for most houses: better insulation, no dents, no rust, and realistic wood textures if you want the look without the maintenance. Steel when budget or security tops the list, and it is a fine door, just plan on touching up the bottom edge someday. We stopped recommending new wood entry doors for full weather exposure. Beautiful, and hungry.",
      },
      {
        q: "Can you replace an entry door in a brick or masonry opening?",
        a: "Yes, that is normal work for us in rowhomes and older brick houses. The unit anchors to the masonry with sleeve or tapcon style anchors, shimmed to the opening the bricklayer actually left, and the perimeter gets sealed and pointed to match. It takes longer than a framed opening and we price that honestly up front.",
      },
      {
        q: "How long is my house open during the install?",
        a: "The opening is only truly open for an hour or two between removal and setting the new unit, and a standard replacement finishes in one day. Doors with sidelites or rot repair can run into a second day, but you always have a locking door by nightfall.",
      },
    ],
    related: ["window-door-installation", "storm-door-installation", "exterior-remodeling"],
  },

  {
    slug: "storm-door-installation",
    name: "Storm Door Installation",
    navName: "Storm Doors",
    short: "Storm doors hung square on frames that rarely are, with closers tuned so the door shuts instead of slams.",
    hero: "black-storm-door-nine-lite-brick-pa",
    metaTitle: "Storm Door Installation in Lancaster & Chester County PA",
    metaDescription:
      "Storm door installation in Lancaster County and Chester County PA. Full view and ventilating storm doors installed for $650 to $1,200, frames squared, closers tuned.",
    intro: [
      "A storm door is a $700 accessory that protects a $4,000 door, adds a second air seal in winter, and lets you leave the main door open for light and breeze without inviting every bug in the county. Installed well, it is one of the best value upgrades on the front of a house. Installed badly, it slams, rattles, scrapes the sill, and eventually works its own frame loose. We install storm doors across Lancaster County and Chester County, and most of the craft is invisible: the mounting frame scribed and shimmed square in openings that stopped being square when the house settled, the sweep set to brush the sill without dragging, and the closers tuned so the door shuts itself with a sigh instead of a bang. If you are still deciding whether you need one at all, our honest breakdown of [whether storm doors are worth it](/blog/are-storm-doors-worth-it) covers the cases for and against.",
      "The first decision is glass. Full view doors are one large pane, maximum light and the cleanest look, with a screen panel you swap in for summer and store the rest of the year. Ventilating doors build the screen in: the glass slides up or down and the screen is always there, which is the right answer if you care about airflow more than sightlines and nobody in the house wants to carry a glass panel to the basement twice a year. Either style gets the same install standard. The frame rails get cut to the real opening, the hinge side gets shimmed dead plumb so the door neither creeps open nor swings shut on its own, the drip cap gets sealed so rain stays off the top rail, and both the closer and the wind chain get adjusted before we leave. That last item is not cosmetic. The wind chain is what saves the hinges the first time a March gust grabs the open door. Our [storm door installation in Lebanon](/projects/storm-door-installation-lebanon-pa) shows what the finished work looks like on an older opening.",
      "Now the part where we might talk you out of it. A storm door on a south or west facing entry with no shade builds real heat between the glass and your entry door on summer afternoons. That trapped heat can warp the slab and fade its finish, and several door manufacturers void the entry door warranty when a storm door goes over full sun exposure, which tells you how real the problem is. If your entry faces full southern sun with a dark door behind it, we will usually recommend skipping the storm door entirely, or choosing a ventilating model and leaving the glass cracked to bleed the heat off. Deep porches and covered vestibules also weaken the case, since the entry door is already protected from weather. Everywhere else, storm doors earn their keep for decades. Installed prices across Lancaster County and Chester County run $650 to $1,200 depending on the door, with frame repairs on older openings quoted up front instead of discovered later.",
    ],
    included: [
      { t: "Full view and ventilating doors", d: "Help choosing between one clean pane with a seasonal screen, or built in ventilation with the screen always ready." },
      { t: "Frame squaring", d: "Mounting rails scribed and shimmed to the opening you have, not the one the manufacturer imagined." },
      { t: "Closer and wind chain tuning", d: "Closing speed set so the door latches without slamming, and the chain adjusted to save the hinges on gusty days." },
      { t: "Sweep and drip cap sealing", d: "The bottom sealed to the sill and the top sealed against rain, which is most of what storm means." },
      { t: "Locks and hardware", d: "Handle sets and keyed deadbolts installed and aligned so the storm door locks as positively as the entry door." },
      { t: "Old door removal", d: "The previous storm door and its abandoned screw holes dealt with, not left as a bonus." },
    ],
    process: [
      { t: "Measure and choose", d: "Opening measured in six places, because older openings vary, and the right door style picked for your exposure." },
      { t: "Square the opening", d: "Rails cut and shimmed so the door hangs plumb in a frame that probably is not." },
      { t: "Hang and seal", d: "Door mounted, drip cap and sweep set, gaps closed against weather and insects." },
      { t: "Tune and test", d: "Closers, wind chain, latch and lock adjusted, then the door cycled until it closes itself politely every time." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. The door model drives most of the spread, from builder grade ventilating to heavy full view glass.",
      rows: [
        { label: "Storm door, supplied and installed", range: "$650 to $1,200" },
        { label: "Full view with interchangeable screen", range: "$900 to $1,200" },
        { label: "Frame repair on older openings", range: "add $100 to $300" },
      ],
    },
    photos: [
      "black-storm-door-nine-lite-brick-pa",
      "black-storm-door-board-batten-pa",
      "exterior-entry-door-brick-install-pa",
      "blue-front-door-installation-pa",
    ],
    faqs: [
      {
        q: "Full view or ventilating storm door?",
        a: "Full view if the goal is light and looks, and you have somewhere to store the screen panel in winter. Ventilating if you actually plan to use the airflow, since the screen is always in place and the glass just slides. Households that want breeze in May without a trip to the basement pick ventilating and never look back.",
      },
      {
        q: "Will a storm door damage my front door?",
        a: "Only in full sun. On south and west exposures without shade, heat builds between the storm door glass and the entry door, enough to warp or fade it, and some manufacturers void the entry door warranty over it. On shaded, covered or north facing entries the storm door protects the main door and extends its life. We will tell you which case your entry is before you buy anything.",
      },
      {
        q: "Can you install a storm door on an out of square opening?",
        a: "That describes most openings we see, especially on brick homes. The fix is in the mounting rails: scribed, cut and shimmed so the door itself hangs plumb even though the frame is not. If the wood behind the rails is soft or split, we repair that first for $100 to $300 rather than screwing a new door to a failing frame.",
      },
    ],
    related: ["entry-door-installation", "window-door-installation", "exterior-remodeling"],
  },

  {
    slug: "concrete-step-resurfacing",
    name: "Concrete Step Resurfacing",
    navName: "Step Resurfacing",
    short: "Crumbling concrete steps rebuilt with bonded overlays instead of demolition. Solid, crisp edged steps back in about two days.",
    hero: "concrete-steps-resurfaced-after-pa",
    metaTitle: "Concrete Step Resurfacing in Lancaster & Chester County PA",
    metaDescription:
      "Concrete step resurfacing in Lancaster County and Chester County PA. Bonded overlays rebuild spalled steps and broken nosings for $600 to $1,800, no demolition needed.",
    intro: [
      "Pennsylvania winters are hard on concrete steps. Water soaks in, freezes and pops the surface, and every handful of rock salt speeds the process along, until the front steps look sandblasted and the nosings, the front edges your feet actually land on, crumble away entirely. The usual assumption is that fixing this means a jackhammer, a dumpster and a week of stepping over plywood. Usually it does not. If the concrete underneath is still sound, the steps can be resurfaced: everything loose removed, edges rebuilt, and the whole set recoated with a bonded overlay that looks and wears like new concrete. We resurface steps across Lancaster County and Chester County for a fraction of replacement cost, typically in about two days. If your steps are at the crumbly stage, our guide on [what to do about crumbling concrete steps](/blog/crumbling-concrete-steps-repair) walks through the whole decision.",
      "Every job starts with a hammer and an honest ear. Tapping across the steps tells you what the concrete is doing beneath the surface: sound concrete rings, delaminated concrete answers with a hollow thud, and the ratio of ring to thud decides whether resurfacing belongs on the table at all. When it does, preparation is most of the job. Loose and flaking material gets chipped and ground away, the surface gets cleaned to a texture the new material can grip, and broken nosings get formed up with lumber, exactly like new concrete work, and rebuilt to a crisp square edge. The overlay itself is a polymer modified mix, cement fortified with acrylic so it bonds to the prepared concrete instead of merely sitting on it, applied over a bonding agent, finished with a broom texture for traction, and cured properly instead of abandoned to the afternoon sun. You can see the difference this makes in our [Coatesville step resurfacing project](/projects/concrete-steps-resurfacing-coatesville-pa), where a badly spalled set of steps came back to crisp edges without a single truckload of demolition.",
      "The hammer test is also where we earn trust, because sometimes the honest answer is replacement. Steps that have settled and pulled away from the house, cracks running through the full mass of the concrete, or sounding that comes back hollow across most of the surface all mean the base itself is failing, and an overlay on a failing base is a two winter product. We will not sell you one. Full replacement runs $3,000 to $8,000 depending on size and footings, which is exactly why a resurfacing evaluation at $600 to $1,800 is worth doing first. Two maintenance notes for step owners anywhere in Lancaster County or Chester County: keep rock salt off any new concrete surface for at least the first winter, and reseal every few years. Concrete does not die of old age. It dies of water, and sealer is cheap.",
    ],
    included: [
      { t: "Hammer soundness testing", d: "The whole surface sounded before quoting, so you get a resurfacing price only when resurfacing will actually hold." },
      { t: "Grinding and preparation", d: "Loose material chipped and ground off, the surface cleaned and profiled so the overlay can bond." },
      { t: "Nosing and corner rebuilds", d: "Broken step edges formed with lumber and rebuilt square, included in the price rather than sold as extras." },
      { t: "Polymer modified overlay", d: "Acrylic fortified cement applied over a bonding agent, so the new surface is attached, not just resting there." },
      { t: "Broom or trowel finish", d: "A traction friendly broom texture standard, or a smoother trowel finish where you want it." },
      { t: "Penetrating sealer", d: "The finished steps sealed against water, which is the thing that was killing them in the first place." },
    ],
    process: [
      { t: "Sound and quote", d: "Hammer testing across every surface, then a written quote for resurfacing, or an honest referral to replacement if the base is gone." },
      { t: "Prep and bond", d: "Chipping, grinding and cleaning, then the bonding agent that makes the overlay part of the step." },
      { t: "Form and overlay", d: "Nosings formed, the polymer modified mix placed and shaped, edges tooled crisp." },
      { t: "Finish, cure and seal", d: "Broom finish, proper cure time, then sealer. Steps take foot traffic again within a couple of days." },
    ],
    price: {
      note: "2026 ranges for Lancaster and Chester County. Step count and the amount of edge rebuilding set the price within the range. Evaluations are free either way.",
      rows: [
        { label: "Step resurfacing, complete", range: "$600 to $1,800" },
        { label: "Nosing and corner rebuilds", range: "included" },
        { label: "Full replacement, for comparison", range: "$3,000 to $8,000" },
      ],
    },
    photos: [
      "concrete-steps-resurfaced-after-pa",
      "concrete-steps-before-resurfacing-pa",
      "new-porch-steps-railings-after-pa",
      "brick-porch-black-metal-railings-pa",
    ],
    faqs: [
      {
        q: "How long does concrete step resurfacing last?",
        a: "On a sound base, expect 10 to 15 years or more, especially if the steps get resealed every few years and skip the rock salt. It is a repair, not new construction, so the base concrete sets the ceiling. That is exactly why we sound the steps first and refuse the job when the base will not carry it.",
      },
      {
        q: "Can steps be resurfaced in cold weather?",
        a: "Overlay materials want temperatures around 50 degrees and rising, so our resurfacing season realistically runs April through October. If your steps fail in January, we can do a temporary safety patch and schedule the real resurfacing for spring, which beats paying for work that cures badly.",
      },
      {
        q: "How do you decide between resurfacing and replacement?",
        a: "Three checks: the hammer sounding, whether the steps have settled or separated from the house, and whether cracks run through the full thickness. Mostly solid with surface damage means resurface for $600 to $1,800. Failing base means replacement at $3,000 to $8,000, and we will show you exactly what we found so the decision is yours with evidence, not a sales pitch.",
      },
    ],
    related: ["porch-deck-refinishing", "deck-railing-installation", "exterior-remodeling"],
  },
];
