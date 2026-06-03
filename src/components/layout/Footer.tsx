import { Container, Starfield } from '@/components/ui';
import {
  BRAND,
  FOOTER_BOTTOM,
  FOOTER_LINKS,
  MISSION_LOG,
  TEAM,
} from '@/constants/copy';
import { Logo } from './Logo';

/**
 * Rodapé institucional, marca, navegação, equipe e um terminal "mission.log"
 * com cursor piscando (animação CSS). Estático: renderiza no servidor.
 */
export function Footer() {
  return (
    <footer className="relative border-t border-fire/60 bg-black py-16 md:py-24">
      <Starfield className="opacity-40" />
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <a href="#hero" className="inline-block">
              <Logo className="h-9" />
            </a>
            <p className="mt-5 max-w-xs font-serif text-base italic text-greysoft">
              “{BRAND.tagline}”
            </p>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-greyfade">
              {BRAND.description} {BRAND.manifesto}
            </p>
          </div>

          <div>
            <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-fire">NAVEGAÇÃO</p>
            <nav className="flex flex-col gap-3 text-sm font-light text-greysoft">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="w-fit transition-colors hover:text-fire"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-fire">EQUIPE 2ESPH</p>
            <ul className="flex flex-col gap-2 text-sm font-light text-greysoft">
              {TEAM.map((member) => (
                <li key={member.rm}>{member.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="mb-3 font-mono text-[11px] tracking-[0.24em] text-fire">&gt; mission.log</p>
          <div className="font-mono text-xs leading-[1.95] text-greyfade">
            {MISSION_LOG.map((line) => (
              <p key={line}>
                <span className="text-fire">&gt;</span> {line}
              </p>
            ))}
            <p>
              <span className="text-fire">&gt;</span>{' '}
              <span className="animate-blink font-normal text-fire" aria-hidden>
                _
              </span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] tracking-[0.1em] text-greyfade">
            {FOOTER_BOTTOM.copyright}
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-greyfade/70">
            {FOOTER_BOTTOM.credits}
          </p>
        </div>
      </Container>
    </footer>
  );
}
