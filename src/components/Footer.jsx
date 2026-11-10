import { ArrowUp, Mail, MapPin, GraduationCap } from 'lucide-react'
import { contactInfo } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Active navigation links to actual existing sections
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Left Column: Brand & Professional Identity */}
          <div className="footer-brand-col">
            <a
              href="#about"
              onClick={handleScrollToTop}
              className="footer-brand-name"
              title="Return to top"
            >
              Sorna A
            </a>

            <div className="footer-identity">
              Electronics &amp; Instrumentation Engineering
            </div>

            <p className="footer-desc">
              Dedicated to precision instrumentation, embedded telemetry, industrial automation,
              and vision-guided robotics research.
            </p>

            <div className="footer-contact-details">
              <a
                href={`mailto:${contactInfo.email}`}
                className="footer-detail-item footer-email-link"
              >
                <Mail size={13} aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>

              <div className="footer-detail-item">
                <GraduationCap size={13} aria-hidden="true" />
                <span>{contactInfo.institution}</span>
              </div>

              <div className="footer-detail-item">
                <MapPin size={13} aria-hidden="true" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Navigation & Back to Top */}
          <div className="footer-nav-col">
            <span className="footer-nav-heading">Portfolio Sections</span>

            <ul className="footer-nav-links" aria-label="Footer Navigation">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-link">
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Smooth Back to Top Action */}
            <a
              href="#about"
              onClick={handleScrollToTop}
              className="footer-back-to-top"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" aria-hidden="true" />

        {/* Bottom Bar: Copyright & Metadata */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} Sorna A. All rights reserved.
          </div>
          <div>
            B.Tech Electronics &amp; Instrumentation Engineering · Batch 2023–2027
          </div>
        </div>
      </div>
    </footer>
  )
}
