import React from 'react';
import { motion } from 'framer-motion';
import {
  AwardIcon,
  LayersIcon,
  ClipboardCheckIcon,
  HandshakeIcon,
  ScalingIcon,
  WorkflowIcon } from
'lucide-react';

const SECURITY_IMAGE = "/510b33ea-58d1-4f9a-a0b6-1b087688ab29.jpg";


const reasons = [
{
  icon: AwardIcon,
  title: 'RCM expertise',
  copy: 'Leadership with decades of hands-on revenue cycle and operations experience.'
},
{
  icon: LayersIcon,
  title: 'End-to-end capability',
  copy: 'From patient access to denial resolution, no gaps to backfill with another vendor.'
},
{
  icon: ClipboardCheckIcon,
  title: 'Quality focus',
  copy: 'Dedicated QA layer with sampling, scorecards, and documented corrective action.'
},
{
  icon: HandshakeIcon,
  title: 'Client partnership',
  copy: 'We operate as an extension of your team, with transparent reporting and access.'
},
{
  icon: ScalingIcon,
  title: 'Scalability',
  copy: 'Ramp capacity up or down as volumes, specialties, and locations change.'
},
{
  icon: WorkflowIcon,
  title: 'Process excellence',
  copy: 'Documented SOPs and workflow optimization that make results repeatable.'
}];


export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800">
              Why choose SyncOne RCM
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
              Built on accuracy, compliance, and accountability
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-600">
              Healthcare organizations do not need another vendor — they need a partner
              who is measured on the same financial outcomes they are.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 overflow-hidden rounded-3xl border border-maroon-800/10 bg-white p-2 shadow-lift">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-maroon-50/60 to-white">
                <img
                  src={SECURITY_IMAGE}
                  alt="Illustration of protected patient data and HIPAA-aligned security controls"
                  className="h-64 w-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105 [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />
                
                {/* Soft gradient edge fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              
              <div className="p-5">
                <p className="font-display text-sm font-bold text-maroon-950">
                  Security &amp; compliance by default
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  HIPAA-aligned handling of PHI, restricted-access workstations, signed
                  BAAs, and full audit trails across every workflow.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) =>
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, scale: 0.88, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group rounded-2xl border border-maroon-800/10 bg-white p-6 shadow-soft transition-all hover:border-gold-500/40 hover:shadow-lift">
              
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600 border border-gold-200/50 transition-colors group-hover:bg-gold-500 group-hover:text-white border-transparent">
                  <reason.icon className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-maroon-950">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {reason.copy}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}