'use client';

import { useEffect, useState } from 'react';

interface ScrollProgress {
  /** Pixels rolados a partir do topo. */
  scrollY: number;
  /** Progresso de rolagem da página, de 0 a 1. */
  progress: number;
}

/**
 * Acompanha a rolagem da página, com throttle via requestAnimationFrame.
 * Usado pelo header (estado sólido após o limiar) e por indicadores de progresso.
 */
export function useScrollProgress(): ScrollProgress {
  const [scroll, setScroll] = useState<ScrollProgress>({ scrollY: 0, progress: 0 });

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const { scrollY } = window;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScroll({ scrollY, progress: scrollable > 0 ? scrollY / scrollable : 0 });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return scroll;
}
