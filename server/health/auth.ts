// The press-check page and its API open only for HEALTH_KEY. Visiting
// /health?key=<HEALTH_KEY> swaps the key for an HttpOnly session cookie, so the
// key leaves the address bar and never reaches page scripts. Scripts and
// terminals can send the key as a Bearer token instead.

const COOKIE = 'press_check';
const MAX_AGE = 60 * 60 * 24 * 30;
const encoder = new TextEncoder();

function configuredKey(): string | null {
  const key = process.env.HEALTH_KEY;
  // A short or missing key keeps the page closed rather than guessable.
  return key && key.length >= 24 ? key : null;
}

async function sign(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return Array.from(new Uint8Array(mac), (b) => b.toString(16).padStart(2, '0')).join('');
}

function sameString(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Compares MACs rather than raw strings, so timing says nothing about the key. */
export async function isKey(candidate: string): Promise<boolean> {
  const key = configuredKey();
  if (!key) return false;
  const [given, expected] = await Promise.all([sign(key, `key:${candidate}`), sign(key, `key:${key}`)]);
  return sameString(given, expected);
}

function readCookie(request: Request, name: string): string | null {
  for (const part of (request.headers.get('cookie') ?? '').split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return v.join('=');
  }
  return null;
}

export async function sessionCookie(): Promise<string> {
  const key = configuredKey();
  if (!key) throw new Error('HEALTH_KEY is not configured');
  const value = await sign(key, 'session:v1');
  return `${COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`;
}

export async function hasSession(request: Request): Promise<boolean> {
  const key = configuredKey();
  const cookie = readCookie(request, COOKIE);
  if (!key || !cookie) return false;
  return sameString(cookie, await sign(key, 'session:v1'));
}

export async function isAuthorized(request: Request): Promise<boolean> {
  const auth = request.headers.get('authorization');
  if (auth?.startsWith('Bearer ')) return isKey(auth.slice(7));
  return hasSession(request);
}
