import Image from 'next/image';
import { AnimatedReveal, Container, SectionHeading, TiltCard } from '@/components/ui';

const PRODUCTS = [
  {
    tag: 'EARTH',
    num: '01',
    title: 'Monitoramento ambiental',
    body: 'Algoritmos calculam a melhor rota de resposta a desastres para Defesa Civil e Bombeiros.',
  },
  {
    tag: 'CONNECT',
    num: '02',
    title: 'Conectividade satelital',
    body: 'Starlink + edge computing local mantém escolas e postos isolados conectados, mesmo offline.',
  },
  {
    tag: 'FLEET',
    num: '03',
    title: 'Frota autônoma em missões',
    body: 'Sondas que decidem sozinhas em missões lunares e marcianas quando o operador não pode responder.',
  },
];

/** Seção "A Solução", a tese de plataforma única com três frentes. */
export function Solucao() {
  return (
    <section
      id="solucao"
      data-screen-label="A Solução"
      className="relative overflow-hidden bg-lightgray py-28 text-black md:py-40"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/imagegs15.png"
          alt="Dados fluindo de um satélite em direção à Terra"
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-lightgray/80" />
      </div>
      <div className="dotfield-light" aria-hidden />

      <Container className="relative">
        <div className="max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">A SOLUÇÃO</p>
          </AnimatedReveal>
          <SectionHeading
            text="Uma plataforma, três caminhos"
            className="mb-7 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="font-serif text-lg italic leading-relaxed text-greyfade md:text-xl">
              Em vez de três produtos soltos, criamos uma única plataforma com três frentes que
              compartilham infraestrutura de satélite, backbone de dados e filosofia de autonomia.
            </p>
          </AnimatedReveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {PRODUCTS.map((product, index) => (
            <AnimatedReveal key={product.tag} delayIndex={index}>
              <TiltCard tone="light" className="h-full">
                <div className="mb-6 flex items-baseline justify-between">
                  <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-fire">
                    {product.tag}
                  </p>
                  <span className="font-mono text-[12px] text-greysoft">{product.num}</span>
                </div>
                <h3 className="mb-4 text-2xl font-light">{product.title}</h3>
                <p className="text-[15px] font-light leading-relaxed text-greyfade">{product.body}</p>
              </TiltCard>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
