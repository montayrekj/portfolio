/** `skip` marks a check that could not run because the page it reads did not load. */
export type Status = 'ok' | 'warn' | 'fail' | 'skip';

export interface CheckResult {
  label: string;
  status: Status;
  detail: string;
  /** time to a full response, when the check made a request */
  ms: number | null;
}

export interface AppReport {
  id: string;
  title: string;
  url: string;
  status: Status;
  checks: CheckResult[];
}

export interface HealthReport {
  checkedAt: string;
  ms: number;
  status: Status;
  apps: AppReport[];
}
