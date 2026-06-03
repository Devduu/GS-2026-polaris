'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui';
import { BRAND, NAV_LINKS } from '@/constants/copy';
import { HEADER_SCROLL_THRESHOLD } from '@/constants/tokens';
import { useScrollProgress } from '@/hooks';
import { cn } from '@/lib/cn';
import { Logo } from './Logo';
import { MobileNav } from './MobileNav';

/**
 * Barra de navegação fixa. Transparente sobre o hero e sólida (com blur) após
 * passar o limiar de scroll. Destaca o link da seção visível (scrollspy).
 */
export function Header() {
  const { scrollY } = useScrollProgress();
  const isSolid = scrollY > HEADER_SCROLL_THRESHOLD;
  const [activeId, setActiveId] = useState('');

  // Marca o link da seção atual; só observa as seções que já existem na página.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-[60] border-b transition-[background-color,backdrop-filter,border-color] duration-[400ms] ease-ease',
        isSolid
          ? 'border-white/[0.08] bg-black/[0.82] backdrop-blur-[14px]'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#hero" aria-label="POLARIS, ir para o início" className="group relative">
          <Logo className="h-7 md:h-9" />
          <span className="pointer-events-none absolute left-0 top-[calc(100%+12px)] whitespace-nowrap rounded border border-white/[0.12] bg-[#0A0A0A] px-3 py-1.5 font-mono text-[10px] tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {BRAND.logoTooltip}
          </span>
        </a>

        <div className="hidden items-center gap-9 text-[12px] font-medium tracking-[0.16em] text-greysoft lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'relative transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-fire after:transition-[width] after:duration-[350ms] hover:text-white hover:after:w-full',
                activeId === link.id && 'text-white after:w-full',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="hidden whitespace-nowrap font-mono text-[0.7rem] font-medium uppercase tracking-[0.25em] text-fire xl:block">
          {BRAND.context}
        </span>

        <MobileNav />
      </Container>
    </nav>
  );
}
