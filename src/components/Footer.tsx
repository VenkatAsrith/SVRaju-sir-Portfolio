import React from 'react';
import { PRINCIPAL_INFO } from '../data/academicData';
import { ArrowUp, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer" role="contentinfo">
      <div className="site-container">
        {/* Top Footer Banner */}
        <div className="footer-top-grid">
          <div className="footer-identity">
            <span className="footer-brand-title">DR. S. VISWANADHA RAJU</span>
            <span className="footer-brand-sub">Academic Legacy &amp; Leadership</span>
            <p className="footer-bio-summary">
              Senior Professor of Computer Science &amp; Engineering &amp; Principal of JNTUH University
              College of Engineering Sultanpur. Dedicated to three decades of academic excellence,
              doctoral research, outcome-based education, and national institutional transformation.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Legacy Architecture</h4>
            <ul className="footer-links-list">
              <li><a href="#overview">Career at a Glance</a></li>
              <li><a href="#biography">Academic Biography</a></li>
              <li><a href="#journey">Chronological Timeline</a></li>
              <li><a href="#recognition">Awards &amp; Distinctions</a></li>
              <li><a href="#research">Research &amp; Innovation</a></li>
              <li><a href="#patents">Patents &amp; IP</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Scholarly Impact</h4>
            <ul className="footer-links-list">
              <li><a href="#publications">Publications &amp; Books</a></li>
              <li><a href="#mentorship">Teaching &amp; Mentorship</a></li>
              <li><a href="#leadership">Institutional Governance</a></li>
              <li><a href="#outreach">Academic Outreach</a></li>
              <li><a href="#resources">OBE Resources</a></li>
              <li><a href="#vision">Philosophy &amp; Vision</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Verified Portals</h4>
            <ul className="footer-links-list">
              <li>
                <a href={PRINCIPAL_INFO.verifiedProfileUrl} target="_blank" rel="noopener noreferrer">
                  <span>JNTUH UCES Principal Profile</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={PRINCIPAL_INFO.scholarUrl} target="_blank" rel="noopener noreferrer">
                  <span>Google Scholar Citations</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={PRINCIPAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  <span>Professional LinkedIn</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={PRINCIPAL_INFO.nptelUrl} target="_blank" rel="noopener noreferrer">
                  <span>NPTEL Chapter #1363</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fact Verification Disclaimer Box */}
        <div className="footer-verification-box">
          <div className="verif-icon-col">
            <ShieldCheck size={20} className="verif-shield" aria-hidden="true" />
          </div>
          <div>
            <div className="verif-title">Factual Accuracy &amp; Institutional Provenance Notice</div>
            <p className="verif-desc">
              All credentials, designations, publications, patents, and awards presented on this academic legacy portal
              are sourced directly from the official institutional records of JNTUH University College of Engineering Sultanpur,
              Jawaharlal Nehru Technological University Hyderabad, the Indian Patent Office Journal, and Google Scholar.
              Senior Professor (HAG) reflects Dr. Raju's official institutional advancement conferred in July 2020.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © {new Date().getFullYear()} Dr. S. Viswanadha Raju. All academic rights reserved.
            Affiliated with JNTUH University College of Engineering Sultanpur.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <style>{`
        .editorial-footer {
          background-color: var(--color-dark-surface);
          color: var(--color-dark-text);
          padding-top: clamp(4rem, 6vw, 6rem);
          padding-bottom: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          margin-bottom: var(--space-3xl);
        }

        @media (min-width: 680px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          }
        }

        .footer-identity {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-title {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-dark-text);
          margin-bottom: 2px;
        }

        .footer-brand-sub {
          font-size: 0.8rem;
          color: var(--color-lavender);
          margin-bottom: 1rem;
        }

        .footer-bio-summary {
          font-size: 0.85rem;
          color: var(--color-dark-text-secondary);
          line-height: 1.65;
          margin-bottom: 0;
        }

        .footer-heading {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-lavender);
          margin-bottom: 1rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .footer-links-list a {
          color: var(--color-dark-text-secondary);
          font-size: 0.85rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--color-dark-text);
        }

        .footer-verification-box {
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1.75rem;
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .verif-shield {
          color: var(--color-lavender);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .verif-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-dark-text);
          margin-bottom: 0.35rem;
        }

        .verif-desc {
          font-size: 0.8rem;
          color: var(--color-dark-text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .footer-bottom-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 1rem;
        }

        .footer-copy {
          font-size: 0.775rem;
          color: var(--color-dark-text-secondary);
          margin-bottom: 0;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-pill);
          padding: 6px 14px;
          color: var(--color-dark-text);
          font-family: var(--font-body);
          font-size: 0.775rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background-color: rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
        }
      `}</style>
    </footer>
  );
};
