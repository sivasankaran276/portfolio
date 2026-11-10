import { ArrowDown, Download, GraduationCap, MapPin, Cpu } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const target = document.getElementById('projects')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback update to hash if section element is not yet in DOM
      window.location.hash = '#projects'
    }
  }

  return (
    <section className="hero-section" id="hero" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <span id="about" style={{ position: 'absolute', top: 0, scrollMarginTop: 'var(--header-height)' }} aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Information & Actions */}
          <div className="hero-content">
            {/* Eyebrow & Hero Title */}
            <div className="hero-header-group">
              <span className="hero-eyebrow">
                Electronics &amp; Instrumentation Engineer
              </span>
              <h1 className="hero-title">
                Engineering ideas into <em>meaningful</em> solutions.
              </h1>
            </div>

            {/* Editorial Introduction */}
            <p className="hero-intro">
              Electronics and Instrumentation Engineering student at Puducherry Technological
              University with a balanced focus on precision instrumentation, embedded systems,
              industrial automation, and engineering research.
            </p>

            {/* University & Location Metadata */}
            <div className="hero-meta-list" aria-label="Academic affiliation and location">
              <div className="hero-meta-item">
                <GraduationCap size={15} aria-hidden="true" />
                <span>Puducherry Technological University</span>
              </div>
              <span className="hero-meta-divider" aria-hidden="true" />
              <div className="hero-meta-item">
                <MapPin size={15} aria-hidden="true" />
                <span>Puducherry, India</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="hero-actions">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn btn-primary hero-btn-primary"
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>

              <a
                href="/Sorna_Resume.pdf"
                download="Sorna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-btn-secondary"
              >
                <Download size={16} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Refined Portrait Frame with Sage Accent */}
          <div className="hero-visual-wrapper">
            {/* Sage-green decorative offset background panel */}
            <div className="hero-decorative-backdrop" aria-hidden="true" />

            {/* Portrait Card Frame */}
            <div className="hero-portrait-frame">
              <img
                src="/sorna-portrait.jpg"
                alt="Sorna A – Electronics and Instrumentation Engineering"
                className="hero-portrait-img"
                loading="eager"
              />

              {/* Floating Technical Annotation Badge */}
              <div className="hero-floating-badge">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <Cpu size={16} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                  <div>
                    <div className="hero-floating-badge-text">B.Tech · EIE</div>
                    <div className="hero-floating-badge-sub">Puducherry Technological Univ.</div>
                  </div>
                </div>
                <span className="tag tag-accent" style={{ fontSize: '10px', padding: '0.2rem 0.5rem' }}>
                  2023–2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
