'use client';

import React from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Search, DollarSign, Smartphone, ShoppingCart, Globe, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: <Search size={28} />,
    title: 'SEO Optimization',
    description: 'Boost your visibility and drive organic traffic with expert SEO strategies tailored to your business.',
  },
  {
    icon: <DollarSign size={28} />,
    title: 'PPC Advertising',
    description: 'Maximise your ROI with targeted Google & Bing Ads campaigns designed to convert.',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Social Media Marketing',
    description: 'Build brand authority and engagement across Facebook, Instagram, LinkedIn, and more.',
  },
  {
    icon: <ShoppingCart size={28} />,
    title: 'Ecommerce Development',
    description: 'Shopify, Etsy, Amazon — complete setup, design, and marketing for online stores.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Web Development',
    description: 'Fast, SEO-optimised, conversion-focused websites built on modern frameworks.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Analytics & Reporting',
    description: 'GA4, GTM, Data Studio — track every metric that matters to your growth.',
  },
];

const projects = [
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/catlog-shopify-mjE4E2b6JDf3yaw0.PNG',
    tag: 'ECOMMERCE',
    title: 'Shopify Solutions',
    description: 'Tailored strategies for Shopify, Etsy, and Amazon success.',
  },
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/seo-services-m7VDZB5xjyCeQE80.jpg',
    tag: 'SEO',
    title: 'SEO Services',
    description: 'Optimising online presence for better search visibility.',
  },
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/ppc-campaign-gozovcabs-mv0P0jBp3wF0ooJl.png',
    tag: 'PPC',
    title: 'PPC Campaigns',
    description: 'Driving targeted traffic through effective pay-per-click advertising.',
  },
  {
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/upwork-etsy-mP435ep1J6iykZR7.PNG',
    tag: 'ECOMMERCE',
    title: 'Etsy Ecommerce',
    description: 'Full development and marketing of Etsy ecommerce shops.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroSection />

      {/* Your Partner Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              YOUR PARTNER IN <span className="text-primary underline decoration-primary/30 underline-offset-8">DIGITAL MARKETING</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              At Apex7tech, we elevate your brand&apos;s online presence with tailored digital marketing strategies that drive traffic and conversions. From SEO to Paid Media, Ecommerce to Web Development — we are your full-spectrum digital growth engine.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:gap-4 transition-all"
            >
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-sm overflow-hidden border border-primary/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1657737184798-ca66daa64066"
              alt="SEO PPC Digital Marketing"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl mb-4"
          >
            DIGITAL MARKETING SERVICES
          </motion.h2>
          <p className="text-text-muted uppercase tracking-[0.3em] text-sm">
            Everything you need to dominate your market online.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </section>

      {/* Certificates Preview */}
      <section className="py-24 px-6 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">CERTIFIED. VERIFIED. TRUSTED.</h2>
          <Link href="/certificates" className="text-primary font-bold uppercase tracking-widest text-sm hover:underline">
            View All Certificates →
          </Link>
        </div>
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex gap-8">
              <div className="bg-white p-6 rounded-sm shadow-xl min-w-[250px] flex flex-col items-center justify-center group hover:scale-105 transition-transform">
                <Image
                  src="https://assets.zyrosite.com/dWxOoNXb7JfMxox6/analytics-certificate-Aq2G2QRW4yfXokoo.PNG"
                  alt="Google Analytics"
                  width={150}
                  height={100}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Google Analytics</span>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-xl min-w-[250px] flex flex-col items-center justify-center group hover:scale-105 transition-transform">
                <Image
                  src="https://assets.zyrosite.com/dWxOoNXb7JfMxox6/adword-certification-mv0P0QNW8zHnwJ95.PNG"
                  alt="Google Ads"
                  width={150}
                  height={100}
                  className="mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Google Ads</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl mb-4">OUR PROJECTS</h2>
          <p className="text-text-muted uppercase tracking-widest text-sm">A glimpse into our success stories.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="border border-primary text-primary px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
          >
            Explore All Projects
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-secondary relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4">WHAT OUR CLIENTS SAY</h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-gradient-to-r from-secondary to-primary/20 border-y border-primary/30">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="font-display text-5xl md:text-7xl leading-none">READY TO DOMINATE YOUR MARKET?</h2>
          <p className="text-xl text-text-muted">Get a free digital audit today and discover untapped growth opportunities.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-12 py-5 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
          >
            Book Free Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
