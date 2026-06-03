'use client';

import Image from 'next/image';
import { AnimatedReveal, Card, Container, SectionHeading } from '@/components/ui';
import { useParallax } from '@/hooks';

const PILLARS = [
  {
    eyebrow: 'MISSÃO',
    title: 'Transformar dados de satélite em decisões que salvam vidas.',
    body: 'Encurtar o tempo entre a observação espacial e a ação humana.',
  },
  {
    eyebrow: 'VISÃO',
    title: 'Ser a referência brasileira em inteligência espacial.',
    body: 'Construir a primeira plataforma nacional capaz de competir com soluções americanas e chinesas.',
  },
  {
    eyebrow: 'PROPÓSITO',
    title: 'Levar tecnologia espacial até onde ninguém chega.',
    body: 'Dados que vêm do céu só fazem sentido quando chegam, em tempo útil, a quem precisa decidir no chão.',
  },
];

/** Seção "Quem é a POLARIS", fundo com parallax de mouse e os três pilares. */
export function Quem() {
  const { ref, transform } = useParallax<HTMLElement>();

  return (
    <section
      ref={ref}
      id="quem"
      data-screen-label="Quem é POLARIS"
      className="relative overflow-hidden bg-black py-28 md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/imagegs16.png"
          alt="Estrela POLARIS centralizada numa nebulosa laranja no espaço profundo"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          style={{ transform }}
          className="object-cover brightness-[0.88] saturate-[1.1] transition-transform duration-[450ms] ease-ease"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">QUEM É A POLARIS</p>
          </AnimatedReveal>
          <SectionHeading
            text="Quem é a POLARIS"
            className="mb-8 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="text-lg font-light leading-relaxed text-greysoft md:text-xl">
              Plataforma brasileira de inteligência espacial que transforma dados invisíveis de
              satélites em decisões reais. Como a Estrela do Norte, somos o ponto fixo que ajuda
              governos, comunidades e missões a decidirem com clareza mesmo quando o caos do
              desastre, da desconexão ou do vácuo do espaço faz o operador humano perder o rumo.
            </p>
          </AnimatedReveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {PILLARS.map((pillar, index) => (
            <AnimatedReveal key={pillar.eyebrow} delayIndex={index}>
              <Card tone="dark" className="h-full">
                <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-fire">{pillar.eyebrow}</p>
                <h3 className="mb-4 text-xl font-light leading-snug">{pillar.title}</h3>
                <p className="text-[15px] font-light leading-relaxed text-greysoft">{pillar.body}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
