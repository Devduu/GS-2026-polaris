import Image from 'next/image';
import { AnimatedReveal, Card, SectionHeading } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { SectionTone } from '@/types';

interface ProductSectionProps {
  label: string;
  tone: SectionTone;
  /** Número da frente ("01"). */
  index: string;
  /** Nome ("POLARIS EARTH"). */
  name: string;
  title: string;
  /** Parágrafo principal. */
  intro: string;
  /** Parágrafo de detalhe. */
  detail: string;
  whoUses: string;
  example: string;
  image: string;
  imageAlt: string;
  imageObjectPosition?: string;
  /** Lado da imagem no desktop (alternância zigue-zague). */
  imageSide?: 'left' | 'right';
}

/**
 * Seção detalhada de uma frente (Earth/Connect/Fleet), layout dividido
 * conteúdo/imagem que alterna de lado, com bloco "Quem usa" e "Exemplo real".
 */
export function ProductSection({
  label,
  tone,
  index,
  name,
  title,
  intro,
  detail,
  whoUses,
  example,
  image,
  imageAlt,
  imageObjectPosition,
  imageSide = 'right',
}: ProductSectionProps) {
  const isDark = tone === 'dark';
  const imageRight = imageSide === 'right';

  return (
    <section
      data-screen-label={label}
      className={cn('relative overflow-hidden', isDark ? 'bg-black' : 'bg-lightgray text-black')}
    >
      <div className="grid items-stretch md:grid-cols-2">
        <div
          className={cn(
            'order-2 max-w-2xl px-6 py-20 md:px-12 md:py-32 lg:px-16',
            imageRight ? 'md:order-1 md:ml-auto' : 'md:mr-auto',
          )}
        >
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.26em] text-fire">
              {index} / {name}
            </p>
          </AnimatedReveal>
          <SectionHeading
            text={title}
            className="mb-8 text-[clamp(2rem,4.6vw,3.7rem)] font-extralight leading-[1.08] tracking-tight"
          />
          <AnimatedReveal delayIndex={1}>
            <p
              className={cn(
                'mb-6 text-[15px] font-light leading-relaxed md:text-lg',
                isDark ? 'text-white' : 'text-black',
              )}
            >
              {intro}
            </p>
          </AnimatedReveal>
          <AnimatedReveal delayIndex={2}>
            <p
              className={cn(
                'mb-8 text-[15px] font-light leading-relaxed md:text-base',
                isDark ? 'text-greysoft' : 'text-greyfade',
              )}
            >
              {detail}
            </p>
          </AnimatedReveal>
          <AnimatedReveal delayIndex={2} className="mb-8">
            <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-fire">QUEM USA</p>
            <p className={cn('text-sm font-light leading-relaxed', isDark ? 'text-greysoft' : 'text-greyfade')}>
              {whoUses}
            </p>
          </AnimatedReveal>
          <AnimatedReveal delayIndex={3}>
            <Card tone={tone} padding="p-6">
              <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-fire">EXEMPLO REAL</p>
              <p
                className={cn(
                  'font-serif text-[15px] italic leading-relaxed',
                  isDark ? 'text-white/75' : 'text-black/75',
                )}
              >
                {example}
              </p>
            </Card>
          </AnimatedReveal>
        </div>

        <div className={cn('relative min-h-[40vh] md:min-h-full', imageRight ? 'order-1 md:order-2' : 'order-1')}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            unoptimized
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ objectPosition: imageObjectPosition }}
            className="object-cover saturate-[1.05] contrast-[1.04]"
          />
        </div>
      </div>
    </section>
  );
}
