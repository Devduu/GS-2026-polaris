import type { NavLink, TeamMember } from '@/types';

/** Identidade e textos institucionais do POLARIS. */
export const BRAND = {
  tagline: 'A estrela que guia decisões.',
  manifesto: 'Onde a tecnologia falha, a POLARIS guia.',
  description: 'Plataforma brasileira de inteligência espacial.',
  logoTooltip: 'POLARIS, α Ursae Minoris, 433 anos-luz da Terra',
  context: 'FIAP GLOBAL SOLUTION, 2026',
} as const;

/** Links da navegação principal (topnav), `id` casa com a âncora `#id`. */
export const NAV_LINKS: NavLink[] = [
  { id: 'quem', label: 'SOBRE' },
  { id: 'contexto', label: 'CONTEXTO' },
  { id: 'solucao', label: 'SOLUÇÃO' },
  { id: 'atalaia', label: 'CASO' },
  { id: 'impacto', label: 'IMPACTO' },
  { id: 'equipe', label: 'EQUIPE' },
];

/** Links do rodapé, rótulos mais descritivos que o topnav. */
export const FOOTER_LINKS: NavLink[] = [
  { id: 'quem', label: 'Quem somos' },
  { id: 'solucao', label: 'Produtos' },
  { id: 'atalaia', label: 'Caso de uso' },
  { id: 'impacto', label: 'Impacto' },
  { id: 'equipe', label: 'Equipe' },
];

/** Equipe 2ESPH, nome e RM. */
export const TEAM: TeamMember[] = [
  { name: 'Kauê de Almeida Pena', rm: '564211' },
  { name: 'Eduardo Delorenzo Moraes', rm: '561749' },
  { name: 'Lucas Rowlands Abat', rm: '562994' },
  { name: 'Ronaldo Aparecido Monteiro Almeida', rm: '565017' },
  { name: 'William Queiroz', rm: '565032' },
];

/** Linhas do terminal "mission.log" do rodapé. */
export const MISSION_LOG: string[] = [
  '2026-05-29 02:33 BRT, POLARIS deployment scheduled',
  '2026-05-29 02:34 BRT, Pre-launch checks: PASSED',
  '2026-05-29 02:35 BRT, Mission control: GO',
];

/** Linhas finais do rodapé (copyright e créditos). */
export const FOOTER_BOTTOM = {
  copyright:
    '© 2026 POLARIS, Global Solution FIAP, Engenharia de Software, Turma 2ESPH',
  credits: 'Fonte: Space Grotesk, Design e desenvolvimento pela equipe POLARIS',
} as const;
