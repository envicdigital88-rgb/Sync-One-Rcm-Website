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
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl">
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
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex flex-col rounded-3xl border border-maroon-800/10 bg-white p-7 shadow-soft transition-all duration-300 hover:border-gold-500/40 hover:shadow-lift">
                
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-800 transition-all duration-300 group-hover:bg-maroon-800 group-hover:text-gold-400 group-hover:scale-105">
                  <Icon className="size-6 transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
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
                  <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </motion.article>);

          })}
        </div>
      </div>
    </section>);

}