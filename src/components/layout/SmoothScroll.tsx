'use client';

import { useEffect } from 'react';

const HEADER_FALLBACK = 80;
// Respiro acima do conteúdo quando ele é alto demais para centralizar.
const EXTRA_GAP = 16;

/**
 * Primeiro bloco de CONTEÚDO TEXTUAL da seção: ignora fundos absolutos/fixos
 * (imagens, starfield) e banners de imagem sem texto (ex.: o foguete da
 * Contexto), para a navegação cair no conteúdo, não na decoração.
 */
function findContentAnchor(section: HTMLElement): HTMLElement {
  const inFlow = Array.from(section.children).filter((el): el is HTMLElement => {
    if (!(el instanceof HTMLElement)) return false;
    const position = getComputedStyle(el).position;
    return position !== 'absolute' && position !== 'fixed';
  });
  const withText = inFlow.find((el) => (el.textContent ?? '').trim().length > 0);
  return withText ?? inFlow[0] ?? section;
}

/**
 * Rolagem suave para âncoras. O Hero vai ao topo absoluto da página. As demais
 * seções CENTRALIZAM o conteúdo na altura útil quando ele cabe (evita "vazio
 * embaixo" em seções curtas); quando o conteúdo é mais alto que a tela, ancora
 * no topo com um respiro. Um único scrollTo, sem rechecks por timer, que
 * reiniciavam a animação e travavam o destino para seções distantes.
 */
export function SmoothScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Respeita Cmd/Ctrl+clique (abrir em nova aba) e cliques não-primários.
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;

      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = anchor?.getAttribute('href')?.slice(1);
      if (!id) return;
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();

      // Logo / Hero: começo absoluto da página, sem offset.
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', location.pathname + location.search);
        return;
      }

      const headerHeight =
        document.querySelector('nav')?.getBoundingClientRect().height ?? HEADER_FALLBACK;
      const content = findContentAnchor(section);
      const rect = content.getBoundingClientRect();
      const available = window.innerHeight - headerHeight;
      const freeSpace = available - rect.height;
      // Conteúdo curto → centraliza na área útil; conteúdo alto → topo com respiro.
      const offset =
        freeSpace > EXTRA_GAP * 2 ? headerHeight + freeSpace / 2 : headerHeight + EXTRA_GAP;
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      // Atualiza a URL sem provocar um segundo salto do navegador.
      history.replaceState(null, '', `#${id}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
