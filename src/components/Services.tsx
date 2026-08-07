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
    <section id="services" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/ChatGPT Image Aug 7, 2026, 04_15_29 PM.png"
          alt="Healthcare revenue cycle services background"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.4),_transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-950">
              Healthcare RCM services
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
              Every stage of the revenue cycle, handled with precision
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-700">
              Engage us for a single function or the full cycle. Our teams plug into your existing systems and workflows, with quality assurance built into each step.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-3xl border border-white/15 bg-white/15 p-6 shadow-soft backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:bg-white/30">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/70 text-maroon-900 shadow-sm backdrop-blur-md transition-all duration-300">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-maroon-950">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-2 text-sm text-navy-700 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-maroon-800 transition-colors hover:text-gold-600">
                      Discuss this service
                      <ArrowUpRightIcon className="size-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
