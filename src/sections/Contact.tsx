import { Download, Mail } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionHeader } from '../components/SectionHeader';
import { profile, socialLinks } from '../data/portfolio';

export function Contact() {
  return (
    <AnimatedSection className="section-shell" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Ready to talk about product engineering work."
        description="Open to software engineering roles, frontend architecture work, and product-focused engineering conversations."
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-mint hover:text-ink-950"
          href={`mailto:${profile.email}`}
        >
          <Mail size={18} />
          Email Me
        </a>
        <a
          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          href={profile.resumeHref}
        >
          <Download size={18} />
          Resume
        </a>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a className="text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline" href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
}
