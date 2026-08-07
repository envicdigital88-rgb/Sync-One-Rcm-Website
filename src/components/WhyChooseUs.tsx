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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}>
            
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
            <div className="mt-8 overflow-hidden rounded-3xl border border-maroon-800/10 bg-maroon-50/40">
              <img
                src={SECURITY_IMAGE}
                alt="Illustration of protected patient data and HIPAA-aligned security controls"
                className="h-64 w-full object-cover" />
              
              <div className="p-6">
                <p className="font-display text-sm font-bold text-maroon-950">
                  Security &amp; compliance by default
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  HIPAA-aligned handling of PHI, restricted-access workstations, signed
                  BAAs, and full audit trails across every workflow.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) =>
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index % 2 * 0.08 }}
              className="rounded-2xl border border-maroon-800/10 bg-white p-6 shadow-soft transition-all hover:border-gold-500/30">
              
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600 border border-gold-200/50">
                  <reason.icon className="size-5" aria-hidden="true" />
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