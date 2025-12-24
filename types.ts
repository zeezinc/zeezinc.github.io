import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  alternate?: boolean;
  neonColor: 'cyan' | 'purple' | 'green' | 'pink';
  fullWidth?: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  modelType?: 'torus' | 'icosahedron' | 'box'; // For 3D visualization variety
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}