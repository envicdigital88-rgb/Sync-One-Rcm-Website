import React from 'react';
import { motion } from 'framer-motion';
import {
  ReceiptTextIcon,
  FileCode2Icon,
  BadgeCheckIcon,
  FileWarningIcon,
  WalletIcon,
  BarChart3Icon,
  ArrowUpRightIcon } from
'lucide-react';
import { services, type Service } from '../data/services';

const iconMap: Record<Service['icon'], React.ComponentType<{className?: string;}>> = {
  billing: ReceiptTextIcon,
  coding: FileCode2Icon,
  verification: BadgeCheckIcon,
  denial: FileWarningIcon,
  ar: WalletIcon,
  analytics: BarChart3Icon
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800">
            Healthcare RCM services
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
            Every stage of the revenue cycle, handled with precision
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-600">
            Engage us for a single function or the full cycle. Our teams plug into your
            existing systems and workflows, with quality assurance built into each step.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index % 3 * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl border border-maroon-800/10 bg-white p-7 shadow-soft transition-all duration-300 hover:border-gold-500/40 hover:shadow-lift">
                
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-800 transition-colors duration-300 group-hover:bg-maroon-800 group-hover:text-gold-400">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-maroon-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-maroon-800/10 pt-5">
                  {service.points.map((point) =>
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-navy-700">
                    
                      <span
                      className="size-1.5 rounded-full bg-gold-500"
                      aria-hidden="true" />
                    
                      {point}
                    </li>
                  )}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-maroon-800 transition-colors hover:text-gold-600">
                  
                  Discuss this service
                  <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                </a>
              </motion.article>);

          })}
        </div>
      </div>
    </section>);

}