export const profile = {
  name: "Umme Aeman Sajid",
  role: "Software Engineer",
  email: "ummeaeman.com@gmail.com",
  github: "https://github.com/aemanmn",
  linkedin: "linkedin.com/in/umme-aeman/",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  lede: "I build reliable web apps with React, Node.js, and Python, while building practical tools powered by AI and LLMs.",
  paragraphs: [
    "Having worked as both a frontend developer and a developer trainee, I focus on writing clean React components, building fast APIs, and collaborating smoothly with team members in Agile setups. So far, I've built full-stack software ranging from hospital systems and online stores to custom document search engines.",
    "Lately, I've been focusing heavily on Python and FastAPI to build AI-driven applications, including RAG systems for document lookup and smart resume screeners.",
  ],
  quiet:
    "Always looking to build simple, fast, and helpful web applications that solve real problems.",
};

export const experience = [
  {
    when: "Aug 2024 to 2025",
    title: "Frontend Developer ",
    org: "Internncraft",
    points: [
      "Built and deployed more than 10 reusable React components, which shortened the time needed to build new features.",
      "Added structured component testing and debugging steps to make the application more stable.",
      "Worked with UI/UX designers and backend engineers to deliver responsive interfaces that matched the designs.",
      "Took part in code reviews and gave feedback on maintainability and best practices.",
    ],
  },
  {
    when: "Apr 2024 to Jun 2024",
    title: "Trainee Web Developer",
    org: "Erozgar Online",
    points: [
      "Helped build React web applications, including feature work and bug fixes.",
      "Joined standups, sprint planning and retrospectives as part of an Agile team.",
      "Debugged UI issues together with senior developers, which improved overall code quality.",
    ],
  },
];

export const projects = [
  {
    title: "Hospital Management System",
    description:
      "A responsive system for booking appointments, handling billing and managing hospital staff. Data moves between the React interface and the Express server through a REST API, and the interface is split into modular components.",
    stack: "React.js, Node.js, Express.js, REST API",
    covers: "Appointments, billing, staff management",
    live: "https://hospital-management-system-izac.vercel.app/",
    source: "https://github.com/aemanmn/Hospital_Management_System", 
  },
  {
    title: "Fashion Lamp",
    description:
      "A responsive online store with product listings, a shopping cart, user sign-in, session handling and order processing. The backend is written in PHP with an SQL database.",
    stack: "HTML, CSS, JavaScript, PHP, SQL",
    covers: "Product listing, cart, authentication, orders",
    live: "https://ecommerce-website-fashion-lamp.vercel.app/",
    source: "https://github.com/aemanmn/EcommerceWebsite-FashionLamp", 
  },
  {
    title: "AI Resume & Analyzer",
    description: "An interactive web application that evaluates resume compatibility against job descriptions. It provides a real-time match score, identifies missing key technical skills, and generates actionable AI-powered suggestions for improvement.",
    stack: "React, Node.js, Express, Gemini API, Tailwind CSS",
    covers: "ATS Scoring, Keyword Matching, Natural Language Processing, Resume Optimization",
    // live: "https://your-resume-analyzer-live-link.com", 
    source: "https://github.com/aemanmn/Interview-AI", 
  },
  {
    title: "RAG Document Information Retrieval System",
    description: "A Retrieval-Augmented Generation (RAG) system enabling conversational Q&A over PDF documents. Uses Python & FastAPI to chunk documents, generate vector embeddings, and retrieve relevant context chunks for accurate, grounded LLM responses.",
    stack: "React, Python, FastAPI, LangChain, GroqAI",
    covers: "Vector Search, Document Chunking, Semantic Embeddings, Async Endpoints, Contextual Q&A",
    // live: "https://your-rag-demo-link.com",
    // source: "https://github.com/yourusername/rag-document-retrieval",
  },
];

export const skills = [
  { label: "MERN stack", items: "MongoDB, Express.js, React.js, Node.js" },
  { label: "Languages", items: "JavaScript (ES6+), Python, HTML5, CSS3, SQL" },
  { label: "Python and AI", items: "Python, FastAPI, AI engineering" },
  { label: "Libraries", items: "React Router, Bootstrap, Tailwind CSS" },
  { label: "Tools", items: "Git, GitHub, VS Code, Chrome DevTools, npm" },
  {
    label: "Practices",
    items:
      "Responsive design with Flexbox and CSS Grid, REST API integration, state management, Agile and Scrum",
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "Government College University Faisalabad",
};
