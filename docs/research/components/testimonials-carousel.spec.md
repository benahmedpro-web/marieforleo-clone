# Testimonials/Success Stories Carousel Specification

## Overview
- **Target file:** `src/components/TestimonialsCarousel.tsx`
- **Interaction model:** Click-driven carousel with previous/next buttons
- **Background:** Light/white
- **Type:** Testimonial cards with pagination indicators

## DOM Structure
```
<section className="testimonials-section">
  <h2>Our students Get Results</h2>
  <h3>Will You Be The Next Success Story?</h3>
  <div className="carousel-container">
    <div className="carousel-slide" data-index="0">
      <div className="testimonial-card">
        <p className="quote">[testimonial quote]</p>
        <p className="author-name">[Author Name]</p>
        <a href="/success-stories">Get Inspired</a>
      </div>
    </div>
    <!-- more slides -->
    <div className="carousel-slide" data-index="3">
      <!-- slide 4 -->
    </div>
  </div>
  <div className="carousel-controls">
    <button className="prev">←</button>
    <button className="next">→</button>
    <div className="pagination">
      <button className="dot" data-slide="0"></button>
      <button className="dot" data-slide="1"></button>
      <button className="dot" data-slide="2"></button>
      <button className="dot" data-slide="3"></button>
    </div>
  </div>
</section>
```

## Computed Styles

### Container
- backgroundColor: #F5F5F5 or #FFFFFF
- padding: 80px 20px (mobile), 120px 80px (desktop)
- textAlign: center

### Headings
- h2: fontFamily: 'Playfair Display', fontSize: 48px, color: #1A1A1A
- h3: fontFamily: serif, fontSize: 24px, color: #1A1A1A, marginBottom: 60px

### Carousel Container
- display: grid or flex
- width: 100%
- position: relative
- overflow: hidden
- borderRadius: 8px

### Testimonial Card
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- padding: 60px 40px (mobile), 80px 60px (desktop)
- backgroundColor: #FFFFFF
- borderRadius: 8px
- boxShadow: 0 2px 8px rgba(0,0,0,0.1)

### Quote Text
- fontFamily: 'Georgia', serif (or serif body font)
- fontSize: 16px (mobile), 18px (desktop)
- lineHeight: 1.8
- color: #3A3A3A
- marginBottom: 20px
- fontStyle: italic

### Author Name
- fontFamily: sans-serif
- fontSize: 14px
- fontWeight: 600
- color: #1A1A1A
- marginBottom: 12px
- letterSpacing: 0.5px

### Link ("Get Inspired")
- color: #1A1A1A
- textDecoration: none
- fontSize: 14px
- fontWeight: 500
- transition: color 0.3s

### Controls
- display: flex
- justifyContent: center
- alignItems: center
- gap: 20px
- marginTop: 40px

### Prev/Next Buttons
- width: 40px
- height: 40px
- borderRadius: 50%
- border: 2px solid #1A1A1A
- backgroundColor: transparent
- color: #1A1A1A
- cursor: pointer
- fontSize: 18px
- transition: all 0.3s

### Pagination Dots
- width: 8px
- height: 8px
- borderRadius: 50%
- border: none
- backgroundColor: #D0D0D0
- cursor: pointer
- transition: backgroundColor 0.3s
- margin: 0 6px

### Active Dot
- backgroundColor: #1A1A1A

## Text Content (Testimonials)
- Slide 1: "The EXACT messages I needed to hear..." - Bonnie U.
- Slide 2: "Her videos gave me the push..." - Shhivika C.
- Slide 3: "Jenni and I tune into MarieTV..." - Sophie D.
- Slide 4: "There's a special place in Heaven..." - Kongit F.

## Interaction Model
- Previous button: Go to previous slide (circular)
- Next button: Go to next slide (circular)
- Dot buttons: Jump to specific slide
- Auto-play: Optional (not visible in static inspection)
- Transition: Fade or slide animation (250-300ms)

## Assets
- None (text-based testimonials)

## Responsive
- **Mobile:** Single column, full-width cards
- **Desktop:** Cards maintain same layout, controls visible below
