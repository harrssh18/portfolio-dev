import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '../data/portfolio';
import { scrollToHash } from '../utils/scroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    scrollToHash(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <button
          className="text-left text-sm font-semibold text-white"
          onClick={() => handleNavigate('#top')}
          type="button"
        >
          {profile.name}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink-950 px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <button
              className="block w-full rounded-md px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/10"
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}
