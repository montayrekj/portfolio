import classNames from 'classnames';

/** Trim marks at the four corners of the nearest positioned parent. */
export function CropMarks({ className }: { className?: string }) {
  return (
    <span className={classNames('crops', className)} aria-hidden="true">
      <i className="crop crop--tl" />
      <i className="crop crop--tr" />
      <i className="crop crop--bl" />
      <i className="crop crop--br" />
    </span>
  );
}

/** Registration target: the mark every plate is aligned to. */
export function RegMark({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={classNames('regmark', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <circle cx="12" cy="12" r="7" />
      <path d="M12 0v24M0 12h24" />
      <path d="M12 7a5 5 0 0 1 5 5h-5z M12 17a5 5 0 0 1-5-5h5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const STRIP = [
  'var(--c)', 'var(--m)', 'var(--y)', 'var(--k)',
  'var(--cm)', 'var(--cy)', 'var(--my)',
  'var(--c-50)', 'var(--m-50)', 'var(--y-50)', 'var(--k-50)',
  'var(--c-25)', 'var(--m-25)', 'var(--y-25)', 'var(--k-25)',
  'var(--k-75)', 'var(--k-10)',
];

const PROOF_DATE = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

/** The slug line printed in the margin of every proof: job, plates, date. */
export function PressSlug({ sheet, className }: { sheet: string; className?: string }) {
  return (
    <div className={classNames('pslug', className)} aria-hidden="true">
      <RegMark size={16} />
      <span className="pslug__job">King Joshua Montayre · portfolio · {sheet}</span>
      <span className="pslug__plates">
        <i style={{ background: 'var(--c)' }} />C<i style={{ background: 'var(--m)' }} />M
        <i style={{ background: 'var(--y)' }} />Y<i style={{ background: 'var(--k)' }} />K
      </span>
      <span className="pslug__date">4/C process · proofed {PROOF_DATE}</span>
      <RegMark size={16} />
    </div>
  );
}

/** A press colour bar: solids, overprints and tint steps, used as a section edge. */
export function ColorStrip({ className }: { className?: string }) {
  return (
    <div className={classNames('strip', className)} aria-hidden="true">
      {STRIP.concat(STRIP).map((bg, i) => (
        <i key={i} style={{ background: bg }} />
      ))}
    </div>
  );
}

/**
 * An amplitude-modulated tint ramp: dots grow from nothing to solid along the
 * diagonal, the way a printed gradient is actually made.
 */
export function HalftoneRamp({
  cols = 28,
  rows = 18,
  className,
}: {
  cols?: number;
  rows?: number;
  className?: string;
}) {
  const cell = 10;
  const dots = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const t = Math.min(1, Math.max(0, (i / (cols - 1)) * 0.75 + (1 - j / (rows - 1)) * 0.55 - 0.32));
      if (t < 0.04) continue;
      const r = cell * 0.72 * Math.sqrt(t);
      dots.push(<circle key={`${i}-${j}`} cx={i * cell + cell / 2} cy={j * cell + cell / 2} r={r.toFixed(2)} />);
    }
  }
  return (
    <svg
      className={classNames('ramp', className)}
      viewBox={`0 0 ${cols * cell} ${rows * cell}`}
      preserveAspectRatio="xMaxYMin slice"
      aria-hidden="true"
    >
      <g transform={`rotate(15 ${(cols * cell) / 2} ${(rows * cell) / 2})`}>{dots}</g>
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M2.5 8h10M8.5 4l4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M8 2.5v10M4 8.5l4 4 4-4M3 14.5h10" strokeLinecap="square" />
    </svg>
  );
}

export function GitHubMark() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function LinkedInMark() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M0 1.15C0 .52.52 0 1.17 0h13.66C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.17 1.15H1.17C.52 16 0 15.48 0 14.85V1.15zm4.94 12.24V6.17H2.54v7.22h2.4zM3.74 5.18c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01zm4.91 8.21V9.36c0-.22.02-.43.08-.59.17-.43.57-.88 1.23-.88.87 0 1.22.66 1.22 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.84.7-2.16 1.19V6.17h-2.4c.03.68 0 7.22 0 7.22h2.4z" />
    </svg>
  );
}
