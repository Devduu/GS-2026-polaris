/**
 * Durações e easings das animações, reunidos num lugar só para que o site
 * inteiro use os mesmos valores e fique consistente.
 */

/** Easing das transições gerais (hover, header, parallax). */
export const EASE = [0.65, 0, 0.35, 1] as const;

/** Easing das entradas dos elementos quando aparecem na tela (o principal). */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Durações em segundos (unidade que o Framer Motion usa). */
export const DURATION = {
  reveal: 1,
} as const;

/** Atraso a mais entre um elemento e o próximo, para entrarem em sequência. */
export const STAGGER_STEP = 0.12;

/** Quanto o elemento sobe ao aparecer, em pixels. */
export const REVEAL_OFFSET_Y = 34;

/** Tempo que os números levam para contar até o valor final, em ms. */
export const COUNTER_DURATION_MS = 2000;

/** Intensidade do parallax que segue o mouse (deslocamento e zoom). */
export const PARALLAX = {
  strength: 12,
  scale: 1.06,
} as const;

/** A partir de quantos pixels de rolagem o header fica sólido. */
export const HEADER_SCROLL_THRESHOLD = 40;
