'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/lib/cn';

const COUNT_DURATION = 1500;
const HOLD_AT_100 = 400;
const REMOVE_DELAY = 850;
const SAFETY_TIMEOUT = 5000;

/**
 * Preloader, foguete subindo numa trilha enquanto um contador vai de 000 a 100,
 * depois fade-out. Pula via botão "skip" ou direto em reduced-motion.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);
  const finishedRef = useRef(false);
  const prefersReduced = usePrefersReducedMotion();

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setProgress(100);
    setDone(true);
    setTimeout(() => setRemoved(true), REMOVE_DELAY);
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      finish();
      return;
    }
    const logoTimer = setTimeout(() => setShowLogo(true), 500);
    let frame = 0;
    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (finishedRef.current) return;
      if (start === null) start = timestamp;
      const progressRatio = Math.min((timestamp - start) / COUNT_DURATION, 1);
      // Desaceleração suave: 1 - (1 - p)²
      setProgress(Math.round((1 - (1 - progressRatio) ** 2) * 100));
      if (progressRatio < 1) frame = requestAnimationFrame(tick);
      else setTimeout(finish, HOLD_AT_100);
    };

    frame = requestAnimationFrame(tick);
    const safety = setTimeout(finish, SAFETY_TIMEOUT);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(safety);
      clearTimeout(logoTimer);
    };
  }, [prefersReduced, finish]);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={cn(
        'fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-[opacity,transform] duration-[800ms] ease-ease',
        done && 'pointer-events-none scale-[0.96] opacity-0',
      )}
    >
      <div className="flex items-end gap-[clamp(20px,4vw,36px)]">
        <div className="relative h-[clamp(3.5rem,11vw,7rem)] w-0.5 self-stretch bg-fire/[0.16]">
          <span
            className="absolute left-1/2 -translate-x-1/2 translate-y-[42%] drop-shadow-[0_0_8px_rgba(255,53,0,0.7)] transition-[bottom] duration-[120ms] ease-linear"
            style={{ bottom: `${progress}%` }}
          >
            <svg width="20" height="34" viewBox="0 0 20 34" fill="none" aria-hidden>
              <path d="M10 1 C14 5 15.5 11 15.5 17 L15.5 22 L4.5 22 L4.5 17 C4.5 11 6 5 10 1 Z" fill="#FF3500" />
              <circle cx="10" cy="11" r="2.4" fill="#0A0A0A" />
              <path d="M4.5 18 L1 25 L4.5 23 Z" fill="#FF3500" />
              <path d="M15.5 18 L19 25 L15.5 23 Z" fill="#FF3500" />
              <path className="origin-bottom animate-flame" d="M6.5 22 Q10 33 13.5 22 Z" fill="#FFB200" />
            </svg>
          </span>
        </div>
        <p className="font-mono text-[clamp(3.5rem,11vw,7rem)] font-light leading-none tracking-[0.04em] tabular-nums text-fire">
          {String(progress).padStart(3, '0')}
        </p>
      </div>

      <Image
        src="/images/imagegs4.png"
        alt=""
        width={1318}
        height={244}
        priority
        className={cn(
          'mt-8 h-10 w-auto transition-all duration-1000 ease-ease',
          showLogo ? 'scale-100 opacity-100' : 'scale-90 opacity-0',
        )}
      />

      <button
        type="button"
        onClick={finish}
        className="fixed bottom-[18px] right-[22px] text-[11px] lowercase tracking-[0.2em] text-greysoft opacity-30 transition-opacity hover:opacity-100"
      >
        skip
      </button>
    </div>
  );
}
