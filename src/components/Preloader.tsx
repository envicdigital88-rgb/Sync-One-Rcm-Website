import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#17020A] px-6 text-white select-none overflow-hidden">
          
          {/* Animated Background Mesh & Radial Glowing Orbs */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-maroon-900/40 via-[#17020A] to-[#0A0105]" />
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute size-[32rem] rounded-full bg-gradient-to-tr from-maroon-800/30 via-gold-500/20 to-transparent blur-3xl"
            aria-hidden="true"
          />

          {/* Glowing Animated Circular Ring around logo */}
          <div className="relative flex flex-col items-center max-w-sm text-center z-10">
            <div className="relative flex items-center justify-center mb-8">
              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute size-32 sm:size-36 rounded-full border border-dashed border-gold-500/30"
              />

              {/* Pulsing inner glow */}
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute size-28 sm:size-32 rounded-full bg-gold-500/10 blur-md"
              />

              {/* Logo Card */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 rounded-2xl bg-white p-4 shadow-[0_0_40px_rgba(200,138,36,0.35)] backdrop-blur-xl">
                <img
                  src="/logo.png"
                  alt="SyncOne RCM Logo"
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </motion.div>
            </div>

            {/* Sub-label Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-maroon-900/60 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur-md shadow-soft">
              <span className="size-1.5 rounded-full bg-gold-400 animate-ping" aria-hidden="true" />
              SyncOne RCM
            </motion.div>

            {/* High Tech Progress Indicator */}
            <div className="mt-8 w-64">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10 p-0.5 backdrop-blur-md border border-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-400 shadow-[0_0_12px_rgba(200,138,36,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[0.75rem] font-medium text-white/60">
                <span className="tracking-wider">Loading Experience</span>
                <span className="font-mono font-bold text-gold-400">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
