// WasteCure site data - central content + image config
// All images are real photographs sourced from news sites, NGOs and stock libraries.
// No AI-generated images are used.

export const SITE = {
  name: "WasteCure",
  legalName: "WasteCure Limited Company",
  tagline: "Curing Waste. Healing the Planet.",
  founded: 2021,
  phone: "0540652347",
  phoneIntl: "+233540652347",
  email: "edmond.amankwaah@gmail.com",
  location: "Kwabre East Municipality, Kumasi, Ashanti Region, Ghana",
  region: "Kumasi, Ashanti Region",
  industry: "Environmental Services",
  employees: "2-10",
  instagram: "https://www.instagram.com/wastecureghana/",
  linkedin: "https://www.linkedin.com/company/wastecure/",
  logo: "/wastecure-logo.jpg",
} as const;

// Real photographs from web sources (news sites, NGOs, stock libraries)
export const IMAGES = {
  // Plastic waste collection in Ghana
  collection: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/334a8d99206a.jpg", // Ghana Business News
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6c1f6bbb12e4.jpg", // EWB NL
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/57d50ff80db3.jpg", // EEAS - European Union
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/518cb684c1d1.jpg", // IPSNews.net
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fc2dd5487aff.jpg", // Atlas Volunteers
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/22dd501aaa7d.jpg", // AmaGhanaonline.com
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b08340c1f90b.jpg", // African Arguments
  ],
  // Plastic bottles recycling / sorting
  bottles: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/946eff62dbb8.jpeg", // Mongabay
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8cd1b6916cfd.jpeg", // Pexels
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f2c1e042cbd4.jpg", // Alamy
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e78d7f987caf.jpg", // Shutterstock
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bdb38113c220.jpg", // Alamy
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/50c50be289c7.jpg", // x.com
  ],
  // Community cleanup / volunteers
  community: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3a49c8839aab.jpg", // EEAS - European Union
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c4a0ddfcd045.png", // Global Citizen
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/966bd34429d9.jpg", // Break Free From Plastic
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/df62a9a38f68.jpg", // Alamy
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4cd589262af3.jpg", // Alamy
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d132fc660c80.jpg", // YouTube
  ],
  // School / environmental education
  education: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3eaf7248c3d0.jpg", // Journal of Sustainability Education
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/016bd9c7e1d7.jpeg", // Legit News
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/eb84b728d2fc.jpg", // Humana People To People
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/95d3346d458f.jpg", // The Citizen
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0e17208905f6.jpg", // nadeet.org
  ],
  // Composting / organic waste
  composting: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b00d778a707f.jpg", // The Cool Down
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b53609152817.jpg", // Gardening Know How
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/949bc99e7662.jpg", // The Home Depot
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/44ec8e654d1a.jpg", // Shutterstock
  ],
  // Ghana community / streets
  ghana: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3c7ab0cccab1.jpg", // Alamy
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/896e5eda5bab.jpg", // Dreamstime
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2874b614af90.jpg", // Dreamstime
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/15388e32725d.jpg", // Alamy
  ],
  // Plastic pollution / drains
  pollution: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ab77953b588d.jpeg", // Yen News
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf439bad6980.webp", // Angel Online
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3d060d57111f.jpg", // Premium Times Nigeria
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/484f11e98af4.jpg", // DW.com
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/27baca504290.jpg", // LinkedIn
  ],
  // Waste worker / truck
  worker: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/caa3f9c41ef7.jpg", // Alamy
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/de476c26888e.jpg", // Caterpillar
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d6ee91d70fdb.jpg", // The New York Times
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/af6afed2db9d.jpg", // The Guardian
  ],
} as const;

