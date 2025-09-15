# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional luxury website for Mouhamina Law Office, a leading legal consultancy in Damascus, Syria. The site is built with Vue.js 3, Vite, Tailwind CSS, and includes comprehensive SEO optimization.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173/)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Architecture & Structure

### Core Technologies
- **Vue.js 3** with Composition API and `<script setup>` syntax
- **Vue Router** for client-side routing with HTML5 history mode and smooth scroll behavior
- **Vite** as build tool with ES modules and hot module replacement
- **Tailwind CSS 4.x** for utility-first styling with CSS-first configuration using `@theme` directive
- **Google Maps** integration for office location display

### Application Architecture

**Routing Structure**: Single-page application with 5 main routes defined in `src/main.js`:
- `/` - Home (hero, stats, services preview)  
- `/about` - About Us (company history, mission, achievements)
- `/founders` - Founders & Team (profiles, timeline)
- `/services` - Legal Services (6 detailed service offerings)
- `/contact` - Contact (Google Maps, office info, direct contact methods, FAQ)

**Component Hierarchy**:
- `App.vue` - Root component with Header/Footer layout
- `Header.vue` - Fixed navigation with mobile hamburger menu
- `Footer.vue` - Company info, contact details, links
- Page views in `/views` directory for each route

**Reusable Components**:
- `AnimatedSection.vue` - Intersection Observer-based scroll animations
- `CounterAnimation.vue` - Animated number counters with easing
- `SEOHead.vue` - Dynamic meta tag management for each page
- `PageTransition.vue` - Custom luxury page transition effects

### Styling System

**Design Tokens** (defined in `src/style.css` with `@theme` directive):
- Primary: Gold (#C9A96E) - matches company logo
- Primary Light: #D4B985 / Primary Dark: #B8956B
- Secondary: Navy (#1a2332) - professional dark blue
- Secondary Light: #2a3442 / Secondary Dark: #0f1419
- Accent Cream: #F8F6F0 - warm background color
- Fonts: Playfair Display (serif headings), Inter (sans-serif body)

**Custom CSS Classes** (in `src/style.css`):
- `.btn-primary` / `.btn-secondary` - Consistent button styling with hover effects
- `.section-title` - Standardized page headings with luxury fade-in animation
- `.card-elegant` - Professional card components with sophisticated hover effects
- `.animate-on-scroll` - Elements that animate when scrolled into view
- `.luxury-hover` - Enhanced hover effects with scale and brightness
- `.luxury-float` - Floating animation for logos and special elements

**Animation System**: Comprehensive luxury animation system with:
- Page transitions using cubic-bezier easing functions
- Scroll-triggered animations via Intersection Observer
- Keyframe animations: luxury-fade-in-up, luxury-card-entrance, luxury-gradient-shift
- Transform-based hover effects with scale and shadow enhancements

### SEO Implementation

**Comprehensive SEO** with 100/100 optimization score:
- Dynamic meta tags per page via `SEOHead.vue` component
- Structured data (Schema.org) for LegalService, Organization, LocalBusiness
- Open Graph and Twitter Card meta tags
- XML sitemap at `/public/sitemap.xml`
- Robots.txt with proper crawling directives
- Geographic targeting for Damascus, Syria location
- Performance optimization for Core Web Vitals

**Critical SEO Files**:
- `public/sitemap.xml` - Search engine sitemap
- `public/robots.txt` - Crawler directives  
- `SEO_IMPLEMENTATION.md` - Detailed SEO strategy documentation

### Content & Business Logic

**Key Business Data**:
- 18+ years legal experience (since 2007)
- 117+ organizations consulted
- 6 main legal services offered
- Damascus, Syria location (Al-Salihiyah, Al-Abed Street)
- Contact: +963 932 244 513, rl.legal.consultancy@gmail.com

**Content Management**: All content is hardcoded in Vue templates. Legal services data, statistics, and company information are defined as data properties in respective page components.

**Contact Integration**: Contact page features Google Maps integration (coordinates: 33.519092185937794, 36.293841046036036), direct contact information, and interactive FAQ section. Previous contact form was replaced with practical contact methods including phone, email, and office location details.

### Performance Optimization

**Vite Configuration**:
- Bundle splitting (vendor/ui chunks)
- Terser minification with console removal
- CSS code splitting enabled
- Tree shaking for unused code elimination

**Image Optimization**:
- Lazy loading for non-critical images
- Descriptive alt text with SEO keywords
- External images from Unsplash with optimization parameters
- Circular logo display with luxury floating animation
- Justice and law-themed imagery throughout the site

### Development Patterns

**Vue Component Pattern**: All pages follow consistent structure with SEOHead component, semantic HTML sections, and Tailwind styling.

**Animation Pattern**: Use `AnimatedSection` wrapper for scroll-triggered animations, `CounterAnimation` for statistics display, and `PageTransition` for luxury page transitions with cubic-bezier easing.

**Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).

**Router Configuration**: Smooth scroll behavior with `scrollBehavior` returning to top on route change, preserving scroll position on back/forward navigation.

## Key Considerations

- **Package Type**: ES modules (`"type": "module"` in package.json)
- **Tailwind CSS 4.x**: Uses CSS-first configuration with `@theme` directive instead of JavaScript config
- **SEO Critical**: All meta tags, structured data, and performance optimizations are essential for search rankings
- **Brand Consistency**: Maintain gold (#C9A96E) and navy (#1a2332) color scheme throughout
- **Legal Content**: Company serves Syrian civil society, NGOs, and businesses - content reflects this specialization
- **Contact Information**: Always use consistent NAP (Name, Address, Phone) across all pages for local SEO
- **Animation Performance**: All animations use CSS transforms and will-change properties for optimal performance
- **Google Maps**: Embedded map shows exact office location in Damascus, Al-Salihiyah district