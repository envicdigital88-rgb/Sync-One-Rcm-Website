import React from 'react';
import { Preloader } from '../components/Preloader';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Technology } from '../components/Technology';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Workflow } from '../components/Workflow';
import { Industries } from '../components/Industries';
import { Testimonials } from '../components/Testimonials';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="w-full bg-white">
      <Preloader />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Technology />
        <WhyChooseUs />
        <Workflow />
        <Industries />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
