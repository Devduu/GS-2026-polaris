'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Parallax de rolagem para imagens de fundo: a imagem, levemente ampliada, se
 * desloca na vertical conforme a seção passa pela tela, dando profundidade.
 * Desligado quando o usuário pediu menos movimento.
 */
export function useScrollParallax<T extends HTMLElement = HTMLElement>(
  speed = 0.18,
  baseScale = 1.12,
): { ref: React.RefObject<T>; transform: string } {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState(`scale(${baseScale})`);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReduced) return;

    let ticking = false;
    const apply = () => {
      ticking = false;
      const rect = element.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      setTransform(`translate3d(0, ${offset.toFixed(1)}px, 0) scale(${baseScale})`);
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(apply);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
    return () => window.removeEventListener('scroll', onScroll);
  }, [prefersReduced, speed, baseScale]);

  return { ref, transform };
}
