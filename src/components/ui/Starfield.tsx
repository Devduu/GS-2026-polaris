import { cn } from '@/lib/cn';

interface StarfieldProps {
  className?: string;
}

/** Campo de estrelas decorativo no fundo, feito só com CSS. */
export function Starfield({ className }: StarfieldProps) {
  return <div className={cn('starfield', className)} aria-hidden />;
}
