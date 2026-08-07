import React from 'react';
import { motion } from 'framer-motion';

const stats = [
{ value: '98%', label: 'First-pass clean claim target', sub: 'Across managed specialties' },
{ value: '30%', label: 'Average denial reduction', sub: 'Within the first two quarters' },
{ value: '<25', label: 'Days in A/R goal', sub: 'Sustained through active follow-up' },
{ value: '12+', label: 'Platforms supported', sub: 'EHR, payment, and payer portals' }];


export function Stats() {
  return (
    <section aria-label="Trusted statistics" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-maroon-800/10 bg-maroon-800/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            className="group bg-white p-7 lg:p-8 hover:bg-maroon-50/40 transition-colors duration-300">
            
              <motion.p
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
                className="font-display text-4xl font-extrabold tracking-tight text-maroon-900 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </motion.p>
              <p className="mt-3 text-sm font-bold text-maroon-950">{stat.label}</p>
              <p className="mt-1 text-sm text-navy-600 font-medium">{stat.sub}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}