/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Jay's Sacred Color Palette
      colors: {
        // Primary Colors
        forest: {
          deep: '#1A2E1A',
          light: '#2D3D2D',
          mist: '#3A4F3A',
        },
        earth: {
          dark: '#2D2419',
          light: '#5C4A36',
          warm: '#7A6248',
        },
        sacred: {
          gold: '#C4963F',
          amber: '#D4871A',
          bronze: '#8B6914',
        },
        // Secondary Colors
        bark: '#5C4A36',
        leaf: '#4A6741',
        cream: {
          DEFAULT: '#F5F0E6',
          dark: '#E8DFD0',
          warm: '#FDF8F0',
        },
        // Semantic Colors
        truth: '#3B7A57',
        caution: '#B8860B',
        guidance: '#4682B4',
        alert: '#8B4513',
      },
      // Typography
      fontFamily: {
        display: ['Rubik Moonrocks', 'cursive'],
        primary: ['Cormorant Garamond', 'Georgia', 'serif'],
        secondary: ['Source Sans Pro', 'Helvetica Neue', 'sans-serif'],
        accent: ['Cinzel', 'serif'],
      },
      // Font sizes with line heights
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '400' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.375rem', { lineHeight: '1.35', fontWeight: '600' }],
        'lead': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      // Spacing system based on 8px grid
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      // Border radius - organic shapes
      borderRadius: {
        'organic': '40% 60% 55% 45% / 60% 40% 45% 55%',
        'sacred': '1rem',
      },
      // Shadows & Glows
      boxShadow: {
        'sm': '0 2px 4px rgba(26, 46, 26, 0.08)',
        'md': '0 4px 12px rgba(26, 46, 26, 0.12)',
        'lg': '0 8px 24px rgba(26, 46, 26, 0.16)',
        'xl': '0 16px 48px rgba(26, 46, 26, 0.20)',
        'gold-glow': '0 0 24px rgba(196, 150, 63, 0.4)',
        'green-glow': '0 0 32px rgba(74, 103, 65, 0.3)',
        'fire-glow': '0 0 40px rgba(212, 135, 26, 0.35)',
      },
      // Background gradients
      backgroundImage: {
        'sacred-fire': 'linear-gradient(180deg, #2D2419 0%, #1A2E1A 50%, #0D1A0D 100%)',
        'golden-hour': 'linear-gradient(135deg, #C4963F 0%, #D4871A 50%, #8B6914 100%)',
        'forest-depth': 'linear-gradient(180deg, #1A2E1A 0%, #2D3D2D 100%)',
        'earth-gradient': 'linear-gradient(180deg, #F5F0E6 0%, #E8DFD0 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(26, 46, 26, 0.7) 0%, rgba(45, 36, 25, 0.85) 100%)',
      },
      // Animation
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'emerge': 'emerge 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        emerge: {
          from: { transform: 'translateY(24px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Transition
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ground': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'rise': 'cubic-bezier(0.4, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
