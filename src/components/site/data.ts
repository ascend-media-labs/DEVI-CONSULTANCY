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
  { id: "home", path: "/", label: "Home" },
  { id: "about", path: "/about", label: "About Us" },
  { id: "services", path: "/services", label: "Services" },
  { id: "projects", path: "/projects", label: "Project Categories" },
  { id: "achievements", path: "/achievements", label: "Achievements" },
  { id: "testimonials", path: "/testimonials", label: "Testimonials" },
  { id: "contact", path: "/contact", label: "Contact Us" },
];

// Contact details
export const contact = {
  phone: "+91 94401 33003",
  whatsapp: "919440133003",
  email: "deviconsultancyofficial@gmail.com",
  address: "DEVI CONSULTANCY, Telangana, India",
};

// Leadership & Key Consultants
export const consultants = [
  {
    name: "Er. Sabbani Srinivas",
    qualifications: "B. Tech (Civil), M.I.E, FACCE(I), LMICI",
    role: "Consulting Civil Engineer",
    phone: "94401 33003",
    email: "deviconsultancyofficial@gmail.com",
    image: "/founder.jpg",
  },
  {
    name: "Er. Vr. Karthikk Sabbani",
    qualifications: "B. Tech (Civil), M.E.(Structures), M.Val (Real Estate), A.M.I.E, A.I.V, LMACCE (I)",
    role: "Structural Engineer & IBBI Registered Valuer",
    phone: "94401 33003",
    email: "deviconsultancyofficial@gmail.com",
    image: "/karthikk.jpg",
  },
  {
    name: "Er. Sabbani Sai Revanth",
    qualifications: "B. Tech (Civil)",
    role: "Ass. Project Manager & Interior Designer",
    phone: "94401 33003",
    email: "deviconsultancyofficial@gmail.com",
    image: "/revanth.jpg",
  },
];

// 1. HOME Slides & Stats
export const heroStats = [
  { value: "26+", label: "Years Experience" },
  { value: "350+", label: "Projects Completed" },
  { value: "25+ Lakh", label: "Sq Ft Executed" },
  { value: "100%", label: "Structural Precision" },
  { value: "99%", label: "Client Satisfaction" },
];

export const slides = [
  {
    image: hero1,
    eyebrow: "Quality Construction & Infrastructure",
    titlePrefix: "Engineering",
    titleAccent: "Excellence.",
    quote:
      "Delivering world-class construction consultancy, architectural design & structural engineering with 26+ years of turnkey project experience across India.",
  },
  {
    image: hero2,
    eyebrow: "Precision Structural Engineering",
    titlePrefix: "Building",
    titleAccent: "Trust & Safety.",
    quote:
      "Mastering innovative architectural concepts, rigorous quality inspections, and sustainable infrastructure built to endure for generations.",
  },
  {
    image: hero3,
    eyebrow: "Comprehensive Turnkey Solutions",
    titlePrefix: "Designing",
    titleAccent: "Tomorrow.",
    quote:
      "Transforming complex civil engineering concepts into landmark villas, commercial complexes, hospitals, and institutional edifices.",
  },
];

