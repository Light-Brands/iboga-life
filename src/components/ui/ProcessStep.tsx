import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  isLast?: boolean;
  index?: number;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon: Icon,
  isLast = false,
  index = 0,
}) => {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Step Indicator */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-sacred-gold flex items-center justify-center shadow-gold-glow">
          {Icon ? (
            <Icon className="w-6 h-6 text-earth-dark" strokeWidth={2} />
          ) : (
            <span className="font-accent text-lg text-earth-dark font-bold">
              {number}
            </span>
          )}
        </div>
        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-sacred-gold to-sacred-gold/20 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${!isLast ? 'pb-12' : ''}`}>
        <h3 className="font-accent text-xl text-forest-deep mb-2">{title}</h3>
        <p className="text-bark font-primary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
