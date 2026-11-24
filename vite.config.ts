import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';

/**
 * Dev only: answers /api/health with the real checks, signed in with the
 * HEALTH_KEY from .env.local. On Vercel the function and middleware do this.
 */
function healthApi(): Plugin {
  return {
    name: 'health-api',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), 'HEALTH_');
      Object.assign(process.env, env);
      server.middlewares.use('/api/health', async (_req, res) => {
        const { GET } = await server.ssrLoadModule('/api/health.ts');
        const response: Response = await GET(
          new Request('http://localhost/api/health', {
            headers: { authorization: `Bearer ${env.HEALTH_KEY ?? ''}` },
          }),
        );
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(Buffer.from(await response.arrayBuffer()));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), healthApi()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        health: fileURLToPath(new URL('./health.html', import.meta.url)),
      },
    },
  },
});
