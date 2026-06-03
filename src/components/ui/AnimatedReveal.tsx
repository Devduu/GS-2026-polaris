'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE_OUT, REVEAL_OFFSET_Y, STAGGER_STEP } from '@/constants/tokens';

interface AnimatedRevealProps {
  children: ReactNode;
  /** Posição na sequência (0, 1, 2...), para os elementos entrarem um após o outro. */
  delayIndex?: number;
  className?: string;
}

/**
 * Entrada padrão dos blocos: o elemento aparece com fade e uma leve subida ao
 * entrar na tela, uma única vez. Fica parado se o usuário pediu menos movimento.
 */
export function AnimatedReveal({ children, delayIndex = 0, className }: AnimatedRevealProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : REVEAL_OFFSET_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: DURATION.reveal,
        ease: EASE_OUT,
        delay: delayIndex * STAGGER_STEP,
      }}
    >
      {children}
    </motion.div>
  );
}
