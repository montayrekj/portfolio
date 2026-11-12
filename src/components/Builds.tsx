import classNames from 'classnames';
import { PROJECTS, Project } from '../constants/projects';
import { ArrowUpRight, CropMarks } from './Marks';

const FEATURE_INKS = ['c', 'm', 'y', 'k'] as const;

function Links({ project }: { project: Project }) {
  return (
    <p className="build__links">
      <a className="link link--live" href={project.projectLink} target="_blank" rel="noreferrer">
        {project.liveLabel ?? 'View live'} <ArrowUpRight />
        <span className="sr-only"> (opens {project.title} in a new tab)</span>
      </a>
      {project.githubLink && (
        <a className="link" href={project.githubLink} target="_blank" rel="noreferrer">
          Source <ArrowUpRight />
          <span className="sr-only"> (GitHub repository for {project.title})</span>
        </a>
      )}
    </p>
  );
}

export default function Builds() {
  const featured = PROJECTS.slice(0, 5);
  const gang = PROJECTS.slice(5);

  return (
    <section className="section builds" id="builds" aria-labelledby="builds-title">
      <div className="section__head">
        <h2 id="builds-title" className="display">
          Selected builds
        </h2>
        <p className="section__meta">Live sites and side projects · source on GitHub where public</p>
      </div>

      <div className="features">
        {featured.map((p, i) => (
          <article key={p.title} className={classNames('feature', i % 2 === 1 && 'feature--flip')}>
            <a
              className={classNames('plate', `plate--${FEATURE_INKS[i % 4]}`)}
              href={p.projectLink}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <CropMarks />
              <img
                src={p.image}
                srcSet={`${p.imageSm} 800w, ${p.image} 1600w`}
                sizes="(max-width: 860px) 92vw, 58vw"
                alt=""
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: p.ratio }}
              />
              {p.partners && (
                <span className="plate__partners">
                  {p.partners.map((pt) => (
                    <img key={pt.title} src={pt.image} alt="" loading="lazy" decoding="async" />
                  ))}
                </span>
              )}
            </a>
            <div className="feature__text">
              <h3 className="feature__title">{p.title}</h3>
              <p className="feature__desc">{p.description}</p>
              {p.partners && (
                <ul className="partners">
                  {p.partners.map((pt) => (
                    <li key={pt.title}>
                      <a className="link" href={pt.projectLink} target="_blank" rel="noreferrer">
                        {pt.title} <ArrowUpRight />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      <span>{pt.place}</span>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="inks">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Links project={p} />
            </div>
          </article>
        ))}
      </div>

      <div className="gang">
        <p className="gang__title">
          <b>Gang run</b> · smaller builds, printed on one sheet
        </p>
        <ul className="gang__sheet">
          {gang.map((p) => (
            <li key={p.title} className="gang__item">
              {p.typeCover ? (
                <div className="gang__img gang__img--type" aria-hidden="true">
                  <span>{p.title}</span>
                </div>
              ) : (
                <div className="gang__img">
                  <img src={p.imageSm} alt="" loading="lazy" decoding="async" />
                </div>
              )}
              <h3 className="gang__name">{p.title}</h3>
              <p className="gang__desc">{p.description}</p>
              <Links project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
