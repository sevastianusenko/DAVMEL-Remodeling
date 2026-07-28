// Blog content. Paragraphs support [text](/link) and **bold** mini markdown.
import type { Faq } from "./services";

export type PostSection = { h2: string; ps: string[]; list?: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  hero: string;
  intro: string[];
  sections: PostSection[];
  faqs?: Faq[];
};

export const POSTS: Post[] = [
  {
    slug: "bathroom-remodel-cost-lancaster-pa",
    title: "How Much Does a Bathroom Remodel Cost in Lancaster County? (2026 Numbers)",
    date: "2026-07-20",
    category: "Pricing",
    description:
      "Real 2026 bathroom remodel prices for Lancaster County PA, from tub to shower conversions to full primary baths. What drives the number up and where you can save.",
    hero: "bathroom-remodel-marble-tile-lancaster-pa",
    intro: [
      "Ask five contractors what a bathroom costs and you get four refusals to answer and one number so vague it rounds to a shrug. Here are our actual 2026 ranges for Lancaster County, and what pushes a project to either end.",
    ],
    sections: [
      {
        h2: "The short answer",
        ps: ["For a full remodel of a standard 5 by 8 hall bathroom in Lancaster County, most homeowners spend **$12,000 to $22,000** in 2026. Here is the wider menu:"],
        list: [
          "Tub to shower conversion: $7,000 to $14,000",
          "Hall bathroom, full gut and rebuild: $12,000 to $22,000",
          "Primary bathroom, full remodel: $20,000 to $40,000 and up",
          "Tile shower rebuild only: $6,000 to $12,000",
          "Cosmetic refresh (vanity, toilet, paint, floor): $4,000 to $8,000",
        ],
      },
      {
        h2: "What actually drives the price",
        ps: [
          "**Moving plumbing.** Keeping the toilet, sink and shower where they are saves thousands. Moving a drain line in a slab or between floors is real money.",
          "**Tile choices.** Labor to set a $4 porcelain tile and a $30 marble mosaic is similar, but the material spread across walls and floor adds up fast, and natural stone takes more prep and sealing.",
          "**What we find during demo.** In Lancaster County housing, older than 1970 usually means at least one surprise: rotted subfloor around the toilet, corroded galvanized supply lines, or framing someone improvised in 1985. We quote known conditions honestly and price surprises in writing when they appear.",
          "**Fixtures.** A $300 vanity and a $3,000 vanity both need the same careful install. The difference is pure product cost, which means it is fully in your control.",
        ],
      },
      {
        h2: "Where to save and where not to",
        ps: [
          "Save on: fixture brands (mid tier works), tile size (larger format means less labor), and keeping the layout.",
          "Never save on: **waterproofing**, ventilation, or the subfloor. Nobody sees these three, and they decide whether your remodel lasts 20 years or 5. A cheap shower is the most expensive kind.",
        ],
      },
      {
        h2: "Why prices vary between contractors",
        ps: [
          "A quote thousands below the others usually means one of three things: no insurance, no waterproofing system, or a schedule that treats your job as filler. Ask every bidder the same three questions: are you registered with the PA Attorney General as a home improvement contractor, what waterproofing system goes in the shower, and who exactly does the tile work. The answers sort the field quickly.",
          "Our number comes with a written scope, a schedule, our [PA registration you can verify online](/blog/verify-pa-contractor-license), and photos of [bathrooms we have actually built](/services/bathroom-remodeling).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a bathroom remodel worth it in Lancaster County?",
        a: "Bathroom remodels consistently return 60 to 70 percent of cost at resale in our market, and 100 percent of the daily quality of life while you live there. The mid range remodel is the sweet spot for value.",
      },
      {
        q: "Can I remodel a bathroom for $5,000?",
        a: "A full remodel, no. A meaningful refresh, yes: new vanity, toilet, lighting, paint and flooring can land near $5,000 if the tub and tile stay. It is a legitimate option and we quote it honestly when the bones are good.",
      },
    ],
  },
  {
    slug: "remodeling-permits-lancaster-county",
    title: "Do You Need a Permit to Remodel in Lancaster County? A Straight Answer",
    date: "2026-07-13",
    category: "Guides",
    description:
      "Which remodeling projects need a permit in Lancaster County PA, which do not, and why the answer changes by township. From a contractor who files them weekly.",
    hero: "basement-remodel-framing-spray-foam-pa",
    intro: [
      "Permit questions have a reputation for boring answers, so here is the interesting truth: in Lancaster County the answer depends on your municipality, and there are sixty of them. Same project, different township, different rules. Here is the map of how it actually works.",
    ],
    sections: [
      {
        h2: "Projects that almost always need a permit",
        ps: ["Across nearly every Lancaster County municipality, expect a permit for:"],
        list: [
          "Basement finishing (framing, electrical, often plumbing)",
          "Structural changes: removing walls, new openings, beams",
          "Decks attached to the house or more than 30 inches above grade",
          "Moving plumbing or adding new circuits",
          "Egress window installation",
          "Additions of any size",
        ],
      },
      {
        h2: "Projects that usually do not",
        ps: ["Most municipalities treat these as repair and maintenance:"],
        list: [
          "Replacing fixtures in the same location (toilet, vanity, tub)",
          "Flooring, painting, trim and interior doors",
          "Drywall repair and replacement in the same walls",
          "Replacement windows in existing openings (varies, some townships want a permit)",
          "Porch refinishing and step repairs that do not change structure",
        ],
      },
      {
        h2: "Why your township is the real authority",
        ps: [
          "Pennsylvania adopted the Uniform Construction Code statewide, but each municipality decides how to administer it. Some run their own code office, many hire third party agencies, and thresholds differ. A deck that sails through in one township needs drawings in the next one over.",
          "This is why we do not guess. When your project might need a permit, we call your specific code office, confirm requirements, and file it. It is part of the job, not an extra.",
        ],
      },
      {
        h2: "What happens if you skip the permit",
        ps: [
          "Three risks, rising in order of pain. The stop work order and double fees when a neighbor mentions your dumpster. The insurance claim denied because the finished basement was never inspected. And the home sale where the buyer's inspector asks for permits you cannot produce, turning your remodel into a negotiating discount.",
          "Permits in Lancaster County typically cost a few hundred dollars on residential remodels. As insurance against all three scenarios, it is the cheapest coverage you will ever buy. We [handle the process](/services/interior-remodeling) on every project that needs it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do permits take in Lancaster County?",
        a: "Simple residential permits often issue within one to two weeks. Structural projects with drawings can take three to four. We file immediately after contract so review time overlaps with material lead times instead of delaying the start.",
      },
      {
        q: "Who is responsible for pulling the permit, me or the contractor?",
        a: "The contractor performing the work should pull it under their registration. Be careful with anyone who asks you to pull an owner permit for their work. That usually means they cannot or will not put their name on the job.",
      },
    ],
  },
  {
    slug: "verify-pa-contractor-license",
    title: "How to Verify a PA Contractor in 2 Minutes (Before You Hand Over a Deposit)",
    date: "2026-07-06",
    category: "Guides",
    description:
      "Pennsylvania HIC registration, insurance and the free lookup tool: how to check any home improvement contractor in PA before signing, in about two minutes.",
    hero: "door-opening-flashing-zip-tape-pa",
    intro: [
      "Pennsylvania makes checking a contractor genuinely easy, and almost nobody does it. Two minutes on a state website beats two months of regret. Here is the process, using us as the example.",
    ],
    sections: [
      {
        h2: "Step 1: Ask for their HIC number",
        ps: [
          "Any contractor doing more than $5,000 of home improvement work per year in Pennsylvania must register with the Attorney General as a Home Improvement Contractor. Registration comes with a number in the format PA followed by digits. Ours is **PA214721**, and it lives in the footer of every page on this site.",
          "A contractor who hesitates to give you this number has answered your real question already.",
        ],
      },
      {
        h2: "Step 2: Look it up",
        ps: [
          "Go to the Attorney General's HIC search at hicsearch.attorneygeneral.gov and enter the number or business name. You will see the registration status, the business address and whether the registration is current. Expired registration is a yellow flag worth asking about. No registration at all for a company quoting you a $20,000 bathroom is a red one.",
        ],
      },
      {
        h2: "Step 3: Ask for the insurance certificate",
        ps: [
          "Registration requires liability insurance, but limits and currency vary. Ask for a certificate of insurance naming you as certificate holder for the project. Any insured contractor can get this from their agent in a day, free. We send ours with the contract before anyone asks.",
        ],
      },
      {
        h2: "What PA law says about your contract and deposit",
        ps: [
          "The Home Improvement Consumer Protection Act gives you specific rights. Contracts over $500 must be written and include the registration number, total price and approximate start and completion dates. For most projects, deposits cannot exceed one third of the contract price except to cover special ordered materials. And you have a three business day right to cancel after signing.",
          "A contractor who follows these rules by default is showing you how the whole project will go. One who wants half down in cash with no paperwork is also showing you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does PA HIC registration mean the state tested their skills?",
        a: "No. Registration verifies identity and insurance, not craftsmanship. It is the floor, not the ceiling. For skill, look at photos of real work, talk to past clients and see how they answer technical questions about your project.",
      },
      {
        q: "What deposit is normal for a remodeling project in PA?",
        a: "One third at signing is the legal cap for most projects and a common industry standard, with the balance staged at milestones. Material heavy jobs can legitimately need more up front for special orders, and the law accounts for that when it is documented.",
      },
    ],
  },
  {
    slug: "basement-finishing-cost-pa",
    title: "Basement Finishing Cost in PA: What $35 to $75 per Square Foot Actually Buys",
    date: "2026-06-29",
    category: "Pricing",
    description:
      "Basement finishing costs in Pennsylvania explained per square foot: basic, full and bathroom added builds, plus the moisture question to answer before spending anything.",
    hero: "wall-framing-plumbing-rough-in-pa",
    intro: [
      "Basement finishing is priced by the square foot, which makes it sound simple right up until the quotes arrive spanning a range of three. Here is what the numbers mean in Pennsylvania in 2026, and the one question to settle before any of them matter.",
    ],
    sections: [
      {
        h2: "The ranges, decoded",
        ps: ["Three tiers cover most Pennsylvania basement projects:"],
        list: [
          "$35 to $55 per sq ft: one open finished room. Framing, insulation, drywall, LVP flooring, lighting, paint.",
          "$50 to $75 per sq ft: full build out with separate rooms, doors, closets and trim.",
          "Add $15,000 to $25,000: a full bathroom, wet bar rough in or kitchenette.",
        ],
      },
      {
        h2: "Answer the water question first",
        ps: [
          "Every basement plan starts with the same question: is it dry? Not dry in July. Dry in March, after the snow melt, during the week of rain. Look for white mineral bloom on the walls, rust on furnace feet, and that smell you already know.",
          "If there is moisture, fix causes before finishes: grading, gutters, downspout extensions first, interior drainage and sump second. Finishing over a water problem does not hide it. It marinates it. We check moisture at every [basement estimate](/services/basement-finishing) before quoting a single stud.",
        ],
      },
      {
        h2: "Where the money goes",
        ps: [
          "Framing and drywall are the visible spend, but three quieter items shape the budget. **Ceiling height** around ducts decides between drywall ceilings, drop grids and creative soffits. **Egress**: a bedroom requires an escape window, and cutting one into a foundation with a well runs $4,000 to $8,000. **Mechanicals**: relocating a water heater or adding heating runs to the new rooms is real money that shows up in honest quotes and hides in the other kind.",
        ],
      },
      {
        h2: "Is it worth it?",
        ps: [
          "A finished basement is the cheapest livable square footage you can add, typically a third the cost per foot of an addition. Appraisers in our market credit it at half to seventy percent of above grade value, and families credit it at one hundred percent of the winter. If your house works except for space, finish down before building out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need egress windows for any finished basement in PA?",
        a: "Only sleeping rooms strictly require an egress opening, but at least one emergency escape from the basement is required when finishing creates habitable space. Codes are administered by your municipality, and we confirm the specific requirement as part of the permit.",
      },
      {
        q: "How long does basement finishing take?",
        a: "A typical 600 to 800 square foot project runs four to six weeks including inspections. Adding a bathroom adds roughly two weeks.",
      },
    ],
  },
  {
    slug: "one-contractor-vs-subcontractors",
    title: "One Contractor vs. a Parade of Subs: What Turnkey Actually Saves You",
    date: "2026-06-22",
    category: "Advice",
    description:
      "Managing separate trades yourself versus hiring one turnkey remodeling contractor: the real math on time, money and blame, from a crew that does it all in house.",
    hero: "open-concept-living-remodel-lancaster-pa",
    intro: [
      "You can absolutely act as your own general contractor. People run marathons too. The question is whether the savings survive contact with reality. Here is the honest comparison, from a company whose whole model is being the one call.",
    ],
    sections: [
      {
        h2: "The theory of hiring trades yourself",
        ps: [
          "Hire a framer, a drywaller, a tile setter and a painter separately and you skip the general contractor's margin. On paper that is 10 to 20 percent of the project. The catch is what you buy with that margin when you pay it: sequencing, accountability and someone whose week is ruined by problems instead of yours.",
        ],
      },
      {
        h2: "Where self managing goes sideways",
        ps: [
          "**The schedule gap.** Your drywaller finishes Tuesday. Your tile setter is available in three weeks. Multiply by five trades and a three week bathroom becomes a three month one. Trades prioritize the general contractors who feed them steady work, and a one time homeowner sits at the back of that line.",
          "**The blame triangle.** The tile cracked. The tile setter blames the framer's bouncy floor. The framer blames the plans. You cannot prove anyone wrong, and nobody owes you a fix. With one contractor, warranty conversations are short: it is our wall, we fix it.",
          "**The invisible standards.** Each trade optimizes for their own step. A framer who will never see the tile does not care about an eighth inch of bow in a shower wall. The tile setter inherits it. When one crew owns the whole chain, the framing is done for the tile from the start.",
        ],
      },
      {
        h2: "When self managing does make sense",
        ps: [
          "Single trade projects: one room of drywall, a floor, a paint job. No sequencing means no coordination cost, so hire the specialist directly. That includes hiring [us for standalone drywall or tile work](/services/drywall-installation-repair). The turnkey math starts winning when three or more trades have to land in order.",
        ],
      },
      {
        h2: "The actual math",
        ps: [
          "Take a $15,000 bathroom. Self managed, maybe you save $2,000 in coordination margin. Against that: weeks of your evenings getting quotes, schedule gaps that stretch the timeline, mistakes at trade handoffs that you own, and no single warranty. We built [our whole company](/about) on the bet that most people, seeing the full ledger, would rather make one call. So far the bet is holding.",
        ],
      },
    ],
  },
  {
    slug: "drywall-repair-or-replace",
    title: "Drywall and Plaster: Repair or Replace? How We Actually Decide",
    date: "2026-06-15",
    category: "Advice",
    description:
      "Cracked plaster and damaged drywall: when a repair and skim coat saves the wall, and when replacement is the honest call. The decision process a contractor really uses.",
    hero: "drywall-skim-coat-hallway-pa",
    intro: [
      "Every older home around Lancaster and Reading eventually asks the same question: are these walls worth saving? The answer decides thousands of dollars, so it deserves better than a guess. Here is the actual decision process we use on site.",
    ],
    sections: [
      {
        h2: "The tap test and what it tells us",
        ps: [
          "Plaster walls are three coats over wood lath, held on by keys of plaster squeezed between the boards. Tap across the wall: a solid thunk means the keys are holding, a hollow rattle means the plaster has separated and is hanging on by habit. Small hollow areas can be reattached with plaster washers or adhesive. Whole hollow walls are past saving.",
        ],
      },
      {
        h2: "When repair wins",
        ps: ["Repair and skim coating is the right call when most of the field is sound:"],
        list: [
          "Cracks that follow settlement lines but the wall is tight",
          "A few holes or damaged sections in otherwise solid walls",
          "Ugly texture or wallpaper damage over good plaster",
          "You want to keep original trim undisturbed, which demolition rarely allows",
        ],
      },
      {
        h2: "When replacement is honest",
        ps: ["We recommend tearing out and hanging new drywall when:"],
        list: [
          "Large areas fail the tap test or bulge visibly",
          "Water damage has softened the plaster or rotted the lath",
          "Walls are opening anyway for wiring, plumbing or insulation",
          "Ceilings sag: overhead plaster failure is a safety issue, not a cosmetic one",
        ],
      },
      {
        h2: "The middle option nobody mentions",
        ps: [
          "Overlaying sound but ugly plaster with thin drywall keeps demolition mess near zero and delivers flat new walls. It costs less than a gut, adds only a quarter inch and works beautifully on stable but tired walls. The tradeoffs are slightly deeper window returns and refit trim, which a careful crew handles as part of the job. Ask about it before agreeing to a full tear out. We [do all three approaches](/services/drywall-installation-repair) and quote the one the wall actually needs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does my plaster crack in the same place every year?",
        a: "Seasonal movement. The house expands and contracts with humidity, and the crack is the expansion joint the builders never installed. Repairs that bridge the crack with mesh and setting compound survive the cycle. Plain spackle does not.",
      },
      {
        q: "Is plaster better than drywall?",
        a: "Old plaster is harder, quieter and part of your home's character. New drywall is flatter, cheaper and easier to repair. When plaster is sound we save it. When it is failing, replacement is not a loss, it is maintenance a century deferred.",
      },
    ],
  },
  {
    slug: "deck-refinishing-vs-replacement",
    title: "Deck Looking Rough? Refinish, Resurface or Rebuild: The Decision Guide",
    date: "2026-06-08",
    category: "Advice",
    description:
      "Weathered deck or porch: how to tell whether it needs stain, new boards or full replacement. A contractor's inspection checklist with honest costs for each path.",
    hero: "porch-steps-refinishing-before-after-pa",
    intro: [
      "A gray, splintered deck looks like a disaster and is often a weekend patient. A shiny deck on a rotten frame looks fine and is the actual emergency. The surface tells you almost nothing. Here is the inspection that tells you everything, and what each verdict costs.",
    ],
    sections: [
      {
        h2: "The five minute inspection",
        ps: ["Grab a screwdriver and check these five spots:"],
        list: [
          "Ledger board, where deck meets house: probe for soft wood, look for flashing. This is where decks fail dangerously.",
          "Post bases: probe at ground contact. Posts rot from the bottom up.",
          "Joists, from below: dark streaks and soft spots, especially under board gaps.",
          "Stair stringers: the hardest working, wettest wood on the deck.",
          "Railing posts: grab and shake. Movement means failed connections.",
        ],
      },
      {
        h2: "Verdict one: sound frame, tired surface. Refinish.",
        ps: [
          "If the screwdriver finds solid wood everywhere, your deck needs labor, not lumber. Replace the worst boards, sand everything to clean wood, and finish with a penetrating stain on a dry week. Cost for a typical porch or small deck: **$900 to $2,500**. The before and after photos in [our refinishing gallery](/services/porch-deck-refinishing) are exactly this treatment.",
        ],
      },
      {
        h2: "Verdict two: sound frame, dead boards. Resurface.",
        ps: [
          "When boards and rails are past saving but the structure passes inspection, keep the frame and replace the surface, ideally in composite so this is the last time. Resurfacing runs **$25 to $45 per square foot**, roughly half the cost of full replacement. It is the best value move in deck work and the one most often skipped, because replacing everything is an easier sell.",
        ],
      },
      {
        h2: "Verdict three: the frame is going. Rebuild.",
        ps: [
          "Soft ledger, rotted posts or pulling connections mean the structure is done, and money spent on the surface is decoration on a countdown. A [new deck built correctly](/services/deck-building), with footings below frost line and a flashed, bolted ledger, runs $40 to $95 per square foot depending on materials, and then stays boring for decades. When we deliver this verdict, we show you the rot on camera, not just on the invoice.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should a wood deck be restained in Pennsylvania?",
        a: "Horizontal surfaces every two to four years, verticals roughly double that. Penetrating stains age gracefully and recoat easily. Film forming products look great for two years and then peel, and stripping them is the most miserable job in exterior work.",
      },
      {
        q: "Can I put composite boards on my old wood frame?",
        a: "Often yes, if the frame passes inspection and joist spacing meets the composite manufacturer's spec, usually 16 inches or tighter. We verify both before quoting a resurface.",
      },
    ],
  },
  {
    slug: "hiring-remodeling-contractor-red-flags",
    title: "7 Red Flags When Hiring a Remodeling Contractor in PA (From Inside the Trade)",
    date: "2026-06-01",
    category: "Advice",
    description:
      "Seven warning signs a Pennsylvania remodeling contractor will be trouble, from vague quotes to cash deposits, and the quick checks that protect you before signing.",
    hero: "blue-front-door-installation-pa",
    intro: [
      "We have repaired a lot of other people's remodels, which means we have seen how those stories start. The warning signs are surprisingly consistent. Here are seven, with the quick check that exposes each one.",
    ],
    sections: [
      {
        h2: "The seven flags",
        ps: [],
        list: [
          "**No PA registration number.** Required by law for real contractors. Check it free in two minutes at the Attorney General's HIC search. Our guide: [how to verify a PA contractor](/blog/verify-pa-contractor-license).",
          "**A one line quote.** Bathroom remodel: $14,000 is not a scope, it is a lottery ticket. A real quote lists what is included, what is excluded and what happens when conditions change.",
          "**Big cash deposit.** PA law caps most deposits at one third. Requests for half down, in cash, tell you about their cash flow and their plans for your Tuesday calls.",
          "**No proof of insurance.** Ask for a certificate naming you. An insured contractor produces one in a day. An uninsured one produces excuses on the same schedule.",
          "**Pressure to sign today.** The discount that expires tonight exists to prevent exactly one thing: you comparing quotes. Quality work sells on evidence, not urgency.",
          "**No address, no photos of real work.** Stock photos and a phone number are not a company. Ask to see actual projects, and ideally talk to the people who lived through them.",
          "**Vague timeline.** We will fit you in is a sentence that costs homeowners more than any line item. Start window and duration belong in the contract. PA law agrees.",
        ],
      },
      {
        h2: "The pattern behind all seven",
        ps: [
          "Every flag is the same flag: avoiding accountability before the job starts. Paperwork, registration, insurance, specifics and references all create obligations a contractor has to meet. The ones who dodge them in the sales phase are telling you exactly how the build phase goes.",
          "The inverse is also true, and it is the whole reason we publish our [license number](/about), our [prices](/blog/bathroom-remodel-cost-lancaster-pa) and our [real project photos](/projects). Accountability up front is the cheapest marketing there is. It just requires intending to deliver.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
