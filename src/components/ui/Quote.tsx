import React from 'react';
import { motion } from 'framer-motion';

interface QuoteProps {
  text: string;
  author?: string;
  variant?: 'sacred' | 'inline' | 'large';
}

export const Quote: React.FC<QuoteProps> = ({
  text,
  author,
  variant = 'sacred',
}) => {
  if (variant === 'large') {
    return (
      <motion.blockquote
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-primary text-2xl md:text-3xl lg:text-4xl italic text-cream leading-relaxed max-w-4xl mx-auto">
          "{text}"
        </p>
        {author && (
          <footer className="mt-6">
            <span className="text-sacred-gold font-accent uppercase tracking-widest text-sm">
              — {author}
            </span>
          </footer>
        )}
      </motion.blockquote>
    );
  }

  return (
    <motion.blockquote
      className="quote-sacred"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-primary text-xl italic text-bark leading-relaxed">
        "{text}"
      </p>
      {author && (
        <footer className="mt-4">
          <span className="text-sacred-gold font-secondary text-sm uppercase tracking-wider">
            — {author}
          </span>
        </footer>
      )}
    </motion.blockquote>
  );
};
