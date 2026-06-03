/** Link de navegação (menu do topo e rodapé). `id` é a âncora da seção (`#id`). */
export interface NavLink {
  id: string;
  label: string;
}

/** Tom visual da seção: fundo preto ou cinza-claro. */
export type SectionTone = 'dark' | 'light';

/** Número que conta de zero até um valor, com formatação opcional. */
export interface Stat {
  /** Valor final da contagem. */
  target: number;
  /** Texto descritivo abaixo do número. */
  label: string;
  /** Texto pequeno antes do número (ex.: `US$`, `+`). */
  prefix?: string;
  /** Texto colado ao número (ex.: `%`, `min`, `k`, `+`). */
  suffix?: string;
  /** Unidade menor ao lado do número (ex.: `bi`, `tri`). */
  unit?: string;
  /** Classe extra para estilizar a unidade. */
  unitClassName?: string;
  /** Quantas casas decimais mostrar (com vírgula). */
  decimals?: number;
  /** Usa ponto como separador de milhar. */
  thousands?: boolean;
}

/** Integrante da equipe (usado na seção Equipe e no rodapé). */
export interface TeamMember {
  name: string;
  rm: string;
}
