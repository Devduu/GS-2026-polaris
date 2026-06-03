'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/constants/tokens';

interface SectionHeadingProps {
  /** Texto do título (preservado em aria-label). */
  text: string;
  className?: string;
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } };
const letterVariant = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

/**
 * Título de seção com efeito SplitText: o texto é quebrado em palavras (nowrap,
 * nunca corta no meio) e as letras surgem uma a uma ao entrar na viewport.
 * Mantém o texto em `aria-label` para leitores de tela.
 */
export function SectionHeading({ text, className }: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <h2 className={className}>{text}</h2>;
  }

  const words = text.split(' ');

  return (
    <h2 aria-label={text} className={className}>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={container}
      >
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={letterVariant}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </motion.span>
    </h2>
  );
}
