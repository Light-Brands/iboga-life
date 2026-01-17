import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  defaultOpen?: boolean;
  variant?: 'default' | 'sacred' | 'earth';
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  icon: Icon,
  defaultOpen = false,
  variant = 'default',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const variantStyles = {
    default: {
      container: 'bg-cream-warm border border-sacred-gold/10',
      header: 'hover:bg-cream',
      title: 'text-forest-deep',
      content: 'text-bark',
      icon: 'text-sacred-gold',
      chevron: 'text-sacred-gold/60',
    },
    sacred: {
      container: 'bg-forest-light/30 border border-sacred-gold/20',
      header: 'hover:bg-forest-light/50',
      title: 'text-cream',
      content: 'text-cream/80',
      icon: 'text-sacred-gold',
      chevron: 'text-sacred-gold/60',
    },
    earth: {
      container: 'bg-earth-dark/30 border border-sacred-gold/15',
      header: 'hover:bg-earth-dark/50',
      title: 'text-cream',
      content: 'text-cream/80',
      icon: 'text-sacred-gold',
      chevron: 'text-sacred-gold/60',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`rounded-sacred overflow-hidden ${styles.container}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-5 flex items-center gap-4 text-left transition-colors ${styles.header}`}
        aria-expanded={isOpen}
      >
        {Icon && (
          <div className="w-10 h-10 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0">
            <Icon className={`w-5 h-5 ${styles.icon}`} strokeWidth={1.5} />
          </div>
        )}
        <h3 className={`font-accent text-lg md:text-xl flex-1 ${styles.title}`}>
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronDown className={`w-5 h-5 ${styles.chevron}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 font-primary leading-relaxed ${styles.content}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className = '' }) => {
  return <div className={`space-y-3 ${className}`}>{children}</div>;
};

// Compound component for grouped accordion items that only allow one open at a time
interface AccordionGroupProps {
  children: React.ReactNode;
  className?: string;
  defaultOpenIndex?: number;
  variant?: 'default' | 'sacred' | 'earth';
}

interface AccordionGroupItemProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  className = '',
  defaultOpenIndex = 0,
  variant = 'default',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const variantStyles = {
    default: {
      container: 'bg-cream-warm border border-sacred-gold/10',
      header: 'hover:bg-cream',
      title: 'text-forest-deep',
      content: 'text-bark',
      icon: 'text-sacred-gold',
      chevron: 'text-sacred-gold/60',
    },
    sacred: {
      container: 'bg-forest-light/30 border border-sacred-gold/20',
      header: 'hover:bg-forest-light/50',
      title: 'text-cream',
      content: 'text-cream/80',
      icon: 'text-sacred-gold',
      chevron: 'text-sacred-gold/60',
    },
    earth: {
      container: 'bg-earth-dark/30 border border-sacred-gold/15',
      header: 'hover:bg-earth-dark/50',
      title: 'text-cream',
      content: 'text-cream/80',
      icon: 'text-sacred-gold',
      chevron: 'text-sacred-gold/60',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`space-y-3 ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<AccordionGroupItemProps>(child)) return child;

        const isOpen = openIndex === index;
        const { title, children: itemChildren, icon: Icon } = child.props;

        return (
          <div className={`rounded-sacred overflow-hidden ${styles.container}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`w-full px-6 py-5 flex items-center gap-4 text-left transition-colors ${styles.header}`}
              aria-expanded={isOpen}
            >
              {Icon && (
                <div className="w-10 h-10 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-5 h-5 ${styles.icon}`} strokeWidth={1.5} />
                </div>
              )}
              <h3 className={`font-accent text-lg md:text-xl flex-1 ${styles.title}`}>
                {title}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ChevronDown className={`w-5 h-5 ${styles.chevron}`} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-6 font-primary leading-relaxed ${styles.content}`}>
                    {itemChildren}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// Simple item component for use within AccordionGroup
export const AccordionGroupItem: React.FC<AccordionGroupItemProps> = ({ children }) => {
  return <>{children}</>;
};
