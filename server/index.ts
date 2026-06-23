import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'
import { createMiddleware } from 'hono/factory'
import { getLoadContext } from './context'
import { ALLOW_INDEXING } from './utils/misc.ts'

import { epicLogger } from './middleware/epic-logger.ts'
import { removeTrailingSlash } from './middleware/remove-trailing-slash.ts'
import { secureHeadersMiddleware } from './middleware/secure-headers.ts'
import { rateLimitMiddleware } from './middleware/rate-limit.ts'
import { initEnv } from '@/utils/env.server.ts'

const app = new Hono()

app.use('*', async (c, next) => {
	initEnv(c.env)
	await next()
})

app.use('*', epicLogger())
app.use(removeTrailingSlash)

app.use('*', async (c, next) => {
	await next()
	const path = c.req.path
	if (path.endsWith('.svg')) {
		c.header('Content-Type', 'image/svg+xml')
	}
	if (path.match(/\.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf|css|js)$/)) {
		// Los assets emitidos por Vite en /assets/ llevan hash en el nombre, así
		// que son seguros de cachear como inmutables. El resto (archivos de
		// /public con nombre FIJO, como /icons/sprite.svg) deben revalidar: si no,
		// al cambiar su contenido sin cambiar la URL, el CDN/navegador sigue
		// sirviendo la versión vieja (iconos nuevos no aparecen).
		if (path.startsWith('/assets/')) {
			c.header('Cache-Control', 'public, max-age=31536000, immutable')
		} else {
			c.header('Cache-Control', 'public, max-age=300, must-revalidate')
		}
	}
})

app.use('*', async (c, next) => {
	if (c.req.method !== 'GET') return await next()

	const proto = c.req.header('X-Forwarded-Proto')
	const host = c.req.header('X-Forwarded-Host') || c.req.header('Host')
	if (proto === 'http') {
		const secureUrl = `https://${host}${c.req.url}`
		return c.redirect(secureUrl, 301)
	}
	await next()
})

app.use('*', secureHeadersMiddleware)
app.use('*', rateLimitMiddleware)

app.use('*', poweredBy({ serverName: 'CODENITY' }))

// No indexing if configured
app.use('*', async (c, next) => {
	if (!ALLOW_INDEXING()) {
		c.header('X-Robots-Tag', 'noindex, nofollow')
	}
	await next()
})

// Export load context for adapter
export { getLoadContext }
export default app
