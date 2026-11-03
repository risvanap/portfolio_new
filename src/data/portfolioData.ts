import { Project, SkillCategory, InterestItem, EducationItem, ThemeAccent } from '../types';

export const PERSONAL_INFO = {
  name: "RISHVAN A P",
  shortName: "RISVAN",
  title: "Ethical Hacker | Graphic Designer | Video Editor | Digital Creator",
  subtitle: "Ethical Hacker • Graphic Designer • Video Editor",
  location: "Kerala, India",
  email: "risvanap28@gmail.com",
  phone: "+91 8086380373",
  instagram: "https://www.instagram.com/risvan_ap/",
  instagramHandle: "@risvan_ap",
  github: "https://github.com/risvanap",
  linkedin: "https://linkedin.com/",
  status: "Available for Projects & Collaboration",
  bio: "I am a technology enthusiast and creative digital professional interested in cybersecurity, ethical hacking, graphic design, video editing, and web technologies. I enjoy combining technical knowledge with creative thinking to develop useful digital solutions and visually engaging experiences. My goal is to continuously improve my technical and creative skills while working on meaningful projects."
};

export const THEME_ACCENTS: ThemeAccent[] = [
  {
    name: "Cyber Lime",
    accent: "#B8FF65",
    accentRgb: "184, 255, 101",
    glow: "rgba(184, 255, 101, 0.4)",
    muted: "rgba(184, 255, 101, 0.12)",
    border: "rgba(184, 255, 101, 0.3)"
  },
  {
    name: "Electric Blue",
    accent: "#0056FF",
    accentRgb: "0, 86, 255",
    glow: "rgba(0, 86, 255, 0.4)",
    muted: "rgba(0, 86, 255, 0.12)",
    border: "rgba(0, 86, 255, 0.3)"
  },
  {
    name: "Violet Glow",
    accent: "#8B5CF6",
    accentRgb: "139, 92, 246",
    glow: "rgba(139, 92, 246, 0.4)",
    muted: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    name: "Emerald Green",
    accent: "#10B981",
    accentRgb: "16, 185, 129",
    glow: "rgba(16, 185, 129, 0.4)",
    muted: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    name: "Crimson Rose",
    accent: "#F43F5E",
    accentRgb: "244, 63, 94",
    glow: "rgba(244, 63, 94, 0.4)",
    muted: "rgba(244, 63, 94, 0.12)",
    border: "rgba(244, 63, 94, 0.3)"
  }
];

export const ABOUT_CARDS = [
  {
    number: "01",
    title: "CYBERSECURITY",
    icon: "fa-shield-halved",
    description: "Learning ethical hacking, security fundamentals, vulnerability assessment, and practical cybersecurity concepts."
  },
  {
    number: "02",
    title: "CREATIVE DESIGN",
    icon: "fa-pen-nib",
    description: "Creating posters, social media graphics, brand visual identity, and professional visual designs with clean typography."
  },
  {
    number: "03",
    title: "VIDEO EDITING",
    icon: "fa-film",
    description: "Editing videos and creating engaging digital content, reels, motion graphics, and cinematic storytelling."
  },
  {
    number: "04",
    title: "TECHNOLOGY",
    icon: "fa-microchip",
    description: "Exploring computer hardware, networking, web technologies, server diagnostics, and digital service solutions."
  }
];

export const STATS = [
  { value: "05+", label: "PROJECTS & CONCEPTS" },
  { value: "02+", label: "YEARS TECH JOURNEY" },
  { value: "15+", label: "TOOLS & TECHNOLOGIES" },
  { value: "100%", label: "DEDICATION & CURIOSITY" }
];

