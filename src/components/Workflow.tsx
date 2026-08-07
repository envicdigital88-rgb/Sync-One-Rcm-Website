import React from 'react';
import { motion } from 'framer-motion';

const steps = [
{
  step: '01',
  title: 'Patient access',
  copy: 'Eligibility, benefits, and prior authorization verified before the encounter.'
},
{
  step: '02',
  title: 'Charge capture & coding',
  copy: 'Documentation reviewed and coded accurately for the specialty and payer.'
},
{
  step: '03',
  title: 'Claims management',
  copy: 'Claims scrubbed, submitted, and tracked through payer acknowledgement.'
},
{
  step: '04',
  title: 'Payment posting',
  copy: 'Remittances posted and reconciled daily, with variances escalated.'
},
{
  step: '05',
  title: 'A/R & denial management',
  copy: 'Prioritized follow-up, appeals, and root-cause fixes fed back upstream.'
},
{
  step: '06',
  title: 'Quality & reporting',
  copy: 'QA audits and KPI reviews that keep performance visible and improving.'
}];


export function Workflow() {
  return (
    <section
      id="workflow"
      aria-label="Our workflow process"
      className="bg-maroon-50/30 py-20 lg:py-28">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800">
            Workflow process
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
            One synchronized cycle, from eligibility to collected revenue
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gold-300/60 lg:block"
            aria-hidden="true" />
          
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((item, index) =>
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
              className="relative rounded-3xl border border-maroon-800/10 bg-white p-7 shadow-soft transition-all hover:border-gold-500/30 hover:shadow-lift">
              
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-maroon-800 font-display text-sm font-extrabold text-gold-400 shadow-soft">
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-maroon-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.copy}</p>
              </motion.li>
            )}
          </ol>
        </div>
      </div>
    </section>);

}