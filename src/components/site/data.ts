import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import commercial from "@/assets/commercial.jpg";
import industrial from "@/assets/industrial.jpg";
import construction from "@/assets/construction.jpg";
import villa from "@/assets/villa.jpg";
import about from "@/assets/about.jpg";

export const images = { hero1, hero2, hero3, commercial, industrial, construction, villa, about };

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Project Categories" },
  { id: "achievements", label: "Achievements" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Us" },
];

// Contact details
export const contact = {
  phone: "+91 94401 33003",
  whatsapp: "919440133003",
  email: "deviconsultancyknr@gmail.com",
  address: "DEVI CONSULTANCY, Telangana, India",
};

// Leadership & Key Consultants
export const consultants = [
  {
    name: "Er. Sabbani Srinivas",
    qualifications: "B. Tech (Civil), M.I.E, FACCE(I), LMICI",
    role: "Consulting Civil Engineer",
    phone: "94401 33003",
    email: "deviconsultancyknr@gmail.com",
    image: "/founder.jpg",
  },
  {
    name: "Er. Vr. Karthikk Sabbani",
    qualifications: "B. Tech (Civil), M.E.(Structures), M.Val (Real Estate), A.M.I.E, A.I.V, LMACCE (I)",
    role: "Structural Engineer & IBBI Registered Valuer",
    phone: "94401 33003",
    email: "deviconsultancyknr@gmail.com",
    image: "/karthikk.jpg",
  },
];

// 1. HOME Slides
export const slides = [
  {
    image: hero1,
    eyebrow: "Since 2000",
    title: "DEVI CONSULTANCY",
    text: "Leaders in Quality Construction & Infrastructure.",
  },
  {
    image: hero2,
    eyebrow: "Engineering Excellence",
    title: "DEVI CONSULTANCY",
    text: "Leaders in Quality Construction & Infrastructure.",
  },
  {
    image: hero3,
    eyebrow: "Since 2000",
    title: "DEVI CONSULTANCY",
    text: "Leaders in Quality Construction & Infrastructure.",
  },
];

// 2. ABOUT US
export const aboutData = {
  establishedYear: 2000,
  aboutUs:
    "We provide professional construction consultancy, architectural design and infrastructure solutions with a focus on quality, innovation and customer satisfaction.",
  // 3. VISION
  vision:
    "To become a trusted leader in construction and infrastructure through innovative, sustainable and high-quality solutions.",
  // 4. MISSION
  mission:
    "To deliver reliable, cost-effective and innovative construction solutions while maintaining quality, safety and professional excellence.",
};

// 5. PROJECT CATEGORIES
export const categories = [
  "All",
  "Residential Villas",
  "Commercial Complexes",
  "Institutional Buildings",
  "Hospitals",
  "Conventional Halls",
] as const;

export const projects = [
  {
    title: "Luxury Residential Villa",
    category: "Residential Villas",
    image: villa,
    description: "Premium villa architectural planning, structural design, and turnkey execution.",
  },
  {
    title: "Modern Commercial Complex",
    category: "Commercial Complexes",
    image: commercial,
    description: "Multi-storey commercial business center with advanced structural engineering.",
  },
  {
    title: "Institutional Campus Building",
    category: "Institutional Buildings",
    image: construction,
    description: "State-of-the-art educational and institutional facility built for longevity.",
  },
  {
    title: "Super-Specialty Hospital",
    category: "Hospitals",
    image: hero2,
    description: "Healthcare facility planned according to stringent medical infrastructure standards.",
  },
  {
    title: "Grand Conventional Hall",
    category: "Conventional Halls",
    image: hero3,
    description: "Spacious column-free convention and banquet hall designed with modern acoustics.",
  },
  {
    title: "Executive Residential Enclave",
    category: "Residential Villas",
    image: about,
    description: "Contemporary villa layout focusing on eco-friendly architectural design.",
  },
  {
    title: "Corporate Commercial Hub",
    category: "Commercial Complexes",
    image: hero1,
    description: "Dynamic commercial plaza with retail spaces and corporate offices.",
  },
];

// 6. SERVICES
export const services = [
  {
    icon: "DraftingCompass",
    title: "Architectural Modeling",
    text: "Comprehensive 2D & 3D architectural models providing precise spatial planning and visual realism for your vision.",
    image: villa,
  },
  {
    icon: "Building2",
    title: "Structural Design",
    text: "Safe, robust, and cost-effective structural engineering designs tailored for long-lasting structural integrity.",
    image: commercial,
  },
  {
    icon: "Layers",
    title: "Interior & Exterior Designs",
    text: "Aesthetic and functional interior and exterior design solutions elevating everyday spaces.",
    image: hero3,
  },
  {
    icon: "FileSpreadsheet",
    title: "Bank Estimation & Valuation",
    text: "Accurate property valuations, detailed cost estimations, and recognized documentation for bank loans.",
    image: industrial,
  },
  {
    icon: "ClipboardCheck",
    title: "Pre-Construction Planning",
    text: "Feasibility analysis, budgeting, scheduling, and regulatory approvals for a seamless project launch.",
    image: construction,
  },
];

// 7. WHY CHOOSE US?
export const whyChooseUs = [
  {
    icon: "Briefcase",
    title: "Professional Expertise",
    description: "Decades of proven industry know-how delivering superior engineering results.",
  },
  {
    icon: "Sparkles",
    title: "Innovative Designs",
    description: "Forward-thinking architectural concepts blending aesthetic appeal with practical utility.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    description: "Rigorous standards and inspections ensuring the highest quality across every phase.",
  },
  {
    icon: "Coins",
    title: "Cost-Effective Solutions",
    description: "Smart value engineering to maximize return on investment without cutting corners.",
  },
  {
    icon: "Clock",
    title: "Timely Project Delivery",
    description: "Strict project milestones and disciplined management to deliver on schedule.",
  },
  {
    icon: "HeartHandshake",
    title: "Customer Satisfaction",
    description: "Client-centric mindset focused on understanding and achieving your exact goals.",
  },
  {
    icon: "Headphones",
    title: "Reliable Support",
    description: "Continuous assistance, consultation, and transparent communication throughout.",
  },
];

// 8. OUR ACHIEVEMENTS
export const achievements = [
  {
    value: "2000",
    label: "Established",
    subtext: "Decades of trusted engineering experience",
  },
  {
    value: "1000+",
    label: "Projects Completed",
    subtext: "Successful projects delivered across sectors",
  },
  {
    value: "4",
    label: "Awards Won",
    subtext: "Honors for excellence in construction & design",
  },
];

// 9. TESTIMONIALS
export const testimonialsData = {
  sectionTitle: "What Our Clients Say",
  subtitle: "What our valued partners and property owners share about working with us.",
  list: [
    {
      id: 1,
      quote:
        "Excellent service, professional guidance and quality solutions. A reliable team committed to delivering the best results.",
      author: "P. R. Sharma",
      role: "Residential Villa Owner",
      initials: "PS",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Outstanding architectural modeling and precise structural design. They ensured our commercial project stayed on schedule and budget.",
      author: "K. Suresh Reddy",
      role: "Commercial Developer",
      initials: "SR",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Their bank estimation and pre-construction planning expertise made the entire building process smooth and transparent. Highly recommended!",
      author: "V. Anil Kumar",
      role: "Institutional Project Director",
      initials: "AK",
      rating: 5,
    },
  ],
};

// 10. CONTACT US
export const contactSectionData = {
  title: "Let's Build Your Vision Together!",
  subtitle:
    "Get in touch with DEVI CONSULTANCY for professional construction and design solutions.",
};
