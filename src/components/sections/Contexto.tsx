import { AnimatedReveal, Card, Container, ParallaxImage, SectionHeading, StatCounter } from '@/components/ui';
import type { Stat } from '@/types';

const CONTEXT_STATS: Stat[] = [
  { target: 613, prefix: 'US$', unit: 'bi', label: 'setor espacial em 2024 (Space Foundation)' },
  {
    target: 1.8,
    prefix: 'US$',
    unit: 'tri',
    decimals: 1,
    label: 'projeção para 2035 (World Economic Forum)',
  },
  { target: 7.8, prefix: '+', unit: '%', decimals: 1, label: 'crescimento anual, acima do PIB mundial' },
];

const WHY_NOW = [
  'Brasil acabou de entrar no mapa espacial com o VCUB1.',
  'A FIAP forma engenheiros de software com perfil técnico pra liderar essa nova fronteira.',
  'Centenas de comunidades isoladas seguem sem conexão confiável.',
];

/** Seção "O Contexto", banner com parallax de scroll, três indicadores e o porquê. */
export function Contexto() {
  return (
    <section id="contexto" data-screen-label="O Contexto" className="relative bg-lightgray text-black">
      <div className="relative h-[60vh] overflow-hidden md:h-[80vh]">
        <ParallaxImage
          src="/images/imagegs2.png"
          alt="Foguete decolando à noite com chamas iluminando a plataforma de lançamento"
          objectPosition="center 60%"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lightgray via-lightgray/10 to-transparent" />
      </div>

      <Container className="relative -mt-20 pb-28 md:-mt-28 md:pb-36">
        <div className="max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">O CONTEXTO</p>
          </AnimatedReveal>
          <SectionHeading
            text="A economia espacial deixou de ser ficção"
            className="mb-8 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight text-black"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="text-lg font-light leading-relaxed text-greyfade md:text-xl">
              Em 2024, o setor espacial global movimentou US$ 613 bilhões com crescimento de 7,8% ao
              ano (Space Foundation). A projeção é cruzar a marca de US$ 1 trilhão em 2032 e chegar a
              US$ 1,8 trilhão em 2035 (World Economic Forum, McKinsey). O Brasil entrou nesse mapa em
              abril de 2023, quando a Visiona lançou o VCUB1 pela SpaceX.
            </p>
          </AnimatedReveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-black/10 pt-12 sm:grid-cols-3 md:gap-6">
          {CONTEXT_STATS.map((stat, index) => (
            <AnimatedReveal key={stat.label} delayIndex={index}>
              <StatCounter
                stat={stat}
                className="stat-num text-[clamp(3.4rem,8vw,7rem)] font-light tracking-tight text-fire"
              />
              <p className="mt-3 text-sm font-light leading-relaxed text-greyfade">{stat.label}</p>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="mt-16 max-w-3xl">
          <Card padding="p-8 md:p-10">
            <p className="mb-6 font-mono text-[11px] tracking-[0.24em] text-fire">POR QUE AGORA</p>
            <ul className="space-y-4">
              {WHY_NOW.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-[15px] font-light leading-relaxed text-black md:text-base"
                >
                  <span className="mt-0.5 text-fire">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
