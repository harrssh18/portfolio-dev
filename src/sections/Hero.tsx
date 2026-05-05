import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, socialLinks } from '../data/portfolio';
import { scrollToHash } from '../utils/scroll';

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 pt-16 lg:grid-cols-[1.08fr_0.92fr]" id="top">
      <div>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {profile.role}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.55 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.55 }}
        >
          <button
            className="inline-flex items-center justify-center rounded-md bg-accent-mint px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-white"
            onClick={() => scrollToHash('#projects')}
            type="button"
          >
            View Projects
          </button>
          <a
            className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            href={`mailto:${profile.email}`}
          >
            Contact Me
          </a>
        </motion.div>
        <div className="mt-8 flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-300 transition hover:border-accent-mint hover:text-white"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label === 'GitHub' ? <Github size={18} /> : null}
              {link.label === 'LinkedIn' ? <Linkedin size={18} /> : null}
              {link.label === 'Email' ? <Mail size={18} /> : null}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-ink-800 shadow-glow"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(97,214,163,0.24),transparent_42%),linear-gradient(315deg,rgba(255,122,92,0.18),transparent_48%)]" />
        <div className="absolute inset-x-8 top-8 rounded-lg border border-white/10 bg-ink-950/80 p-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-accent-coral" />
            <span className="h-3 w-3 rounded-full bg-accent-mint" />
            <span className="h-3 w-3 rounded-full bg-accent-sky" />
          </div>
          <div className="mt-5 space-y-3">
            <div className="h-3 w-4/5 rounded bg-white/20" />
            <div className="h-3 w-2/3 rounded bg-white/10" />
            <div className="h-3 w-5/6 rounded bg-white/10" />
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
          <p className="text-sm font-semibold text-white">Current work</p>
          <div className="mt-4 space-y-3 font-mono text-xs leading-6 text-slate-300">
            <p>
              <span className="text-accent-mint">Product</span>
              <span className="text-slate-500">:</span> Asset Panda Pro
            </p>
            <p>
              <span className="text-accent-sky">Stack</span>
              <span className="text-slate-500">:</span> React · Node · TypeScript · AWS
            </p>
            <p>
              <span className="text-accent-coral">Impact</span>
              <span className="text-slate-500">:</span> Scalable, highly configurable SaaS product
            </p>
          </div>
        </div>
      </motion.div>

      <button
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 transition hover:text-white lg:inline-flex"
        onClick={() => scrollToHash('#about')}
        type="button"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
