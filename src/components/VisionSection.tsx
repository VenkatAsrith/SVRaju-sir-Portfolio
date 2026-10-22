import React from 'react';
import { ACADEMIC_VISION } from '../data/academicData';
import { Compass, Lightbulb, Shield, Cpu } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass size={22} />;
      case 1: return <Cpu size={22} />;
      case 2: return <Lightbulb size={22} />;
      case 3: return <Shield size={22} />;
      default: return <Compass size={22} />;
    }
  };

  return (
    <section id="vision" className="editorial-section section-dark" aria-label="Academic Philosophy and Educational Vision">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label" style={{ color: 'var(--color-lavender)' }}>
            <span className="section-number" style={{ color: 'var(--color-dark-text-secondary)' }}>12</span>
            <span>Academic Philosophy</span>
          </div>
          <h2 className="section-title" style={{ color: 'var(--color-dark-text)' }}>
            {ACADEMIC_VISION.headline}
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--color-dark-text-secondary)' }}>
            Principles shaping the future of technical higher education: learner-centric curricula,
            Industry 5.0 harmony, and ethical technological leadership.
          </p>
        </div>

        {/* Prominent Editorial Quote */}
        <div className="vision-quote-card">
          <blockquote className="vision-quote-text">
            "{ACADEMIC_VISION.quote}"
          </blockquote>
          <div className="vision-quote-footer">
            <div className="quote-author-name">Dr. S. Viswanadha Raju</div>
            <div className="quote-author-title">Senior Professor of CSE &amp; Principal, JNTUH UCE Sultanpur</div>
          </div>
        </div>

        {/* Four Vision Pillars */}
        <div className="vision-pillars-grid">
          {ACADEMIC_VISION.pillars.map((pillar, i) => (
            <div key={i} className="vision-pillar-card">
              <div className="pillar-icon-wrap" aria-hidden="true">
                {getPillarIcon(i)}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vision-quote-card {
          background-color: var(--color-dark-surface-elevated);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid var(--color-lavender);
          border-radius: var(--radius-lg);
          padding: clamp(2rem, 4vw, 3.25rem);
          margin-bottom: var(--space-3xl);
        }

        .vision-quote-text {
          font-family: var(--font-display);
          font-size: clamp(1.35rem, 2.3vw, 1.95rem);
          font-style: italic;
          color: var(--color-dark-text);
          line-height: 1.45;
          margin-bottom: 1.5rem;
        }

        .vision-quote-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 1rem;
        }

        .quote-author-name {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-lavender);
          letter-spacing: 0.02em;
        }

        .quote-author-title {
          font-size: 0.8rem;
          color: var(--color-dark-text-secondary);
        }

        .vision-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2vw, 1.75rem);
        }

        @media (min-width: 680px) {
          .vision-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .vision-pillars-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .vision-pillar-card {
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.65rem;
          transition: transform var(--transition-normal), background-color var(--transition-normal);
        }

        .vision-pillar-card:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.07);
        }

        .pillar-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: rgba(200, 184, 238, 0.15);
          color: var(--color-lavender);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .pillar-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-dark-text);
          line-height: 1.25;
          margin-bottom: 0.65rem;
        }

        .pillar-desc {
          font-size: 0.865rem;
          color: var(--color-dark-text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
};
