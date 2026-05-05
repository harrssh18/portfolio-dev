export type Project = {
  title: string;
  description: string;
  impact: string[];
  techStack: string[];
  href?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  contributions: string[];
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
