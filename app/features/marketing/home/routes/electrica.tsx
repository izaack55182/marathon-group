import type { MetaFunction } from 'react-router'
import { getMeta } from '@/utils/misc'
import { ElectricaSection } from '../components/electrica-section'

export const meta: MetaFunction = ({ matches, location }: any) => {
	return getMeta({
		title: 'División Eléctrica',
		description: 'Explora nuestra división eléctrica: soluciones integrales de cableado, automatización y eficiencia energética.',
		matches,
		pathname: location.pathname,
	})
}

export default function ElectricaPage() {
	return <ElectricaSection />
}
