export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'In Development' | 'Concept';
  category: 'Cybersecurity' | 'Web App' | 'Design & Creative' | 'Video Production';
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  completionDate?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  description: string;
}

export interface InterestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
  description: string;
  credentialType: 'Certification' | 'Diploma' | 'Ongoing';
  badge: string;
}

export interface ThemeAccent {
  name: string;
  accent: string;
  accentRgb: string;
  glow: string;
  muted: string;
  border: string;
}

