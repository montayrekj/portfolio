import { useState } from 'react';
import classNames from 'classnames';
import resume from '../../public/resume.pdf';
import { PLATES, PlateKey } from '../constants/stack';
import HalftonePortrait from './HalftonePortrait';
import PlateName from './PlateName';
import { ArrowDown, ArrowRight, CropMarks, RegMark } from './Marks';

export default function Hero() {
  const [pulled, setPulled] = useState<PlateKey | null>(null);

  return (
    <section className="hero" aria-labelledby="hero-name">
      <RegMark className="hero__reg hero__reg--l" size={20} />
      <RegMark className="hero__reg hero__reg--r" size={20} />

      <div className="hero__copy" id="hero-name">
        <PlateName />
        <div className="hero__body">
          <p className="hero__role">Full Stack Developer</p>
          <p className="hero__lede">
            I've spent 7+ years shipping web, backend, and mobile products for healthcare, fintech,
            e-commerce, and SaaS teams, from a clinical-study app to full-site rebrands. Based in
            Cebu City, working remote.
          </p>
          <p className="hero__now">
            <span className="press-tag">On press</span>
            Leading the GoRuck web rebrand at MountainDev.
          </p>
          <div className="hero__cta">
            <a className="btn btn--key" href="#contact">
              Start a project <ArrowRight />
            </a>
            <a className="btn btn--line" href={resume} download="King Joshua Montayre - Resume">
              Download résumé <ArrowDown />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__field">
        <figure className="proof">
          <CropMarks />
          <HalftonePortrait active={pulled} className="proof__img" />
          <figcaption className="proof__slug">
            <span className="proof__bar" aria-hidden="true">
              <i style={{ background: 'var(--c)' }} />
              <i style={{ background: 'var(--m)' }} />
              <i style={{ background: 'var(--y)' }} />
              <i style={{ background: 'var(--k)' }} />
              <i style={{ background: 'var(--cm)' }} />
              <i style={{ background: 'var(--cy)' }} />
              <i style={{ background: 'var(--my)' }} />
            </span>
            <span>
              {pulled
                ? `${PLATES.find((p) => p.key === pulled)?.ink} plate only`
                : 'Four-color process'}
            </span>
          </figcaption>
        </figure>

        <div className="pull" onMouseLeave={() => setPulled(null)}>
          <ul className="pull__list">
            {PLATES.map((p) => (
              <li key={p.key}>
                <button
                  type="button"
                  className={classNames('pull__chip', `pull__chip--${p.key}`, pulled === p.key && 'is-on')}
                  aria-pressed={pulled === p.key}
                  onMouseEnter={() => setPulled(p.key)}
                  onFocus={() => setPulled(p.key)}
                  onBlur={() => setPulled(null)}
                  onClick={() => setPulled((cur) => (cur === p.key ? null : p.key))}
                >
                  <span className="pull__swatch" aria-hidden="true">
                    {p.key.toUpperCase()}
                  </span>
                  <span className="pull__text">
                    <b>{p.layer}</b>
                    <span>{p.tools.slice(0, 2).join(' · ')}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="pull__note">
            Four inks, four layers of the stack. Hover a plate to pull it out of the print.
          </p>
        </div>
      </div>
    </section>
  );
}
