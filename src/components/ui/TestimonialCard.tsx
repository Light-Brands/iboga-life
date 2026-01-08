import React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  context?: string;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  context,
  index = 0,
}) => {
  return (
    <motion.div
      className="relative bg-cream-warm p-8 md:p-10 border-l-4 border-sacred-gold"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Quote Icon */}
      <QuoteIcon
        className="absolute top-6 right-6 w-10 h-10 text-sacred-gold/20"
        strokeWidth={1}
      />

      {/* Quote Text */}
      <blockquote className="relative z-10">
        <p className="font-primary text-lg md:text-xl italic text-bark leading-relaxed mb-6">
          "{quote}"
        </p>
        <footer>
          <p className="font-accent text-forest-deep">{author}</p>
          {context && (
            <p className="text-bark/60 font-secondary text-sm mt-1">{context}</p>
          )}
        </footer>
      </blockquote>
    </motion.div>
  );
};
