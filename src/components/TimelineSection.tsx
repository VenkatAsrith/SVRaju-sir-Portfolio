import React, { useState, useEffect, useRef } from 'react';
import { CAREER_TIMELINE } from '../data/academicData';
import { MapPin, Building, Calendar } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'leadership' | 'academic-role' | 'education'>('all');
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filteredMilestones = CAREER_TIMELINE.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  // IntersectionObserver for scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredMilestones]);

  return (
    <section id="journey" className="editorial-section section-alt" aria-label="Chronological Career Journey">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">03</span>
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Chronology of Academic Growth &amp; Leadership
          </h2>
          <p className="section-subtitle">
            A three-decade trajectory traced through formal qualifications,
            professorial appointments, and university leadership roles.
          </p>

          {/* Interactive Filters Grid */}
          <div className="timeline-filters-grid" role="group" aria-label="Timeline Filters">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <span>All Milestones</span>
              <span className="filter-count">{CAREER_TIMELINE.length}</span>
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveFilter('leadership')}
            >
              <span>Institutional Leadership</span>
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'academic-role' ? 'active' : ''}`}
              onClick={() => setActiveFilter('academic-role')}
            >
              <span>Professorships &amp; HAG</span>
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
              onClick={() => setActiveFilter('education')}
            >
              <span>Qualifications &amp; Degrees</span>
            </button>
          </div>
        </div>

        {/* Timeline Track with Left & Right Alternating Scroll Triggers */}
        <div className="timeline-container">
          <div className="timeline-spine-track">
            <div className="timeline-spine-active-fill" />
          </div>

          <div className="timeline-list">
            {filteredMilestones.map((item, index) => {
              const isVisible = visibleItems.has(item.id);
              const isEven = index % 2 === 0;

              return (
                <article
                  key={item.id}
                  data-id={item.id}
                  ref={(el) => {
                    if (el) itemRefs.current.set(item.id, el);
                    else itemRefs.current.delete(item.id);
                  }}
                  className={`timeline-item ${isEven ? 'enter-left' : 'enter-right'} ${isVisible ? 'is-visible' : ''}`}
                >
                  {/* Marker Node */}
                  <div className={`timeline-marker ${isVisible ? 'marker-active' : ''}`}>
                    <div className="marker-dot">
                      <div className="marker-core" />
                    </div>
                  </div>

                  {/* Clean Editorial Timeline Card */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div className="period-badge">
                        <Calendar size={12} aria-hidden="true" />
                        <span>{item.period || item.year}</span>
                      </div>
                      <span className="timeline-type-label">
                        {item.role || item.type}
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
                        <div className="highlights-label">Key Highlights</div>
                        <ul>
                          {item.highlights.map((hl, i) => (
                            <li key={i}>{hl}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-filters-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
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
          display: inline-flex;
          align-items: center;
          gap: 6px;
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

        .filter-count {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 1px 6px;
          border-radius: 10px;
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

        .timeline-spine-track {
          position: absolute;
          top: 15px;
          bottom: 20px;
          left: 11px;
          width: 2px;
          background: var(--color-border);
        }

        @media (min-width: 768px) {
          .timeline-spine-track {
            left: 17px;
          }
        }

        .timeline-spine-active-fill {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, var(--color-violet) 0%, var(--color-lavender) 85%, transparent 100%);
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Alternating Scroll Triggers: Left and Right Loading */
        .timeline-item {
          position: relative;
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-item.enter-left {
          opacity: 0;
          transform: translateX(-32px);
        }

        .timeline-item.enter-right {
          opacity: 0;
          transform: translateX(32px);
        }

        .timeline-item.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* Marker Node */
        .timeline-marker {
          position: absolute;
          top: 20px;
          left: -2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 2;
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
          border: 2px solid var(--color-border-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .marker-core {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: transparent;
          transition: background 0.3s ease;
        }

        .marker-active .marker-dot {
          border-color: var(--color-violet);
          box-shadow: 0 0 0 4px var(--color-lavender-soft);
        }

        .marker-active .marker-core {
          background: var(--color-violet);
        }

        /* Timeline Card */
        .timeline-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.85rem;
          box-shadow: var(--shadow-sm);
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal);
        }

        .timeline-card:hover {
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
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

        .timeline-type-label {
          font-size: 0.725rem;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
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
          border: 1px solid var(--color-border-subtle);
        }

        .highlights-label {
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.35rem;
          font-size: 0.75rem;
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
