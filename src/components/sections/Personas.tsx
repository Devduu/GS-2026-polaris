import Image from 'next/image';
import { AnimatedReveal, Card, Container, SectionHeading } from '@/components/ui';

const PERSONAS = [
  {
    tag: 'EARTH',
    name: 'Mariana Souza',
    role: 'Coordenadora de Defesa Civil',
    meta: '42 anos, Porto Alegre/RS',
    image: '/images/persona-mariana.png',
    imageAlt: 'Coordenadora da Defesa Civil no centro de operações, monitorando o mapa de risco de enchente do RS',
    pain: 'Toma decisões com mapa em papel e celular tocando sem parar. Tempo de resposta atrasa horas.',
    goal: 'Receber rota otimizada de atendimento em segundos para salvar mais vidas em desastres climáticos.',
  },
  {
    tag: 'CONNECT',
    name: 'Ana Paula Lima',
    role: 'Diretora de escola rural',
    meta: '38 anos, Atalaia do Norte/AM',
    image: '/images/persona-anapaula.png',
    imageAlt: 'Professora e crianças indígenas assistindo conteúdo educacional em tablet, com antena Starlink ao fundo',
    pain: 'Material didático chega de barco a cada 3 semanas. Internet instável quando existe, dezenas de crianças sem acesso digital confiável.',
    goal: 'Manter aula rodando mesmo quando o satélite cai. Acesso a conteúdo educacional offline-first.',
  },
  {
    tag: 'FLEET',
    name: 'Helena Cardoso',
    role: 'Comandante de Missão, AEB',
    meta: '45 anos, São José dos Campos/SP',
    image: '/images/persona-helena.png',
    imageAlt: 'Comandante de missão na sala de controle da missão lunar brasileira, painel da cratera Shackleton ao fundo',
    pain: 'Dependência de software autônomo americano em missões brasileiras. Sem alternativa nacional auditável.',
    goal: 'Operar frota de sondas com tecnologia brasileira, decisões rastreáveis e custo competitivo.',
  },
];

/** Seção "Personas", perfis críticos que decidem com base nos produtos. */
export function Personas() {
  return (
    <section
      data-screen-label="Personas"
      className="relative overflow-hidden bg-lightgray py-28 text-black md:py-40"
    >
      <div className="dotfield-light" aria-hidden />
      <Container className="relative">
        <div className="mb-16 max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">PERSONAS</p>
          </AnimatedReveal>
          <SectionHeading
            text="Quem usa a POLARIS no dia a dia"
            className="mb-6 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="font-serif text-lg italic leading-relaxed text-greyfade md:text-xl">
              Três personas representam os perfis críticos que tomam decisões com base nos nossos
              produtos.
            </p>
          </AnimatedReveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {PERSONAS.map((persona, index) => (
            <AnimatedReveal key={persona.name} delayIndex={index}>
              <Card padding="p-0" className="flex h-full flex-col overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={persona.image}
                    alt={persona.imageAlt}
                    fill
                    quality={90}
                    loading="lazy"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectPosition: '60% 30%' }}
                    className="object-cover brightness-[0.88] saturate-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <span className="absolute right-4 top-4 bg-fire px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-white">
                    {persona.tag}
                  </span>
                  <div className="absolute bottom-4 left-5 text-white">
                    <h3 className="text-2xl font-light leading-tight">{persona.name}</h3>
                    <p className="text-sm font-light text-greysoft">{persona.role}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-7">
                  <p className="font-serif text-sm italic text-fire">{persona.meta}</p>
                  <div>
                    <p className="mb-1.5 font-mono text-[10px] tracking-[0.2em] text-greyfade">DOR</p>
                    <p className="text-[15px] font-light leading-relaxed">{persona.pain}</p>
                  </div>
                  <div>
                    <p className="mb-1.5 font-mono text-[10px] tracking-[0.2em] text-greyfade">
                      OBJETIVO
                    </p>
                    <p className="text-[15px] font-light leading-relaxed">{persona.goal}</p>
                  </div>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
