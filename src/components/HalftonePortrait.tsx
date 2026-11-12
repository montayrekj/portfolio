import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import portrait from '../assets/king-portrait.webp';
import type { PlateKey } from '../constants/stack';
import { PRINT_ORDER, Separations, drawPlate, loadImage, separate } from '../lib/halftone';

const INK: Record<PlateKey, string> = {
  c: '#00a0e3',
  m: '#e4007c',
  y: '#ffed00',
  k: '#141414',
};

let sepCache: Promise<Separations> | null = null;
const getSeparations = () => {
  if (!sepCache) {
    sepCache = loadImage(portrait).then((img) =>
      // Background prints as a light cyan tint screen so the white shirt keeps its edge.
      separate(img, img.naturalWidth, img.naturalHeight, { ground: { c: 0.26 } }),
    );
  }
  return sepCache;
};

type Props = {
  /** Plates laid down on this proof, in press order. */
  plates?: PlateKey[];
  /** Plate pulled out of the print; the others drop back. */
  active?: PlateKey | null;
  /** Distance between dot centres, in CSS pixels. */
  cell?: number;
  className?: string;
  label?: string;
};

export default function HalftonePortrait({
  plates = PRINT_ORDER,
  active = null,
  cell = 4.2,
  className,
  label = 'Portrait of King Joshua Montayre, printed as a four-color halftone',
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvases = useRef<Partial<Record<PlateKey, HTMLCanvasElement | null>>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let cancelled = false;
    let frame = 0;
    let lastW = 0;

    const render = async () => {
      const sep = await getSeparations();
      if (cancelled) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || Math.round(rect.width) === lastW) return;
      lastW = Math.round(rect.width);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);
      for (const p of plates) {
        const cv = canvases.current[p];
        if (!cv) continue;
        cv.width = width;
        cv.height = height;
        const ctx = cv.getContext('2d');
        if (!ctx) continue;
        ctx.clearRect(0, 0, width, height);
        drawPlate(ctx, sep, p, {
          width,
          height,
          cell: cell * dpr,
          color: INK[p],
          gamma: p === 'k' ? 1.15 : 1,
        });
      }
      setReady(true);
    };

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => void render());
    });
    ro.observe(el);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [plates, cell]);

  return (
    <div
      ref={wrap}
      className={classNames('ht', ready && 'is-ready', active && 'is-isolating', className)}
      role="img"
      aria-label={label}
    >
      {plates.map((p) => (
        <canvas
          key={p}
          ref={(node) => {
            canvases.current[p] = node;
          }}
          className={classNames('ht__plate', active === p && 'is-active')}
          data-plate={p}
        />
      ))}
    </div>
  );
}
