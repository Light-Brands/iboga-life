# 🎨 Visual Identity

**Visual Design System for Iboga Life Change**

---

## Design Philosophy

The visual identity of Iboga Life Change balances **ancient sacred tradition** with **modern accessibility**. It should feel:

- **Grounded** — Like roots in the earth, stable and strong
- **Sacred** — Honoring the ceremonial nature of the work
- **Alive** — Organic, breathing, connected to nature
- **Trustworthy** — Clean, professional, safe
- **Transformative** — Dynamic, with movement from darkness to light

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Forest Deep** | `#1A2E1A` | rgb(26, 46, 26) | Primary brand color, headers, grounding |
| **Earth Dark** | `#2D2419` | rgb(45, 36, 25) | Deep backgrounds, sacred spaces |
| **Sacred Gold** | `#C4963F` | rgb(196, 150, 63) | Accent, highlights, transformation |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Bark Brown** | `#5C4A36` | rgb(92, 74, 54) | Secondary text, warmth |
| **Leaf Green** | `#4A6741` | rgb(74, 103, 65) | Nature elements, growth |
| **Fire Amber** | `#D4871A` | rgb(212, 135, 26) | Energy, call-to-action |
| **Cream Light** | `#F5F0E6` | rgb(245, 240, 230) | Backgrounds, breathing space |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Truth** | `#3B7A57` | Success, positive states |
| **Caution** | `#B8860B` | Warning, attention |
| **Guidance** | `#4682B4` | Information, calm |
| **Alert** | `#8B4513` | Errors, urgent (warm, not aggressive) |

### Gradients

```css
/* Sacred Fire - Hero backgrounds */
--gradient-fire: linear-gradient(180deg, #2D2419 0%, #1A2E1A 50%, #0D1A0D 100%);

/* Golden Hour - Transformation moments */
--gradient-golden: linear-gradient(135deg, #C4963F 0%, #D4871A 50%, #8B6914 100%);

/* Forest Depth - Content backgrounds */
--gradient-forest: linear-gradient(180deg, #1A2E1A 0%, #2D3D2D 100%);

/* Cream to Earth - Page backgrounds */
--gradient-earth: linear-gradient(180deg, #F5F0E6 0%, #E8DFD0 100%);
```

### Dark Mode Palette

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `#F5F0E6` | `#0D1A0D` |
| Surface | `#FFFFFF` | `#1A2E1A` |
| Text Primary | `#1A2E1A` | `#F5F0E6` |
| Text Secondary | `#5C4A36` | `#A89F8F` |
| Accent | `#C4963F` | `#D4A84F` |

---

## Typography

### Font Families

```css
/* Display - Spiritual, distinctive headlines */
--font-display: 'Rubik Moonrocks', cursive;

/* Primary - Clean, readable body text */
--font-primary: 'Cormorant Garamond', 'Georgia', serif;

/* Secondary - Modern supporting text */
--font-secondary: 'Source Sans Pro', 'Helvetica Neue', sans-serif;

/* Accent - Sacred/ceremonial moments */
--font-accent: 'Cinzel', serif;
```

### Type Scale

| Name | Size | Weight | Line Height | Font | Usage |
|------|------|--------|-------------|------|-------|
| **Display** | 64px / 4rem | 400 | 1.1 | Rubik Moonrocks | Hero headlines only |
| **H1** | 48px / 3rem | 600 | 1.2 | Cinzel | Page titles |
| **H2** | 36px / 2.25rem | 600 | 1.25 | Cinzel | Section headers |
| **H3** | 28px / 1.75rem | 600 | 1.3 | Cormorant Garamond | Subsections |
| **H4** | 22px / 1.375rem | 600 | 1.35 | Cormorant Garamond | Card titles |
| **Lead** | 20px / 1.25rem | 400 | 1.6 | Cormorant Garamond | Intro paragraphs |
| **Body** | 18px / 1.125rem | 400 | 1.7 | Cormorant Garamond | Main content |
| **Body SM** | 16px / 1rem | 400 | 1.6 | Source Sans Pro | Secondary content |
| **Small** | 14px / 0.875rem | 400 | 1.5 | Source Sans Pro | Captions, labels |
| **Caption** | 12px / 0.75rem | 500 | 1.4 | Source Sans Pro | Fine print |

### Type Treatments

