import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { PRINCIPAL_INFO } from '../data/academicData';

interface NavigationProps {
  onOpenCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { href: '#overview', label: 'Overview', id: 'overview' },
    { href: '#biography', label: 'Biography', id: 'biography' },
    { href: '#journey', label: 'Journey', id: 'journey' },
    { href: '#recognition', label: 'Recognition', id: 'recognition' },
    { href: '#research', label: 'Research', id: 'research' },
    { href: '#publications', label: 'Publications', id: 'publications' },
    { href: '#leadership', label: 'Leadership', id: 'leadership' },
    { href: '#outreach', label: 'Outreach', id: 'outreach' },
    { href: '#vision', label: 'Vision', id: 'vision' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`nav-header ${isScrolled ? 'nav-header-scrolled' : ''}`}
        role="banner"
      >
        <div className="site-container nav-inner">
          <a
            href="#hero"
            className="nav-brand"
            onClick={(e) => handleLinkClick(e, '#hero')}
            aria-label="Dr. S. Viswanadha Raju Academic Legacy Home"
          >
            <span className="brand-title">DR. S. VISWANADHA RAJU</span>
            <span className="brand-descriptor">Academic Legacy · Senior Professor & Principal</span>
          </a>

          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-secondary btn-cv"
              onClick={onOpenCV}
              aria-label="View Academic Curriculum Vitae Summary"
            >
              <FileText size={15} aria-hidden="true" />
              <span>Academic CV</span>
            </button>

            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-nav-header">
          <div>
            <div className="brand-title">DR. S. VISWANADHA RAJU</div>
            <div className="brand-descriptor">Academic Legacy</div>
          </div>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile menu links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCV();
            }}
          >
            <FileText size={16} />
            <span>View Academic CV</span>
          </button>
          <p className="mobile-nav-meta">
            Official Principal Profile · JNTUH UCE Sultanpur
          </p>
        </div>
      </div>

      <style>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          transition: background-color var(--transition-normal), backdrop-filter var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .nav-header-scrolled {
          background-color: rgba(245, 243, 250, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: var(--color-border);
          box-shadow: 0 4px 20px rgba(38, 35, 51, 0.04);
        }

        .nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-md);
        }

        .nav-brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: var(--color-text);
        }

        .brand-title {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-text);
          line-height: 1.2;
        }

        .brand-descriptor {
          font-size: 0.725rem;
          color: var(--color-text-secondary);
          letter-spacing: 0.02em;
        }

        .nav-desktop {
          display: none;
        }

        @media (min-width: 1024px) {
          .nav-desktop {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 1.35rem;
        }

        .nav-link {
          font-size: 0.865rem;
          color: var(--color-text-secondary);
          font-weight: 450;
          padding: 6px 2px;
          position: relative;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-text);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-violet);
          border-radius: var(--radius-pill);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .btn-cv {
          padding: 0.55rem 1.15rem;
          font-size: 0.815rem;
        }

        .nav-mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 8px;
          color: var(--color-text);
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .nav-mobile-toggle {
            display: none;
          }
        }

        /* Mobile drawer */
        .mobile-nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(38, 35, 51, 0.45);
          backdrop-filter: blur(4px);
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-normal);
        }

        .mobile-nav-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(85vw, 360px);
          background-color: var(--color-surface);
          z-index: 1100;
          transform: translateX(100%);
          transition: transform var(--transition-smooth);
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 32px rgba(38, 35, 51, 0.15);
          padding: var(--space-lg);
        }

        .mobile-nav-drawer.open {
          transform: translateX(0);
        }

        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: var(--space-md);
          border-bottom: 1px solid var(--color-border);
          margin-bottom: var(--space-md);
        }

        .mobile-nav-close {
          background: transparent;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-nav-links {
          flex: 1;
          overflow-y: auto;
        }

        .mobile-nav-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          color: var(--color-text);
          text-decoration: none;
          font-size: 0.925rem;
          font-weight: 500;
          transition: background-color var(--transition-fast);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background-color: var(--color-lavender-soft);
          color: var(--color-violet);
        }

        .mobile-nav-footer {
          padding-top: var(--space-md);
          border-top: 1px solid var(--color-border);
        }

        .mobile-nav-meta {
          font-size: 0.725rem;
          color: var(--color-text-secondary);
          text-align: center;
          margin-top: var(--space-sm);
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};
