import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Award, ShieldCheck, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { lockBackgroundScroll, unlockBackgroundScroll } from '../utils/scrollLock';
import { AwardItem } from '../types';

interface CertificateModalProps {
  award: AwardItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ award, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (award) {
      lockBackgroundScroll();
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      unlockBackgroundScroll();
    }

    return () => {
      if (award) {
        unlockBackgroundScroll();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [award, onClose]);

  if (!award || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-container"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="award-modal-title"
      >
        <div className="modal-header">
          <div className="modal-header-badge">
            <span className="badge badge-verified">
              <CheckCircle2 size={12} aria-hidden="true" />
              {award.verification}
            </span>
            <span className={`badge ${award.level === 'National' ? 'badge-national' : ''}`}>
              {award.level} Distinction
            </span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close Award Dossier Dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="award-dossier-visual">
            <div className="dossier-seal">
              <Award size={36} aria-hidden="true" />
            </div>
            <div className="dossier-cert-header">
              <span className="dossier-cert-label">OFFICIAL ACADEMIC CITATION</span>
              <span className="dossier-cert-year">Conferred in {award.year}</span>
            </div>
          </div>

          <h3 id="award-modal-title" className="dossier-title">
            {award.title}
          </h3>

          <div className="dossier-body-meta">
            <Building size={16} aria-hidden="true" />
            <span>Conferred by: <strong>{award.awardingBody}</strong></span>
          </div>

          <div className="dossier-narrative-box">
            <h4 className="dossier-subheading">Official Award Citation</h4>
            <p className="dossier-citation-text">{award.description}</p>
          </div>

          <div className="dossier-significance-box">
            <h4 className="dossier-subheading">National / Institutional Significance</h4>
            <p className="dossier-significance-text">{award.significance}</p>
          </div>

          {award.certificateNote && (
            <div className="dossier-note-box">
              <span className="note-label">Verification Note:</span>
              <p className="note-text">{award.certificateNote}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="modal-footer-source">
            <ShieldCheck size={14} className="source-check-icon" aria-hidden="true" />
            <span>Document verified against official JNTUH Principal Profile records</span>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close Dossier
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(38, 35, 51, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(0.75rem, 3vw, 1.5rem);
          animation: fadeIn 200ms ease;
        }

        .modal-container {
          background-color: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-xl);
          width: 100%;
          max-width: 620px;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          animation: scaleUp 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem clamp(1rem, 3vw, 1.75rem);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .modal-header-badge {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-close-btn {
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--color-text);
          border-color: var(--color-border-hover);
          background-color: var(--color-lavender-soft);
        }

        .modal-body {
          padding: clamp(1rem, 3.5vw, 1.75rem);
        }

        .award-dossier-visual {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(135deg, #FAF8FD 0%, #FFFFFF 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
        }

        .dossier-seal {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dossier-cert-header {
          display: flex;
          flex-direction: column;
        }

        .dossier-cert-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-violet);
        }

        .dossier-cert-year {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .dossier-title {
          font-family: var(--font-display);
          font-size: 1.55rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.25;
          margin-bottom: 0.5rem;
        }

        .dossier-body-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.885rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.25rem;
        }

        .dossier-narrative-box,
        .dossier-significance-box,
        .dossier-note-box {
          background-color: var(--color-lavender-tint);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 1rem;
        }

        .dossier-subheading {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-violet);
          margin-bottom: 0.4rem;
        }

        .dossier-citation-text,
        .dossier-significance-text,
        .note-text {
          font-size: 0.885rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .note-label {
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #1E7E55;
          margin-bottom: 2px;
          display: block;
        }

        .modal-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          border-top: 1px solid var(--color-border-subtle);
          background-color: #FAF9FD;
          gap: 1rem;
        }

        .modal-footer-source {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .source-check-icon {
          color: #1E7E55;
        }
      `}</style>
    </div>,
    document.body
  );
};
