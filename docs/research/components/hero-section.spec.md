# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static with scroll indicator
- **Layout:** Full-width, full-height viewport

## DOM Structure
```
<section className="hero">
  <div className="hero-content">
    <h1>Create a Business and <span>Life You Love</span></h1>
    <div className="video-indicator">
      <button>▶ Watch Video</button>
    </div>
  </div>
  <div className="scroll-indicator">
    <svg>chevron down</svg>
  </div>
</section>
```

## Computed Styles

### Container (.hero)
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- width: 100%
- minHeight: 100vh
- backgroundColor: #000000
- position: relative
- padding: 40px 20px (mobile), 60px 20px (tablet), 80px 20px (desktop)

### Heading (h1)
- fontFamily: 'Playfair Display', serif (or similar high-contrast serif)
- fontSize: 36px (mobile), 52px (tablet), 72px (desktop)
- fontWeight: 400 (regular)
- lineHeight: 1.2
- color: #FFFFFF
- textAlign: center
- maxWidth: 100%
- marginBottom: 60px
- letterSpacing: -0.02em

### Highlight Span ("Love")
- color: #E8B4A8 (coral/rose)
- fontStyle: italic

### Video Indicator (.video-indicator)
- display: flex
- alignItems: center
- gap: 12px
- marginBottom: 80px

### Video Button
- display: flex
- alignItems: center
- gap: 8px
- backgroundColor: transparent
- border: none
- color: #FFFFFF
- fontSize: 14px (mobile), 16px (desktop)
- cursor: pointer
- padding: 0
- fontFamily: inherit

### Play Icon
- width: 24px
- height: 24px
- borderRadius: 50%
- backgroundColor: rgba(255, 255, 255, 0.2)
- display: flex
- alignItems: center
- justifyContent: center
- color: #FFFFFF

### Scroll Indicator (.scroll-indicator)
- position: absolute
- bottom: 40px
- left: 50%
- transform: translateX(-50%)
- animation: bounce 2s infinite

## Text Content
- Heading: "Create a Business and Life You Love"
  - Highlight word: "Love"
- Button text: "Watch Video"

## Assets
- None (pure CSS and SVG icons)

## Animations
- Scroll indicator bounce animation: up-down motion, 2s duration
- Optional: fade-in animation on page load (250ms ease-out)

## Responsive Behavior
- **Mobile (390px):** Single column, text size 36px, padding 40px 20px
- **Tablet (768px):** Text size 52px, padding 60px 20px
- **Desktop (1440px):** Text size 72px, padding 80px 20px
