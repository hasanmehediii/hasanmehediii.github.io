import { Project, EducationItem, SkillItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: 'BSc in Computer Science and Engineering',
    institution: 'University of Dhaka',
    year: '2023 - Present',
    result: 'CGPA: XX/4.00'
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Tongi Govt College',
    year: '2022',
    result: 'Result: 5.00/5.00'
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'AKM School',
    year: '2020',
    result: 'Result: 5.00/5.00'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'JavaScript', icon: '/assets/logos/javascript.svg', category: 'language' },
  { name: 'TypeScript', icon: '/assets/logos/typescript.png', category: 'language' },
  { name: 'Java', icon: '/assets/logos/java.png', category: 'language' },
  { name: 'Python', icon: '/assets/logos/python.png', category: 'language' },
  { name: 'Kotlin', icon: '/assets/logos/Kotlin.png', category: 'language' },
  { name: 'Go', category: 'language' },
  { name: 'HTML5', icon: '/assets/logos/html5.svg', category: 'frontend' },
  { name: 'CSS3', icon: '/assets/logos/css3.svg', category: 'frontend' },
  { name: 'React', icon: '/assets/logos/react.svg', category: 'frontend' },
  { name: 'Next.js', icon: '/assets/logos/nextjs.svg', category: 'frontend' },
  { name: 'Flutter', icon: '/assets/logos/flutter.png', category: 'mobile' },
  { name: 'Node.js', icon: '/assets/logos/Node.js.png', category: 'backend' },
  { name: 'Express', icon: '/assets/logos/Express.png', category: 'backend' },
  { name: 'FastAPI', icon: '/assets/logos/FastAPI.png', category: 'backend' },
  { name: 'Flask', category: 'backend' },
  { name: 'Redis', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', icon: '/assets/logos/PostgresSQL.png', category: 'database' },
  { name: 'MongoDB', icon: '/assets/logos/mongodb.png', category: 'database' },
  { name: 'Git', icon: '/assets/logos/git.svg', category: 'tool' },
  { name: 'GitHub', icon: '/assets/logos/github.svg', category: 'tool' },
  { name: 'Docker', icon: '/assets/logos/Docker.png', category: 'tool' },
  { name: 'Postman', category: 'tool' },
];

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "LabGuard",
    description: "Run LabGuard on an instructor Ubuntu laptop, connect participating devices to a reachable shared network, and use managed setup scripts to route supported student traffic through LabGuard DNS and proxy.",
    subDescription: [
      "Developed for Prevneting Unauthorized Access to Lab Computers.",
    ],
    href: "https://www.github.com/hasanmehediii/LabGuard",
    liveLink: "#",
    logo: "/assets/projects/labguard-logo.png",
    image: "/assets/projects/labguard.jfif",
    tags: [
      { id: 1, name: "Go" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "dns-proxy" },
    ],
  },
  {
    id: 2,
    title: "CodeLens",
    description: "Automated Intelligence for Better Code: A comprehensive developer code review platform.",
    subDescription: [
      "CodeLens is a developer-focused code review assistant that runs static analysis, security checks, complexity analysis, and optional AI review over code submissions. It surfaces findings directly in a Monaco-powered editor, tracks developer progress over time, and awards badges based on review results.",
    ],
    href: "https://www.github.com/hasanmehediii/CodeLens",
    liveLink: "https://codelens-mehedi.vercel.app",
    logo: "/assets/projects/codelens-logo.png",
    image: "/assets/projects/codelens.png",
    tags: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "Monaco Editor" },
    ],
  },
  {
    id: 3,
    title: "CleanBD",
    description: "A comprehensive waste management platform for citizens, collectors, and mayors to manage waste collection, complaints, and analytics in Bangladesh.",
    subDescription: [
      "Developed for Bangladesh Government Waste Management Project.",
    ],
    href: "https://www.github.com/hasanmehediii/CleanBD",
    liveLink: "https://cleanbd.vercel.app",
    logo: "/assets/projects/cleanbd-logo.png",
    image: "/assets/projects/cleanbd.png",
    tags: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "Gemini-llm" },
    ],
  },
  {
    id: 4,
    title: "ShurokkhaBD",
    description: "A comprehensive crime reporting and management platform for Bangladesh.",
    subDescription: [
      "Shurokkha Bangladesh is a full-stack web application designed to empower citizens to report crimes anonymously or with identity, enable police officers to manage and investigate cases efficiently, and provide administrators with oversight and control over the entire system.",
    ],
    href: "https://github.com/hasanmehediii/Shurokkha_Bangladesh",
    liveLink: "https://shurokkha-bd.vercel.app",
    logo: "/assets/projects/shurokkha-logo.png",
    image: "/assets/projects/shurokkha.jpeg",
    tags: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "JavaScript" },
    ],
  },
  {
    id: 5,
    title: "NutriSastho-AI",
    description: "NutriShastho AI is a Bangladesh-focused health and nutrition assistant built by 99BugsInCode. It connects household food budget, Bangladeshi meal planning, basic health monitoring, symptom risk checks, and nearby care guidance in one explainable web app.",
    subDescription: [
      "The project is designed as decision support, not a doctor replacement. Rule-based safety checks are used first, and AI-generated content is framed as guidance rather than diagnosis.",
    ],
    href: "https://github.com/hasanmehediii/NutriSastho-AI",
    liveLink: "https://nutri-sastho-ai.vercel.app",
    logo: "/assets/projects/nutri-sastho-ai-logo.png",
    image: "/assets/projects/nutri-sastho-ai.png",
    tags: [
      { id: 1, name: "Web Scraping" },
      { id: 2, name: "MCP Server" },
      { id: 3, name: "RAG Pipeline" },
    ],
  },
  {
    id: 6,
    title: "KrishiSheba",
    description: "KrishiSheba is a Flutter + Firebase based mobile application designed to empower Bangladeshi farmers with modern digital tools.",
    subDescription: [
      "It includes a marketplace, government notices, user profiles, and an AI-powered Crop Doctor (in Bangla) using Google Gemini.",
    ],
    href: "https://www.github.com/hasanmehediii/KrishiSheba",
    liveLink: "#",
    logo: "/assets/projects/krishisheba-logo.png",
    image: "/assets/projects/krishisheba.png",
    tags: [
      { id: 1, name: "Flutter" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "Generative AI" },
    ],
  },
  {
    id: 7,
    title: "CacheCaught",
    description: "A simple smart proxy server with caching capabilities and a web dashboard to monitor the cache.",
    subDescription: [
      "Developed for Computer Networks Course Project.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-3111-Project",
    liveLink: "#",
    logo: "/assets/projects/proxy.png",
    image: "/assets/projects/CacheCaught.png",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "Flask" },
      { id: 3, name: "Redis" },
    ],
  },
  {
    id: 8,
    title: "LangMastero",
    description: "A cross-platform mobile application for learning languages, built with Flutter, FastAPI, and MongoDB.",
    subDescription: [
      "Developed for learning language with interactive lessons and quizzes.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-2216-Project",
    liveLink: "#",
    logo: "/assets/projects/language.png",
    image: "/assets/projects/LangMastero.png",
    tags: [
      { id: 1, name: "Flutter" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "FastAPI" },
    ],
  },
  {
    id: 9,
    title: "Firefighter Robot Car",
    description: "An autonomous fire-fighting robot car built with ESP32, featuring automatic flame detection, tracking, and extinguishing capabilities.",
    subDescription: [
      "This smart robot car mainly automatically finds and fights fires using flame sensors and a water pump system until it doesn't detect any fire around it.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-3116-Project",
    liveLink: "https://github.com/hasanmehediii/CSE-3116-Project/blob/main/firefighter.gif",
    logo: "/assets/projects/esp32.png",
    image: "/assets/projects/Firefightercar.png",
    tags: [
      { id: 1, name: "ESP32 Microcontroller" },
      { id: 2, name: "L298N Motor Driver" },
      { id: 3, name: "Flame Sensor" },
    ],
  },
  {
    id: 10,
    title: "Goriber Gari",
    description: "A Full Stack E-commerce based web platform to purchase car and manage a brand shop.",
    subDescription: [
      "Developed a full-stack e-commerce web application using React for the frontend, Node.js and Express for the backend, and MongoDB for the database.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-2211-Project",
    liveLink: "https://goribergari.vercel.app",
    logo: "/assets/projects/goribergari-logo.png",
    image: "/assets/projects/goribergari.png",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Tailwind" },
    ],
  },
  {
    id: 11,
    title: "Khaikhai",
    description: "KhaiKhai is a smart meal planning platform designed for students and busy individuals to manage their daily food choices effectively.",
    subDescription: [
      "KhaiKhai is a smart meal planning platform designed to help students and busy individuals manage their daily food choices effectively. Its mainly a project for the Software Engineering Lab Course.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-3112-Project",
    liveLink: "https://khaikhai.vercel.app/",
    logo: "/assets/projects/khaikhai-logo.png",
    image: "/assets/projects/khaikhai.png",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "PostgreSQL" },
    ],
  },
  {
    id: 12,
    title: "Movie Ticket System",
    description: "A desktop application for booking movie tickets, built with Java and JavaFX.",
    subDescription: [
      "OOP Course Project simulation.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-2112-Project",
    liveLink: "#",
    logo: "/assets/projects/movies.png",
    image: "/assets/projects/2.png",
    tags: [
      { id: 1, name: "Java" },
      { id: 2, name: "JavaFX" },
    ],
  },
  {
    id: 13,
    title: "Snake: Desert King",
    description: "A classic snake game with a twist, developed using C++ and SDL2.",
    subDescription: [
      "Scoring system available to track players.",
    ],
    href: "https://github.com/hasanmehediii/CSE-1211-Project",
    liveLink: "#",
    logo: "/assets/projects/snake.png",
    image: "/assets/projects/3.png",
    tags: [
      { id: 1, name: "C++" },
      { id: 2, name: "SDL2" },
    ],
  }
];