```css
/* Sacred Quote */
.quote-sacred {
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--bark-brown);
  border-left: 3px solid var(--sacred-gold);
  padding-left: 1.5rem;
}

/* Jay's Voice */
.voice-jay {
  font-family: var(--font-primary);
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--earth-dark);
}

/* Section Divider Text */
.divider-text {
  font-family: var(--font-accent);
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sacred-gold);
}
```

---

## Spacing System

Based on 8px grid with organic variations:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight internal spacing |
| `--space-2` | 8px | Component padding |
| `--space-3` | 16px | Standard gaps |
| `--space-4` | 24px | Card padding |
| `--space-5` | 32px | Section gaps |
| `--space-6` | 48px | Major sections |
| `--space-7` | 64px | Hero spacing |
| `--space-8` | 96px | Page sections |
| `--space-9` | 128px | Breathing room |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Buttons, inputs |
| `--radius-md` | 8px | Cards, small containers |
| `--radius-lg` | 16px | Large cards, images |
| `--radius-xl` | 24px | Feature cards |
| `--radius-organic` | 40% 60% 55% 45% / 60% 40% 45% 55% | Organic shapes |
| `--radius-full` | 9999px | Pills, avatars |

---

## Shadows & Depth

```css
/* Subtle elevation */
--shadow-sm: 0 2px 4px rgba(26, 46, 26, 0.08);

/* Card elevation */
--shadow-md: 0 4px 12px rgba(26, 46, 26, 0.12);

/* Feature elevation */
--shadow-lg: 0 8px 24px rgba(26, 46, 26, 0.16);

/* Hero/Modal elevation */
--shadow-xl: 0 16px 48px rgba(26, 46, 26, 0.20);

/* Glow effects */
--glow-gold: 0 0 24px rgba(196, 150, 63, 0.4);
--glow-green: 0 0 32px rgba(74, 103, 65, 0.3);
```

---

## Iconography

### Icon Style
- **Source:** Custom icons + Lucide icons
- **Stroke width:** 1.5px
- **Style:** Organic, slightly hand-drawn feel
- **Sizes:** 16px, 20px, 24px, 32px

### Sacred Icons

| Icon | Usage |
|------|-------|
| 🌿 Leaf | Iboga, medicine, nature |
| 🔥 Fire | Ceremony, transformation, truth |
| 🌳 Tree | Roots, growth, ancient wisdom |
| 🌍 Earth | Gabon, grounding, global |
| ⭐ Star | Awakening, spirit, guidance |
| 🛡️ Shield | Protection, safety, warrior |
| ❤️ Heart | Compassion, healing, connection |
| 🏺 Vessel | Tradition, lineage, sacred container |

---

## Motion & Animation

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions |
| `--duration-normal` | 300ms | Standard transitions |
| `--duration-slow` | 500ms | Larger movements |
| `--duration-ritual` | 1000ms | Ceremonial reveals |

### Easing

```css
/* Natural, organic movement */
--ease-organic: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Grounding, settling */
--ease-ground: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Rising, awakening */
--ease-rise: cubic-bezier(0.4, 0, 0, 1);
```

### Animation Patterns

```css
/* Gentle breathing - for background elements */
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.02); opacity: 1; }
}

/* Fire flicker - for accent elements */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* Reveal from earth - for content sections */
@keyframes emerge {
  from { 
    transform: translateY(24px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}
```

---

## Imagery Guidelines

### Photography Style

| Category | Guidelines |
|----------|------------|
| **Jay Portraits** | Strong, grounded presence. Natural light. Earth tones. Direct eye contact when appropriate. |
| **Ceremony/Sacred** | Respectful, atmospheric. Fire light. Soft focus on sacred elements. Never exploitative. |
| **Nature** | Dense forest, roots, earth textures. Morning/evening light. Rich greens and browns. |
| **Testimonial** | Authentic, warm. Natural settings. Peaceful, transformed energy. |

### Image Treatment

```css
/* Sacred overlay */
.image-sacred {
  filter: sepia(10%) saturate(90%);
}

/* Forest atmosphere */
.image-forest {
  filter: brightness(95%) contrast(105%);
}

/* Warmth overlay */
.image-warm::after {
  background: linear-gradient(
    180deg, 
    rgba(196, 150, 63, 0.1) 0%, 
    rgba(45, 36, 25, 0.3) 100%
  );
}
```

### Texture Assets

