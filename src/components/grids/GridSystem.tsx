import React from 'react';

/**
 * GRID A — Editorial Feature Grid
 * 1 prominent main item (approx 2/3) + 1 or 2 supporting items (1/3)
 */
interface EditorialFeatureGridProps {
  main: React.ReactNode;
  side: React.ReactNode;
  className?: string;
}

export const EditorialFeatureGrid: React.FC<EditorialFeatureGridProps> = ({
  main,
  side,
  className = ''
}) => {
  return (
    <div className={`grid-editorial-feature ${className}`}>
      <div className="grid-feature-main">{main}</div>
      <div className="grid-feature-side">{side}</div>
    </div>
  );
};

/**
 * GRID B — Balanced Two-Column Grid
 * 2 equal columns on tablet/desktop, stacked on mobile
 */
interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const BalancedGrid: React.FC<GridContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div className={`grid-balanced-two-col ${className}`} {...rest}>
      {children}
    </div>
  );
};

/**
 * GRID C — Three-Column Compact Grid
 * 3 columns on desktop, 2 on tablet, 1 on mobile
 */
export const CompactGrid: React.FC<GridContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div className={`grid-three-col-compact ${className}`} {...rest}>
      {children}
    </div>
  );
};

/**
 * GRID D — Horizontal Archive / Gallery Grid
 * 4 columns on wide screens, 2 on tablet, 1 on mobile
 */
export const ArchiveTimelineGrid: React.FC<GridContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div className={`grid-archive-timeline ${className}`} {...rest}>
      {children}
    </div>
  );
};
