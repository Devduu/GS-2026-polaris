'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Container, Starfield } from '@/components/ui';
import { BRAND } from '@/constants/copy';
import { EASE_OUT } from '@/constants/tokens';
import { useParallax } from '@/hooks';

const HERO_DURATION = 1.1;

/** Animação de entrada do hero: fade e uma leve subida. */
function heroSeq(delay: number, reduced: boolean) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: HERO_DURATION, ease: EASE_OUT, delay: reduced ? 0 : delay },
  };
}

/**
 * Hero, astronauta ao fundo, HUD de cockpit, estrela-guia com entrada
 * escalonada e o campo de estrelas com parallax sutil de scroll.
 */
export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const starsRef = useRef<HTMLDivElement>(null);
  const { ref: heroRef, transform } = useParallax<HTMLElement>();

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const element = starsRef.current;
      if (!element) return;
      const y = window.scrollY;
      if (y < window.innerHeight) element.style.transform = `translateY(${(y * 0.25).toFixed(1)}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      id="hero"
      data-screen-label="Hero"
      className="relative flex min-h-screen flex-col items-start justify-start overflow-hidden pt-[30vh] text-left md:justify-center md:pt-0"
    >
      <h1 className="sr-only">
        POLARIS, plataforma brasileira de inteligência espacial. {BRAND.tagline}
      </h1>

      <div className="absolute inset-0">
        <Image
          src="/images/imagegs19.png"
          alt="Astronauta flutuando no espaço com um planeta laranja iluminado à direita"
          fill
          unoptimized
          priority
          sizes="100vw"
          style={{ transform }}
          className="object-cover brightness-[0.88] saturate-[1.1] transition-transform duration-[450ms] ease-ease"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div ref={starsRef} className="absolute inset-0 will-change-transform">
        <Starfield />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[5]">
        <span className="absolute left-[26px] top-[92px] h-3.5 w-3.5 border border-b-0 border-r-0 border-white/[0.28]" />
        <span className="absolute right-[26px] top-[92px] h-3.5 w-3.5 border border-b-0 border-l-0 border-white/[0.28]" />
        <span className="absolute bottom-[26px] left-[26px] h-3.5 w-3.5 border border-r-0 border-t-0 border-white/[0.28]" />
        <span className="absolute bottom-[26px] right-[26px] h-3.5 w-3.5 border border-l-0 border-t-0 border-white/[0.28]" />
        <span className="absolute right-[34px] top-[98px] font-mono text-[10px] tracking-[0.18em] text-greysoft opacity-50">
          LAT -23.55, LON -46.63, MAI 2026
        </span>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-[600px] text-center md:mx-0 md:text-left xl:max-w-[760px]">
          <motion.div {...heroSeq(0, reduced)} className="hidden md:block">
            <Image
              src="/images/imagegs4.png"
              alt="POLARIS"
              width={1318}
              height={244}
              priority
              className="w-[clamp(200px,35vw,760px)] max-w-[78vw] drop-shadow-[0_0_45px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
          <motion.p
            {...heroSeq(0.25, reduced)}
            className="mx-auto max-w-[500px] font-serif text-[clamp(1.2rem,2vw,1.8rem)] italic text-white md:mx-0 md:mt-7"
          >
            “{BRAND.tagline}”
          </motion.p>
          <motion.div {...heroSeq(0.7, reduced)} className="mx-auto mt-9 h-[2px] w-20 bg-fire md:mx-0" />
        </div>
      </Container>

      <motion.a
        href="#quem"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0, x: '-50%', y: reduced ? 0 : 20 }}
        animate={{ opacity: 1, x: '-50%', y: 0 }}
        transition={{ duration: HERO_DURATION, ease: EASE_OUT, delay: reduced ? 0 : 1.3 }}
        className="group absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-greysoft transition-colors group-hover:text-white">
          SCROLL
        </span>
        <span className="block h-12 w-px animate-pulse bg-gradient-to-b from-fire to-transparent" />
      </motion.a>
    </section>
  );
}
