'use client';

import Image from 'next/image';
import { AnimatedReveal, Container, SectionHeading } from '@/components/ui';
import { useParallax } from '@/hooks';

const DIFF_ROWS: [string, string, string][] = [
  [
    'ABRANGÊNCIA',
    'Produtos isolados (só dados, só conectividade ou só sondas)',
    'Plataforma unificada com 3 frentes integradas',
  ],
  [
    'NACIONALIDADE',
    'NASA, ESA, SpaceX, Lockheed, soluções americanas/europeias',
    'Brasileira, pensada para o contexto local',
  ],
  [
    'ENTREGÁVEL',
    'Dados crus exigem time de análise pra virar decisão',
    'Decisão pronta, rota, alerta, comando aprovável em 1 clique',
  ],
  [
    'RESILIÊNCIA',
    'Dependem de conexão estável e operador em tempo real',
    'Edge-first: opera offline e de forma autônoma',
  ],
  [
    'CUSTO',
    'Licenças caras, infraestrutura proprietária',
    'Infra de satélite compartilhada entre os 3 produtos',
  ],
];

/** Seção "Diferenciais", tabela comparativa POLARIS × concorrentes. */
export function Diferenciais() {
  const { ref, transform } = useParallax<HTMLElement>();

  return (
    <section
      ref={ref}
      data-screen-label="Diferenciais"
      className="relative overflow-hidden bg-black py-28 md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/imagegs6.png"
          alt="Brasil iluminado à noite visto do espaço"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          style={{ transform }}
          className="object-cover opacity-50 transition-transform duration-[450ms] ease-ease"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative">
        <div className="mb-14 max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">DIFERENCIAIS</p>
          </AnimatedReveal>
          <SectionHeading
            text="O que separa a POLARIS do resto"
            className="mb-6 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="font-serif text-lg italic leading-relaxed text-greysoft md:text-xl">
              Comparação direta com o que existe hoje no mercado nacional e internacional.
            </p>
          </AnimatedReveal>
        </div>

        <AnimatedReveal className="hidden border-t border-white/15 md:block">
          <div className="grid grid-cols-[1fr_1.4fr_1.4fr] gap-6 border-b border-white/15 py-5 font-mono text-[11px] tracking-[0.2em] text-greyfade">
            <div>DIMENSÃO</div>
            <div>CONCORRENTES</div>
            <div className="border-l border-fire/40 bg-fire/[0.04] pl-5 text-fire">POLARIS</div>
          </div>
          {DIFF_ROWS.map(([dimension, competitors, polaris]) => (
            <div
              key={dimension}
              className="grid grid-cols-[1fr_1.4fr_1.4fr] gap-6 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03]"
            >
              <div className="pt-1 font-mono text-[12px] tracking-[0.16em] text-fire">{dimension}</div>
              <div className="text-[15px] font-light leading-relaxed text-greyfade">{competitors}</div>
              <div className="border-l border-fire/25 bg-fire/[0.04] pl-5 text-[15px] font-light leading-relaxed text-white">
                {polaris}
              </div>
            </div>
          ))}
        </AnimatedReveal>

        <div className="space-y-4 md:hidden">
          {DIFF_ROWS.map(([dimension, competitors, polaris]) => (
            <AnimatedReveal key={dimension}>
              <div className="border-t-2 border-fire bg-[#0F0F0F] p-6">
                <p className="mb-4 font-mono text-[12px] tracking-[0.16em] text-fire">{dimension}</p>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-greyfade">Concorrentes</p>
                <p className="mb-4 text-[15px] font-light text-greysoft">{competitors}</p>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-fire">POLARIS</p>
                <p className="text-[15px] font-light text-white">{polaris}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
