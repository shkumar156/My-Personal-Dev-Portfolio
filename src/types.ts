export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'FullStack' | 'AI' | 'MobileApp';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
} 