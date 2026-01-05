import React from 'react';
import { ProfileData } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
];

export const AI_PROFILE: ProfileData = {
  hero: {
    title: "GENERATIVE AI ENGINEER",
    subtitle: "Architecting the Future with LLMs",
    description: "Specializing in Large Language Models, Retrieval-Augmented Generation, Document Intelligence Systems Agentic Workflows. I build intelligent systems that create, reason, and adapt.",
    resumeLink: "/resume.pdf"
  },
  about: {
    text: "I build practical AI systems that turn complex data into useful, real-world applications — from document intelligence and search to analytics-driven platforms. I enjoy working where AI meets backend engineering, focusing on systems that are reliable, scalable, and actually usable in production. Outside of work, I like experimenting and creating — whether that’s building and modding cars, exploring digital art, discovering new food spots, traveling, or picking up new languages along the way.",
    hobbies: ["Digital Art", "Video Games","Building & Modding Cars", "Learning Languages", "Food Blogging", "Travel"]
  },
  projects: [
    {
      id: 1,
      title: "AI-Powered RFP & Document Intelligence Suite",
      description: "End-to-end AI platform for processing and analyzing RFPs and multi-format documents (PDF, Word, PPT, CSV, URL, audio, video). Implemented advanced RAG/CAG pipelines, structured extraction, TOC mapping, and automated report generation, reducing RFP review time by 60% and improving extraction accuracy by ~40%.",
      tech: ["Python", "LangChain", "LlamaParse", "ChromaDB", "Groq", "Vertex AI", "FastAPI", "Docker"],
      image: "",
      link: "#"
    },
    {
      id: 2,
      title: "Smart Teaching System",
      description: "Generative AI platform used by multiple Middle-East educational institutes for lesson planning, assignments, MCQs, summaries, vocabulary, emails, and TTS/STT. Integrated fine-tuned LLMs for personalized academic content generation, reducing teacher workload by 70%.",
      tech: ["OpenAI", "LLM Fine-Tuning", "FastAPI", "React", "Python", "Prompt Engineering"],
      image: "",
      link: "#"
    },
    {
      id: 3,
      title: "Erdi Document Chatbot",
      description: "Interactive conversational chatbot enabling Q&A over PDFs, Word, PPT, CSV, audio, video, and URLs. Supports OCR-based ingestion, multi-document memory, follow-up reasoning, and high-accuracy vector retrieval.",
      tech: ["LangChain", "Groq", "ChromaDB", "FastAPI", "React", "LlamaParse", "Whisper", "Python"],
      image: "",
      link: "#"
    },
    {
      id: 4,
      title: "Student Information Bot",
      description: "AI agent that converts natural language queries into SQL, executes them with validation and auto-correction layers, and generates data-driven insights. Reduced dependency on data analysts by 50% through automated query generation and execution.",
      tech: ["Claude", "FastAPI", "Snowflake", "Python", "SQL"],
      image: "",
      link: "#"
    },
    {
      id: 5,
      title: "Property Finder Dashboard (AI-Adjacent Backend)",
      description: "High-performance backend powering real-estate search for a Middle-East platform. Implemented dynamic filters, caching, async schedulers, and Redshift analytics to support fast, scalable query execution, improving performance by 3×.",
      tech: ["Python", "FastAPI", "AWS", "Redis", "Redshift", "Boto3", "Docker"],
      image: "",
      link: "#"
    },
    {
      id: 6,
      title: "Third Eye – Traffic Surveillance System",
      description: "Computer vision system for analyzing vehicle movements and detecting traffic violations from images and videos. Processed 10,000+ media files to improve traffic enforcement and road safety.",
      tech: ["Computer Vision", "Machine Learning", "Python", "OpenCV", "YOLO"],
      image: "",
      link: "#"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Gen AI Data Enthusiast",
      company: "Hexalytics",
      period: "2024 - Present",
      description: "Developed Generative AI chatbots and analytics solutions by integrating LLMs with vector-based RAG pipelines. Built AI-powered platforms for education and real estate, reducing manual effort by 50–70%. Designed Python/FastAPI backends for automating document processing across PDFs, Audio, and Video. Deployed cloud-native solutions on AWS using Docker.",
      skills: ["LLMs", "RAG", "Agents", "FastAPI", "Python", "Pandas", "AWS", "Docker"]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "HftSolution",
      period: "2021 - 2024",
      description: "Designed enterprise-grade backend systems using Java and Spring Boot. Led development of core functional modules reducing errors by 60–70%. Migrated legacy monolithic applications to microservices and built secure RESTful APIs. Optimized database queries improving performance by ~30%.",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "SQL", "Message Brokers", "CI/CD"]
    },
    {
      id: 3,
      role: "Software Developer Intern",
      company: "Transition Computing",
      period: "2019 - 2020",
      description: "Assisted in migrating legacy backend applications from .NET Framework to .NET Core. Optimized database operations using Entity Framework Core reducing manual SQL scripting. Validated RESTful APIs using Postman and Swagger UI. Used GitHub for version control , following best practices for commits, branching strategies, pull requests, and collaborative code management.",
      skills: [".NET Core", "Entity Framework", "REST APIs", "Git", "Postman", "Swagger UI", "MySQL", "HTML", "CSS", "Javascript"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master's in Science(Computer Science)",
      institution: "Savitribai Phule Pune University",
      year: "2018 - 2020",
      details: "GPA: 8.25"
    },
    {
      id: 2,
      degree: "Bachelor's in Science(Computer Science)",
      institution: "Savitribai Phule Pune University",
      year: "2015 - 2018",
      details: ""
    },
    {
      id: 3,
      degree: "Indian School Certificate(ISC)",
      institution: "The Bishop's School (CAMP)",
      year: "2013 - 2015",
      details: ""
    },
    {
      id: 4,
      degree: "Indian Certificate Of Secondary Education (ICSE)",
      institution: "The Bishop's School (CAMP)",
      year: "2013",
      details: "Percentage: 87%"
    },
  ],
  certificates: [
    {
      id: 1,
      name: "Build, Containerize, and Deploy Spring Boot Apps",
      issuer: "Google",
      date: "2022",
      link: "https://developers.google.com/profile/badges/playlists/cloud/cloud-containerize-deploy-spring-boot"
    },
    {
      id: 2,
      name: "Master Document Management System With Alfresco",
      issuer: "Udemy",
      date: "2025",
      link: "https://www.udemy.com/certificate/UC-bb133a7e-b863-4684-8d2f-1156ab0b8166/"
    }
  ],
  skills: [
    // Programming & Backend
    { name: "Python", level: 75, category: "Programming & Backend" },
    { name: "FastAPI", level: 82, category: "Programming & Backend" },
    { name: "Flask / Django", level: 75, category: "Programming & Backend" },

    // AI & Machine Learning
    { name: "RAG / CAG Pipelines", level: 85, category: "AI & Machine Learning" },
    { name: "LangChain / LlamaIndex", level: 82, category: "AI & Machine Learning" },
    { name: "Transformers (HuggingFace)", level: 80, category: "AI & Machine Learning" },
    { name: "Large Language Models", level: 88, category: "AI & Machine Learning" },
    { name: "PyTorch / TensorFlow (ML)", level: 60, category: "AI & Machine Learning" },
    { name: "NLP / Embeddings", level: 72, category: "AI & Machine Learning" },

    // Document & Data Processing
    { name: "Document Parsing / OCR", level: 92, category: "Document & Data Processing" },
    { name: "Computer Vision (YOLO / OpenCV)", level: 80, category: "Document & Data Processing" },
    { name: "Unstructured Data Handling (PyMuPDF, PDF, CSV, PPT)", level: 88, category: "Document & Data Processing" },

    // Automation & Pipelines
    { name: "AI Agent Workflows", level: 70, category: "Automation & Pipelines" },
    { name: "Task Orchestration / Async Pipelines", level: 65, category: "Automation & Pipelines" },

    // Data Engineering & Analysis
    { name: "Pandas / NumPy", level: 50, category: "Data Engineering & Analysis" },
    { name: "Data Transformation & ETL", level: 45, category: "Data Engineering & Analysis" },

    // APIs & Integrations
    { name: "REST APIs / OAuth", level: 92, category: "APIs & Integrations" },
    { name: "Third-Party AI / Cloud Integrations", level: 75, category: "APIs & Integrations" },

    // Databases
    { name: "Vector DBs (Chroma / Qdrant)", level: 82, category: "Databases" },
    { name: "PostgreSQL / Snowflake", level: 78, category: "Databases" },
    { name: "Redis / Caching", level: 75, category: "Databases" },

    // Testing
    { name: "PyTest / Postman", level: 75, category: "Testing" },

    // DevOps & Deployment
    { name: "Docker / Containerization", level: 68, category: "DevOps & Deployment" },
    { name: "CI/CD (GitHub Actions / Jenkins)", level: 72, category: "DevOps & Deployment" },

    // Version Control
    { name: "Git / Version Control", level: 72, category: "Version Control" },

    // Architecture
    { name: "RAG / Retrieval-Augmented Architecture", level: 75, category: "Architecture" },
    { name: "Event-Driven / Async Workflows", level: 78, category: "Architecture" }
  ]
};

