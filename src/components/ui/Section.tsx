import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'earth' | 'cream';
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'default',
  id,
  noPadding = false,
}) => {
  const variantClasses = {
    default: 'bg-cream text-earth-dark',
    dark: 'bg-forest-deep text-cream',
    earth: 'bg-gradient-to-b from-earth-dark to-forest-deep text-cream',
    cream: 'bg-cream-warm text-earth-dark',
  };

  const paddingClasses = noPadding ? '' : 'py-20 md:py-28';

  return (
    <motion.section
      id={id}
      className={`${variantClasses[variant]} ${paddingClasses} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-content">{children}</div>
    </motion.section>
  );
};
