import { motion } from 'motion/react'
import { QUALITY_SERVICE_DATA } from '../constants'
import { Icon } from '@/components/ui/icon'
import type { IconName } from '@/components/ui/icons/types'

export function QualityService() {
	return (
		<section className="relative w-full min-h-[500px] flex items-center overflow-hidden">
			{/* Background Image with Parallax-like overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src={QUALITY_SERVICE_DATA.image}
					alt="Quality Service Background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
				{/* Red blur effect on the left side */}
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-600/30 via-red-600/5 to-transparent pointer-events-none" />
			</div>

			<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-24 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Text Content */}
					<div className="lg:col-span-5 text-left">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="flex items-center gap-3 mb-6"
						>
							<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/20">
								<div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white">
									M
								</div>
							</div>
							<span className="text-white/60 uppercase tracking-[0.3em] text-xs font-bold">
								{QUALITY_SERVICE_DATA.tagline}
							</span>
						</motion.div>
						
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8"
						>
							{QUALITY_SERVICE_DATA.title}
						</motion.h2>
					</div>

					{/* Metrics Grid */}
					<div className="lg:col-span-7">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
							{QUALITY_SERVICE_DATA.metrics.map((metric, index) => (
								<motion.div
									key={metric.label}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 + index * 0.1 }}
									className="group relative"
								>
									{/* Glassmorphic Card */}
									<div className="relative h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
										{/* Icon */}
										<div className="mb-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
											<Icon name={metric.icon as IconName} className="w-8 h-8" />
										</div>
										
										{/* Value */}
										<div className="flex flex-col gap-1">
											<span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
												{metric.value}
											</span>
											
											{/* Red separator line */}
											<div className="w-12 h-1 bg-red-600 my-4 transition-all duration-500 group-hover:w-full" />
											
											<span className="text-white/60 text-sm font-medium uppercase tracking-wider leading-tight">
												{metric.label}
											</span>
										</div>

										{/* Decorative corner glow */}
										<div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/10 blur-3xl group-hover:bg-red-600/20 transition-all duration-500" />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
