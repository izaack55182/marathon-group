import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { INDUSTRIAL_DATA } from '../constants'

export function IndustrialBanner() {
	return (
		<section className="relative w-full min-h-[500px] flex items-stretch overflow-hidden bg-slate-900">
			{/* BACKGROUND IMAGE WITH OVERLAY */}
			<div className="absolute inset-0 z-0">
				<img
					src={INDUSTRIAL_DATA.images.background}
					alt="Industrial Infrastructure"
					className="h-full w-full object-cover opacity-70 contrast-110"
				/>
				<div className="absolute inset-0 bg-slate-950/40" />
				<div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
				{/* TEXT CONTENT */}
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className="flex-1 text-left pb-20"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-2xl tracking-tighter">
						{INDUSTRIAL_DATA.headline}
					</h2>

					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
						<div className="flex flex-col">
							<span className="text-red-600 font-black text-4xl md:text-5xl tracking-tighter">
								{INDUSTRIAL_DATA.phone}
							</span>
							<div className="h-1.5 w-full bg-red-600 mt-1" />
						</div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								size="lg"
								className="h-14 px-10 rounded-none bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-lg shadow-[0_10px_30px_rgba(220,38,38,0.3)] transition-all"
							>
								{INDUSTRIAL_DATA.ctaText}
							</Button>
						</motion.div>
					</div>
				</motion.div>

				{/* WORKER IMAGE */}
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					className="flex-1 flex justify-center lg:justify-end self-end"
				>
					<div className="relative -mb-1 lg:-mb-2">
						{/* Glow effect behind worker */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

						<img
							src={INDUSTRIAL_DATA.images.worker}
							alt="Industrial Expert"
							className="relative z-10 w-[300px] md:w-[400px] lg:w-[500px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] block"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
