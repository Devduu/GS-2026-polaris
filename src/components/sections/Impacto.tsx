'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { AnimatedReveal, Container, SectionHeading, StatCounter } from '@/components/ui';
import { useParallax } from '@/hooks';
import type { Stat } from '@/types';

interface ImpactStat {
  tag: string;
  stat?: Stat;
  staticValue?: ReactNode;
  caption: string;
}

const STATS: ImpactStat[] = [
  {
    tag: 'EARTH',
    stat: { target: 500, suffix: 'k', label: '' },
    caption: 'vidas potencialmente protegidas por respostas mais rápidas a desastres climáticos no Brasil.',
  },
  {
    tag: 'CONNECT',
    stat: { target: 1200, thousands: true, label: '' },
    caption: 'escolas e postos de saúde em regiões isoladas com conectividade resiliente operando.',
  },
  {
    tag: 'FLEET',
    staticValue: (
      <>
        1<span className="align-top text-[0.4em]">ª</span>
      </>
    ),
    caption: 'alternativa nacional consolidada de software autônomo para missões espaciais brasileiras.',
  },
];

/** Seção "Impacto", três números-meta por frente, com parallax de mouse. */
export function Impacto() {
  const { ref, transform } = useParallax<HTMLElement>();

  return (
    <section
      ref={ref}
      id="impacto"
      data-screen-label="Impacto"
      className="relative overflow-hidden bg-black py-28 md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/imagegs8.png"
          alt="Nascer do sol da Terra visto do espaço (Earthrise)"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          style={{ transform, objectPosition: 'center 70%' }}
          className="object-cover transition-transform duration-[450ms] ease-ease"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container className="relative">
        <div className="mb-16 max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">IMPACTO</p>
          </AnimatedReveal>
          <SectionHeading
            text="O impacto que esperamos gerar"
            className="mb-6 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="font-serif text-lg italic leading-relaxed text-greysoft md:text-xl">
              Não é uma promessa abstrata. É o que cada produto, escalado, devolve para a sociedade
              brasileira em um horizonte de cinco anos.
            </p>
          </AnimatedReveal>
        </div>

        <div className="grid gap-10 border-t border-white/15 pt-14 md:grid-cols-3 md:gap-6">
          {STATS.map((item, index) => (
            <AnimatedReveal key={item.tag} delayIndex={index}>
              <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-fire">{item.tag}</p>
              {item.stat ? (
                <StatCounter
                  stat={item.stat}
                  className="text-[clamp(4rem,10vw,9rem)] font-light leading-none tracking-tight text-fire"
                />
              ) : (
                <p className="text-[clamp(4rem,10vw,9rem)] font-light leading-none tracking-tight text-fire">
                  {item.staticValue}
                </p>
              )}
              <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-greysoft md:text-base">
                {item.caption}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
