import { motion } from 'motion/react'
import { SOLUTIONS } from '../constants'

export function SolutionsCards() {
	return (
		<section className="w-full py-24 md:py-32 bg-slate-50/50 relative">
			{/* Decorative background elements */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden"
				style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '32px 32px' }}
			/>
			<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/5 to-transparent pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
				{/* SECTION HEADER */}
				<div className="text-center mb-20 max-w-3xl mx-auto">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-[0.4em]"
					>
						Propuesta de Valor
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
					>
						Servicios de <span className="text-red-600">Vanguardia</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-slate-500 text-lg md:text-xl leading-relaxed font-light"
					>
						En Marathon Group, no solo suministramos materiales; ofrecemos soluciones integrales diseñadas para potenciar la eficiencia y competitividad de su empresa.
					</motion.p>
				</div>

				{/* CARDS GRID */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-10">
					{SOLUTIONS.map((item, index) => {
						const num = index + 1
						const displayNum = num < 10 ? `0${num}` : num

						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								className="group relative bg-white/70 backdrop-blur-md p-10 rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:border-red-200/50 transition-all duration-500 flex flex-col items-center text-center"
							>
								{/* Watermark Number */}
								<div className="absolute top-6 right-8 text-6xl font-black text-red-600/5 group-hover:text-red-600/10 transition-colors duration-500 select-none">
									{displayNum}
								</div>

								{/* ICON CONTAINER */}
								<div className="relative size-20 md:size-24 mb-10 flex items-center justify-center">
									<div className="absolute inset-0 bg-slate-50 rounded-2xl rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" />
									<div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-100 -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500" />
									
									<img
										src={item.icon}
										alt={item.title}
										className="relative z-10 max-w-[60%] max-h-[60%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
										onError={(e) => {
											e.currentTarget.src = 'https://placehold.co/100x100/f8fafc/cbd5e1?text=Icon'
										}}
									/>

									{/* Corner Glow */}
									<div className="absolute -top-4 -right-4 size-16 bg-red-500/0 group-hover:bg-red-500/10 blur-2xl transition-all duration-700 rounded-full" />
								</div>

								<h3 className="relative z-10 text-xl font-bold font-riccione text-slate-900 mb-6 group-hover:text-red-600 transition-colors duration-300 leading-tight">
									{item.title}
								</h3>

								<p className="relative z-10 text-slate-500 leading-relaxed text-sm font-light">
									{item.description}
								</p>

								{/* BOTTOM ACCENT BAR */}
								<div className="mt-10 w-8 h-1.5 bg-slate-100 group-hover:bg-red-600 group-hover:w-full transition-all duration-500 rounded-full opacity-50 group-hover:opacity-100" />
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