// 2. ABOUT US
export const aboutData = {
  establishedYear: 2000,
  aboutUs:
    "We operate with belief that everyone deserves a better life. Devi Consultancy has been serving people in the field of construction for two decades. we are one of the leading construction firms in Karimnagar. Our peerless expertise in developing great ideas into the marvellous property as per the client's requirements has gained recognition across Telangana. DEVI Consultancy has a proven track record of property performance and client satisfaction. We design our projects to cater to individual and institutional buyers.\n\nOver the years, Devi consultancy has made a mark with Residential buildings and Commercial Property construction. Our properties are appreciated for adhering to quality, innovation, and environmental laws. Delivering projects on time and within an established budget is key to the company's success. It gives us great honour and immense pleasure to welcome you.",
  aboutUsParagraphs: [
    "We operate with belief that everyone deserves a better life. Devi Consultancy has been serving people in the field of construction for two decades. we are one of the leading construction firms in Karimnagar. Our peerless expertise in developing great ideas into the marvellous property as per the client's requirements has gained recognition across Telangana. DEVI Consultancy has a proven track record of property performance and client satisfaction. We design our projects to cater to individual and institutional buyers.",
    "Over the years, Devi consultancy has made a mark with Residential buildings and Commercial Property construction. Our properties are appreciated for adhering to quality, innovation, and environmental laws. Delivering projects on time and within an established budget is key to the company's success. It gives us great honour and immense pleasure to welcome you.",
  ],
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
    id: "service-architectural-modeling",
    icon: "DraftingCompass",
    title: "Architectural Modeling",
    text: "Comprehensive 2D & 3D architectural models providing precise spatial planning and visual realism for your vision.",
    image: villa,
    points: [
      "2D & 3D Architectural CAD/BIM Plans",
      "Photorealistic Exterior & Interior Elevations",
      "Vasthu Compliant Spatial Floor Layouts",
      "Municipal Corporation Sanction Drawings",
    ],
    detailedText:
      "Our architectural modeling services combine creative brilliance with structural practicality. Utilizing modern CAD and Building Information Modeling (BIM) platforms, we craft immersive, precise 2D & 3D architectural plans, dynamic sun-path analysis, and photorealistic renderings ensuring complete statutory compliance and breathtaking aesthetic elegance.",
    deliverables: [
      "Full architectural set (working drawings, floor plans, elevations & sections)",
      "High-resolution 3D photorealistic exterior & interior views",
      "Vasthu-compliant layout optimizations for residential and commercial spaces",
      "Ready-to-submit municipal authority building sanction documentation",
    ],
  },
  {
    id: "service-structural-design",
    icon: "Building2",
    title: "Structural Design",
    text: "Safe, robust, and cost-effective structural engineering designs tailored for long-lasting structural integrity.",
    image: commercial,
    points: [
      "Earthquake-Resistant Designs (IS 1893 & IS 456)",
      "Advanced STAAD.Pro & ETABS Structural Analysis",
      "Complete Column, Beam & Footing Detailing",
      "Foundation Design Based on Soil Load Capacity",
    ],
    detailedText:
      "DEVI CONSULTANCY specializes in robust, high-performance structural engineering frameworks that strictly adhere to Indian Standard (IS) codes and National Building Codes (NBC). Through finite element analysis, 3D structural modeling, and rigorous seismic simulations, we deliver designs optimized for strength, safety, longevity, and material economy.",
    deliverables: [
      "Certified structural design calculations and stability reports",
      "Comprehensive reinforcement detailing (footings, columns, beams, slabs & staircases)",
      "Accurate Bar Bending Schedules (BBS) to minimize on-site steel wastage",
      "Periodic on-site structural auditing and reinforcement placement verification",
    ],
  },
  {
    id: "service-interior-exterior-designs",
    icon: "Layers",
    title: "Interior & Exterior Designs",
    text: "Aesthetic and functional interior and exterior design solutions elevating everyday spaces.",
    image: hero3,
    points: [
      "Bespoke Space Planning & Functional Zoning",
      "Designer False Ceiling & Ambient Lighting Plans",
      "Contemporary Facade Elevation & Cladding Finishes",
      "Premium Material & Hardware Specifications",
    ],
    detailedText:
      "Transforming living and working spaces into captivating works of art, our interior and exterior design division harmonizes ergonomic functionality with modern aesthetics. We develop tailored spatial layouts, custom false ceiling concepts, energy-efficient lighting schemes, and durable facade treatments that elevate luxury and comfort.",
    deliverables: [
      "360-degree 3D interior design visualizations and material mood boards",
      "Coordinated false ceiling, electrical, plumbing, and HVAC schematics",
      "Custom joinery, modular wardrobe, and kitchen cabinetry details",
      "Facade styling, weather-resistant exterior cladding, and landscape integration",
    ],
  },
  {
    id: "service-bank-estimation-valuation",
    icon: "FileSpreadsheet",
    title: "Bank Estimation & Valuation",
    text: "Accurate property valuations, detailed cost estimations, and recognized documentation for bank loans.",
    image: industrial,
    points: [
      "IBBI & Govt Registered Certified Valuation Reports",
      "Detailed Stage-Wise Construction Estimates (BOQ)",
      "Approved Documentation for Bank Loans & Mortgages",
      "Fair Market Value & Capital Gains Assessment",
    ],
    detailedText:
      "Headed by certified structural engineers and IBBI Registered Valuers, our valuation division provides authoritative, credible valuation reports and cost estimates accepted by all major nationalized, private banks, housing finance corporations (HFCs), and legal authorities across Telangana and India.",
    deliverables: [
      "Official certified valuation certificates conforming to Indian Accounting Standards",
      "Comprehensive Bill of Quantities (BOQ) with detailed rate analysis",
      "Stage-wise progress inspection certificates for loan disbursement",
      "Fair market value, realizable value, and distressed sale value assessments",
    ],
  },
  {
    id: "service-pre-construction-planning",
    icon: "ClipboardCheck",
    title: "Pre-Construction Planning",
    text: "Feasibility analysis, budgeting, scheduling, and regulatory approvals for a seamless project launch.",
    image: construction,
    points: [
      "Topographical Site Feasibility & Soil Test Review",
      "DTCP & Municipal Statutory Approval Liaison",
      "Project Budget Optimization & Bill of Quantities",
      "Construction Milestones & Material Procurement Schedule",
    ],
    detailedText:
      "A successful construction project begins with thorough, meticulous pre-construction planning. We evaluate site topography, geotechnical reports, municipal guidelines, and supply chain timelines to eliminate risk, control costs, and establish clear execution milestones before groundbreaking.",
    deliverables: [
      "Complete site feasibility and technical evaluation report",
      "Itemized master budget and procurement cash-flow schedule",
      "Milestone-based project timeline (Gantt chart) for turnkey execution",
      "Comprehensive on-site quality control and construction safety guidelines",
    ],
  },
  {
    id: "service-construction-management",
    icon: "HardHat",
    title: "Construction Management",
    text: "Construction management is the process of planning, coordinating, and providing monitoring and controlling of a construction project.",
    image: construction,
    points: [
      "End-to-End Project Scheduling & Milestone Tracking",
      "On-Site Quality Assurance & Material Verification",
      "Contractor & Vendor Coordination with Budget Control",
      "Comprehensive Daily & Weekly Site Progress Audits",
    ],
    detailedText:
      "Construction management is the process of planning, coordinating, and providing monitoring and controlling of a construction project. At DEVI CONSULTANCY, our experienced project managers oversee every stage of development—from resource allocation and contractor supervision to rigorous quality inspections—ensuring seamless project delivery on time and within budget.",
    deliverables: [
      "Detailed construction master schedule and critical path analysis",
      "Daily and weekly site supervision logs and milestone reporting",
      "Rigorous quality control checklists and material test verification",
      "Contractor billing review, cost control, and statutory safety oversight",
    ],
  },
  {
    id: "service-surveying",
    icon: "Compass",
    title: "Surveying",
    text: "Accurate land surveying, contour mapping, boundary demarcation, leveling, and topographical surveys using modern electronic total stations.",
    image: industrial,
    points: [
      "Electronic Total Station (ETS) & Digital Land Surveying",
      "Topographical Mapping & Contour Level Profiling",
      "Precise Boundary Demarcation & Area Calculation",
      "Road, Pipeline & Infrastructure Alignment Surveys",
    ],
    detailedText:
      "Our professional surveying services provide high-precision geospatial data essential for architectural planning and structural foundation design. Utilizing state-of-the-art Electronic Total Stations (ETS), digital levels, and GPS positioning, we deliver accurate topographical mapping, plot demarcation, and contour profiling across Telangana.",
    deliverables: [
      "High-precision CAD survey drawings with contour intervals and spot levels",
      "Certified land demarcation and boundary verification maps",
      "Earthwork volume calculations for cut and fill optimization",
      "Geo-referenced layout stakeout coordinates for construction alignment",
    ],
  },
  {
    id: "service-turnkey-services",
    icon: "KeyRound",
    title: "Turnkey Services",
    text: "Construction contracts under which our team plans, designs, builds, and makes any other necessary adjustments so the project is ready for use by a specified date and at an agreed price.",
    image: hero3,
    points: [
      "Single-Point Accountability from Concept to Handover",
      "Fixed-Price & Milestone-Based Transparent Contracts",
      "Integrated Architectural, Structural & MEP Execution",
      "Ready-to-Move Finished Spaces Delivered on Schedule",
    ],
    detailedText:
      "Construction contracts under which a contractor plans, designs, builds, and makes any other necessary adjustments so the project is ready for use by a specified date and at an agreed price. Under our turnkey construction solutions, DEVI CONSULTANCY handles the complete lifecycle—architectural drawings, structural engineering, statutory approvals, civil construction, interior finishing, and final commissioning.",
    deliverables: [
      "Comprehensive turnkey contract with guaranteed completion timelines",
      "All-inclusive procurement and execution of civil, electrical, and plumbing works",
      "Premium interior and exterior finishes as per approved specifications",
      "Complete statutory clearances, test reports, and final key handover",
    ],
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
