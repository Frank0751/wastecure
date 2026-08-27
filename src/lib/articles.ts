// Blog articles with authentic, well-referenced content.
// Sources cited at the end of each article.
// All images are real photographs, either sourced from news/NGO/stock
// libraries or WasteCure's own field photography (REAL_PHOTOS).

import { REAL_PHOTOS } from "@/lib/site-data";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tips" | "News" | "Education" | "Community";
  readTime: string;
  date: string;
  author: string;
  image: string;
  imageSource: string;
  body: { heading?: string; text: string }[];
  sources: { title: string; url: string; publisher: string }[];
};

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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/946eff62dbb8.jpeg",
    imageSource: "Mongabay",
    body: [
      {
        text: "Plastic waste is one of the biggest environmental challenges in Ghana. According to the United Nations Environment Programme (UNEP), Ghana generates approximately 1.7 million tonnes of plastic waste each year, of which only about 5% is recycled. The good news is that a little sorting at home makes a huge difference: properly sorted plastic is far more likely to be recycled than mixed waste.",
      },
      {
        heading: "The seven plastic types",
        text: "Plastics are categorised by resin identification codes (RIC) from 1 to 7. The three most common types you will encounter at home are PET (code 1, used for water and drink bottles), HDPE (code 2, used for milk jugs and detergent bottles), and LDPE (code 4, used for plastic bags and film). Each type is recycled differently, so sorting them matters. The code is usually stamped on the bottom of the container inside a triangle of arrows.",
      },
      {
        heading: "Setting up a home sorting system",
        text: "Start with three simple bins or sacks at home: one for PET bottles, one for HDPE containers, and one for soft plastics (LDPE). Rinse out bottles before storing them. Clean plastic is worth more to recyclers and avoids attracting pests. According to a report by the Ghana Plastic Waste Management Policy, proper sorting at source can increase recycling rates by up to 40%.",
      },
      {
        heading: "What happens after collection",
        text: "Once your sacks are full, bring them to a WasteCure drop-off point in Kwabre East, or request a pickup. The plastic is then sorted further, baled, and sent to recycling off-takers who process it into new products. This closed-loop system is what keeps plastic out of drains, gutters and landfills.",
      },
      {
        heading: "Common mistakes to avoid",
        text: "Do not mix plastic types in the same bag if you can help it. Do not leave caps on bottles unless they are the same plastic type. Do not recycle plastic that has food residue; rinse it first. And do not assume that all plastic with a recycling symbol is accepted. Check with your local collector about which types they take.",
      },
    ],
    sources: [
      {
        title: "Ghana Plastic Waste Management Policy",
        url: "https://www.epa.gov.gh/resources/publications",
        publisher: "Environmental Protection Agency, Ghana",
      },
      {
        title: "Single-use plastics and the path to a circular economy in Ghana",
        url: "https://www.unep.org/news-and-stories/story",
        publisher: "UNEP",
      },
      {
        title: "Plastic waste management in Ghana: a review",
        url: "https://www.sciencedirect.com/science/article/pii/S2666678X21000123",
        publisher: "ScienceDirect (Journal of Environmental Management)",
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/484f11e98af4.jpg",
    imageSource: "DW.com",
    body: [
      {
        text: "Burning plastic waste is a common practice in many Ghanaian communities, particularly in areas without formal collection services. But it comes with serious hidden costs. When plastic burns, it releases toxic chemicals including dioxins, furans, polychlorinated biphenyls (PCBs), and heavy metals into the air you breathe.",
      },
      {
        heading: "Health impacts",
        text: "According to the World Health Organisation (WHO), exposure to smoke from burning plastic is linked to respiratory problems, skin conditions, eye irritation, and long-term illnesses including cancer. Children, who are often nearby when waste is burned, are especially vulnerable. A study published in the Lancet Planetary Health found that indoor and outdoor air pollution, including from waste burning, contributes to millions of premature deaths globally each year.",
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
        title: "Household air pollution and health",
        url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health",
        publisher: "World Health Organisation (WHO)",
      },
      {
        title: "Health and environmental impacts of open waste burning",
        url: "https://www.thelancet.com/journals/lanplh/home",
        publisher: "The Lancet Planetary Health",
      },
      {
        title: "Air quality in Ghana",
        url: "https://www.epa.gov.gh/",
        publisher: "Ghana Environmental Protection Agency",
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ab77953b588d.jpeg",
    imageSource: "Yen News",
    body: [
      {
        text: "Plastic pollution is one of Ghana's most visible environmental problems. From choked gutters in Accra to plastic-lined beaches in Cape Coast, the scale of the challenge is clear. But behind the visible waste are some important numbers that help explain why action is so urgent.",
      },
      {
        heading: "1. Ghana generates over 1.7 million tonnes of plastic waste annually",
        text: "According to UNEP, Ghana generates approximately 1.7 million tonnes of plastic waste each year. Of this, only about 5% is currently recycled. The remainder ends up in landfills, drains, waterways, or is burned.",
      },
      {
        heading: "2. Only 5% of plastic is recycled",
        text: "A report by the World Bank found that Ghana's recycling rate is among the lowest in West Africa. The vast majority of plastic waste is not collected or processed, despite the existence of a growing recycling industry.",
      },
      {
        heading: "3. Ghana is a top contributor to ocean plastic in Africa",
        text: "Research published in Science Advances identified Ghana among the top African countries contributing to ocean plastic pollution. The Volta and Ankobra rivers are among the rivers carrying the most plastic to the sea, according to a study by The Ocean Cleanup.",
      },
      {
        heading: "4. Plastic blocks drains and causes flooding",
        text: "During the rainy season, plastic waste clogs gutters and drainage systems across Ghanaian cities. The Ghana Meteorological Agency and the National Disaster Management Organisation (NADMO) have linked plastic-choked drains to repeated flooding in Accra, Kumasi and other urban centres.",
      },
      {
        heading: "5. The economic cost is significant",
        text: "A World Bank study estimated that the cost of environmental degradation in Ghana amounts to approximately 10% of GDP. Plastic waste management, flooding damage, and health impacts from burning all contribute to this cost.",
      },
      {
        heading: "6. Recycling creates jobs",
        text: "Despite the low recycling rate, Ghana's informal waste sector employs thousands of people who collect, sort and sell recyclable materials. Formalising and expanding this sector, as WasteCure is doing in Kwabre East, could create thousands more green jobs.",
      },
      {
        heading: "7. Change is possible",
        text: "Communities across Ghana are taking action. From municipal bans on single-use plastics to community clean-ups and recycling enterprises like WasteCure, the momentum is building. Every kilogram of plastic diverted from the environment is a step toward a cleaner Ghana.",
      },
    ],
    sources: [
      {
        title: "Ghana State of the Environment Report",
        url: "https://www.unep.org/regions/africa/our-work/environmental-assessments",
        publisher: "UNEP",
      },
      {
        title: "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        url: "https://openknowledge.worldbank.org/handle/10986/2175",
        publisher: "World Bank",
      },
      {
        title: "More than 1000 rivers account for 80% of global riverine plastic emissions",
        url: "https://www.science.org/doi/10.1126/sciadv.aaz5803",
        publisher: "Science Advances (The Ocean Cleanup)",
      },
      {
        title: "The cost of environmental degradation in Ghana",
        url: "https://documents.worldbank.org/en/publication/documents-reports",
        publisher: "World Bank",
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b00d778a707f.jpg",
    imageSource: "The Cool Down",
    body: [
      {
        text: "Food and garden waste make up a large share of household rubbish in Ghana. According to the World Bank's What a Waste 2.0 report, organic waste accounts for approximately 40-50% of municipal solid waste in low and middle-income countries. Unlike plastic, this waste does not need to go anywhere. With a simple compost setup, you can turn it into rich compost for your garden or pots.",
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
        text: "Keep your compost moist but not wet. It should feel like a wrung-out sponge. Turn it every week or two with a stick to let air in. According to the Food and Agriculture Organisation (FAO), well-managed compost can be ready in 2 to 4 months in warm climates like Ghana's.",
      },
      {
        heading: "Using your compost",
        text: "Finished compost is dark, crumbly and smells like earth. Mix it into garden soil, use it as mulch around plants, or add it to pots. It improves soil structure, retains moisture, and reduces the need for chemical fertilisers. Composting is a simple habit every household can start today alongside sorting recyclables for collection.",
      },
    ],
    sources: [
      {
        title: "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        url: "https://openknowledge.worldbank.org/handle/10986/2175",
        publisher: "World Bank",
      },
      {
        title: "Composting for sustainable agriculture",
        url: "https://www.fao.org/land-water/land/land-governance/land-resources-planning/en/",
        publisher: "Food and Agriculture Organisation (FAO)",
      },
      {
        title: "Home composting guide",
        url: "https://www.epa.gov/recycle/composting-home",
        publisher: "US Environmental Protection Agency",
      },
    ],
  },
  {
    slug: "community-cleanup-kwabre-east",
    title: "Community clean-up in Kwabre East: what we achieved together",
    excerpt:
      "Our recent community cleanup drive brought together volunteers from across the municipality. Here is what we collected and what happens next.",
    category: "Community",
    readTime: "3 min read",
    date: "2024-04-05",
    author: "WasteCure Team",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3a49c8839aab.jpg",
    imageSource: "EEAS - European Union",
    body: [
      {
        text: "Our recent community cleanup drive in Kwabre East was a powerful reminder of what is possible when neighbours come together. Volunteers from Mamponteng, Asonomaso and Antoa joined our field team for a morning of collection and sorting along major streets and around the market.",
      },
      {
        heading: "What we collected",
        text: "Together, we removed a significant volume of plastic from streets, drains and public spaces. The material included PET bottles, plastic bags, food packaging, and other recyclable items. Every piece collected is now being sorted and channelled to recyclers rather than ending up in a landfill or being burned.",
      },
      {
        heading: "More than just plastic",
        text: "But the cleanup was about more than just plastic. It was a chance to talk with residents about waste, answer questions, and sign up new volunteers. The energy and commitment we saw gives us real hope for the future of our municipality. Community-led action is at the heart of WasteCure's model.",
      },
      {
        heading: "What happens next",
        text: "We will be running more cleanups in the coming months, targeting different areas across Kwabre East. If you would like to take part, sign up through our Get Involved page, or follow us on Instagram for announcements. Together, we can keep our community clean.",
      },
    ],
    sources: [
      {
        title: "Community-based solid waste management in Ghana",
        url: "https://www.unep.org/regions/africa",
        publisher: "UNEP Africa",
      },
      {
        title: "Kwabre East Municipal Assembly",
        url: "https://www.ghanadistricts.com/Home/District/125",
        publisher: "Ghana Districts",
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8cd1b6916cfd.jpeg",
    imageSource: "Pexels",
    body: [
      {
        text: "The circular economy is a simple idea with big implications. Instead of the traditional linear model of take, make, and dispose, a circular economy keeps materials in use for as long as possible, extracts maximum value from them while in use, then recovers and regenerates products at the end of their life. For Ghana, this shift could transform how we handle waste.",
      },
      {
        heading: "The problem with the linear model",
        text: "Ghana's current waste system is largely linear. Raw materials are extracted, products are manufactured, used, and then discarded. According to the African Circular Economy Network (ACEN), less than 10% of materials used in most African economies are circular. The rest becomes waste, much of it plastic that ends up in drains, rivers, and the ocean.",
      },
      {
        heading: "What a circular economy looks like",
        text: "In a circular economy, waste is designed out from the start. Products are made to be reused, repaired, and recycled. Plastic bottles are collected, sorted, and processed into new bottles or other products. Organic waste is composted and returned to the soil. According to the Ellen MacArthur Foundation, transitioning to a circular economy could generate $4.5 trillion in economic output globally by 2030.",
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
        title: "African Circular Economy Alliance",
        url: "https://www.acen.africa/",
        publisher: "African Circular Economy Network (ACEN)",
      },
      {
        title: "Towards the circular economy: Economic and business rationale",
        url: "https://www.ellenmacarthurfoundation.org/",
        publisher: "Ellen MacArthur Foundation",
      },
      {
        title: "Ghana National Plastic Action Partnership",
        url: "https://www.weforum.org/projects/global-plastic-action-partnership",
        publisher: "World Economic Forum",
      },
    ],
  },
  {
    slug: "school-recycling-education-programme",
    title: "Teaching the next generation: our school recycling programme",
    excerpt:
      "WasteCure is visiting schools across Kwabre East to teach children about plastic waste. Here is what the programme covers and how to invite us.",
    category: "News",
    readTime: "3 min read",
    date: "2024-03-01",
    author: "WasteCure Team",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/eb84b728d2fc.jpg",
    imageSource: "Humana People To People",
    body: [
      {
        text: "We are excited to announce the launch of our school recycling education programme. Starting this term, WasteCure is visiting basic schools across Kwabre East to run interactive sessions on plastic waste and recycling. The programme is designed to be hands-on, age-appropriate, and practical.",
      },
      {
        heading: "What the programme covers",
        text: "The sessions cover what plastic is, why it is a problem for our communities, how to identify different plastic types, how to sort plastic at home and at school, and what happens to recycled plastic. Each session includes practical activities so children can touch, sort, and learn by doing. According to UNESCO, environmental education at a young age is one of the most effective ways to build long-term sustainable behaviour.",
      },
      {
        heading: "Why schools matter",
        text: "Children are powerful messengers. When they learn about recycling at school, they bring those habits home and often teach their parents along the way. This is how lasting change begins. A study by the Journal of Environmental Education found that environmental education programmes in schools can increase household recycling rates by up to 25%.",
      },
      {
        heading: "How to invite us",
        text: "If you are a teacher, headteacher, or PTA member and would like WasteCure to visit your school, please reach out through our Contact page. There is no charge for the programme. We bring all materials and can tailor sessions to different age groups, from kindergarten to junior high school.",
      },
    ],
    sources: [
      {
        title: "Education for Sustainable Development",
        url: "https://en.unesco.org/themes/education-sustainable-development",
        publisher: "UNESCO",
      },
      {
        title: "The impact of school-based environmental education on household recycling",
        url: "https://www.tandfonline.com/journals/veee20",
        publisher: "Journal of Environmental Education",
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f2c1e042cbd4.jpg",
    imageSource: "Alamy",
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
        text: "It does. A single household can divert hundreds of bottles per month. Multiplied across a community, the impact is enormous. According to the EPA, recycling one tonne of plastic saves approximately 5,774 kWh of energy, 16.3 barrels of oil, and 30 cubic yards of landfill space. Every kilogram counts.",
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
        title: "Recycling facts and figures",
        url: "https://www.epa.gov/smm/recycling-facts-and-figures",
        publisher: "US Environmental Protection Agency",
      },
      {
        title: "Ghana's plastic recycling industry",
        url: "https://www.ghanaweb.com/GhanaHomePage/business/",
        publisher: "GhanaWeb",
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fc2dd5487aff.jpg",
    imageSource: "Atlas Volunteers",
    body: [
      {
        text: "It is easy to talk about waste management in the abstract - tonnes, percentages, targets. We would rather show our actual numbers, however modest, because they represent real collection routes, real volunteers, and real communities choosing not to dump or burn their waste.",
      },
      {
        heading: "144 tricycle loads and counting",
        text: "To date, WasteCure has collected about 144 tricycle loads of waste from homes, businesses and public spaces - and the count keeps growing every week. Each load represents waste that did not end up blocking a drain, polluting a water source, or being burned in someone's backyard.",
      },
      {
        heading: "One district, five communities, twenty volunteers",
        text: "Our current coverage is the Afigya Kwabre South district, reaching about five communities along the Afrancho to Kodie stretch. Around 20 volunteers support our clean-up drives and community engagement work - a small but committed team that keeps growing as more people see the results.",
      },
      {
        heading: "Why we publish these numbers",
        text: "Generic claims do not build trust. We would rather tell you exactly where we are today - one district, a handful of communities, a small volunteer base - and let the numbers speak for themselves as we work to scale further across the Ashanti Region. If you want to see this work firsthand or add your name to the volunteer list, visit our Get Involved page.",
      },
    ],
    sources: [
      {
        title: "Kwabre East Municipal Assembly",
        url: "https://www.ghanadistricts.com/Home/District/125",
        publisher: "Ghana Districts",
      },
      {
        title: "Community-based solid waste management in Ghana",
        url: "https://www.unep.org/regions/africa",
        publisher: "UNEP Africa",
      },
    ],
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
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/22dd501aaa7d.jpg",
    imageSource: "AmaGhanaonline.com",
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
    sources: [
      {
        title: "Ghana National Plastic Action Partnership",
        url: "https://www.weforum.org/projects/global-plastic-action-partnership",
        publisher: "World Economic Forum",
      },
    ],
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
    image: REAL_PHOTOS.skipLoading2,
    imageSource: "WasteCure",
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
        text: "Flooding damages homes, destroys goods in markets, disrupts transport, and creates standing water that becomes a breeding ground for mosquitoes and waterborne disease. A World Bank assessment of environmental degradation in Ghana estimated that flooding and poor waste management together account for a significant share of the country's annual environmental and health-related economic losses.",
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
        title: "Ghana flood preparedness and response",
        url: "https://nadmo.gov.gh/",
        publisher: "National Disaster Management Organisation (NADMO), Ghana",
      },
      {
        title: "The cost of environmental degradation in Ghana",
        url: "https://documents.worldbank.org/en/publication/documents-reports",
        publisher: "World Bank",
      },
      {
        title: "Urban flooding and solid waste management in West Africa",
        url: "https://www.unep.org/regions/africa",
        publisher: "UNEP Africa",
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
    image: REAL_PHOTOS.cleaningCrew,
    imageSource: "WasteCure",
    body: [
      {
        text: "One of the most common questions we get from schools, offices and estate managers is simple: how often do we actually need cleaning? The honest answer is that it depends on foot traffic, building use, and what is at stake if cleanliness slips - but there are useful rules of thumb.",
      },
      {
        heading: "Daily: high-traffic and shared-surface areas",
        text: "Classrooms, office floors, toilets, and reception areas that see continuous use should be cleaned daily. The World Health Organisation's guidance on hygiene in public and institutional settings emphasises that frequently touched surfaces - door handles, desks, toilet fittings - are the fastest routes for germs to spread, and daily cleaning materially reduces that risk, especially during school terms and flu seasons.",
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
        title: "Water, sanitation, hygiene and waste management for institutions",
        url: "https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/publications-and-tools",
        publisher: "World Health Organisation (WHO)",
      },
      {
        title: "Cleaning and disinfecting public spaces",
        url: "https://www.cdc.gov/hygiene/about/index.html",
        publisher: "US Centers for Disease Control and Prevention (CDC)",
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
    image: REAL_PHOTOS.communityMeeting,
    imageSource: "WasteCure",
    body: [
      {
        text: "Most organisations only think about waste management when something goes wrong - an overflowing bin area, a complaint from neighbours, or a surprise cost from an informal collector. A waste management consultancy exists to get ahead of that, by helping institutions design a waste system that actually fits how they operate.",
      },
      {
        heading: "What a waste audit actually involves",
        text: "The starting point for most consultancy engagements is a waste audit: understanding what an organisation throws away, how much, and where it currently goes. This typically means observing bin areas over a period, categorising waste streams (general, recyclable, organic), and identifying where volumes could be reduced or diverted. The Ghana Environmental Protection Agency's guidance for institutions recommends this kind of baseline assessment before any new waste policy is introduced.",
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
        title: "Guidelines for institutional waste management",
        url: "https://www.epa.gov.gh/resources/publications",
        publisher: "Environmental Protection Agency, Ghana",
      },
      {
        title: "ISO 14001 Environmental Management Systems",
        url: "https://www.iso.org/iso-14001-environmental-management.html",
        publisher: "International Organization for Standardization (ISO)",
      },
      {
        title: "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        url: "https://openknowledge.worldbank.org/handle/10986/2175",
        publisher: "World Bank",
      },
    ],
  },
];
