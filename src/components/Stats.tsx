import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '98%', label: 'First-pass clean claim target',  sub: 'Across managed specialties' },
  { value: '30%', label: 'Average denial reduction',       sub: 'Within the first two quarters' },
  { value: '<25', label: 'Days in A/R goal',               sub: 'Sustained through active follow-up' },
  { value: '12+', label: 'Platforms supported',            sub: 'EHR, payment, and payer portals' },
];

export function Stats() {
  return (
    <section aria-label="Trusted statistics" className="relative overflow-hidden py-20 lg:py-28">

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <img
          src="/billing-team.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top brightness-110 contrast-105"
        />
        {/* Softer maroon tint so the background image stays visible */}
        <div className="absolute inset-0 bg-maroon-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/40 via-maroon-900/20 to-maroon-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/35 via-transparent to-maroon-950/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Proven Results
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group rounded-2xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold-400/50 hover:bg-white/15 lg:p-8">

              <motion.p
                initial={{ scale: 0.75 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring', damping: 12 }}
                className="font-display text-5xl font-extrabold tracking-tight text-gold-400 drop-shadow-[0_0_20px_rgba(200,138,36,0.7)] transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </motion.p>
              <p className="mt-3 text-sm font-bold text-white">{stat.label}</p>
              <p className="mt-1 text-xs font-medium text-white/60">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}