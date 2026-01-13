import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ScheduleDayProps {
  day: number;
  title: string;
  activities: string[];
  icon: LucideIcon;
  isLast?: boolean;
  index?: number;
}

export const ScheduleDay: React.FC<ScheduleDayProps> = ({
  day,
  title,
  activities,
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Day Indicator */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sacred-gold to-sacred-amber flex flex-col items-center justify-center shadow-gold-glow">
          <span className="font-secondary text-[10px] uppercase tracking-wider text-earth-dark/70 leading-none">
            Day
          </span>
          <span className="font-accent text-xl text-earth-dark font-bold leading-none">
            {day}
          </span>
        </div>
        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-sacred-gold to-sacred-gold/20 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${!isLast ? 'pb-10' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-5 h-5 text-sacred-gold" />
          <h3 className="font-accent text-xl text-cream">{title}</h3>
        </div>
        <ul className="space-y-2">
          {activities.map((activity, i) => (
            <li key={i} className="text-cream/80 font-primary leading-relaxed">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
