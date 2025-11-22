# RHBC Services - Design System
## World-Class Construction Website

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-900:   #0F172A  /* Deep Navy - Headers, important text */
--primary-800:   #1E293B  /* Dark Blue - Primary backgrounds */
--primary-700:   #334155  /* Slate - Secondary elements */
--primary-600:   #475569  /* Medium Slate */
--primary-500:   #64748B  /* Light Slate */
```

### Accent Colors
```css
--accent-orange: #F59E0B  /* Construction Orange - CTAs, highlights */
--accent-gold:   #EAB308  /* Golden Yellow - Premium accents */
--accent-green:  #047857  /* Deep Green - Sustainability, success */
```

### Neutral Colors
```css
--neutral-50:    #F9FAFB  /* Background - Lightest */
--neutral-100:   #F3F4F6  /* Background - Light */
--neutral-200:   #E5E7EB  /* Borders - Light */
--neutral-300:   #D1D5DB  /* Borders - Medium */
--neutral-800:   #1F2937  /* Text - Dark */
--neutral-900:   #111827  /* Text - Darkest */
```

### Semantic Colors
```css
--success:       #10B981  /* Success states */
--warning:       #F59E0B  /* Warning states */
--error:         #EF4444  /* Error states */
--info:          #3B82F6  /* Info states */
```

---

## 📐 Typography

### Font Families
```css
/* Primary Font - Inter Variable */
--font-primary: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display Font - For large headings */
--font-display: 'Inter Variable', sans-serif;

/* Monospace - For technical content */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale (Major Second - 1.125 ratio)
```css
--text-xs:   0.75rem;    /* 12px */
--text-sm:   0.875rem;   /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg:   1.125rem;   /* 18px */
--text-xl:   1.25rem;    /* 20px */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */
--text-6xl:  3.75rem;    /* 60px */
--text-7xl:  4.5rem;     /* 72px */
--text-8xl:  6rem;       /* 96px */
```

### Font Weights
```css
--font-light:    300;
--font-normal:   400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-none:    1;
--leading-tight:   1.25;
--leading-snug:    1.375;
--leading-normal:  1.5;
--leading-relaxed: 1.625;
--leading-loose:   2;
```

---

## 📏 Spacing System (8pt Grid)

```css
--space-0:   0;
--space-1:   0.25rem;  /* 4px */
--space-2:   0.5rem;   /* 8px */
--space-3:   0.75rem;  /* 12px */
--space-4:   1rem;     /* 16px */
--space-5:   1.25rem;  /* 20px */
--space-6:   1.5rem;   /* 24px */
--space-8:   2rem;     /* 32px */
--space-10:  2.5rem;   /* 40px */
--space-12:  3rem;     /* 48px */
--space-16:  4rem;     /* 64px */
--space-20:  5rem;     /* 80px */
--space-24:  6rem;     /* 96px */
--space-32:  8rem;     /* 128px */
--space-40:  10rem;    /* 160px */
--space-48:  12rem;    /* 192px */
--space-56:  14rem;    /* 224px */
--space-64:  16rem;    /* 256px */
```

---

## 🔲 Layout

### Container
```css
--container-sm:  640px;
--container-md:  768px;
--container-lg:  1024px;
--container-xl:  1280px;
--container-2xl: 1440px;
--container-max: 1600px;
```

### Breakpoints
```css
--breakpoint-sm:  640px;
--breakpoint-md:  768px;
--breakpoint-lg:  1024px;
--breakpoint-xl:  1280px;
--breakpoint-2xl: 1536px;
```

### Grid
```css
--grid-columns-mobile:  4;
--grid-columns-tablet:  8;
--grid-columns-desktop: 12;
--grid-gap:            24px;
```

---

## 🎭 Shadows

