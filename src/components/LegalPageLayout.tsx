import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-navy-100/60 font-medium uppercase tracking-wider">
              Last Updated: {lastUpdated}
            </p>
            <div className="mt-12 prose prose-lg prose-maroon max-w-none text-navy-700">
              {children}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
