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
    description: "Specializing in Large Language Models, Retrieval-Augmented Generation, Document Intelligence Systems Agentic Workflows. I build intelligent systems that create, reason, and adapt."
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
      period: "2025 - Present",
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
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2021",
      link: "#"
    },
    {
      id: 2,
      name: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2020",
      link: "#"
    },
    {
      id: 3,
      name: "AWS Certified ML - Specialty",
      issuer: "Amazon Web Services",
      date: "2022",
      link: "#"
    }
  ],
  skills: [
    { name: "Large Language Models", level: 95, category: "AI" },
    { name: "Computer Vision", level: 85, category: "AI" },
    { name: "PyTorch / TensorFlow", level: 90, category: "Frameworks" },
    { name: "React / TypeScript", level: 80, category: "Frontend" },
    { name: "Python", level: 98, category: "Languages" },
    { name: "Cloud Architecture", level: 75, category: "Infrastructure" },
  ]
};

export const SWE_PROFILE: ProfileData = {
  hero: {
    title: "FULL STACK ENGINEER",
    subtitle: "Building Scalable Digital Architectures",
    description: "Crafting robust web applications with clean code and modern architectures. I bridge the gap between complex backend logic and intuitive frontend experiences."
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
      period: "2025 - Present",
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
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      link: "#"
    },
    {
      id: 2,
      name: "Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2021",
      link: "#"
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "2023",
      link: "#"
    }
  ],
  skills: [
    { name: "System Design", level: 90, category: "Architecture" },
    { name: "React / Frontend", level: 95, category: "Frontend" },
    { name: "Node.js / Backend", level: 85, category: "Backend" },
    { name: "DevOps / CI/CD", level: 80, category: "Ops" },
    { name: "Database Design", level: 85, category: "Data" },
    { name: "Cloud Services", level: 88, category: "Infrastructure" },
  ]
};