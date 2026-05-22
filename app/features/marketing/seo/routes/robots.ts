import { generateRobotsTxt } from '@forge42/seo-tools/robots'
import { createDomain } from '@/utils/misc'

export async function loader({ request }: { request: Request }) {
	const domain = createDomain(request)
	const robotsTxt = generateRobotsTxt([
		{
			userAgent: '*',
			allow: ['/'],
			disallow: ['/c/', '/login', '/register', '/404', '/500'],
			sitemap: [`${domain}/sitemap-index.xml`],
		},
	])
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
		},
	})
}
