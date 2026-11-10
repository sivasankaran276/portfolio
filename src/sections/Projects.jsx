import { projects } from '../data/portfolio'
import {
  TremorIllustration,
  EnvironmentalIllustration,
  PumpIllustration,
  SlamIllustration,
} from '../components/ProjectIllustrations'
import { Activity, Radio, Cpu, Compass, CheckCircle2 } from 'lucide-react'
import './Projects.css'

export default function Projects() {
  const getIllustration = (type) => {
    switch (type) {
      case 'biomechanical':
        return <TremorIllustration />
      case 'telemetry':
        return <EnvironmentalIllustration />
      case 'digital-twin':
        return <PumpIllustration />
      case 'robotics':
        return <SlamIllustration />
      default:
        return null
    }
  }

  const getDomainIcon = (type) => {
    switch (type) {
      case 'biomechanical':
        return <Activity size={14} className="project-key-point-bullet" aria-hidden="true" />
      case 'telemetry':
        return <Radio size={14} className="project-key-point-bullet" aria-hidden="true" />
      case 'digital-twin':
        return <Cpu size={14} className="project-key-point-bullet" aria-hidden="true" />
      case 'robotics':
        return <Compass size={14} className="project-key-point-bullet" aria-hidden="true" />
      default:
        return <CheckCircle2 size={14} className="project-key-point-bullet" aria-hidden="true" />
    }
  }

  return (
    <section className="section projects-section" id="projects" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            Engineering Portfolio · Selected Works
          </span>
          <h2 className="section-title">
            Precision Instrumentation &amp; Systems
          </h2>
          <p className="section-description">
            A curated portfolio of academic engineering projects spanning biomedical inertial sensing,
            multi-parameter IoT telemetry, digital-twin industrial health diagnostics, and vision-guided
            spatial robotics.
          </p>
        </div>

        {/* 2-Column Responsive Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Meta Row: Project Number, Category, Status */}
              <div className="project-card-meta">
                <div className="project-card-meta-left">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-status-badge">
                  <span className="project-status-dot" aria-hidden="true" />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="project-card-title">{project.title}</h3>

              {/* Architectural Technical Schematic Illustration */}
              <div className="project-visual-box" aria-hidden="true">
                {getIllustration(project.technicalType)}
              </div>

              {/* Description */}
              <p className="project-card-desc">{project.description}</p>

              {/* Engineering Scope Points */}
              <ul className="project-key-points">
                {project.keyPoints.map((point, index) => (
                  <li key={index} className="project-key-point-item">
                    {getDomainIcon(project.technicalType)}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="project-tags-list" aria-label="Project technologies">
                {project.technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`project-tag ${index === 0 ? 'project-tag-accent' : ''}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
