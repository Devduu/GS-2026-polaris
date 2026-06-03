'use client';

import type { ReactNode } from 'react';
import { useTilt } from '@/hooks';
import type { SectionTone } from '@/types';
import { Card } from './Card';

interface TiltCardProps {
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
}

/** Card com inclinação 3D no mouse, usado nos cards de produto da Solução. */
export function TiltCard({ tone, className, children }: TiltCardProps) {
  const { ref, transform } = useTilt<HTMLDivElement>(5);

  return (
    <div
      ref={ref}
      className="h-full [transform-style:preserve-3d]"
      style={{ transform, transition: 'transform 0.3s var(--ease)' }}
    >
      <Card tone={tone} className={className}>
        {children}
      </Card>
    </div>
  );
}
