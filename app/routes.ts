import { layout, prefix, type RouteConfig, route } from '@react-router/dev/routes'
// Importamos las rutas de las features
import { marketingRoutes } from './features/marketing/routes'
import { userRoutes } from './features/user/routes'

export default [
	// 1. PUBLIC / MARKETING
	...marketingRoutes,

	// 4. RESOURCE ROUTES
	...prefix('r', [
		route('color-scheme', 'routes/resource/color-scheme.tsx'),
	]),

	// 5. SYSTEM / ERRORS
	route('404', 'routes/404.tsx'),
	route('500', 'routes/500.tsx'),
	route('*', 'routes/catch-all.tsx'),
] satisfies RouteConfig
