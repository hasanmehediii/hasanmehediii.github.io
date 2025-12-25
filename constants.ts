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
  { name: 'Java', icon: 'java', category: 'language' },
  { name: 'Python', icon: 'python', category: 'language' },
  { name: 'JavaScript', icon: 'javascript', category: 'language' },
  { name: 'C++', icon: 'cpp', category: 'language' },
  { name: 'HTML5', icon: 'html', category: 'frontend' },
  { name: 'CSS3', icon: 'css', category: 'frontend' },
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'Node.js', icon: 'node', category: 'backend' },
  { name: 'MySQL', icon: 'mysql', category: 'backend' },
  { name: 'MongoDB', icon: 'mongo', category: 'backend' },
  { name: 'Git', icon: 'git', category: 'tool' },
  { name: 'GitHub', icon: 'github', category: 'tool' },
];

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "LangMastero",
    description: "A cross-platform mobile application for learning languages, built with Flutter, FastAPI, and MongoDB.",
    subDescription: [
      "Developed for learning language with interactive lessons and quizzes.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-2216-Project",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/langapp.jpg",
    tags: [
      { id: 1, name: "Flutter" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "FastAPI" },
    ],
  },
  {
    id: 2,
    title: "Goriber Gari",
    description: "A Full Stack E-commerce based web platform to purchase car and manage a brand shop.",
    subDescription: [
      "Developed a full-stack e-commerce web application using React for the frontend, Node.js and Express for the backend, and MongoDB for the database.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-2211-Project",
    liveLink: "https://goribergari.vercel.app/",
    logo: "",
    image: "/assets/projects/cardetail.png",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Tailwind" },
    ],
  },
  {
    id: 3,
    title: "LooterBank",
    description: "A secure and scalable banking application built with React, Node.js, Express, and MongoDB.",
    subDescription: [
      "Implemented features such as user authentication, account management, transaction processing, and fund transfers.",
    ],
    href: "https://www.github.com/hasanmehediii/LooterBank",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/looter.png",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 4,
    title: "BokbokNet",
    description: "A secure and scalable chatting and video calling application.",
    subDescription: [
      "Implemented features such as user authentication, real-time messaging, and video calls using the Stream API.",
    ],
    href: "https://github.com/hasanmehediii/BokbokNet",
    liveLink: "https://bokboknet.onrender.com",
    logo: "",
    image: "/assets/projects/mernchat.png",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 5,
    title: "Dentastic",
    description: "A Dental Care Service Platform built with NextJS and PostgreSQL.",
    subDescription: [
      "Appointment with Dentist and 24/7 AI Agent Support with modern authentication system.",
    ],
    href: "#",
    liveLink: "https://dentastic.vercel.app/",
    logo: "",
    image: "/assets/projects/dentastic.png",
    tags: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Docker" },
      { id: 4, name: "PostgreSQL" },
    ],
  },
  {
    id: 6,
    title: "Chatting Application",
    description: "A secure and scalable chatting application built with Flutter and Firebase.",
    subDescription: [
      "Developed a real-time chatting, voice and video call using Firebase and ZEEGOCLOUD",
    ],
    href: "#",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/chatapp.png",
    tags: [
      { id: 1, name: "Flutter" },
      { id: 2, name: "Dart" },
      { id: 3, name: "Firebase" },
    ],
  },
  {
    id: 7,
    title: "Car Fighting Game",
    description: "A 2D car fighting game developed using LibGDX and Java.",
    subDescription: [
      "Featuring dynamic gameplay and engaging graphics.",
    ],
    href: "https://www.github.com/hasanmehediii/LibGDX",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/1.png",
    tags: [
      { id: 1, name: "Java" },
      { id: 2, name: "LibGDX" },
    ],
  },
  {
    id: 8,
    title: "Movie Ticket System",
    description: "A desktop application for booking movie tickets, built with Java and JavaFX.",
    subDescription: [
      "OOP Course Project simulation.",
    ],
    href: "https://www.github.com/hasanmehediii/CSE-2112-Project",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/2.png",
    tags: [
      { id: 1, name: "Java" },
      { id: 2, name: "JavaFX" },
    ],
  },
  {
    id: 9,
    title: "Snake: Desert King",
    description: "A classic snake game with a twist, developed using C++ and SDL2.",
    subDescription: [
      "Scoring system available to track players.",
    ],
    href: "https://github.com/hasanmehediii/CSE-1211-Project",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/3.png",
    tags: [
      { id: 1, name: "C++" },
      { id: 2, name: "SDL2" },
    ],
  },
  {
    id: 10,
    title: "Weather App",
    description: "An android mobile application for weather forecasting.",
    subDescription: [
      "Built with Kotlin and WeatherAPI.",
    ],
    href: "https://github.com/hasanmehediii/Android_Project_WeatherApp",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/4.png",
    tags: [
      { id: 1, name: "Kotlin" },
      { id: 2, name: "Android" },
    ],
  },
  {
    id: 11,
    title: "Pygame Boxing",
    description: "A 2D boxing game developed using Pygame and Python.",
    subDescription: [
      "Dynamic gameplay and engaging graphics.",
    ],
    href: "https://github.com/hasanmehediii/Pygame_BoxingFight",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/8.png",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "Pygame" },
    ],
  },
  {
    id: 12,
    title: "Pygame PlaneWar",
    description: "A 2D Plane fight game developed using Pygame and Python.",
    subDescription: [
      "Destroy enemies in this classic shooter.",
    ],
    href: "https://github.com/hasanmehediii/Pygame_PlaneWar",
    liveLink: "#",
    logo: "",
    image: "/assets/projects/7.png",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "Pygame" },
    ],
  }
];