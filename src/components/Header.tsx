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
{ name: 'Industries', href: '#industries' }];


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => setScrolled(latest > 24));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 pt-2">
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 transition-all duration-300 sm:px-6 lg:px-8',
            scrolled && 'lg:px-4'
          )}>
          
          <motion.div
            className={cn(
              'relative flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 lg:py-4',
              scrolled ?
              'border border-navy-100 bg-white/80 shadow-soft backdrop-blur-xl' :
              'border border-transparent'
            )}>
            
            <a href="#top" aria-label="SyncOne RCM home" className="flex items-center">
              <Logo showTagline={false} />
            </a>

            <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-navy-700 transition-colors duration-150 hover:text-maroon-800 font-semibold">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:+94000000000"
                className="flex items-center gap-2 rounded-full border border-maroon-800/15 bg-white/70 px-4 py-2 text-sm font-semibold text-maroon-900 backdrop-blur transition-all hover:border-gold-500 hover:text-gold-700 hover:bg-gold-50/50">
                <PhoneIcon className="size-4 text-gold-600" aria-hidden="true" />
                Talk to an expert
              </a>
              <a
                href="#contact"
                className="rounded-full bg-maroon-800 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-maroon-900 hover:shadow-glow">
                Request Free Consultation
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="relative z-20 -mr-2 rounded-lg p-2.5 text-navy-900 lg:hidden">
              
              {menuOpen ?
              <XIcon className="size-6" aria-hidden="true" /> :

              <MenuIcon className="size-6" aria-hidden="true" />
              }
            </button>
          </motion.div>

          {menuOpen &&
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-2xl border border-navy-100 bg-white p-6 shadow-lift lg:hidden">
            
              <ul className="space-y-5 text-base font-medium">
                {menuItems.map((item) =>
              <li key={item.name}>
                    <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-navy-700 hover:text-teal-600">
                  
                      {item.name}
                    </a>
                  </li>
              )}
              </ul>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 block rounded-full bg-maroon-800 px-5 py-3 text-center text-sm font-semibold text-white shadow-soft">
                Request Free Consultation
              </a>
            </motion.div>
          }
        </div>
      </nav>
    </header>);

}