import React, { useState } from 'react';
import { CAREER_TIMELINE } from '../data/academicData';
import { CheckCircle2, MapPin, Building, Calendar, Filter } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'leadership' | 'academic-role' | 'education'>('all');

  const filteredMilestones = CAREER_TIMELINE.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="journey" className="editorial-section section-alt" aria-label="Chronological Career Journey">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">03</span>
            <span>Career Timeline</span>
          </div>
          <h2 className="section-title">
            Chronology of Academic Growth &amp; Leadership
          </h2>
          <p className="section-subtitle">
            A three-decade institutional trajectory traced through formal academic qualifications,
            senior professorial appointments, and university principalships.
          </p>

          {/* Interactive Filters */}
          <div className="timeline-filters" role="group" aria-label="Timeline Filters">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Milestones ({CAREER_TIMELINE.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveFilter('leadership')}
            >
              Institutional Leadership
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'academic-role' ? 'active' : ''}`}
              onClick={() => setActiveFilter('academic-role')}
            >
              Professorships &amp; HAG
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
              onClick={() => setActiveFilter('education')}
            >
              Qualifications &amp; Degrees
            </button>
          </div>
        </div>

        {/* Timeline Track */}
        <div className="timeline-container">
          <div className="timeline-spine" aria-hidden="true" />

          <div className="timeline-list">
            {filteredMilestones.map((item, index) => (
              <article key={item.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot" aria-hidden="true" />
                  <span className="marker-year">{item.year}</span>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="period-badge">
                      <Calendar size={12} aria-hidden="true" />
                      <span>{item.period || item.year}</span>
                    </div>
                    <span className="badge badge-verified">
                      <CheckCircle2 size={12} aria-hidden="true" />
                      {item.verification}
                    </span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-meta">
                    <span className="meta-inst">
                      <Building size={14} aria-hidden="true" />
                      {item.institution}
                    </span>
                    <span className="meta-loc">
                      <MapPin size={13} aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="timeline-highlights">
                      <div className="highlights-label">Key Milestones:</div>
                      <ul>
                        {item.highlights.map((hl, i) => (
                          <li key={i}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.75rem;
        }

        .filter-btn {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          padding: 0.45rem 1.15rem;
          font-family: var(--font-body);
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--color-text);
          border-color: var(--color-border-hover);
        }

        .filter-btn.active {
          background-color: var(--color-text);
          color: #FFFFFF;
          border-color: var(--color-text);
        }

        .timeline-container {
          position: relative;
          padding-left: 2rem;
          margin-top: var(--space-xl);
        }

        @media (min-width: 768px) {
          .timeline-container {
            padding-left: 3.5rem;
          }
        }

        .timeline-spine {
          position: absolute;
          top: 15px;
          bottom: 20px;
          left: 11px;
          width: 2px;
          background: linear-gradient(180deg, var(--color-violet) 0%, var(--color-lavender) 85%, transparent 100%);
        }

        @media (min-width: 768px) {
          .timeline-spine {
            left: 17px;
          }
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-marker {
          position: absolute;
          top: 18px;
          left: -2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .timeline-marker {
            left: -3.5rem;
          }
        }

        .marker-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #FFFFFF;
          border: 3px solid var(--color-violet);
          box-shadow: 0 0 0 4px rgba(117, 99, 159, 0.15);
          flex-shrink: 0;
        }

        .marker-year {
          display: none;
        }

        .timeline-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.85rem;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .timeline-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-border-hover);
          box-shadow: var(--shadow-md);
        }

        .timeline-card-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .period-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-violet);
          background-color: var(--color-lavender-soft);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
        }

        .timeline-title {
          font-family: var(--font-display);
          font-size: clamp(1.35rem, 2vw, 1.65rem);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.35rem;
          line-height: 1.25;
        }

        .timeline-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 0.95rem;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .meta-inst, .meta-loc {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .timeline-desc {
          font-size: 0.925rem;
          color: var(--color-text);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .timeline-highlights {
          background-color: var(--color-lavender-tint);
          border-radius: var(--radius-md);
          padding: 0.95rem 1.25rem;
          font-size: 0.825rem;
        }

        .highlights-label {
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.35rem;
          font-size: 0.775rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .timeline-highlights ul {
          margin-left: 1.15rem;
          color: var(--color-text-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
      `}</style>
    </section>
  );
};
