'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabaseClient';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) throw error;

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl mb-6"
          >
            CONTACT <span className="text-primary">US</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            Ready to accelerate your growth? Let&apos;s talk.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg p-8 md:p-12 rounded-sm border border-white/5 orange-border-glow"
          >
            <h2 className="font-display text-3xl mb-8 uppercase tracking-wider">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Name</label>
                  <input
                    {...register('name')}
                    className="w-full bg-surface border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-sm"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-primary text-[10px] uppercase">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email</label>
                  <input
                    {...register('email')}
                    className="w-full bg-surface border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-sm"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-primary text-[10px] uppercase">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone (Optional)</label>
                  <input
                    {...register('phone')}
                    className="w-full bg-surface border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-sm"
                    placeholder="+91 98361-30393"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Service Required</label>
                  <select
                    {...register('service')}
                    className="w-full bg-surface border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-sm appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="SEO">SEO Optimization</option>
                    <option value="PPC">PPC Advertising</option>
                    <option value="SMM">Social Media Marketing</option>
                    <option value="Ecommerce">Ecommerce Development</option>
                    <option value="WebDev">Web Development</option>
                    <option value="Analytics">Analytics & Reporting</option>
                  </select>
                  {errors.service && <p className="text-primary text-[10px] uppercase">{errors.service.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Budget Range</label>
                <select
                  {...register('budget')}
                  className="w-full bg-surface border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-sm appearance-none"
                >
                  <option value="">Select budget</option>
                  <option value="< $1000">Less than $1,000</option>
                  <option value="$1000 - $5000">$1,000 - $5,000</option>
                  <option value="$5000 - $10000">$5,000 - $10,000</option>
                  <option value="$10000+">$10,000+</option>
                </select>
                {errors.budget && <p className="text-primary text-[10px] uppercase">{errors.budget.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full bg-surface border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-primary text-sm resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-primary text-[10px] uppercase">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-primary/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 text-green-500 p-4 rounded-sm text-center text-xs font-bold uppercase tracking-widest border border-green-500/20"
                >
                  Message Sent Successfully! We&apos;ll get back to you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="font-display text-4xl uppercase tracking-wider">Get in Touch</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-text-muted">apex7tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-text-muted">+91 98361-30393</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-widest mb-1">Our Office</h4>
                  <p className="text-text-muted">27/3B Jugal Kishor Das Lane, Kolkata – 700006, WB, India</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card-bg p-6 border border-white/5 rounded-sm flex items-center gap-4">
                <Clock className="text-primary" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-text-muted">Response Time</div>
                  <div className="text-sm font-bold">Within 24 Hours</div>
                </div>
              </div>
              <div className="bg-card-bg p-6 border border-white/5 rounded-sm flex items-center gap-4">
                <MessageSquare className="text-primary" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-text-muted">Support</div>
                  <div className="text-sm font-bold">24/7 Priority</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.945828624185!2d88.3619!3d22.5819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02764f6f000001%3A0x0!2zMjLCsDM0JzU0LjgiTiA4OMKwMjEnNDIuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
