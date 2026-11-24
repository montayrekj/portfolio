import type { AppReport, CheckResult, HealthReport, Status } from './types.js';

// One press check per Selected Build, in the order they appear on the site.
// Aluma is left out on purpose: the client's team monitors it.
// The gang run (small demos and CodePens) is not checked.

const TIMEOUT_MS = 8000;
const SLOW_MS = 3000;
const USER_AGENT = 'press-check/1.0';

type Got =
  | { ok: true; status: number; type: string; text: string; bytes: number; ms: number }
  | { ok: false; error: string; ms: number };

/** Fetches a URL, reads the whole body, and times it. Never throws. */
async function get(url: string, headers: Record<string, string> = {}): Promise<Got> {
  const started = performance.now();
  const elapsed = () => Math.round(performance.now() - started);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': USER_AGENT, ...headers },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    const type = res.headers.get('content-type') ?? '';
    const isText = /text|json|javascript|xml/.test(type);
    const body = await res.arrayBuffer();
    const text = isText ? new TextDecoder().decode(body) : '';
    return { ok: true, status: res.status, type, text, bytes: body.byteLength, ms: elapsed() };
  } catch (err) {
    const name = err instanceof Error ? err.name : '';
    const code = (err as { cause?: { code?: string } }).cause?.code;
    const error =
      name === 'TimeoutError' || name === 'AbortError'
        ? `No answer in ${TIMEOUT_MS / 1000}s`
        : code === 'ENOTFOUND'
          ? `${new URL(url).host} does not resolve`
          : 'Could not connect';
    return { ok: false, error, ms: elapsed() };
  }
}

const check = (label: string, status: Status, detail: string, ms: number | null = null): CheckResult => ({
  label,
  status,
  detail,
  ms,
});

const skipped = (label: string) => check(label, 'skip', 'Not run, the page it reads did not load');
const kb = (bytes: number) => `${Math.max(1, Math.round(bytes / 1024))} KB`;
const count = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const secs = (ms: number) => `${(ms / 1000).toFixed(1)}s`;

export function worst(statuses: Status[]): Status {
  if (statuses.includes('fail')) return 'fail';
  if (statuses.includes('warn')) return 'warn';
  return 'ok';
}

/** A page that must answer 200 and carry `marker`. Returns its HTML for later checks. */
async function page(label: string, url: string, marker: string): Promise<[CheckResult, string]> {
  const r = await get(url);
  if (!r.ok) return [check(label, 'fail', r.error, r.ms), ''];
  if (r.status !== 200) return [check(label, 'fail', `Answered ${r.status}`, r.ms), ''];
  if (!r.text.includes(marker)) return [check(label, 'fail', `Loaded without “${marker}” on it`, r.ms), ''];
  if (r.ms > SLOW_MS) return [check(label, 'warn', `Slow, took ${secs(r.ms)}`, r.ms), r.text];
  return [check(label, 'ok', `Loaded, ${kb(r.bytes)}`, r.ms), r.text];
}

/** A file that must answer 200 with a content type matching `type`. */
async function file(label: string, url: string, type: RegExp, what: string): Promise<CheckResult> {
  const r = await get(url);
  if (!r.ok) return check(label, 'fail', r.error, r.ms);
  if (r.status !== 200) return check(label, 'fail', `${what} answered ${r.status}`, r.ms);
  if (!type.test(r.type)) return check(label, 'fail', `${what} came back as ${r.type || 'nothing'}`, r.ms);
  return check(label, 'ok', `${what} served, ${kb(r.bytes)}`, r.ms);
}

const decode = (s: string) => s.replaceAll('&amp;', '&');

function metaContent(html: string, property: string): string | null {
  const tag = html.match(new RegExp(`<meta[^>]*property="${property}"[^>]*>`))?.[0];
  const content = tag?.match(/content="([^"]*)"/)?.[1];
  return content ? decode(content) : null;
}

/** The first <img> whose src passes `pick`, resolved against `base`. */
function imageSrc(html: string, base: string, pick: (src: string) => boolean): string | null {
  for (const [, src] of html.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) {
    const url = decode(src);
    if (pick(url)) return new URL(url, base).toString();
  }
  return null;
}

