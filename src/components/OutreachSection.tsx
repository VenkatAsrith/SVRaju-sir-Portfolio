import React from 'react';
import { Globe, Mic, MapPin, Building, Sparkles } from 'lucide-react';

export const OutreachSection: React.FC = () => {
  return (
    <section id="outreach" className="editorial-section" aria-label="Academic Outreach and International Engagements">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">10</span>
            <span>Outreach &amp; Global Exchange</span>
          </div>
          <h2 className="section-title">
            Academic Outreach &amp; International Engagements
          </h2>
          <p className="section-subtitle">
            Sharing scholarly perspectives across 700+ national keynote forums and representing
            Indian engineering education in global academic delegations.
          </p>
        </div>

        {/* Global Engagement Highlight Card */}
        <div className="international-banner">
          <div className="international-badge-group">
            <span className="badge badge-national">
              <Globe size={13} aria-hidden="true" />
              International Delegations
            </span>
            <span className="badge">Knowledge Exchange</span>
          </div>

          <h3 className="international-heading">
            Academic Engagements in Singapore &amp; Taiwan
          </h3>
          <p className="international-text">
            Represented Indian higher education through specialized academic engagements in <strong>Singapore</strong> and <strong>Taiwan</strong>,
            participating in cross-border knowledge exchange, university collaborations, and curriculum benchmarking.
            These international interactions reinforced the integration of Industry 5.0, AI-enabled learning,
            and global best practices into contemporary Indian university curricula.
          </p>

          <div className="international-locations">
            <div className="loc-card">
              <MapPin size={16} className="loc-icon" aria-hidden="true" />
              <div>
                <div className="loc-city">Singapore</div>
                <div className="loc-desc">Institutional collaboration, curriculum innovation &amp; quality frameworks</div>
              </div>
            </div>
            <div className="loc-card">
              <MapPin size={16} className="loc-icon" aria-hidden="true" />
              <div>
                <div className="loc-city">Taiwan</div>
                <div className="loc-desc">Technology-enabled pedagogy, semiconductor curriculum exposure &amp; research exchange</div>
              </div>
            </div>
          </div>
        </div>

        {/* National Keynotes & Workshops Grid */}
        <div className="outreach-grid">
          <div className="outreach-stat-card">
            <div className="stat-num">700+</div>
            <h4 className="stat-title">Invited Keynotes &amp; FDP Sessions</h4>
            <p className="stat-desc">
              Delivered addresses across central universities, NITs, IITs, state colleges,
              and professional societies throughout India.
            </p>
          </div>

          <div className="outreach-topic-card">
            <h4 className="topic-title">National Education Policy (NEP 2020)</h4>
            <p className="topic-desc">
              Keynote addresses orienting university leadership toward multi-disciplinary degree structures,
              academic banks of credits, and flexible exit-entry options.
            </p>
          </div>

          <div className="outreach-topic-card">
            <h4 className="topic-title">World Summit on Accreditation (WOSA)</h4>
            <p className="topic-desc">
              Active participant and session contributor to NBA WOSA summits, standardizing
              Washington Accord measurement methodologies for Indian engineering.
            </p>
          </div>

          <div className="outreach-topic-card">
            <h4 className="topic-title">NITTTR &amp; ATAL Masterclasses</h4>
            <p className="topic-desc">
              Resource person for National Institutes of Technical Teachers Training and Research (NITTTR)
              conducting Faculty Development Programmes in AI and curriculum design.
            </p>
          </div>

          <div className="outreach-topic-card">
            <h4 className="topic-title">Industry–Academia Linkages</h4>
            <p className="topic-desc">
              Strategic curriculum collaboration with corporate technology leaders including <strong>TCS</strong> and <strong>Infosys</strong> to
              accelerate graduate industry readiness.
            </p>
          </div>

          <div className="outreach-topic-card">
            <h4 className="topic-title">Artificial Intelligence &amp; IoT Summits</h4>
            <p className="topic-desc">
              Technical workshops on machine learning deployment, computer vision pipelines,
              and cancelable biometric security.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .international-banner {
          background: linear-gradient(135deg, #FAF8FD 0%, #FFFFFF 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          margin-bottom: var(--space-2xl);
          box-shadow: var(--shadow-sm);
        }

        .international-badge-group {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .international-heading {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.75rem;
        }

        .international-text {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 960px;
        }

        .international-locations {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 600px) {
          .international-locations {
            grid-template-columns: 1fr 1fr;
          }
        }

        .loc-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background-color: var(--color-lavender-soft);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          border: 1px solid var(--color-border);
        }

        .loc-icon {
          color: var(--color-violet);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .loc-city {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .loc-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
        }

        .outreach-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2vw, 1.75rem);
        }

        @media (min-width: 680px) {
          .outreach-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .outreach-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .outreach-stat-card {
          background-color: var(--color-dark-surface);
          color: var(--color-dark-text);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.65rem;
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--color-lavender);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-title {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-dark-text);
          margin-bottom: 0.5rem;
        }

        .stat-desc {
          font-size: 0.85rem;
          color: var(--color-dark-text-secondary);
          line-height: 1.55;
          margin-bottom: 0;
        }

        .outreach-topic-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.65rem;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .outreach-topic-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-violet-light);
        }

        .topic-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .topic-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
};
