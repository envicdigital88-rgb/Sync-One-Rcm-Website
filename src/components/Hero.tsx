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
      <section id="top" className="bg-white">
        <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
              className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-maroon-800/15 bg-maroon-50/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-maroon-900 backdrop-blur">
                
                <span className="size-2 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
                End-to-end revenue cycle management
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-8 max-w-2xl text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-maroon-950 md:text-6xl lg:mt-16 xl:text-7xl">
                
                Transform Your Healthcare Revenue Cycle With{' '}
                <span className="text-maroon-800 bg-gradient-to-r from-maroon-800 via-maroon-700 to-gold-600 bg-clip-text text-transparent">
                  Intelligent Billing
                </span>{' '}
                Solutions
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-navy-600">
                
                We help hospitals, physicians, and healthcare organizations maximize
                reimbursements, reduce claim denials, and improve financial performance
                through technology-driven RCM solutions.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                
                <a
                  href="#contact"
                  className="group inline-flex h-12 items-center justify-center rounded-full bg-maroon-800 pl-5 pr-3 text-base font-semibold text-white shadow-soft transition-all hover:bg-maroon-900 hover:shadow-glow">
                  
                  <span className="text-nowrap">Request Free Consultation</span>
                  <ChevronRightIcon
                    className="ml-1 size-5 transition-transform duration-200 group-hover:translate-x-1 text-gold-400"
                    aria-hidden="true" />
                  
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full px-5 text-base font-semibold text-maroon-900 border border-maroon-800/10 hover:border-gold-500/30 transition-colors hover:bg-gold-50/50">
                  
                  <span className="text-nowrap">Explore Services</span>
                </a>
              </motion.div>

              <motion.ul
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-navy-700 lg:justify-start">
                
                <li className="flex items-center gap-2">
                  <ShieldCheckIcon className="size-4 text-gold-500" aria-hidden="true" />
                  HIPAA-aligned processes
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUpIcon className="size-4 text-gold-500" aria-hidden="true" />
                  Clean claim rate focus
                </li>
                <li className="flex items-center gap-2">
                  <ActivityIcon className="size-4 text-gold-500" aria-hidden="true" />
                  24/7 delivery model
                </li>
              </motion.ul>
            </motion.div>
          </div>

          <div className="absolute inset-1 aspect-[2/3] overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="size-full object-cover opacity-50 invert"
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477" />
            
          </div>
        </div>
      </section>

      <section className="bg-white pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-black/10 md:pr-6">
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
    </>);

}