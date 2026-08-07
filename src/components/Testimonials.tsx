import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon, StarIcon } from 'lucide-react';

const testimonials = [
{
  quote:
  'Our denial rate dropped noticeably within two quarters. What changed was not just the follow-up — it was the root-cause work feeding back into our front-desk verification process.',
  name: 'Dr. Elena Marsh',
  role: 'Managing Partner, Multi-Specialty Group'
},
{
  quote:
  'They learned our eClinicalWorks workflows faster than any vendor we have onboarded, and the weekly reporting is transparent enough that we stopped asking for updates.',
  name: 'Priya Raghavan',
  role: 'Director of Revenue Operations'
},
{
  quote:
  'Aged A/R we had written off as uncollectible came back in. The team treats our revenue like it is their own — that is genuinely rare in outsourced billing.',
  name: 'Michael Contreras',
  role: 'CFO, Regional Orthopedic Network'
}];


export function Testimonials() {
  return (
    <section
      aria-label="Client testimonials"
      className="bg-maroon-50/40 py-20 lg:py-28">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800">
            Client testimonials
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-maroon-950 sm:text-4xl">
            Trusted by finance and operations leaders
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) =>
          <motion.figure
            key={testimonial.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col rounded-3xl border border-maroon-800/10 bg-white p-7 shadow-soft transition-all hover:border-gold-500/30 hover:shadow-lift">
            
              <QuoteIcon className="size-7 text-gold-500" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy-700 font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div
              className="mt-6 flex gap-1 text-gold-500"
              aria-label="Rated 5 out of 5">
              
                {Array.from({ length: 5 }).map((_, starIndex) =>
              <StarIcon
                key={starIndex}
                className="size-4 fill-current text-gold-500"
                aria-hidden="true" />

              )}
              </div>
              <figcaption className="mt-4 border-t border-maroon-800/10 pt-4">
                <p className="text-sm font-bold text-maroon-950">{testimonial.name}</p>
                <p className="text-xs text-navy-600 font-medium">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

}