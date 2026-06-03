'use client';

import { useCounter, useIntersectionObserver } from '@/hooks';
import { cn } from '@/lib/cn';
import type { Stat } from '@/types';

interface StatCounterProps {
  stat: Stat;
  className?: string;
}

/**
 * Número que conta de 0 até o valor final quando entra na tela, com prefixo e
 * unidade menores ao lado (ex.: "US$ 613 bi").
 */
export function StatCounter({ stat, className }: StatCounterProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLParagraphElement>({
    once: true,
    rootMargin: '0px 0px -15% 0px',
  });
  const value = useCounter({
    target: stat.target,
    decimals: stat.decimals,
    suffix: stat.suffix,
    thousands: stat.thousands,
    active: isInView,
  });

  return (
    <p ref={ref} className={cn('tabular-nums', className)}>
      {stat.prefix ? <span className="mr-1 align-baseline text-[0.5em]">{stat.prefix}</span> : null}
      {value}
      {stat.unit ? (
        <span className={stat.unitClassName ?? 'ml-2 text-[0.5em]'}>{stat.unit}</span>
      ) : null}
    </p>
  );
}
