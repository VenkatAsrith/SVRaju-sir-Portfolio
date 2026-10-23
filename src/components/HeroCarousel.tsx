import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Maximize2,
  X,
  MapPin,
  Calendar
} from 'lucide-react';
import { HERO_CAROUSEL_SLIDES } from '../data/carouselData';
import { lockBackgroundScroll, unlockBackgroundScroll } from '../utils/scrollLock';
import { ArchiveTimelineGrid } from './grids/GridSystem';

interface HeroCarouselProps {
  autoPlayInterval?: number; // default 3000ms
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  autoPlayInterval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const currentSlide = HERO_CAROUSEL_SLIDES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_CAROUSEL_SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_CAROUSEL_SLIDES.length) % HERO_CAROUSEL_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Lightbox Navigation
  const goToLightboxPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + HERO_CAROUSEL_SLIDES.length) % HERO_CAROUSEL_SLIDES.length));
  }, []);

  const goToLightboxNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % HERO_CAROUSEL_SLIDES.length));
  }, []);

  // 3-second Auto-play interval for inline carousel
  useEffect(() => {
    if (isPlaying && !isHovered && lightboxIndex === null) {
      timerRef.current = window.setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, isHovered, lightboxIndex, autoPlayInterval, goToNext, currentIndex]);

  // Background Scroll Locking when Lightbox opens
  useEffect(() => {
    if (lightboxIndex !== null) {
      lockBackgroundScroll();
    } else {
      unlockBackgroundScroll();
    }

    return () => {
      if (lightboxIndex !== null) {
        unlockBackgroundScroll();
      }
    };
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          setLightboxIndex(null);
          return;
        }
        if (e.key === 'ArrowRight') {
          goToLightboxNext();
          return;
        }
        if (e.key === 'ArrowLeft') {
          goToLightboxPrev();
          return;
        }
        return;
      }

      // Inline carousel keyboard controls
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToLightboxNext, goToLightboxPrev, lightboxIndex]);

  // Touch Swipe Handlers for Mobile Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goToLightboxNext();
      } else {
        goToLightboxPrev();
      }
    }
  };

  const activeLightboxSlide = lightboxIndex !== null ? HERO_CAROUSEL_SLIDES[lightboxIndex] : null;

  return (
    <div
      className="hero-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Academic Conclaves and Archival Photography"
    >
      {/* Restrained Top Status Bar */}
      <div className="carousel-top-bar">
        <div className="carousel-meta-indicator">
          <span className="carousel-category-tag">{currentSlide.category}</span>
          <span className="carousel-sep">·</span>
          <span className="carousel-slide-venue">{currentSlide.venue}</span>
        </div>

        <div className="carousel-controls">
          <span className="slide-counter" aria-live="polite">
            <span className="counter-current">{currentIndex + 1}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{HERO_CAROUSEL_SLIDES.length}</span>
          </span>

          <button
            type="button"
            className="carousel-control-btn"
            onClick={() => setIsPlaying((p) => !p)}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          </button>
        </div>
      </div>

      {/* Main Photographic Stage */}
      <div className="carousel-stage">
        {HERO_CAROUSEL_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`carousel-slide ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Authentic photograph */}
              <div className="slide-image-wrap">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {/* Subtle gradient for contrast only at bottom */}
                <div className="slide-scrim" />
              </div>

              {/* Restrained editorial text appearing over bottom of photograph */}
              <div className="slide-caption-wrap">
                <div className="slide-caption-content">
                  <h3 className="slide-title">
                    {slide.title}
                  </h3>
                  <p className="slide-description">
                    {slide.description}
                  </p>
                  <div className="slide-subtext">
                    <span>{slide.venue}</span>
                    <span className="subtext-bullet">•</span>
                    <span>{slide.year}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="slide-enlarge-btn"
                  onClick={() => setLightboxIndex(idx)}
                  title="View full-screen photograph with navigation"
                  aria-label="Enlarge archival photograph"
                >
                  <Maximize2 size={15} />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>
          );
        })}

        {/* Minimal Navigation Chevrons */}
        <button
          type="button"
          className="carousel-nav-btn prev-btn"
          onClick={goToPrev}
          aria-label="Previous photograph"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          className="carousel-nav-btn next-btn"
          onClick={goToNext}
          aria-label="Next photograph"
        >
          <ChevronRight size={20} />
        </button>

        {/* 3-Second Cycle Progress Line */}
        <div className="carousel-progress-track">
          <div
            key={`${currentIndex}-${isPlaying && !isHovered}`}
            className={`carousel-progress-fill ${isPlaying && !isHovered ? 'animate-progress' : ''}`}
            style={{ animationDuration: `${autoPlayInterval}ms` }}
          />
        </div>
      </div>

      {/* Clean Minimalist Thumbnail Selector Strip (GRID D) */}
      <ArchiveTimelineGrid className="carousel-thumbs-row" role="tablist" aria-label="Select photograph">
        {HERO_CAROUSEL_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`thumb-button ${isActive ? 'is-active-thumb' : ''}`}
              onClick={() => goToSlide(idx)}
              title={slide.title}
            >
              <div className="thumb-crop">
                <img
                  src={slide.image}
                  alt=""
                  className="thumb-crop-img"
                  loading="lazy"
                />
              </div>
              <div className="thumb-info">
                <span className="thumb-idx">0{idx + 1}</span>
                <span className="thumb-label">{slide.title}</span>
              </div>
            </button>
          );
        })}
      </ArchiveTimelineGrid>

      {/* Lightbox Modal with Full-Screen Portal above Sticky Header */}
      {typeof document !== 'undefined' && lightboxIndex !== null && activeLightboxSlide && createPortal(
        <div
          className="modal-backdrop archival-lightbox-backdrop"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-photo-title"
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div className="lightbox-top-toolbar">
              <div className="lightbox-status-left">
                <span className="lightbox-category-tag">{activeLightboxSlide.category}</span>
                <span className="lightbox-counter-badge">
                  {lightboxIndex + 1} of {HERO_CAROUSEL_SLIDES.length}
                </span>
              </div>

              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close image viewer"
                title="Close viewer (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Central Stage with Prominent Left and Right Navigation Arrows */}
            <div className="lightbox-stage-container">
              <button
                type="button"
                className="lightbox-arrow-btn prev-arrow"
                onClick={goToLightboxPrev}
                aria-label="Previous image"
                title="Previous image (Left arrow)"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="lightbox-image-box">
                <img
                  src={activeLightboxSlide.image}
                  alt={activeLightboxSlide.title}
                  className="lightbox-img"
                />
              </div>

              <button
                type="button"
                className="lightbox-arrow-btn next-arrow"
                onClick={goToLightboxNext}
                aria-label="Next image"
                title="Next image (Right arrow)"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Caption Info */}
            <div className="lightbox-caption-box">
              <h3 id="lightbox-photo-title" className="lightbox-heading">
                {activeLightboxSlide.title}
              </h3>
              <p className="lightbox-narrative">
                {activeLightboxSlide.description}
              </p>
              <div className="lightbox-meta-strip">
                <div className="meta-chip">
                  <MapPin size={13} className="meta-chip-icon" />
                  <span>{activeLightboxSlide.venue}</span>
                </div>
                <div className="meta-chip">
                  <Calendar size={13} className="meta-chip-icon" />
                  <span>{activeLightboxSlide.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .hero-carousel-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1rem 1.25rem 1.25rem;
          margin-top: 1.5rem;
        }

        /* Restrained Top Bar */
        .carousel-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
          margin-bottom: 0.75rem;
          font-size: 0.8rem;
        }

        .carousel-meta-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--color-text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .carousel-category-tag {
          font-weight: 600;
          color: var(--color-violet);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.72rem;
        }

        .carousel-sep {
          color: var(--color-border);
        }

        .carousel-slide-venue {
          font-size: 0.77rem;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .slide-counter {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .counter-current {
          color: var(--color-text);
          font-weight: 600;
        }

        .carousel-control-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: transparent;
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .carousel-control-btn:hover {
          color: var(--color-text);
          border-color: var(--color-text);
        }

        /* Photographic Stage */
        .carousel-stage {
          position: relative;
          width: 100%;
          min-height: 480px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #171520;
        }

        @media (min-width: 900px) {
          .carousel-stage {
            min-height: 520px;
          }
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .carousel-slide.is-active {
          opacity: 1;
          pointer-events: auto;
          z-index: 2;
        }

        .slide-image-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
        }

        /* Subtle restrained scrim only where text lives */
        .slide-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(18, 14, 28, 0.2) 45%,
            rgba(18, 14, 28, 0.8) 80%,
            rgba(18, 14, 28, 0.94) 100%
          );
          pointer-events: none;
        }

        /* Restrained caption layout */
        .slide-caption-wrap {
          position: relative;
          z-index: 3;
          padding: clamp(1.25rem, 3vw, 2rem);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .slide-caption-content {
          max-width: 780px;
        }

        .slide-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2.1rem);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.22;
          margin-bottom: 0.35rem;
          letter-spacing: -0.015em;
        }

        .slide-description {
          font-size: 0.92rem;
          color: #DDD8E8;
          line-height: 1.55;
          margin-bottom: 0.5rem;
        }

        .slide-subtext {
          font-size: 0.775rem;
          color: #BDB6CC;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .subtext-bullet {
          color: #8C849E;
        }

        .slide-enlarge-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .slide-enlarge-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: #FFFFFF;
        }

        /* Nav Chevrons */
        .carousel-nav-btn {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          z-index: 5;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(18, 14, 28, 0.6);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .carousel-nav-btn:hover {
          background: var(--color-violet);
          border-color: #FFFFFF;
        }

        .prev-btn {
          left: 0.85rem;
        }

        .next-btn {
          right: 0.85rem;
        }

        /* Mobile-First Responsive Carousel Stage */
        @media (max-width: 680px) {
          .hero-carousel-wrapper {
            padding: 0.65rem 0.65rem 0.85rem;
            margin-top: 1rem;
          }

          .carousel-stage {
            min-height: auto;
            display: flex;
            flex-direction: column;
            border-radius: var(--radius-md);
            background: #171520;
          }

          .carousel-slide {
            position: relative;
            inset: auto;
            display: none;
            flex-direction: column;
            opacity: 1;
            transition: none;
          }

          .carousel-slide.is-active {
            display: flex;
            opacity: 1;
          }

          .slide-image-wrap {
            position: relative;
            inset: auto;
            width: 100%;
            height: 220px;
          }

          .slide-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 25%;
          }

          .slide-scrim {
            display: none;
          }

          .slide-caption-wrap {
            position: relative;
            z-index: 3;
            padding: 0.85rem 0.95rem 1rem;
            background: #181424;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 0.6rem;
          }

          .slide-caption-content {
            max-width: 100%;
          }

          .slide-title {
            font-size: 1.05rem;
            line-height: 1.3;
            margin-bottom: 0.25rem;
            color: #FFFFFF;
          }

          .slide-description {
            font-size: 0.8rem;
            line-height: 1.45;
            color: #DDD8E8;
            margin-bottom: 0.4rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .slide-subtext {
            font-size: 0.72rem;
            color: #BDB6CC;
          }

          .slide-enlarge-btn {
            align-self: flex-start;
            padding: 5px 11px;
            font-size: 0.72rem;
          }

          .carousel-nav-btn {
            top: 110px;
            width: 34px;
            height: 34px;
          }

          .prev-btn {
            left: 0.5rem;
          }

          .next-btn {
            right: 0.5rem;
          }

          .carousel-progress-track {
            top: 217px;
            bottom: auto;
          }
        }

        /* Progress line */
        .carousel-progress-track {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255, 255, 255, 0.15);
          z-index: 10;
        }

        .carousel-progress-fill {
          height: 100%;
          width: 0%;
          background: var(--color-lavender);
        }

        .carousel-progress-fill.animate-progress {
          animation: progressRun linear forwards;
        }

        @keyframes progressRun {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        /* Minimal Thumbnail Selector Strip */
        .carousel-thumbs-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 0.6rem;
          margin-top: 0.85rem;
        }

        @media (max-width: 640px) {
          .carousel-thumbs-row {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .thumb-button {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .thumb-button:hover {
          border-color: var(--color-violet-light);
        }

        .thumb-button.is-active-thumb {
          border-color: var(--color-violet);
          background-color: var(--color-lavender-tint);
        }

        .thumb-crop {
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 3px;
          overflow: hidden;
          background: #171520;
        }

        .thumb-crop-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .thumb-info {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 2px 0;
          overflow: hidden;
        }

        .thumb-idx {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .thumb-label {
          font-size: 0.68rem;
          color: var(--color-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 640px) {
          .thumb-label {
            display: none;
          }
        }

        /* =========================================================================
           Full-Screen Archival Lightbox Modal (Portal attached to document.body)
           Guaranteed to render above sticky header and all page content
           ========================================================================= */
        .archival-lightbox-backdrop {
          z-index: var(--z-modal-backdrop, 99990) !important;
          background: rgba(12, 9, 20, 0.9) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          padding: clamp(0.75rem, 2vw, 1.5rem) !important;
        }

        .lightbox-dialog {
          position: relative;
          background: #181424;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: var(--radius-lg);
          max-width: 1080px;
          width: 100%;
          max-height: 94vh;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7);
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          z-index: var(--z-modal-dialog, 99999);
          animation: lightboxFadeIn 0.22s ease-out;
        }

        @keyframes lightboxFadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Top Toolbar */
        .lightbox-top-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: rgba(14, 11, 22, 0.85);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .lightbox-status-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .lightbox-category-tag {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--color-lavender);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .lightbox-counter-badge {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.12);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          color: #E2DEEB;
          font-weight: 600;
        }

        .lightbox-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background var(--transition-fast), transform var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background: var(--color-violet);
          border-color: #FFFFFF;
        }

        /* Central Stage with Integrated Arrows */
        .lightbox-stage-container {
          position: relative;
          width: 100%;
          background: #0B0813;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          flex-grow: 1;
        }

        .lightbox-image-box {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 0;
        }

        .lightbox-img {
          max-height: calc(82vh - 160px);
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }

        /* Left and Right Navigation Controls */
        .lightbox-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(18, 14, 28, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .lightbox-arrow-btn:hover {
          background: var(--color-violet);
          border-color: #FFFFFF;
          transform: translateY(-50%) scale(1.08);
        }

        .lightbox-arrow-btn:focus-visible {
          outline: 2px solid #FFFFFF;
          outline-offset: 3px;
        }

        .prev-arrow {
          left: 1rem;
        }

        .next-arrow {
          right: 1rem;
        }

        @media (max-width: 600px) {
          .lightbox-arrow-btn {
            width: 40px;
            height: 40px;
          }
          .prev-arrow {
            left: 0.5rem;
          }
          .next-arrow {
            right: 0.5rem;
          }
        }

        /* Bottom Caption Box */
        .lightbox-caption-box {
          padding: 1.15rem 1.5rem;
          background: rgba(20, 16, 29, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          max-height: 25vh;
          overflow-y: auto;
        }

        .lightbox-heading {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2vw, 1.45rem);
          color: #FFFFFF;
          margin-bottom: 0.35rem;
          line-height: 1.25;
        }

        .lightbox-narrative {
          font-size: 0.88rem;
          color: #D2CCE0;
          line-height: 1.5;
          margin-bottom: 0.65rem;
        }

        .lightbox-meta-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .meta-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: #BDB6CC;
        }

        .meta-chip-icon {
          color: var(--color-lavender);
        }
      `}</style>
    </div>
  );
};
