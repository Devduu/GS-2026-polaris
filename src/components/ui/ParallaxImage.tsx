'use client';

import Image from 'next/image';
import { useScrollParallax } from '@/hooks';

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Intensidade do parallax conforme a rolagem. */
  speed?: number;
  /** `object-position` da imagem (ex.: 'center 60%'). */
  objectPosition?: string;
}

/**
 * Imagem de fundo full-bleed com parallax de scroll. Isola o client component
 * para que a seção que a usa possa permanecer no servidor.
 */
export function ParallaxImage({ src, alt, speed = 0.18, objectPosition }: ParallaxImageProps) {
  const { ref, transform } = useScrollParallax<HTMLDivElement>(speed);

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform" style={{ transform }}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        loading="lazy"
        sizes="100vw"
        style={{ objectPosition }}
        className="object-cover brightness-[0.88] saturate-[1.1]"
      />
    </div>
  );
}
