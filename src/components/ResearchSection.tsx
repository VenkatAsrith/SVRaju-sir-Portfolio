import React, { useState } from 'react';
import { RESEARCH_THEMES } from '../data/academicData';
import { Cpu, Eye, Search, Layers, Server, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState(RESEARCH_THEMES[0].id);

  const selectedTheme = RESEARCH_THEMES.find(t => t.id === selectedThemeId) || RESEARCH_THEMES[0];

  const getThemeIcon = (id: string) => {
    switch (id) {
      case 'biometrics': return <Eye size={18} />;
      case 'ai-ml': return <Cpu size={18} />;
      case 'information-retrieval': return <Search size={18} />;
      case 'obe-governance': return <Layers size={18} />;
      case 'cloud-iot': return <Server size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section id="research" className="editorial-section section-alt" aria-label="Research and Innovation Themes">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">05</span>
            <span>Research &amp; Innovation</span>
          </div>
          <h2 className="section-title">
            Scholarly Themes, Grants &amp; Algorithmic Breakthroughs
          </h2>
          <p className="section-subtitle">
            Exploring multi-disciplinary computational research spanning parallel data retrieval,
            biometric template encryption, and outcome attainment engines.
          </p>
        </div>

        {/* Sponsored Projects & Supervision Metric Banner */}
        <div className="research-grant-banner">
          <div className="grant-card">
            <div className="grant-num">02</div>
            <div>
              <div className="grant-title">AICTE-Sponsored Research Projects</div>
              <div className="grant-desc">Principal Investigator / Co-Investigator in advanced computational engineering</div>
            </div>
          </div>

          <div className="grant-divider" aria-hidden="true" />

          <div className="grant-card">
            <div className="grant-num">01</div>
            <div>
              <div className="grant-title">TEQIP-Funded Institutional Grant</div>
              <div className="grant-desc">Technical education quality improvement research initiatives</div>
            </div>
          </div>

          <div className="grant-divider" aria-hidden="true" />

          <div className="grant-card">
            <div className="grant-num">22</div>
            <div>
              <div className="grant-title">Total Doctoral Scholars Guided</div>
              <div className="grant-desc">17 Ph.D. degrees awarded + 5 doctoral scholars currently under supervision</div>
            </div>
          </div>
        </div>

        {/* Interactive Themes Layout */}
        <div className="research-layout">
          {/* Left Theme Selector Buttons */}
          <div className="theme-nav" role="tablist" aria-label="Research Themes Navigation">
            {RESEARCH_THEMES.map((theme) => (
              <button
                key={theme.id}
                role="tab"
                aria-selected={selectedThemeId === theme.id}
                aria-controls={`theme-panel-${theme.id}`}
                id={`theme-tab-${theme.id}`}
                className={`theme-tab-btn ${selectedThemeId === theme.id ? 'active' : ''}`}
                onClick={() => setSelectedThemeId(theme.id)}
              >
                <span className="theme-icon">{getThemeIcon(theme.id)}</span>
                <span className="theme-name">{theme.title}</span>
                <span className="theme-count">{theme.publicationCount} Papers</span>
              </button>
            ))}
          </div>

          {/* Right Detailed Theme Display */}
          <div
            id={`theme-panel-${selectedTheme.id}`}
            role="tabpanel"
            aria-labelledby={`theme-tab-${selectedTheme.id}`}
            className="theme-detail-panel"
          >
            <div className="panel-badge-row">
              <span className="badge">Research Cluster</span>
              <span className="badge badge-verified">
                <CheckCircle2 size={12} aria-hidden="true" />
                Active Peer-Reviewed Domain
              </span>
            </div>

            <h3 className="panel-theme-title">{selectedTheme.title}</h3>
            <p className="panel-theme-desc">{selectedTheme.description}</p>

            <div className="panel-section">
              <h4 className="panel-subheading">Core Technologies &amp; Methodologies</h4>
              <div className="tech-pills">
                {selectedTheme.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <h4 className="panel-subheading">Scholarly Impact &amp; Intellectual Property</h4>
              <div className="impact-box">
                <p className="impact-text">{selectedTheme.impactSummary}</p>
              </div>
            </div>

            <div className="panel-footer">
              <a href="#publications" className="btn btn-secondary">
                <span>View Publications in {selectedTheme.title}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="#patents" className="btn btn-text">
                <span>Explore Associated Patents</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .research-grant-banner {
          display: grid;
          grid-template-columns: 1fr;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          margin-bottom: var(--space-2xl);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .research-grant-banner {
            grid-template-columns: 1fr auto 1fr auto 1.15fr;
            align-items: center;
          }
          .grant-divider {
            width: 1px;
            height: 50px;
            background-color: var(--color-border);
          }
        }

        .grant-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .grant-num {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--color-violet);
          line-height: 1;
        }

        .grant-title {
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .grant-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .research-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
        }

        @media (min-width: 900px) {
          .research-layout {
            grid-template-columns: 0.85fr 1.15fr;
          }
        }

        .theme-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .theme-tab-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          gap: 0.75rem;
        }

        .theme-tab-btn:hover {
          background-color: var(--color-lavender-tint);
          border-color: var(--color-border-hover);
        }

        .theme-tab-btn.active {
          background-color: var(--color-lavender-soft);
          border-color: var(--color-violet);
          box-shadow: var(--shadow-sm);
        }

        .theme-icon {
          color: var(--color-violet);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .theme-name {
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--color-text);
          flex-grow: 1;
        }

        .theme-count {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          background-color: #FFFFFF;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border-subtle);
          white-space: nowrap;
        }

        .theme-detail-panel {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          box-shadow: var(--shadow-sm);
        }

        .panel-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .panel-theme-title {
          font-family: var(--font-display);
          font-size: clamp(1.65rem, 2.5vw, 2.2rem);
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .panel-theme-desc {
          font-size: 0.975rem;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .panel-section {
          margin-bottom: 1.5rem;
        }

        .panel-subheading {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .tech-pill {
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border);
        }

        .impact-box {
          background-color: var(--color-lavender-tint);
          border-left: 3px solid var(--color-violet);
          padding: 1rem 1.25rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        .impact-text {
          font-size: 0.9rem;
          color: var(--color-text);
          margin-bottom: 0;
          line-height: 1.55;
        }

        .panel-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border-subtle);
        }
      `}</style>
    </section>
  );
};
