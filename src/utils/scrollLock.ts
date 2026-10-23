/**
 * Production-grade background scroll lock utility
 * Prevents background document scrolling on desktop, iOS Safari, and Android
 * without layout shifts or losing scroll position.
 */

let activeLockCount = 0;
let savedScrollY = 0;

export const lockBackgroundScroll = (): void => {
  if (typeof window === 'undefined') return;

  if (activeLockCount === 0) {
    savedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
    // Prevent layout shift by calculating scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
  
  activeLockCount++;
};

export const unlockBackgroundScroll = (): void => {
  if (typeof window === 'undefined') return;

  activeLockCount = Math.max(0, activeLockCount - 1);

  if (activeLockCount === 0) {
    const scrollY = savedScrollY;
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.paddingRight = '';

    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }
};
