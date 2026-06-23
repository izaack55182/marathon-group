import type { MetaFunction } from 'react-router'
import { getMeta } from '@/utils/misc'

// COMPONENTS
import { BrandGrid } from '../components/brand-grid'
import { Hero } from '../components/hero'
import { IndustrialBanner } from '../components/industrial-banner'
import { IndustrialParticipation } from '../components/industrial-participation'
import { OurDivisions } from '../components/our-divisions'
import { QualityService } from '../components/quality-service'
import { SolutionsCards } from '../components/solutions-cards'
import { Testimonials } from '../components/testimonials'

export async function loader() {
	return {
		title: 'Marathon Group',
		description:
			'Marathon Group somos líderes nacionales en material eléctrico, automatización, fibra óptica e ICT. La más alta calidad y 30 años de experiencia nos respaldan.',
	}
}

export default function Home() {
	return (
		<div className="relative w-full flex flex-col items-center bg-background">
			<Hero />
			<SolutionsCards />
			<IndustrialBanner />
			<IndustrialParticipation />
			<QualityService />
			<OurDivisions />
			<Testimonials />
			<BrandGrid />
		</div>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data, matches, location }: any) => {
	return getMeta({
		title: data?.title,
		description: data?.description,
		matches,
		pathname: location.pathname,
	})
}
