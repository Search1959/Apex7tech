'use client';

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-card-bg p-8 rounded-sm border border-white/5 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <div className="text-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="font-display text-2xl mb-4 tracking-wide group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-text-muted text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More <span>→</span>
      </div>
    </motion.div>
  );
}
