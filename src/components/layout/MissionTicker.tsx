/**
 * Faixa "MISSION LIVE" com um cursor piscando, apenas decorativa (aria-hidden).
 * No desktop fica fixa no canto inferior esquerdo; no celular rola junto com a
 * página, no fim, pra não cobrir o conteúdo.
 */
export function MissionTicker() {
  return (
    <div
      aria-hidden
      className="pointer-events-none z-[58] px-5 pb-10 pt-4 text-center font-mono text-[11px] tracking-[0.2em] text-greyfade opacity-[0.55] md:fixed md:bottom-[15px] md:left-[18px] md:p-0 md:text-left"
    >
      MISSION LIVE, MAI/2026, v1.0{' '}
      <b className="animate-blink font-normal text-fire">_</b>
    </div>
  );
}
