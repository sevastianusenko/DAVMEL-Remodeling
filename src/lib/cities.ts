// City page content. Paragraphs support [text](/link) and **bold** mini markdown.
import type { Faq } from "./services";

export type City = {
  slug: string;
  name: string;
  county: string;
  driveTime: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string[];
  emphasis: { slug: string; why: string }[];
  faqs: Faq[];
};

export const CITIES: City[] = [
  {
    slug: "lancaster-pa",
    name: "Lancaster",
    county: "Lancaster County",
    driveTime: "25 minutes from our shop",
    metaTitle: "Remodeling Contractor in Lancaster PA",
    metaDescription:
      "Licensed remodeling contractor serving Lancaster PA. Bathroom remodels, basement finishing, drywall, tile and exterior work in city rowhomes and township homes. PA #PA214721.",
    hero: "open-concept-living-remodel-lancaster-pa",
    intro: [
      "Lancaster city houses have character, and character has consequences. Rowhomes from the early 1900s come with plaster walls, sloping pine floors, narrow stairs and bathrooms that were added wherever they fit in 1958. We love these houses. We also know exactly where they hide their surprises.",
      "DAVMEL Remodeling works across the city and the surrounding townships, from Chestnut Hill and Cabbage Hill rowhomes to ranches in Manheim Township and East Hempfield. City work means tight access, shared walls and sometimes a permit process with a historic review. We plan for all three, and we keep the sidewalk clean because your neighbors are four feet away.",
      "Our most requested Lancaster jobs are [bathroom remodels](/services/bathroom-remodeling) in older homes, [plaster and drywall restoration](/services/drywall-installation-repair), and [full room renovations](/services/full-room-renovation) where floors, walls and trim all need attention at once.",
    ],
    emphasis: [
      { slug: "bathroom-remodeling", why: "Old city bathrooms with new plumbing realities. Our specialty." },
      { slug: "drywall-installation-repair", why: "Plaster repair and skim coats for hundred year old walls." },
      { slug: "full-room-renovation", why: "Whole rooms brought current without losing the character." },
    ],
    faqs: [
      {
        q: "Do you work in Lancaster city historic districts?",
        a: "Yes. Interior work rarely triggers historic review, and for exterior changes visible from the street we help prepare what the Historical Commission wants to see. It adds a step, not a wall.",
      },
      {
        q: "Can you handle parking and debris in tight city blocks?",
        a: "We manage permits for dumpsters or use trailer hauling on tight streets, protect the sidewalk, and broom clean daily. Rowhome remodeling is a courtesy sport and we play it well.",
      },
    ],
  },
  {
    slug: "denver-pa",
    name: "Denver",
    county: "Lancaster County",
    driveTime: "This is home base",
    metaTitle: "Remodeling Contractor in Denver PA",
    metaDescription:
      "DAVMEL Remodeling is based in Denver PA. Bathroom remodels, basements, decks, doors and windows for Denver, Adamstown, Reinholds and the Cocalico area. PA #PA214721.",
    hero: "composite-deck-white-railing-blue-door-pa",
    intro: [
      "Denver is where our trucks sleep. If you live in the borough or anywhere in the Cocalico area, you are getting the shortest drive time and the fastest response we can physically offer. When a client in Denver calls about a leaking shower, we have been known to show up before they finish describing it.",
      "Housing around Denver, Reinholds, Adamstown and Stevens runs from 1900s farmhouses to 1970s ranches to newer developments off Route 272. Farmhouses bring plaster, stone foundations and floors with opinions. Ranches bring the eternal question of finishing the basement. New builds bring builder grade everything, which is where [trim upgrades](/services/interior-doors-trim) and [accent walls](/services/full-room-renovation) earn their keep.",
      "Being neighbors also means our reputation lives here. The person checking out at Weaver Markets behind you might be a client. We build accordingly.",
    ],
    emphasis: [
      { slug: "basement-finishing", why: "Ranch country. Half the basements in the Cocalico area are waiting to become rec rooms." },
      { slug: "deck-building", why: "Composite decks and treated stairs for backyards from Denver to Adamstown." },
      { slug: "bathroom-remodeling", why: "Farmhouse baths updated without wrecking farmhouse charm." },
    ],
    faqs: [
      {
        q: "Do you charge a trip fee near Denver PA?",
        a: "No. Denver, Reinholds, Adamstown, Stevens and the surrounding townships are our backyard. Estimates are free and scheduling is fastest here.",
      },
      {
        q: "Can you do small jobs locally, like one door or a drywall patch?",
        a: "In the immediate Denver area, yes. Small jobs fill the gaps between big ones, and they are how neighbors become long term clients.",
      },
    ],
  },
  {
    slug: "ephrata-pa",
    name: "Ephrata",
    county: "Lancaster County",
    driveTime: "10 minutes from our shop",
    metaTitle: "Remodeling Contractor in Ephrata PA",
    metaDescription:
      "Remodeling contractor 10 minutes from Ephrata PA. Bathroom remodels, drywall, tile, basements and exterior work for borough homes and township properties. Free estimates.",
    hero: "bathroom-remodel-marble-tile-lancaster-pa",
    intro: [
      "Ephrata is ten minutes from our shop, which makes it home turf. From the borough streets near the Cloister to the townships along Route 322, we have measured a lot of bathrooms here.",
      "The borough has a healthy stock of Victorian and early 1900s homes: high ceilings, real wood trim, plaster walls and staircases built when people were apparently narrower. Renovating these homes takes a lighter touch. We repair plaster instead of automatically gutting it, match old trim profiles, and update bathrooms and kitchens without making a 120 year old house look like an airport.",
      "Out in the townships the work shifts to ranches and split levels: [basement finishing](/services/basement-finishing), [decks](/services/deck-building), [window replacement](/services/window-door-installation) and the occasional heroic rescue of a 1980s bathroom.",
    ],
    emphasis: [
      { slug: "bathroom-remodeling", why: "Borough Victorians and township ranches both, updated properly." },
      { slug: "drywall-installation-repair", why: "Plaster walls repaired and skimmed, character kept." },
      { slug: "window-door-installation", why: "Replacement windows with capping, done in a day or two." },
    ],
    faqs: [
      {
        q: "How fast can you get to Ephrata for an estimate?",
        a: "Usually within a couple of days, sometimes same week we talk. It is a ten minute drive, so scheduling around your evening is easy.",
      },
      {
        q: "Do you have references in the Ephrata area?",
        a: "Yes, and being local means you can see actual jobs nearby rather than photos alone. Ask and we will point you to work we have done in the area.",
      },
    ],
  },
  {
    slug: "lititz-pa",
    name: "Lititz",
    county: "Lancaster County",
    driveTime: "20 minutes from our shop",
    metaTitle: "Remodeling Contractor in Lititz PA",
    metaDescription:
      "Remodeling contractor serving Lititz PA. High end bathroom remodels, kitchens, trim carpentry and exterior upgrades for historic borough homes and newer developments.",
    hero: "bathroom-jetted-tub-marble-surround-pa",
    intro: [
      "Lititz once won the title of America's Coolest Small Town, and its homeowners take the hint seriously. This is a town where renovations aim higher: real tile, real wood, details that hold up on a street where every porch is photogenic.",
      "In the historic core around Main Street and the Springs Park, we work carefully in older homes: plaster walls, original staircases and trim that deserves matching rather than replacing. In the newer neighborhoods and developments around Warwick Township, projects lean toward [kitchen updates](/services/kitchen-remodeling), [primary bathroom remodels](/services/bathroom-remodeling) and [wainscoting and built ins](/services/interior-doors-trim) that give newer construction some soul.",
      "Lititz clients tend to know exactly what they want. Good. Bring your Pinterest board, we will bring the level.",
    ],
    emphasis: [
      { slug: "bathroom-remodeling", why: "Marble, glass and heated floors. Lititz likes its bathrooms done right." },
      { slug: "interior-doors-trim", why: "Trim and built ins that match the town's standards." },
      { slug: "kitchen-remodeling", why: "Kitchens upgraded to match some of the county's best housing stock." },
    ],
    faqs: [
      {
        q: "Do you take on high end finish work in Lititz?",
        a: "Yes. Marble tile, panel molding, custom niches and glass shower systems are all in our normal scope. The gold fixture bathroom in our gallery gives you an idea of the level we finish to.",
      },
      {
        q: "Can you work around a family schedule?",
        a: "We set start and stop times with you, protect the living space, and leave the site clean every evening. Most Lititz projects happen with the family home the whole time.",
      },
    ],
  },
  {
    slug: "reading-pa",
    name: "Reading",
    county: "Berks County",
    driveTime: "20 minutes from our shop",
    metaTitle: "Remodeling Contractor in Reading PA",
    metaDescription:
      "Remodeling contractor serving Reading PA and Berks County. Rowhome renovations, bathroom remodels, drywall and plaster repair, doors and windows. Licensed PA #PA214721.",
    hero: "drywall-skim-coat-hallway-pa",
    intro: [
      "Reading is twenty minutes from our shop, and its brick rowhomes are some of the most honest houses in Pennsylvania. Built solid a century ago, they reward owners who maintain them and punish decades of deferred everything. We see both kinds.",
      "Rowhome renovation is its own skill set: plaster over brick walls, party wall rules, steep staircases, flat roofs draining to the back and bathrooms stacked in the middle of the house. Our most common Reading projects are [bathroom rebuilds](/services/bathroom-remodeling), [plaster and drywall restoration](/services/drywall-installation-repair), [interior doors](/services/interior-doors-trim) that finally latch, and [entry and storm doors](/services/window-door-installation) that seal out the winter.",
      "We also work in the suburbs from Wyomissing to Exeter, where the housing shifts to ranches and colonials and the jobs shift to basements, decks and full room renovations.",
    ],
    emphasis: [
      { slug: "drywall-installation-repair", why: "Plaster over brick, repaired and skimmed flat." },
      { slug: "bathroom-remodeling", why: "Middle of the house rowhome baths, rebuilt with real ventilation." },
      { slug: "window-door-installation", why: "Doors and windows that close the envelope on drafty winters." },
    ],
    faqs: [
      {
        q: "Do you work in the city of Reading itself?",
        a: "Yes, city blocks included. We handle the practical parts: permits, tight parking, debris hauling and respect for the neighbors on the other side of the party wall.",
      },
      {
        q: "My rowhome walls are crumbling plaster. What are my options?",
        a: "Three, in rising order of cost: patch and skim what is sound, overlay with new drywall, or gut to brick and rebuild. We inspect and tell you which the walls actually need. Very often the middle option wins.",
      },
    ],
  },
  {
    slug: "lebanon-pa",
    name: "Lebanon",
    county: "Lebanon County",
    driveTime: "35 minutes from our shop",
    metaTitle: "Remodeling Contractor in Lebanon PA",
    metaDescription:
      "Remodeling contractor serving Lebanon PA. Bathroom remodels, basement finishing, drywall, porch repair and deck building for Lebanon city and county homes. Free estimates.",
    hero: "new-porch-steps-railings-after-pa",
    intro: [
      "Lebanon is famous for bologna, and we respect any town with its own official meat. We are here for the houses though: sturdy brick homes in the city, post war ranches and Cape Cods around Cornwall and Annville, and farm properties that have seen four generations of repairs, some of them even done correctly.",
      "Lebanon projects for us skew practical: [bathrooms](/services/bathroom-remodeling) that have earned retirement, [basements](/services/basement-finishing) becoming family space, [porch and step repairs](/services/porch-deck-refinishing), and [decks](/services/deck-building) for backyards that host half the block on summer weekends.",
      "The 35 minute drive from our shop in Denver means Lebanon jobs get the same scheduling priority as Lancaster County work. Distance is our problem, not yours.",
    ],
    emphasis: [
      { slug: "porch-deck-refinishing", why: "Porches and exterior steps brought back from weathered to welcoming." },
      { slug: "basement-finishing", why: "Ranch and Cape basements turned into real square footage." },
      { slug: "bathroom-remodeling", why: "Hard working bathrooms rebuilt to last another forty years." },
    ],
    faqs: [
      {
        q: "Do you really cover Lebanon, or is it the edge of your area?",
        a: "We cover it for real. Lebanon is inside our normal working radius and we schedule full projects there, not just big ones that justify the drive.",
      },
      {
        q: "Can you rebuild exterior steps before winter?",
        a: "Yes, step and railing rebuilds are quick jobs we can slot in through late fall. Staining waits for warm dry days, and we split the work when the calendar demands it.",
      },
    ],
  },
  {
    slug: "elizabethtown-pa",
    name: "Elizabethtown",
    county: "Lancaster County",
    driveTime: "40 minutes from our shop",
    metaTitle: "Remodeling Contractor in Elizabethtown PA",
    metaDescription:
      "Remodeling contractor serving Elizabethtown PA. Bathroom and kitchen remodels, basement finishing, decks and window replacement between Lancaster and Hershey. Free estimates.",
    hero: "elevated-composite-deck-brick-ranch-pa",
    intro: [
      "Elizabethtown sits in that sweet spot between Lancaster and Hershey where families put down roots and stay. The housing follows suit: solid borough homes near the college, ranches and two stories in the townships, and newer developments that could use a little personality.",
      "Our E-town work list looks like a family's life in order: [finish the basement](/services/basement-finishing) when the kids arrive, [remodel the bathroom](/services/bathroom-remodeling) when the mornings get crowded, [build the deck](/services/deck-building) for graduation parties, and [replace the windows](/services/window-door-installation) when the heating bill files a complaint.",
      "We show up on time, keep the site clean and finish on the schedule we wrote down. In a town this size, word travels. We like it that way.",
    ],
    emphasis: [
      { slug: "basement-finishing", why: "Family space for family houses." },
      { slug: "deck-building", why: "Composite decks built for two decades of cookouts." },
      { slug: "bathroom-remodeling", why: "Busy household bathrooms, rebuilt to take the traffic." },
    ],
    faqs: [
      {
        q: "Do you handle permits in Elizabethtown and Mount Joy townships?",
        a: "Yes. We work with the local code offices regularly and handle the application, drawings and inspections as part of the job.",
      },
      {
        q: "Can a basement become a guest suite with a bathroom?",
        a: "Usually yes, if ceiling height and egress can meet code. We check both at the estimate and tell you plainly what is possible before you start planning furniture.",
      },
    ],
  },
  {
    slug: "west-chester-pa",
    name: "West Chester",
    county: "Chester County",
    driveTime: "50 minutes from our shop",
    metaTitle: "Remodeling Contractor in West Chester PA",
    metaDescription:
      "Remodeling contractor serving West Chester PA. High end bathroom remodels, kitchens, trim carpentry and exterior work for borough and township homes in Chester County.",
    hero: "walk-in-shower-glass-slider-marble-pa",
    intro: [
      "West Chester might have the best looking downtown in Chester County, and its houses keep pace: Greek Revival and Victorian homes in the borough, stone colonials in the townships, and newer construction that sells fast and renovates faster.",
      "Work here comes with standards. Borough projects can involve historic review, and homeowners expect finish quality that survives a close look. That suits us. Our [bathroom remodels](/services/bathroom-remodeling) in Chester County lean toward marble, frameless glass and heated floors, our [trim work](/services/interior-doors-trim) toward paneled walls and built ins that look original to the house.",
      "Yes, we drive 50 minutes for West Chester projects, and no, you will not feel it in the schedule. We batch our Chester County work so crews are in the area all week, not commuting per task.",
    ],
    emphasis: [
      { slug: "bathroom-remodeling", why: "Chester County finish level: marble, glass, heated floors." },
      { slug: "interior-doors-trim", why: "Panel molding and built ins for homes with history." },
      { slug: "kitchen-remodeling", why: "Kitchens brought up to the standard of the street." },
    ],
    faqs: [
      {
        q: "Is West Chester inside your normal service area?",
        a: "Yes. Chester County is one of our two primary markets alongside Lancaster County. We schedule full projects in West Chester, Downingtown, Coatesville and the surrounding townships every month.",
      },
      {
        q: "Do you handle historic district requirements in the borough?",
        a: "Interior work rarely triggers review. For exterior changes in the historic district we prepare the materials the borough wants to see and build to what gets approved.",
      },
    ],
  },
  {
    slug: "downingtown-pa",
    name: "Downingtown",
    county: "Chester County",
    driveTime: "40 minutes from our shop",
    metaTitle: "Remodeling Contractor in Downingtown PA",
    metaDescription:
      "Remodeling contractor serving Downingtown PA. Bathroom remodels, basement finishing, kitchens and decks for Chester County families. Licensed and insured, free estimates.",
    hero: "kitchen-remodel-quartz-farmhouse-sink-pa",
    intro: [
      "Downingtown draws families for the schools and keeps them for everything else. The housing runs from Victorian homes near the borough center to the big waves of 1990s and 2000s construction in the townships, which are now exactly the right age for their first serious renovations.",
      "That is most of our Downingtown work: builder grade bathrooms from 2003 [rebuilt properly](/services/bathroom-remodeling), oak trimmed kitchens [brought into this decade](/services/kitchen-remodeling), unfinished basements [becoming the playroom](/services/basement-finishing), and backyards finally getting [the deck](/services/deck-building) the builder never included.",
      "Near the Brandywine, we pay attention to moisture before finishing any lower level. Downingtown residents know why. Our basement process starts with the wet questions, not the paint colors.",
    ],
    emphasis: [
      { slug: "basement-finishing", why: "Moisture checked first, then family space for the school year crowd." },
      { slug: "bathroom-remodeling", why: "Builder grade baths from the 2000s, rebuilt to actually last." },
      { slug: "deck-building", why: "Composite decks for township backyards." },
    ],
    faqs: [
      {
        q: "My house was built in 2001. Why does the bathroom already need remodeling?",
        a: "Because it was built to a price in 2001. Acrylic pans, cultured marble tops and builder grade fans have a 20 year clock. The good news: the framing and plumbing behind them is usually fine, which keeps the rebuild efficient.",
      },
      {
        q: "Do you check basements for flooding history?",
        a: "Always, and especially near the Brandywine. We look for stains, efflorescence and grading problems, and we will not quote finishes over a moisture problem we have not addressed.",
      },
    ],
  },
  {
    slug: "coatesville-pa",
    name: "Coatesville",
    county: "Chester County",
    driveTime: "35 minutes from our shop",
    metaTitle: "Remodeling Contractor in Coatesville PA",
    metaDescription:
      "Remodeling contractor serving Coatesville PA. Rowhome renovation, bathroom remodels, drywall repair, porch rebuilds and door installation in western Chester County.",
    hero: "brick-porch-black-metal-railings-pa",
    intro: [
      "Coatesville built the steel that built America, and the city's brick rowhomes and twins were built to the same standard: strong bones, honest materials, and a century of service so far. Western Chester County's most affordable housing is here, and smart owners are investing in it.",
      "We handle the projects that bring these houses back: [bathroom rebuilds](/services/bathroom-remodeling), [plaster and drywall repair](/services/drywall-installation-repair), [porch and step restoration](/services/porch-deck-refinishing) and [new entry and storm doors](/services/window-door-installation). The black metal porch railings in our gallery are the kind of upgrade that changes a whole facade for modest money.",
      "From our shop it is 35 minutes down Route 82. We serve the city, Valley Township, South Coatesville and out toward Parkesburg and Honey Brook.",
    ],
    emphasis: [
      { slug: "porch-deck-refinishing", why: "Porches, steps and railings, the face of every rowhome block." },
      { slug: "bathroom-remodeling", why: "Full rebuilds in houses with great bones." },
      { slug: "drywall-installation-repair", why: "Plaster walls made flat and paint ready again." },
    ],
    faqs: [
      {
        q: "Do you take on investment property renovations in Coatesville?",
        a: "Yes. We work with owner occupants and local landlords both, and we quote with the same numbers for each. For rentals we favor durable mid grade materials that survive tenants and keep inspectors happy.",
      },
      {
        q: "Can you replace a front porch railing to meet code?",
        a: "Yes. Old railings are often too low or too loose to pass. We install metal or wood systems at proper height and spacing, anchored into structure rather than paint.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
