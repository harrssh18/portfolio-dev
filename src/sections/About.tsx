import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';
import { about, aboutHighlights } from '../data/portfolio';

export function About() {
  return (
    <AnimatedSection className="section-shell" id="about">
      <SectionHeader
        eyebrow="About"
        title={about.title}
        description={about.description}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {aboutHighlights.map((item) => (
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5" key={item.title}>
            <p className="text-base font-semibold text-white">{item.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
