'use client';

import { useEffect, useRef, useState } from 'react';
import { PARALLAX } from '@/constants/tokens';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const RESTING_TRANSFORM = 'scale(1) translate(0px, 0px)';

/**
 * Parallax sutil que segue o mouse: a imagem de fundo se desloca de leve
 * conforme o cursor. Só funciona com mouse (não no toque) e quando o usuário
 * não pediu menos movimento. Devolve o `ref` do container e o `transform`.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  strength: number = PARALLAX.strength,
): { ref: React.RefObject<T>; transform: string } {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState(RESTING_TRANSFORM);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    /* O mousemove dispara dezenas de vezes por segundo; o requestAnimationFrame
       agrupa tudo em uma atualização por quadro para não pesar na renderização. */
    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = element.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
        setTransform(
          `scale(${PARALLAX.scale}) translate(${-offsetX * strength}px, ${-offsetY * strength}px)`,
        );
      });
    };
    const onLeave = () => setTransform(RESTING_TRANSFORM);

    element.addEventListener('mousemove', onMove, { passive: true });
    element.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener('mousemove', onMove);
      element.removeEventListener('mouseleave', onLeave);
    };
  }, [prefersReduced, strength]);

  return { ref, transform };
}
