import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ShieldCheckIcon, TrendingUpIcon, ActivityIcon } from 'lucide-react';
import { InfiniteSlider } from './ui/InfiniteSlider';
import { ProgressiveBlur } from './ui/ProgressiveBlur';
import { allPlatforms } from '../data/platforms';

// ── Typewriter config ─────────────────────────────────────────────────────
const HEADLINE_LINES = [
  'Maximize',
  'Healthcare',
  'Revenue With',
  'Intelligent Billing',
];

const GOLD_LINE = 'Intelligent Billing';

function buildChars(lines: string[]) {
  const result: { char: string; isGold: boolean }[] = [];
  lines.forEach((line, lineIdx) => {
    line.split('').forEach((char) => {
      result.push({ char, isGold: line === GOLD_LINE });
    });
    if (lineIdx < lines.length - 1) {
      result.push({ char: '\n', isGold: false });
    }
  });
  return result;
}

const CHARS = buildChars(HEADLINE_LINES);
const CHAR_DELAY  = 0.09;  // ← slower: 90ms between each character
const START_DELAY = 0.6;
const TOTAL_DURATION = START_DELAY + CHARS.length * CHAR_DELAY;

const charVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

export function Hero() {
  return (
    <>
      {/* ── Hero — full-bleed video ── */}
      <section id="top" className="relative overflow-hidden">

        {/* 
          Key layout fix:
          - Removed justify-end (which pushed content to bottom and caused clipping)
          - Added flex-col items-start justify-end with generous bottom padding
          - On desktop, the section is tall enough to show all lines
        */}
        <div className="relative flex flex-col justify-end min-h-[640px] sm:min-h-[700px] lg:min-h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          />

          {/* Gradient overlay — stronger at bottom so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* ── Hero content ── */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-32 sm:px-6 sm:pb-16 lg:px-12 lg:pb-24">
            <div className="max-w-3xl">

              {/* ── Typewriter Headline ── */}
              <h1 className="font-display text-4xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden:  {},
                    visible: {
                      transition: {
                        staggerChildren: CHAR_DELAY,
                        delayChildren:   START_DELAY,
                      },
                    },
                  }}>
                  {CHARS.map((item, i) => {
                    if (item.char === '\n') {
                      return <br key={`br-${i}`} />;
                    }
                    if (item.char === ' ') {
                      return (
                        <motion.span key={i} variants={charVariant} className="inline-block w-[0.25em]">
                          {'\u00A0'}
                        </motion.span>
                      );
                    }
                    return (
                      <motion.span
                        key={i}
                        variants={charVariant}
                        className={
                          item.isGold
                            ? 'inline-block bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500 bg-clip-text text-transparent drop-shadow-lg'
                            : 'inline-block'
                        }>
                        {item.char}
                      </motion.span>
                    );
                  })}
                </motion.span>

                {/* Blinking gold cursor */}
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 1, 0, 1, 0] }}
                  transition={{
                    delay:       START_DELAY,
                    duration:    0.85,
                    repeat:      Infinity,
                    repeatDelay: 0.05,
                    times:       [0, 0.45, 0.5, 0.75, 1],
                  }}
                  className="ml-0.5 inline-block h-[0.8em] w-[3px] translate-y-[0.06em] rounded-sm bg-gold-400 align-middle shadow-[0_0_10px_rgba(200,138,36,1)]"
                  aria-hidden="true"
                />
              </h1>

              {/* Sub-copy — appears after typing finishes */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: TOTAL_DURATION + 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
                Empowering healthcare practices and hospitals to eliminate claim denials,
                accelerate reimbursements, and optimize financial performance effortlessly.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: TOTAL_DURATION + 0.55, ease: 'easeOut' }}
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-maroon-800 px-6 text-sm font-semibold text-white shadow-soft transition-all hover:bg-maroon-700 hover:shadow-glow sm:w-auto">
                  <span className="text-nowrap">Request Free Consultation</span>
                  <ChevronRightIcon
                    className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1 text-gold-400"
                    aria-hidden="true" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#services"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold-400/50 hover:bg-white/10 sm:w-auto">
                  <span className="text-nowrap">Explore Services</span>
                </motion.a>
              </motion.div>

              {/* Trust bullets */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden:  { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: TOTAL_DURATION + 1.0 },
                  },
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