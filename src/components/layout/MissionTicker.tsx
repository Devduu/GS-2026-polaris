/**
 * Faixa fixa no canto inferior esquerdo ("MISSION LIVE") com um cursor piscando.
 * É apenas decorativa (aria-hidden).
 */
export function MissionTicker() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-[15px] left-[18px] z-[58] font-mono text-[11px] tracking-[0.2em] text-greyfade opacity-[0.55]"
    >
      MISSION LIVE, MAI/2026, v1.0{' '}
      <b className="animate-blink font-normal text-fire">_</b>
    </div>
  );
}
