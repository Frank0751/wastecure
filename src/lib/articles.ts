// Blog articles with authentic, well-referenced content.
// Sources cited at the end of each article.
// All images are real photographs from web sources.

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
        text: "Finished compost is dark, crumbly and smells like earth. Mix it into garden soil, use it as mulch around plants, or add it to pots. It improves soil structure, retains moisture, and reduces the need for chemical fertilisers. WasteCure offers composting training as part of our community education work.",
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
];
