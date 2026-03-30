'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    platform: 'Google',
    name: 'Google Ads Search Certification',
    year: '2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/adword-certification-mv0P0QNW8zHnwJ95.PNG',
  },
  {
    platform: 'Google',
    name: 'Google Ads Display Certification',
    year: '2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/adword-certification-mv0P0QNW8zHnwJ95.PNG',
  },
  {
    platform: 'Google',
    name: 'Google Ads Shopping Certification',
    year: '2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/adword-certification-mv0P0QNW8zHnwJ95.PNG',
  },
  {
    platform: 'Google',
    name: 'Google Analytics (GA4) Certification',
    year: '2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/analytics-certificate-Aq2G2QRW4yfXokoo.PNG',
  },
  {
    platform: 'Google',
    name: 'Google Ads Video Certification',
    year: '2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/adword-certification-mv0P0QNW8zHnwJ95.PNG',
  },
  {
    platform: 'Microsoft',
    name: 'Microsoft Advertising (Bing Ads) Certified Professional',
    year: '2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/adword-certification-mv0P0QNW8zHnwJ95.PNG',
  },
];

export default function CertificatesPage() {
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
            OUR <span className="text-primary">CERTIFICATIONS</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            Certified. Verified. Trusted by the world&apos;s leading platforms.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-sm group relative overflow-hidden border border-white/10 hover:border-primary transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Award size={48} className="text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 h-20 flex items-center">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <h3 className="text-secondary font-bold text-xl mb-2 leading-tight">{cert.name}</h3>
                <p className="text-secondary/60 text-xs uppercase tracking-widest mb-6">
                  {cert.platform} • {cert.year}
                </p>
                
                <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                  View Certificate <ExternalLink size={14} />
                </button>
              </div>
              
              {/* Golden Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-highlight/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl">WHY CERTIFICATIONS MATTER</h2>
          <p className="text-text-muted text-lg leading-relaxed">
            In the fast-paced world of digital marketing, certifications are more than just badges. They represent a commitment to excellence, a deep understanding of platform algorithms, and a proven ability to deliver results using industry-standard tools. When you work with Apex7tech, you&apos;re working with a team that is verified by Google and Microsoft.
          </p>
          <div className="pt-8">
            <button className="bg-primary text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform orange-border-glow">
              Work With a Certified Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