// Navigation structure with dropdowns for grouped links
export const NAV_STRUCTURE = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Timeline", href: "/about#timeline" },
      { label: "Team", href: "/about#team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Plastic Collection", href: "/services#collection" },
      { label: "Recycling & Sorting", href: "/services#recycling" },
      { label: "Composting", href: "/services#composting" },
      { label: "Consultancy", href: "/services#consultancy" },
      { label: "Waste Types Guide", href: "/services#waste-guide" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Our Commitment", href: "/sustainability" },
      { label: "Impact", href: "/sustainability#impact" },
      { label: "Comparison", href: "/sustainability#comparison" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "collection",
    title: "Plastic Waste Collection",
    short: "Designated land space for responsible plastic disposal.",
    description:
      "We provide a designated land space for plastic waste collection in the Kwabre East Municipality, encouraging households, businesses and institutions to dispose of plastic waste responsibly rather than dumping or burning it.",
    points: [
      "Door-to-door and drop-off plastic collection",
      "Scheduled pickup for businesses and institutions",
      "Sorted collection points across the municipality",
      "Affordable, reliable service for every household",
    ],
    image: IMAGES.collection[0],
  },
  {
    id: "recycling",
    title: "Recyclables Collection and Sorting",
    short: "Recovering value from plastic before it reaches landfill.",
    description:
      "WasteCure sorts, bales and channels recyclable plastics to off-takers and processors, reducing the volume of plastic that ends up in landfills and waterways while supporting Ghana's circular economy.",
    points: [
      "PET, HDPE, LDPE and mixed plastic recovery",
      "Baling and aggregation for recyclers",
      "Partnerships with local recycling off-takers",
      "Traceable, transparent material flows",
    ],
    image: IMAGES.bottles[0],
  },
  {
    id: "composting",
    title: "Composting and Organic Waste",
    short: "Turning organic waste into rich compost for farms.",
    description:
      "Beyond plastics, WasteCure supports the diversion of organic waste from landfill through composting, producing nutrient-rich compost that returns value to local farms and gardens.",
    points: [
      "Organic waste diversion from landfill",
      "Compost production for local agriculture",
      "Training on home and community composting",
      "Closed-loop nutrient recovery",
    ],
    image: IMAGES.composting[0],
  },
  {
    id: "consultancy",
    title: "Waste Management Consultancy",
    short: "Practical advisory for institutions and communities.",
    description:
      "We advise businesses, schools, churches, municipalities and residential communities on how to design, organise and sustain effective waste management and recycling programmes.",
    points: [
      "Waste audits and diversion planning",
      "Recycling programme design for institutions",
      "Policy and by-law advisory for assemblies",
      "Sustainability reporting and training",
    ],
    image: IMAGES.ghana[0],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Collection",
    description:
      "Plastic waste is collected from households, businesses and drop-off points across Kwabre East.",
  },
  {
    step: "02",
    title: "Sorting",
    description:
      "Collected material is sorted by plastic type: PET, HDPE, LDPE and mixed, at our site.",
  },
  {
    step: "03",
    title: "Aggregation",
    description:
      "Sorted plastics are cleaned, baled and prepared for recycling off-takers.",
  },
  {
    step: "04",
    title: "Recycling",
    description:
      "Material is channelled to recyclers, closing the loop and diverting plastic from landfill.",
  },
] as const;

export const STATS = [
  { value: 2021, label: "Founded" },
  { value: 4, label: "Core Service Lines" },
  { value: 100, label: "Plastic Diverted from Landfill (%)", suffix: "" },
  { value: 1, label: "Municipality Served" },
] as const;

export const TEAM = [
  {
    name: "Edmond Amankwaah",
    role: "Founder and Lead",
    bio: "Edmond founded WasteCure in 2021 with a vision to reduce plastic waste in Ghanaian communities through responsible collection and recycling.",
  },
  {
    name: "Operations Team",
    role: "Collection and Sorting",
    bio: "Our field team runs daily collection routes, manages the sorting site and engages directly with households and businesses.",
  },
  {
    name: "Community Team",
    role: "Engagement and Education",
    bio: "Our community team leads school visits, clean-ups and public education to build long-term awareness around waste.",
  },
] as const;

export const MILESTONES = [
  {
    year: "2021",
    title: "WasteCure is founded",
    description:
      "Edmond Amankwaah establishes WasteCure in Kwabre East Municipality with a vision to reduce plastic waste through responsible collection and recycling.",
  },
  {
    year: "2022",
    title: "First collection site opens",
    description:
      "A designated land space for plastic waste collection begins operations, giving the community a real alternative to dumping and burning.",
  },
  {
    year: "2023",
    title: "Community clean-ups launched",
    description:
      "Regular clean-up drives bring volunteers together across the municipality, removing tonnes of plastic from streets, drains and public spaces.",
  },
  {
    year: "2024",
    title: "School education programme",
    description:
      "WasteCure begins visiting basic schools with interactive recycling sessions, reaching over 450 students and counting.",
  },
  {
    year: "2024",
    title: "Recycling off-taker partnerships",
    description:
      "Sorted plastics are channelled to recycling off-takers, closing the loop and supporting Ghana's growing circular economy.",
  },
  {
    year: "2025",
    title: "Scaling across Ashanti Region",
    description:
      "With a proven model in Kwabre East, WasteCure is preparing to expand collection and education across the wider Ashanti Region.",
  },
] as const;
