export interface Tag {
  id: number;
  name: string;
  path?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  liveLink?: string;
  logo: string;
  image: string;
  tags: Tag[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  result: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  category: 'language' | 'frontend' | 'mobile' | 'backend' | 'database' | 'tool';
}

export interface NavLink {
  name: string;
  href: string;
}
