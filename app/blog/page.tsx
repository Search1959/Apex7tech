'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['All', 'SEO', 'PPC', 'Ecommerce', 'Analytics', 'Social Media'];

const blogPosts = [
  {
    id: 1,
    title: '10 SEO Trends to Dominate Google in 2025',
    excerpt: 'Stay ahead of the curve with these critical SEO trends that will define search visibility in the coming year.',
    category: 'SEO',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1657737184798-ca66daa64066',
  },
  {
    id: 2,
    title: 'How to Launch a Profitable Shopify Store from Scratch',
    excerpt: 'A step-by-step guide to building, designing, and launching a Shopify store that actually converts.',
    category: 'Ecommerce',
    date: 'March 10, 2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/catlog-shopify-mjE4E2b6JDf3yaw0.PNG',
  },
  {
    id: 3,
    title: 'Google Ads vs Meta Ads: Which is Right for Your Business?',
    excerpt: 'We break down the pros and cons of the two biggest advertising platforms to help you decide where to invest.',
    category: 'PPC',
    date: 'March 5, 2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/ppc-campaign-gozovcabs-mv0P0jBp3wF0ooJl.png',
  },
  {
    id: 4,
    title: 'GA4 Migration Complete — What You Need to Know',
    excerpt: 'Now that GA4 is the standard, learn how to navigate the new interface and extract meaningful insights.',
    category: 'Analytics',
    date: 'February 28, 2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/analytics-certificate-Aq2G2QRW4yfXokoo.PNG',
  },
  {
    id: 5,
    title: 'Etsy SEO: The Ultimate Guide to More Sales',
    excerpt: 'Unlock the secrets of the Etsy algorithm and get your products in front of more buyers.',
    category: 'Ecommerce',
    date: 'February 20, 2025',
    image: 'https://assets.zyrosite.com/dWxOoNXb7JfMxox6/upwork-etsy-mP435ep1J6iykZR7.PNG',
  },
  {
    id: 6,
    title: 'Why Every Business Needs a Digital Marketing Strategy',
    excerpt: 'Without a plan, you&apos;re just guessing. Learn why a cohesive strategy is the foundation of digital success.',
    category: 'Social Media',
    date: 'February 15, 2025',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === filter);

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
            THE <span className="text-primary">BLOG</span>
          </motion.h1>
          <p className="text-text-muted uppercase tracking-[0.4em] text-sm max-w-2xl mx-auto">
            Insights, trends, and strategies from the digital frontlines.
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
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
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

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-video rounded-sm overflow-hidden mb-6 border border-white/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="text-[10px] uppercase tracking-widest text-text-muted">{post.date}</div>
                <h3 className="font-display text-2xl group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Read More <span>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-secondary border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="text-text-muted">Get the latest digital marketing insights delivered straight to your inbox.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-surface border border-white/10 px-6 py-4 rounded-l-sm focus:outline-none focus:border-primary w-full"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-r-sm font-bold uppercase tracking-widest hover:bg-primary/80 transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
