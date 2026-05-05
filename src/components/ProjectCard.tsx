import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types/portfolio';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <article className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-mint/50 hover:bg-white/[0.07] hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <ArrowUpRight className="mt-1 shrink-0 text-accent-mint opacity-70 transition group-hover:opacity-100" size={20} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {project.impact.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-coral" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span className="rounded-md border border-white/10 bg-ink-800 px-2.5 py-1 text-xs text-slate-200" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a href={project.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}
