import React from 'react';
import { LinkedinIcon, MailIcon, MapPinIcon, ShieldCheckIcon } from 'lucide-react';
import { Logo } from './Logo';
import { services } from '../data/services';

const companyLinks = [
{ name: 'About us', href: '#about' },
{ name: 'Why choose us', href: '#why-us' },
{ name: 'Workflow process', href: '#workflow' },
{ name: 'Industries served', href: '#industries' },
{ name: 'Contact', href: '#contact' }];


export function Footer() {
  return (
    <footer className="bg-maroon-950 text-white border-t border-gold-500/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-maroon-100/70">
              One synchronized partner for revenue cycle excellence. SyncOne RCM
              synchronizes people, processes, and technology to create efficient revenue
              cycle operations for healthcare organizations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-gold-500/20 bg-maroon-900/50 text-gold-400 transition-colors hover:bg-gold-500/20 hover:text-white">
                
                <LinkedinIcon className="size-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@synconercm.com"
                aria-label="Email SyncOne RCM"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-gold-500/20 bg-maroon-900/50 text-gold-400 transition-colors hover:bg-gold-500/20 hover:text-white">
                
                <MailIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-400">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-maroon-100/70">
              {services.map((service) =>
              <li key={service.title}>
                  <a href="#services" className="transition-colors hover:text-gold-300">
                    {service.title}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-400">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-maroon-100/70">
              {companyLinks.map((link) =>
              <li key={link.name}>
                  <a href={link.href} className="transition-colors hover:text-gold-300">
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-400">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-maroon-100/70">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                <a href="mailto:hello@synconercm.com" className="hover:text-gold-300">
                  hello@synconercm.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                Sri Lanka
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheckIcon
                  className="mt-0.5 size-4 shrink-0 text-gold-400"
                  aria-hidden="true" />
                
                HIPAA-aligned operations &amp; signed BAAs
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-100/60">
            &copy; {new Date().getFullYear()} SyncOne RCM. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6 text-xs text-navy-100/60">
            <li>
              <a href="#contact" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                HIPAA Compliance
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>);

}