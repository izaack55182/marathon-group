import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel'
import { DIVISIONS_DATA } from '../constants'
import { cn } from '@/utils/misc'

export function OurDivisions() {
	const [activeTab, setActiveTab] = useState(DIVISIONS_DATA.categories[0]?.id || 'electrica')

	const activeCategory = DIVISIONS_DATA.categories.find((c) => c.id === activeTab) || DIVISIONS_DATA.categories[0]

	// Truco para asegurar que Embla haga loop incluso con pocos items
	const displayItems = activeCategory?.items
		? [...activeCategory.items, ...activeCategory.items]
		: []

	// Unified theme color based on division
	const themeColor = activeTab === 'electrica' ? '#ef4444' : '#1d70b3'

	return (
		<section className="py-32 w-full bg-white relative overflow-hidden">
			{/* Patrón de fondo sutil */}
			<div className="absolute inset-0 opacity-[0.02] pointer-events-none"
				style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}
			/>

			<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
				{/* ENCABEZADO */}
				<div className="text-center mb-14">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]"
					>
						Experticia Certificada
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1e293b] mb-8 tracking-tighter"
					>
						{DIVISIONS_DATA.title}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="max-w-4xl mx-auto text-slate-500 text-xl leading-relaxed font-light italic"
					>
						{DIVISIONS_DATA.description}
					</motion.p>
				</div>

				{/* SELECTOR DE PESTAÑAS */}
				<div className="flex justify-center mb-12">
					<div className="inline-flex p-1.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-inner relative">
						{DIVISIONS_DATA.categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveTab(category.id)}
								className={cn(
									'relative px-14 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-700 rounded-xl z-10',
									activeTab === category.id ? 'text-white' : 'text-slate-400 hover:text-slate-600'
								)}
							>
								{activeTab === category.id && (
									<motion.div
										layoutId="activeTabBg"
										className={cn(
											"absolute inset-0 rounded-xl shadow-xl",
											category.id === 'electrica' ? "bg-red-600 shadow-red-600/20" : "bg-[#1d70b3] shadow-blue-900/20"
										)}
										transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
									/>
								)}
								<span className="relative z-20">{category.label}</span>
							</button>
						))}
					</div>
				</div>

				{/* SECCIÓN DEL CARRUSEL */}
				<div className="relative group/carousel">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.98 }}
							transition={{ duration: 0.5 }}
						>
							<Carousel
								opts={{
									align: 'start',
									loop: true,
								}}
								className="w-full"
							>
								<CarouselContent className="-ml-6 py-4">
									{displayItems.map((item, index) => {
										const num = (index % (activeCategory?.items.length || 1)) + 1;
										const displayNum = num < 10 ? `0${num}` : num;

										return (
											<CarouselItem key={`${index}-${item.title}`} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4">
												<motion.div
													className="group/card relative aspect-[3/4] overflow-hidden rounded-[32px] bg-white border border-slate-100 flex flex-col justify-between p-10 transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] hover:border-slate-200"
												>
													{/* Fondo vibrante dinámico en hover (ahora usando el color del tema) */}
													<div
														className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
														style={{
															background: `radial-gradient(100% 100% at 0% 0%, ${themeColor} 0%, transparent 100%)`,
														}}
													/>

													{/* Número tipo 'Marca de Agua' más pequeño y equilibrado */}
													<div
														className="absolute top-8 right-8 text-7xl font-black transition-all duration-700 leading-none select-none pointer-events-none z-0 tracking-tighter opacity-[0.03] group-hover/card:opacity-[0.08]"
														style={{ color: themeColor }}
													>
														{displayNum}
													</div>

													{/* Área de la Imagen con resplandor suave */}
													<div className="flex-1 flex items-center justify-center w-full relative z-10">
														<div className="relative p-4">
															<img
																src={item.icon}
																alt={item.title}
																className="w-32 h-auto object-contain transition-all duration-700 group-hover/card:scale-105"
																onError={(e) => {
																	e.currentTarget.src = `https://placehold.co/150x150/f8fafc/1e293b?text=${item.title}`
																}}
															/>
															<div
																className="absolute inset-0 blur-3xl opacity-0 group-hover/card:opacity-[0.15] transition-opacity duration-1000 rounded-full"
																style={{ backgroundColor: themeColor }}
															/>
														</div>
													</div>

													{/* Footer de la Card */}
													<div className="relative z-10 w-full flex flex-col items-center mt-auto pt-4">
														<h3 className="text-center text-slate-700 font-black text-lg leading-tight uppercase tracking-wider mb-6 group-hover/card:text-slate-900 transition-colors duration-500">
															{item.title}
														</h3>

														{/* Barra expansiva centrada */}
														<div
															className="h-1.5 w-8 rounded-full opacity-20 group-hover/card:opacity-100 group-hover/card:w-16 transition-all duration-700 ease-out"
															style={{ backgroundColor: themeColor }}
														/>
													</div>
												</motion.div>
											</CarouselItem>
										);
									})}
								</CarouselContent>

								{/* Navigation arrows at the edges */}
								<div className="hidden lg:block">
									<CarouselPrevious
										className="absolute -left-20 top-1/2 -translate-y-1/2 border border-slate-100 bg-white hover:bg-white text-slate-400 hover:text-white shadow-xl transition-all h-20 w-20 group overflow-hidden rounded-full cursor-pointer z-20"
									>
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" style={{ backgroundColor: themeColor }} />
										<span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1 text-2xl font-light">←</span>
									</CarouselPrevious>
									<CarouselNext
										className="absolute -right-20 top-1/2 -translate-y-1/2 border border-slate-100 bg-white hover:bg-white text-slate-400 hover:text-white shadow-xl transition-all h-20 w-20 group overflow-hidden rounded-full cursor-pointer z-20"
									>
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" style={{ backgroundColor: themeColor }} />
										<span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 text-2xl font-light">→</span>
									</CarouselNext>
								</div>

								{/* Mobile controls (below) */}
								<div className="flex justify-center mt-12 gap-4 lg:hidden">
									<CarouselPrevious className="relative translate-y-0 left-0 h-14 w-14 border border-slate-100 bg-white shadow-md text-slate-400" />
									<CarouselNext className="relative translate-y-0 right-0 h-14 w-14 border border-slate-100 bg-white shadow-md text-slate-400" />
								</div>
							</Carousel>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}