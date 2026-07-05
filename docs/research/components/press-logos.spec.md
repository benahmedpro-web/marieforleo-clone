# Press/Media Logos Section Specification

## Overview
- **Target file:** `src/components/PressSection.tsx`
- **Interaction model:** Static (display only)
- **Background:** Dark (#1A1A1A or #000000)
- **Layout:** Responsive grid

## DOM Structure
```
<section className="press-section">
  <h2>You Might Have Seen Me On</h2>
  <div className="logos-grid">
    <img src="forbes-logo.svg" alt="Forbes" />
    <img src="nyt-logo.svg" alt="The New York Times" />
    <img src="goop-logo.svg" alt="goop" />
    <img src="today-logo.svg" alt="The Today Show" />
    <img src="oprah-logo.svg" alt="Oprah Winfrey Network" />
    <img src="harpers-bazaar-logo.svg" alt="Harper's Bazaar" />
  </div>
</section>
```

## Computed Styles

### Container
- backgroundColor: #1A1A1A
- padding: 80px 20px (mobile), 100px 80px (desktop)
- textAlign: center

### Heading (h2)
- fontFamily: serif
- fontSize: 32px (mobile), 48px (desktop)
- fontWeight: 400
- color: #FFFFFF
- marginBottom: 60px
- letterSpacing: 0.5px

### Logos Grid
- display: grid
- gridTemplateColumns: 2 columns (mobile), 3 columns (tablet), 6 columns (desktop)
- gap: 40px (mobile), 60px (desktop)
- alignItems: center
- justifyItems: center

### Logo Image
- width: auto
- height: 40px (mobile), 50px (desktop)
- maxWidth: 120px
- objectFit: contain
- filter: brightness(0) invert(1) (white logos)
- opacity: 0.8
- transition: opacity 0.3s

### Logo Image Hover
- opacity: 1

## Text Content
- Heading: "You Might Have Seen Me On"

## Assets
- Forbes logo (white)
- The New York Times logo (white)
- goop logo (white)
- The Today Show logo (white)
- Oprah Winfrey Network logo (white)
- Harper's Bazaar logo (white)

## Responsive Behavior
- **Mobile (390px):** 2 columns, smaller logos
- **Tablet (768px):** 3 columns
- **Desktop (1440px):** 6 columns in a row
