'use client';

import { useScrollProgress } from '@/hooks';

/** Barra de progresso de leitura, fina, laranja com glow, no topo da página. */
export function ScrollBar() {
  const { progress } = useScrollProgress();

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[9998] h-0.5 bg-fire shadow-[0_0_12px_rgba(255,53,0,0.6)]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
