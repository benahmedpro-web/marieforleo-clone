# Opt-In Form Section ("Learn How to Get Anything You Want") Specification

## Overview
- **Target file:** `src/components/OptInSection.tsx`
- **Interaction model:** Click-driven (form submission)
- **Background:** Warm beige/taupe (#E8DDD0)
- **Layout:** Two-column (image + form on desktop)

## DOM Structure
```
<section className="optin-section">
  <div className="optin-content">
    <h2>Learn How to Get Anything You Want</h2>
    <p className="subtitle">[supporting text]</p>
    <form>
      <input type="text" placeholder="First Name" />
      <input type="email" placeholder="Enter Your Email" />
      <button type="submit">GET INSTANT ACCESS</button>
    </form>
    <p className="disclaimer">[terms/privacy text]</p>
  </div>
  <div className="optin-image">
    <img src="marie-audio.jpg" alt="Free audio training" />
  </div>
</section>
```

## Computed Styles

### Container
- display: flex (column mobile, row desktop)
- backgroundColor: #E8DDD0
- padding: 60px 20px (mobile), 100px 80px (desktop)
- gap: 40px
- alignItems: center

### Heading (h2)
- fontFamily: 'Playfair Display', serif
- fontSize: 42px (mobile), 56px (desktop)
- fontWeight: 400
- lineHeight: 1.2
- color: #1A1A1A
- marginBottom: 20px

### Subtitle
- fontSize: 16px
- lineHeight: 1.6
- color: #4A4A4A
- marginBottom: 32px

### Form
- display: flex
- flexDirection: column
- gap: 16px
- width: 100%
- maxWidth: 500px

### Input Fields
- width: 100%
- padding: 12px 16px
- fontSize: 14px
- border: 2px solid #1A1A1A
- borderRadius: 4px
- fontFamily: inherit
- backgroundColor: transparent
- color: #1A1A1A
- placeholder color: #8B7D6B

### Submit Button
- width: 100%
- padding: 16px 24px
- fontSize: 14px
- fontWeight: 600
- backgroundColor: #D4E157 (yellow/lime)
- color: #1A1A1A
- border: none
- borderRadius: 32px
- cursor: pointer
- transition: opacity 0.3s, transform 0.2s
- text-transform: uppercase
- letterSpacing: 1px

### Disclaimer
- fontSize: 12px
- lineHeight: 1.6
- color: #6B6B6B
- marginTop: 16px

### Image
- width: 100% (mobile), 400px (desktop)
- borderRadius: 8px
- objectFit: cover

## Text Content
- Heading: "Learn How to Get Anything You Want"
- Subtitle: "[copy about 3 steps and audio training]"
- Inputs: "First Name", "Enter Your Email"
- Button: "GET INSTANT ACCESS"
- Disclaimer: "[terms and privacy text with links]"

## Assets
- Marie with microphone and audio training materials image
- Optional: Paper/mockup design elements

## Responsive
- **Mobile:** Single column
- **Desktop:** Two column (form left, image right)

## Interaction
- Form submission handling
- Input validation (email format)
