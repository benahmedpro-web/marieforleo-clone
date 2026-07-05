# About Section ("Heya! I'm Marie") Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Interaction model:** Static
- **Background:** Warm beige/taupe (#D4C5B0 or #E8DDD0)

## DOM Structure
```
<section className="about-section">
  <div className="about-content">
    <p className="greeting">HEYA!</p>
    <h2>I'm Marie.</h2>
    <div className="bio-text">
      <p>[bio paragraph]</p>
    </div>
    <a href="/about" className="learn-more">Learn More</a>
  </div>
  <div className="about-image">
    <img src="marie-photo.jpg" alt="Marie Forleo" />
  </div>
</section>
```

## Computed Styles

### Container
- display: flex (column on mobile, row on desktop)
- backgroundColor: #D4C5B0 or #E8DDD0
- padding: 60px 20px (mobile), 100px 80px (desktop)
- gap: 40px (mobile), 60px (desktop)
- alignItems: flex-start or center

### Greeting (.greeting)
- fontFamily: serif
- fontSize: 14px
- fontWeight: 600
- letterSpacing: 2px
- color: #8B7D6B (warm brown)
- marginBottom: 16px

### Heading (h2)
- fontFamily: 'Playfair Display', serif
- fontSize: 48px (mobile), 64px (desktop)
- fontWeight: 400
- lineHeight: 1.2
- color: #1A1A1A
- marginBottom: 24px

### Bio Text (p)
- fontFamily: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- fontSize: 16px (mobile), 18px (desktop)
- lineHeight: 1.8
- color: #3A3A3A
- maxWidth: 600px
- marginBottom: 32px

### Learn More Link
- color: #3A3A3A
- textDecoration: underline
- fontSize: 14px
- fontWeight: 500
- transition: opacity 0.3s

### Image
- width: 100% (mobile), 400px (desktop)
- borderRadius: 8px
- objectFit: cover

## Text Content
- Greeting: "HEYA!"
- Heading: "I'm Marie."
- Bio: [full paragraph from site]
- Link: "Learn More"

## Assets
- Marie photo (portrait, woman in casual outfit)

## Responsive
- **Mobile:** Single column stack
- **Desktop:** Two column (text + image side by side)
