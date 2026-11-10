import { achievements } from '../data/portfolio'
import { Award, Trophy, Presentation } from 'lucide-react'
import './Achievements.css'

export default function Achievements() {
  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Presentation':
        return <Presentation size={18} aria-hidden="true" />
      case 'Trophy':
        return <Trophy size={18} aria-hidden="true" />
      case 'Award':
      default:
        return <Award size={18} aria-hidden="true" />
    }
  }

  return (
    <section
      className="section achievements-section"
      id="achievements"
      style={{ scrollMarginTop: 'var(--header-height)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            Academic Honors &amp; Merit
          </span>
          <h2 className="section-title">
            Recognition &amp; Achievements
          </h2>
          <p className="section-description">
            Awards earned across technical engineering project presentations, academic knowledge
            competitions, and athletics at Puducherry Technological University.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="achievements-grid">
          {achievements.map((item) => (
            <article key={item.id} className="achievement-card">
              {/* Top Row: Large Ordinal Number, Prize Badge & Icon */}
              <div className="achievement-card-top">
                <div className="achievement-ordinal-wrap">
                  <span className="achievement-number">{item.number}</span>
                  <span className="achievement-prize-tag">{item.ordinal}</span>
                </div>
                <div className="achievement-icon-box">
                  {getAchievementIcon(item.icon)}
                </div>
              </div>

              {/* Context Tag */}
              <span className="achievement-context-tag">{item.context}</span>

              {/* Title & Description */}
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>

              {/* Footer: Department & Institution */}
              <div className="achievement-footer">
                <span className="achievement-dept">{item.department}</span>
                <span className="achievement-inst">{item.institution}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
