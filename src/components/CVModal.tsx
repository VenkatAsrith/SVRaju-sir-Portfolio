import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PRINCIPAL_INFO, IMPACT_METRICS } from '../data/academicData';
import { lockBackgroundScroll, unlockBackgroundScroll } from '../utils/scrollLock';

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
      lockBackgroundScroll();
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      unlockBackgroundScroll();
    }

    return () => {
      if (isOpen) {
        unlockBackgroundScroll();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    let savedPosition = '';
    let savedTop = '';
    let savedOverflow = '';

    const handleBeforePrint = () => {
      savedPosition = document.body.style.position;
      savedTop = document.body.style.top;
      savedOverflow = document.body.style.overflow;

      document.body.style.position = 'static';
      document.body.style.top = 'auto';
      document.body.style.overflow = 'visible';
    };

    const handleAfterPrint = () => {
      document.body.style.position = savedPosition;
      document.body.style.top = savedTop;
      document.body.style.overflow = savedOverflow;
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  if (!isOpen || typeof document === 'undefined') return null;

  const handlePrint = () => {
    const printableElement = document.getElementById('printable-cv');
    if (!printableElement) {
      window.print();
      return;
    }

    // Create an isolated hidden iframe dedicated to printing
    const existingIframe = document.getElementById('cv-print-iframe');
    if (existingIframe) {
      existingIframe.remove();
    }

    const printIframe = document.createElement('iframe');
    printIframe.id = 'cv-print-iframe';
    printIframe.style.position = 'fixed';
    printIframe.style.right = '0';
    printIframe.style.bottom = '0';
    printIframe.style.width = '0';
    printIframe.style.height = '0';
    printIframe.style.border = '0';
    document.body.appendChild(printIframe);

    const doc = printIframe.contentWindow?.document;
    if (!doc) {
      window.print();
      return;
    }

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Dr_S_Viswanadha_Raju_Academic_CV</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          @page {
            size: A4 portrait;
            margin: 14mm 16mm 14mm 16mm;
          }

          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #1A1724;
            background: #FFFFFF;
            font-size: 10pt;
            line-height: 1.55;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Executive Document Header */
          .cv-doc-header {
            border-bottom: 2px solid #2B2638;
            padding-bottom: 12pt;
            margin-bottom: 14pt;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .cv-header-grid {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 18pt;
            margin-bottom: 10pt;
          }

          .cv-header-text {
            flex: 1;
          }

          .cv-name {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 21pt;
            font-weight: 700;
            color: #120F1D;
            line-height: 1.15;
            margin-bottom: 3pt;
          }

          .cv-designation {
            font-size: 11pt;
            font-weight: 600;
            color: #5B4882;
            margin-bottom: 3pt;
          }

          .cv-current-role {
            font-size: 10.5pt;
            color: #1A1724;
            margin-bottom: 2pt;
          }

          .cv-institution,
          .cv-campus {
            font-size: 9.5pt;
            color: #4A4658;
            line-height: 1.35;
          }

          .cv-header-portrait {
            flex-shrink: 0;
          }

          .cv-portrait-img {
            width: 100px;
            height: 120px;
            object-fit: cover;
            border-radius: 4px;
            border: 1px solid #D5D0E2;
            display: block;
          }

          /* Contact Coordinates Strip */
          .cv-coordinates-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5pt 14pt;
            background: #F6F4FA !important;
            border: 1px solid #E6E1F0;
            border-radius: 4px;
            padding: 8pt 10pt;
            margin-bottom: 8pt;
            font-size: 8.5pt;
            color: #383445;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .coord-item {
            display: flex;
            align-items: center;
            gap: 5pt;
            word-break: break-word;
          }

          .coord-icon {
            color: #5B4882;
            width: 13px;
            height: 13px;
            flex-shrink: 0;
          }

          .cv-meta-strip {
            font-size: 9pt;
            color: #383445;
            display: flex;
            flex-direction: column;
            gap: 2pt;
            margin-top: 4pt;
            line-height: 1.45;
          }

          /* Sections */
          .cv-section {
            margin-bottom: 14pt;
            page-break-inside: auto;
            break-inside: auto;
          }

          .cv-section-heading {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 13pt;
            font-weight: 700;
            color: #171422;
            border-bottom: 1.5pt solid #75639F;
            padding-bottom: 3pt;
            margin-bottom: 8pt;
            margin-top: 10pt;
            page-break-after: avoid;
            break-after: avoid;
          }

          .cv-text {
            font-size: 9.5pt;
            color: #2D2938;
            line-height: 1.6;
          }

          /* Impact Metrics Grid */
          .cv-stat-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6pt;
            margin-top: 4pt;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .cv-stat-cell {
            background: #FAF9FD !important;
            border: 1px solid #E4DFEE;
            border-radius: 4px;
            padding: 6pt 8pt;
            text-align: center;
          }

          .stat-v {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 15pt;
            font-weight: 700;
            color: #5B4882;
            line-height: 1.1;
          }

          .stat-l {
            font-size: 8pt;
            font-weight: 600;
            color: #1A1724;
            margin-top: 1pt;
          }

          .stat-sub {
            font-size: 7pt;
            color: #5E5A6C;
          }

          /* Chronological Entries */
          .cv-entries-list {
            display: flex;
            flex-direction: column;
            gap: 6.5pt;
          }

          .cv-entry {
            display: flex;
            gap: 10pt;
            font-size: 9.5pt;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .entry-year {
            width: 48px;
            font-weight: 700;
            color: #5B4882;
            flex-shrink: 0;
          }

          .entry-content {
            flex: 1;
          }

          .entry-content strong {
            color: #120F1D;
          }

          .entry-inst {
            color: #3E3A4B;
            font-size: 9pt;
          }

          .entry-note {
            color: #5E5A6C;
            font-size: 8.5pt;
            font-style: italic;
          }

          .cv-bullets {
            margin-left: 14pt;
            font-size: 9.2pt;
            color: #2D2938;
            display: flex;
            flex-direction: column;
            gap: 3pt;
          }

          .cv-bullets li {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .cv-subblock {
            font-size: 9.2pt;
            color: #2D2938;
            margin-bottom: 5pt;
            line-height: 1.5;
          }

          /* Footer */
          .cv-doc-footer {
            border-top: 1px solid #D5D0E2;
            padding-top: 8pt;
            margin-top: 14pt;
            text-align: center;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .doc-footer-meta {
            font-size: 8pt;
            color: #6C677A;
            line-height: 1.4;
          }
        </style>
      </head>
      <body>
        ${printableElement.innerHTML}
      </body>
      </html>
    `);
    doc.close();

    // Trigger printing once DOM and portrait image are loaded
    setTimeout(() => {
      printIframe.contentWindow?.focus();
      printIframe.contentWindow?.print();
      setTimeout(() => {
        printIframe.remove();
      }, 2500);
    }, 350);
  };

  return createPortal(
    <div
      className="modal-backdrop cv-backdrop-layer"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="cv-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Action Header Bar */}
        <div className="cv-modal-bar">
          <div className="cv-bar-title-group">
            <h2 className="cv-bar-heading">Curriculum Vitae</h2>
            <span className="cv-bar-sub">Dr. S. Viswanadha Raju</span>
          </div>

          <div className="cv-bar-actions">
            <button
              type="button"
              className="btn btn-primary btn-bar-action"
              onClick={handlePrint}
              title="Download or Print this CV as PDF"
              aria-label="Download or Print CV as PDF"
            >
              <Printer size={15} aria-hidden="true" />
              <span className="cv-btn-full">Download / Print PDF</span>
              <span className="cv-btn-short">PDF</span>
            </button>

            <a
              href={PRINCIPAL_INFO.verifiedProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-bar-action cv-portal-btn"
              aria-label="Official JNTUH Sultanpur Principal Page (opens in new tab)"
            >
              <span className="cv-btn-full">Official Portal</span>
              <span className="cv-btn-short">Portal</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="modal-close-btn"
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close Curriculum Vitae"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Executive Resume Paper Body */}
        <div className="cv-document-paper" id="printable-cv">
          {/* Executive Header */}
          <header className="cv-doc-header">
            <div className="cv-header-grid">
              <div className="cv-header-text">
                <h1 id="cv-modal-title" className="cv-name">{PRINCIPAL_INFO.fullName}</h1>
                <p className="cv-designation">
                  {PRINCIPAL_INFO.honorificTitle} (Higher Administrative Grade - HAG Cadre)
                </p>
                <p className="cv-current-role">
                  <strong>{PRINCIPAL_INFO.currentRole}</strong>
                </p>
                <p className="cv-institution">
                  {PRINCIPAL_INFO.institution}
                </p>
                <p className="cv-campus">
                  {PRINCIPAL_INFO.campus}
                </p>
              </div>

              <div className="cv-header-portrait">
                <img
                  src={PRINCIPAL_INFO.portraitUrl}
                  alt={PRINCIPAL_INFO.fullName}
                  className="cv-portrait-img"
                  width="110"
                  height="132"
                />
              </div>
            </div>

            {/* Contact & Professional Coordinates */}
            <div className="cv-coordinates-grid">
              <div className="coord-item">
                <Mail size={13} className="coord-icon" />
                <span>principaluces@jntuh.ac.in</span>
              </div>
              <div className="coord-item">
                <Phone size={13} className="coord-icon" />
                <span>+91 94403 76296 / 08455 200255</span>
              </div>
              <div className="coord-item">
                <MapPin size={13} className="coord-icon" />
                <span>Sultanpur (V), Pulkal (M), Sangareddy Dist., Telangana - 502273</span>
              </div>
              <div className="coord-item">
                <Globe size={13} className="coord-icon" />
                <span>jntuhces.ac.in/principal</span>
              </div>
            </div>

            <div className="cv-meta-strip">
              <div><strong>Academic Credentials:</strong> {PRINCIPAL_INFO.qualificationsSummary}</div>
              <div><strong>Fellowships &amp; Memberships:</strong> {PRINCIPAL_INFO.memberships}</div>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Executive Profile</h2>
            <p className="cv-text">
              Senior Professor of Computer Science &amp; Engineering and academic administrator with over 30 years
              of pedagogical, doctoral research, and governance experience in Indian technical higher education,
              including more than 17.5 years as Full Professor and Senior Professor (Higher Administrative Grade - HAG).
              Nationally acknowledged authority on Outcome-Based Education (OBE), Washington Accord accreditation
              alignment, and National Education Policy (NEP 2020) institutional governance. Renowned researcher in Artificial
              Intelligence, Machine Learning, Biometrics, Parallel String Matching Models, and Information Retrieval.
            </p>
          </section>

          {/* Key Scholarly & Administrative Indices */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Key Career Indices</h2>
            <div className="cv-stat-grid">
              {IMPACT_METRICS.map((metric) => (
                <div key={metric.id} className="cv-stat-cell">
                  <div className="stat-v">{metric.value}</div>
                  <div className="stat-l">{metric.label}</div>
                  <div className="stat-sub">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Qualifications */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Formal Academic Qualifications</h2>
            <div className="cv-entries-list">
              <div className="cv-entry">
                <div className="entry-year">2008</div>
                <div className="entry-content">
                  <strong>Ph.D. in Computer Science &amp; Engineering</strong>
                  <div className="entry-inst">Acharya Nagarjuna University, Guntur, Andhra Pradesh</div>
                  <div className="entry-note">Doctoral Dissertation: High Performance Parallel String Matching Models &amp; Algorithmic Information Retrieval</div>
                </div>
              </div>

              <div className="cv-entry">
                <div className="entry-year">2003</div>
                <div className="entry-content">
                  <strong>M.Tech. in Computer Science &amp; Engineering</strong>
                  <div className="entry-inst">Jawaharlal Nehru Technological University Hyderabad (JNTUH)</div>
                  <div className="entry-note">First Class with Distinction</div>
                </div>
              </div>

              <div className="cv-entry">
                <div className="entry-year">1996</div>
                <div className="entry-content">
                  <strong>Master of Computer Applications (MCA)</strong>
                  <div className="entry-inst">Osmania University, Hyderabad</div>
                  <div className="entry-note">First Class</div>
                </div>
              </div>

              <div className="cv-entry">
                <div className="entry-year">2015</div>
                <div className="entry-content">
                  <strong>CMI Level-5 Certificate in Educational Leadership &amp; Management</strong>
                  <div className="entry-inst">Chartered Management Institute (UK) &amp; Dudley College, London</div>
                  <div className="entry-note">Under the UKIERI (UK-India Education and Research Initiative) — MHRD, AICTE</div>
                </div>
              </div>
            </div>
          </section>

          {/* Administrative Leadership & Institutional Governance */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Administrative Leadership Positions</h2>
            <ul className="cv-bullets">
              <li><strong>Principal</strong>, JNTUH University College of Engineering Sultanpur, Sangareddy (October 2025 – Present)</li>
              <li><strong>Principal</strong>, JNTUH University College of Engineering Jagtial, Karimnagar (April 2025 – October 2025)</li>
              <li><strong>Senior Professor (HAG Cadre)</strong>, JNTU Hyderabad (Conferred July 2020 – Present)</li>
              <li><strong>Vice Principal</strong>, JNTUH College of Engineering Jagtial (2016 – 2021)</li>
              <li><strong>IQAC Coordinator</strong>, JNTUH College of Engineering Jagtial (2016 – 2019)</li>
              <li><strong>Head, Department of Computer Science &amp; Engineering</strong>, JNTUH CEJ (2011 – 2015)</li>
              <li><strong>NBA Institutional Coordinator &amp; Director of MCA</strong>, Gokaraju Rangaraju Institute of Engineering &amp; Technology (2008 – 2010)</li>
              <li><strong>NPTEL Local Chapter Single Point of Contact (SPOC)</strong>, JNTUH CEJ Chapter #1363 (2016 – Oct 2025)</li>
              <li><strong>Governing Body Member</strong> across 9 premier engineering colleges, guiding academic councils and boards of studies</li>
            </ul>
          </section>

          {/* Research & Intellectual Property */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Research Specializations &amp; Intellectual Property</h2>
            <div className="cv-subblock">
              <strong>Core Research Areas:</strong> Artificial Intelligence, Machine Learning, Parallel Processing, Information Retrieval, Multimodal Biometrics, Outcome-Based Education, Educational Auditing Systems.
            </div>
            <div className="cv-subblock">
              <strong>Patents Portfolio:</strong> 9 Total Patents (7 Indian Patents Published, 2 International Patents Granted):
              <ul className="cv-bullets compact">
                <li><em>Automated Land Encroachment Monitoring System</em> (Indian Patent, Published)</li>
                <li><em>Educational Institution Digital Auditing &amp; Compliance System</em> (Indian Patent, Published)</li>
                <li><em>Multimodal Biometric Recognition System using Deep Feature Fusion</em> (International Patent, Granted)</li>
                <li><em>Distributed Parallel Processing Framework for High-Throughput Genomic Data</em> (International Patent, Granted)</li>
              </ul>
            </div>
            <div className="cv-subblock">
              <strong>Doctoral Supervision:</strong> 17 Ph.D. scholars successfully awarded under JNTU Hyderabad; 5 active researchers currently guided.
            </div>
            <div className="cv-subblock">
              <strong>Publications &amp; Books:</strong> Author of 5 textbooks including <em>"Outcome Based Education — Implementation in Engineering Institutions"</em> and over 130 research papers published in SCI/Scopus indexed journals and IEEE conferences.
            </div>
          </section>

          {/* Selected Honors & National Distinctions */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Distinctions, Awards &amp; Honors</h2>
            <ul className="cv-bullets">
              <li><strong>Anna University National Award for Outstanding Academic Teacher</strong>, Conferred by the Indian Society for Technical Education (ISTE, 2025)</li>
              <li><strong>State Best Teacher Award</strong>, Conferred by the Government of Telangana (2020)</li>
              <li><strong>Bhishma Acharya National Award for Academic Leadership</strong>, Brainfeed (2022)</li>
              <li><strong>Uttam Acharya National Award</strong>, Indian Education Congress (2019)</li>
              <li><strong>Certificate of Appreciation</strong>, District Collectorate, Jagtial District, Telangana (2019)</li>
              <li><strong>ISTE Best Computer Science Teacher Award</strong>, AP &amp; Telangana Section (2014)</li>
              <li><strong>Young Scientist Fellowship</strong>, Tamil Nadu State Council for Science and Technology (TNSCST, 2014–2015)</li>
              <li><strong>CSIR Young Scientist Recognition</strong>, Council of Scientific &amp; Industrial Research, Government of India (2016)</li>
              <li><strong>Best Research Paper Award</strong>, 6th International Advance Computing Conference (IEEE / IACC 2016)</li>
            </ul>
          </section>

          {/* Professional Memberships */}
          <section className="cv-section">
            <h2 className="cv-section-heading">Professional Memberships &amp; Fellowships</h2>
            <ul className="cv-bullets compact">
              <li><strong>Fellow</strong>, Institution of Engineers (India) — FIE</li>
              <li><strong>Senior Member</strong>, Institute of Electrical and Electronics Engineers (IEEE)</li>
              <li><strong>Life Member</strong>, Indian Society for Technical Education (LMISTE)</li>
              <li><strong>Life Member</strong>, Institution of Electronics and Telecommunication Engineers (LMIETE)</li>
              <li><strong>Life Member</strong>, Computer Society of India (LMCSI)</li>
            </ul>
          </section>

          {/* Document Footer */}
          <footer className="cv-doc-footer">
            <div className="doc-footer-meta">
              Official Institutional Record · JNTUH University College of Engineering Sultanpur<br />
              Institutional URL: jntuhces.ac.in/principal
            </div>
          </footer>
        </div>
      </div>

      <style>{`
        .cv-backdrop-layer {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(18, 14, 28, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .cv-modal-container {
          background-color: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          width: 100%;
          max-width: 900px;
          max-height: 92vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          animation: cvModalFadeIn 0.25s ease-out;
        }

        @keyframes cvModalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .cv-modal-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          border-bottom: 1px solid var(--color-border);
          background-color: #FAF9FD;
          position: sticky;
          top: 0;
          z-index: 10;
          gap: 0.75rem;
        }

        .cv-bar-title-group {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .cv-bar-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text);
          margin: 0;
          line-height: 1;
        }

        .cv-bar-sub {
          font-size: 0.825rem;
          color: var(--color-violet);
          font-weight: 500;
        }

        .cv-bar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-bar-action {
          padding: 0.45rem 0.95rem;
          font-size: 0.8rem;
          gap: 6px;
        }

        .modal-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: #FFFFFF;
          color: var(--color-text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-left: 0.25rem;
        }

        .modal-close-btn:hover {
          background: var(--color-lavender-soft);
          color: var(--color-violet);
        }

        /* Printable Document Body */
        .cv-document-paper {
          padding: clamp(1.75rem, 4vw, 3rem);
          color: #262333;
          line-height: 1.6;
          background: #FFFFFF;
        }

        .cv-doc-header {
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
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
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 0.25rem;
          color: #171520;
        }

        .cv-designation {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-violet);
          margin-bottom: 0.25rem;
        }

        .cv-current-role {
          font-size: 0.95rem;
          color: #262333;
          margin-bottom: 0.2rem;
        }

        .cv-institution, .cv-campus {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: 0;
          line-height: 1.4;
        }

        .cv-header-portrait {
          flex-shrink: 0;
        }

        .cv-portrait-img {
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          object-fit: cover;
          display: block;
        }

        .cv-coordinates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.5rem 1rem;
          background: #F8F7FC;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: #4A4658;
          margin-bottom: 0.85rem;
        }

        .coord-item {
          display: flex;
          align-items: center;
          gap: 7px;
          word-break: break-word;
        }

        .coord-icon {
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .cv-meta-strip {
          font-size: 0.825rem;
          color: #4A4658;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 0.25rem;
        }

        .cv-section {
          margin-bottom: 1.6rem;
        }

        .cv-section-heading {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: #1E1B29;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.35rem;
          margin-bottom: 0.85rem;
          letter-spacing: -0.01em;
        }

        .cv-text {
          font-size: 0.9rem;
          color: #383445;
          line-height: 1.65;
          margin-bottom: 0;
        }

        .cv-stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .cv-stat-cell {
          background: #FAF9FD;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          text-align: center;
        }

        .stat-v {
          font-family: var(--font-display);
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--color-violet);
          line-height: 1;
          margin-bottom: 0.2rem;
        }

        .stat-l {
          font-size: 0.76rem;
          font-weight: 600;
          color: #262333;
          line-height: 1.25;
        }

        .stat-sub {
          font-size: 0.68rem;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }

        .cv-entries-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cv-entry {
          display: flex;
          gap: 1.25rem;
          font-size: 0.88rem;
        }

        .entry-year {
          width: 50px;
          font-weight: 700;
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .entry-content strong {
          color: #1E1B29;
        }

        .entry-inst {
          color: #4A4658;
          font-size: 0.84rem;
        }

        .entry-note {
          color: var(--color-text-secondary);
          font-size: 0.8rem;
          font-style: italic;
        }

        .cv-bullets {
          margin-left: 1.25rem;
          font-size: 0.88rem;
          color: #383445;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .cv-bullets.compact {
          gap: 0.3rem;
        }

        .cv-subblock {
          font-size: 0.88rem;
          color: #383445;
          margin-bottom: 0.65rem;
          line-height: 1.55;
        }

        .cv-btn-short {
          display: none;
        }

        .cv-btn-full {
          display: inline;
        }

        /* Mobile Responsive Alignment & Layout */
        @media (max-width: 640px) {
          .cv-backdrop-layer {
            padding: 0.5rem !important;
          }

          .cv-modal-container {
            max-height: 96vh;
            border-radius: var(--radius-md);
          }

          .cv-modal-bar {
            padding: 0.75rem 0.85rem;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .cv-bar-title-group {
            flex: 1 1 auto;
            min-width: 0;
          }

          .cv-bar-heading {
            font-size: 1rem;
            white-space: nowrap;
          }

          .cv-bar-sub {
            display: none;
          }

          .cv-bar-actions {
            gap: 0.35rem;
          }

          .btn-bar-action {
            padding: 0.35rem 0.65rem;
            font-size: 0.75rem;
            gap: 4px;
          }

          .cv-btn-full {
            display: none;
          }

          .cv-btn-short {
            display: inline;
          }

          .modal-close-btn {
            width: 30px;
            height: 30px;
            margin-left: 0;
          }

          .cv-document-paper {
            padding: 1.15rem 0.95rem 1.75rem;
          }

          .cv-header-grid {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 0.85rem;
          }

          .cv-portrait-img {
            width: 85px;
            height: 102px;
          }

          .cv-name {
            font-size: 1.45rem;
            line-height: 1.2;
          }

          .cv-designation {
            font-size: 0.88rem;
          }

          .cv-current-role {
            font-size: 0.84rem;
          }

          .cv-institution, .cv-campus {
            font-size: 0.78rem;
          }

          .cv-coordinates-grid {
            grid-template-columns: 1fr;
            gap: 0.45rem;
            padding: 0.75rem 0.85rem;
            font-size: 0.76rem;
          }

          .cv-stat-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.45rem;
          }

          .cv-stat-cell {
            padding: 0.55rem;
          }

          .stat-v {
            font-size: 1.35rem;
          }

          .stat-l {
            font-size: 0.7rem;
          }

          .cv-entry {
            gap: 0.75rem;
            font-size: 0.82rem;
          }

          .entry-year {
            width: 44px;
            font-size: 0.8rem;
          }

          .cv-section-heading {
            font-size: 1.1rem;
            padding-bottom: 0.25rem;
            margin-bottom: 0.65rem;
          }

          .cv-text {
            font-size: 0.84rem;
          }

          .cv-bullets {
            margin-left: 1rem;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </div>,
    document.body
  );
};
