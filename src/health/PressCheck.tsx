import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import type { AppReport, CheckResult, HealthReport, Status } from '../../server/health/types';
import { ArrowUpRight, CropMarks, PressSlug } from '../components/Marks';

// Each build keeps the ink of its plate in Selected builds (Aluma holds C).
const INKS = ['m', 'y', 'k', 'c'] as const;

const STAMP: Record<Status, string> = { ok: 'OK', warn: 'Warning', fail: 'Failing', skip: 'Skipped' };
const MARK: Record<Status, string> = { ok: 'OK', warn: 'Warn', fail: 'Fail', skip: 'Skip' };

type Problem = 'locked' | 'offline' | null;

const duration = (ms: number) => (ms < 1000 ? `${ms} ms` : `${(ms / 1000).toFixed(1)} s`);
const host = (url: string) => new URL(url).host;

function tally(apps: AppReport[]): string {
  const count = (s: Status) => apps.filter((a) => a.status === s).length;
  const parts = [`${count('ok')} OK`];
  if (count('warn')) parts.push(`${count('warn')} with warnings`);
  if (count('fail')) parts.push(`${count('fail')} failing`);
  return `${apps.length} builds · ${parts.join(' · ')}`;
}

function Check({ check }: { check: CheckResult }) {
  return (
    <li className={classNames('chk', `chk--${check.status}`)}>
      <span className="chk__label">{check.label}</span>
      <span className="chk__detail">{check.detail}</span>
      <span className="chk__ms tnum">{check.ms === null ? '' : duration(check.ms)}</span>
      <span className="chk__status">
        <i className={classNames('ovp', `ovp--${check.status}`)} aria-hidden="true" />
        {MARK[check.status]}
      </span>
    </li>
  );
}

function Job({ app, index }: { app: AppReport; index: number }) {
  return (
    <li className={classNames('job', `job--${INKS[index % INKS.length]}`)}>
      <header className="job__head">
        <span className="job__no tnum" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="job__name">
          <h2 className="job__title">{app.title}</h2>
          <a className="link link--live job__url" href={app.url} target="_blank" rel="noreferrer">
            {host(app.url)} <ArrowUpRight />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <span className={classNames('pc-stamp', 'ovp', `ovp--${app.status}`)}>{STAMP[app.status]}</span>
      </header>
      <ul className="job__checks">
        {app.checks.map((c) => (
          <Check key={c.label} check={c} />
        ))}
      </ul>
    </li>
  );
}

export default function PressCheck() {
  const [report, setReport] = useState<HealthReport | null>(null);
  const [running, setRunning] = useState(true);
  const [problem, setProblem] = useState<Problem>(null);

  const run = useCallback(async () => {
    setRunning(true);
    try {
      const res = await fetch('/api/health', { cache: 'no-store', credentials: 'same-origin' });
      if (res.status === 404) {
        setProblem('locked');
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setReport((await res.json()) as HealthReport);
      setProblem(null);
    } catch {
      setProblem('offline');
    } finally {
      setRunning(false);
    }
  }, []);

  useEffect(() => {
    run();
  }, [run]);

  const checkedAt = report
    ? new Date(report.checkedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' })
    : null;

  return (
    <div className="press">
      <main className="stock pc" aria-busy={running}>
        <CropMarks />
        <PressSlug sheet="press check" />

        <header className="pc__head">
          <div>
            <a className="pc__back" href="/">
              ← Portfolio
            </a>
            <h1 className="display">Press check</h1>
            <p className="pc__lede">
              Every selected build, pulled and inspected: its pages, photos, link previews and the services
              behind them.
            </p>
          </div>
          <div className="pc__run">
            <button type="button" className="btn btn--key" onClick={run} disabled={running}>
              {running ? 'Checking…' : 'Check again'}
            </button>
            <p className="pc__when tnum" aria-live="polite">
              {running
                ? 'Pulling proofs…'
                : checkedAt && report
                  ? `Checked ${checkedAt} · took ${duration(report.ms)}`
                  : ''}
            </p>
          </div>
        </header>

        {report && (
          <div className="pc__tally">
            <div className="pc__bar" aria-hidden="true">
              {report.apps.map((a) => (
                <i key={a.id} className={classNames('ovp', `ovp--${a.status}`)} />
              ))}
            </div>
            <p className="tnum">{tally(report.apps)}</p>
          </div>
        )}

        {problem === 'locked' && (
          <p className="pc__problem" role="alert">
            This browser's pass has run out. Open <b>/health?key=…</b> again with your key.
          </p>
        )}
        {problem === 'offline' && (
          <p className="pc__problem" role="alert">
            The press check didn't come back. Try <b>Check again</b> in a moment.
          </p>
        )}

        {!report && running && (
          <div className="pc__pulling" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        )}

        {report && (
          <ol className={classNames('pc__jobs', running && 'is-stale')}>
            {report.apps.map((app, i) => (
              <Job key={app.id} app={app} index={i} />
            ))}
          </ol>
        )}

        <p className="pc__note">
          Aluma isn't on this sheet because the client's team watches it. Gang-run demos aren't checked.
        </p>
      </main>
    </div>
  );
}
