'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks';

const STAR_COUNT = 90;
const MOUSE_RADIUS = 165;
const LINK_RADIUS = 120;

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Constelação ligada ao cursor, estrelas brancas flutuando que se conectam ao
 * mouse com linhas laranja (e entre si com linhas brancas). `mix-blend-screen`
 * faz as linhas aparecerem só nas seções escuras. Só desktop, sem reduced-motion.
 */
export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let frameId = 0;
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({ x: 0, y: 0, vx: 0, vy: 0, r: 0 }));

    const resize = () => {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    for (const star of stars) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
      star.vx = (Math.random() - 0.5) * 0.09 * dpr;
      star.vy = (Math.random() - 0.5) * 0.09 * dpr;
      star.r = (Math.random() * 1.2 + 0.4) * dpr;
    }

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX * dpr;
      mouse.y = event.clientY * dpr;
    };
    const resetMouse = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) resetMouse();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    window.addEventListener('blur', resetMouse);

    const reach = MOUSE_RADIUS * dpr;
    const link = LINK_RADIUS * dpr;

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fill();
      }
      for (let i = 0; i < STAR_COUNT; i += 1) {
        const star = stars[i];
        const distToMouse = Math.hypot(star.x - mouse.x, star.y - mouse.y);
        if (distToMouse > reach) continue;
        const alpha = (1 - distToMouse / reach) * 0.55;
        ctx.strokeStyle = `rgba(255,53,0,${alpha})`;
        ctx.lineWidth = dpr * 0.6;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        for (let j = i + 1; j < STAR_COUNT; j += 1) {
          const other = stars[j];
          const distBetween = Math.hypot(star.x - other.x, star.y - other.y);
          if (distBetween < link) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - distBetween / link) * alpha})`;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }
      frameId = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('blur', resetMouse);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[3] opacity-60 [mix-blend-mode:screen]"
    />
  );
}
