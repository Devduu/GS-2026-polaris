import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { SectionTone } from '@/types';

interface CardProps {
  children: ReactNode;
  /** Fundo claro ou escuro. */
  tone?: SectionTone;
  /** Espaçamento interno, use `p-0` quando o conteúdo controla o próprio espaçamento. */
  padding?: string;
  className?: string;
}

/**
 * Card com uma borda laranja no topo que sobe um pouco e ganha sombra quando o
 * mouse passa por cima.
 */
export function Card({ children, tone = 'light', padding = 'p-8', className }: CardProps) {
  return (
    <article
      className={cn(
        'relative border-t-4 border-fire transition-[transform,box-shadow] duration-[450ms] ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]',
        padding,
        tone === 'dark' ? 'bg-[#0F0F0F] text-white' : 'bg-cardlight text-black',
        className,
      )}
    >
      {children}
    </article>
  );
}
