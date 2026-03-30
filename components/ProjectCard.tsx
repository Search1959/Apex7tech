'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface ProjectCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  index: number;
}

export default function ProjectCard({ image, tag, title, description, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest mb-3 inline-block">
            {tag}
          </span>
          <h4 className="font-display text-2xl text-white mb-2">{title}</h4>
          <p className="text-text-muted text-xs line-clamp-2 mb-4">
            {description}
          </p>
          <div className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            View Project <span className="text-lg">→</span>
          </div>
        </div>
      </div>

      {/* Static Tag (visible when not hovered) */}
      <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity">
        <span className="bg-secondary/60 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}
