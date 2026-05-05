import { AnimatedSection } from '../components/AnimatedSection';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <AnimatedSection className="section-shell" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work with clear product impact."
        description="Use these as strong interview anchors: each card explains the problem space, technical shape, and measurable value."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
