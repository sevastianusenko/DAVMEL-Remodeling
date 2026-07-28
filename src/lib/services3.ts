// Sub-service landing pages, batch C. Same rules as services.ts and services2.ts:
// plain, specific, confident, one light joke per page at most. No em dashes anywhere.

import type { Service } from "./services";

export const SERVICES3: Service[] = [
  {
    slug: "vanity-installation",
    name: "Vanity Installation",
    short: "Vanity swaps and new installs, set level and scribed tight, with tops, faucets, mirrors and lighting handled in the same visit.",
    hero: "bathroom-double-vanity-led-mirrors-pa",
    metaTitle: "Vanity Installation in Lancaster & Chester County PA",
    metaDescription:
      "Vanity installation across Lancaster County and Chester County PA. Single and double vanities set level and plumbed back in, with tops, mirrors and lighting. Free written estimates.",
    intro: [
      "The vanity works harder than any piece of furniture in the house. It gets splashed, leaned on and opened fifty times a day, and it is usually the first thing that dates a bathroom. Swapping it is the fastest meaningful upgrade a bathroom can get, and it does not need a full remodel to justify the visit. We install vanities across Lancaster County and Chester County as a standalone job: single cabinets, double vanities, floating wall hung units and the furniture style pieces people order online. Most swaps take a day, doubles and wall hung units take two. The old one comes out, the new one goes in level and sealed, and the room looks ten years newer by dinner. If the rest of the bathroom is in decent shape, there is no reason to tear it apart to fix the one piece you actually dislike.",
      "The install is where the difference shows. Bathroom walls are never plumb and bathroom floors are never level, so the cabinet gets shimmed dead level and scribed to the wall instead of caulked at a widening gap. It gets screwed to studs, not drywall anchors, because it will carry a stone top and a sink full of water. Then there is the plumbing. Supply valves that have not been turned since the Clinton administration, trap arms that sit too high for the new drawer boxes, and drains that land exactly where a drawer wants to be are all normal, and we plan for them before demo day. Shutoffs get tested before demo, not discovered after it. We handle the disconnect and reconnect ourselves and bring in a licensed plumber when valves need replacing or the drain has to move. Most older cabinets sit at 32 inches while new ones run 36, so the plumbing almost always needs some persuasion.",
      "Most vanity projects grow a little, on purpose. A new top and faucet nearly always make sense in the same trip, since the labor overlaps and an old top rarely fits a new cabinet anyway. Mirrors, medicine cabinets and light fixtures land in the same visit too, which is why the pricing below covers those combinations. One honest note before you buy anything: if the floor under the vanity is soft, or the shower next to it is failing, a new cabinet is a nice hat on a bigger problem. We will say so at the estimate, and if a full [bathroom remodel](/services/bathroom-remodeling) is genuinely the better spend, we would rather do that job right than sell you two vanities in five years. Written estimates are free anywhere in Lancaster County and Chester County, and the boring parts, level lines and stud screws and clean silicone, come standard.",
    ],
    included: [
      { t: "Old vanity removal", d: "Water off, lines disconnected, cabinet and top out and hauled away without wrecking the walls or the floor around it." },
      { t: "New vanity set right", d: "Shimmed dead level, scribed to the wall and screwed into studs so nothing rocks, tips or drifts out of square." },
      { t: "Plumbing reconnect", d: "Traps, supplies and shutoffs reconnected and leak tested, with a licensed plumber coordinated for valve or drain changes." },
      { t: "Tops and faucets", d: "Stone, quartz and one piece tops set in silicone, faucets and drains installed and tested the same day." },
      { t: "Mirrors and medicine cabinets", d: "Hung level and anchored properly, including recessed medicine cabinets framed into the wall." },
      { t: "Lighting swaps", d: "Vanity light fixtures swapped at the existing box, with an electrician coordinated when wiring needs to move." },
    ],
    process: [
      { t: "Measure and check", d: "We measure the space, confirm the new cabinet clears the trap and the shutoffs, and test the valves before anything is ordered." },
      { t: "Remove and prep", d: "Old vanity out, wall patched where needed, floor protected, plumbing capped while the room is open." },
      { t: "Set and secure", d: "New cabinet shimmed level, scribed and screwed to studs, then the top goes on in a bed of silicone." },
      { t: "Connect and finish", d: "Faucet, drain and supplies hooked up and leak tested, mirror and light installed, caulk lines run clean." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. The cabinet and top themselves are whatever you pick out; these numbers are our labor.",
      rows: [
        { label: "Vanity install, labor", range: "$350 to $700" },
        { label: "Vanity with new top and faucet", range: "$600 to $1,200" },
        { label: "Double vanity install", range: "$800 to $1,500" },
      ],
    },
    photos: [
      "bathroom-double-vanity-led-mirrors-pa",
      "bathroom-vanity-brass-pulls-install-pa",
      "bathroom-gold-fixtures-black-vanity-pa",
      "marble-mosaic-vanity-wall-tile-pa",
      "bathroom-remodel-marble-tile-lancaster-pa",
    ],
    faqs: [
      {
        q: "Can you install a vanity I bought online?",
        a: "Yes, and most of the vanities we install arrive that way. Open the box the day it lands, not the day we do, because damaged tops and missing hardware take weeks to replace. Send us the spec sheet before you order and we check clearances against your plumbing, which has saved more than one return shipment.",
      },
      {
        q: "Do I need a plumber for a vanity swap?",
        a: "For a straight swap onto healthy valves, our crew handles the reconnect and tests everything under pressure. When shutoff valves are seized, the drain needs to move, or the trap has to be rebuilt, a licensed plumber does that portion and we coordinate it inside the same schedule. You get one bill and one timeline either way.",
      },
      {
        q: "Is it worth replacing just the vanity?",
        a: "Often, yes. It is the highest visibility piece in the room and a swap costs a fraction of a remodel. The honest exception: if the floor is spongy, the tub surround is failing, or you already know a full remodel is coming within a couple of years, put the money there instead. We will tell you which case you are in at the estimate.",
      },
    ],
    related: ["bathroom-remodeling", "tub-to-shower-conversion", "tile-installation"],
  },

  {
    slug: "bathroom-ventilation-fans",
    name: "Bathroom Ventilation & Exhaust Fans",
    navName: "Bathroom Fans",
    short: "Bathroom exhaust fans sized right, ducted outside instead of into the attic, with timers and quiet certified motors.",
    hero: "ceiling-drywall-mudded-pa",
    metaTitle: "Bathroom Ventilation & Exhaust Fans in Lancaster & Chester County PA",
    metaDescription:
      "Bathroom exhaust fan installation in Lancaster County and Chester County PA. Fans sized right, ducted outside instead of the attic, quiet certified motors and timer switches.",
    intro: [
      "A bathroom exhaust fan is a moisture pump, and moisture is the thing that ruins bathrooms. Every shower puts about a half pint of water into the air, and that water is going somewhere: out a duct, into your paint, or into the framing. Peeling paint above the shower, a mirror that never clears, and a musty smell that will not leave are the same problem wearing different clothes. In winter the moisture also condenses inside exterior walls where nobody can see it working. We replace and install bathroom fans across Lancaster County and Chester County as a standalone service, and it is one of the cheapest fixes in remodeling with the longest list of things it quietly prevents: mold, ruined drywall, rotted sheathing and popped ceiling paint.",
      "Here is what we find in more than half of the older houses we open up: the fan runs fine and blows every bit of that moisture straight into the attic. Sometimes the duct popped off a rafter years ago and just lies there. Sometimes there was never a duct at all. Either way the insulation gets damp, the roof sheathing grows black mold, and the fan has been making the house worse every day it runs. Your attic does not need a steam room. We wrote up [why attic venting is a problem](/blog/bathroom-fan-venting-into-attic) in plain English, and fixing it is the core of this service: insulated duct, run as short and straight as the framing allows, out through the roof or a gable wall with a capped, dampered termination. If your bathroom has no fan at all, just a window, code once allowed that, but nobody opens a window in January in Pennsylvania.",
      "Sizing and controls matter more than brand. The rough rule is one CFM per square foot of bathroom, with 50 CFM as the floor and more for big rooms and separate toilet rooms. Modern certified fans run at 1 sone or less, quieter than a refrigerator, so nobody skips running the fan because of the noise. We like timer switches because the fan needs to run 20 minutes after the shower ends, not until someone remembers it. Humidity sensing switches go a step further and run the fan whenever the room needs it, which is the right answer for teenagers and rental units. One honest note: if your existing fan works, the duct already runs outside and the new housing is the same size, a handy homeowner can swap a fan in an afternoon. Where we earn our keep is new ducting, ceiling repair, and getting a bigger housing into old framing without wrecking the drywall around it. Estimates are free anywhere in Lancaster County and Chester County.",
    ],
    included: [
      { t: "Fan sizing", d: "CFM matched to the room using the one CFM per square foot rule, with 50 CFM minimum and upsizing for tubs, big showers and toilet rooms." },
      { t: "Ducting to the outside", d: "Insulated duct run short and straight, terminated through the roof or gable wall with a capped, dampered hood. Never into the attic." },
      { t: "Quiet certified fans", d: "Certified low sone models, most at 1 sone or under, so the fan actually gets used." },
      { t: "Timer and humidity switches", d: "Countdown timers or humidity sensing controls so the fan runs the 20 minutes after the shower that do the real work." },
      { t: "Ceiling and drywall repair", d: "Old housings removed, oversized holes patched and finished so the new fan looks planned, not patched in." },
      { t: "Attic damage check", d: "While we are up there, we look at the insulation and sheathing and tell you honestly what the old venting has done." },
    ],
    process: [
      { t: "Inspect the existing setup", d: "We find out where the old duct actually goes, measure the room and check attic access before quoting." },
      { t: "Pick the fan", d: "CFM, sone level and controls chosen for the room, with model options at more than one price." },
      { t: "Install and duct", d: "New fan mounted to framing, insulated duct run to a proper exterior termination, damper and cap installed." },
      { t: "Test and finish", d: "Airflow checked at the grille, drywall patched and painted where needed, timer programmed and explained." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. The wide spread on new ducting reflects how far the roof or gable wall is from the fan.",
      rows: [
        { label: "Fan replacement, existing duct", range: "$250 to $450" },
        { label: "New fan with new exterior duct", range: "$500 to $950" },
        { label: "Timer or humidity switch", range: "add $90 to $150" },
      ],
    },
    photos: [
      "ceiling-drywall-mudded-pa",
      "ceiling-insulation-vent-framing-pa",
      "recessed-drywall-access-panel-pa",
      "drywall-taping-mudding-pa",
    ],
    faqs: [
      {
        q: "How do I know if my bathroom fan vents into the attic?",
        a: "Look in the attic above the bathroom. You should see an insulated duct running from the fan housing to the roof or a gable wall. A duct lying loose on the insulation, or no duct at all, means the fan is dumping moisture into the attic. Other signs: damp or matted insulation above the bathroom, frost on nail tips in winter, and dark staining on the roof sheathing. Any of those is worth a call before mold gets a vote.",
      },
      {
        q: "What size bathroom fan do I need?",
        a: "One CFM per square foot of floor, with 50 CFM as the minimum. An 8 by 10 bathroom wants at least 80 CFM. Add capacity for a separate toilet room or a big soaking tub. Bigger is not automatically better: a 110 CFM fan choked by a 4 inch duct full of elbows moves less air than a right sized fan on a straight run, which is why we size the duct and the fan together.",
      },
      {
        q: "How long should the fan run after a shower?",
        a: "About 20 to 30 minutes. The mirror clearing is not the finish line; the drywall and framing need the extra time to dry out. That is exactly what timer switches are for. Set it, leave, and the fan shuts itself off instead of running until bedtime or, more commonly, not running at all.",
      },
    ],
    related: ["bathroom-remodeling", "drywall-installation-repair", "popcorn-ceiling-removal"],
  },

  {
    slug: "tile-backsplash-installation",
    name: "Tile Backsplash Installation",
    navName: "Backsplashes",
    short: "Kitchen backsplashes in subway, mosaic and herringbone, with outlets cut clean and edges finished with metal profiles.",
    hero: "kitchen-remodel-quartz-farmhouse-sink-pa",
    metaTitle: "Tile Backsplash Installation in Lancaster & Chester County PA",
    metaDescription:
      "Tile backsplash installation in Lancaster County and Chester County PA. Subway, mosaic and herringbone with clean outlet cuts and finished edges, typically $800 to $2,000.",
    intro: [
      "A backsplash is a small amount of tile in the most looked at spot in the house. It sits at eye level, gets lit by under cabinet lights that show every flaw, and covers the wall you stare at while the coffee brews. That is why we treat a 40 square foot backsplash with the same layout discipline as a full shower. We install kitchen backsplashes across Lancaster County and Chester County as a standalone one or two day job: ceramic and porcelain subway laid straight or offset, glass and marble mosaics on mesh, herringbone for people who like their tile with some attitude, and large format tile for the slab look without the slab price. Many of our backsplash calls come right after new countertops go in, when the bare wall above the fresh quartz suddenly looks unfinished. No kitchen remodel required, no weeks of disruption, and the kitchen stays usable the whole time.",
      "The layout is decided before the first piece is cut. Tile gets centered on the range wall or the window so the pattern lands symmetrically, cut slivers get hidden in corners instead of shouted next to the hood, and grout lines get planned to carry level around the room even when the counters and cabinets are not. Outlets are the tell. Every outlet and switch gets cut tight, and the boxes get extension rings so the covers sit flush on the new tile instead of sinking behind it. Edges are the other tell. Exposed tile ends get finished with metal edge profiles or a polished stone edge, not a bead of caulk doing its best. Natural stone gets sealed before grouting so the grout cannot stain it. Herringbone runs more labor than straight subway because every course is angle cuts, and we say so in the quote rather than in a change order.",
      "One sequencing note that saves people real money: the backsplash goes in after the countertops, always. If new counters are anywhere in your plan, even a year out, do them first, because new counter heights and thicknesses almost never match the old ones and the tile line will show it. We check this at the estimate. Peel and stick tile exists, and for a rental turnover it is honestly fine for a year or two; in a kitchen you plan to keep, real tile grouts harder, cleans better and does not curl over the stove. If you are refreshing the whole room, tile, paint and hardware together, it may be worth pricing our [kitchen remodeling](/services/kitchen-remodeling) refresh package instead of piecing it out. Around here backsplash installs run $800 to $2,000 depending on tile and pattern, small enough to feel affordable, visible enough to change how the whole kitchen reads. Estimates are free everywhere in Lancaster County and Chester County, from Lititz to West Chester.",
    ],
    included: [
      { t: "Layout planning", d: "Pattern centered on the focal wall, slivers hidden in corners, grout lines carried level around the room." },
      { t: "Surface prep", d: "Grease washed off, old adhesive scraped, loose paint and damaged drywall repaired so tile bonds to something solid." },
      { t: "Subway, mosaic and herringbone", d: "Straight set, offset, stacked, mosaics on mesh and angle cut herringbone, all with consistent joints." },
      { t: "Clean outlet cuts", d: "Tight cuts at every box, with extension rings so covers sit flush on the finished tile." },
      { t: "Finished edges", d: "Metal edge profiles or polished stone edges where tile ends, so the last tile looks intentional." },
      { t: "Grout and seal", d: "Grout matched to the tile, natural stone sealed, and a flexible caulk joint where tile meets the counter." },
    ],
    process: [
      { t: "Measure and plan", d: "Square footage, outlet count and pattern decided, with the layout sketched so you see where the cuts land." },
      { t: "Prep the wall", d: "Counters and cabinets masked, wall cleaned and repaired, level lines snapped for the first course." },
      { t: "Set the tile", d: "Tile installed to the layout with spacers and level joints, outlets cut and extension rings fitted as we go." },
      { t: "Grout and finish", d: "Grouted, cleaned, caulked at the counter and sealed where the stone calls for it. Kitchen back in service the same day." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. The tile itself is separate and runs anywhere from $3 to $40 per square foot depending on taste.",
      rows: [
        { label: "Backsplash install, complete", range: "$800 to $2,000" },
        { label: "Labor per square foot", range: "$18 to $30" },
        { label: "Schluter edge profile upgrade", range: "$150 to $300" },
      ],
    },
    photos: [
      "kitchen-remodel-quartz-farmhouse-sink-pa",
      "marble-mosaic-vanity-wall-tile-pa",
      "subway-tile-shower-hex-marble-floor-pa",
      "marble-shower-wall-tile-installation-pa",
    ],
    faqs: [
      {
        q: "How long does a tile backsplash take to install?",
        a: "One to two days. Straight set or offset subway usually goes in and gets grouted across two short days, and mosaics and herringbone sit at the two day end because of cutting time. The kitchen stays usable throughout, and the range only moves for the hours we are tiling behind it.",
      },
      {
        q: "Can you tile over my old backsplash?",
        a: "We take the old tile off. Tile over tile adds thickness that fights the outlets, the counters and the edges, and it stacks new tile on top of whatever adhesive failure the old layer was hiding. Removing a backsplash and repairing the drywall behind it is quick work, and it gives the new tile something honest to hold onto. Painted drywall in good shape needs only cleaning and scuffing.",
      },
      {
        q: "What grout color should I pick?",
        a: "Contrasting grout shows the pattern, matching grout quiets it. Both look right in different kitchens, so we bring color sticks and hold them against your actual tile in your actual light. One practical note: bright white grout behind a range takes real upkeep. A shade darker hides everyday cooking better, and modern stain resistant grouts help either way.",
      },
    ],
    related: ["kitchen-remodeling", "tile-installation", "cabinet-installation"],
  },

  {
    slug: "tile-repair-regrouting",
    name: "Tile Repair & Regrouting",
    navName: "Tile Repair",
    short: "Cracked tile swaps, regrouting and recaulking that keep good showers alive, with an honest verdict when repair is the wrong money.",
    hero: "subway-tile-shower-hex-marble-floor-pa",
    metaTitle: "Tile Repair & Regrouting in Lancaster & Chester County PA",
    metaDescription:
      "Tile repair and regrouting in Lancaster County and Chester County PA. Cracked tile swaps, shower regrouting and recaulking, with an honest call when repair will not hold.",
    intro: [
      "Not every tired shower needs a remodel. Grout wears, caulk peels, a dropped shampoo bottle cracks a floor tile, and none of that means the waterproofing behind the tile has failed. We run tile repair and regrouting as its own service across Lancaster County and Chester County: cracked tile replacement, full shower regrouts, recaulking, and small floor repairs. Kitchen and entryway floors get the same treatment, because one cracked tile does not condemn a floor. Most visits run two to five hours, the shower is back in service the next morning, and a few hundred dollars of maintenance at the right time routinely buys a decent shower another five to ten years. We would rather sell you that than a remodel you do not need yet.",
      "The repairs themselves are exacting work in a small space. Failed grout gets cut out with oscillating tools, not smeared over, because new grout bonded to old grout fails in months. Changes of plane, the corners and the seam where walls meet the pan, get flexible silicone instead of grout, since those joints move and grout does not. That single detail is behind most of the grout complaints we hear, and we wrote the full story up in our [grout cracking blog](/blog/shower-grout-keeps-cracking). Recaulking is the cheapest insurance in the bathroom: the bead at the tub or pan is a wear item, like tires, and replacing it every few years keeps water out of the wall for a fraction of what the wall costs. Cracked tiles get cut out one at a time and replaced with spares from your leftover box, discontinued tile hunted down, a donor tile borrowed from a hidden spot, or a deliberate contrast piece when a match truly no longer exists.",
      "Now the honest part, because this is where repair money gets wasted. Regrouting is cosmetic and preventive. It will not fix a shower pan that has already failed. Tiles that sound hollow when tapped, a floor that flexes underfoot, stains on the ceiling below, or grout that cracks again within months are structural symptoms, and new grout over them is a bandage on a broken bone. We learned to say this plainly after jobs like [the shower that lied](/projects/leaking-shower-rebuild-downingtown-pa), which looked like a simple regrout and was hiding a rotted subfloor. When we see those signs we stop and tell you, with photos, and quote the real fix instead of taking your regrout money. Regrouting over a failed pan buys you a nicer looking failure. Sometimes the answer is maintenance, sometimes it is a rebuild, and you deserve to know which one you are buying before anyone opens a grout bag. Estimates are free across Lancaster County and Chester County.",
    ],
    included: [
      { t: "Cracked tile replacement", d: "Individual tiles cut out and replaced without disturbing their neighbors, matched from spares or sourced." },
      { t: "Shower regrouting", d: "Old grout cut out to depth, joints cleaned and regrouted in a color that matches or updates the whole shower." },
      { t: "Recaulking", d: "Failed caulk stripped, joints dried and treated, then fresh mold resistant silicone at every change of plane." },
      { t: "Leak inspection", d: "Tap testing, moisture readings and a look at the ceiling below when possible, so repairs go on sound structure only." },
      { t: "Grout sealing", d: "Cement grout sealed after cure to slow staining and make cleaning easier." },
      { t: "Straight verdicts", d: "If the pan or the wall behind the tile has failed, we tell you with photos and quote the real fix." },
    ],
    process: [
      { t: "Inspect and diagnose", d: "We tap, probe and moisture test before quoting, because the difference between cosmetic and structural is everything here." },
      { t: "Remove the failed material", d: "Grout cut out with oscillating tools, damaged tiles freed one at a time, caulk stripped to clean substrate." },
      { t: "Regrout and replace", d: "New grout worked into clean joints, replacement tiles set and aligned, silicone run at every moving joint." },
      { t: "Seal and hand back", d: "Grout sealed after cure, shower wiped down, and honest guidance on how long the fix should last." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. Most repair visits land in the low hundreds; the value is in the years they add.",
      rows: [
        { label: "Regrout a full shower", range: "$450 to $900" },
        { label: "Recaulk tub or shower", range: "$180 to $350" },
        { label: "Cracked tile replacement, per visit", range: "$150 to $400" },
      ],
    },
    photos: [
      "subway-tile-shower-hex-marble-floor-pa",
      "marble-shower-wall-tile-installation-pa",
      "tub-surround-marble-tile-remodel-pa",
      "baseboard-trim-hex-marble-tile-floor-pa",
      "porcelain-floor-tile-leveling-system-pa",
    ],
    faqs: [
      {
        q: "Why does my shower grout keep cracking in the corners?",
        a: "Because corners move and grout does not. Every change of plane, wall to wall and wall to floor, flexes a little as the house breathes, and rigid grout in those joints cracks on schedule. The fix is silicone in the corners and grout only in the field. If field grout in the middle of a wall keeps cracking too, that points at movement behind the tile, and that is a different conversation.",
      },
      {
        q: "Can you match my existing tile?",
        a: "Usually. The best source is the spare box in your attic or garage, so check there first. Beyond that we hunt discontinued lines, borrow a donor tile from a hidden spot like behind the vanity, or, when a match truly does not exist, suggest a deliberate accent so the repair looks chosen instead of close but wrong.",
      },
      {
        q: "When is regrouting a waste of money?",
        a: "When the structure under the tile has failed. Hollow sounding tiles, a shower floor that flexes, stains on the ceiling below, or grout that recracks within months all say the problem is behind the tile, not in the joints. We inspect first, and if that is what we find, we show you the evidence and quote the rebuild instead of selling you cosmetics.",
      },
    ],
    related: ["tile-installation", "bathroom-remodeling", "walk-in-shower-installation"],
  },

  {
    slug: "load-bearing-wall-removal",
    name: "Load Bearing Wall Removal",
    navName: "Wall Removal",
    short: "Engineered wall removals with permits, shoring and LVL beams, opening Lancaster and Chester County houses up the legal way.",
    hero: "open-concept-living-remodel-lancaster-pa",
    metaTitle: "Load Bearing Wall Removal in Lancaster & Chester County PA",
    metaDescription:
      "Load bearing wall removal in Lancaster County and Chester County PA. Engineering, permits, shoring and LVL beams done right, typically $8,000 to $15,000.",
    intro: [
      "Taking down the wall between a kitchen and a living room changes a house more than any other single project, which is why it is the most requested structural job we do across Lancaster County and Chester County. It is also the project with the widest gap between how it looks on television and how it works in real life. Every load bearing wall is holding up part of the house, which is a bad thing to discover halfway through demo. Done properly, the sequence is fixed: a structural engineer sizes the beam, the township issues a permit, temporary shoring carries the load while the wall comes out, and the new beam takes over before anything above it notices. Most removals take one to two weeks start to finish, and the house stays livable throughout. You can follow the whole sequence in our [Lancaster wall removal](/projects/load-bearing-wall-removal-lancaster-pa) case study.",
      "The beam is usually an LVL, engineered lumber sized by calculation rather than guesswork, set either under the ceiling as a dropped beam or up inside the joist bay as a flush beam so the ceiling runs flat through. Flush costs more, because every joist gets cut and hung on hardware, and it is usually worth it in a main living space. The loads do not stop at the beam. Each end lands on a post, and each post needs a clear load path down to the foundation, which sometimes means opening a wall below or pouring a new footing in the basement. Wires, ducts and the occasional drain like to live inside these walls too. In older Lancaster County farmhouses the surprise is usually undersized framing above; in newer Chester County townhomes it is ductwork with nowhere else to go. We scope all of it before quoting, because point loads and hidden mechanicals are the difference between the standard price and the expensive version, and you should hear that difference before demo, not after.",
      "Costs, and the honest alternative. Around here a straightforward engineered removal runs $8,000 to $15,000 including the engineering, permit, beam, framing and finish patching, and complicated cases with new footings or rerouted mechanicals run $15,000 to $25,000. We broke down what drives the number in our [wall removal cost guide](/blog/load-bearing-wall-removal-cost-pa). The finish work matters as much as the structure: drywall blended so the ceiling shows no seam, and hardwood laced into the floor where the wall stood so there is no strip of mismatched boards announcing where it used to be. And the honest alternative: sometimes a wide cased opening, eight or ten feet with a proper header, delivers most of the openness for roughly half the money and keeps a place for the kitchen cabinets to end. We will sketch both options and put real numbers on each, then let you decide.",
    ],
    included: [
      { t: "Structural engineering", d: "A licensed engineer confirms what the wall carries and sizes the beam, posts and connections. We coordinate the whole thing." },
      { t: "Permits and inspections", d: "Township permit pulled, inspections scheduled and passed. Structural work without a permit haunts you at resale." },
      { t: "Temporary shoring", d: "Stud shoring walls built on both sides carry the load safely while the old wall comes out." },
      { t: "LVL and flush beam installation", d: "Dropped or flush beams set with engineered hangers and posts, with a continuous load path to the foundation." },
      { t: "Point load and footing work", d: "Posts carried down through the walls below and new footings poured when the engineer calls for them." },
      { t: "Finish patching and floor lacing", d: "Ceilings and walls blended, and flooring laced in where the wall stood so the removal disappears." },
    ],
    process: [
      { t: "Scope and engineer", d: "We open a small inspection hole, trace the loads and mechanicals, and get the engineered drawing and the permit." },
      { t: "Shore and demo", d: "Temporary walls up, old wall out, wires and ducts rerouted by licensed trades where they are found." },
      { t: "Set the beam", d: "LVL set flush or dropped, posts and hardware installed, and the framing inspection passed before anything gets covered." },
      { t: "Patch and finish", d: "Drywall, paint and floor lacing knit the two rooms into one, with no seam telling the story." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. The spread depends on what the wall is hiding and where the point loads land.",
      rows: [
        { label: "Load bearing wall removal, typical", range: "$8,000 to $15,000" },
        { label: "With new footings or rerouted mechanicals", range: "$15,000 to $25,000" },
        { label: "Engineering letter and drawings", range: "$600 to $1,200" },
      ],
    },
    photos: [
      "open-concept-living-remodel-lancaster-pa",
      "wall-framing-plumbing-rough-in-pa",
      "kitchen-remodel-quartz-farmhouse-sink-pa",
      "ceiling-insulation-vent-framing-pa",
    ],
    faqs: [
      {
        q: "How do I know if my wall is load bearing?",
        a: "Clues include running perpendicular to the joists above, sitting near the center of the house, or stacking above a beam or wall in the basement. But clues are not answers, and old houses get remodeled into strange configurations. We treat every wall as load bearing until an engineer says otherwise. The engineering letter costs $600 to $1,200 and turns a guess into a stamped fact, which is cheap insurance under your second floor.",
      },
      {
        q: "Do I need a permit to remove a load bearing wall?",
        a: "Yes, everywhere we work. The permit gets the beam design reviewed and the installation inspected, and it protects you at resale, because buyers agents ask about that big open room. Unpermitted structural work can stall a sale or an insurance claim years later. We pull the permit and meet the inspector as part of the job, not as an extra.",
      },
      {
        q: "Should the beam be flush or dropped?",
        a: "Flush hides inside the ceiling and costs more, because every joist gets cut and hung on hardware. Dropped is simpler and cheaper but leaves a visible beam below the ceiling. In a main living space we usually recommend flush. Over a kitchen island or in a basement, a dropped beam wrapped clean can look intentional. We price both so the decision is yours with numbers attached.",
      },
    ],
    related: ["custom-framing", "kitchen-remodeling", "interior-remodeling"],
  },

  {
    slug: "basement-bathroom-addition",
    name: "Basement Bathroom Addition",
    navName: "Basement Bathrooms",
    short: "Full and half bathrooms added below grade, from slab cut and ejector pump to tile and glass, planned around code and moisture.",
    hero: "basement-remodel-framing-spray-foam-pa",
    metaTitle: "Basement Bathroom Addition in Lancaster & Chester County PA",
    metaDescription:
      "Basement bathroom additions in Lancaster County and Chester County PA. Slab cutting, ejector pumps, code venting and waterproofed showers, typically $15,000 to $25,000.",
    intro: [
      "A finished basement without a bathroom is a nice room people leave every twenty minutes. Adding one is what turns basement square footage into space the family actually lives in, and it is the single upgrade that matters most for guests, teenagers and future resale. We build basement bathrooms across Lancaster County and Chester County as complete projects: layout, plumbing, framing, waterproofed showers, tile, fixtures and ventilation, handled by one crew on one schedule. Most builds run three to five weeks depending on how far the drains have to travel. Our [Elizabethtown basement bathroom](/projects/basement-bathroom-addition-elizabethtown-pa) case study walks through a full build from bare slab to finished shower.",
      "The part that makes basement bathrooms different is under the floor. Drain lines have to reach the sewer, and the sewer is often higher than the basement slab. If the main leaves the house deep enough, we cut the slab, trench the drains, and gravity does the rest. If not, a sewage ejector system goes in: a sealed pit and pump that lifts waste up to the main. Ejector pumps have an unglamorous reputation and a very glamorous effect on property value. Modern sealed units are quiet, reliable and vented properly, and the pit lives under a lid you will never think about. Cutting concrete is loud for a day, dusty only when done wrong, and completely routine for a crew with the right saws and dust control. Vent lines matter as much as drains below grade, because every fixture needs air behind it to drain properly, and we run them to code instead of leaning on gadget fittings that inspectors frown at. Some builders leave a capped rough in under the slab for a future bath, and if yours did, you just saved several thousand dollars. We check for that before anything else.",
      "Below grade rooms also need air handled deliberately. There is no window to crack, so a properly ducted exhaust fan is not optional, and it vents outside, not into the joist bay. Moisture smart materials matter just as much: pressure treated bottom plates on the slab, cement board and full membrane waterproofing in the shower, and finishes that shrug off basement humidity. Ceiling height gets checked at the estimate too, since ducts and beams decide where the shower can actually go. The honest guidance we give at estimates: a full bath with a tiled shower runs $15,000 to $25,000, and if the budget will not carry that comfortably, a half bath at $10,000 to $16,000 delivers most of the daily benefit. We can also rough the plumbing so a shower slots in later without recutting the slab. That future proofing costs almost nothing on day one and saves thousands on day one thousand. Free written estimates anywhere in Lancaster County and Chester County.",
    ],
    included: [
      { t: "Layout and code planning", d: "Fixture clearances, ceiling heights and venting worked out on paper before any concrete is touched." },
      { t: "Slab cutting and drains", d: "Concrete sawed with dust control, drain lines trenched and pitched, slab patched flush after the plumbing inspection." },
      { t: "Sewage ejector systems", d: "Sealed pit and pump installed and vented properly when the main is too high for gravity." },
      { t: "Framing and moisture smart materials", d: "Pressure treated plates on concrete, straight walls, and materials chosen for below grade life." },
      { t: "Waterproofed shower and tile", d: "Full membrane systems, flood tested before tile, built to the same standard as our upstairs bathrooms." },
      { t: "Ventilation and finish", d: "Exhaust fan ducted outside, lighting and electric coordinated, fixtures set and the room painted and done." },
    ],
    process: [
      { t: "Plan and permit", d: "Layout designed around the existing main and joists, permits pulled, rough in located precisely before cutting." },
      { t: "Cut and rough in", d: "Slab opened, drains and vents run, ejector pit set if needed, then inspection and the concrete patch." },
      { t: "Frame, board and tile", d: "Walls framed, electric and fan roughed in, cement board and membrane in the shower, tile set and grouted." },
      { t: "Fixtures and finish", d: "Toilet, vanity, glass and trim installed, paint on the walls, and a final walkthrough together." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County, consistent with our basement finishing page. A builder installed rough in under the slab drops the number meaningfully.",
      rows: [
        { label: "Full basement bathroom addition", range: "$15,000 to $25,000" },
        { label: "Ejector system portion", range: "$2,500 to $4,000" },
        { label: "Half bath, toilet and vanity", range: "$10,000 to $16,000" },
      ],
    },
    photos: [
      "basement-remodel-framing-spray-foam-pa",
      "wall-framing-plumbing-rough-in-pa",
      "subway-tile-shower-hex-marble-floor-pa",
      "walk-in-shower-glass-slider-marble-pa",
      "ceiling-insulation-vent-framing-pa",
    ],
    faqs: [
      {
        q: "Do I need an ejector pump for a basement bathroom?",
        a: "Only if your main sewer line leaves the house higher than the new drains need to be. We find out early by locating the main and checking its depth. Deep main, gravity drains and no pump. Shallow main, a sealed ejector pit and pump, which adds $2,500 to $4,000. Roughly half the basement bathrooms we build need one, and the finished rooms look identical either way.",
      },
      {
        q: "Does a basement bathroom add real value?",
        a: "In our market, yes. Bathroom count is one of the first filters buyers use, and a finished basement with a bath appraises as more usable living space than one without. The honest caveat: value follows quality. A cramped, damp afterthought does not help a sale, which is why we build below grade to the same waterproofing standard as upstairs.",
      },
      {
        q: "How messy is cutting the concrete slab?",
        a: "One loud, controlled day. We saw with dust management, contain the work area in plastic, and haul the rubble out as we go. After the plumbing inspection, new concrete gets poured flush and the mess is history. The rest of the project is ordinary remodeling, and the laundry area usually stays usable through all of it.",
      },
    ],
    related: ["basement-finishing", "bathroom-remodeling", "custom-framing"],
  },

  {
    slug: "egress-window-installation",
    name: "Egress Window Installation",
    navName: "Egress Windows",
    short: "Code sized egress windows cut into basement walls, with wells, drainage and permits handled, so basement bedrooms are legal bedrooms.",
    hero: "wall-framing-plumbing-rough-in-pa",
    metaTitle: "Egress Window Installation in Lancaster & Chester County PA",
    metaDescription:
      "Egress window installation in Lancaster County and Chester County PA. Concrete cutting, code sized windows, wells and drainage with permits handled, $4,000 to $8,000 installed.",
    intro: [
      "If a basement room is going to be called a bedroom, code says a person must be able to climb out of it and a firefighter must be able to climb in. That is the whole job in one sentence. An egress window is what legally separates a basement bedroom from a room that happens to contain a bed, and it is the difference between counting that room at resale and apologizing for it. We cut and install egress windows across Lancaster County and Chester County, usually as part of a [basement finishing](/services/basement-finishing) project and often as a standalone job for homeowners fixing a basement that was finished without one. The same window also floods the room with daylight, which is why plenty of people add one even when code does not force the issue.",
      "The code numbers are specific. The window needs at least 5.7 square feet of net clear opening, at least 24 inches of clear height, at least 20 inches of clear width, and a sill no more than 44 inches off the floor. Plenty of existing basement windows fail every one of those tests. Getting a compliant window in means cutting the foundation: we saw a precise opening in the concrete or block, set a treated buck, flash it, and install the window plumb and sealed. Outside, a window well holds back the soil, and wells deeper than 44 inches get a fixed ladder. Excavation happens the same day the concrete is cut, so the foundation is never left open overnight. The well drains to gravel below and ties into footing drainage where the site calls for it, because a well that holds rainwater turns your escape hatch into an aquarium. A cover keeps kids, pets and snow out without blocking the exit.",
      "Beyond the code box checking, the window changes the room. Natural light is the thing basements are starving for, and a full size egress window with a clean well delivers more of it than any fixture we could install. Permits and inspections are part of our price, not your homework. Structural cuts in a foundation should always be inspected, and we schedule that ourselves. Most installs take two to three days from the first shovel to the final inspection. Two honest notes before you book: if your basement wall sits mostly above grade on one side, a standard full size window may satisfy egress without deep excavation, which costs less, and we will say so. And if you are not creating a sleeping room, code may not require egress at all, though many people add it anyway for the light and the resale story. We put the numbers and the requirements in our [egress requirements and cost guide](/blog/egress-window-requirements-cost-pa). Free estimates across Lancaster County and Chester County.",
    ],
    included: [
      { t: "Utility and layout check", d: "Buried lines located and interior mechanicals traced before we pick the cut location." },
      { t: "Concrete and block cutting", d: "Foundation sawed cleanly with dust and water control, sized to the engineered opening." },
      { t: "Window and buck installation", d: "Treated buck anchored, window set plumb and square, flashed and sealed against the foundation." },
      { t: "Window well and drainage", d: "Well set and anchored, gravel drainage below, and a fixed ladder when depth requires one." },
      { t: "Well covers", d: "Clear covers that keep out rain, leaves and kids without blocking the exit." },
      { t: "Permits and inspection", d: "Permit pulled and inspections scheduled and passed as part of the job, not left to you." },
    ],
    process: [
      { t: "Site check and permit", d: "We verify code sizing for the room, locate utilities, pick the spot and pull the permit." },
      { t: "Excavate and cut", d: "Well area dug and the foundation cut and prepped, typically all in the same day." },
      { t: "Set the window and well", d: "Buck, window, flashing and well installed, drainage stone placed, backfill compacted." },
      { t: "Finish and inspect", d: "Interior returns finished, exterior sealed, cover on, and the final inspection signed off." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. Depth of dig and wall construction drive the spread more than the window itself.",
      rows: [
        { label: "Egress window, installed complete", range: "$4,000 to $8,000" },
        { label: "Window well and cover portion", range: "$800 to $1,600" },
        { label: "Permit and inspections", range: "included in our quote" },
      ],
    },
    photos: [
      "wall-framing-plumbing-rough-in-pa",
      "basement-remodel-framing-spray-foam-pa",
      "ceiling-insulation-vent-framing-pa",
      "drywall-green-board-hung-taped-pa",
    ],
    faqs: [
      {
        q: "What does code require for an egress window?",
        a: "At least 5.7 square feet of net clear opening, minimum 24 inches of clear height and 20 inches of clear width, a sill no higher than 44 inches off the floor, and the window has to open from inside without keys or tools. The well outside needs at least 9 square feet of floor area with 36 inches of projection, plus a fixed ladder when it is deeper than 44 inches. We size everything to pass inspection the first time.",
      },
      {
        q: "Does cutting the foundation weaken the house?",
        a: "Not when it is engineered and cut properly. The opening gets sized for the wall construction, block walls get treated differently than poured concrete, and a lintel carries the load over the window where one is needed. This is exactly why the permit and inspection exist, and why we include them in the job instead of treating them as optional paperwork.",
      },
      {
        q: "Will an egress window leak?",
        a: "A well that holds water will eventually push it inside, which is why drainage is half the job. Gravel below the well, a tie into footing drainage where the site needs it, correct flashing at the buck, and a cover that sheds rain keep the opening dry. The egress windows that leak are almost always the ones installed without any of that.",
      },
    ],
    related: ["basement-finishing", "window-door-installation", "custom-framing"],
  },

  {
    slug: "plaster-repair-restoration",
    name: "Plaster Repair & Restoration",
    navName: "Plaster Repair",
    short: "Century home plaster reattached, bridged and skimmed smooth, with a straight answer when covering or replacing it is the smarter move.",
    hero: "drywall-skim-coat-hallway-pa",
    metaTitle: "Plaster Repair & Restoration in Lancaster & Chester County PA",
    metaDescription:
      "Plaster repair and restoration in Lancaster County and Chester County PA. Cracks bridged, loose plaster reattached and walls skimmed smooth, with honest advice when drywall wins.",
    intro: [
      "Lancaster County and Chester County are full of houses older than drywall, and their walls are three coat plaster over wood lath: scratch coat, brown coat, finish coat, often with actual horsehair mixed in for strength. Plaster like that is harder, denser and quieter than any drywall, and when it is sound it deserves to be kept. When it fails, it fails in ways drywall does not, and repairing it is its own trade. We repair and restore plaster across both counties, in farmhouses, borough homes and townhouse rows. The work ranges from a single stair crack to whole room restorations, and most of it does not require losing the original walls. Many of these walls went up before 1930, and with the right repairs they are good for another century.",
      "The failures have names. Cracks come from a house moving through seasons, and the fix is not caulk in the crack. It is bridging: the crack gets raked out, filled, and covered with fiberglass mesh and compound so the movement spreads across a wide band of wall instead of telegraphing back through a thin line. Loose plaster is a different problem. The plaster keys, the little hooks of material squeezed between the lath strips, snap with age, and whole sections start floating off the wall. You can hear it: sound plaster taps solid, loose plaster taps like a drum. Those sections get pulled back tight with plaster washers screwed into the lath, or with adhesive injected behind the plaster, before anything gets finished. Then a skim coat over the whole surface makes eighty years of patches, texture and roller stipple disappear into one flat plane. Sanding in these houses gets treated as lead work, with containment and lead safe practice, because most pre 1978 paint is exactly what you think it is.",
      "Now the honest fork in the road. Restoration is worth it when the plaster is mostly attached and you care about keeping the original fabric, the sound, and details like curved corners and deep window reveals. When ceilings sag on broken keys across whole rooms, or walls crumble around every fastener, reattaching costs more than covering, and we say so. The overlay option, screwing 3/8 inch drywall over the plaster into the framing, is often the pragmatic winner, and we compared the approaches honestly in [drywall over plaster](/blog/drywall-over-plaster). Full demo back to the studs is the last resort, reserved for walls that are truly gone or getting new wiring and plumbing anyway. Our [Lititz plaster restoration](/projects/plaster-restoration-lititz-pa) project shows what saving the walls looks like when it goes right. Skim coated plaster also takes modern paint beautifully once it is primed with the right product. We quote whichever path each room actually calls for, and written estimates are free anywhere in Lancaster County and Chester County.",
    ],
    included: [
      { t: "Plaster reattachment", d: "Loose sections pulled back tight with plaster washers or injected adhesive before any finishing starts." },
      { t: "Crack bridging", d: "Cracks raked, filled and bridged with fiberglass mesh so seasonal movement stops telegraphing through." },
      { t: "Skim coating", d: "Full surface skim in multiple thin coats that turns patched, textured walls back into one flat plane." },
      { t: "Hole and lath repair", d: "Broken lath refastened or replaced and holes rebuilt in layers, not just mudded over." },
      { t: "Lead safe practices", d: "Containment and lead safe work methods around pre 1978 paint, which is most of these houses." },
      { t: "Honest triage", d: "A room by room verdict on what to restore, what to overlay and what to replace, with numbers for each." },
    ],
    process: [
      { t: "Assess wall by wall", d: "We press, tap and map what is sound, what is loose and what is gone, then quote each room honestly." },
      { t: "Stabilize", d: "Loose plaster reattached with washers or adhesive, truly failed sections removed, lath repaired." },
      { t: "Bridge and skim", d: "Cracks bridged with mesh, then skim coats pulled over the full surface until it reads flat in raking light." },
      { t: "Sand, prime and finish", d: "Careful sanding with containment, a primer suited to old plaster, and paint if it is in your scope." },
    ],
    price: {
      note: "2026 ranges for Lancaster County and Chester County. Plaster is priced by condition, which is why we quote after touching the walls, not from photos.",
      rows: [
        { label: "Crack repair visit", range: "$300 to $700" },
        { label: "Reattach and skim, per square foot", range: "$3 to $6" },
        { label: "Full room restoration", range: "$1,500 to $4,000" },
      ],
    },
    photos: [
      "drywall-skim-coat-hallway-pa",
      "drywall-taping-mudding-pa",
      "ceiling-drywall-mudded-pa",
      "oak-staircase-renovation-lancaster-pa",
      "recessed-drywall-access-panel-pa",
    ],
    faqs: [
      {
        q: "Is old plaster worth saving?",
        a: "When it is mostly attached, yes. Sound plaster is denser and quieter than drywall, takes a knock better, and keeps the character details of an old house, the curved corners and deep reveals that drywall flattens out. When ceilings sag on broken keys across whole rooms, saving it costs more than replacing it, and we will tell you where that line falls in your house, room by room.",
      },
      {
        q: "Why do my plaster cracks keep coming back?",
        a: "Because filling a crack treats the symptom. The wall moves with the seasons, and spackle pressed into the crack simply cracks along the same line next winter. Bridging works differently: mesh and compound spread that movement over a wide band of wall instead of a hairline, which is why bridged repairs hold. Cracks that keep growing, or that step in a staircase pattern, can point at settling, and we say so when we see it.",
      },
      {
        q: "Should I just put drywall over the plaster?",
        a: "Sometimes, honestly, yes. When large areas are loose, an overlay of 3/8 inch drywall screwed through to the framing costs less than full restoration and buys perfectly flat walls. The trade is thickness: window jambs, casings and outlets all need extending, and you give up some original surface. Restoration wins in showcase rooms, overlay wins in badly failed ones, and we quote both when the call is close.",
      },
    ],
    related: ["drywall-installation-repair", "skim-coating", "interior-remodeling"],
  },
];
