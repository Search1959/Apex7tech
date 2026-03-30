'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Search, DollarSign, Smartphone, ShoppingCart, Globe, BarChart3, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'seo',
    icon: <Search size={40} />,
    title: 'SEO Optimization',
    subtitle: 'Dominate Search Results',
    description: 'Boost your visibility and drive organic traffic with expert SEO strategies tailored to your business.',
    features: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Local SEO', 'Keyword Research', 'Content Strategy'],
    image: 'https://images.unsplash.com/photo-1657737184798-ca66daa64066',
  },
  {
    id: 'ppc',
    icon: <DollarSign size={40} />,
    title: 'PPC / Google Ads',
    subtitle: 'Instant Traffic & ROI',
    description: 'Maximise your ROI with targeted Google & Bing Ads campaigns designed to convert.',
    features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads', 'Remarketing', 'Campaign Audit'],
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/ppc-campaign-gozovcabs-mv0P0jBp3wF0ooJl.png',
  },
  {
    id: 'smm',
    icon: <Smartphone size={40} />,
    title: 'Social Media Marketing',
    subtitle: 'Build Brand Authority',
    description: 'Build brand authority and engagement across Facebook, Instagram, LinkedIn, and more.',
    features: ['Strategy Development', 'Content Creation', 'Paid Social Ads', 'Community Management', 'Influencer Outreach', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1657737184816-97bb5e63c32b',
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={40} />,
    title: 'Ecommerce Development',
    subtitle: 'Sell More Online',
    description: 'Shopify, Etsy, Amazon — complete setup, design, and marketing for online stores.',
    features: ['Shopify Store Setup', 'Etsy Shop Branding', 'Amazon Listing Optimization', 'Payment Integration', 'Product Catalog', 'Email Automation'],
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/catlog-shopify-mjE4E2b6JDf3yaw0.PNG',
  },
  {
    id: 'webdev',
    icon: <Globe size={40} />,
    title: 'Web Development',
    subtitle: 'High-Performance Sites',
    description: 'Fast, SEO-optimised, conversion-focused websites built on modern frameworks.',
    features: ['Next.js Development', 'WordPress Customization', 'Landing Page Design', 'Speed Optimization', 'Mobile Responsive', 'UI/UX Design'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    id: 'analytics',
    icon: <BarChart3 size={40} />,
    title: 'Analytics & Reporting',
    subtitle: 'Data-Driven Growth',
    description: 'GA4, GTM, Data Studio — track every metric that matters to your growth.',
    features: ['GA4 Setup', 'GTM Implementation', 'Custom Dashboards', 'Conversion Tracking', 'Monthly Reports', 'User Behavior Analysis'],
    image: 'https://images.unsplash.com/photo-1657737185882-4403efaaa92d',
  },
];

const steps = [
  { number: '01', title: 'Discovery', description: 'We dive deep into your business goals and market.' },
  { number: '02', title: 'Strategy', description: 'Crafting a bespoke roadmap for your digital growth.' },
  { number: '03', title: 'Execute', description: 'Launching high-impact campaigns and solutions.' },
  { number: '04', title: 'Optimise', description: 'Continuous monitoring and data-driven adjustments.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl mb-6"
          >
            OUR <span className="text-primary">SERVICES</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            Comprehensive digital growth solutions designed for the modern market.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 px-6 space-y-32">
        {services.map((service, i) => (
          <div key={service.id} className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h2 className="font-display text-4xl md:text-5xl mb-2">{service.title}</h2>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6">{service.subtitle}</p>
                <p className="text-text-muted text-lg mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-text-light">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="bg-primary text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform orange-border-glow">
                  Get a Quote
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative aspect-video rounded-sm overflow-hidden border border-white/10 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl mb-4">HOW WE WORK</h2>
            <p className="text-text-muted uppercase tracking-widest text-sm">Our 4-step growth process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0" />
            
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 bg-card-bg p-8 border border-white/5 rounded-sm text-center group hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 bg-primary text-white font-display text-3xl flex items-center justify-center mx-auto mb-6 rounded-full group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h4 className="font-display text-2xl mb-4 uppercase tracking-wider">{step.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
