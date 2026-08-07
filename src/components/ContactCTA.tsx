import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  Loader2Icon,
  AlertCircleIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon } from
'lucide-react';
import { services } from '../data/services';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const highlights = [
{ icon: MailIcon, label: 'Email', value: 'hello@synconercm.com' },
{ icon: MapPinIcon, label: 'Delivery center', value: 'Sri Lanka' },
{ icon: ClockIcon, label: 'Coverage', value: 'US time zones, 24/7 model' }];


export function ContactCTA() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    service: services[0].title,
    message: ''
  });

  const handleChange = (
  event: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1100);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-4xl border border-gold-500/20 bg-maroon-950 shadow-lift">
          
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Request free consultation
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let&rsquo;s review your revenue cycle — no cost, no obligation
              </h2>
              <p className="mt-5 text-base leading-relaxed text-maroon-100/80">
                Share a few details and our team will come back with an assessment of
                your denial trends, A/R health, and the highest-impact opportunities.
              </p>

              <ul className="mt-10 space-y-5">
                {highlights.map((item) =>
                <li key={item.label} className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-maroon-900/50 text-gold-400 backdrop-blur-md">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold-400/80">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <div className="rounded-3xl border border-gold-500/20 bg-maroon-900/40 p-6 backdrop-blur-xl sm:p-8">
              {status === 'success' ?
              <div
                role="status"
                className="flex h-full flex-col items-center justify-center py-10 text-center text-white">
                
                  <CheckCircle2Icon className="size-12 text-gold-400" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-bold">
                    Thank you, {form.name.split(' ')[0]}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-maroon-100/80">
                    Your request has been received. A SyncOne RCM specialist will reach
                    out within one business day to schedule your consultation.
                  </p>
                  <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setForm({
                      name: '',
                      organization: '',
                      email: '',
                      service: services[0].title,
                      message: ''
                    });
                  }}
                  className="mt-7 rounded-full border border-gold-500/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500/10">
                  
                    Submit another request
                  </button>
                </div> :

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gold-500/20 bg-maroon-950/60 px-4 py-3 text-sm text-white placeholder:text-maroon-200/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                      placeholder="Jane Doe" />
                    
                    </Field>
                    <Field label="Organization" htmlFor="organization">
                      <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gold-500/20 bg-maroon-950/60 px-4 py-3 text-sm text-white placeholder:text-maroon-200/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                      placeholder="Practice or health system" />
                    
                    </Field>
                  </div>

                  <Field label="Work email" htmlFor="email">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gold-500/20 bg-maroon-950/60 px-4 py-3 text-sm text-white placeholder:text-maroon-200/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    placeholder="you@organization.com" />
                  
                  </Field>

                  <Field label="Primary interest" htmlFor="service">
                    <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gold-500/20 bg-maroon-950/60 px-4 py-3 text-sm text-white focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30">
                    
                      {services.map((service) =>
                    <option key={service.title} value={service.title} className="bg-maroon-950 text-white">
                          {service.title}
                        </option>
                    )}
                      <option value="Full revenue cycle" className="bg-maroon-950 text-white">Full revenue cycle</option>
                    </select>
                  </Field>

                  <Field label="How can we help?" htmlFor="message">
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gold-500/20 bg-maroon-950/60 px-4 py-3 text-sm text-white placeholder:text-maroon-200/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                    placeholder="Specialties, volumes, current platform, and pain points" />
                  
                  </Field>

                  {status === 'error' &&
                <p
                  role="alert"
                  className="flex items-center gap-2 text-sm font-medium text-gold-400">
                  
                      <AlertCircleIcon className="size-4" aria-hidden="true" />
                      Please add your name and a valid work email.
                    </p>
                }

                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-500 text-base font-bold text-maroon-950 transition-all hover:bg-gold-400 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70">
                  
                    {status === 'submitting' ?
                  <>
                        <Loader2Icon className="size-5 animate-spin text-maroon-950" aria-hidden="true" />
                        Sending request
                      </> :

                  'Request Free Consultation'
                  }
                  </button>
                  <p className="text-center text-xs text-maroon-200/60">
                    Your information is handled under HIPAA-aligned confidentiality
                    practices.
                  </p>
                </form>
              }
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}

function Field({
  label,
  htmlFor,
  children




}: {label: string;htmlFor: string;children: React.ReactNode;}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-100/70">
        
        {label}
      </label>
      {children}
    </div>);

}