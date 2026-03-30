'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start">
      <span className="font-display text-3xl text-primary">
        {count}{suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
        {label}
      </span>
    </div>
  );
}
