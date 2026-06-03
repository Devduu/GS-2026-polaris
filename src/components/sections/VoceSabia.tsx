import type { ReactNode } from 'react';
import { AnimatedReveal, Container, Starfield, StatCounter } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionTone, Stat } from '@/types';

interface VoceSabiaProps {
  /** Rótulo da tela (data-screen-label). */
  label: string;
  tone: SectionTone;
  /** Texto do olho (ex.: "VOCÊ SABIA?"). */
  eyebrow: string;
  /** Número animado (quando for um dado contável). */
  stat?: Stat;
  /** Número fixo, quando não for animado (ex.: um ano ou "<10%"). */
  staticNumber?: ReactNode;
  /** Legenda sob o número. */
  caption: string;
  /** Corpo à direita (aceita destaques inline). */
  children: ReactNode;
  source: string;
}

/**
 * Bloco "Você Sabia?", número de impacto à esquerda (animado ou fixo) e um
 * parágrafo de contexto à direita, sobre starfield (escuro) ou trama de pontos
 * (claro). Reutilizado nas seis ocorrências da landing.
 */
export function VoceSabia({
  label,
  tone,
  eyebrow,
  stat,
  staticNumber,
  caption,
  children,
  source,
}: VoceSabiaProps) {
  const isDark = tone === 'dark';

  return (
    <aside
      data-screen-label={label}
      className={cn('relative overflow-hidden', isDark ? 'bg-black' : 'bg-lightgray text-black')}
    >
      {isDark ? <Starfield className="opacity-40" /> : <div className="dotfield-light" aria-hidden />}

      <Container className="relative py-16 md:py-24">
        <div className="grid items-center gap-8 border-l-2 border-fire pl-6 md:grid-cols-[minmax(0,420px)_1fr] md:gap-16 md:pl-10">
          <AnimatedReveal>
            <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-fire">{eyebrow}</p>
            {stat ? (
              <StatCounter
                stat={stat}
                className="text-[clamp(3.2rem,9vw,7rem)] font-light leading-[0.85] tracking-tight text-fire"
              />
            ) : (
              <p className="text-[clamp(3.2rem,9vw,7rem)] font-light leading-[0.85] tracking-tight text-fire">
                {staticNumber}
              </p>
            )}
            <p
              className={cn(
                'mt-4 font-mono text-[11px] tracking-[0.2em]',
                isDark ? 'text-greysoft' : 'text-greyfade',
              )}
            >
              {caption}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delayIndex={1}>
            <p
              className={cn(
                'text-lg font-light leading-relaxed md:text-2xl',
                isDark ? 'text-greysoft' : 'text-greyfade',
              )}
            >
              {children}
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-greyfade">{source}</p>
          </AnimatedReveal>
        </div>
      </Container>
    </aside>
  );
}
