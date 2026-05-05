import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';
import { experiences } from '../data/portfolio';

export function Experience() {
  return (
    <AnimatedSection className="section-shell" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of ownership, impact, and collaboration."
        description="Each role highlights the kind of contribution recruiters and hiring teams can understand quickly."
      />
      <div className="relative space-y-6 border-l border-white/10 pl-6">
        {experiences.map((item) => (
          <article className="relative rounded-lg border border-white/10 bg-white/[0.04] p-6" key={`${item.company}-${item.role}`}>
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-accent-mint ring-4 ring-ink-950" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.company}</p>
              </div>
              <p className="rounded-md border border-white/10 px-3 py-1 text-sm text-slate-300">{item.period}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {item.contributions.map((contribution) => (
                <li className="flex gap-3" key={contribution}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-sky" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
