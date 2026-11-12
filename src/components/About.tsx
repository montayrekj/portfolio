import { useState } from 'react';
import classNames from 'classnames';
import { PLATES, PlateKey } from '../constants/stack';
import HalftonePortrait from './HalftonePortrait';
import { RegMark } from './Marks';

// Progressive proofs: the order the plates go down on press.
const PROGRESSIVE: { label: string; plates: PlateKey[] }[] = [
  { label: 'Yellow', plates: ['y'] },
  { label: '+ Magenta', plates: ['y', 'm'] },
  { label: '+ Cyan', plates: ['y', 'm', 'c'] },
  { label: '+ Key', plates: ['y', 'm', 'c', 'k'] },
];

const FACTS = [
  ['Based in', 'Cebu City, Philippines (GMT+8)'],
  ['Works', 'Remote, with US and Japanese teams'],
  ['Studied', 'BS Computer Science, Cebu Institute of Technology – University, 2014–2018'],
  ['Shipping since', '2018'],
];

export default function About() {
  const [focus, setFocus] = useState<PlateKey | null>(null);

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about__intro">
        <div
          className="progressive"
          role="group"
          aria-label="Progressive proofs of my portrait, one ink at a time"
        >
          {PROGRESSIVE.map((step) => (
            <figure key={step.label} className="progressive__step">
              <HalftonePortrait plates={step.plates} cell={3.8} label={`Portrait, ${step.label} proof`} />
              <figcaption>{step.label}</figcaption>
            </figure>
          ))}
          <p className="progressive__cap">
            <RegMark size={16} />
            Progressive proofs: the same portrait one plate at a time, in the order the press lays
            them down.
          </p>
        </div>
        <div className="about__text">
          <h2 id="about-title" className="display">
            Hi, I'm King.
          </h2>
          <div className="about__body">
            <p className="about__lead">
              I'm a full stack developer in Cebu City. I studied Computer Science, started shipping
              production software in 2018, and haven't stopped: web apps for Japanese enterprise
              clients, component libraries other teams build stores on, growth-driven frontends, and
              mobile apps that carry real stakes.
            </p>
            <p>
              I've led cross-functional teams, trained developers moving to React, and taken legacy
              codebases through framework migrations. I enjoy working in a team, and I'm just as
              comfortable owning a build end to end.
            </p>
            <dl className="facts">
              {FACTS.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="plates" onMouseLeave={() => setFocus(null)}>
        <h3 className="plates__title display display--sm">Full color takes four plates.</h3>
        <p className="plates__note">
          Each plate is one layer I build in, from the interface people touch to the pipeline that
          ships it. Where two plates meet they overlap, the way a frontend and its API have to.
        </p>
        <ul className={classNames('plates__band', focus && 'is-isolating')}>
          {PLATES.map((p) => (
            <li
              key={p.key}
              className={classNames('sep', `sep--${p.key}`, focus === p.key && 'is-on')}
              onMouseEnter={() => setFocus(p.key)}
            >
              <span className="sep__letter" aria-hidden="true">
                {p.key.toUpperCase()}
              </span>
              <h4 className="sep__layer">{p.layer}</h4>
              <p className="sep__line">
                {p.ink} plate. {p.line}
              </p>
              <ul className="sep__tools">
                {p.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
