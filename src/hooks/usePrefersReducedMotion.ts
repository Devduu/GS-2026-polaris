'use client';

import { useEffect, useState } from 'react';

/**
 * Indica se o usuário pediu menos animações (`prefers-reduced-motion: reduce`).
 * Inicia em `false` no SSR e sincroniza no cliente, reagindo a mudanças.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return prefersReduced;
}
