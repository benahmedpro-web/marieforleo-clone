# Time Genius Section Specification

## Overview
- **Target file:** `src/components/TimeGeniusSection.tsx`
- **Interaction model:** Static with CTA button
- **Background:** Light beige with subtle gradient (#E8DDD0 to #F5F5F5)
- **Layout:** Two-column (text + image on desktop)

## DOM Structure
```
<section className="time-genius-section">
  <div className="content-wrapper">
    <h2>Time Genius</h2>
    <h3>Take Back Your Time. Get Back Your Life.</h3>
    <p className="description">[course description]</p>
    <a href="[course-link]" className="cta-button">Get the Course</a>
  </div>
  <div className="image-wrapper">
    <img src="marie-at-desk.jpg" alt="Marie Forleo at desk with laptop" />
    <span className="badge">time genius</span>
  </div>
</section>
```

## Computed Styles

### Container
- display: flex (column mobile, row desktop)
- backgroundColor: linear-gradient(135deg, #E8DDD0 0%, #F5F5F5 100%)
- padding: 80px 20px (mobile), 120px 80px (desktop)
- gap: 60px
- alignItems: center
- borderRadius: 16px

### Heading (h2)
- fontFamily: serif
- fontSize: 32px (mobile), 48px (desktop)
- fontWeight: 400
- color: #1A1A1A
- marginBottom: 12px

### Subheading (h3)
- fontFamily: serif
- fontSize: 28px (mobile), 40px (desktop)
- fontWeight: 400
- color: #1A1A1A
- marginBottom: 24px

### Description
- fontSize: 14px (mobile), 16px (desktop)
- lineHeight: 1.8
- color: #4A4A4A
- maxWidth: 600px
- marginBottom: 32px

### CTA Button
- backgroundColor: linear-gradient(135deg, #00CED1 0%, #0099CC 100%)
- color: #FFFFFF
- padding: 16px 48px
- fontSize: 16px
- fontWeight: 600
- border: none
- borderRadius: 32px
- cursor: pointer
- transition: all 0.3s
- textTransform: uppercase
- letterSpacing: 1px

### CTA Button Hover
- transform: translateY(-2px)
- boxShadow: 0 8px 24px rgba(0, 206, 209, 0.3)

### Image
- width: 100% (mobile), 450px (desktop)
- borderRadius: 12px
- objectFit: cover
- position: relative

### Badge (.badge)
- position: absolute
- top: 16px
- right: 16px
- backgroundColor: transparent
- color: #FFFFFF
- fontSize: 12px
- fontWeight: 600
- textTransform: uppercase
- letterSpacing: 1px
- padding: 8px 12px
- backgroundColor: rgba(0, 0, 0, 0.3)
- borderRadius: 4px

## Text Content
- Heading: "Time Genius"
- Subheading: "Take Back Your Time. Get Back Your Life."
- Description: "[full course description from site]"
- Button: "Get the Course"
- Badge: "time genius"

## Assets
- Marie at desk with laptop image
- Optional: Background texture or pattern

## Responsive
- **Mobile:** Single column, full-width image
- **Desktop:** Two-column layout, side-by-side
