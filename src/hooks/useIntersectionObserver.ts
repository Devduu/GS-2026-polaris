'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions {
  /** Margem do root (ex.: '-45% 0px -50% 0px' para o scrollspy). */
  rootMargin?: string;
  /** Limiar de visibilidade. */
  threshold?: number | number[];
  /** Para de observar após a primeira interseção. */
  once?: boolean;
}

/**
 * Observa quando um elemento entra na viewport. Retorna o `ref` a anexar e o
 * estado `isInView`. Base do scrollspy do header e dos disparos de contador.
 */
export function useIntersectionObserver<T extends Element = HTMLElement>({
  rootMargin = '0px',
  threshold = 0,
  once = false,
}: UseIntersectionOptions = {}): { ref: React.RefObject<T>; isInView: boolean } {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
          return;
        }
        if (!once) setIsInView(false);
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, isInView };
}
