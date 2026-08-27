// WasteCure site data - central content + image config
// All images are real photographs sourced from news sites, NGOs and stock libraries.
// No AI-generated images are used.

export const SITE = {
  name: "WasteCure",
  legalName: "WasteCure Limited Company",
  tagline: "Waste Management Specialists",
  founded: 2021,
  phone: "+233 20 397 0216",
  phoneIntl: "+233203970216",
  phone2: "+233 20 397 0235",
  phoneIntl2: "+233203970235",
  email: "wastecureltd@gmail.com",
  location: "2nd Floor, Aseda House, Adum, Kumasi, Ashanti Region, Ghana",
  region: "Ghana",
  hours: "Mon - Sat: 8:00am - 5:00pm",
  industry: "Environmental Services",
  employees: "2-10",
  instagram: "https://www.instagram.com/wastecureghana/",
  linkedin: "https://www.linkedin.com/company/wastecure/",
  logo: "/wastecure-logo.jpg",
} as const;

export const VISION =
  "We envision a healthy environment where waste is sustainably managed through circular economy principles.";

export const MISSION =
  "To provide advanced waste solutions with the required expertise, technical and managerial competencies, and resources to support our clients achieve their waste management goals.";

export const CORE_VALUES = [
  { letter: "C", word: "Commitment", description: "Commitment to sustainability" },
  { letter: "U", word: "Unity", description: "Unity with communities" },
  { letter: "R", word: "Reliability", description: "Reliability in service" },
  { letter: "E", word: "Excellence", description: "Excellence" },
] as const;

// Real WasteCure field photography, supplied by the client and hosted on
// their Cloudinary account (cloud name: dh1gxbiuw). f_auto,q_auto lets
// Cloudinary serve the best format/quality automatically per browser.
const CLOUDINARY_BASE = "https://res.cloudinary.com/dh1gxbiuw/image/upload/f_auto,q_auto";

export const REAL_PHOTOS = {
  // Street/market clean-up crew in WasteCure hi-vis vests, Ashanti Region
  streetCrew: `${CLOUDINARY_BASE}/IMG-20260518-WA0016_a4gluv`,
  // Crew loading collected waste into an Afigya Kwabre South District skip
  skipLoading1: `${CLOUDINARY_BASE}/IMG-20260523-WA0007_hxzsns`,
  skipLoading2: `${CLOUDINARY_BASE}/IMG_0176_dbwx9u`,
  // Crew with wheelbarrow collecting waste near a market
  wheelbarrowCollection: `${CLOUDINARY_BASE}/IMG-20260523-WA0012_izrdfz`,
  // Cleaning crew of six with brooms at a site under construction
  cleaningCrew: `${CLOUDINARY_BASE}/IMG_0201_f215xe`,
  // Field team engaging shopkeepers during a collection round
  marketEngagement: `${CLOUDINARY_BASE}/IMG-20260523-WA0015_cwmo1c`,
  // Lone volunteer sweeping a road at dusk
  duskSweep: `${CLOUDINARY_BASE}/IMG_0172_yhjxxb`,
  // Community/volunteer briefing, WasteCure branded vest, Afigya Kwabre South
  communityMeeting: `${CLOUDINARY_BASE}/IMG_5441_slb1g2`,
  // Large group photo of volunteers and staff
  groupPhoto1: `${CLOUDINARY_BASE}/IMG_5446_sivl7j`,
  groupPhoto2: `${CLOUDINARY_BASE}/IMG_5447_jzjmz8`,
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
      { label: "Waste Collection", href: "/services#collection" },
      { label: "Recycling & Sorting", href: "/services#recycling" },
      { label: "Cleaning Services", href: "/services#cleaning" },
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
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "collection",
    title: "Waste Collection",
    short: "Reliable waste collection for homes, businesses and institutions.",
    description:
      "Our services include waste collection for households, businesses, schools and institutions across Ghana, encouraging responsible disposal rather than dumping or burning.",
    points: [
      "Door-to-door and drop-off waste collection",
      "Scheduled pickup for businesses and institutions",
      "Sorted collection points across our service area",
      "Affordable, reliable service for every household",
    ],
    image: REAL_PHOTOS.skipLoading1,
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
    id: "cleaning",
    title: "Cleaning Services",
    short: "Professional cleaning for schools, offices and residences.",
    description:
      "Our cleaning services include waste collection, cleaning services for schools, corporate office spaces, and residence and real estate facilities - keeping shared spaces clean and healthy.",
    points: [
      "Scheduled cleaning for schools and campuses",
      "Corporate office space cleaning",
      "Residential and real estate facility cleaning",
      "Tailored plans for one-off or recurring jobs",
    ],
    image: REAL_PHOTOS.cleaningCrew,
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
    image: REAL_PHOTOS.communityMeeting,
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
  { value: 144, label: "Tricycle Loads Collected", suffix: "+" },
  { value: 20, label: "Active Volunteers", suffix: "+" },
  { value: 5, label: "Communities Reached", suffix: "+" },
  { value: 2021, label: "Founded" },
] as const;

export const TEAM = [
  {
    name: "George Adomako",
    role: "Founder & Executive Director",
    bio: "Specialises in waste management and environmental sustainability, passionate about creating cleaner communities.",
    image: "/images/team/george-adomako.jpg",
  },
  {
    name: "Edmond Amankwaah",
    role: "Sales, Marketing & Product Development",
    bio: "Specialises in sales, marketing and product development, driving growth through innovative and sustainable solutions.",
    image: "/images/team/edmond-amankwaah.jpg",
  },
  {
    name: "Maxwell Opoku Amoako",
    role: "Technical & Operations Manager",
    bio: "Specialises in operations, organisation and efficient waste management for sustainable communities.",
    image: "/images/team/maxwell-opoku-amoako.jpg",
  },
] as const;

export const MILESTONES = [
  {
    year: "2021",
    title: "WasteCure is founded",
    description:
      "George Adomako establishes WasteCure in Kwabre East Municipality with a vision to reduce plastic waste through responsible collection and recycling.",
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
    title: "Scaling across Ghana",
    description:
      "With a proven model in Kwabre East, WasteCure is preparing to expand collection and education across the Ashanti Region and beyond.",
  },
] as const;

export const GALLERY_ITEMS = [
  { src: REAL_PHOTOS.streetCrew, caption: "Street clean-up crew in action", category: "Collection" },
  { src: REAL_PHOTOS.skipLoading1, caption: "Loading collected waste for disposal", category: "Collection" },
  { src: REAL_PHOTOS.wheelbarrowCollection, caption: "Collecting waste near a local market", category: "Collection" },
  { src: REAL_PHOTOS.skipLoading2, caption: "District waste skip being loaded", category: "Collection" },
  { src: REAL_PHOTOS.cleaningCrew, caption: "Cleaning crew at a client site", category: "Cleaning" },
  { src: REAL_PHOTOS.duskSweep, caption: "Field team sweeping a road at dusk", category: "Cleaning" },
  { src: REAL_PHOTOS.marketEngagement, caption: "Engaging shopkeepers during a collection round", category: "Community" },
  { src: REAL_PHOTOS.communityMeeting, caption: "Community and partner briefing session", category: "Community" },
  { src: REAL_PHOTOS.groupPhoto1, caption: "WasteCure team with community partners", category: "Team" },
  { src: REAL_PHOTOS.groupPhoto2, caption: "Community partners gathering", category: "Team" },
  { src: IMAGES.bottles[0], caption: "Sorted PET bottles ready for recycling", category: "Recycling" },
  { src: IMAGES.education[2], caption: "Children learning about recycling", category: "Education" },
] as const;
