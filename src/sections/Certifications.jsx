import { certifications } from '../data/portfolio'
import { Award, BookOpen, Wrench, Cpu, Lightbulb, Calendar, Building2 } from 'lucide-react'
import './Certifications.css'

export default function Certifications() {
  const nptelCourses = certifications.filter((item) => item.category === 'course')
  const workshops = certifications.filter((item) => item.category === 'workshop')

  const getCredentialIcon = (id) => {
    switch (id) {
      case 'biomedical-workshop':
        return <Cpu size={16} aria-hidden="true" />
      case 'esp32-iot-workshop':
        return <Wrench size={16} aria-hidden="true" />
      case 'design-thinking-workshop':
        return <Lightbulb size={16} aria-hidden="true" />
      case 'wildlife-ecology':
      case 'forest-land-management':
      default:
        return <Award size={16} aria-hidden="true" />
    }
  }

  return (
    <section
      className="section certifications-section"
      id="certifications"
      style={{ scrollMarginTop: 'var(--header-height)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            Academic Credentials &amp; Training
          </span>
          <h2 className="section-title">
            Certifications &amp; Workshops
          </h2>
          <p className="section-description">
            Verified NPTEL online course certifications alongside specialized hands-on workshops in
            embedded IoT hardware, biomedical instrumentation, and design thinking.
          </p>
        </div>

        {/* Dual-Column Credential Layout */}
        <div className="certifications-groups-grid">
          {/* Column 1: NPTEL Online Certifications */}
          <div className="certifications-column">
            <div className="certifications-column-header">
              <h3 className="certifications-column-title">
                <BookOpen size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                <span>NPTEL Certifications</span>
              </h3>
              <span className="certifications-column-badge">2 Courses</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {nptelCourses.map((item) => (
                <article key={item.id} className="credential-card">
                  <div className="credential-card-top">
                    <div className="credential-icon-box">
                      {getCredentialIcon(item.id)}
                    </div>
                    <span className="credential-period-tag">
                      <Calendar size={11} aria-hidden="true" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <h4 className="credential-title">{item.title}</h4>

                  <div className="credential-provider-wrap">
                    <Building2 size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} aria-hidden="true" />
                    <span className="credential-provider">{item.provider}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Column 2: Technical Hands-on Workshops */}
          <div className="certifications-column">
            <div className="certifications-column-header">
              <h3 className="certifications-column-title">
                <Wrench size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                <span>Technical Workshops</span>
              </h3>
              <span className="certifications-column-badge">3 Workshops</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {workshops.map((item) => (
                <article key={item.id} className="credential-card">
                  <div className="credential-card-top">
                    <div className="credential-icon-box">
                      {getCredentialIcon(item.id)}
                    </div>
                    <span className="credential-period-tag">
                      <Calendar size={11} aria-hidden="true" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <h4 className="credential-title">{item.title}</h4>

                  <div className="credential-provider-wrap">
                    <Building2 size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} aria-hidden="true" />
                    <span className="credential-provider">{item.provider}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
