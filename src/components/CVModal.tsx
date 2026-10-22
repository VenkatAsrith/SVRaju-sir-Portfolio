import React, { useEffect, useRef } from 'react';
import { X, Printer, Download, ExternalLink, ShieldCheck, CheckCircle2, Building, Mail, Award, BookOpen } from 'lucide-react';
import { PRINCIPAL_INFO, CAREER_TIMELINE, HONORS_AWARDS, IMPACT_METRICS } from '../data/academicData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="cv-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Action Bar */}
        <div className="cv-modal-bar">
          <div className="cv-bar-info">
            <span className="badge badge-verified">
              <CheckCircle2 size={12} aria-hidden="true" />
              Verified Academic Curriculum Vitae
            </span>
            <span className="cv-bar-date">Updated: October 2025</span>
          </div>

          <div className="cv-bar-actions">
            <button
              type="button"
              className="btn btn-secondary btn-bar-action"
              onClick={handlePrint}
              aria-label="Print or Save CV as PDF"
            >
              <Printer size={15} aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              className="modal-close-btn"
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close Academic CV"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="cv-document-paper" id="printable-cv">
          {/* Header */}
          <header className="cv-doc-header">
            <div className="cv-header-grid">
              <div>
                <h1 id="cv-modal-title" className="cv-name">{PRINCIPAL_INFO.fullName}</h1>
                <p className="cv-designation">
                  {PRINCIPAL_INFO.honorificTitle} (Higher Administrative Grade - HAG)<br />
                  <strong>{PRINCIPAL_INFO.currentRole}</strong>
                </p>
                <p className="cv-institution">
                  {PRINCIPAL_INFO.institution} · {PRINCIPAL_INFO.campus}
                </p>
              </div>
              <div className="cv-header-portrait">
                <img
                  src={PRINCIPAL_INFO.portraitUrl}
                  alt={PRINCIPAL_INFO.fullName}
                  className="cv-portrait-img"
                  width="110"
                  height="130"
                />
              </div>
            </div>

            <div className="cv-meta-strip">
              <span><strong>Qualifications:</strong> {PRINCIPAL_INFO.qualificationsSummary}</span>
              <span><strong>Memberships:</strong> {PRINCIPAL_INFO.memberships}</span>
            </div>
          </header>

          {/* Key Executive Summary */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Professional Profile</h2>
            <p className="cv-text">
              Distinguished academic leader, computer science researcher, and educational administrator
              with over 30 years of experience in higher education, including more than 17.5 years as
              Full Professor and Senior Professor in Computer Science &amp; Engineering. Recognized nationally
              for contributions to Outcome-Based Education (OBE), NEP 2020 curriculum reforms, Washington Accord
              accreditation alignment, and research in parallel string algorithms, multimodal biometrics, and machine intelligence.
            </p>
          </section>

          {/* Impact Snapshot */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Key Scholarly &amp; Administrative Indices</h2>
            <div className="cv-stat-grid">
              <div className="cv-stat-cell">
                <div className="stat-v">30+</div>
                <div className="stat-l">Years in Higher Education</div>
              </div>
              <div className="cv-stat-cell">
                <div className="stat-v">130+</div>
                <div className="stat-l">Research Publications</div>
              </div>
              <div className="cv-stat-cell">
                <div className="stat-v">9</div>
                <div className="stat-l">Patents (7 Published, 2 Granted)</div>
              </div>
              <div className="cv-stat-cell">
                <div className="stat-v">17</div>
                <div className="stat-l">Ph.D. Scholars Supervised</div>
              </div>
              <div className="cv-stat-cell">
                <div className="stat-v">5</div>
                <div className="stat-l">Authored Books &amp; 11 Chapters</div>
              </div>
              <div className="cv-stat-cell">
                <div className="stat-v">700+</div>
                <div className="stat-l">Invited Keynotes &amp; FDPs</div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Educational Qualifications</h2>
            <div className="cv-timeline-entry">
              <div className="entry-year">2008</div>
              <div className="entry-content">
                <strong>Ph.D. in Computer Science &amp; Engineering</strong>
                <div className="entry-inst">Acharya Nagarjuna University, Guntur</div>
                <div className="entry-note">Specialization: Information Retrieval, Parallel String Matching Models</div>
              </div>
            </div>
            <div className="cv-timeline-entry">
              <div className="entry-year">2003</div>
              <div className="entry-content">
                <strong>M.Tech. in Computer Science &amp; Engineering</strong>
                <div className="entry-inst">JNTU Hyderabad · First Class with Distinction</div>
              </div>
            </div>
            <div className="cv-timeline-entry">
              <div className="entry-year">1996</div>
              <div className="entry-content">
                <strong>Master of Computer Applications (MCA)</strong>
                <div className="entry-inst">Osmania University, Hyderabad</div>
              </div>
            </div>
            <div className="cv-timeline-entry">
              <div className="entry-year">2015</div>
              <div className="entry-content">
                <strong>CMI Level-5 Certification in Educational Leadership and Management</strong>
                <div className="entry-inst">MHRD–AICTE–UKIERI Programme (Dudley College London)</div>
              </div>
            </div>
          </section>

          {/* Administrative Leadership Appointments */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Administrative Leadership Appointments</h2>
            <ul className="cv-bullets">
              <li><strong>Principal</strong>, JNTUH University College of Engineering Sultanpur (Oct 2025 – Present)</li>
              <li><strong>Principal</strong>, JNTUH University College of Engineering Jagtial (Apr 2025 – Oct 2025)</li>
              <li><strong>Senior Professor (HAG Cadre)</strong>, JNTU Hyderabad (July 2020 – Present)</li>
              <li><strong>Vice Principal</strong>, JNTUH College of Engineering Jagtial (2016 – 2021)</li>
              <li><strong>IQAC Coordinator</strong>, JNTUH College of Engineering Jagtial (2016 – 2019)</li>
              <li><strong>Head, Department of Computer Science &amp; Engineering</strong>, JNTUH CEJ (2011 – 2015)</li>
              <li><strong>NBA Coordinator &amp; Director of MCA Programme</strong>, GRIET Hyderabad (2008 – 2010)</li>
              <li><strong>NPTEL SPOC Coordinator</strong>, JNTUH CEJ Local Chapter #1363 (2016 – Oct 2025)</li>
              <li><strong>Governing Body Member</strong> across 9 premier Engineering Colleges &amp; Academic Councils</li>
            </ul>
          </section>

          {/* Honors & Awards */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Distinctions &amp; Honors</h2>
            <ul className="cv-bullets">
              <li><strong>Anna University National Award for Outstanding Academic Teacher</strong>, ISTE (2025)</li>
              <li><strong>Telangana State Best Teacher Award</strong>, Government of Telangana (2020)</li>
              <li><strong>Bhishma Acharya National Award</strong> (2022)</li>
              <li><strong>Uttam Acharya National Award</strong> (2019)</li>
              <li><strong>Certificate of Appreciation</strong> from the District Collector, Jagtial (2019)</li>
              <li><strong>ISTE Best CSE Teacher Award</strong> (AP &amp; Telangana Section, 2014)</li>
              <li><strong>Young Scientist Fellowship</strong>, Tamil Nadu State Council for Science and Technology (2014–2015)</li>
              <li><strong>Young Scientist Conclave Recognition</strong>, CSIR, Government of India (2016)</li>
              <li><strong>Best Research Paper Award</strong>, 6th IACC / IEEE Computer Society (2016)</li>
            </ul>
          </section>

          {/* Official Verification Footer */}
          <footer className="cv-doc-footer">
            <div className="doc-footer-stamp">
              <ShieldCheck size={16} className="stamp-icon" />
              <span>Official Institutional Curriculum Vitae · Verified with JNTUH Records</span>
            </div>
            <div className="doc-footer-meta">
              Official Portal: jntuhces.ac.in/principal · Generated October 2025
            </div>
          </footer>
        </div>
      </div>

      <style>{`
        .cv-modal-container {
          background-color: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-xl);
          width: 100%;
          max-width: 860px;
          max-height: 92vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          animation: scaleUp 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cv-modal-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.75rem;
          border-bottom: 1px solid var(--color-border);
          background-color: #FAF9FD;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .cv-bar-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cv-bar-date {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .cv-bar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-bar-action {
          padding: 0.45rem 0.95rem;
          font-size: 0.8rem;
        }

        .cv-document-paper {
          padding: clamp(2rem, 4vw, 3.25rem);
          color: #262333;
          line-height: 1.6;
        }

        .cv-doc-header {
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 1.5rem;
          margin-bottom: 1.75rem;
        }

        .cv-header-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .cv-name {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 0.35rem;
        }

        .cv-designation {
          font-size: 1rem;
          color: var(--color-violet);
          margin-bottom: 0.35rem;
          line-height: 1.4;
        }

        .cv-institution {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: 0;
        }

        .cv-header-portrait {
          flex-shrink: 0;
        }

        .cv-portrait-img {
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          object-fit: cover;
        }

        .cv-meta-strip {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background-color: var(--color-lavender-tint);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--color-text);
        }

        .cv-section {
          margin-bottom: 1.75rem;
        }

        .cv-section-heading {
          font-family: var(--font-body);
          font-size: 0.925rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-violet);
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.4rem;
          margin-bottom: 0.85rem;
        }

        .cv-text {
          font-size: 0.9rem;
          color: var(--color-text);
          line-height: 1.65;
          margin-bottom: 0;
        }

        .cv-stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        @media (min-width: 600px) {
          .cv-stat-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .cv-stat-cell {
          background-color: #FAF8FD;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
        }

        .stat-v {
          font-family: var(--font-display);
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-violet);
          line-height: 1;
        }

        .stat-l {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          margin-top: 4px;
        }

        .cv-timeline-entry {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 0.75rem;
          font-size: 0.885rem;
        }

        .entry-year {
          font-weight: 700;
          color: var(--color-violet);
          width: 50px;
          flex-shrink: 0;
        }

        .entry-content {
          flex-grow: 1;
        }

        .entry-inst {
          color: var(--color-text-secondary);
          font-size: 0.825rem;
        }

        .entry-note {
          font-size: 0.775rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        .cv-bullets {
          margin-left: 1.25rem;
          font-size: 0.885rem;
          color: var(--color-text);
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .cv-doc-footer {
          margin-top: 2.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .doc-footer-stamp {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--color-violet);
          font-weight: 500;
        }

        @media print {
          .cv-modal-bar {
            display: none !important;
          }
          .cv-modal-container {
            max-height: none !important;
            overflow: visible !important;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};
