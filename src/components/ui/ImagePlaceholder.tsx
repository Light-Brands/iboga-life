import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Camera } from 'lucide-react';

export interface ImagePlaceholderProps {
  /** Unique identifier for this image slot (e.g., "home-hero", "about-jay-portrait") */
  id: string;
  /** Aspect ratio: "square" | "portrait" | "landscape" | "wide" | "hero" */
  aspect?: 'square' | 'portrait' | 'landscape' | 'wide' | 'hero';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'full';
  /** Visual variant matching the section background */
  variant?: 'light' | 'dark' | 'earth';
  /** Alt text description for the future image */
  alt: string;
  /** Optional className for additional styling */
  className?: string;
  /** Whether to show the ID marker (useful for development) */
  showMarker?: boolean;
  /** Optional icon to display */
  icon?: 'image' | 'camera' | 'none';
}

const aspectClasses = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
  hero: 'aspect-[21/9]',
};

const sizeClasses = {
  sm: 'max-w-xs',
  md: 'max-w-md',
  lg: 'max-w-lg',
  full: 'w-full',
};

const variantClasses = {
  light: {
    bg: 'bg-gradient-to-br from-forest-deep/5 via-sacred-gold/5 to-leaf/5',
    border: 'border-sacred-gold/20',
    text: 'text-bark/40',
    icon: 'text-sacred-gold/30',
    marker: 'bg-sacred-gold/10 text-bark/60',
  },
  dark: {
    bg: 'bg-gradient-to-br from-forest-light/20 via-sacred-gold/10 to-forest-deep/20',
    border: 'border-sacred-gold/30',
    text: 'text-cream/40',
    icon: 'text-sacred-gold/40',
    marker: 'bg-sacred-gold/20 text-cream/70',
  },
  earth: {
    bg: 'bg-gradient-to-br from-cream/10 via-sacred-gold/10 to-cream/5',
    border: 'border-sacred-gold/25',
    text: 'text-cream/40',
    icon: 'text-sacred-gold/35',
    marker: 'bg-sacred-gold/15 text-cream/65',
  },
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  aspect = 'landscape',
  size = 'full',
  variant = 'light',
  alt,
  className = '',
  showMarker = true,
  icon = 'image',
}) => {
  const styles = variantClasses[variant];
  const IconComponent = icon === 'camera' ? Camera : ImageIcon;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-sacred
        ${aspectClasses[aspect]}
        ${sizeClasses[size]}
        ${styles.bg}
        border-2 border-dashed ${styles.border}
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-image-placeholder={id}
      role="img"
      aria-label={alt}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sacred-gold/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-leaf/10 rounded-full blur-2xl" />
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {icon !== 'none' && (
          <IconComponent
            className={`w-12 h-12 md:w-16 md:h-16 ${styles.icon} mb-3`}
            strokeWidth={1}
          />
        )}
        <p className={`text-sm font-secondary ${styles.text} text-center max-w-[80%]`}>
          {alt}
        </p>
      </div>

      {/* ID Marker for development */}
      {showMarker && (
        <div
          className={`
            absolute top-2 left-2 px-2 py-1 rounded text-xs font-mono
            ${styles.marker}
          `}
        >
          📍 {id}
        </div>
      )}

      {/* Corner decorations */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${styles.border} rounded-tl-sacred`} />
      <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${styles.border} rounded-tr-sacred`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${styles.border} rounded-bl-sacred`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${styles.border} rounded-br-sacred`} />
    </motion.div>
  );
};

/**
 * A full-width hero image placeholder for page headers
 */
export const HeroImagePlaceholder: React.FC<{
  id: string;
  alt: string;
  showMarker?: boolean;
}> = ({ id, alt, showMarker = true }) => (
  <div className="absolute inset-0 -z-10">
    <div
      className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-earth-dark/80 to-forest-deep/90"
      data-image-placeholder={id}
      data-image-type="hero-background"
      aria-label={alt}
    >
      {/* Decorative elements suggesting where image will appear */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sacred-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-leaf/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />
      </div>

      {showMarker && (
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-sacred-gold/20 rounded text-xs font-mono text-cream/70 backdrop-blur-sm">
          📍 {id} (Hero Background)
        </div>
      )}
    </div>
  </div>
);

/**
 * A circular image placeholder for portraits/avatars
 */
export const PortraitPlaceholder: React.FC<{
  id: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'earth';
  showMarker?: boolean;
  className?: string;
}> = ({ id, alt, size = 'lg', variant = 'light', showMarker = true, className = '' }) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  const styles = variantClasses[variant];

  return (
    <motion.div
      className={`
        relative rounded-full overflow-hidden
        ${sizeMap[size]}
        ${styles.bg}
        border-2 border-dashed ${styles.border}
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-image-placeholder={id}
      data-image-type="portrait"
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Camera className={`w-1/3 h-1/3 ${styles.icon}`} strokeWidth={1} />
      </div>

      {showMarker && (
        <div
          className={`
            absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap
            px-2 py-0.5 rounded text-[10px] font-mono
            ${styles.marker}
          `}
        >
          📍 {id}
        </div>
      )}
    </motion.div>
  );
};

/**
 * An inline image placeholder for content areas
 */
export const InlineImagePlaceholder: React.FC<{
  id: string;
  alt: string;
  float?: 'left' | 'right' | 'none';
  variant?: 'light' | 'dark' | 'earth';
  showMarker?: boolean;
}> = ({ id, alt, float = 'none', variant = 'light', showMarker = true }) => {
  const floatClasses = {
    left: 'float-left mr-6 mb-4',
    right: 'float-right ml-6 mb-4',
    none: '',
  };

  return (
    <ImagePlaceholder
      id={id}
      alt={alt}
      aspect="landscape"
      size="md"
      variant={variant}
      showMarker={showMarker}
      className={floatClasses[float]}
    />
  );
};
