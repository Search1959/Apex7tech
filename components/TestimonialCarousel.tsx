'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechFlow',
    text: 'Apex7tech transformed our online presence with tailored strategies and exceptional results. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Sarah Smith',
    role: 'Founder, EcoShop',
    text: 'The ecommerce development team is top-notch. Our Shopify store sales increased by 40% in just three months.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Global Logistics',
    text: 'Expert SEO and PPC management. They really know how to dominate the search results and drive quality traffic.',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-highlight text-highlight" />
          ))}
        </div>

        <div className="min-h-[200px] flex items-center justify-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl italic text-text-light leading-relaxed">
              &quot;{testimonials[current].text}&quot;
            </p>
            <div>
              <h5 className="font-display text-xl text-primary uppercase tracking-widest">
                {testimonials[current].name}
              </h5>
              <p className="text-xs text-text-muted uppercase tracking-tighter">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === i ? 'bg-primary w-8' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