- **Root bark texture** — organic backgrounds
- **Fire/smoke overlays** — atmospheric effects
- **Forest canopy** — hero backgrounds
- **Sacred patterns** — decorative borders
- **Earth/soil** — grounding elements

---

## Component Patterns

### Buttons

```css
/* Primary - Sacred Gold */
.btn-primary {
  background: var(--sacred-gold);
  color: var(--earth-dark);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-5);
  font-family: var(--font-secondary);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all var(--duration-normal) var(--ease-ground);
}

.btn-primary:hover {
  background: var(--fire-amber);
  box-shadow: var(--glow-gold);
}

/* Secondary - Forest Deep */
.btn-secondary {
  background: transparent;
  color: var(--forest-deep);
  border: 2px solid var(--forest-deep);
  border-radius: var(--radius-sm);
}

/* Ghost - Subtle */
.btn-ghost {
  background: transparent;
  color: var(--bark-brown);
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

### Cards

```css
/* Content Card */
.card {
  background: var(--cream-light);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-md);
}

/* Sacred Card - for important content */
.card-sacred {
  background: linear-gradient(135deg, var(--earth-dark) 0%, var(--forest-deep) 100%);
  color: var(--cream-light);
  border-radius: var(--radius-lg);
  border: 1px solid var(--sacred-gold);
}

/* Testimonial Card */
.card-testimonial {
  background: var(--cream-light);
  border-left: 4px solid var(--sacred-gold);
  padding: var(--space-5);
}
```

### Dividers

```css
/* Sacred line */
.divider {
  height: 1px;
  background: linear-gradient(
    90deg, 
    transparent 0%, 
    var(--sacred-gold) 50%, 
    transparent 100%
  );
  margin: var(--space-7) 0;
}

/* Organic separator */
.divider-organic {
  height: 2px;
  background: url('leaf-divider.svg') center/contain no-repeat;
}
```

---

## Logo Usage

### Primary Logo
- **Jay Logo** — Personal brand mark
- **Clear space:** Minimum 16px all sides
- **Minimum size:** 32px height
- **File formats:** SVG (primary), PNG (fallback)

### Logo Variations
- **Full color** — Primary use
- **Light (on dark)** — Dark backgrounds
- **Dark (on light)** — Light backgrounds
- **Gold accent** — Special/ceremonial contexts

### Logo Don'ts
- Don't rotate or skew
- Don't change colors outside palette
- Don't add effects or shadows
- Don't crowd with other elements
- Don't use on busy backgrounds without container

---

## Accessibility

### Color Contrast
- All text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- Interactive elements have visible focus states
- Don't rely on color alone to convey information

### Typography
- Minimum 16px for body text
- Line height minimum 1.5 for readability
- Sufficient spacing between paragraphs (1.5em)

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives for animations
- No auto-playing content that can't be paused

---

## Implementation Notes

### CSS Variables

```css
:root {
  /* Colors */
  --forest-deep: #1A2E1A;
  --earth-dark: #2D2419;
  --sacred-gold: #C4963F;
  --bark-brown: #5C4A36;
  --leaf-green: #4A6741;
  --fire-amber: #D4871A;
  --cream-light: #F5F0E6;
  
  /* Typography */
  --font-display: 'Rubik Moonrocks', cursive;
  --font-primary: 'Cormorant Garamond', Georgia, serif;
  --font-secondary: 'Source Sans Pro', Helvetica, sans-serif;
  --font-accent: 'Cinzel', serif;
  
  /* Spacing */
  --space-unit: 8px;
  
  /* Other tokens as defined above */
}
```

### Tailwind Config Extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          deep: '#1A2E1A',
          light: '#2D3D2D',
        },
        earth: {
          dark: '#2D2419',
          light: '#5C4A36',
        },
        sacred: {
          gold: '#C4963F',
          amber: '#D4871A',
        },
        cream: {
          DEFAULT: '#F5F0E6',
          dark: '#E8DFD0',
        },
      },
      fontFamily: {
        display: ['Rubik Moonrocks', 'cursive'],
        primary: ['Cormorant Garamond', 'Georgia', 'serif'],
        secondary: ['Source Sans Pro', 'sans-serif'],
        accent: ['Cinzel', 'serif'],
      },
    },
  },
}
```

---

*This visual identity system is designed to honor Jay's work and the sacred Bwiti tradition while creating a professional, trustworthy digital presence.*

