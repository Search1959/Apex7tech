'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import StatCounter from '@/components/StatCounter';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        {/* Diagonal Slash */}
        <div className="absolute -bottom-20 -left-20 w-[60%] h-40 bg-primary/20 -rotate-12 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-highlight/20 orange-border-glow"
          >
            <CheckCircle size={14} />
            Google Certified Partner
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            ACCELERATE YOUR BRAND WITH <span className="text-primary">APEX<span className="orange-glow">7</span>TECH</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-8 max-w-xl leading-relaxed">
            Customised digital marketing strategies that drive traffic, dominate SERPs, and convert browsers into buyers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform orange-border-glow"
            >
              Start Your Campaign <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-sm overflow-hidden border border-primary/20 orange-border-glow">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Apex7tech Digital Marketing"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden md:block"
          >
            <div className="bg-card-bg border border-primary/30 p-6 rounded-sm orange-border-glow">
              <div className="text-primary font-display text-4xl">98%</div>
              <div className="text-xs uppercase tracking-widest text-text-muted">Retention Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Counter Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
          {[
            { label: 'Clients Served', value: '150+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Campaigns Launched', value: '500+' },
            { label: 'Client Retention', value: '98%' },
          ].map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
