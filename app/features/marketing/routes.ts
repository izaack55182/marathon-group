import { index, layout, route } from '@react-router/dev/routes'

export const marketingRoutes = [
	// HOME ROUTES
	layout('routes/layout/layout-public.tsx', [
		index('features/marketing/home/routes/home.tsx'),
		route('electrica', 'features/marketing/home/routes/electrica.tsx'),
		route('ict-networks', 'features/marketing/home/routes/ict-networks.tsx'),
	]),

	route('robots.txt', 'features/marketing/seo/routes/robots.ts'),
	route('sitemap-index.xml', 'features/marketing/seo/routes/sitemap.ts'),
]
