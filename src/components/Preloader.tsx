import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-maroon-950 px-6 text-white select-none">
          
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute size-[28rem] rounded-full bg-gold-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: [0.95, 1.05, 1], opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="rounded-2xl bg-white/95 p-4 shadow-glow backdrop-blur-md">
              <img
                src="/logo.png"
                alt="SyncOne RCM Logo"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
              Synchronizing Revenue Operations
            </motion.p>

            {/* Progress Bar Container */}
            <div className="mt-8 w-64 overflow-hidden rounded-full bg-white/10 p-1 backdrop-blur-md border border-gold-500/20">
              <motion.div
                className="h-1.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-400 shadow-glow"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Percentage Indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 font-display text-xs font-bold text-white/70 tracking-wider">
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
