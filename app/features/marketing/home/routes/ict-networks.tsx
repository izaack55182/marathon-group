import { ICTNetworksSection } from '../components/ict-networks-section'

export function meta() {
	return [
		{ title: 'ICT Networks - Marathon Group' },
		{ name: 'description', content: 'Soluciones de vanguardia en infraestructura de telecomunicaciones, centros de datos y redes industriales.' },
	]
}

export default function ICTNetworksPage() {
	return <ICTNetworksSection />
}
