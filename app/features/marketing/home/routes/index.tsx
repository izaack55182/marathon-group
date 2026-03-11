import type { MetaFunction } from 'react-router'

// COMPONENTS
import Home from '../components/home'

export async function loader() {
	return {
		title: 'Marathon Group',
	}
}

export default function Index() {
	return <Home />
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [{ title: data?.title ?? 'Codenity Stack' }]
}
