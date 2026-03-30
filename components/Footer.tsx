'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Ecommerce', href: '/ecommerce' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Left: Brand */}
        <div className="space-y-6">
          <Link href="/">
            <Image
              src="/logo-apex7tech.png"
              alt="Apex7Tech Logo"
              width={140}
              height={42}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-text-muted italic">
            Accelerate. Amplify. Achieve.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-text-muted hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-text-muted hover:text-primary transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-text-muted hover:text-primary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-text-muted hover:text-primary transition-colors">
              <Twitter size={20} />
            </Link>
          </div>
        </div>

        {/* Middle: Links */}
        <div>
          <h4 className="font-display text-xl mb-6 text-text-light">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-text-muted hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="space-y-6">
          <h4 className="font-display text-xl mb-6 text-text-light">Contact Us</h4>
          <div className="space-y-4 text-sm text-text-muted">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <span>apex7tech@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <span>+91 98361-30393</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-1 shrink-0" />
              <span>27/3B Jugal Kishor Das Lane, Kolkata – 700006, WB, India</span>
            </div>
          </div>
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-surface border border-white/10 px-4 py-2 rounded-l-sm focus:outline-none focus:border-primary w-full text-sm"
            />
            <button className="bg-primary px-4 py-2 rounded-r-sm hover:bg-primary/80 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-text-muted uppercase tracking-widest">
          © 2025 Apex7tech Digital Marketing Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
