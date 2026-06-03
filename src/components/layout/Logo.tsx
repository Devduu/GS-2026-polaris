import Image from 'next/image';
import { cn } from '@/lib/cn';

interface LogoProps {
  /** Classe de altura (ex.: `h-9`); a largura é automática. */
  className?: string;
}

/**
 * Wordmark oficial POLARIS, símbolo de estrela orbital + letras, em traço
 * claro (pensado para fundos escuros). Usado no Header e no Footer.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/imagegs4.png"
      alt="POLARIS"
      width={1318}
      height={244}
      priority
      className={cn('w-auto', className)}
    />
  );
}
