import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'sacred' | 'testimonial';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
}) => {
  const variantClasses = {
    default: 'bg-cream p-8 rounded-sacred shadow-md',
    sacred:
      'bg-gradient-to-br from-earth-dark to-forest-deep text-cream p-8 rounded-sacred border border-sacred-gold/30',
    testimonial: 'bg-cream-warm p-8 border-l-4 border-sacred-gold',
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <motion.div
      className={`${variantClasses[variant]} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
