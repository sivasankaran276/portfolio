import { skillCategories } from '../data/portfolio'
import { Cpu, Sliders, Layers, Workflow, Code2 } from 'lucide-react'
import './Skills.css'

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={20} aria-hidden="true" />
      case 'Sliders':
        return <Sliders size={20} aria-hidden="true" />
      case 'Layers':
        return <Layers size={20} aria-hidden="true" />
      case 'Workflow':
        return <Workflow size={20} aria-hidden="true" />
      case 'Code2':
        return <Code2 size={20} aria-hidden="true" />
      default:
        return <Cpu size={20} aria-hidden="true" />
    }
  }

  const getGridClass = (id) => {
    switch (id) {
      case 'electronics':
        return 'skills-card-electronics'
      case 'instrumentation':
        return 'skills-card-instrumentation'
      case 'embedded':
        return 'skills-card-embedded'
      case 'automation':
        return 'skills-card-automation'
      case 'software':
        return 'skills-card-software'
      default:
        return ''
    }
  }

  return (
    <section className="section skills-section" id="skills" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            Technical Capabilities · Core Competencies
          </span>
          <h2 className="section-title">
            Technical Skills &amp; Domain Expertise
          </h2>
          <p className="section-description">
            Comprehensive foundation in electronics circuit analysis, process instrumentation and
            control, microcontroller hardware, industrial PLC automation, and engineering simulation tools.
          </p>
        </div>

        {/* 5-Card Balanced Editorial Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.id} className={`skill-card ${getGridClass(category.id)}`}>
              {/* Card Header: Icon & Category Number */}
              <div className="skill-card-header">
                <div className="skill-icon-box">
                  {getCategoryIcon(category.icon)}
                </div>
                <span className="skill-card-number">{category.number}</span>
              </div>

              {/* Title & Description */}
              <h3 className="skill-card-title">{category.title}</h3>
              <p className="skill-card-desc">{category.description}</p>

              {/* Subcategories with Compact Technical Tags */}
              <div className="skill-subcategories">
                {category.subcategories.map((sub, idx) => (
                  <div key={idx} className="skill-subcategory">
                    <span className="skill-subcategory-name">{sub.name}</span>
                    <div className="skill-tags-wrap" aria-label={`${sub.name} skills`}>
                      {sub.skills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
