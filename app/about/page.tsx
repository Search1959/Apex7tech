'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, Lightbulb, TrendingUp, Users, Linkedin } from 'lucide-react';

const stats = [
  { label: 'Clients', value: '150+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Campaigns', value: '500+' },
  { label: 'Core Services', value: '6' },
];

const values = [
  { icon: <Lightbulb className="text-primary" />, title: 'Innovation', description: 'Staying ahead of digital trends to give you a competitive edge.' },
  { icon: <Target className="text-primary" />, title: 'Results', description: 'Data-driven strategies focused on your bottom line.' },
  { icon: <Users className="text-primary" />, title: 'Partnership', description: 'We treat your business as our own, growing together.' },
  { icon: <TrendingUp className="text-primary" />, title: 'Transparency', description: 'Clear reporting and honest communication at every step.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-surface/90" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl mb-6"
          >
            ABOUT <span className="text-primary">APEX<span className="orange-glow">7</span>TECH</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            Your High-Voltage Digital Marketing Partner.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              OUR <span className="text-primary">STORY</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Founded with a passion for data-driven growth, Apex7tech is a full-service digital marketing agency based in Kolkata, India, serving clients globally. We believe in the power of digital transformation to level the playing field for businesses of all sizes.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Our team of certified experts combines creative thinking with technical precision to deliver campaigns that don&apos;t just look good—they perform. From the heart of Kolkata to the global stage, we are here to accelerate your brand.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-display text-3xl text-primary">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-sm overflow-hidden border border-primary/20 orange-border-glow"
          >
            <Image
              src="https://images.unsplash.com/photo-1657737184798-ca66daa64066"
              alt="Apex7tech Team"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-secondary text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-display text-5xl">OUR MISSION</h2>
          <p className="text-2xl md:text-3xl font-light italic text-text-light leading-relaxed">
            &quot;Our mission is to make powerful digital marketing accessible to every business — big or small. We accelerate growth, amplify voices, and achieve measurable success for our partners.&quot;
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl mb-4">OUR VALUES</h2>
            <p className="text-text-muted uppercase tracking-widest text-sm">The pillars of our agency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-bg p-8 border border-white/5 rounded-sm hover:border-primary transition-colors"
              >
                <div className="mb-6">{value.icon}</div>
                <h4 className="font-display text-2xl mb-4 uppercase tracking-wider">{value.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl mb-16">MEET THE FOUNDER</h2>
          <div className="max-w-sm mx-auto bg-card-bg border border-white/5 rounded-sm overflow-hidden group hover:border-primary transition-colors">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1657737184816-97bb5e63c32b"
                alt="Founder"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <h4 className="font-display text-2xl mb-1 uppercase tracking-widest text-primary">Apex Founder</h4>
              <p className="text-xs text-text-muted uppercase tracking-tighter mb-4">CEO & Digital Strategist</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-text-muted hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
