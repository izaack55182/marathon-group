import { motion } from 'motion/react'
import Autoplay from 'embla-carousel-autoplay'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { PARTICIPATION_DATA } from '../constants'

export function IndustrialParticipation() {
	// Group data into columns of 2 items each to create a 2-row look in the carousel
	const columns = []
	for (let i = 0; i < PARTICIPATION_DATA.length; i += 2) {
		columns.push(PARTICIPATION_DATA.slice(i, i + 2))
	}

	return (
		<section id="industrial-participation" className="py-24 w-full bg-white relative overflow-hidden">
			{/* Subtle decorative background elements */}
			<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.03),transparent_50%)]" />

			<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
				{/* HEADER */}
				<div className="text-center mb-20">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-[0.3em]"
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
						</span>
						Presencia Industrial Global
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
					>
						Participación <span className="text-red-600 drop-shadow-sm">Industrial</span>
					</motion.h2>
					<div className="w-24 h-1.5 bg-red-600 mx-auto mb-8 rounded-full" />
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="max-w-4xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed font-light italic px-4"
					>
						Marathon ha tenido la oportunidad de colaborar en diferentes proyectos, los cuales han ayudado al crecimiento de
						la empresa, ampliando su panorama y participación en el mercado Industrial.</motion.p>
				</div>

				{/* CAROUSEL (Multi-row via columns) */}
				<div className="relative">
					<Carousel
						opts={{
							align: 'start',
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 4500,
								stopOnInteraction: false,
							}),
						]}
						className="w-full"
					>
						<CarouselContent className="-ml-3 md:-ml-8 items-stretch">
							{columns.map((column, colIndex) => (
								<CarouselItem key={colIndex} className="pl-3 md:pl-8 basis-1/2 lg:basis-1/4">
									<div className="flex flex-col gap-3 md:gap-8 h-full">
										{column.map((item, index) => (
											<motion.div
												key={item.title}
												initial={{ opacity: 0, y: 40 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{
													delay: (colIndex * 2 + index) * 0.05,
													duration: 0.8,
													ease: [0.16, 1, 0.3, 1]
												}}
												className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl hover:shadow-red-900/10"
											>
												{/* Base Image */}
												<img
													src={item.image}
													alt={item.title}
													className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
													onError={(e) => {
														e.currentTarget.src = `https://placehold.co/600x800/1a1a1a/ffffff?text=${item.title}`
													}}
												/>

												{/* Sophisticated Gradient Overlay */}
												<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

												{/* Glassmorphic content container */}
												<div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col justify-end min-h-[50%]">
													{/* Red accent tag */}
													<div className="mb-2 md:mb-4 w-6 md:w-10 h-1 bg-red-600 rounded-full transition-all duration-500 group-hover:w-full" />

													<h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter mb-1 md:mb-2 group-hover:text-red-500 transition-colors duration-300 line-clamp-2 md:line-clamp-none leading-tight">
														{item.title}
													</h3>

													{/* Hidden description that slides up */}
													<div className="overflow-hidden">
														<p className="text-slate-300 text-sm leading-relaxed translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
															{item.description || 'Soluciones industriales de vanguardia para proyectos de alta complejidad.'}
														</p>
													</div>
												</div>

												{/* Top-right index number (Subtle design touch) */}
												<div className="absolute top-3 right-4 md:top-6 md:right-8 text-white/10 font-black text-2xl md:text-4xl select-none group-hover:text-white/20 transition-colors duration-500">
													{((colIndex * 2 + index + 1) < 10 ? '0' : '') + (colIndex * 2 + index + 1)}
												</div>

												{/* Hover red border glow */}
												<div className="absolute inset-0 border-2 border-red-600/0 rounded-2xl group-hover:border-red-600/30 transition-all duration-500 pointer-events-none" />
											</motion.div>
										))}
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					{/* Layout refinement: decorative line */}
					<div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
				</div>
			</div>
		</section>
	)
}