export const SWE_PROFILE: ProfileData = {
  hero: {
    title: "FULL STACK ENGINEER",
    subtitle: "Building Scalable Digital Architectures",
    description: "Crafting robust web applications with clean code and modern architectures. I bridge the gap between complex backend logic and intuitive frontend experiences.",
    resumeLink: "/resume.pdf"
  },
  about: {
    text: "I’m a backend software engineer who enjoys building clean, dependable systems using Java and modern backend frameworks. My work centers around designing APIs, handling complex business logic, and improving performance across large, real-world systems. Outside of work, I like slowing things down — spending time in nature, sketching and drawing, and staying active through sports like football, swimming, and tennis.",
    hobbies: ["Nature", "Drawing & Art", "Football", "Swimming", "Tennis"]
  },
  projects: [
    {
      id: 1,
      title: "Financial Microservices Platform",
      description: "Designed and developed Java-based backend microservices for financial workflows including bank payments, credit/debit vouchers, and client management. Implemented REST APIs with idempotent operations, transactional boundaries, and event-driven processing for non-blocking payment and ledger updates.",
      tech: ["Java 17", "Spring Boot", "Spring Security", "REST APIs", "MySQL", "Kafka", "Docker"],
      image: "",
      link: "#"
    },
    {
      id: 2,
      title: "Erate Alfresco Document Management System",
      description: "Backend document management system built on Alfresco for storing, indexing, and searching large volumes of enterprise files. Designed metadata-driven indexing, permission-based access control, and OCR-backed content search to ensure consistent and reliable document retrieval.",
      tech: ["Java 11", "Alfresco", "Apache", "OCR", "RBAC", "Search & Indexing"],
      image: "",
      link: "#"
    },
    {
      id: 3,
      title: "Comprehensive Healthcare Management System",
      description: "Java backend for a multi-module healthcare platform supporting prescriptions, vitals tracking, and clinical notes. Implemented asynchronous processing for vitals ingestion and background updates while ensuring transactional persistence and data consistency.",
      tech: ["Java 8", "Spring Boot", "Hibernate/JPA", "MySQL", "REST APIs", "Async Processing"],
      image: "",
      link: "#"
    },
    {
      id: 4,
      title: "Facility Management & Rehabilitation System",
      description: "Refactored a legacy Spring monolith into a modular Spring Boot backend using service-oriented design. Introduced asynchronous background jobs for reporting and data aggregation, along with pagination and structured DTOs to improve performance and maintainability.",
      tech: ["Java 8", "Spring Boot", "Spring MVC", "AWS EC2", "REST APIs", "Async Jobs", "JUnit", "JavaScript", "HTML", "CSS"],
      image: "",
      link: "#"
    },
    {
      id: 5,
      title: "Streamlined Payroll Management System",
      description: "Backend payroll processing system with secure access controls and rule-based salary computation. Applied validation pipelines, transactional updates, and audit-friendly data models to ensure accurate and reliable payroll execution.",
      tech: ["Java 8", "Spring Boot", "MySQL", "REST APIs", "GitHub"],
      image: "",
      link: "#"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Gen AI Data Enthusiast",
      company: "Hexalytics",
      period: "2024 - Present",
      description: "Developed Generative AI chatbots and analytics solutions by integrating LLMs with vector-based RAG pipelines. Built AI-powered platforms for education and real estate, reducing manual effort by 50–70%. Designed Python/FastAPI backends for automating document processing across PDFs, Audio, and Video. Deployed cloud-native solutions on AWS using Docker.",
      skills: ["LLMs", "RAG", "Agents", "FastAPI", "Python", "Pandas", "AWS", "Docker"]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "HftSolution",
      period: "2021 - 2024",
      description: "Designed enterprise-grade backend systems using Java and Spring Boot. Led development of core functional modules reducing errors by 60–70%. Migrated legacy monolithic applications to microservices and built secure RESTful APIs. Optimized database queries improving performance by ~30%.",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "SQL", "Message Brokers", "CI/CD"]
    },
    {
      id: 3,
      role: "Software Developer Intern",
      company: "Transition Computing",
      period: "2019 - 2020",
      description: "Assisted in migrating legacy backend applications from .NET Framework to .NET Core. Optimized database operations using Entity Framework Core reducing manual SQL scripting. Validated RESTful APIs using Postman and Swagger UI. Used GitHub for version control , following best practices for commits, branching strategies, pull requests, and collaborative code management.",
      skills: [".NET Core", "Entity Framework", "REST APIs", "Git", "Postman", "Swagger UI", "MySQL", "HTML", "CSS", "Javascript"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master's in Science(Computer Science)",
      institution: "Savitribai Phule Pune University",
      year: "2018 - 2020",
      details: "GPA: 8.25"
    },
    {
      id: 2,
      degree: "Bachelor's in Science(Computer Science)",
      institution: "Savitribai Phule Pune University",
      year: "2015 - 2018",
      details: ""
    },
    {
      id: 3,
      degree: "Indian School Certificate(ISC)",
      institution: "The Bishop's School (CAMP)",
      year: "2013 - 2015",
      details: ""
    },
    {
      id: 4,
      degree: "Indian Certificate Of Secondary Education (ICSE)",
      institution: "The Bishop's School (CAMP)",
      year: "2013",
      details: "Percentage: 87%"
    },
  ],
  certificates: [
    {
      id: 1,
      name: "Build, Containerize, and Deploy Spring Boot Apps",
      issuer: "Google",
      date: "2022",
      link: "https://developers.google.com/profile/badges/playlists/cloud/cloud-containerize-deploy-spring-boot"
    },
    {
      id: 2,
      name: "Master Document Management System With Alfresco",
      issuer: "Udemy",
      date: "2025",
      link: "https://www.udemy.com/certificate/UC-bb133a7e-b863-4684-8d2f-1156ab0b8166/"
    }
  ],
  skills: [
    // BACK END
    { name: "Java", level: 85, category: "Back End" },
    { name: "Spring Boot / MVC", level: 82, category: "Back End" },
    { name: "REST API Development", level: 90, category: "Back End" },

    // FRONT END
    { name: "JavaScript", level: 85, category: "Front End" },
    { name: "HTML / CSS / Bootstrap / Tailwind", level: 78, category: "Front End" },
    { name: "React", level: 65, category: "Front End" },

    // ARCHITECTURE
    { name: "Microservices / SOA", level: 68, category: "Architecture" },
    { name: "Monolithic Applications", level: 85, category: "Architecture" },
    { name: "Service Oriented Design", level: 80, category: "Architecture" },

    // ORM
    { name: "JPA / Hibernate", level: 88, category: "ORM" },

    // DATABASE
    { name: "MySQL", level: 90, category: "Database" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "Redshift (Basic Analytics)", level: 75, category: "Database" },

    // TESTING
    { name: "JUnit / Mockito", level: 85, category: "Testing" },
    { name: "Postman / Swagger UI", level: 88, category: "Testing" },

    // VERSION CONTROL
    { name: "Git / Bitbucket / GitHub", level: 82, category: "Version Control" },

    // BUILD AND DEPLOYMENT TOOLS
    { name: "Maven", level: 78, category: "Build & Deployment" },
    { name: "Docker / Containerization", level: 75, category: "Build & Deployment" },
    { name: "CI/CD (GitHub Actions / Jenkins)", level: 70, category: "Build & Deployment" },

    // APPLICATION SERVERS
    { name: "Apache Tomcat", level: 88, category: "App Servers" },

    // COMMUNICATION
    { name: "REST API / JSON", level: 95, category: "Communication" },
    { name: "Kafka / Async Processing (basic)", level: 60, category: "Communication" },

    // CLOUD
    { name: "AWS (EC2, S3, ECS, Secrets Manager)", level: 70, category: "Cloud" },

    // SOFT SKILLS
    { name: "Problem Solving", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 82, category: "Soft Skills" },
    { name: "Adaptability", level: 80, category: "Soft Skills" },
    { name: "Critical Thinking / Creativity", level: 80, category: "Soft Skills" }
  ]
};