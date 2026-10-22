import React from 'react';
import { LEADERSHIP_ROLES } from '../data/academicData';
import { Landmark, Calendar, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="editorial-section section-alt" aria-label="Institutional Leadership and Academic Governance">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">09</span>
            <span>Institutional Stewardship</span>
          </div>
          <h2 className="section-title">
            Executive Leadership &amp; University Governance
          </h2>
          <p className="section-subtitle">
            Demonstrated institutional stewardship across university constituent colleges,
            quality assurance cells, national accreditation boards, and collegiate governing councils.
          </p>
        </div>

        <div className="leadership-grid">
          {LEADERSHIP_ROLES.map((role) => (
            <article key={role.id} className="leadership-card">
              <div className="leadership-card-header">
                <div className="role-period">
                  <Calendar size={12} aria-hidden="true" />
                  <span>{role.period}</span>
                </div>
                <span className="badge">
                  <Building2 size={11} aria-hidden="true" />
                  Statutory Role
                </span>
              </div>

              <h3 className="leadership-title">{role.title}</h3>
              <div className="leadership-org">{role.organization}</div>

              <p className="leadership-scope">{role.scope}</p>

              <div className="leadership-achievements">
                <div className="achievements-heading">Impact Highlights:</div>
                <ul className="achievements-list">
                  {role.achievements.map((ach, i) => (
                    <li key={i}>
                      <ChevronRight size={13} className="bullet-icon" aria-hidden="true" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2.5vw, 1.85rem);
        }

        @media (min-width: 680px) {
          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1080px) {
          .leadership-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .leadership-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.65rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .leadership-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-md);
        }

        .leadership-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .role-period {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-violet);
          background-color: var(--color-lavender-soft);
          padding: 3px 9px;
          border-radius: var(--radius-pill);
        }

        .leadership-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.25;
          margin-bottom: 0.35rem;
        }

        .leadership-org {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .leadership-scope {
          font-size: 0.885rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .leadership-achievements {
          background-color: var(--color-lavender-tint);
          border-radius: var(--radius-md);
          padding: 1rem 1.15rem;
          font-size: 0.8rem;
        }

        .achievements-heading {
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-violet);
          margin-bottom: 0.5rem;
        }

        .achievements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .achievements-list li {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          color: var(--color-text-secondary);
          line-height: 1.45;
        }

        .bullet-icon {
          color: var(--color-violet);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
};
