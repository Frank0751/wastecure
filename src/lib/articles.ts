// Blog articles. Photos are WasteCure's own; sources are listed per article.

import { PHOTOS } from "@/lib/photos";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tips" | "News" | "Education" | "Community";
  readTime: string;
  date: string;
  author: string;
  /** Cloudinary photo id from PHOTOS. */
  photo: string;
  body: { heading?: string; text: string }[];
  sources: { title: string; url: string; publisher: string }[];
};

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const ARTICLES: Article[] = [
  {
    slug: "how-to-sort-plastic-at-home-ghana",
    title: "How to sort your plastic at home: a practical guide for Ghana",
    excerpt:
      "Not all plastic is the same. Learn the difference between PET, HDPE and LDPE, and how to sort them so they actually get recycled.",
    category: "Tips",
    readTime: "5 min read",
    date: "2024-06-15",
    author: "WasteCure Team",
    photo: PHOTOS.wheelbarrow,
    body: [
      {
        text: "Plastic waste is one of the biggest environmental challenges in Ghana. A 2023 UNDP report puts Ghana's plastic waste at about 1.1 million tonnes a year, of which only around 5% is recycled. The good news is that a little sorting at home makes a huge difference: properly sorted plastic is far more likely to be recycled than mixed waste.",
      },
      {
        heading: "The seven plastic types",
        text: "Plastics are categorised by resin identification codes (RIC) from 1 to 7. The three most common types you will encounter at home are PET (code 1, used for water and drink bottles), HDPE (code 2, used for milk jugs and detergent bottles), and LDPE (code 4, used for plastic bags and film). Each type is recycled differently, so sorting them matters. The code is usually stamped on the bottom of the container inside a triangle of arrows.",
      },
      {
        heading: "Setting up a home sorting system",
        text: "Start with three simple bins or sacks at home: one for PET bottles, one for HDPE containers, and one for soft plastics (LDPE). Rinse out bottles before storing them. Clean plastic is worth more to recyclers and avoids attracting pests.",
      },
      {
        heading: "What happens after collection",
        text: "Once your sacks are full, bring them to a WasteCure collection point, or request a pickup. The plastic is then sorted further, baled, and sent to recycling off-takers who process it into new products. This closed-loop system is what keeps plastic out of drains, gutters and landfills.",
      },
      {
        heading: "Common mistakes to avoid",
        text: "Do not mix plastic types in the same bag if you can help it. Do not leave caps on bottles unless they are the same plastic type. Do not recycle plastic that has food residue; rinse it first. And do not assume that all plastic with a recycling symbol is accepted. Check with your local collector about which types they take.",
      },
    ],
    sources: [
      {
        title: "Plastic waste in Ghana: Accelerator Lab experiment report (2023)",
        url: "https://www.undp.org/sites/g/files/zskgke326/files/2023-11/undp_ghana_acclab_plastic_experiment_2023_report.pdf",
        publisher: "UNDP Ghana",
      },
      {
        title: "Resin identification codes (ASTM D7611)",
        url: "https://blog.ansi.org/ansi/resin-identification-codes-rics-astm-d7611/",
        publisher: "ANSI",
      },
      {
        title: "Revised National Plastics Management Policy",
        url: "https://mesti.gov.gh/documents/revised-national-plastics-management-policy.pdf",
        publisher: "Ministry of Environment, Science, Technology and Innovation, Ghana",
      },
    ],
  },
  {
    slug: "why-burning-plastic-harms-health",
    title: "Why burning plastic is not the answer: health and environmental impacts",
    excerpt:
      "Many households burn plastic to get rid of it. Here is what that smoke does to your health and the environment, and what to do instead.",
    category: "Education",
    readTime: "4 min read",
    date: "2024-05-28",
    author: "WasteCure Team",
    photo: PHOTOS.duskSweep,
    body: [
      {
        text: "Burning plastic waste is a common practice in many Ghanaian communities, particularly in areas without formal collection services. But it comes with serious hidden costs. When plastic burns, it releases toxic chemicals including dioxins, furans, polychlorinated biphenyls (PCBs), and heavy metals into the air you breathe.",
      },
      {
        heading: "Health impacts",
        text: "Peer-reviewed research links exposure to smoke from openly burned plastic waste to respiratory illness and other long-term health harms. Children, who are often nearby when waste is burned, are especially vulnerable. A 2022 review in The Lancet Planetary Health estimated that pollution causes about nine million premature deaths a year worldwide, most of them from air pollution.",
      },
      {
        heading: "Environmental damage",
        text: "Burning plastic also harms the environment. The toxic chemicals released settle into soil and water, contaminating food sources. Black carbon, a byproduct of incomplete combustion, is a powerful climate forcer that contributes to global warming. The Ghana Environmental Protection Agency has identified open burning of waste as a significant source of air pollution in urban areas.",
      },
      {
        heading: "The alternative",
        text: "The alternative is simple: collect your plastic and bring it to a designated collection point. WasteCure provides a responsible land space for plastic waste in Kwabre East. No burning, no dumping, no harm to your family. If your community currently burns waste, talk to us about setting up a regular collection arrangement.",
      },
    ],
    sources: [
      {
        title: "Open burning (plastics toolkit glossary)",
        url: "https://leap.unep.org/en/knowledge/toolkits/plastic/glossary/open-burning",
        publisher: "UNEP",
      },
      {
        title: "Open burning of plastic waste: health effects review",
        url: "https://annalsofglobalhealth.org/articles/10.5334/aogh.4232",
        publisher: "Annals of Global Health",
      },
      {
        title: "Pollution and health: a progress update (2022)",
        url: "https://www.unccd.int/resources/unccd-library/lancet-planetary-health-pollution-and-health-progress-update",
        publisher: "The Lancet Planetary Health",
      },
      {
        title: "Refrain from open burning of waste for quality air",
        url: "https://gna.org.gh/2023/09/refrain-from-open-burning-of-waste-for-quality-air/",
        publisher: "Ghana News Agency",
      },
    ],
  },
  {
    slug: "ghana-plastic-pollution-facts",
    title: "Plastic pollution in Ghana: 7 facts you should know",
    excerpt:
      "How much plastic does Ghana produce? Where does it end up? We break down the numbers behind the country's plastic waste challenge.",
    category: "Education",
    readTime: "6 min read",
    date: "2024-05-10",
    author: "WasteCure Team",
    photo: PHOTOS.skipLoading,
    body: [
      {
        text: "Plastic pollution is one of Ghana's most visible environmental problems. From choked gutters in Accra to plastic-lined beaches in Cape Coast, the scale of the challenge is clear. But behind the visible waste are some important numbers that help explain why action is so urgent.",
      },
      {
        heading: "1. Ghana generates about 1.1 million tonnes of plastic waste a year",
        text: "A 2023 UNDP report estimates Ghana's plastic waste at about 1.1 million tonnes a year. Only around 5% of it is recycled. The remainder ends up in landfills, drains, waterways, or is burned.",
      },
      {
        heading: "2. Only 5% of plastic is recycled",
        text: "That figure comes from the same UNDP report. The vast majority of plastic waste is not collected or processed, despite the existence of a growing recycling industry.",
      },
      {
        heading: "3. Ghana's rivers carry thousands of tonnes of plastic to the sea",
        text: "A 2021 study in Science Advances modelled how much plastic rivers carry into the ocean. Its data puts Ghana at roughly 4,000 tonnes a year, among the higher figures in Africa.",
      },
      {
        heading: "4. Plastic blocks drains and causes flooding",
        text: "During the rainy season, plastic waste clogs gutters and drainage systems across Ghanaian cities. Officials at the Ghana Meteorological Agency and the National Disaster Management Organisation (NADMO) have repeatedly warned that choked drains worsen flooding in Accra and Kumasi.",
      },
      {
        heading: "5. The economic cost is significant",
        text: "The World Bank's 2020 Country Environmental Analysis put the cost of environmental degradation in Ghana at US$6.3 billion a year, close to 11% of GDP. Air pollution is the largest part of that bill, and poorly managed waste adds to it.",
      },
      {
        heading: "6. Recycling creates jobs",
        text: "Despite the low recycling rate, Ghana's informal waste sector employs thousands of people who collect, sort and sell recyclable materials. Formalising and expanding this sector, as WasteCure is doing in Kwabre East, could create thousands more green jobs.",
      },
      {
        heading: "7. Change is possible",
        text: "Communities across Ghana are taking action. From community clean-ups to recycling enterprises like WasteCure, the momentum is building. Every kilogram of plastic diverted from the environment is a step toward a cleaner Ghana.",
      },
    ],
    sources: [
      {
        title: "Plastic waste in Ghana: Accelerator Lab experiment report (2023)",
        url: "https://www.undp.org/sites/g/files/zskgke326/files/2023-11/undp_ghana_acclab_plastic_experiment_2023_report.pdf",
        publisher: "UNDP Ghana",
      },
      {
        title: "Plastic waste emitted to the ocean (data from Meijer et al., Science Advances, 2021)",
        url: "https://ourworldindata.org/grapher/plastic-waste-emitted-to-the-ocean",
        publisher: "Our World in Data",
      },
      {
        title: "Clear choked drains, widen waterways - Meteo warns",
        url: "https://www.myjoyonline.com/clear-choked-drains-widen-waterways-meteo-warns/",
        publisher: "MyJoyOnline",
      },
      {
        title: "Ghana Country Environmental Analysis (2020)",
        url: "https://openknowledge.worldbank.org/entities/publication/84fe1427-4233-5b67-ace4-d41bf11d652c",
        publisher: "World Bank",
      },
      {
        title: "How data is helping Ghana fight plastic pollution",
        url: "https://www.weforum.org/stories/2023/05/data-benefits-ghana-fight-against-plastic-pollution/",
        publisher: "World Economic Forum",
      },
    ],
  },
  {
    slug: "composting-at-home-ghana-guide",
    title: "Composting at home: turn your food waste into garden gold",
    excerpt:
      "Beyond plastic, organic waste is a huge part of what households throw away. Here is how to start composting in a small space in Ghana.",
    category: "Tips",
    readTime: "5 min read",
    date: "2024-04-20",
    author: "WasteCure Team",
    photo: PHOTOS.skipHeadPan,
    body: [
      {
        text: "Food and garden waste make up a large share of household rubbish in Ghana. According to the World Bank's What a Waste 2.0 report, food and green waste makes up more than half of municipal solid waste in low and middle-income countries. Unlike plastic, this waste does not need to go anywhere. With a simple compost setup, you can turn it into rich compost for your garden or pots.",
      },
      {
        heading: "What you need",
        text: "You do not need much space. A covered bin or pit in a corner of your yard is enough. You can also use a simple pile covered with leaves or cardboard. The key ingredients are: greens (fruit and vegetable peelings, tea bags, coffee grounds, grass clippings) and browns (dry leaves, paper, cardboard, sawdust).",
      },
      {
        heading: "What to add and what to avoid",
        text: "Do add: fruit and vegetable peelings, eggshells, tea bags, coffee grounds, garden trimmings, dry leaves, shredded paper. Do not add: meat, dairy, oily foods, bones, diseased plants, or plastics. These attract pests, create odours, or contaminate the compost.",
      },
      {
        heading: "Maintaining your compost",
        text: "Keep your compost moist but not wet. It should feel like a wrung-out sponge. Turn it every week or two with a stick to let air in. The FAO's guide to on-farm composting describes methods that produce finished compost in two to four months.",
      },
      {
        heading: "Using your compost",
        text: "Finished compost is dark, crumbly and smells like earth. Mix it into garden soil, use it as mulch around plants, or add it to pots. It improves soil structure, retains moisture, and reduces the need for chemical fertilisers. Composting is a simple habit every household can start today alongside sorting recyclables for collection.",
      },
    ],
    sources: [
      {
        title: "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        url: "https://hdl.handle.net/10986/30317",
        publisher: "World Bank",
      },
      {
        title: "On-farm composting methods",
        url: "https://www.fao.org/4/y5104e/y5104e05.htm",
        publisher: "Food and Agriculture Organization (FAO)",
      },
      {
        title: "Composting at home",
        url: "https://www.epa.gov/recycle/composting-home",
        publisher: "US Environmental Protection Agency",
      },
    ],
  },
  {
    slug: "circular-economy-ghana-recycling",
    title: "The circular economy: what it means for Ghana's waste future",
    excerpt:
      "Recycling is just one part of a bigger idea: the circular economy. Here is what it means and why it matters for Ghana.",
    category: "Education",
    readTime: "6 min read",
    date: "2024-03-15",
    author: "WasteCure Team",
    photo: PHOTOS.wheelbarrow,
    body: [
      {
        text: "The circular economy is a simple idea with big implications. Instead of the traditional linear model of take, make, and dispose, a circular economy keeps materials in use for as long as possible, extracts maximum value from them while in use, then recovers and regenerates products at the end of their life. For Ghana, this shift could transform how we handle waste.",
      },
      {
        heading: "The problem with the linear model",
        text: "Ghana's current waste system is largely linear. Raw materials are extracted, products are manufactured, used, and then discarded. Globally, only about 7% of the materials the economy uses are cycled back into use, according to Circle Economy's Circularity Gap Report. The rest becomes waste, much of it plastic that ends up in drains, rivers, and the ocean.",
      },
      {
        heading: "What a circular economy looks like",
        text: "In a circular economy, waste is designed out from the start. Products are made to be reused, repaired, and recycled. Plastic bottles are collected, sorted, and processed into new bottles or other products. Organic waste is composted and returned to the soil. Research by Accenture estimated that moving to a circular economy could unlock $4.5 trillion in economic growth globally by 2030.",
      },
      {
        heading: "Ghana's circular economy opportunity",
        text: "Ghana is well-positioned to benefit from the circular economy transition. The country already has a thriving informal waste sector, with thousands of collectors, sorters, and aggregators. Formalising and scaling this sector, as WasteCure is doing in Kwabre East, could create thousands of green jobs while significantly reducing environmental pollution.",
      },
      {
        heading: "The role of communities",
        text: "The circular economy is not just about technology or policy. It is about people. Households sorting their waste, businesses choosing recyclable packaging, schools teaching children about materials, and communities coming together for clean-ups. Every action contributes to the system. WasteCure is building that system in Kwabre East, one collection at a time.",
      },
    ],
    sources: [
      {
        title: "African Development Bank on the Circularity Gap Report",
        url: "https://www.afdb.org/en/news-and-events/united-nations-environment-assembly-african-development-bank-urges-action-promote-inclusive-production-and-consumption-within-planetary-limits-69057",
        publisher: "African Development Bank",
      },
      {
        title: "The circular economy could unlock $4.5 trillion of economic growth",
        url: "https://newsroom.accenture.com/news/the-circular-economy-could-unlock-4-5-trillion-of-economic-growth-finds-new-book-by-accenture.htm",
        publisher: "Accenture",
      },
      {
        title: "How data is helping Ghana fight plastic pollution",
        url: "https://www.weforum.org/stories/2023/05/data-benefits-ghana-fight-against-plastic-pollution/",
        publisher: "World Economic Forum",
      },
    ],
  },
  {
    slug: "five-recycling-myths-debunked",
    title: "5 myths about recycling in Ghana, debunked",
    excerpt:
      "Does recycling really make a difference? Is it worth the effort? We clear up five common myths about recycling in Ghana.",
    category: "Education",
    readTime: "5 min read",
    date: "2024-02-15",
    author: "WasteCure Team",
    photo: PHOTOS.skipHeadPan,
    body: [
      {
        text: "There are many misconceptions about recycling in Ghana. These myths can discourage people from participating, even when they want to do the right thing. Let us address five of the most common ones.",
      },
      {
        heading: "Myth 1: Recycling does not actually happen in Ghana",
        text: "This is the most common misconception. In reality, properly sorted plastic has real value to recyclers. Ghana has several plastic recycling companies that process PET, HDPE and other plastics into pellets, which are then used to make new products. WasteCure channels collected plastic to these off-takers. The key is sorting: mixed, dirty plastic is hard to recycle; clean, sorted plastic is in demand.",
      },
      {
        heading: "Myth 2: One person's recycling will not matter",
        text: "It does. A single household can divert hundreds of bottles per month. Multiplied across a community, the impact is enormous. Every kilogram counts.",
      },
      {
        heading: "Myth 3: Rinsing plastic is a waste of water",
        text: "A quick rinse with used water is enough. Clean plastic is far more likely to be accepted by recyclers, so this small step makes the whole system work. You do not need to use fresh drinking water; the water from washing dishes or vegetables works fine.",
      },
      {
        heading: "Myth 4: All plastic is the same",
        text: "It is not. PET (code 1), HDPE (code 2), and LDPE (code 4) are processed differently, which is why sorting matters. Mixing them reduces their value and recyclability. This is why WasteCure asks households to sort by type. The resin code is stamped on the bottom of most plastic containers.",
      },
      {
        heading: "Myth 5: Recycling is the only solution",
        text: "Recycling is important, but reducing and reusing come first. The less plastic we use in the first place, the less we need to recycle. The waste hierarchy, as defined by the EU Waste Framework Directive, prioritises prevention, then reuse, then recycling, then recovery, and finally disposal. WasteCure promotes all three: reduce, reuse, recycle.",
      },
    ],
    sources: [
      {
        title: "Resin identification codes (ASTM D7611)",
        url: "https://blog.ansi.org/ansi/resin-identification-codes-rics-astm-d7611/",
        publisher: "ANSI",
      },
      {
        title: "Waste Framework Directive",
        url: "https://environment.ec.europa.eu/topics/waste-and-recycling/waste-framework-directive_en",
        publisher: "European Commission",
      },
    ],
  },
  {
    slug: "wastecure-impact-144-tricycle-loads",
    title: "144 tricycle loads and counting: WasteCure's real impact so far",
    excerpt:
      "Real numbers from real work on the ground - what WasteCure has collected, who it has reached, and what the figures mean for the Afigya Kwabre South district.",
    category: "Community",
    readTime: "4 min read",
    date: "2025-11-10",
    author: "WasteCure Team",
    photo: PHOTOS.group,
    body: [
      {
        text: "It is easy to talk about waste management in the abstract - tonnes, percentages, targets. We would rather show our actual numbers, however modest, because they represent real collection routes, real people, and real communities choosing not to dump or burn their waste.",
      },
      {
        heading: "144 tricycle loads and counting",
        text: "To date, WasteCure has collected about 144 tricycle loads of waste from homes, businesses and public spaces - and the count keeps growing every week. Each load represents waste that did not end up blocking a drain, polluting a water source, or being burned in someone's backyard.",
      },
      {
        heading: "One district, five communities, twenty people",
        text: "Our current coverage is the Afigya Kwabre South district, reaching about five communities along the Afrancho to Kodie stretch. About 20 people work on our clean-up crews, a small but committed team.",
      },
      {
        heading: "Why we publish these numbers",
        text: "Generic claims do not build trust. We would rather tell you exactly where we are today - one district, a handful of communities, a small crew - and let the numbers speak for themselves as we grow. If you want to see this work firsthand or partner with us, visit our Get Involved page.",
      },
    ],
    sources: [],
  },
  {
    slug: "wastecure-expands-cleaning-services-ashanti-region",
    title: "Beyond plastic: why WasteCure now offers cleaning services too",
    excerpt:
      "Schools, offices and residential estates across the Ashanti Region need more than waste collection. Here is why we added professional cleaning services to our offering.",
    category: "News",
    readTime: "3 min read",
    date: "2025-12-02",
    author: "WasteCure Team",
    photo: PHOTOS.cleaningCrew,
    body: [
      {
        text: "When we started WasteCure in 2021, our focus was narrow and deliberate: give the Kwabre East Municipality a responsible place to take plastic waste. Four years on, the needs we hear from schools, offices and residential communities have grown beyond collection alone.",
      },
      {
        heading: "What we are adding",
        text: "Alongside waste collection, recyclables sorting and consultancy, WasteCure now offers cleaning services for schools, corporate office spaces, and residence and real estate facilities. It is a natural extension of work we were already doing informally for clients who asked for it.",
      },
      {
        heading: "Why it matters",
        text: "A clean environment and responsible waste management go hand in hand. Schools want tidy classrooms and compounds as much as they want a place to send recyclable waste. Offices and residential estates want both a reliable collection schedule and dependable cleaning support. Offering both under one roof means less coordination for our clients and more consistent standards.",
      },
      {
        heading: "Scaling across the Ashanti Region",
        text: "This expansion also reflects our broader goal: moving from a single-municipality service to a waste management partner across the Ashanti Region. If your school, office or estate needs waste collection, cleaning, or both, get in touch and we will design a plan that fits.",
      },
    ],
    sources: [],
  },
  {
    slug: "why-ghanaian-cities-keep-flooding-waste-connection",
    title: "Why Ghanaian cities keep flooding: the hidden waste connection",
    excerpt:
      "Heavy rain is only half the story. Here is how uncollected waste turns an ordinary downpour into a flood, and what communities can do about it.",
    category: "Education",
    readTime: "5 min read",
    date: "2026-01-15",
    author: "WasteCure Team",
    photo: PHOTOS.skipLoading,
    body: [
      {
        text: "Almost every rainy season, towns and cities across Ghana experience flash flooding - streets turned to rivers, homes and shops damaged, and in the worst cases, lives lost. Heavy rainfall is the trigger, but it is rarely the whole story. In most urban flooding events, blocked drains carrying solid waste are a major contributing factor.",
      },
      {
        heading: "How waste causes flooding",
        text: "Drainage systems in Ghanaian towns are designed to channel rainwater away quickly. When plastic bags, bottles, food waste and other rubbish are dumped into gutters and drains instead of being collected, that water has nowhere to go. The Ghana National Disaster Management Organisation (NADMO) has repeatedly linked recurring floods in Accra, Kumasi and other urban centres to solid waste blocking drainage channels, particularly ahead of the rainy season when debris accumulates faster than it is cleared.",
      },
      {
        heading: "The cost is more than inconvenience",
        text: "Flooding damages homes, destroys goods in markets, disrupts transport, and creates standing water that becomes a breeding ground for mosquitoes and waterborne disease.",
      },
      {
        heading: "What actually reduces the risk",
        text: "The single most effective thing a community can do is keep waste out of drains in the first place - through regular collection, cleared drainage channels, and public awareness about not dumping into gutters. This is exactly why WasteCure runs scheduled collection routes and community clean-up drives across the Ashanti Region: every skip of waste removed from a roadside or drain is water that will actually flow the next time it rains.",
      },
      {
        heading: "What you can do",
        text: "If your street, market or estate has a drain that regularly clogs with rubbish, the fix is rarely more concrete - it is consistent collection. Talk to your assembly about drain clearing schedules, and make sure your own household or business waste goes to a collector rather than a gutter. If you would like a regular collection arrangement for your area, get in touch with our team.",
      },
    ],
    sources: [
      {
        title: "Dumping refuse into drains driving floods in Accra - NADMO",
        url: "https://www.citinewsroom.com/2026/05/dumping-refuse-into-drains-driving-floods-in-accra-nadmo/",
        publisher: "Citi Newsroom",
      },
      {
        title: "Ashanti NADMO begins emergency drain works amid flood fears",
        url: "https://asaaseradio.com/ashanti-nadmo-begins-emergency-drain-works-amid-flood-fears/",
        publisher: "Asaase Radio",
      },
    ],
  },
  {
    slug: "how-often-schedule-cleaning-services-schools-offices-ghana",
    title: "How often should you schedule professional cleaning? A guide for schools and offices",
    excerpt:
      "Daily, weekly, or monthly? Here is a practical framework for deciding how often your school, office or residential estate actually needs professional cleaning.",
    category: "Tips",
    readTime: "4 min read",
    date: "2026-02-10",
    author: "WasteCure Team",
    photo: PHOTOS.broomHandover,
    body: [
      {
        text: "One of the most common questions we get from schools, offices and estate managers is simple: how often do we actually need cleaning? The honest answer is that it depends on foot traffic, building use, and what is at stake if cleanliness slips - but there are useful rules of thumb.",
      },
      {
        heading: "Daily: high-traffic and shared-surface areas",
        text: "Classrooms, office floors, toilets, and reception areas that see continuous use should be cleaned daily. The World Health Organisation advises prioritising high-touch surfaces such as door handles, bathroom surfaces and taps when cleaning shared buildings, and the US CDC recommends cleaning such surfaces at least once a day.",
      },
      {
        heading: "Weekly: deeper cleans and less-trafficked spaces",
        text: "Store rooms, meeting rooms used a few times a week, stairwells, and compound sweeping typically only need a thorough clean once or twice a week. This is also a good cadence for window cleaning, and for compound and car park sweeping in schools and residential estates.",
      },
      {
        heading: "Monthly or scheduled: deep cleans and specialist jobs",
        text: "Carpet shampooing, deep kitchen degreasing, gutter clearing, and post-event cleans are best scheduled monthly or on demand rather than folded into a routine. Real estate and facility managers often find that a monthly deep clean, paired with daily/weekly routine cleaning, keeps costs predictable while avoiding the buildup that leads to expensive one-off remediation later.",
      },
      {
        heading: "Getting the schedule right for your site",
        text: "The right frequency ultimately depends on your specific building, number of occupants, and budget. WasteCure's cleaning service for schools, corporate offices, and residential and real estate facilities starts with a short site walk-through so we can recommend a realistic schedule rather than a one-size-fits-all package. If you manage a school, office or estate in the Ashanti Region, get in touch and we will help you design one.",
      },
    ],
    sources: [
      {
        title: "Cleaning and disinfecting surfaces in non-health-care settings",
        url: "https://www.who.int/news-room/q-a-detail/coronavirus-disease-covid-19-cleaning-and-disinfecting-surfaces-in-non-health-care-settings",
        publisher: "World Health Organization",
      },
      {
        title: "When and how to clean and disinfect a facility",
        url: "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-a-facility.html",
        publisher: "US Centers for Disease Control and Prevention",
      },
    ],
  },
  {
    slug: "waste-management-consultancy-does-your-business-need-one",
    title: "Waste management consultancy: what it is, and does your business need one?",
    excerpt:
      "From waste audits to compliance and cost savings - here is what a waste management consultancy actually does, and the signs your organisation could use one.",
    category: "Education",
    readTime: "5 min read",
    date: "2026-03-05",
    author: "WasteCure Team",
    photo: PHOTOS.crewBriefing,
    body: [
      {
        text: "Most organisations only think about waste management when something goes wrong - an overflowing bin area, a complaint from neighbours, or a surprise cost from an informal collector. A waste management consultancy exists to get ahead of that, by helping institutions design a waste system that actually fits how they operate.",
      },
      {
        heading: "What a waste audit actually involves",
        text: "The starting point for most consultancy engagements is a waste audit: understanding what an organisation throws away, how much, and where it currently goes. This typically means observing bin areas over a period, categorising waste streams (general, recyclable, organic), and identifying where volumes could be reduced or diverted.",
      },
      {
        heading: "Signs your organisation could use one",
        text: "A few common indicators: your waste collection costs keep rising without a clear reason; staff, tenants or students are unsure where different types of waste should go; you are being asked about your environmental practices by clients, regulators or a landlord; or you simply have never had a documented waste management plan. Any one of these is a reasonable trigger to bring in outside advice.",
      },
      {
        heading: "What good advice looks like",
        text: "A useful consultancy engagement should leave you with something concrete: a waste segregation plan, a realistic collection schedule, staff or student training materials, and - where relevant - guidance on the by-laws that apply in your municipality. International frameworks like ISO 14001 for environmental management systems offer a helpful structure for larger institutions, even where full certification is not the goal.",
      },
      {
        heading: "How WasteCure approaches it",
        text: "We work with schools, churches, businesses and residential communities across the Ashanti Region to design waste management and recycling programmes that are realistic to maintain - not just impressive on paper. That often means pairing a waste audit with our existing collection and cleaning services, so the plan we recommend is one we can also help deliver. If you think your organisation is due for a look, reach out through our Contact page.",
      },
    ],
    sources: [
      {
        title: "ISO 14001 Environmental management systems",
        url: "https://www.iso.org/iso-14001-environmental-management.html",
        publisher: "International Organization for Standardization (ISO)",
      },
    ],
  },
];
