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
    subtitle: "Architecting the Future with LLMs & Neural Networks",
    description: "Specializing in Large Language Models, Diffusion Architectures, and Agentic Workflows. I build intelligent systems that create, reason, and adapt."
  },
  about: {
    text: "I'm a digital alchemist transforming raw data into intelligent experiences. Beyond the neural networks, I'm a sci-fi enthusiast who believes the best way to predict the future is to code it. I thrive on the edge of what's possible, constantly pushing the boundaries of generative creativity.",
    hobbies: ["Sci-Fi Novels", "Synthesizers", "Chess", "Digital Art", "Robotics"]
  },
  projects: [
    {
      id: 1,
      title: "NeuroArt Gen",
      description: "A real-time latent consistency model pipeline for generating high-fidelity assets for game developers. Integrated with a custom fine-tuned SDXL model.",
      tech: ["PyTorch", "Diffusers", "React", "FastAPI"],
      image: "",
      link: "#"
    },
    {
      id: 2,
      title: "CogniChat RAG",
      description: "Enterprise-grade RAG system capable of ingesting millions of documents with sub-second retrieval latency using hybrid search.",
      tech: ["LangChain", "Pinecone", "OpenAI GPT-4", "Next.js"],
      image: "",
      link: "#"
    },
    {
      id: 3,
      title: "VoiceClone Agent",
      description: "Zero-shot voice cloning capability for virtual assistants. Uses VALL-E architecture concepts optimized for edge deployment.",
      tech: ["Python", "TensorFlow", "Audio Processing", "Docker"],
      image: "",
      link: "#"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Senior AI Engineer",
      company: "Neural Nexus Solutions",
      period: "2022 - Present",
      description: "Leading a team of 5 engineers to deploy generative video models. Optimized inference costs by 40% using model quantization.",
      skills: ["Team Leadership", "Model Optimization", "Kubernetes"]
    },
    {
      id: 2,
      role: "Machine Learning Engineer",
      company: "DataFlow Dynamics",
      period: "2020 - 2022",
      description: "Developed recommendation engines and NLP pipelines for sentiment analysis on social media data streams.",
      skills: ["NLP", "Scikit-learn", "AWS SageMaker"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "M.S. in Computer Science (AI)",
      institution: "Tech Institute of Technology",
      year: "2018 - 2020",
      details: "Thesis: 'Adversarial Attacks on Transformer Models'. GPA: 3.9/4.0"
    },
    {
      id: 2,
      degree: "B.S. in Mathematics & CS",
      institution: "State University",
      year: "2014 - 2018",
      details: "Minored in Statistics. President of the Deep Learning Club."
    }
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
    text: "I'm a structural artist of the web, believing that clean code is poetry. My passion lies in building systems that are robust, scalable, and delightful to use. When I'm not optimizing algorithms, I'm likely exploring nature or building custom mechanical keyboards.",
    hobbies: ["Hiking", "Mech Keyboards", "Photography", "Espresso", "Gaming"]
  },
  projects: [
    {
      id: 1,
      title: "CloudScale Dashboard",
      description: "A centralized dashboard for monitoring microservices across multi-cloud environments. Features real-time metric visualization and alert management.",
      tech: ["React", "Go", "GraphQL", "Kubernetes"],
      image: "",
      link: "#"
    },
    {
      id: 2,
      title: "FinTech Transaction Core",
      description: "High-frequency trading engine component capable of processing 10k transactions per second with ACID compliance guarantees.",
      tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
      image: "",
      link: "#"
    },
    {
      id: 3,
      title: "OmniStore Platform",
      description: "Headless E-commerce platform enabling custom storefronts with a unified inventory system. Plugin architecture for payment gateways.",
      tech: ["Node.js", "TypeScript", "Redis", "MongoDB"],
      image: "",
      link: "#"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Lead Software Engineer",
      company: "TechStream Systems",
      period: "2021 - Present",
      description: "Architected a migration from monolith to microservices, reducing deployment time by 60%. Mentored junior developers on clean code practices.",
      skills: ["System Design", "Microservices", "CI/CD"]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "WebSolutions Inc",
      period: "2018 - 2021",
      description: "Built and maintained multiple client-facing web applications. Implemented accessible UI components and improved SEO performance.",
      skills: ["React", "SEO", "Accessibility"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.S. in Software Engineering",
      institution: "State University",
      year: "2014 - 2018",
      details: "Graduated with Honors. Capstone project focused on distributed systems."
    },
    {
      id: 2,
      degree: "Agile Methodology Certification",
      institution: "Agile Alliance",
      year: "2019",
      details: "Certified Scrum Master."
    }
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