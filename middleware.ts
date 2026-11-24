import { next } from '@vercel/functions';
import { hasSession, isKey, sessionCookie } from './server/health/auth.js';

// Keeps /health a plain 404 for anyone without the key.
export const config = {
  matcher: ['/health', '/health.html'],
  runtime: 'nodejs',
};

const PRIVATE = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'no-referrer',
};

const notFound = () => new Response('Not found', { status: 404, headers: PRIVATE });

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const key = url.searchParams.get('key');

  if (key !== null) {
    if (!(await isKey(key))) return notFound();
    // Trade the key for a session cookie and drop it from the address bar.
    const clean = new URL('/health', url);
    return new Response(null, {
      status: 303,
      headers: { ...PRIVATE, Location: clean.toString(), 'Set-Cookie': await sessionCookie() },
    });
  }

  if (await hasSession(request)) return next({ headers: PRIVATE });
  return notFound();
}
