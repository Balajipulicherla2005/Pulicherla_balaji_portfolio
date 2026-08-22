export const portfolioData = {
  personal: {
    name: "Pulicherla Balaji",
    title: "Full-Stack Web & Mobile Application Developer",
    email: "balajipulicherla941@gmail.com",
    location: "Tirupati, Andhra Pradesh, India",
    linkedIn: "https://www.linkedin.com/in/pulicherla-balaji-6b2178337",
    github: "https://github.com/Balajipulicherla2005",
    summary: "B.Tech student specializing in Artificial Intelligence & Machine Learning, with hands-on experience in full-stack web and mobile application development. Passionate about transforming real-world challenges into practical, user-focused digital solutions and building reliable applications that create meaningful impact."
  },

  about: {
    paragraphs: [
      "I'm a Full-Stack Web & Mobile Application Developer and B.Tech student specializing in Artificial Intelligence & Machine Learning, passionate about turning real-world challenges into practical, user-focused digital solutions.",
      "I enjoy building meaningful applications that are intuitive, reliable, and designed around real user needs. I'm driven by curiosity, continuous learning, and the opportunity to transform ideas into impactful products while growing as a software developer."
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", category: "Frontend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5", category: "Frontend" },
      { name: "CSS3", category: "Frontend" }
    ],
    backend: [
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "REST APIs", category: "Backend" }
    ],
    database: [
      { name: "MySQL", category: "Database" },
      { name: "Firebase", category: "Database" },
      { name: "SQLite", category: "Database" }
    ],
    realtime: [
      { name: "Socket.io", category: "Real-time" },
      { name: "WebSocket", category: "Real-time" },
      { name: "Redis", category: "Real-time" }
    ],
    mobile: [
      { name: "Flutter", category: "Mobile" },
      { name: "Android", category: "Mobile" },
      { name: "iOS", category: "Mobile" }
    ],
    devops: [
      { name: "Docker", category: "DevOps" },
      { name: "GitHub Actions", category: "DevOps" },
      { name: "CI/CD Pipelines", category: "DevOps" }
    ],
    tools: [
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
      { name: "VS Code", category: "Tools" }
    ],
    ai: [
      { name: "AI/ML Integration", category: "AI/Specialized" }
    ]
  },

  experience: [
    {
      company: "SkillArion Development",
      position: "Full Stack Web Developer Intern",
      duration: "Apr 2026 - Jun 2026",
      location: "Remote",
      description: "Developed AI-powered campus management platform with role-based access control and administrative modules.",
      achievements: [
        "Implemented JWT authentication and role-based access control (RBAC)",
        "Built REST APIs for campus management system",
        "Developed AI exam generation feature",
        "Designed and optimized MySQL database schema",
        "Created responsive admin dashboard using React.js"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "FastAPI", "AI Integration"]
    },
    {
      company: "ApexPlanet Software Pvt Ltd",
      position: "App Developer Intern",
      duration: "Jun 2026 - Jul 2026",
      location: "Remote",
      description: "Built comprehensive Flutter application with AI-powered features and secure authentication.",
      achievements: [
        "Developed Flutter app with 10+ responsive screens",
        "Implemented Firebase Email/Password and Google Sign-In authentication",
        "Built ATS Resume Analyzer to evaluate resumes and provide ATS scores",
        "Created Resume Optimization feature with AI recommendations",
        "Developed Resume Battles comparison feature",
        "Built AI Interview Simulator generating questions from resumes",
        "Integrated REST APIs for AI features"
      ],
      tech: ["Flutter", "Firebase", "REST APIs", "AI Features", "MySQL", "Android", "iOS"]
    },
    {
      company: "Amdox Technologies",
      position: "Full Stack Web Developer Intern",
      duration: "Dec 2025 - Mar 2026",
      location: "Remote",
      description: "Developed Job Portal and Certificate Verification System reducing manual verification by 70%.",
      achievements: [
        "Built Job Portal with React.js frontend and Node.js backend",
        "Developed Certificate Verification System with 70% reduction in manual verification",
        "Implemented secure user authentication and job listings",
        "Created admin dashboard for job management",
        "Designed MySQL database for job and certificate data"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Authentication"]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Relay — Real-Time Team Collaboration Platform",
      category: "Full-Stack",
      problem: "Teams needed a seamless real-time collaboration platform with messaging, file sharing, and AI-powered communication tools for enhanced productivity.",
      solution: "Built a comprehensive full-stack real-time collaboration platform with Socket.IO for instant messaging and Redis for scalable event handling.",
      features: [
        "Real-time messaging with workspaces, channels, and direct messages",
        "Polls, notifications, and file sharing capabilities",
        "User presence tracking and status management",
        "AI Communication Coach for voice-first English practice",
        "Configurable communication levels and learning goals",
        "Personalized conversation scenarios",
        "AI-powered conversational feedback (grammar, fluency, vocabulary)",
        "Speech recognition and text-to-speech interaction",
        "Real-time event handling with Socket.IO and Redis",
        "Responsive React interface with interactive dashboards",
        "Authentication, RBAC, and secure API communication"
      ],
      tech: ["React.js", "Python", "FastAPI", "MySQL", "Redis", "Socket.IO", "WebSocket", "Node.js"],
      contribution: "Led full-stack development of platform architecture, implemented real-time messaging with Socket.IO, built AI Communication Coach, designed database schema, and created responsive React dashboard",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      name: "OmniTools - All-in-One Productivity App",
      category: "Mobile",
      problem: "Users had to switch between multiple apps for different productivity tasks.",
      solution: "Built a comprehensive productivity app combining 14 different tools in a single platform.",
      features: [
        "14 integrated productivity tools",
        "Attendance tracking with analytics",
        "Data export functionality",
        "User authentication",
        "SQLite local storage",
        "Responsive design",
        "Performance optimized"
      ],
      tech: ["Flutter", "SQLite", "Analytics"],
      contribution: "Designed and developed full application, implemented all 14 tools, built analytics engine",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      name: "AI Scam Detection System",
      category: "AI",
      problem: "Users needed protection against various scam types including phishing and voice scams.",
      solution: "Developed an AI-powered detection system identifying multiple scam vectors in real-time.",
      features: [
        "Scam message detection",
        "Phishing link identification",
        "Fake website detection",
        "Voice scam recognition",
        "Real-time analysis",
        "Threat level classification"
      ],
      tech: ["Python", "FastAPI", "Machine Learning", "AI Models"],
      contribution: "Architected detection system, trained ML models, built FastAPI backend, implemented real-time analysis",
      github: "#",
      demo: "#"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence & Machine Learning",
      institution: "Siddharth Institute of Engineering & Technology, Puttur",
      duration: "Jul 2024 - May 2027",
      status: "Pursuing"
    },
    {
      degree: "Diploma",
      field: "Electrical and Electronics Engineering",
      institution: "Govt Polytechnic College Chandragiri Agarala",
      duration: "Nov 2021 - Apr 2024",
      status: "Completed"
    }
  ],

  certifications: [
    {
      name: "HackFest Hackathon",
      organization: "2026",
      date: "2026"
    },
    {
      name: "NPTEL - Internet of Things (IoT) Certification",
      organization: "NPTEL",
      date: "2026"
    },
    {
      name: "App Development Internship Certificate",
      organization: "ApexPlanet Software Pvt Ltd",
      date: "2026"
    },
    {
      name: "AI Tools & Claude Workshop",
      organization: "2026",
      date: "2026"
    }
  ]
};
