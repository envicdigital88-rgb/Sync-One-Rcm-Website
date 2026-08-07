import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '../utils/cn';

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Technology', href: '#technology' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Industries', href: '#industries' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => setScrolled(latest > 40));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 pt-2">
        <div className={cn('mx-auto max-w-7xl px-4 transition-all duration-300 sm:px-6 lg:px-8')}>

          <motion.div
            className={cn(
              'relative flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 lg:py-4',
              scrolled
                /* After scroll — frosted glass on light background */
                ? 'border border-maroon-800/10 bg-white/90 shadow-soft backdrop-blur-xl'
                /* Hero viewport — fully transparent over dark video */
                : 'border border-white/10 bg-transparent'
            )}>

            {/* Logo — light on dark video, adapts when scrolled */}
            <a href="#top" aria-label="SyncOne RCM home" className="flex items-center">
              <Logo variant={scrolled ? 'dark' : 'light'} showTagline={false} />
            </a>

            {/* Desktop nav links */}
            <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      'transition-colors duration-150 font-semibold',
                      scrolled
                        ? 'text-navy-700 hover:text-maroon-800'
                        : 'text-white/80 hover:text-white'
                    )}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:+94000000000"
                className={cn(
                  'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur transition-all',
                  scrolled
                    ? 'border-maroon-800/15 bg-white/70 text-maroon-900 hover:border-gold-500 hover:text-gold-700 hover:bg-gold-50/50'
                    : 'border-white/20 bg-white/10 text-white hover:border-gold-400/50 hover:bg-white/20'
                )}>
                <PhoneIcon className={cn('size-4', scrolled ? 'text-gold-600' : 'text-gold-400')} aria-hidden="true" />
                Talk to an expert
              </a>
              <a
                href="#contact"
                className="rounded-full bg-maroon-800 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-maroon-700 hover:shadow-glow">
                Request Free Consultation
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className={cn(
                'relative z-20 -mr-2 rounded-lg p-2.5 lg:hidden',
                scrolled ? 'text-maroon-900' : 'text-white'
              )}>
              {menuOpen
                ? <XIcon className="size-6" aria-hidden="true" />
                : <MenuIcon className="size-6" aria-hidden="true" />
              }
            </button>
          </motion.div>

          {/* Mobile slide-down menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-maroon-800/10 bg-white p-6 shadow-lift lg:hidden">
              <ul className="space-y-5 text-base font-medium">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-navy-700 hover:text-maroon-800 font-semibold">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 block rounded-full bg-maroon-800 px-5 py-3 text-center text-sm font-semibold text-white shadow-soft">
                Request Free Consultation
              </a>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}