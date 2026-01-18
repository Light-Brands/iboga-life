import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    to: string;
  };
  secondaryCta?: {
    label: string;
    to: string;
  };
  backgroundImage?: string;
  showScrollIndicator?: boolean;
  overlay?: 'dark' | 'light' | 'gradient';
  size?: 'full' | 'large' | 'medium';
  mobileImagePosition?: 'top' | 'center' | 'bottom';
  desktopImagePosition?: 'top' | 'center' | 'bottom' | string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  showScrollIndicator = false,
  overlay = 'gradient',
  size = 'full',
  mobileImagePosition,
  desktopImagePosition = 'center',
}) => {
  const sizeClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  const overlayClasses = {
    dark: 'bg-forest-deep/80',
    light: 'bg-cream/60',
    gradient: 'bg-gradient-to-b from-forest-deep/70 via-forest-deep/80 to-earth-dark/90',
  };

  return (
    <section
      className={`relative ${sizeClasses[size]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      {backgroundImage ? (
        <>
          {/* Mobile background */}
          <div
            className={`absolute inset-0 bg-cover bg-no-repeat md:hidden ${
              mobileImagePosition === 'top'
                ? 'bg-top'
                : mobileImagePosition === 'bottom'
                  ? 'bg-bottom'
                  : 'bg-center'
            }`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Desktop background */}
          <div
            className={`absolute inset-0 bg-cover bg-no-repeat hidden md:block ${
              desktopImagePosition === 'top'
                ? 'bg-top'
                : desktopImagePosition === 'bottom'
                  ? 'bg-bottom'
                  : desktopImagePosition === 'center'
                    ? 'bg-center'
                    : ''
            }`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              ...(desktopImagePosition &&
                !['top', 'center', 'bottom'].includes(desktopImagePosition) && {
                  backgroundPosition: `center ${desktopImagePosition}`,
                }),
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-sacred-fire" />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Ambient Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sacred-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-leaf/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-content text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {subtitle && (
            <motion.p
              className="text-sacred-gold font-accent text-sm md:text-base uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="text-cream/80 font-primary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {description}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {primaryCta && (
                <Link to={primaryCta.to} className="btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="btn bg-transparent text-cream border-2 border-cream/30 hover:border-sacred-gold hover:text-sacred-gold"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="flex flex-col items-center text-cream/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <span className="text-xs font-secondary uppercase tracking-widest mb-2">
                Scroll
              </span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
