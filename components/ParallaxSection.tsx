"use client"

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  /** Positive numbers move *slower*, negative move *faster* than scroll */
  speed?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Wrap a section to give it a parallax translate-Y.
 * `speed` = 0.25  ==> 25 % of scroll speed (nice background feel)
 */
export default function ParallaxSection({
  speed = 0.25,
  className = '',
  children,
}: ParallaxSectionProps) {
  const { scrollY } = useScroll();                        
  const y = useTransform(scrollY, (v) => v * speed * -1); 
//   const y = useTransform(scrollY, v => v * speed);


  return (
    <motion.section style={{ y }} className={className}>
      {children}
    </motion.section>
  );
}
