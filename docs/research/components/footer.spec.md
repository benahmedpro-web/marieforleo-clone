# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Click-driven (links, form submission)
- **Background:** Warm beige/taupe (#D4C5B0)
- **Layout:** Multi-column responsive grid

## DOM Structure
```
<footer className="footer">
  <div className="footer-container">
    <!-- Email Signup Section -->
    <div className="footer-cta">
      <h2>Become an MF Insider</h2>
      <p>Sign up for exclusive content, emails & things Marie doesn't share anywhere else.</p>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="Enter Your Email" />
        <button>LET'S DO IT</button>
      </form>
    </div>

    <!-- Links Columns -->
    <div className="footer-links">
      <div className="link-column">
        <h3>Company</h3>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/marietv">MarieTV</a></li>
          <!-- more links -->
        </ul>
      </div>
      <div className="link-column">
        <h3>Shop</h3>
        <ul>
          <li><a href="/bschool">B-School</a></li>
          <!-- more links -->
        </ul>
      </div>
      <div className="link-column">
        <h3>Legal</h3>
        <ul>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">Privacy</a></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div className="footer-bottom">
      <p>© 2026 Marie Forleo International</p>
    </div>
  </div>
</footer>
```

## Computed Styles

### Footer Container
- backgroundColor: #D4C5B0
- padding: 60px 20px (mobile), 100px 80px (desktop)
- maxWidth: 1440px
- margin: 0 auto

### CTA Section
- marginBottom: 60px
- paddingBottom: 60px
- borderBottom: 1px solid rgba(26, 26, 26, 0.2)

### CTA Heading
- fontFamily: serif
- fontSize: 28px (mobile), 36px (desktop)
- fontWeight: 400
- color: #1A1A1A
- marginBottom: 16px

### CTA Form
- display: flex
- flexDirection: column
- gap: 12px
- width: 100%
- maxWidth: 400px

### Form Inputs
- width: 100%
- padding: 12px 16px
- fontSize: 14px
- border: 2px solid #1A1A1A
- borderRadius: 4px
- backgroundColor: transparent
- color: #1A1A1A

### Form Button
- padding: 12px 24px
- fontSize: 14px
- fontWeight: 600
- backgroundColor: #1A1A1A
- color: #FFFFFF
- border: none
- borderRadius: 4px
- cursor: pointer
- textTransform: uppercase
- letterSpacing: 1px
- transition: opacity 0.3s

### Links Grid
- display: grid
- gridTemplateColumns: 1 column (mobile), 3 columns (desktop)
- gap: 40px
- marginBottom: 40px

### Link Column Heading
- fontFamily: serif
- fontSize: 16px
- fontWeight: 600
- color: #1A1A1A
- marginBottom: 16px
- textTransform: uppercase
- letterSpacing: 1px

### Link Column List
- listStyleType: none
- margin: 0
- padding: 0

### Link Column Links
- color: #1A1A1A
- fontSize: 14px
- lineHeight: 2
- textDecoration: none
- transition: opacity 0.3s

### Link Hover
- opacity: 0.7

### Footer Bottom
- textAlign: center
- paddingTop: 40px
- borderTop: 1px solid rgba(26, 26, 26, 0.2)
- fontSize: 12px
- color: #6B6B6B

## Text Content
- CTA Heading: "Become an MF Insider"
- CTA Description: "Sign up for exclusive content..."
- Form inputs: "First Name", "Enter Your Email"
- Button: "LET'S DO IT"
- Multiple footer link sections (Company, Shop, Legal)
- Copyright: "© 2026 Marie Forleo International"

## Responsive
- **Mobile:** Single column layout
- **Desktop:** Multi-column grid layout
