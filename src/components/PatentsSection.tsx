import React, { useState, useEffect, useRef } from 'react';
import { PATENTS_DATA } from '../data/academicData';
import { FileCheck, Shield, Sparkles, Calendar, CheckCircle } from 'lucide-react';

export const PatentsSection: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Biometrics' | 'Cloud & IoT' | 'Educational Technology' | 'Data Mining'>('All');
  const [visiblePatents, setVisiblePatents] = useState<Set<string>>(new Set());
  const patentRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filteredPatents = PATENTS_DATA.filter(patent => {
    if (categoryFilter === 'All') return true;
    return patent.category === categoryFilter;
  });

  // Scroll Trigger Observer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisiblePatents(new Set(filteredPatents.map(p => p.id)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisiblePatents((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    patentRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredPatents]);

  return (
    <section id="patents" className="editorial-section" aria-label="Patents and Intellectual Property">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">06</span>
            <span>Intellectual Property</span>
          </div>
          <h2 className="section-title">
            Patents &amp; Applied Innovations
          </h2>
          <p className="section-subtitle">
            Nine published and granted patents addressing mission-critical challenges in
            biometric surveillance, institutional audit digitization, and distributed analytics.
          </p>

          <div className="patents-filters" role="group" aria-label="Patent Category Filters">
            {(['All', 'Biometrics', 'Cloud & IoT', 'Educational Technology', 'Data Mining'] as const).map(cat => (
              <button
                key={cat}
                type="button"
                className={`patent-filter-btn ${categoryFilter === cat ? 'active' : ''}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat === 'All' ? 'All Patents (9)' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="patents-grid">
          {filteredPatents.map((patent, idx) => {
            const isLeft = idx % 2 === 0;
            const isVisible = visiblePatents.has(patent.id);
            const directionClass = isLeft ? 'enter-left' : 'enter-right';

            return (
              <article
                key={patent.id}
                data-id={patent.id}
                ref={(el) => {
                  if (el) patentRefs.current.set(patent.id, el);
                  else patentRefs.current.delete(patent.id);
                }}
                className={`patent-card ${directionClass} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="patent-card-top">
                  <span className="badge">
                    {patent.status} · {patent.patentOffice}
                  </span>
                  <span className="patent-year">
                    <Calendar size={12} aria-hidden="true" />
                    {patent.year}
                  </span>
                </div>

                <h3 className="patent-title">{patent.title}</h3>

                {patent.applicationNumber && (
                  <div className="patent-reg-number">
                    <span className="reg-label">App / Reg:</span>
                    <code>{patent.applicationNumber}</code>
                  </div>
                )}

                <p className="patent-summary">{patent.summary}</p>

                <div className="patent-footer">
                  <div className="patent-inventors">
                    <span className="inventors-label">Inventors:</span>
                    <span>{patent.inventors.join(', ')}</span>
                  </div>
                  <span className="patent-cat-badge">{patent.category}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .patents-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .patent-filter-btn {
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

        .patent-filter-btn:hover {
          color: var(--color-text);
          border-color: var(--color-border-hover);
        }

        .patent-filter-btn.active {
          background-color: var(--color-text);
          color: #FFFFFF;
          border-color: var(--color-text);
        }

        .patents-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2.5vw, 1.85rem);
        }

        @media (min-width: 680px) {
          .patents-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1080px) {
          .patents-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .patent-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.65rem;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow var(--transition-normal),
                      border-color var(--transition-normal);
          will-change: opacity, transform;
        }

        .patent-card.enter-left {
          transform: translateX(-32px);
        }

        .patent-card.enter-right {
          transform: translateX(32px);
        }

        .patent-card.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .patent-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-md);
        }

        @media (prefers-reduced-motion: reduce) {
          .patent-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        .patent-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .patent-year {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .patent-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.35;
          margin-bottom: 0.5rem;
        }

        .patent-reg-number {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.85rem;
        }

        .patent-reg-number code {
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.725rem;
        }

        .patent-summary {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .patent-footer {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.75rem;
        }

        .patent-inventors {
          color: var(--color-text-secondary);
        }

        .inventors-label {
          font-weight: 600;
          color: var(--color-text);
          margin-right: 4px;
        }

        .patent-cat-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--color-violet);
          background-color: var(--color-lavender-soft);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          width: fit-content;
        }
      `}</style>
    </section>
  );
};
