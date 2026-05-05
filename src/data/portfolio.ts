import type { AboutHighlight, Experience, Project, SkillCategory, SocialLink } from '../types/portfolio';

export const profile = {
  name: 'Harsh Dubey',
  role: 'Software Engineer',
  tagline:
    'Crafting high-performance web applications with clean architecture and real-world impact.',
  email: 'harshdubey8225@gmail.com',
  resumeHref: '#',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const about = {
  title: 'Software engineer building scalable SaaS products and complex frontend systems.',
  description:
    'I have 4.5+ years of experience building production-ready SaaS applications with React, TypeScript, and modern web architecture. I have worked with US-based clients across asset management, logistics, blockchain, and AI-driven applications, while mentoring junior developers and contributing to architectural decisions.',
};

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Scalable SaaS Engineering',
    description:
      'Built core modules for large-scale SaaS products with reusable components, clean architecture, and maintainable frontend systems.',
  },
  {
    title: 'Performance-Focused Frontend',
    description:
      'Optimized rendering behavior, reduced unnecessary re-renders, and designed responsive user interfaces for real product workflows.',
  },
  {
    title: 'Client & Team Collaboration',
    description:
      'Worked directly with US clients, cross-functional teams, junior developers, and BDE teams to deliver production-grade features.',
  },
];

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive UI Development'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Cloud & Architecture',
    skills: ['AWS Cognito', 'AWS S3', 'AWS EC2', 'Serverless Architecture', 'Monorepo Architecture'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Jira', 'Claude', 'Cursor', 'GitHub Copilot', 'Codex'],
  },
  {
    title: 'AI, Python & Automation',
    skills: ['Python', 'Django', 'AI-Assisted Development', 'Prompt Engineering', 'Automation Workflows', 'Technical Evaluation'],
  },
  {
    title: 'Core Strengths',
    skills: [
      'Problem Solving',
      'Performance Optimization',
      'Scalable Architecture',
      'Code Review',
      'Mentoring',
      'Client Collaboration',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Asset Panda Pro',
    description:
      'A SaaS-based asset management platform designed for large-scale asset tracking, operations, and client workflows.',
    impact: [
      'Built core frontend modules from scratch using React and TypeScript.',
      'Worked within serverless and monorepo architecture for scalable development.',
      'Improved maintainability through reusable UI components and structured frontend patterns.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AWS', 'Serverless', 'Monorepo'],
    href: 'https://assetpanda.app',
  },
  {
    title: 'Dynamic Form & Automation System',
    description:
      'A schema-driven dynamic form system supporting conditional logic, automation workflows, and flexible configurations.',
    impact: [
      'Designed a dynamic rendering engine for conditional field behavior.',
      'Integrated GraphQL APIs for flexible data handling across form workflows.',
      'Reduced development effort for new forms through reusable schema-driven architecture.',
    ],
    techStack: ['React', 'TypeScript', 'GraphQL', 'Zustand'],
  },
  {
    title: 'Cloudshim',
    description:
      'A cloud-focused web platform where I contributed to frontend modules, UI enhancements, and API-driven workflows.',
    impact: [
      'Worked on Angular-based frontend improvements and feature enhancements.',
      'Integrated APIs into user-facing workflows with attention to reliability and usability.',
      'Improved UI performance and polished existing interface modules.',
    ],
    techStack: ['Angular', 'TypeScript', 'REST APIs', 'Performance Optimization'],
    href: 'https://www.cloudshim.com/',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Webkorps Services Pvt. Ltd.',
    period: 'Sept 2021 - Present',
    summary:
      'Core frontend engineer contributing to large-scale SaaS platforms and multiple US client-based product engagements.',
    contributions: [
      'Built and maintained scalable frontend systems using React, TypeScript, and modern web architecture.',
      'Worked on Asset Panda Pro, Cloudshim, and multiple domain-based applications for US clients.',
      'Mentored junior developers and guided project delivery across frontend implementation decisions.',
      'Collaborated with BDE teams for technical interviews, assessments, and engineering evaluations.',
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'A Plus Topper',
    period: 'May 2021 - Aug 2021',
    summary:
      'Worked on an education-focused platform for interactive physics and chemistry problem solving.',
    contributions: [
      'Developed backend logic using Django for equation-based learning workflows.',
      'Built interactive problem-solving features with step-by-step explanations.',
      'Used JavaScript to support frontend interactions and improve the learning experience.',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/harrssh18' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshdubey-dev/' },
  { label: 'Email', href: `mailto:${profile.email}` },
];
