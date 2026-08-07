import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ShieldCheckIcon, TrendingUpIcon, ActivityIcon } from 'lucide-react';
import { InfiniteSlider } from './ui/InfiniteSlider';
import { ProgressiveBlur } from './ui/ProgressiveBlur';
import { allPlatforms } from '../data/platforms';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <>
      {/* ── Hero — full-bleed video, no colour overlay ── */}
      <section id="top" className="relative overflow-hidden">

        {/* Video: fills the container, no invert, no colour tint */}
        <div className="relative aspect-[2/3] sm:aspect-video lg:min-h-[92vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          />

          {/* Minimal bottom-only gradient so text stays readable — no colour tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* ── Hero content — lower-left, matching tailark layout ── */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-12 lg:pb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12 }}
                className="max-w-2xl">

                {/* Badge */}
                <motion.span
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                  <span className="size-2 rounded-full bg-gold-400 animate-pulse" aria-hidden="true" />
                  End-to-end revenue cycle management
                </motion.span>

                {/* Headline */}
                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Transform Your Healthcare Revenue Cycle With{' '}
                  <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                    Intelligent Billing
                  </span>{' '}
                  Solutions
                </motion.h1>

                {/* Sub-copy */}
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
                  We help hospitals, physicians, and healthcare organizations maximize
                  reimbursements, reduce claim denials, and improve financial performance
                  through technology-driven RCM solutions.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="mt-8 flex flex-wrap items-center gap-3">

                  <a
                    href="#contact"
                    className="group inline-flex h-11 items-center justify-center rounded-full bg-maroon-800 pl-5 pr-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-maroon-700 hover:shadow-glow">
                    <span className="text-nowrap">Request Free Consultation</span>
                    <ChevronRightIcon
                      className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1 text-gold-400"
                      aria-hidden="true" />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-400/50 hover:bg-white/10">
                    <span className="text-nowrap">Explore Services</span>
                  </a>
                </motion.div>

                {/* Trust bullets */}
                <motion.ul
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/55">
                  <li className="flex items-center gap-1.5">
                    <ShieldCheckIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                    HIPAA-aligned processes
                  </li>
                  <li className="flex items-center gap-1.5">
                    <TrendingUpIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                    Clean claim rate focus
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ActivityIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                    24/7 delivery model
                  </li>
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform slider strip ── */}
      <section className="bg-white pb-2 border-b border-maroon-800/10">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-maroon-800/10 md:pr-6">
              <p className="text-center text-sm font-semibold text-navy-500 md:text-end">
                Experienced across leading platforms
              </p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={12} speed={40} gap={80}>
                {allPlatforms.map((platform) =>
                  <span
                    key={platform}
                    className="whitespace-nowrap font-display text-base font-bold tracking-tight text-navy-400">
                    {platform}
                  </span>
                )}
              </InfiniteSlider>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"
                aria-hidden="true" />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"
                aria-hidden="true" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1} />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}