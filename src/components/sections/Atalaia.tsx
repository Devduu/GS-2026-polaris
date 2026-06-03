'use client';

import Image from 'next/image';
import { AnimatedReveal, Card, Container } from '@/components/ui';
import { useParallax } from '@/hooks';

const PILLARS = [
  {
    tag: 'CONNECT',
    title: 'Conexão estável pela primeira vez na escola.',
    body: 'Antena Starlink no telhado + Edge Box dentro da creche com vídeos de aula e PDFs em cache local. Quando o satélite cai, a aula continua.',
  },
  {
    tag: 'EARTH',
    title: 'Proteção da comunidade indígena.',
    body: 'Monitora desmatamento, queimadas e risco ambiental em todo o Vale do Javari. Alertas em tempo real para Defesa Civil, IBAMA e FUNAI.',
  },
  {
    tag: 'FLEET',
    title: 'Mesma autonomia, escalas diferentes.',
    body: 'A filosofia que faz uma sonda decidir sozinha numa cratera lunar é a mesma que faz o Edge Box decidir o que cachear quando o satélite cai.',
  },
];

/** Caso de uso real, Atalaia do Norte (Vale do Javari), com parallax de mouse. */
export function Atalaia() {
  const { ref, transform } = useParallax<HTMLElement>();

  return (
    <section
      ref={ref}
      id="atalaia"
      data-screen-label="Caso Atalaia do Norte"
      className="relative overflow-hidden bg-lightgray py-28 text-black md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/imagegs12.png"
          alt="Vista aérea do Vale do Javari ao pôr do sol, rio serpenteando a floresta"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          style={{ transform }}
          className="object-cover transition-transform duration-[450ms] ease-ease"
        />
        <div className="absolute inset-0 bg-lightgray/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-lightgray via-transparent to-lightgray" />
      </div>

      <Container className="relative">
        <AnimatedReveal>
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-fire">CASO DE USO REAL</p>
        </AnimatedReveal>
        <AnimatedReveal delayIndex={1}>
          <h2 className="mb-6 text-[clamp(2.4rem,8vw,6.5rem)] font-extralight leading-[0.92] tracking-tight">
            ATALAIA <span className="text-greyfade">DO NORTE</span>
          </h2>
        </AnimatedReveal>
        <AnimatedReveal delayIndex={1}>
          <p className="mb-8 text-sm font-medium tracking-wide text-fire md:text-base">
            Vale do Javari, Amazonas, fronteira Brasil/Peru, 8,5 milhões de hectares
          </p>
        </AnimatedReveal>
        <AnimatedReveal delayIndex={2}>
          <p className="mb-16 max-w-2xl text-[15px] font-light leading-relaxed text-black md:text-lg">
            Porta de entrada da Terra Indígena Vale do Javari, a segunda maior do Brasil. Acesso só
            por rio (vários dias de barco desde Manaus) ou aéreo. Nas comunidades do interior não há
            cobertura móvel, e a fibra federal que chega à sede não alcança até lá. 80 crianças sem
            conexão confiável.
          </p>
        </AnimatedReveal>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {PILLARS.map((pillar, index) => (
            <AnimatedReveal key={pillar.tag} delayIndex={index}>
              <Card tone="light" className="h-full">
                <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-fire">{pillar.tag}</p>
                <h3 className="mb-4 text-xl font-light leading-snug">{pillar.title}</h3>
                <p className="text-[15px] font-light leading-relaxed text-greyfade">{pillar.body}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
