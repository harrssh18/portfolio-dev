import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';
import { skills } from '../data/portfolio';

export function Skills() {
  return (
    <AnimatedSection className="section-shell" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="Practical tools for building and shipping SaaS products."
        description="Grouped around real delivery responsibilities rather than decorative ratings."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <div className="rounded-lg border border-white/10 bg-ink-900 p-6" key={category.title}>
            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
