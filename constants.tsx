import React from 'react';
import { Project, Experience, Education, Certificate, Skill } from './types';
import { Brain, Cpu, Code, Database, Globe, Layers } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
];

export const HERO_CONTENT = {
  title: "GENERATIVE AI ENGINEER",
  subtitle: "Architecting the Future with LLMs & Neural Networks",
  description: "Specializing in Large Language Models, Diffusion Architectures, and Agentic Workflows. I build intelligent systems that create, reason, and adapt."
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroArt Gen",
    description: "A real-time latent consistency model pipeline for generating high-fidelity assets for game developers. Integrated with a custom fine-tuned SDXL model.",
    tech: ["PyTorch", "Diffusers", "React", "FastAPI", "WebSockets"],
    image: "https://picsum.photos/seed/aiart/600/400",
    link: "#"
  },
  {
    id: 2,
    title: "CogniChat RAG",
    description: "Enterprise-grade RAG system capable of ingesting millions of documents with sub-second retrieval latency using hybrid search (dense + sparse vectors).",
    tech: ["LangChain", "Pinecone", "OpenAI GPT-4", "Next.js"],
    image: "https://picsum.photos/seed/chatbot/600/400",
    link: "#"
  },
  {
    id: 3,
    title: "VoiceClone Agent",
    description: "Zero-shot voice cloning capability for virtual assistants. Uses VALL-E architecture concepts optimized for edge deployment.",
    tech: ["Python", "TensorFlow", "Audio Processing", "Docker"],
    image: "https://picsum.photos/seed/voice/600/400",
    link: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior AI Engineer",
    company: "Neural Nexus Solutions",
    period: "2022 - Present",
    description: "Leading a team of 5 engineers to deploy generative video models. Optimized inference costs by 40% using model quantization and distillation.",
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
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "M.S. in Computer Science (AI Specialization)",
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
];

export const CERTIFICATES: Certificate[] = [
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
    issuer: "Coursera / DeepLearning.AI",
    date: "2020",
    link: "#"
  },
  {
    id: 3,
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2022",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "Large Language Models", level: 95, category: "AI" },
  { name: "Computer Vision", level: 85, category: "AI" },
  { name: "PyTorch / TensorFlow", level: 90, category: "Frameworks" },
  { name: "React / TypeScript", level: 80, category: "Frontend" },
  { name: "Python", level: 98, category: "Languages" },
  { name: "Cloud Architecture", level: 75, category: "Infrastructure" },
];

export const ICONS = {
  Brain: <Brain className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
};