import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Limita a largura do conteúdo e centraliza, com margem nas laterais. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[min(1800px,92vw)] px-6 md:px-10', className)}>
      {children}
    </div>
  );
}
