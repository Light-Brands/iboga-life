import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <motion.div
      className="group relative bg-cream p-8 rounded-sacred shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-sacred-gold/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon Container */}
      <div className="w-14 h-14 rounded-full bg-forest-deep/10 flex items-center justify-center mb-6 group-hover:bg-sacred-gold/10 transition-colors duration-300">
        <Icon
          className="w-7 h-7 text-forest-deep group-hover:text-sacred-gold transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <h3 className="font-accent text-xl text-forest-deep mb-3">{title}</h3>
      <p className="text-bark font-primary leading-relaxed">{description}</p>

      {/* Decorative accent */}
      <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-sacred-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
