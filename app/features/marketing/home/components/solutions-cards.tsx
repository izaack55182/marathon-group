import { motion } from 'motion/react'
import { SOLUTIONS } from '../constants'

export function SolutionsCards() {
	return (
		<section className="py-24 bg-slate-50/50 relative overflow-hidden">
			{/* Grid pattern background */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '32px 32px' }}
			/>

			<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{SOLUTIONS.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col items-center text-center"
						>
							{/* ICON IMAGE */}
							<div className="size-24 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
								<img
									src={item.icon}
									alt={item.title}
									className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
									onError={(e) => {
										// Fallback if image doesn't exist yet
										e.currentTarget.src = 'https://placehold.co/100x100/f8fafc/cbd5e1?text=Icon'
									}}
								/>
							</div>

							<h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300 uppercase tracking-tight">
								{item.title}
							</h3>

							<p className="text-slate-500 leading-relaxed text-sm">
								{item.description}
							</p>

							{/* BOTTOM ACCENT */}
							<div className="mt-8 w-12 h-1 bg-slate-100 group-hover:bg-red-600 group-hover:w-20 transition-all duration-300 rounded-full" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
