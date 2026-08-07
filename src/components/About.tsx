import React from 'react';
import { motion } from 'framer-motion';
import {
  TargetIcon,
  CompassIcon,
  CheckCircle2Icon } from
'lucide-react';

const ABOUT_IMAGE = "/f8d82547-8506-4234-838a-4515d0984e4f.jpg";


const values = [
{ name: 'Precision', copy: 'Accurate, reliable RCM outcomes.' },
{ name: 'Integrity', copy: 'Trust through transparency and accountability.' },
{ name: 'Partnership', copy: 'Working together toward shared success.' },
{ name: 'Excellence', copy: 'Continuously improving quality and performance.' },
{ name: 'Innovation', copy: 'Smarter approaches for better results.' },
{ name: 'Security', copy: 'Protecting sensitive healthcare information.' }];


export function About() {
  return (
    <section id="about" className="relative bg-navy-50/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}>
            
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800">
              About SyncOne RCM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
              A trusted extension of your revenue cycle team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base leading-relaxed text-navy-600">
              SyncOne RCM delivers reliable, accurate, and results-driven outsourcing
              solutions to healthcare organizations. Our leadership team brings decades
              of proven expertise in revenue cycle management, operational excellence,
              and quality-driven service delivery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 text-base leading-relaxed text-navy-600">
              We provide comprehensive end-to-end services — from insurance verification
              and charge entry through payment posting, accounts receivable management,
              denial management, quality assurance, and operational consulting — building
              long-term partnerships that are scalable, transparent, and value-driven.
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-maroon-800/10 bg-white p-6 shadow-soft transition-all hover:border-gold-500/40 hover:shadow-lift">
                <CompassIcon className="size-6 text-maroon-800" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold text-maroon-950">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  To redefine healthcare revenue operations through trusted
                  partnerships, operational excellence, and intelligent RCM solutions.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-maroon-800/10 bg-white p-6 shadow-soft transition-all hover:border-gold-500/40 hover:shadow-lift">
                <TargetIcon className="size-6 text-maroon-800" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold text-maroon-950">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  To synchronize people, processes, and technology into efficient revenue
                  cycle operations that drive measurable value.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pt-6">
            
            <div className="relative group overflow-hidden rounded-3xl shadow-[0_20px_50px_-10px_rgba(91,6,38,0.18)] border border-maroon-800/10">
              <img
                src={ABOUT_IMAGE}
                alt="SyncOne RCM billing specialists collaborating on claims data"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-84 [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]" />
              
              {/* Soft vignette overlay blending with section background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-950/30 via-transparent to-transparent opacity-80" />
            </div>

            <div className="mt-8 rounded-3xl border border-maroon-800/10 bg-white p-7 shadow-soft">
              <h3 className="font-display text-lg font-bold text-maroon-950">
                Our core values
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {values.map((value, idx) =>
                <motion.li
                  key={value.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="flex gap-3">
                    <CheckCircle2Icon
                      className="mt-0.5 size-4 shrink-0 text-gold-500"
                      aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-maroon-900">{value.name}</p>
                      <p className="text-sm text-navy-600">{value.copy}</p>
                    </div>
                  </motion.li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}