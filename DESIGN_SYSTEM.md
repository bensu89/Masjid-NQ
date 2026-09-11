# Design System — Masjid App MVP

## 1. Color Palette

### Primary (Islamic Green)
- `--primary: 150 35% 30%` — Deep Islamic Green (#1a5a3a)
- `--primary-light: 150 40% 50%` — Light Green (#2d8f5a)
- `--primary-lighter: 150 45% 70%` — Very Light Green (#7ac9a0)

### Secondary (Gold/Amber)
- `--secondary: 30 100% 50%` — Gold (#ff9900)
- `--secondary-light: 30 100% 65%` — Light Gold (#ffb84d)
- `--secondary-lighter: 30 100% 85%` — Very Light Gold (#ffe6cc)

### Neutral
- `--background: 0 0% 100%` — White
- `--foreground: 222.2 47.4% 11.2%` — Dark Gray
- `--muted: 0 0% 96.1%` — Light Gray
- `--muted-foreground: 215.4 18.3% 54.9%` — Medium Gray

### Semantic
- `--destructive: 0 50% 50%` — Red (errors)
- `--success: 120 50% 50%` — Green (success)
- `--warning: 40 100% 50%` — Orange (warnings)
- `--info: 210 100% 50%` — Blue (info)

## 2. Typography

### Font Family
- Primary: Inter (sans-serif)
- Mono: Fira Code (code blocks)

### Scale (px)
- xs: 12px (0.75rem)
- sm: 14px (0.875rem)
- base: 16px (1rem)
- lg: 18px (1.125rem)
- xl: 20px (1.25rem)
- 2xl: 24px (1.5rem)
- 3xl: 30px (1.875rem)
- 4xl: 36px (2.25rem)

### Weight
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## 3. Spacing

Grid: 4px base unit
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl: 48px
- 4xl: 64px

## 4. Border Radius

- sm: 4px
- md: 8px
- lg: 12px
- full: 9999px

## 5. Components — Base

### Button
- Primary (Green): bg-primary text-white, hover:opacity-90
- Secondary (White): bg-white border-primary text-primary, hover:bg-muted
- Danger (Red): bg-destructive text-white, hover:opacity-90
- Size: sm (8px 12px), md (12px 16px), lg (16px 24px)

### Input / Form
- Border: 1px solid border
- Focus: ring-2 ring-primary
- Error: border-destructive
- Disabled: opacity-50 cursor-not-allowed

### Card
- bg-card, border-border, rounded-lg, shadow-sm
- Padding: 16px (lg)
- Mobile: 12px (md)

### Badge
- bg-primary-lighter text-primary, rounded-full, px-2 py-1

### Alert
- Success: bg-green-50 border-l-4 border-success
- Error: bg-red-50 border-l-4 border-destructive
- Warning: bg-yellow-50 border-l-4 border-warning
- Info: bg-blue-50 border-l-4 border-info

## 6. Layout

### Container
- Max-width: 1400px
- Padding: 16px mobile, 24px desktop
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1400px

### Grid
- 12-column grid
- Gap: 16px desktop, 12px mobile

### Header / Navigation
- Height: 64px desktop, 56px mobile
- Sticky top
- Shadow: shadow-sm
- bg-background border-b border-border

## 7. Icons

Library: lucide-react
- Size sm: 16px
- Size md: 20px
- Size lg: 24px
- Color: inherit from parent text color

## 8. Shadows

- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.1)
- lg: 0 10px 15px rgba(0,0,0,0.1)

## 9. Dark Mode (Phase 2)

Color adjustments untuk dark mode akan ditambah di Phase 2.
Saat ini MVP fokus light mode saja.

## 10. Responsive Breakpoints

- Mobile First: CSS-in-JS dengan Tailwind
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Semua komponen harus responsif dan mobile-friendly.
