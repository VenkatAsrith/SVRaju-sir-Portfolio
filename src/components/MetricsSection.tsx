import React from 'react';
import { IMPACT_METRICS } from '../data/academicData';
import { ShieldCheck, Calendar } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  return (
    <section id="overview" className="editorial-section section-alt" aria-label="Career at a Glance Statistics">
      <div className="site-container">
        <div className="section-header center">
          <div className="section-label">
            <span className="section-number">01</span>
            <span>Career at a Glance</span>
          </div>
          <h2 className="section-title">
            Scholarly Substance in Perspective
          </h2>
          <p className="section-subtitle">
            Every metric is grounded in verifiable official institutional records,
            directorate archives, and published research registers.
          </p>
        </div>

        <div className="metrics-grid">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.id} className="metric-card">
              <div className="metric-header">
                <span className="metric-value">{metric.value}</span>
              </div>
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-sublabel">{metric.sublabel}</p>

              <div className="metric-footer">
                <div className="metric-source">
                  <ShieldCheck size={13} className="source-icon" aria-hidden="true" />
                  <span title={metric.source}>{metric.source}</span>
                </div>
                <div className="metric-date">
                  <Calendar size={12} aria-hidden="true" />
                  <span>{metric.verifiedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="metrics-provenance-box">
          <p className="provenance-note">
            <strong>Source Provenance:</strong> Figures verified from the official JNTUH University College of Engineering
            Sultanpur Principal Dossier, JNTU Hyderabad Research Directorate, Google Scholar citation metrics, and the
            Indian Patent Office Journal.
          </p>
        </div>
      </div>

      <style>{`
        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2.5vw, 1.75rem);
          margin-bottom: var(--space-2xl);
        }

        @media (min-width: 600px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .metric-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .metric-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-md);
        }

        .metric-header {
          margin-bottom: var(--space-xs);
        }

        .metric-value {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 4.5vw, 3.8rem);
          font-weight: 600;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: -0.03em;
        }

        .metric-label {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.35rem;
          line-height: 1.35;
        }

        .metric-sublabel {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: var(--space-md);
          flex-grow: 1;
        }

        .metric-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--space-sm);
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.725rem;
          color: var(--color-text-muted);
          gap: var(--space-xs);
        }

        .metric-source {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .source-icon {
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .metric-date {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }

        .metrics-provenance-box {
          background-color: var(--color-lavender-tint);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1rem 1.5rem;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .provenance-note {
          font-size: 0.825rem;
          color: var(--color-text-secondary);
          margin-bottom: 0;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
