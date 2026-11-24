import { isAuthorized } from '../server/health/auth.js';
import { runAll } from '../server/health/checks.js';

const PRIVATE = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' };

export async function GET(request: Request): Promise<Response> {
  if (!(await isAuthorized(request))) {
    return new Response('Not found', { status: 404, headers: PRIVATE });
  }
  return Response.json(await runAll(), { headers: PRIVATE });
}
