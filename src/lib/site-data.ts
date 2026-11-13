import { PHOTOS } from "@/lib/photos";

// Central site content. Business details below were confirmed by WasteCure
// in their content submission; change them here and they update everywhere.

export const SITE = {
  name: "WasteCure",
  legalName: "WasteCure Limited Company",
  tagline: "Waste Management Specialists",
  url: "https://wastecure.org",
  founded: 2021,
  phone: "+233 20 397 0216",
  phoneIntl: "+233203970216",
  phone2: "+233 20 397 0235",
  phoneIntl2: "+233203970235",
  email: "wastecureltd@gmail.com",
  location: "2nd Floor, Aseda House, Adum, Kumasi, Ashanti Region, Ghana",
  hours: "Mon - Sat: 8:00am - 5:00pm",
  instagram: "https://www.instagram.com/wastecureghana/",
  linkedin: "https://www.linkedin.com/company/wastecure/",
  logo: "/wastecure-logo.jpg",
} as const;

export const VISION =
  "We envision a healthy environment where waste is sustainably managed through circular economy principles.";

export const MISSION =
  "To provide advanced waste solutions with the required expertise, technical and managerial competencies, and resources to support our clients achieve their waste management goals.";

export const CORE_VALUES = [
  { letter: "C", word: "Commitment", description: "to sustainability" },
  { letter: "U", word: "Unity", description: "with communities" },
  { letter: "R", word: "Reliability", description: "in service" },
  { letter: "E", word: "Excellence", description: "in everything we do" },
] as const;

export const NAV_STRUCTURE = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
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
      "We collect waste from households, businesses, schools and institutions, so it is disposed of responsibly rather than dumped or burned.",
    points: [
      "Door-to-door and drop-off waste collection",
      "Scheduled pickup for businesses and institutions",
      "Collection points across our service area",
      "Affordable, reliable service for every household",
    ],
    photo: PHOTOS.skipLoading,
    photoAlt: "WasteCure crew tipping collected waste into a district skip",
  },
  {
    id: "recycling",
    title: "Recyclables Collection and Sorting",
    short: "Recovering value from plastic before it reaches landfill.",
    description:
      "We sort, bale and channel recyclable plastics to off-takers and processors, reducing the volume of plastic that ends up in landfills and waterways.",
    points: [
      "PET, HDPE, LDPE and mixed plastic recovery",
      "Baling and aggregation for recyclers",
      "Partnerships with local recycling off-takers",
      "Traceable, transparent material flows",
    ],
    photo: PHOTOS.wheelbarrow,
    photoAlt: "Crew sorting bottles and other waste into a wheelbarrow",
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    short: "Professional cleaning for schools, offices and residences.",
    description:
      "Cleaning services for schools, corporate office spaces, and residential and real estate facilities, keeping shared spaces clean and healthy.",
    points: [
      "Scheduled cleaning for schools and campuses",
      "Corporate office space cleaning",
      "Residential and real estate facility cleaning",
      "One-off or recurring plans",
    ],
    photo: PHOTOS.cleaningCrew,
    photoAlt: "Six WasteCure crew members with brooms at a market site",
  },
  {
    id: "consultancy",
    title: "Waste Management Consultancy",
    short: "Practical advisory for institutions and communities.",
    description:
      "We advise businesses, schools, churches, assemblies and residential communities on how to design, organise and sustain effective waste management and recycling programmes.",
    points: [
      "Waste audits and diversion planning",
      "Recycling programme design for institutions",
      "Policy and by-law advisory for assemblies",
      "Sustainability reporting and training",
    ],
    photo: PHOTOS.crewBriefing,
    photoAlt: "A WasteCure supervisor briefing a room of crew members",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Collection",
    description:
      "Waste is collected from households, businesses and drop-off points across our service area.",
  },
  {
    step: "02",
    title: "Sorting",
    description:
      "Recyclable material is separated by plastic type: PET, HDPE, LDPE and mixed.",
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
      "Material goes to recyclers, and what cannot be recycled goes to proper disposal.",
  },
] as const;

// Figures supplied by WasteCure. Update them as the numbers grow.
export const STATS = [
  { value: "144+", label: "Tricycle loads collected" },
  { value: "5", label: "Communities served" },
  { value: "20+", label: "People on our crews" },
  { value: "2021", label: "Year founded" },
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

export const GALLERY_ITEMS = [
  { photo: PHOTOS.group, caption: "The WasteCure crew and staff", category: "Team" },
  { photo: PHOTOS.cleaningCrew, caption: "Clean-up crew at a market site", category: "Cleaning" },
  { photo: PHOTOS.skipLoading, caption: "Tipping collected waste into a district skip", category: "Collection" },
  { photo: PHOTOS.streetBriefing, caption: "Briefing before a street clean-up", category: "Cleaning" },
  { photo: PHOTOS.wheelbarrow, caption: "Collecting waste beside a timber yard", category: "Collection" },
  { photo: PHOTOS.crewBriefing, caption: "Crew briefing, Afigya Kwabre South", category: "Team" },
  { photo: PHOTOS.broomHandover, caption: "Handing out brooms at the start of a shift", category: "Cleaning" },
  { photo: PHOTOS.skipHeadPan, caption: "Carrying waste to the skip", category: "Collection" },
  { photo: PHOTOS.groupCandid, caption: "After a crew meeting", category: "Team" },
  { photo: PHOTOS.duskSweep, caption: "Sweeping the roadside at dusk", category: "Cleaning" },
] as const;
