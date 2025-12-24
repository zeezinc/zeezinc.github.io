import { ReactNode } from 'react';

export type Theme = 'neon' | 'mech';

export interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  alternate?: boolean;
  colorKey: 'cyan' | 'purple' | 'green' | 'pink'; // Abstracted color key
  fullWidth?: boolean;
  theme: Theme;
  visualImage?: string; // URL for the side image
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
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

export interface ProfileData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  skills: Skill[];
}