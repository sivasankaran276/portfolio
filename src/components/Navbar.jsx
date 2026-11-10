import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  // Close mobile navigation on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Close drawer and navigate smoothly to section
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Identity */}
        <div className="navbar-brand-group">
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="navbar-brand-name"
            aria-label="Sorna A — Back to top of page"
          >
            Sorna A
          </a>
          <span className="navbar-brand-tag" aria-hidden="true">
            / PTU ’27
          </span>
        </div>

        {/* Desktop Navigation (>= 768px) */}
        <nav className="navbar-desktop-nav" aria-label="Desktop Primary Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}

          <a
            href="/Sorna_Resume.pdf"
            download="Sorna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline navbar-resume-btn"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger / Close Button (< 768px) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="navbar-toggle-btn"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay (< 768px) */}
      <div
        className={`navbar-mobile-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer (< 768px) */}
      <nav
        id="mobile-navigation-menu"
        className={`navbar-mobile-drawer ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile Primary Navigation"
        aria-hidden={!isOpen}
      >
        <ul className="navbar-mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="navbar-mobile-link"
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '12px', color: 'var(--color-accent)' }} aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Resume CTA */}
        <div className="navbar-mobile-actions">
          <a
            href="/Sorna_Resume.pdf"
            download="Sorna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="btn btn-primary navbar-mobile-resume-btn"
          >
            <span>Download Resume</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
