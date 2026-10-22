import React, { useState, useMemo } from 'react';
import { PUBLICATIONS_DATA, PRINCIPAL_INFO } from '../data/academicData';
import { Search, BookOpen, ExternalLink, Copy, Check, Filter, Calendar, Book } from 'lucide-react';
import { PublicationItem } from '../types';

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS_DATA.filter((pub) => {
      // Type filter
      if (selectedType !== 'All') {
        if (selectedType === 'Books & Chapters') {
          if (pub.type !== 'Book' && pub.type !== 'Book Chapter') return false;
        } else if (pub.type !== selectedType) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && pub.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pub.title.toLowerCase().includes(query);
        const matchesAuthors = pub.authors.some(a => a.toLowerCase().includes(query));
        const matchesVenue = pub.venue.toLowerCase().includes(query);
        const matchesAbstract = pub.abstract ? pub.abstract.toLowerCase().includes(query) : false;
        if (!matchesTitle && !matchesAuthors && !matchesVenue && !matchesAbstract) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedCategory]);

  const copyCitation = (pub: PublicationItem) => {
    const citation = `${pub.authors.join(', ')} (${pub.year}). "${pub.title}." ${pub.venue}${pub.isbnOrIssn ? `, ${pub.isbnOrIssn}` : ''}.`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <section id="publications" className="editorial-section section-alt" aria-label="Books and Searchable Publication Directory">
      <div className="site-container">
        <div className="section-header">
          <div className="section-label">
            <span className="section-number">07</span>
            <span>Scholarly Output</span>
          </div>
          <h2 className="section-title">
            Searchable Publication Directory
          </h2>
          <p className="section-subtitle">
            Curated repository of authored books, chapters, SCI/Scopus journal papers,
            and conference proceedings from three decades of research.
          </p>
        </div>

        {/* Featured Book Showcase: Outcome Based Education */}
        <div className="featured-book-banner">
          <div className="book-visual">
            <div className="book-spine-art">
              <div className="book-title-spine">OUTCOME BASED EDUCATION</div>
              <div className="book-author-spine">DR. S. VISWANADHA RAJU</div>
            </div>
          </div>
          <div className="book-details">
            <div className="book-badges">
              <span className="badge badge-national">Featured Authored Book</span>
              <span className="badge">Notion Press · 2021</span>
            </div>
            <h3 className="featured-book-title">
              Outcome Based Education — Implementation in Engineering Institutions
            </h3>
            <p className="featured-book-author">
              Authored by <strong>Dr. S. Viswanadha Raju</strong> · ISBN 9798886841732
            </p>
            <p className="featured-book-description">
              A definitive practical handbook for engineering deans, department heads, and faculty members
              across India. Provides exhaustive formulas, operational matrices for CO-PO-PSO attainment calculation,
              continuous assessment rubrics, and compliance frameworks for NBA Washington Accord Tier-I/II accreditation.
            </p>
            <div className="featured-book-actions">
              <a
                href="https://notionpress.com/read/outcome-based-education"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Read &amp; Order on Notion Press</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a
                href="https://nluassam.ac.in/docs/pub/Outcome%20based%20Education%20and%20Research.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>NLU Assam Research Monograph (PDF)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search & Filtering Controls */}
        <div className="pub-controls-wrapper">
          <div className="pub-search-bar">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by publication title, co-author, journal, or topic..."
              className="pub-search-input"
              aria-label="Search publications"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ×
              </button>
            )}
          </div>

          <div className="pub-filters-row">
            {/* Type Filter Tabs */}
            <div className="pub-type-tabs" role="tablist" aria-label="Publication Type Filters">
              {['All', 'Books & Chapters', 'Journal', 'Conference'].map((type) => (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={selectedType === type}
                  className={`type-tab-btn ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type === 'Journal' ? 'Journals' : type === 'Conference' ? 'Conferences' : type}
                </button>
              ))}
            </div>

            {/* Category Dropdown Filter */}
            <div className="pub-cat-dropdown">
              <label htmlFor="pub-cat-select" className="sr-only">Filter by Research Domain</label>
              <select
                id="pub-cat-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="cat-select"
              >
                <option value="All">All Research Themes</option>
                <option value="OBE & Education">OBE &amp; Engineering Education</option>
                <option value="AI & ML">AI &amp; Machine Learning</option>
                <option value="Computer Vision & Biometrics">Computer Vision &amp; Biometrics</option>
                <option value="Algorithms & Data">Algorithms &amp; Parallel String Matching</option>
                <option value="Cloud & Systems">Cloud Computing &amp; Systems</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter & Google Scholar Callout */}
        <div className="pub-results-meta">
          <span className="results-count">
            Showing <strong>{filteredPublications.length}</strong> publications
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          <a
            href={PRINCIPAL_INFO.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="scholar-direct-link"
          >
            <span>Complete 130+ Publications on Google Scholar</span>
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Publication Cards List */}
        {filteredPublications.length === 0 ? (
          <div className="pub-empty-state">
            <BookOpen size={40} className="empty-icon" aria-hidden="true" />
            <h4 className="empty-title">No Publications Match Your Criteria</h4>
            <p className="empty-desc">
              Try adjusting your keywords or clearing selected filters to explore Dr. Raju's catalog.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setSelectedCategory('All');
              }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="publications-list">
            {filteredPublications.map((pub) => (
              <article key={pub.id} className="pub-card">
                <div className="pub-card-header">
                  <div className="pub-badge-cluster">
                    <span className="badge">{pub.type}</span>
                    <span className="pub-cat-tag">{pub.category}</span>
                  </div>
                  <span className="pub-year">
                    <Calendar size={12} aria-hidden="true" />
                    {pub.year}
                  </span>
                </div>

                <h3 className="pub-title">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-title-link"
                    >
                      {pub.title}
                      <ExternalLink size={14} className="title-link-icon" aria-hidden="true" />
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                <div className="pub-authors">
                  {pub.authors.join(', ')}
                </div>

                <div className="pub-venue">
                  <em>{pub.venue}</em>
                  {pub.isbnOrIssn && <span className="pub-isbn"> · {pub.isbnOrIssn}</span>}
                </div>

                {pub.abstract && (
                  <p className="pub-abstract">
                    {pub.abstract}
                  </p>
                )}

                <div className="pub-footer">
                  <button
                    type="button"
                    className="copy-cite-btn"
                    onClick={() => copyCitation(pub)}
                    aria-label={`Copy citation for ${pub.title}`}
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check size={13} className="copy-icon-success" aria-hidden="true" />
                        <span>Citation Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} aria-hidden="true" />
                        <span>Copy Citation (APA)</span>
                      </>
                    )}
                  </button>

                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-external-link"
                    >
                      <span>Official Record / DOI</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .featured-book-banner {
          display: grid;
          grid-template-columns: 1fr;
          background: linear-gradient(135deg, #FAF8FD 0%, #FFFFFF 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          margin-bottom: var(--space-2xl);
          gap: 2rem;
          box-shadow: var(--shadow-sm);
        }

        @media (min-width: 820px) {
          .featured-book-banner {
            grid-template-columns: 200px 1fr;
            align-items: center;
          }
        }

        .book-visual {
          display: flex;
          justify-content: center;
        }

        .book-spine-art {
          width: 170px;
          height: 230px;
          background: linear-gradient(145deg, #75639F 0%, #4A3A6E 100%);
          border-radius: 4px 12px 12px 4px;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #FFFFFF;
          box-shadow: 8px 12px 28px rgba(38, 35, 51, 0.2);
          border-left: 6px solid #362953;
          position: relative;
        }

        .book-title-spine {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: 0.05em;
        }

        .book-author-spine {
          font-size: 0.725rem;
          letter-spacing: 0.08em;
          color: var(--color-lavender-light);
          font-weight: 500;
        }

        .book-details {
          display: flex;
          flex-direction: column;
        }

        .book-badges {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .featured-book-title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.25;
          margin-bottom: 0.4rem;
        }

        .featured-book-author {
          font-size: 0.865rem;
          color: var(--color-violet);
          margin-bottom: 0.85rem;
        }

        .featured-book-description {
          font-size: 0.925rem;
          color: var(--color-text);
          line-height: 1.65;
          margin-bottom: 1.35rem;
        }

        .featured-book-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        /* Search and controls */
        .pub-controls-wrapper {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .pub-search-bar {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          color: var(--color-text-muted);
          pointer-events: none;
        }

        .pub-search-input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 2.75rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text);
          background-color: var(--color-lavender-tint);
          outline: none;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .pub-search-input:focus {
          border-color: var(--color-violet);
          box-shadow: var(--shadow-focus);
          background-color: #FFFFFF;
        }

        .clear-search-btn {
          position: absolute;
          right: 14px;
          background: transparent;
          border: none;
          font-size: 1.25rem;
          color: var(--color-text-muted);
          cursor: pointer;
        }

        .pub-filters-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .pub-type-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .type-tab-btn {
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          padding: 0.4rem 1rem;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .type-tab-btn:hover {
          background-color: var(--color-lavender-tint);
          color: var(--color-text);
        }

        .type-tab-btn.active {
          background-color: var(--color-text);
          color: #FFFFFF;
          border-color: var(--color-text);
        }

        .cat-select {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--color-text);
          background-color: #FFFFFF;
          outline: none;
          cursor: pointer;
        }

        .pub-results-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .scholar-direct-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
          color: var(--color-violet);
        }

        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pub-card {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1.75rem;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .pub-card:hover {
          border-color: var(--color-violet-light);
          box-shadow: var(--shadow-sm);
        }

        .pub-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }

        .pub-badge-cluster {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pub-cat-tag {
          font-size: 0.725rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .pub-year {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .pub-title {
          font-family: var(--font-display);
          font-size: 1.28rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.35;
          margin-bottom: 0.45rem;
        }

        .pub-title-link {
          color: var(--color-text);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .pub-title-link:hover {
          color: var(--color-violet);
        }

        .title-link-icon {
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .pub-authors {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.35rem;
          font-weight: 450;
        }

        .pub-venue {
          font-size: 0.825rem;
          color: var(--color-violet);
          margin-bottom: 0.75rem;
        }

        .pub-isbn {
          color: var(--color-text-muted);
        }

        .pub-abstract {
          font-size: 0.85rem;
          color: var(--color-text);
          line-height: 1.6;
          margin-bottom: 1rem;
          background-color: var(--color-lavender-tint);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
        }

        .pub-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.75rem;
        }

        .copy-cite-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-pill);
          padding: 4px 10px;
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .copy-cite-btn:hover {
          background-color: var(--color-lavender-soft);
          color: var(--color-text);
        }

        .copy-icon-success {
          color: #1E7E55;
        }

        .pub-external-link {
          font-weight: 500;
          color: var(--color-violet);
        }

        .pub-empty-state {
          background-color: #FFFFFF;
          border: 1px dashed var(--color-border);
          border-radius: var(--radius-lg);
          padding: 3.5rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .empty-icon {
          color: var(--color-text-muted);
        }

        .empty-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .empty-desc {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          max-width: 480px;
        }
      `}</style>
    </section>
  );
};
