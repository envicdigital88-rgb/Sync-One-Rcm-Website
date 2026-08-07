import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  { threshold: 0, text: 'Initializing Revenue Network...' },
  { threshold: 30, text: 'Connecting Healthcare Systems...' },
  { threshold: 65, text: 'Synchronizing Billing Operations...' },
  { threshold: 90, text: 'Ready for Excellence...' },
];

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    return () => clearInterval(timer);
  }, []);

  const currentStatusText =
    [...LOADING_STEPS].reverse().find((step) => progress >= step.threshold)?.text ||
    'Initializing...';

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(12px)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#140209] px-6 text-white select-none overflow-hidden">
          
          {/* Animated Background Mesh & Ambient Glow Orbs */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-maroon-900/50 via-[#140209] to-[#0A0105]" />
          
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute size-[36rem] rounded-full bg-gradient-to-tr from-maroon-800/40 via-gold-500/25 to-transparent blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-gold-500/20 blur-3xl"
            aria-hidden="true"
          />

          {/* Central Animated Content Container */}
          <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
            
            {/* Dual Rotating Rings around Floating Logo */}
            <div className="relative flex items-center justify-center mb-10">
              {/* Outer Counter-Clockwise Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute size-40 sm:size-44 rounded-full border border-dashed border-gold-400/40"
              />

              {/* Inner Clockwise Glowing Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute size-32 sm:size-36 rounded-full border-2 border-transparent border-t-gold-400 border-r-maroon-600/50 border-b-gold-300"
              />

              {/* Pulsing Aura Light */}
              <motion.div
                animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.4, 0.85, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute size-28 sm:size-32 rounded-full bg-gradient-to-r from-gold-500/30 to-maroon-800/30 blur-xl"
              />

              {/* Glassmorphic Floating Card */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 rounded-2xl bg-white p-4 shadow-[0_0_50px_rgba(200,138,36,0.45)] backdrop-blur-xl border border-white/40">
                <img
                  src="/logo.png"
                  alt="SyncOne RCM Logo"
                  className="h-11 w-auto object-contain sm:h-13"
                />
              </motion.div>
            </div>

            {/* Sub-label Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-maroon-900/70 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-300 backdrop-blur-md shadow-soft">
              <span className="size-1.5 rounded-full bg-gold-400 animate-ping" aria-hidden="true" />
              SyncOne RCM
            </motion.div>

            {/* Dynamic Status Text */}
            <div className="mt-7 h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStatusText}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-semibold uppercase tracking-widest text-gold-400/90">
                  {currentStatusText}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Sleek Progress Bar with Glowing Head */}
            <div className="mt-5 w-72">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10 p-0.5 backdrop-blur-md border border-white/15">
                <motion.div
                  className="relative h-full rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-400 shadow-[0_0_15px_rgba(200,138,36,0.9)]"
                  style={{ width: `${progress}%` }}>
                  {/* Glowing Leading Particle */}
                  <div className="absolute right-0 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                </motion.div>
              </div>

              {/* Large Stylized Percentage Indicator */}
              <div className="mt-4 flex items-center justify-between text-xs font-medium text-white/60">
                <span className="tracking-wider text-white/50">Revenue Engine</span>
                <span className="font-mono text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
                  {progress.toString().padStart(2, '0')}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
