import type { ReactNode } from 'react';
import Image from 'next/image';
import { AnimatedReveal, Container, SectionHeading, Starfield, StatCounter } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionTone, Stat } from '@/types';

interface ProblemSectionProps {
  label: string;
  tone: SectionTone;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  /** object-position da imagem lateral (ex.: '22% 80%' para enquadrar o rover). */
  imageObjectPosition?: string;
  /** Zoom extra na imagem para destacar um elemento pequeno (ex.: a sonda). */
  imageScale?: number;
  /** Número-âncora do problema (counter gigante). */
  stat: Stat;
  /** Legenda do número. */
  caption: ReactNode;
  /** Coloca número e legenda lado a lado (como no Problema 01). */
  captionInline?: boolean;
  /** Bloco extra de estatísticas (opcional). */
  extra?: ReactNode;
  source: string;
  body: string;
  quote: string;
  /** Campo de estrelas no fundo (seções escuras). */
  starfield?: boolean;
}

/**
 * Seção de problema, imagem lateral com fade, número de impacto que conta ao
 * entrar na tela, dados de fonte, descrição e uma citação destacada.
 */
export function ProblemSection({
  label,
  tone,
  eyebrow,
  title,
  image,
  imageAlt,
  imageObjectPosition,
  imageScale,
  stat,
  caption,
  captionInline = false,
  extra,
  source,
  body,
  quote,
  starfield = false,
}: ProblemSectionProps) {
  const isDark = tone === 'dark';

  return (
    <section
      data-screen-label={label}
      className={cn('relative overflow-hidden', isDark ? 'bg-black' : 'bg-lightgray text-black')}
    >
      {starfield ? <Starfield /> : null}

      <div className="absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden md:block">
        <Image
          src={image}
          alt={imageAlt}
          fill
          unoptimized
          loading="lazy"
          sizes="42vw"
          style={{
            objectPosition: imageObjectPosition,
            transform: imageScale ? `scale(${imageScale})` : undefined,
            transformOrigin: imageObjectPosition,
          }}
          className="object-cover brightness-[0.88] saturate-[1.1]"
        />
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-r to-transparent',
            isDark ? 'from-black via-black/40' : 'from-lightgray via-lightgray/30',
          )}
        />
      </div>

      <Container className="relative py-24 md:py-36">
        <div className="md:w-[58%]">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">{eyebrow}</p>
          </AnimatedReveal>
          <SectionHeading
            text={title}
            className="mb-10 text-[clamp(2.1rem,5vw,4rem)] font-extralight leading-[1.05] tracking-tight"
          />

          <AnimatedReveal delayIndex={1}>
            <div className={cn('flex gap-6', captionInline ? 'flex-col sm:flex-row sm:items-end' : 'flex-col')}>
              <StatCounter
                stat={stat}
                className="text-[clamp(6rem,17vw,13rem)] font-light leading-[0.8] tracking-tighter text-fire"
              />
              <div className={captionInline ? 'pb-3' : 'mt-4 max-w-lg'}>{caption}</div>
            </div>
          </AnimatedReveal>

          {extra ? (
            <AnimatedReveal delayIndex={2} className="mt-3">
              {extra}
            </AnimatedReveal>
          ) : null}

          <AnimatedReveal delayIndex={2}>
            <p className="mb-10 mt-4 font-mono text-[10px] tracking-[0.18em] text-greyfade">{source}</p>
          </AnimatedReveal>
          <AnimatedReveal delayIndex={2}>
            <p
              className={cn(
                'max-w-2xl text-[15px] font-light leading-relaxed md:text-lg',
                isDark ? 'text-greysoft' : 'text-greyfade',
              )}
            >
              {body}
            </p>
          </AnimatedReveal>
          <AnimatedReveal delayIndex={3}>
            <p
              className={cn(
                'mt-7 max-w-2xl border-l-2 border-fire pl-5 font-serif text-base italic leading-relaxed md:text-lg',
                isDark ? 'text-white/75' : 'text-black/70',
              )}
            >
              {quote}
            </p>
          </AnimatedReveal>
        </div>
      </Container>

      <div className="relative h-64 md:hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          unoptimized
          loading="lazy"
          sizes="100vw"
          style={{ objectPosition: imageObjectPosition }}
          className="object-cover brightness-[0.88] saturate-[1.1]"
        />
      </div>
    </section>
  );
}
