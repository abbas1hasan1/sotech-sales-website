# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

This is a SoTech sales/pricing page built with Next.js 16 (App Router) and Tailwind CSS v4. The site features iOS-inspired dark glassmorphism design with purple-blue gradients.

### Stack
- **Next.js 16** with App Router (all pages in `app/`)
- **Tailwind CSS v4** - uses CSS-based config via `@theme inline` in `globals.css`
- **TypeScript**
- **Vercel** for deployment (auto-deploys from GitHub)

### Design System

The design system is defined in `app/globals.css` using CSS custom properties:

- **Color palette**: Purple-blue spectrum (`--violet: #8b5cf6`, `--indigo: #6366f1`, `--deep-blue: #4f46e5`)
- **Glass cards**: `backdrop-filter: blur(40px)` with subtle borders
- **Gradients**: `--gradient-primary` for accent elements
- **Animations**: Spring/ease curves defined as CSS variables

### Page Structure

`app/page.tsx` composes four main sections:
1. **Hero** (`Hero/index.tsx`) - Animated browser mockup with parallax blob background (`LivingCanvas.tsx`)
2. **ValueReveal** - Before/after comparison slider showing website transformations
3. **PricingCalculator** - Interactive pricing with tier selection (Landing Page $1,500, Website $3,000, Monthly $797/mo)
4. **CTASection** - Final call-to-action

### Component Patterns

- Components use `'use client'` directive for interactivity
- Intersection Observer triggers scroll-based animations via `isVisible` state
- Pricing data is centralized in `PricingCalculator/pricing-data.ts`
- Logo component (`Logo.tsx`) renders SoTech's network icon as inline SVG
- Header (`Header.tsx`) is a fixed glassmorphic nav bar
