import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  id: string;
}>;

export function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.section
      className={className}
      id={id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.section>
  );
}
