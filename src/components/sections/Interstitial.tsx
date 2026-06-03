import type { ReactNode } from 'react';
import { AnimatedReveal, ParallaxImage, Starfield } from '@/components/ui';
import { cn } from '@/lib/cn';

interface InterstitialProps {
  /** Rótulo da tela (data-screen-label). */
  label: string;
  /** Frase central (h2 ou p, formatada pelo call-site). */
  children: ReactNode;
  /** Imagem de fundo com parallax de scroll (opcional). */
  image?: { src: string; alt: string; speed?: number };
  /** Mostra campo de estrelas no lugar da imagem. */
  starfield?: boolean;
  /** Override de altura (padrão `h-screen`). */
  className?: string;
}

/**
 * Tela narrativa de "respiro"/"transição", uma frase de impacto centralizada
 * sobre fundo escuro, com imagem em parallax ou starfield.
 */
export function Interstitial({ label, children, image, starfield, className }: InterstitialProps) {
  return (
    <section
      data-screen-label={label}
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-black',
        className ?? 'h-screen',
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <ParallaxImage src={image.src} alt={image.alt} speed={image.speed ?? 0.12} />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ) : null}
      {starfield ? <Starfield className="opacity-50" /> : null}

      <AnimatedReveal className="relative z-10 max-w-5xl px-6 text-center">
        {children}
      </AnimatedReveal>
    </section>
  );
}
