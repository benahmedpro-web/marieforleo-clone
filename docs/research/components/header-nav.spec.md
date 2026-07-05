# Header/Navigation Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** Click-driven (hamburger opens/closes menu)
- **Sticky behavior:** Yes, stays at top on scroll
- **Background:** White (#FFFFFF)

## DOM Structure
```
<header className="header">
  <nav className="navbar">
    <div className="nav-container">
      <a href="/" className="logo">MARIE FORLEO</a>
      <button className="hamburger">☰</button>
      <ul className="nav-menu" id="navMenu">
        <li><a href="/blog">Blog</a></li>
        <li><a href="/shop">Shop</a></li>
        <li className="dropdown">
          <button>Programs</button>
          <div className="dropdown-menu">
            <!-- B-School, Copy Cure, Time Genius, etc. -->
          </div>
        </li>
        <li><a href="/marietv">MarieTV</a></li>
        <li><a href="/podcast">Podcast</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  </nav>
</header>
```

## Computed Styles

### Header
- position: sticky or fixed
- top: 0
- zIndex: 50
- backgroundColor: #FFFFFF
- borderBottom: 1px solid #E5E5E5
- padding: 16px 20px (mobile), 20px 40px (desktop)
- boxShadow: none initially, adds on scroll

### Container
- display: flex
- justifyContent: space-between
- alignItems: center
- maxWidth: 1440px
- margin: 0 auto

### Logo
- fontFamily: 'Playfair Display', serif
- fontSize: 18px (mobile), 24px (desktop)
- fontWeight: 400
- letterSpacing: 2px
- color: #000000
- textDecoration: none

### Hamburger Button (mobile only)
- display: block (mobile), none (desktop)
- width: 24px
- height: 24px
- backgroundColor: transparent
- border: none
- cursor: pointer
- color: #000000
- fontSize: 24px

### Nav Menu
- display: none (mobile), flex (desktop)
- flexDirection: row
- gap: 32px
- listStyleType: none
- margin: 0
- padding: 0

### Nav Link
- color: #1A1A1A
- fontSize: 14px
- fontWeight: 400
- textDecoration: none
- transition: color 0.3s
- padding: 8px 0

### Nav Link Hover
- color: #E8B4A8 (coral)

### Mobile Menu (active state)
- display: flex
- flexDirection: column
- position: absolute or fixed
- top: 100%
- left: 0
- right: 0
- backgroundColor: #FFFFFF
- padding: 20px
- gap: 16px
- boxShadow: 0 4px 12px rgba(0, 0, 0, 0.1)

## Text Content
- Logo: "MARIE FORLEO"
- Links: Blog, Shop, Programs, MarieTV, Podcast, About, More

## Interaction
- Hamburger click: Toggle mobile menu visibility (animated slide-down)
- Link click: Navigate to page
- Mobile menu items: Stack vertically with full width

## Responsive
- **Mobile:** Hamburger menu visible, nav items hidden
- **Desktop:** Hamburger hidden, nav items visible horizontally
