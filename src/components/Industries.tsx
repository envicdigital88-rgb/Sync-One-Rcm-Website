import React from 'react';
import { motion } from 'framer-motion';
import {
  StethoscopeIcon,
  BuildingIcon,
  HeartPulseIcon,
  BriefcaseMedicalIcon,
  HospitalIcon,
  MicroscopeIcon } from
'lucide-react';

const industries = [
{
  icon: StethoscopeIcon,
  title: 'Physician practices',
  copy: 'Solo and small-group practices needing dependable billing without in-house overhead.'
},
{
  icon: BuildingIcon,
  title: 'Medical groups',
  copy: 'Multi-provider, multi-location groups standardizing revenue operations.'
},
{
  icon: HeartPulseIcon,
  title: 'Specialty clinics',
  copy: 'Cardiology, orthopedics, behavioral health, and other coding-intensive specialties.'
},
{
  icon: BriefcaseMedicalIcon,
  title: 'Medical billing companies',
  copy: 'White-label delivery capacity for billing firms scaling client volume.'
},
{
  icon: HospitalIcon,
  title: 'Healthcare organizations',
  copy: 'Hospitals and health systems needing extended A/R and denial support.'
},
{
  icon: MicroscopeIcon,
  title: 'Diagnostics & ancillary',
  copy: 'Labs, imaging, and ancillary services with high-volume, high-edit claim flows.'
}];


export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800">
              Industries served
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
              Specialty-aware support across the provider landscape
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-navy-600">
            Each engagement is staffed with specialists familiar with your payer mix,
            specialty coding rules, and platform of record.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-maroon-800/10 bg-maroon-800/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) =>
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            whileHover={{ y: -3 }}
            className="group bg-white p-8 transition-all duration-300 hover:bg-maroon-50/60">
            
              <industry.icon
              className="size-6 text-maroon-800 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-600"
              aria-hidden="true" />
            
              <h3 className="mt-5 font-display text-base font-bold text-maroon-950">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {industry.copy}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}