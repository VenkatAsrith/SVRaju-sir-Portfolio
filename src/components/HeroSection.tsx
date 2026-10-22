import React from 'react';
import { Award, BookOpen, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRINCIPAL_INFO } from '../data/academicData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction & Academic Stature">
      {/* Ambient Lavender Sculptural Shapes */}
      <div className="hero-ambient-shape shape-1" aria-hidden="true" />
      <div className="hero-ambient-shape shape-2" aria-hidden="true" />

      <div className="site-container hero-inner">
        {/* Left Editorial Text Column */}
        <div className="hero-content">
          <div className="hero-badge-row">
            <span className="badge badge-verified">
              <CheckCircle2 size={13} aria-hidden="true" />
              Verified Academic Dossier · 2025
            </span>
            <span className="badge">
              Constituent College · JNTU Hyderabad
            </span>
          </div>

          <h1 className="hero-name">
            Dr. S. Viswanadha Raju
          </h1>

          <div className="hero-title-group">
            <p className="hero-designation">
              Senior Professor of Computer Science &amp; Engineering
            </p>
            <p className="hero-institution">
              Principal, JNTUH University College of Engineering Sultanpur
            </p>
          </div>

          <p className="hero-statement">
            "Three Decades of Learning. A Legacy of Impact."
          </p>

          <p className="hero-narrative">
            An academic journey spanning thirty years of teaching, doctoral mentorship,
            patented algorithmic research, and institutional leadership dedicated to
            transforming Indian engineering education through Outcome-Based Education (OBE)
            and National Education Policy (NEP 2020) frameworks.
          </p>

          <div className="hero-credentials">
            <div className="credential-tag">
              <span className="tag-label">Qualifications</span>
              <span className="tag-val">Ph.D. (CSE) · M.Tech. · MCA · CMI (UKIERI)</span>
            </div>
            <div className="credential-tag">
              <span className="tag-label">Distinctions</span>
              <span className="tag-val">Senior Professor (HAG) · ISTE National Award 2025</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#journey" className="btn btn-primary">
              <span>Explore Academic Journey</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#research" className="btn btn-secondary">
              <BookOpen size={16} aria-hidden="true" />
              <span>Research &amp; Patents</span>
            </a>
            <a
              href={PRINCIPAL_INFO.verifiedProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-text"
              aria-label="Official JNTUH Sultanpur Principal Page (opens in new tab)"
            >
              <span>Official Institutional Profile</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Portrait Column */}
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-backdrop" aria-hidden="true" />
            <div className="portrait-card">
              <img
                src={PRINCIPAL_INFO.portraitUrl}
                alt="Dr. S. Viswanadha Raju, Senior Professor of CSE and Principal, JNTUH University College of Engineering Sultanpur"
                className="portrait-image"
                width="340"
                height="400"
                loading="eager"
              />
              <div className="portrait-overlay">
                <div className="portrait-meta">
                  <div className="portrait-insignia">
                    <img
                      src={PRINCIPAL_INFO.institutionLogoUrl}
                      alt="JNTUH Insignia"
                      className="insignia-img"
                      width="38"
                      height="38"
                    />
                    <div>
                      <div className="insignia-title">JNTU HYDERABAD</div>
                      <div className="insignia-sub">UCE Sultanpur · Sangareddy</div>
                    </div>
                  </div>
                  <div className="portrait-tag">
                    <Award size={14} className="tag-icon" />
                    <span>ISTE National Awardee 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <a href="#overview" className="hero-scroll-cue" aria-label="Scroll to Career at a Glance">
        <span className="scroll-label">Explore Legacy</span>
        <ChevronDown size={18} className="scroll-icon" />
      </a>

      <style>{`
        .hero-section {
          min-height: calc(100vh - var(--header-height));
          padding-top: calc(var(--header-height) + 2.5rem);
          padding-bottom: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-ambient-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(80px);
          opacity: 0.65;
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(200, 184, 238, 0.45) 0%, rgba(245, 243, 250, 0) 70%);
          top: 5%;
          right: -5%;
        }

        .shape-2 {
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(218, 207, 245, 0.35) 0%, rgba(245, 243, 250, 0) 70%);
          bottom: 10%;
          left: -8%;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 980px) {
          .hero-inner {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .hero-content {
          max-width: 680px;
        }

        .hero-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-md);
        }

        .hero-name {
          font-size: var(--font-size-display-xl);
          font-weight: 500;
          line-height: 1.08;
          color: var(--color-text);
          margin-bottom: var(--space-xs);
          letter-spacing: -0.025em;
        }

        .hero-title-group {
          margin-bottom: var(--space-lg);
          padding-left: var(--space-xs);
          border-left: 2px solid var(--color-violet);
        }

        .hero-designation {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-violet);
          margin-bottom: 2px;
          line-height: 1.35;
        }

        .hero-institution {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 0;
          font-weight: 450;
        }

        .hero-statement {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.3vw, 1.95rem);
          font-style: italic;
          color: var(--color-text);
          line-height: 1.3;
          margin-bottom: var(--space-md);
          font-weight: 400;
        }

        .hero-narrative {
          font-size: var(--font-size-body);
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: var(--space-lg);
        }

        .hero-credentials {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xs);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          margin-bottom: var(--space-xl);
        }

        @media (min-width: 600px) {
          .hero-credentials {
            grid-template-columns: 1fr 1fr;
          }
        }

        .credential-tag {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .tag-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-violet);
          font-weight: 600;
        }

        .tag-val {
          font-size: 0.825rem;
          color: var(--color-text);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
        }

        /* Portrait styling */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portrait-frame {
          position: relative;
          max-width: 380px;
          width: 100%;
        }

        .portrait-backdrop {
          position: absolute;
          inset: -14px -14px 14px 14px;
          background: linear-gradient(145deg, #DDD3F5 0%, #C8B8EE 100%);
          border-radius: var(--radius-xl);
          opacity: 0.7;
          z-index: 0;
          transition: transform var(--transition-smooth);
        }

        .portrait-frame:hover .portrait-backdrop {
          transform: translate(4px, 4px);
        }

        .portrait-card {
          position: relative;
          z-index: 1;
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border);
        }

        .portrait-image {
          width: 100%;
          height: auto;
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .portrait-overlay {
          padding: 1.15rem 1.25rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8FD 100%);
          border-top: 1px solid var(--color-border-subtle);
        }

        .portrait-meta {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .portrait-insignia {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .insignia-img {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }

        .insignia-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--color-text);
        }

        .insignia-sub {
          font-size: 0.7rem;
          color: var(--color-text-secondary);
        }

        .portrait-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-violet);
          background-color: var(--color-lavender-soft);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          font-weight: 500;
          width: fit-content;
        }

        .hero-scroll-cue {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          margin-top: 3rem;
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast), transform var(--transition-fast);
          z-index: 1;
        }

        .hero-scroll-cue:hover {
          color: var(--color-violet);
          transform: translateY(3px);
        }

        .scroll-label {
          font-size: 0.725rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 500;
        }

        .scroll-icon {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(5px); }
          60% { transform: translateY(2px); }
        }
      `}</style>
    </section>
  );
};