export const LANGUAGES = [
  { name: "English", level: "Fluent", width: "90%" },
  { name: "Malayalam", level: "Native", width: "100%" },
  { name: "Hindi", level: "Fluent", width: "85%" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cybersecurity",
    icon: "fa-user-secret",
    description: "Network protection, defensive fundamentals, and penetration testing concepts",
    skills: [
      "Ethical Hacking",
      "Cybersecurity Fundamentals",
      "Network Security",
      "Linux Fundamentals",
      "Security Testing",
      "Vulnerability Scanning"
    ]
  },
  {
    title: "Design & Creative",
    icon: "fa-bezier-curve",
    description: "High-impact visual identity, marketing collaterals, and layout design",
    skills: [
      "Adobe Photoshop",
      "Canva Pro",
      "Graphic Design",
      "Poster Design",
      "Social Media Design",
      "Typography & Layout"
    ]
  },
  {
    title: "Video Editing",
    icon: "fa-scissors",
    description: "Motion pacing, color grading, social-first reels, and audio sequencing",
    skills: [
      "CapCut",
      "DaVinci Resolve",
      "Video Editing",
      "Reels & Shorts Editing",
      "Cinematic Transitions",
      "Sound Design"
    ]
  },
  {
    title: "Web Development",
    icon: "fa-code",
    description: "Modern web architecture, responsive frameworks, and backend integration",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Angular",
      "Ionic",
      "Node.js",
      "Django"
    ]
  },
  {
    title: "Tools & Ecosystem",
    icon: "fa-screwdriver-wrench",
    description: "Daily development, design, versioning, and AI-accelerated workflows",
    skills: [
      "Git",
      "GitHub",
      "Google Antigravity",
      "VS Code",
      "Figma",
      "Command Line"
    ]
  },
  {
    title: "Hardware & Networking",
    icon: "fa-network-wired",
    description: "Physical machine assembly, routing protocols, and hardware diagnostics",
    skills: [
      "Computer Hardware",
      "Hardware Diagnostics",
      "Network Configuration",
      "LAN / WAN Setup",
      "OS Troubleshooting",
      "System Maintenance"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "life-drop",
    title: "Life Drop",
    subtitle: "Blood Donor Finder Application",
    status: "In Development",
    category: "Web App",
    description: "A vital web application concept engineered to connect individuals in critical need with compatible nearby blood donors using real-time blood group matching and location filters.",
    longDescription: "Life Drop is built with a life-saving mission: simplifying urgent blood donor requests. The platform allows registered users to search verified blood donors based on exact blood group (A+, B+, O+, AB+, etc.) and immediate geographic radius. Built with an Angular frontend, responsive Ionic mobile-ready framework, and scalable Node.js / Django services.",
    technologies: ["Angular", "Ionic", "Node.js", "Django", "Geolocation API"],
    features: [
      "Blood Group compatibility matching algorithm",
      "Location-based proximity search & radius filter",
      "Urgent emergency broadcast notifications",
      "Direct verified contact between donor and recipient"
    ],
    imageUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Modern Digital Shopping Experience",
    status: "In Development",
    category: "Web App",
    description: "A comprehensive e-commerce application designed for seamless online shopping, intuitive product catalog browsing, robust cart workflows, and secure order processing.",
    longDescription: "This modern retail platform prioritizes clean typography, responsive user interactions, and robust backend product management. Incorporating PostgreSQL for relational product inventory and transactional data integrity, alongside an Angular and Ionic user interface powered by Node.js and Django APIs.",
    technologies: ["Angular", "Ionic", "Node.js", "Django", "PostgreSQL"],
    features: [
      "Dynamic catalog filtering and category navigation",
      "Real-time cart calculation and secure checkout flow",
      "Admin inventory management and order status tracking",
      "Relational database architecture powered by PostgreSQL"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "digital-services",
    title: "Digital Services Portal",
    subtitle: "Online Citizen & Documentation Assistance",
    status: "Completed",
    category: "Web App",
    description: "A streamlined digital service web platform concept created to provide organized assistance for online applications, government registrations, certificate requests, and document verification.",
    longDescription: "Conceived and designed to solve common hurdles citizens face when navigating complex online portals. Features a clean, accessible interface guiding users step-by-step through application requirements, document checklists, and submission guidance.",
    technologies: ["Web Development", "UI/UX Design", "JavaScript", "HTML/CSS", "Form Automation"],
    features: [
      "Categorized service directory (ID cards, certificates, permits)",
      "Interactive requirement checklist prior to application",
      "Responsive, clean mobile layout for universal accessibility",
      "Application query status tracker"
    ],
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    completionDate: "2024"
  },
  {
    id: "creative-poster-design",
    title: "Creative Poster Design",
    subtitle: "Visual Arts & Promotional Typography",
    status: "Completed",
    category: "Design & Creative",
    description: "A curated design portfolio of promotional event posters, brutalist typography experiments, brand advertisements, and social media visuals with strong visual hierarchy.",
    longDescription: "Graphic design is an art of intentional communication. This body of work focuses on commanding viewer attention using bold contrasting palettes, geometric grid alignments, modern typography, and high-energy visual textures crafted in Adobe Photoshop and Canva.",
    technologies: ["Adobe Photoshop", "Canva Pro", "Visual Hierarchy", "Typography", "Branding"],
    features: [
      "Striking typographical compositions and custom title treatments",
      "Modern color grading and texture overlays",
      "High-resolution print and digital aspect ratios (9:16, 4:5, 1:1)",
      "Consistent branding across campaigns"
    ],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    completionDate: "2023 - 2024"
  },
  {
    id: "video-editing-showcase",
    title: "Video Editing & Motion",
    subtitle: "Cinematic Reels & Social Content",
    status: "Completed",
    category: "Video Production",
    description: "A showcase of dynamic short-form edits, cinematic transitions, color-graded footage, and audio-synced promotional videos engineered for high audience engagement.",
    longDescription: "Creating content that holds viewer attention in fast-paced digital feeds. Using CapCut and DaVinci Resolve to craft rhythmic beat-synced cuts, subtle sound design, dynamic zooms, clean subtitle typography, and professional color adjustments.",
    technologies: ["CapCut", "DaVinci Resolve", "Color Grading", "Audio Design", "Motion Pacing"],
    features: [
      "Precision beat-synced cutting and pacing",
      "Film emulation and custom color LUT grading",
      "Engaging kinetic on-screen caption styling",
      "Sound effects and spatial audio layering"
    ],
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    completionDate: "2023 - 2024"
  }
];

export const INTERESTS: InterestItem[] = [
  {
    id: "cyber-research",
    title: "Cybersecurity Research",
    category: "Security & Labs",
    description: "Investigating vulnerability methodologies, network traffic analysis, packet inspection, and studying penetration testing defense strategies.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    tags: ["Threat Research", "Network Defense", "PenTesting"]
  },
  {
    id: "poster-design",
    title: "Creative Poster Design",
    category: "Graphic Arts",
    description: "Exploring modernist grid systems, Swiss typography, brutalist aesthetics, and experimental poster layouts that provoke curiosity.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tags: ["Swiss Style", "Grid Theory", "Brutalism"]
  },
  {
    id: "video-motion",
    title: "Video Editing & Cinema",
    category: "Motion & Media",
    description: "Deconstructing cinematic visual storytelling, color theory, psychological pacing, and sound design that moves the viewer.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    tags: ["Color Science", "Pacing", "Soundscapes"]
  },
  {
    id: "hardware-systems",
    title: "Hardware Exploration",
    category: "Architecture & Labs",
    description: "Hands-on computer hardware assembly, thermal optimization, component benchmarking, and network router configurations.",
    imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop",
    tags: ["Hardware Mods", "Thermals", "Networking"]
  },
  {
    id: "web-ui",
    title: "Web Development",
    category: "Interactive Tech",
    description: "Experimenting with creative interactions, micro-animations, accessible interfaces, and fluid user experiences on the modern web.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["Frontend", "Interactions", "Creative Code"]
  },
  {
    id: "digital-creation",
    title: "Digital Creativity",
    category: "Brand & Content",
    description: "Brainstorming fresh content formats, social media strategies, digital services, and building meaningful online platforms.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    tags: ["Content Strategy", "Digital Media", "Ideas"]
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    title: "Ethical Hacking & Cybersecurity",
    institution: "Avodha",
    year: "2023",
    description: "Comprehensive training in ethical hacking methodologies, network vulnerabilities, penetration testing foundations, Linux security, and reconnaissance.",
    credentialType: "Certification",
    badge: "Completed"
  },
  {
    title: "Computer Hardware & Networking",
    institution: "Bites",
    year: "2018",
    description: "Practical engineering training in computer hardware diagnostics, PC assembly, motherboard component testing, LAN/WAN architecture, router configuration, and system maintenance.",
    credentialType: "Diploma",
    badge: "Completed"
  },
  {
    title: "Advanced Security & Modern Web Technologies",
    institution: "Continuous Professional Progression",
    year: "Ongoing",
    description: "Actively studying modern defensive cybersecurity, full-stack application security, and advanced digital media production.",
    credentialType: "Ongoing",
    badge: "In Progress"
  }
];

