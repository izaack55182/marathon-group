import { Hero } from './hero'
import { IndustrialBanner } from './industrial-banner'
import { IndustrialParticipation } from './industrial-participation'
import { OurDivisions } from './our-divisions'
import { QualityService } from './quality-service'
import { SolutionsCards } from './solutions-cards'

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
	return (
		<div className="relative w-full flex flex-col items-center bg-background">
			<Hero />
			<SolutionsCards />
			<IndustrialBanner />
			<IndustrialParticipation />
			<QualityService />
			<OurDivisions />
		</div>
	)
}
