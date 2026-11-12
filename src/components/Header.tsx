import { useEffect, useState } from 'react';
import classNames from 'classnames';
import resume from '../../public/resume.pdf';
import { ArrowDown, RegMark } from './Marks';

export type Theme = 'print' | 'screen';

const SECTIONS = [
  { id: 'experience', label: 'Experience', ink: 'c', readout: 'C 100' },
  { id: 'builds', label: 'Builds', ink: 'm', readout: 'M 100' },
  { id: 'about', label: 'About', ink: 'y', readout: 'Y 100' },
  { id: 'contact', label: 'Contact', ink: 'k', readout: 'K 100' },
] as const;

type Props = {
  theme: Theme;
  onTheme: (t: Theme) => void;
};

/** The press colour bar, doubling as the site navigation. */
export default function Header({ theme, onTheme }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (n): n is HTMLElement => !!n,
    );
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        const current = SECTIONS.find((s) => seen.get(s.id));
        setActive(current ? current.id : null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <header className="bar">
      <a className="bar__id" href="#top" aria-label="King Joshua Montayre, back to top">
        <RegMark size={22} />
        <span>King Joshua Montayre</span>
      </a>
      <nav className="bar__nav" aria-label="Sections">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={classNames('patch', `patch--${s.ink}`, active === s.id && 'is-active')}
            aria-current={active === s.id ? 'location' : undefined}
          >
            <span className="patch__readout" aria-hidden="true">
              {s.readout}
            </span>
            <span className="patch__label">{s.label}</span>
            <RegMark size={14} className="patch__mark" />
          </a>
        ))}
      </nav>
      <div className="bar__ramp" aria-hidden="true">
        <i style={{ background: 'var(--c-50)' }} />
        <i style={{ background: 'var(--m-50)' }} />
        <i style={{ background: 'var(--y-50)' }} />
        <i style={{ background: 'var(--k-50)' }} />
        <i style={{ background: 'var(--k-25)' }} />
      </div>
      <div className="bar__theme" role="group" aria-label="Color theme">
        <button
          type="button"
          className={classNames('seg', theme === 'print' && 'is-on')}
          aria-pressed={theme === 'print'}
          onClick={() => onTheme('print')}
        >
          Print<small>CMYK · light</small>
        </button>
        <button
          type="button"
          className={classNames('seg', theme === 'screen' && 'is-on')}
          aria-pressed={theme === 'screen'}
          onClick={() => onTheme('screen')}
        >
          Screen<small>RGB · dark</small>
        </button>
      </div>
      <button
        type="button"
        className="bar__flip"
        onClick={() => onTheme(theme === 'print' ? 'screen' : 'print')}
        aria-label={theme === 'print' ? 'Switch to dark theme' : 'Switch to light theme'}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
          <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 2.75a7.25 7.25 0 0 1 0 14.5z" fill="currentColor" />
        </svg>
      </button>
      <a className="bar__cv" href={resume} download="King Joshua Montayre - Resume">
        Résumé <ArrowDown />
      </a>
    </header>
  );
}
