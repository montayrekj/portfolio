import classNames from 'classnames';
import { JOBS } from '../constants/experience';
import { RegMark } from './Marks';

// Past jobs run as tint fields, cycling through the process inks.
const TINTS = ['m', 'y', 'c', 'k'] as const;
const PAST = JOBS.filter((j) => !j.current);

export default function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="section__head">
        <h2 id="experience-title" className="display">
          Where I've shipped
        </h2>
        <p className="section__meta">
          <span className="tnum">2018 → now</span> · five teams · US &amp; Japanese clients
        </p>
      </div>

      <ol className="tickets">
        {JOBS.map((job) => (
          <li
            key={job.company}
            className={classNames('ticket', job.current && 'ticket--current')}
            data-tint={job.current ? undefined : TINTS[PAST.indexOf(job) % TINTS.length]}
          >
            <div className="ticket__when">
              <RegMark size={18} className="ticket__reg" />
              <span className="ticket__year tnum">{job.start}</span>
              <span className="ticket__period tnum">{job.period}</span>
            </div>
            <div className="ticket__body">
              <h3 className="ticket__company">{job.company}</h3>
              <p className="ticket__role">{job.role}</p>
              <p className="ticket__summary">{job.summary}</p>
              <ul className="ticket__points">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="ticket__meta">
              <span className={classNames('stamp', job.current ? 'stamp--live' : 'stamp--done')}>
                {job.current ? 'On press' : 'Shipped'}
              </span>
              <p className="ticket__inks-label">Worked in</p>
              <ul className="inks">
                {job.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
