import React from 'react';
import { BookOpen, ChevronDown, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { PRINCIPAL_INFO } from '../data/academicData';
import { HeroCarousel } from './HeroCarousel';

interface HeroSectionProps {
  onOpenCV?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV }) => {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction & Academic Stature">
      {/* Subtle Ambient Sculptural Shapes */}
      <div className="hero-ambient-shape shape-1" aria-hidden="true" />
      <div className="hero-ambient-shape shape-2" aria-hidden="true" />

      <div className="site-container hero-container">
        {/* Top Executive Profile Grid */}
        <div className="hero-profile-grid">
          {/* Left Editorial Text Column */}
          <div className="hero-content">
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

            {/* Academic Overview Summary */}
            <div className="hero-credentials">
              <div className="credential-tag">
                <span className="tag-label">Academic Qualifications</span>
                <span className="tag-val">Ph.D. (CSE) · M.Tech. · MCA · CMI (UKIERI)</span>
              </div>

              <div className="credential-tag">
                <span className="tag-label">Academic Standing</span>
                <span className="tag-val">Senior Professor (HAG Cadre) · JNTU Hyderabad</span>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="hero-actions">
              {onOpenCV && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenCV}
                  aria-label="Open Academic Curriculum Vitae"
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>Curriculum Vitae</span>
                </button>
              )}
              <a href="#archival-showcase" className="btn btn-secondary">
                <span>Archival Conclaves</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a href="#research" className="btn btn-secondary">
                <BookOpen size={15} aria-hidden="true" />
                <span>Research &amp; Patents</span>
              </a>
              <a
                href={PRINCIPAL_INFO.verifiedProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-text"
                aria-label="Official JNTUH Sultanpur Principal Page (opens in new tab)"
              >
                <ShieldCheck size={15} aria-hidden="true" />
                <span>Institutional Portal</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-backdrop" aria-hidden="true" />
              <div className="portrait-card">
                <div className="portrait-image-container">
                  <img
                    src={PRINCIPAL_INFO.portraitUrl}
                    alt="Dr. S. Viswanadha Raju, Senior Professor of CSE and Principal, JNTUH University College of Engineering Sultanpur"
                    className="portrait-image"
                    width="340"
                    height="400"
                    loading="eager"
                  />
                </div>
                <div className="portrait-overlay">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centerpiece Archival Conclaves Carousel Section */}
        <div id="archival-showcase" className="hero-carousel-section">
          <div className="carousel-section-header">
            <div className="section-label">
              <span className="section-number">ARCHIVAL RECORD</span>
              <span>· Academic Conclaves &amp; Addresses</span>
            </div>
            <h2 className="carousel-showcase-title">
              Moments of Distinction &amp; Public Leadership
            </h2>
            <p className="carousel-showcase-subtitle">
              Authentic visual records from university orientation convocations, keynote conventions,
              and academic honors.
            </p>
          </div>

          {/* Minimal, Refined Hero Carousel */}
          <HeroCarousel autoPlayInterval={3000} />
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <a href="#overview" className="hero-scroll-cue" aria-label="Scroll to Career at a Glance">
        <span className="scroll-label">Explore Legacy &amp; Metrics</span>
        <ChevronDown size={18} className="scroll-icon" />
      </a>

      <style>{`
        .hero-section {
          min-height: calc(100vh - var(--header-height));
          padding-top: calc(var(--header-height) + 2rem);
          padding-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 1;
        }

        .hero-ambient-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(80px);
          opacity: 0.5;
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(200, 184, 238, 0.35) 0%, rgba(245, 243, 250, 0) 70%);
          top: 3%;
          right: -8%;
        }

        .shape-2 {
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, rgba(218, 207, 245, 0.3) 0%, rgba(245, 243, 250, 0) 70%);
          top: 35%;
          left: -10%;
        }

        .hero-profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }

        @media (min-width: 980px) {
          .hero-profile-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .hero-content {
          max-width: 680px;
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
          padding-left: var(--space-sm);
          border-left: 3px solid var(--color-violet);
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
          background: rgba(255, 255, 255, 0.75);
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
          padding: 6px 8px;
        }

        .tag-label {
          font-size: 0.69rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-violet);
          font-weight: 700;
        }

        .tag-val {
          font-size: 0.825rem;
          color: var(--color-text);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
        }

        /* Portrait styling - Calm & Editorial */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portrait-frame {
          position: relative;
          max-width: 350px;
          width: 100%;
        }

        .portrait-backdrop {
          position: absolute;
          inset: -12px -12px 12px 12px;
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
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }

        .portrait-image-container {
          position: relative;
          overflow: hidden;
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
          padding: 1rem 1.25rem;
          background: #FFFFFF;
          border-top: 1px solid var(--color-border-subtle);
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
          border-radius: 4px;
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

        /* Archival Conclaves Carousel Section */
        .hero-carousel-section {
          margin-top: 2rem;
          padding-top: 2.25rem;
          border-top: 1px solid var(--color-border);
          position: relative;
        }

        .carousel-section-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 1.5rem;
        }

        .carousel-showcase-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 500;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 0.45rem;
          letter-spacing: -0.015em;
        }

        .carousel-showcase-subtitle {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .hero-scroll-cue {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          margin-top: 3.5rem;
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
          font-weight: 600;
        }

        .scroll-icon {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(4px); }
          60% { transform: translateY(2px); }
        }
      `}</style>
    </section>
  );
};