/** The og:image a chat app or social site would show when the link is shared. */
async function linkPreview(html: string, base: string): Promise<CheckResult> {
  const label = 'Link preview';
  if (!html) return skipped(label);
  const src = metaContent(html, 'og:image');
  if (!src) return check(label, 'warn', 'No og:image on the home page');
  const host = new URL(src).host;
  const r = await get(src);
  if (!r.ok) return check(label, 'fail', r.error, r.ms);
  if (r.status !== 200 || !r.type.startsWith('image/'))
    return check(label, 'fail', `${host} answered ${r.status}`, r.ms);
  const elsewhere = host === new URL(base).host ? '' : ` from ${host}`;
  return check(label, 'ok', `Card image renders${elsewhere}`, r.ms);
}

type App = { id: string; title: string; url: string; run: (url: string) => Promise<CheckResult[]> };

const APPS: App[] = [
  {
    id: 'cebu-timepieces',
    title: 'Cebu Timepieces',
    url: 'https://cebu-timepieces.vercel.app/',
    async run(base) {
      const [[home, homeHtml], [catalog, catalogHtml]] = await Promise.all([
        page('Home page', base, 'Cebu Timepieces'),
        page('Catalog', new URL('/watches', base).toString(), '/watch/'),
      ]);

      const slugs = [...new Set([...catalogHtml.matchAll(/href="\/watch\/([^"?#]+)"/g)].map((m) => m[1]))];
      if (catalogHtml) {
        const listed = `${count(slugs.length, 'watch', 'watches')} listed`;
        catalog.detail = catalog.status === 'warn' ? `${catalog.detail}, ${listed}` : listed;
        if (slugs.length === 0) catalog.status = 'fail';
      }

      const photo = catalogHtml && imageSrc(catalogHtml, base, (src) => !src.startsWith('/brand/'));
      const [watch, photoCheck, preview] = await Promise.all([
        slugs[0]
          ? page('Watch page', new URL(`/watch/${slugs[0]}`, base).toString(), 'Cebu Timepieces').then(
              ([c]) => c,
            )
          : skipped('Watch page'),
        photo ? file('Product photo', photo, /^image\//, 'First catalog photo') : skipped('Product photo'),
        linkPreview(homeHtml, base),
      ]);
      return [home, catalog, watch, photoCheck, preview];
    },
  },
  {
    id: 'shineon',
    title: 'ShineOn Car Solutions',
    url: 'https://shineon-web.vercel.app/',
    async run(base) {
      const [home, html] = await page('Home page', base, 'ShineOn');
      const estimator = !html
        ? skipped('Estimator')
        : html.includes('Start your estimate')
          ? check('Estimator', 'ok', 'Rendered on the home page')
          : check('Estimator', 'fail', 'The estimate form is missing from the page');
      const photo = html && imageSrc(html, base, (src) => src.startsWith('/_next/image'));
      const [gallery, preview] = await Promise.all([
        photo ? file('Gallery photo', photo, /^image\//, 'Optimized studio photo') : skipped('Gallery photo'),
        linkPreview(html, base),
      ]);
      return [home, estimator, gallery, preview];
    },
  },
  {
    id: 'trim-station',
    title: 'Trim Station',
    url: 'https://trim-station.vercel.app/',
    async run(base) {
      const [[home, html], sitemap] = await Promise.all([
        page('Home page', base, 'Trim Station'),
        (async () => {
          const r = await get(new URL('/sitemap.xml', base).toString());
          if (!r.ok) return check('Sitemap', 'fail', r.error, r.ms);
          if (r.status !== 200) return check('Sitemap', 'fail', `Answered ${r.status}`, r.ms);
          const locs = [...r.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
          if (locs.length === 0) return check('Sitemap', 'fail', 'Lists no pages', r.ms);
          const listed = new URL(locs[0]).host;
          if (listed !== new URL(base).host)
            return check('Sitemap', 'warn', `${count(locs.length, 'URL')} on ${listed}, not this site`, r.ms);
          return check('Sitemap', 'ok', count(locs.length, 'URL'), r.ms);
        })(),
      ]);
      return [home, sitemap, await linkPreview(html, base)];
    },
  },
  {
    id: 'dink-up',
    title: 'Dink Up',
    url: 'https://dink-up.vercel.app/',
    async run(base) {
      const [[home], manifest, worker] = await Promise.all([
        page('Home page', base, 'Dink Up'),
        (async () => {
          const r = await get(new URL('/manifest.webmanifest', base).toString());
          if (!r.ok) return check('Install manifest', 'fail', r.error, r.ms);
          if (r.status !== 200) return check('Install manifest', 'fail', `Answered ${r.status}`, r.ms);
          try {
            const m = JSON.parse(r.text) as { short_name?: string; display?: string; icons?: unknown[] };
            const icons = m.icons?.length ?? 0;
            if (!m.short_name || icons === 0)
              return check('Install manifest', 'fail', 'Missing a name or icons', r.ms);
            return check('Install manifest', 'ok', `${m.short_name}, ${m.display}, ${icons} icons`, r.ms);
          } catch {
            return check('Install manifest', 'fail', 'Not valid JSON', r.ms);
          }
        })(),
        file('Offline worker', new URL('/sw.js', base).toString(), /javascript/, 'Service worker'),
      ]);
      return [home, manifest, worker];
    },
  },
  {
    id: 'ctherapies',
    title: 'CTherapies',
    url: 'https://ctherapies.vercel.app/',
    async run(base) {
      const [[home], booking, email] = await Promise.all([
        page('Home page', base, 'Community Therapies'),
        (async () => {
          // The live Cal.com event slug really is spelled "consulation".
          const r = await get('https://cal.com/ctherapies/consulation');
          if (!r.ok) return check('Online booking', 'fail', r.error, r.ms);
          if (r.status === 404) return check('Online booking', 'fail', 'Cal.com event not found', r.ms);
          if (r.status !== 200) return check('Online booking', 'warn', `Cal.com answered ${r.status}`, r.ms);
          return check('Online booking', 'ok', 'Cal.com booking page is up', r.ms);
        })(),
        (async () => {
          const token = process.env.HEALTH_TOKEN;
          if (!token) return check('Contact email', 'warn', 'HEALTH_TOKEN is not set on the portfolio');
          const r = await get(new URL('/api/health', base).toString(), { authorization: `Bearer ${token}` });
          if (!r.ok) return check('Contact email', 'fail', r.error, r.ms);
          if (r.status !== 200)
            return check('Contact email', 'fail', 'Health endpoint missing or token rejected', r.ms);
          try {
            const { checks } = JSON.parse(r.text) as { checks: { email: CheckResult } };
            return check('Contact email', checks.email.status, checks.email.detail, r.ms);
          } catch {
            return check('Contact email', 'fail', 'Health endpoint sent an unreadable answer', r.ms);
          }
        })(),
      ]);
      return [home, booking, email];
    },
  },
  {
    id: 'tara-takbo',
    title: 'TaraTakbo',
    url: 'https://tara-takbo.vercel.app/',
    async run(base) {
      const [home, html] = await page('Home page', base, 'TaraTakbo');
      const script = html.match(/<script[^>]*\ssrc="([^"]+\.js)"/)?.[1];
      if (!script) return [home, skipped('App bundle'), skipped('Mapbox token')];

      const r = await get(new URL(script, base).toString());
      if (!r.ok) return [home, check('App bundle', 'fail', r.error, r.ms), skipped('Mapbox token')];
      if (r.status !== 200)
        return [home, check('App bundle', 'fail', `Answered ${r.status}`, r.ms), skipped('Mapbox token')];
      const bundle = check('App bundle', 'ok', `Served, ${kb(r.bytes)}`, r.ms);

      // The public (pk.) token ships in the bundle; Mapbox says whether it still works.
      const token = r.text.match(/pk\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}/)?.[0];
      if (!token) return [home, bundle, check('Mapbox token', 'warn', 'No public token found in the bundle')];
      const t = await get(`https://api.mapbox.com/tokens/v2?access_token=${encodeURIComponent(token)}`);
      if (!t.ok) return [home, bundle, check('Mapbox token', 'fail', t.error, t.ms)];
      let code = '';
      try {
        code = (JSON.parse(t.text) as { code?: string }).code ?? '';
      } catch {
        /* reported below */
      }
      const mapbox =
        code === 'TokenValid'
          ? check('Mapbox token', 'ok', 'Mapbox accepts the token', t.ms)
          : check('Mapbox token', 'fail', code ? `Mapbox says ${code}` : `Mapbox answered ${t.status}`, t.ms);
      return [home, bundle, mapbox];
    },
  },
];

export async function runAll(): Promise<HealthReport> {
  const started = performance.now();
  const apps: AppReport[] = await Promise.all(
    APPS.map(async ({ id, title, url, run }) => {
      let checks: CheckResult[];
      try {
        checks = await run(url);
      } catch {
        checks = [check('Press check', 'fail', 'The check itself crashed')];
      }
      return { id, title, url, status: worst(checks.map((c) => c.status)), checks };
    }),
  );
  return {
    checkedAt: new Date().toISOString(),
    ms: Math.round(performance.now() - started),
    status: worst(apps.map((a) => a.status)),
    apps,
  };
}
