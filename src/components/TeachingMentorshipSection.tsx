import React from 'react';
import { Users, GraduationCap, Award } from 'lucide-react';
import { EditorialFeatureGrid } from './grids/GridSystem';

export const TeachingMentorshipSection: React.FC = () => {
  return (
    <section id="mentorship" className="editorial-section" aria-label="Teaching, Mentorship and Pedagogical Impact">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">08</span>
            <span>Teaching &amp; Mentorship</span>
          </div>
          <h2 className="section-title">
            Nurturing Inquisitive Minds &amp; Doctoral Scholars
          </h2>
          <p className="section-subtitle">
            A pedagogical legacy rooted in outcome-based student mastery, doctoral research supervision,
            and continuous faculty development across Indian technical universities.
          </p>
        </div>

        <EditorialFeatureGrid
          main={
            <div className="mentorship-card highlight-card">
              <div className="card-badge-row">
                <span className="badge">Research Directorate</span>
                <span className="badge">Doctoral Program</span>
              </div>

              <div className="phd-stat-hero">
                <span className="phd-num">17</span>
                <div className="phd-stat-meta">
                  <div className="phd-title">Ph.D. Degrees Conferred</div>
                  <div className="phd-sub">Scholars successfully supervised to doctoral completion</div>
                </div>
              </div>

              <div className="ongoing-guidance-bar">
                <Users size={16} className="bar-icon" aria-hidden="true" />
                <span><strong>5 Active Doctoral Researchers</strong> currently guided in advanced AI, biometrics, and distributed data systems.</span>
              </div>

              <p className="mentorship-desc">
                Doctoral research supervised under Dr. Raju spans fundamental algorithmic problems in
                parallel pattern matching, multithreaded genomics sequencing, cancelable biometric templates,
                and machine learning-driven clinical decision systems. His scholars now serve as professors,
                research scientists, and technology executives across leading global universities and enterprises.
              </p>
            </div>
          }
          side={
            <>
              {/* Outcome-Based Curriculum Modernization */}
              <div className="mentorship-card">
                <div className="card-icon-header">
                  <GraduationCap size={22} className="card-icon" />
                  <h3 className="card-title">Outcome-Based Pedagogy &amp; NEP 2020</h3>
                </div>
                <p className="card-text">
                  Pioneered the practical transition from passive textbook delivery to measurable competency mastery.
                  Dr. Raju formulated systemic rubric attainment methodologies ensuring engineering graduates attain
                  critical thinking, complex problem-solving abilities, and ethical professional responsibility.
                </p>
                <ul className="mentorship-bullets">
                  <li>Direct and indirect assessment loops benchmarking student Course Outcomes (COs)</li>
                  <li>Credit restructuring and interdisciplinary electives aligned with NEP 2020 goals</li>
                  <li>Hands-on laboratory design prioritizing algorithmic implementation over rote syntax</li>
                </ul>
              </div>

              {/* Faculty Empowerment & Capacity Building */}
              <div className="mentorship-card">
                <div className="card-icon-header">
                  <Award size={22} className="card-icon" />
                  <h3 className="card-title">Faculty Development Leadership</h3>
                </div>
                <p className="card-text">
                  Recognizing that institutional excellence requires empowered educators, Dr. Raju has
                  trained thousands of college teachers as resource persons for NITTTR, AICTE ATAL academies,
                  and university Faculty Development Programmes (FDPs).
                </p>
                <ul className="mentorship-bullets">
                  <li>Conducted over 700 pedagogical masterclasses and accreditation seminars</li>
                  <li>UKIERI-certified leadership training applied to academic department head empowerment</li>
                  <li>Integration of SWAYAM-NPTEL MOOCs for faculty skill enhancement and career advancement</li>
                </ul>
              </div>
            </>
          }
        />
      </div>

      <style>{`
        .mentorship-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 2.5vw, 1.85rem);
        }

        @media (min-width: 900px) {
          .mentorship-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
          .highlight-card {
            grid-row: span 2;
          }
        }

        .mentorship-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .mentorship-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .highlight-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FAF8FD 100%);
          border-color: var(--color-border);
        }

        .card-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .phd-stat-hero {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .phd-num {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 6vw, 5rem);
          font-weight: 700;
          color: var(--color-violet);
          line-height: 1;
        }

        .phd-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 2px;
        }

        .phd-sub {
          font-size: 0.825rem;
          color: var(--color-text-secondary);
        }

        .ongoing-guidance-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--color-lavender-soft);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.85rem 1.15rem;
          font-size: 0.85rem;
          color: var(--color-text);
          margin-bottom: 1.5rem;
        }

        .bar-icon {
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .mentorship-desc {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 0;
        }

        .card-icon-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .card-icon {
          color: var(--color-violet);
        }

        .card-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0;
        }

        .card-text {
          font-size: 0.9rem;
          color: var(--color-text);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .mentorship-bullets {
          margin-left: 1.25rem;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
};
