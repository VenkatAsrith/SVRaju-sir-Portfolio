import React, { useState, useEffect, useRef } from 'react';
import { HONORS_AWARDS } from '../data/academicData';
import { Award, ShieldCheck, ExternalLink, Calendar, Trophy } from 'lucide-react';
import { AwardItem } from '../types';
import { CompactGrid } from './grids/GridSystem';

interface AwardsSectionProps {
  onSelectAward: (award: AwardItem) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onSelectAward }) => {
  const [levelFilter, setLevelFilter] = useState<'All' | 'National' | 'State' | 'Research'>('All');
  const [visibleAwards, setVisibleAwards] = useState<Set<string>>(new Set());
  const awardRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filteredAwards = HONORS_AWARDS.filter(award => {
    if (levelFilter === 'All') return true;
    return award.level === levelFilter;
  });

  // Scroll Trigger Observer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleAwards(new Set(filteredAwards.map(a => a.id)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleAwards((prev) => new Set(prev).add(id));
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

    awardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredAwards]);

  return (
    <section id="recognition" className="editorial-section" aria-label="Awards and Distinctions">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">04</span>
            <span>Recognition that Matters</span>
          </div>
          <h2 className="section-title">
            Distinctions, Honors &amp; State Recognitions
          </h2>
          <p className="section-subtitle">
            National, state, and scientific society accolades celebrating Dr. Raju's pedagogy,
            institutional stewardship, and algorithmic research achievements.
          </p>

          <div className="awards-filters" role="group" aria-label="Awards Level Filter">
            {(['All', 'National', 'State', 'Research'] as const).map(lvl => (
              <button
                key={lvl}
                type="button"
                className={`award-filter-btn ${levelFilter === lvl ? 'active' : ''}`}
                onClick={() => setLevelFilter(lvl)}
              >
                {lvl === 'All' ? 'All Recognitions' : `${lvl} Distinctions`}
              </button>
            ))}
          </div>
        </div>

        <CompactGrid className="awards-compact-layout">
          {filteredAwards.map((award, idx) => {
            const isLeft = idx % 2 === 0;
            const isVisible = visibleAwards.has(award.id);
            const directionClass = isLeft ? 'enter-left' : 'enter-right';

            return (
              <article
                key={award.id}
                data-id={award.id}
                ref={(el) => {
                  if (el) awardRefs.current.set(award.id, el);
                  else awardRefs.current.delete(award.id);
                }}
                className={`award-card ${directionClass} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="award-card-top">
                  <div className="award-icon-badge">
                    <Trophy size={18} aria-hidden="true" />
                  </div>
                  <div className="award-badge-cluster">
                    <span className={`badge ${award.level === 'National' ? 'badge-national' : ''}`}>
                      {award.level}
                    </span>
                    <span className="award-year-tag">
                      <Calendar size={11} aria-hidden="true" />
                      {award.year}
                    </span>
                  </div>
                </div>

                <h3 className="award-card-title">{award.title}</h3>
                <div className="award-awarding-body">{award.awardingBody}</div>

                <p className="award-description">{award.description}</p>

                <div className="award-significance-box">
                  <span className="significance-label">Significance:</span>
                  <span className="significance-text">{award.significance}</span>
                </div>

                <div className="award-card-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-award-action"
                    onClick={() => onSelectAward(award)}
                    aria-label={`View Certificate and Verification Details for ${award.title}`}
                  >
                    <ShieldCheck size={14} className="action-icon" aria-hidden="true" />
                    <span>View Dossier &amp; Citation</span>
                  </button>
                </div>
              </article>
            );
          })}
        </CompactGrid>
      </div>

      <style>{`
        .awards-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .award-filter-btn {
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

        .award-filter-btn:hover {
          color: var(--color-text);
          border-color: var(--color-border-hover);
        }

        .award-filter-btn.active {
          background-color: var(--color-text);
          color: #FFFFFF;
          border-color: var(--color-text);
        }

        .awards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2.5vw, 1.85rem);
        }

        @media (min-width: 680px) {
          .awards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1080px) {
          .awards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .award-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color var(--transition-normal),
                      box-shadow var(--transition-normal);
          will-change: opacity, transform;
        }

        .award-card.enter-left {
          transform: translateX(-32px);
        }

        .award-card.enter-right {
          transform: translateX(32px);
        }

        .award-card.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .award-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-md);
        }

        @media (prefers-reduced-motion: reduce) {
          .award-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        .award-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.15rem;
        }

        .award-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .award-badge-cluster {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .award-year-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .award-card-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.3;
          margin-bottom: 0.45rem;
        }

        .award-awarding-body {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-violet);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .award-description {
          font-size: 0.885rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 1.15rem;
          flex-grow: 1;
        }

        .award-significance-box {
          background-color: var(--color-lavender-tint);
          border-radius: var(--radius-md);
          padding: 0.75rem 0.95rem;
          margin-bottom: 1.25rem;
          font-size: 0.8rem;
          line-height: 1.45;
        }

        .significance-label {
          font-weight: 600;
          color: var(--color-text);
          margin-right: 4px;
        }

        .significance-text {
          color: var(--color-text-secondary);
        }

        .award-card-actions {
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .btn-award-action {
          width: 100%;
          font-size: 0.825rem;
          padding: 0.6rem 1rem;
        }

        .action-icon {
          color: var(--color-violet);
        }
      `}</style>
    </section>
  );
};
