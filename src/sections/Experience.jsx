import { experiences } from '../data/portfolio'
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience-section" id="experience" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            Academic &amp; Industrial Training
          </span>
          <h2 className="section-title">
            Internships &amp; Research Experience
          </h2>
          <p className="section-description">
            Practical engineering training spanning robotics research at NITTTR Chennai,
            heavy industrial instrumentation and thermal power operations at NLC India Limited,
            and industrial automation control systems at Cornerstone Engineering Solutions.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="experience-timeline">
          {experiences.map((item) => (
            <div key={item.id} className="experience-item">
              {/* Left Column: Period, Location & Type */}
              <div className="experience-meta">
                <span className="experience-period">
                  <Calendar size={12} aria-hidden="true" />
                  <span>{item.period}</span>
                </span>
                <span className="experience-location">
                  <MapPin size={11} aria-hidden="true" />
                  <span>{item.location}</span>
                </span>
                <span className="experience-type-pill">{item.type}</span>
              </div>

              {/* Timeline Connector Node */}
              <div className="experience-node-wrapper" aria-hidden="true">
                <div className="experience-node" />
              </div>

              {/* Right Column: Experience Card */}
              <article className="experience-card">
                <div className="experience-header">
                  <div className="experience-role-row">
                    <h3 className="experience-role">{item.role}</h3>
                  </div>
                  <div className="experience-company">
                    <Building2 size={15} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    <span>{item.organization}</span>
                  </div>
                  {item.department && (
                    <div className="experience-department">{item.department}</div>
                  )}
                </div>

                <p className="experience-desc">{item.description}</p>

                {/* Key Responsibilities */}
                <ul className="experience-responsibilities">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="experience-responsibility-item">
                      <CheckCircle2 size={13} className="experience-bullet" aria-hidden="true" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Focus Areas & Technologies */}
                <div className="experience-skills-list" aria-label="Key skills and domains">
                  {item.skills.map((skill) => (
                    <span key={skill} className="experience-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
