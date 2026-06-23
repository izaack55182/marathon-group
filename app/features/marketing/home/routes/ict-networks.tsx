import type { MetaFunction } from 'react-router'
import { getMeta } from '@/utils/misc'
import { ICTNetworksSection } from '../components/ict-networks-section'

export const meta: MetaFunction = ({ matches, location }: any) => {
	return getMeta({
		title: 'ICT Networks',
		description: 'Soluciones de vanguardia en infraestructura de telecomunicaciones, centros de datos y redes industriales.',
		matches,
		pathname: location.pathname,
	})
}

export default function ICTNetworksPage() {
	return <ICTNetworksSection />
}
