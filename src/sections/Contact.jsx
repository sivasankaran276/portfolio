import { useState } from 'react'
import { contactInfo } from '../data/portfolio'
import { Mail, MapPin, GraduationCap, Copy, Check, ArrowUpRight } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false)
    }
  }

  return (
    <section
      className="section contact-section"
      id="contact"
      style={{ scrollMarginTop: 'var(--header-height)' }}
    >
      <div className="container">
        <article className="contact-card">
          {/* Header Block */}
          <div className="contact-header">
            <span className="contact-eyebrow">
              Initiate Collaboration · Get in Touch
            </span>
            <h2 className="contact-title">Let&apos;s Connect</h2>
            <p className="contact-description">
              Open to engaging with recruiters, engineers, and research collaborators to discuss
              opportunities, internships, and technical initiatives in instrumentation, embedded
              systems, and industrial automation.
            </p>
          </div>

          {/* Central Email Focal Box */}
          <div className="contact-email-box">
            <div className="contact-email-label">
              <Mail size={14} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              <span>Direct Electronic Mail</span>
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-email-link"
              title={`Send an email to ${contactInfo.email}`}
            >
              {contactInfo.email}
            </a>

            {/* Direct Action Buttons (No fake contact forms) */}
            <div className="contact-actions">
              <a
                href={`mailto:${contactInfo.email}`}
                className="btn btn-primary"
              >
                <span>Send Email</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="contact-copy-btn"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    <span>Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden="true" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              {/* 
                TODO: Add Sorna's verified LinkedIn profile link once available:
                {contactInfo.linkedin && (
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    LinkedIn
                  </a>
                )}
              */}

              {/* 
                TODO: Add Sorna's verified GitHub profile link once available:
                {contactInfo.github && (
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    GitHub
                  </a>
                )}
              */}
            </div>
          </div>

          {/* Metadata Footer: Location & University */}
          <div className="contact-footer-meta">
            <div className="contact-meta-group">
              <div className="contact-meta-item">
                <MapPin size={14} aria-hidden="true" />
                <span>{contactInfo.location}</span>
              </div>
              <div className="contact-meta-item">
                <GraduationCap size={14} aria-hidden="true" />
                <span>{contactInfo.institution}</span>
              </div>
            </div>

            <span className="contact-status-note">
              Response typical within 24–48 hours
            </span>
          </div>
        </article>
      </div>
    </section>
  )
}
