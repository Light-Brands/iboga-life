import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  light = false,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
          {subtitle}
        </p>
      )}
      <h2
        className={`font-accent text-h2 mb-6 ${
          light ? 'text-cream' : 'text-forest-deep'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lead ${
            light ? 'text-cream/80' : 'text-bark'
          }`}
        >
          {description}
        </p>
      )}
      <div className={`divider-short ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
