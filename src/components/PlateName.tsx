import { useEffect, useRef } from 'react';

const LINES = ['King', 'Joshua', 'Montayre'];

// Each plate slips in its own direction when the press is jolted.
const SLIP = {
  c: [-1, 0.45],
  m: [0.85, -0.6],
  y: [0.35, 1],
} as const;

/**
 * The name printed as four separations. On load the C, M and Y plates run
 * into register under the key plate; fast pointer movement knocks them out
 * again and they spring back.
 */
export default function PlateName() {
  const root = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !finePointer) return;

    let offset = 0; // current slip, px
    let velocity = 0;
    let target = 0;
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;
    let raf = 0;
    let visible = true;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(el);

    const tick = () => {
      // critically-damped-ish spring back to register
      const force = (target - offset) * 0.16;
      velocity = (velocity + force) * 0.72;
      offset += velocity;
      target *= 0.82;
      el.style.setProperty('--slip', offset.toFixed(2));
      if (Math.abs(offset) > 0.05 || Math.abs(target) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        el.style.setProperty('--slip', '0');
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) return;
      const now = performance.now();
      const dt = Math.max(16, now - lastT);
      const speed = Math.hypot(e.clientX - lastX, e.clientY - lastY) / dt; // px per ms
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;
      if (speed < 0.6) return;
      target = Math.min(9, Math.max(target, (speed - 0.6) * 4.2));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const lines = LINES.map((l) => (
    <span key={l} className="pname__line">
      {l}
    </span>
  ));

  return (
    <h1 ref={root} className="pname">
      <span className="sr-only">King Joshua Montayre</span>
      {(Object.keys(SLIP) as (keyof typeof SLIP)[]).map((p) => (
        <span
          key={p}
          aria-hidden="true"
          className={`pname__plate pname__plate--${p}`}
          style={
            {
              '--sx': SLIP[p][0],
              '--sy': SLIP[p][1],
            } as React.CSSProperties
          }
        >
          {lines}
        </span>
      ))}
      <span aria-hidden="true" className="pname__plate pname__plate--k">
        {lines}
      </span>
    </h1>
  );
}