```css
--shadow-xs:  0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## 🔘 Border Radius

```css
--radius-none: 0;
--radius-sm:   0.125rem;  /* 2px */
--radius-base: 0.25rem;   /* 4px */
--radius-md:   0.375rem;  /* 6px */
--radius-lg:   0.5rem;    /* 8px */
--radius-xl:   0.75rem;   /* 12px */
--radius-2xl:  1rem;      /* 16px */
--radius-3xl:  1.5rem;    /* 24px */
--radius-full: 9999px;
```

---

## ⚡ Animation Timing

### Durations
```css
--duration-fast:    150ms;
--duration-base:    300ms;
--duration-slow:    500ms;
--duration-slower:  700ms;
```

### Easing Functions
```css
--ease-linear:     linear;
--ease-in:         cubic-bezier(0.4, 0, 1, 1);
--ease-out:        cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth:     cubic-bezier(0.45, 0, 0.55, 1);  /* Custom smooth */
--ease-bounce:     cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* Bounce effect */
```

### GSAP Easing (Premium)
```javascript
// Use these with GSAP animations
power1.out     // Subtle ease
power2.out     // Medium ease
power3.out     // Strong ease
power4.out     // Very strong ease
expo.out       // Exponential (dramatic)
circ.out       // Circular (smooth)
elastic.out    // Bounce effect
```

---

## 🎨 Component Styles

### Buttons

**Primary Button:**
```css
background: var(--accent-orange);
color: white;
padding: 12px 32px;
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);
transition: all var(--duration-base) var(--ease-out);

hover:
  background: #E08D00;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
```

**Secondary Button:**
```css
background: transparent;
border: 2px solid var(--primary-800);
color: var(--primary-800);
padding: 12px 32px;
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);

hover:
  background: var(--primary-800);
  color: white;
```

**Magnetic Button (Premium):**
- Cursor follows button with smooth lag
- Button slightly moves toward cursor
- Implemented with GSAP

### Cards

**Service Card:**
```css
background: white;
border-radius: var(--radius-xl);
padding: var(--space-8);
box-shadow: var(--shadow-md);
transition: all var(--duration-base) var(--ease-out);

hover:
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--accent-orange);
```

### Forms

**Input Field:**
```css
border: 2px solid var(--neutral-200);
border-radius: var(--radius-lg);
padding: 12px 16px;
font-size: var(--text-base);
transition: all var(--duration-base);

focus:
  border-color: var(--accent-orange);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  outline: none;

error:
  border-color: var(--error);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
```

---

## 🎬 Animation Principles

### Micro-Interactions
- **Hover**: 150-300ms duration
- **Click**: 100-200ms duration
- **Loading**: Continuous loop, 600-800ms

### Scroll Animations
- **Fade In**: Opacity 0 → 1, 600ms
- **Slide Up**: TranslateY 30px → 0, 800ms
- **Stagger**: 100ms delay between elements

### Page Transitions
- **Duration**: 500-700ms
- **Easing**: power2.out
- **Effect**: Fade + slight vertical movement

---

## 🖼️ Image Guidelines

### Formats
- **Hero/Large Images**: WebP primary, JPEG fallback
- **Icons/Logos**: SVG
- **Photography**: WebP, AVIF when supported
- **Thumbnails**: WebP at 800px width

### Optimization
- **Hero Images**: Max 1920px width, <500KB
- **Gallery Images**: 1200px width, <300KB
- **Thumbnails**: 600px width, <150KB
- **Compression**: 80-85% quality

---

## ♿ Accessibility

### Contrast Ratios (WCAG AA)
- **Normal Text**: Minimum 4.5:1
- **Large Text (18px+)**: Minimum 3:1
- **Interactive Elements**: Minimum 4.5:1

### Focus States
```css
outline: 2px solid var(--accent-orange);
outline-offset: 2px;
```

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives
- Never rely solely on animation for information

---

## 📱 Responsive Design

### Mobile First Approach
1. Design for mobile (320px+)
2. Enhance for tablet (768px+)
3. Optimize for desktop (1024px+)

### Touch Targets
- Minimum size: 44x44px
- Spacing between: 8px minimum

---

## 🎯 Performance Targets

- **Lighthouse Score**: 95+ all categories
- **LCP**: < 2.5s
- **FID/INP**: < 200ms
- **CLS**: < 0.1
- **Page Weight**: < 3MB total
- **Time to Interactive**: < 3.5s

---

This design system ensures consistency, accessibility, and premium quality throughout the RHBC Services website.
