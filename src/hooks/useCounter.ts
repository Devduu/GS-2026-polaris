'use client';

import { useEffect, useRef, useState } from 'react';
import { COUNTER_DURATION_MS } from '@/constants/tokens';

interface UseCounterOptions {
  target: number;
  decimals?: number;
  suffix?: string;
  thousands?: boolean;
  /** Dispara a contagem (ex.: quando o elemento entra na viewport). */
  active: boolean;
  durationMs?: number;
}

/** Formata o número no padrão brasileiro: vírgula no decimal, ponto no milhar. */
function formatCount(
  value: number,
  decimals: number,
  suffix: string,
  thousands: boolean,
): string {
  let text: string;
  if (decimals > 0) {
    text = value.toFixed(decimals).replace('.', ',');
  } else {
    text = Math.round(value).toString();
    if (thousands) text = text.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return text + suffix;
}

/** Curva de desaceleração: a contagem começa rápida e freia no fim. */
const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

/**
 * Anima a contagem de 0 até `target` quando `active` vira `true`, formatando o
 * resultado em pt-BR. Roda uma única vez.
 */
export function useCounter({
  target,
  decimals = 0,
  suffix = '',
  thousands = false,
  active,
  durationMs = COUNTER_DURATION_MS,
}: UseCounterOptions): string {
  const [display, setDisplay] = useState(() => formatCount(0, decimals, suffix, thousands));
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;

    let frame = 0;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      setDisplay(formatCount(target * easeOutExpo(progress), decimals, suffix, thousands));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, decimals, suffix, thousands, durationMs]);

  return display;
}
