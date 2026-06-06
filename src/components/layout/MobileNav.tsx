'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BRAND, NAV_LINKS } from '@/constants/copy';

/**
 * Navegação para telas < lg: um botão hambúrguer no header abre um painel
 * full-screen com as âncoras.
 *
 * O painel é renderizado via PORTAL no document.body, fora do <header>. Isso é
 * essencial: quando o header vira sólido ele ganha backdrop-filter, que cria um
 * containing block e prenderia um `position: fixed` filho ao header (deixando o
 * fundo do menu sem cobrir a tela). No body, o `fixed` volta a ser relativo ao
 * viewport. Os cliques nos links são tratados pelo SmoothScroll; aqui só fechamos.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion() ?? false;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Fecha o painel se a tela crescer para o layout desktop (evita estado preso).
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const panel = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-black px-8 pb-[calc(env(safe-area-inset-bottom)+2.5rem)] pt-[calc(env(safe-area-inset-top)+1.5rem)] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="relative -mr-2 h-10 w-10 self-end"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
          </button>

          <nav className="flex flex-1 flex-col justify-center">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                initial={prefersReduced ? false : { opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: prefersReduced ? 0 : 0.1 + index * 0.06, ease: 'easeOut' }}
                className="flex items-center gap-5 border-b border-white/10 py-5"
              >
                <span className="font-mono text-[12px] tracking-wider text-fire">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[2rem] font-light tracking-tight text-white">{link.label}</span>
              </motion.a>
            ))}
          </nav>

          <p className="font-mono text-[10px] tracking-[0.25em] text-fire">{BRAND.context}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span className="h-px w-6 bg-white" />
        <span className="h-px w-6 bg-white" />
        <span className="h-px w-6 bg-white" />
      </button>
      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
