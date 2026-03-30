'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from '@/components/ProjectCard';

const categories = ['All', 'SEO', 'PPC', 'Ecommerce', 'Web Dev'];

const projects = [
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/catlog-shopify-mjE4E2b6JDf3yaw0.PNG',
    tag: 'Ecommerce',
    title: 'Shopify Solutions',
    description: 'Tailored strategies for Shopify, Etsy, and Amazon success. We helped this brand scale from zero to $50k/month in revenue.',
  },
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/seo-services-m7VDZB5xjyCeQE80.jpg',
    tag: 'SEO',
    title: 'SEO Growth Engine',
    description: 'Optimising online presence for better search visibility. Achieved 300% increase in organic traffic within 6 months.',
  },
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/ppc-campaign-gozovcabs-mv0P0jBp3wF0ooJl.png',
    tag: 'PPC',
    title: 'High-ROI PPC',
    description: 'Driving targeted traffic through effective pay-per-click advertising. Reduced CPA by 45% while doubling lead volume.',
  },
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/upwork-etsy-mP435ep1J6iykZR7.PNG',
    tag: 'Ecommerce',
    title: 'Etsy Store Launch',
    description: 'Full development and marketing of Etsy ecommerce shops. Created a unique brand identity that stands out in a crowded marketplace.',
  },
  {
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    tag: 'Web Dev',
    title: 'Modern Web App',
    description: 'Fast, SEO-optimised, conversion-focused websites built on Next.js. Improved site speed by 70% and conversion rate by 25%.',
  },
  {
    image: 'https://images.unsplash.com/photo-1657737185882-4403efaaa92d',
    tag: 'SEO',
    title: 'Local SEO Domination',
    description: 'Helping local businesses dominate their local search results. Increased store visits by 150% for a retail client.',
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tag === filter);

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
            OUR <span className="text-primary">PROJECTS</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            A portfolio of success stories and digital transformations.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-6 bg-secondary sticky top-[72px] z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-primary text-white orange-border-glow' 
                  : 'bg-surface text-text-muted hover:text-primary border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard {...project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-4xl md:text-5xl">WANT TO BE OUR NEXT SUCCESS STORY?</h2>
          <p className="text-text-muted">Let&apos;s discuss how we can accelerate your brand&apos;s growth.</p>
          <button className="bg-primary text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform orange-border-glow">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
