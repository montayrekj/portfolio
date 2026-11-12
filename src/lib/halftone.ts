import type { PlateKey } from '../constants/stack';

/** Classic offset screen angles, chosen so the four dot grids form a rosette instead of moiré. */
export const SCREEN_ANGLE: Record<PlateKey, number> = { c: 15, m: 75, y: 0, k: 45 };

/** Print order on press: yellow first, key last. */
export const PRINT_ORDER: PlateKey[] = ['y', 'm', 'c', 'k'];

export type Separations = {
  w: number;
  h: number;
  plates: Record<PlateKey, Float32Array>;
};

type SeparateOptions = {
  /** Flat tint laid under transparent areas, per plate (0–1). */
  ground?: Partial<Record<PlateKey, number>>;
  /** Grey component replacement: how much shared CMY moves into K. */
  gcr?: number;
};

/** Split an image into four ink-coverage maps (0 = bare stock, 1 = solid ink). */
export function separate(
  img: CanvasImageSource,
  w: number,
  h: number,
  { ground = {}, gcr = 0.85 }: SeparateOptions = {},
): Separations {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2D canvas unavailable');
  ctx.drawImage(img, 0, 0, w, h);
  const px = ctx.getImageData(0, 0, w, h).data;

  const n = w * h;
  const c = new Float32Array(n);
  const m = new Float32Array(n);
  const y = new Float32Array(n);
  const k = new Float32Array(n);

  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const a = px[o + 3] / 255;
    const c0 = 1 - px[o] / 255;
    const m0 = 1 - px[o + 1] / 255;
    const y0 = 1 - px[o + 2] / 255;
    const k0 = Math.min(c0, m0, y0) * gcr;
    const d = 1 - k0 || 1;
    const bg = 1 - a;
    c[i] = ((c0 - k0) / d) * a + (ground.c ?? 0) * bg;
    m[i] = ((m0 - k0) / d) * a + (ground.m ?? 0) * bg;
    y[i] = ((y0 - k0) / d) * a + (ground.y ?? 0) * bg;
    k[i] = k0 * a + (ground.k ?? 0) * bg;
  }

  return { w, h, plates: { c, m, y, k } };
}

type DrawPlateOptions = {
  /** Destination size in device pixels. */
  width: number;
  height: number;
  /** Screen ruling: distance between dot centres, in device pixels. */
  cell: number;
  color: string;
  alpha?: number;
  /** Lift or press the tone curve; >1 thins midtones. */
  gamma?: number;
};

/** Draw one separation as an amplitude-modulated dot screen at its press angle. */
export function drawPlate(
  ctx: CanvasRenderingContext2D,
  sep: Separations,
  plate: PlateKey,
  { width, height, cell, color, alpha = 1, gamma = 1 }: DrawPlateOptions,
) {
  const data = sep.plates[plate];
  const theta = (SCREEN_ANGLE[plate] * Math.PI) / 180;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const cx = width / 2;
  const cy = height / 2;
  const reach = Math.hypot(width, height) / 2 + cell;
  const steps = Math.ceil(reach / cell);
  const sx = sep.w / width;
  const sy = sep.h / height;
  // A dot at full coverage slightly overlaps its neighbours, as on press.
  const rMax = cell * 0.72;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let j = -steps; j <= steps; j++) {
    for (let i = -steps; i <= steps; i++) {
      const u = i * cell;
      const v = j * cell;
      const x = cx + u * cos - v * sin;
      const y = cy + u * sin + v * cos;
      if (x < -cell || y < -cell || x > width + cell || y > height + cell) continue;
      const px = Math.min(sep.w - 1, Math.max(0, Math.round(x * sx)));
      const py = Math.min(sep.h - 1, Math.max(0, Math.round(y * sy)));
      let t = data[py * sep.w + px];
      if (t <= 0.025) continue;
      if (gamma !== 1) t = Math.pow(t, gamma);
      const r = rMax * Math.sqrt(Math.min(1, t));
      ctx.moveTo(x + r, y);
      ctx.arc(x, y, r, 0, Math.PI * 2);
    }
  }
  ctx.fill();
  ctx.restore();
}

export const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
