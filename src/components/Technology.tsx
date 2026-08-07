import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuitIcon,
  ScanSearchIcon,
  GaugeCircleIcon,
  LockKeyholeIcon } from
'lucide-react';
import {
  healthcarePlatforms,
  paymentPlatforms,
  payerPortals } from
'../data/platforms';

const DASHBOARD_IMAGE = "/d085531d-5c3a-4008-9d9d-8949dbd1c929.jpg";


const capabilities = [
{
  icon: BrainCircuitIcon,
  title: 'AI-assisted claim scrubbing',
  copy: 'Models flag high-risk claims before submission using historical payer behavior and edit rules.'
},
{
  icon: ScanSearchIcon,
  title: 'Predictive denial intelligence',
  copy: 'Denial patterns are clustered by payer, CPT, and provider so prevention work targets real causes.'
},
{
  icon: GaugeCircleIcon,
  title: 'Automated worklist prioritization',
  copy: 'A/R inventory is ranked by recoverable value and timely-filing risk, not just aging buckets.'
},
{
  icon: LockKeyholeIcon,
  title: 'Secure, compliant operations',
  copy: 'Role-based access, audit trails, and HIPAA-aligned controls protect every record we touch.'
}];


const platformGroups = [
{ label: 'Healthcare platforms', items: healthcarePlatforms },
{ label: 'Payment platforms', items: paymentPlatforms },
{ label: 'Payer portals', items: payerPortals }];


export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-maroon-950 py-20 text-white lg:py-28">
      <div
        className="pointer-events-none absolute -left-32 top-10 size-[30rem] rounded-full bg-gold-500/15 blur-3xl"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              AI &amp; technology advantage
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Intelligent automation, guided by experienced RCM specialists
            </h2>
            <p className="mt-5 text-base leading-relaxed text-maroon-100/80">
              Technology handles the repetitive detection work. Our specialists make the
              judgment calls. Together they deliver faster reimbursements with fewer
              touches per claim.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) =>
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group rounded-2xl border border-gold-500/20 bg-maroon-900/40 p-5 backdrop-blur-md transition-colors hover:border-gold-400/40 hover:bg-maroon-900/60">
                
                  <capability.icon className="size-5 text-gold-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold-300" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-sm font-bold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-maroon-100/70">
                    {capability.copy}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-4xl border border-gold-500/30 bg-maroon-900/30 p-2 backdrop-blur-xl shadow-[0_0_60px_rgba(91,6,38,0.6)]">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={DASHBOARD_IMAGE}
                  alt="Revenue cycle analytics dashboard showing collections trends and denial breakdowns"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105 [mask-image:radial-gradient(ellipse_at_center,black_82%,transparent_100%)]" />
                
                {/* Seamless dark maroon gradient overlay for edge blending */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-maroon-950/40" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-maroon-950/40 via-transparent to-maroon-950/40" />
              </div>
            </motion.div>

            <div className="mt-8 rounded-3xl border border-gold-500/20 bg-maroon-900/40 p-6 backdrop-blur-md">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-400">
                System expertise
              </h3>
              <div className="mt-5 space-y-5">
                {platformGroups.map((group) =>
                <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-100/60">
                      {group.label}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item, itemIdx) =>
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIdx * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 transition-colors hover:border-gold-400/40 hover:bg-gold-500/20">
                          {item}
                        </motion.li>
                    )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}