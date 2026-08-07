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
      {/* ── Hero — full-bleed video ── */}
      <section id="top" className="relative overflow-hidden">

        {/* Video container with mobile-friendly min-height */}
        <div className="relative min-h-[580px] sm:aspect-video lg:min-h-[92vh] flex flex-col justify-end">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          />

          {/* Bottom-only gradient so text stays readable on mobile & desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* ── Hero content ── */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-24 sm:px-6 sm:pb-14 lg:px-12 lg:pb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
              className="max-w-2xl">

              {/* Headline with Slow Masked Word Slide-Up Reveal */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.18, delayChildren: 1.2 } }
                }}
                className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]">
                {['Maximize', 'Healthcare', 'Revenue', 'With'].map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden py-1">
                    <motion.span
                      variants={{
                        hidden: { y: '130%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block">
                      {word}
                    </motion.span>
                  </span>
                ))}
                
                <span className="inline-block overflow-hidden py-1">
                  <motion.span
                    variants={{
                      hidden: { y: '130%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="inline-block">
                    <motion.span
                      initial={{ backgroundPosition: '0% 50%' }}
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      className="bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-md">
                      Intelligent Billing
                    </motion.span>
                  </motion.span>
                </span>
              </motion.h1>

              {/* Sub-copy with Slow Reveal */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base lg:text-lg">
                Empowering healthcare practices and hospitals to eliminate claim denials, accelerate reimbursements, and optimize financial performance effortlessly.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 2.6, ease: 'easeOut' }}
                className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-maroon-800 px-5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-maroon-700 hover:shadow-glow sm:w-auto">
                  <span className="text-nowrap">Request Free Consultation</span>
                  <ChevronRightIcon
                    className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1 text-gold-400"
                    aria-hidden="true" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  href="#services"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-400/50 hover:bg-white/10 sm:w-auto">
                  <span className="text-nowrap">Explore Services</span>
                </motion.a>
              </motion.div>

              {/* Trust bullets */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 3.0 } }
                }}
                className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-medium text-white/80 sm:mt-7 sm:text-sm">
                <motion.li
                  variants={{ hidden: { opacity: 0, x: -14 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                  className="flex items-center gap-1.5">
                  <ShieldCheckIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                  HIPAA Compliant &amp; Secure
                </motion.li>
                <motion.li
                  variants={{ hidden: { opacity: 0, x: -14 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                  className="flex items-center gap-1.5">
                  <TrendingUpIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                  98%+ Clean Claim Rate
                </motion.li>
                <motion.li
                  variants={{ hidden: { opacity: 0, x: -14 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                  className="flex items-center gap-1.5">
                  <ActivityIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                  24/7 Dedicated RCM Support
                </motion.li>
              </motion.ul>
            </motion.div>
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