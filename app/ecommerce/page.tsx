'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, ShoppingBag, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

const platforms = [
  {
    id: 'shopify',
    name: 'Shopify',
    title: 'Shopify Store Excellence',
    description: 'Complete setup, design, and marketing for high-converting Shopify stores.',
    features: [
      'Full store setup & design',
      'Product catalog upload & optimisation',
      'Payment gateway integration',
      'Shopify SEO & Speed optimisation',
      'Abandoned cart & email automation',
    ],
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/catlog-shopify-mjE4E2b6JDf3yaw0.PNG',
  },
  {
    id: 'etsy',
    name: 'Etsy',
    title: 'Etsy Shop Domination',
    description: 'Branding and SEO strategies to make your Etsy shop stand out.',
    features: [
      'Shop creation & branding',
      'Product listing optimisation (SEO)',
      'Etsy Ads management',
      'Competitor analysis',
      'Customer engagement strategy',
    ],
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/upwork-etsy-mP435ep1J6iykZR7.PNG',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    title: 'Amazon Marketplace Growth',
    description: 'Optimising your presence on the world&apos;s largest marketplace.',
    features: [
      'Seller Central setup',
      'Product listing & A+ content',
      'Amazon PPC management',
      'Brand Registry assistance',
      'Review management strategy',
    ],
    image: 'https://images.unsplash.com/photo-1657737185882-4403efaaa92d',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    title: 'Custom WooCommerce Solutions',
    description: 'Flexible and powerful ecommerce built on WordPress.',
    features: [
      'WordPress + WooCommerce setup',
      'Theme customisation',
      'Plugin configuration',
      'Speed & security optimisation',
      'Scalable hosting solutions',
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
];

export default function EcommercePage() {
  const [activeTab, setActiveTab] = useState('shopify');

  const activePlatform = platforms.find(p => p.id === activeTab)!;

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
            ECOMMERCE <span className="text-primary">SOLUTIONS</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            We build online stores that don&apos;t just look good—they sell.
          </p>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-8 py-3 rounded-sm font-display text-xl tracking-widest transition-all ${
                  activeTab === p.id 
                    ? 'bg-primary text-white orange-border-glow' 
                    : 'bg-card-bg text-text-muted hover:text-primary border border-white/5'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-8">
                <h2 className="font-display text-4xl md:text-5xl">{activePlatform.title}</h2>
                <p className="text-text-muted text-lg leading-relaxed">{activePlatform.description}</p>
                
                <ul className="space-y-4">
                  {activePlatform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-light">
                      <CheckCircle2 size={20} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="bg-primary text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform orange-border-glow">
                  Start Your {activePlatform.name} Store
                </button>
              </div>

              <div className="relative aspect-video rounded-sm overflow-hidden border border-primary/20 orange-border-glow">
                <Image
                  src={activePlatform.image}
                  alt={activePlatform.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl mb-16">OUR ECOMMERCE PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: <ShoppingBag />, title: 'Consult' },
              { icon: <TrendingUp />, title: 'Design' },
              { icon: <Zap />, title: 'Build' },
              { icon: <ShieldCheck />, title: 'Launch' },
              { icon: <TrendingUp />, title: 'Grow' },
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mx-auto rounded-full border border-primary/20">
                  {step.icon}
                </div>
                <h4 className="font-display text-xl uppercase tracking-widest">{step.title}</h4>
                {i < 4 && <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-primary/10 -translate-y-1/2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
