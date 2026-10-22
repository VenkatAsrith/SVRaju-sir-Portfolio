import React from 'react';
import { EDUCATIONAL_RESOURCES } from '../data/academicData';
import { BookOpen, FileText, Video, ExternalLink, BarChart3, ShieldCheck } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Book': return <BookOpen size={20} />;
      case 'Research Monograph': return <FileText size={20} />;
      case 'Video Lecture': return <Video size={20} />;
      case 'Accreditation Framework': return <BarChart3 size={20} />;
      default: return <FileText size={20} />;
    }
  };

  return (
    <section id="resources" className="editorial-section section-alt" aria-label="Selected Educational Resources">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">11</span>
            <span>Educational Materials</span>
          </div>
          <h2 className="section-title">
            Curated Academic &amp; OBE Resources
          </h2>
          <p className="section-subtitle">
            Open-access educational materials, video lectures, and accreditation guides
            pioneered by Dr. Raju for engineering educators and institutional planners.
          </p>
        </div>

        <div className="resources-grid">
          {EDUCATIONAL_RESOURCES.map((res) => (
            <article key={res.id} className="resource-card">
              <div className="res-card-top">
                <div className="res-icon-wrap">
                  {getResourceIcon(res.type)}
                </div>
                <span className="badge badge-verified">
                  <ShieldCheck size={12} aria-hidden="true" />
                  Verified Link
                </span>
              </div>

              <div className="res-format-pill">{res.format} · {res.year}</div>
              <h3 className="res-title">{res.title}</h3>
              <div className="res-publisher">{res.publisher}</div>

              <p className="res-desc">{res.description}</p>

              <div className="res-card-footer">
                <a
                  href={res.accessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-res-link"
                >
                  <span>Access Resource Online</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .resources-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2.5vw, 1.85rem);
        }

        @media (min-width: 680px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .resource-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem 1.85rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .resource-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-md);
        }

        .res-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.15rem;
        }

        .res-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .res-format-pill {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-violet);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .res-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }

        .res-publisher {
          font-size: 0.825rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .res-desc {
          font-size: 0.885rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .res-card-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .btn-res-link {
          width: 100%;
          font-size: 0.825rem;
          padding: 0.65rem 1rem;
        }
      `}</style>
    </section>
  );
};
