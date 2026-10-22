import React from 'react';
import { Award, Compass, GraduationCap, Building2, Layers, CheckCircle } from 'lucide-react';

export const BiographySection: React.FC = () => {
  return (
    <section id="biography" className="editorial-section" aria-label="Academic Biography and Leadership Narrative">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">02</span>
            <span>A Career in Perspective</span>
          </div>
          <h2 className="section-title">
            Devotion to Scholarly Rigor and Educational Transformation
          </h2>
          <p className="section-subtitle">
            Three decades of higher education leadership connecting rigorous algorithmic research,
            outcome-based curricula, and university institutional governance.
          </p>
        </div>

        <div className="bio-split-layout">
          {/* Main Narrative Column */}
          <div className="bio-narrative-col">
            <p className="lead">
              Dr. S. Viswanadha Raju is an accomplished academic leader, computer science researcher,
              and university administrator whose career spans over <strong>30 years in Indian higher education</strong>,
              including more than <strong>17.5 years as Full Professor and Senior Professor (Higher Administrative Grade - HAG)</strong>.
            </p>

            <p>
              His scholarly specialization converges on <strong>Artificial Intelligence, Machine Learning, Biometrics,
              Parallel String Matching Algorithms, Information Retrieval, and Outcome-Based Education (OBE)</strong>.
              Throughout his career, he has consistently bridged deep foundational computational theory with pragmatic
              societal solutions, resulting in 9 published and granted patents spanning automated land encroachment monitoring,
              educational institution digital audits, and multimodal biometric surveillance.
            </p>

            <p>
              Beyond specialized computer science research, Dr. Raju has stood at the national vanguard of
              engineering curriculum reform. He has championed the alignment of Indian technical colleges with
              the <strong>Washington Accord benchmarks</strong>, serving as institutional NBA Coordinator, IQAC Coordinator,
              and author of the widely consulted treatise, <em>"Outcome Based Education — Implementation in Engineering Institutions"</em>.
            </p>

            <p>
              His governance impact encompasses serving as <strong>Principal of JNTUH University College of Engineering Sultanpur</strong>,
              former <strong>Principal and Vice Principal of JNTUH University College of Engineering Jagtial</strong>, Head of the CSE Department,
              and an expert member on the Governing Bodies of nine premier engineering colleges, guiding academic councils and
              boards of studies toward the realization of the National Education Policy (NEP 2020) and Industry 5.0 readiness.
            </p>

            <div className="bio-quote-block">
              <blockquote>
                "The measure of academic excellence lies not solely in publication indices,
                but in how deeply our curriculum empowers students to reason critically,
                build ethically, and uplift society."
              </blockquote>
              <cite>— Academic Leadership Perspective</cite>
            </div>
          </div>

          {/* Pillars & Distinctions Side Panel */}
          <div className="bio-side-panel">
            <div className="side-card">
              <h3 className="side-card-title">Core Dimensions of Impact</h3>

              <div className="dimension-item">
                <div className="dimension-icon">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="dimension-heading">Doctoral Mentorship</h4>
                  <p className="dimension-desc">
                    Supervised 17 awarded Ph.D. dissertations in AI, biometrics, and distributed retrieval;
                    actively guiding 5 doctoral scholars.
                  </p>
                </div>
              </div>

              <div className="dimension-item">
                <div className="dimension-icon">
                  <Compass size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="dimension-heading">OBE &amp; NEP 2020 Architect</h4>
                  <p className="dimension-desc">
                    Trained thousands of university faculty members across India in Program Outcome attainment,
                    course design, and rubrics formulation.
                  </p>
                </div>
              </div>

              <div className="dimension-item">
                <div className="dimension-icon">
                  <Building2 size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="dimension-heading">Institutional Governance</h4>
                  <p className="dimension-desc">
                    Stewarded university constituent campuses, IQAC accreditation frameworks, and
                    autonomous college governing boards.
                  </p>
                </div>
              </div>

              <div className="dimension-item">
                <div className="dimension-icon">
                  <Layers size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="dimension-heading">Funded Research</h4>
                  <p className="dimension-desc">
                    Served as Principal and Co-Investigator on AICTE and TEQIP sponsored research grants
                    in network optimization and data retrieval.
                  </p>
                </div>
              </div>
            </div>

            <div className="side-card side-card-highlight">
              <h3 className="side-card-title">Professional Designations</h3>
              <ul className="memberships-list">
                <li>
                  <CheckCircle size={15} className="check-icon" aria-hidden="true" />
                  <span><strong>Senior Professor (HAG Cadre)</strong>, JNTU Hyderabad (2020)</span>
                </li>
                <li>
                  <CheckCircle size={15} className="check-icon" aria-hidden="true" />
                  <span><strong>Fellow</strong>, Institution of Engineers (India)</span>
                </li>
                <li>
                  <CheckCircle size={15} className="check-icon" aria-hidden="true" />
                  <span><strong>Life Member</strong>, ISTE, IETE, CSI &amp; Member IEEE</span>
                </li>
                <li>
                  <CheckCircle size={15} className="check-icon" aria-hidden="true" />
                  <span><strong>CMI Level-5 Certified</strong>, UKIERI Leadership (London)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bio-split-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
        }

        @media (min-width: 980px) {
          .bio-split-layout {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .bio-narrative-col {
          display: flex;
          flex-direction: column;
        }

        .bio-narrative-col p {
          font-size: 1.025rem;
          color: var(--color-text);
          line-height: 1.78;
          margin-bottom: 1.35rem;
        }

        .bio-narrative-col p.lead {
          font-size: clamp(1.15rem, 1.4vw, 1.32rem);
          font-family: var(--font-body);
          font-weight: 400;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 1.6rem;
        }

        .bio-quote-block {
          margin-top: 1.5rem;
          padding: 1.75rem 2rem;
          background: linear-gradient(135deg, rgba(200, 184, 238, 0.2) 0%, rgba(234, 229, 245, 0.4) 100%);
          border-left: 3px solid var(--color-violet);
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
        }

        .bio-quote-block blockquote {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 1.8vw, 1.5rem);
          font-style: italic;
          line-height: 1.45;
          color: var(--color-text);
          margin-bottom: 0.75rem;
        }

        .bio-quote-block cite {
          font-family: var(--font-body);
          font-size: 0.825rem;
          font-style: normal;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-violet);
        }

        .bio-side-panel {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .side-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem 1.85rem;
          box-shadow: var(--shadow-sm);
        }

        .side-card-highlight {
          background-color: var(--color-lavender-tint);
          border-color: var(--color-border);
        }

        .side-card-title {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .dimension-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.35rem;
        }

        .dimension-item:last-child {
          margin-bottom: 0;
        }

        .dimension-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dimension-heading {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.25rem;
        }

        .dimension-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 0;
        }

        .memberships-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .memberships-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.865rem;
          color: var(--color-text);
          line-height: 1.45;
        }

        .check-icon {
          color: var(--color-violet);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
};
