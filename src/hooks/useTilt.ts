'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const RESTING = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';

/**
 * Inclinação 3D que segue o mouse (até `maxDeg` graus), usada nos cards de
 * produto. Só funciona com mouse e quando o usuário não pediu menos movimento.
 */
export function useTilt<T extends HTMLElement = HTMLElement>(
  maxDeg = 5,
): { ref: React.RefObject<T>; transform: string } {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState(RESTING);
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
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        setTransform(`perspective(1000px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg)`);
      });
    };
    const onLeave = () => setTransform(RESTING);

    element.addEventListener('mousemove', onMove, { passive: true });
    element.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener('mousemove', onMove);
      element.removeEventListener('mouseleave', onLeave);
    };
  }, [prefersReduced, maxDeg]);

  return { ref, transform };
}
