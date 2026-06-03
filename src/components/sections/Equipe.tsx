import { AnimatedReveal, Card, Container, SectionHeading } from '@/components/ui';
import { TEAM } from '@/constants/copy';

/** Seção "Equipe", o squad 2ESPH (nome + RM). */
export function Equipe() {
  return (
    <section
      id="equipe"
      data-screen-label="Equipe"
      className="relative overflow-hidden border-t border-black/5 bg-lightgray py-28 text-black md:py-40"
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <AnimatedReveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-fire">EQUIPE</p>
          </AnimatedReveal>
          <SectionHeading
            text="Quem está construindo a POLARIS"
            className="mb-6 text-[clamp(2.5rem,5vw,5.5rem)] font-extralight leading-[1.05] tracking-tight"
          />
          <AnimatedReveal delayIndex={2}>
            <p className="font-serif text-lg italic leading-relaxed text-greyfade md:text-xl">
              Estudantes de Engenharia de Software da FIAP, turma 2ESPH, primeiro semestre de 2026.
              Squad de cinco integrantes operando em ritmo de startup durante a Global Solution.
            </p>
          </AnimatedReveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {TEAM.map((member, index) => {
            const [firstName, ...lastName] = member.name.split(' ');
            return (
              <AnimatedReveal key={member.rm} delayIndex={index}>
                <Card padding="p-6" className="h-full">
                  <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-fire">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mb-1 text-lg font-medium leading-tight">
                    {firstName} <span className="font-light text-greyfade">{lastName.join(' ')}</span>
                  </h3>
                  <p className="mb-3 font-mono text-[11px] text-greyfade">RM {member.rm}</p>
                  <p className="text-[13px] font-light text-greyfade">Engenharia de Software</p>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
