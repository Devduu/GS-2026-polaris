'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { BRAND } from '@/constants/copy';
import { EASE_OUT } from '@/constants/tokens';

/* A frase vem do copy.ts (fonte única) e é quebrada palavra por palavra para animar. */
const WORDS = BRAND.manifesto.split(' ');
const FIRE_WORD = 'POLARIS';
const WORD_STAGGER = 0.13;
const WORD_BASE_DELAY = 0.3;

/** Manifesto final, a tese central revelada palavra a palavra sobre a estrela-guia. */
export function Manifesto() {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <section
      data-screen-label="Manifesto"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/imagegs1.png"
          alt="Estrela única brilhando no infinito preto do espaço"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_70%)]" />
        {/* Halo, a atmosfera da estrela acende atrás da frase ao entrar.
            top-[56%] compensa o eyebrow, que empurra a frase abaixo do centro. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[56%] h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 [background:radial-gradient(circle,rgba(255,53,0,0.3)_0%,rgba(255,53,0,0)_68%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 2.6, ease: 'easeOut' }}
        />
        {/* Respiro, brilho quente, difuso, que pulsa forte e contínuo. */}
        {!prefersReduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[56%] h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 [background:radial-gradient(circle,rgba(255,115,55,0.28)_0%,rgba(255,53,0,0)_72%)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0.4, 1, 0.4] }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 4.5, delay: 2, ease: 'easeInOut', repeat: Infinity }}
          />
        )}
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_OUT }}
          className="mb-10 font-mono text-[11px] tracking-[0.3em] text-fire"
        >
          TESE CENTRAL
        </motion.p>
        <h2 className="text-[clamp(2rem,6.5vw,5.5rem)] font-extralight leading-[1.08] tracking-tight text-white [text-shadow:0_0_40px_rgba(0,0,0,0.9)]">
          {WORDS.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className={
                word === FIRE_WORD
                  ? 'mr-[0.25em] inline-block font-light text-fire animate-fire-pulse'
                  : 'mr-[0.25em] inline-block'
              }
              initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: EASE_OUT,
                delay: prefersReduced ? 0 : WORD_BASE_DELAY + index * WORD_STAGGER,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}
