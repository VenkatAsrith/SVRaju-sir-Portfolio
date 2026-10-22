import React from 'react';
import { PRINCIPAL_INFO } from '../data/academicData';
import { MapPin, Building, Globe, ExternalLink, Mail, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="editorial-section" aria-label="Official Institutional Contact & Academic Links">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">13</span>
            <span>Institutional Credentials</span>
          </div>
          <h2 className="section-title">
            Official Academic Channels &amp; Office
          </h2>
          <p className="section-subtitle">
            Verified public institutional coordinates, collegiate office location,
            and sanctioned academic directory links.
          </p>
        </div>

        <div className="contact-grid">
          {/* Institutional Office Location */}
          <div className="contact-card">
            <div className="contact-icon-wrap">
              <Building size={22} aria-hidden="true" />
            </div>
            <h3 className="contact-title">Office of the Principal</h3>
            <p className="contact-inst-name">
              JNTUH University College of Engineering Sultanpur
            </p>
            <address className="contact-address">
              Sultanpur (V), Pulkal (M), Sangareddy District,<br />
              Telangana — 502273, India.<br />
              <span className="address-meta">(Constituent College of JNTU Hyderabad)</span>
            </address>

            <div className="office-badges">
              <span className="badge badge-verified">
                <ShieldCheck size={12} aria-hidden="true" />
                Constituent Campus
              </span>
              <span className="badge">AICTE Approved</span>
            </div>
          </div>

          {/* Verified Academic Links Directory */}
          <div className="contact-card">
            <div className="contact-icon-wrap">
              <Globe size={22} aria-hidden="true" />
            </div>
            <h3 className="contact-title">Verified Academic Profiles</h3>
            <p className="contact-sub">
              Access official institutional repositories, research indexes, and course chapters:
            </p>

            <ul className="links-list">
              <li>
                <a
                  href={PRINCIPAL_INFO.verifiedProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-item"
                >
                  <div className="link-title">Official Institutional Profile</div>
                  <div className="link-sub">jntuhces.ac.in/principal</div>
                  <ExternalLink size={14} className="link-arr" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href={PRINCIPAL_INFO.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-item"
                >
                  <div className="link-title">Google Scholar Citations</div>
                  <div className="link-sub">130+ Peer-Reviewed Publications &amp; H-Index</div>
                  <ExternalLink size={14} className="link-arr" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href={PRINCIPAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-item"
                >
                  <div className="link-title">Professional LinkedIn Profile</div>
                  <div className="link-sub">Senior Professor &amp; Principal Dossier</div>
                  <ExternalLink size={14} className="link-arr" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href={PRINCIPAL_INFO.nptelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-item"
                >
                  <div className="link-title">NPTEL Local Chapter (#1363)</div>
                  <div className="link-sub">IIT Madras SWAYAM MOOC Certifications</div>
                  <ExternalLink size={14} className="link-arr" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }

        @media (min-width: 840px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          box-shadow: var(--shadow-sm);
        }

        .contact-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.35rem;
        }

        .contact-inst-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-violet);
          margin-bottom: 1rem;
        }

        .contact-address {
          font-style: normal;
          font-size: 0.925rem;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .address-meta {
          color: var(--color-text-secondary);
          font-size: 0.85rem;
        }

        .office-badges {
          display: flex;
          gap: 0.5rem;
        }

        .contact-sub {
          font-size: 0.885rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.25rem;
        }

        .links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .profile-link-item {
          display: flex;
          flex-direction: column;
          padding: 0.85rem 1rem;
          background-color: var(--color-lavender-tint);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-decoration: none;
          position: relative;
          transition: all var(--transition-fast);
        }

        .profile-link-item:hover {
          background-color: var(--color-lavender-soft);
          border-color: var(--color-violet-light);
          transform: translateX(3px);
        }

        .link-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .link-sub {
          font-size: 0.775rem;
          color: var(--color-text-secondary);
        }

        .link-arr {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-violet);
        }
      `}</style>
    </section>
  );
};
