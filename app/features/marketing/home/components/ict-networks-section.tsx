import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/misc'
import { Icon } from "@/components/ui/icon"
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ICT_CATEGORIES, CATEGORY_BRANDS } from '../constants'

// Reusable Brand Carousel Component using Shadcn UI
function BrandCarousel({ categoryId }: { categoryId: string }) {
	const brandsData = CATEGORY_BRANDS[categoryId]
	const plugin = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: false })
	)

	if (!brandsData) return null

	return (
		<div className="relative w-full mt-10 pt-8 border-t border-slate-100 group">
			<div className="flex items-center justify-between mb-4">
				<h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Marcas Representadas</h6>
			</div>

			<Carousel
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-6">
					{[...brandsData.items, ...brandsData.items, ...brandsData.items].map((brand, i) => (
						<CarouselItem key={`${brand}-${i}`} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
							<div className="h-32 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
								<img
									src={`/images/${brandsData.folder}/${brand}.png`}
									alt={brand}
									className="max-h-full max-w-full object-contain scale-160"
									onError={(e) => {
										e.currentTarget.style.display = 'none'
										const span = document.createElement('span')
										span.className = "text-[10px] font-bold text-slate-400 uppercase text-center"
										span.innerText = brand
										e.currentTarget.parentElement?.appendChild(span)
									}}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export function ICTNetworksSection() {
	const [searchParams] = useSearchParams()
	const catParam = searchParams.get('cat')

	const initialTab = ICT_CATEGORIES.find(c => c.id === catParam) || ICT_CATEGORIES[0]!
	const [activeTab, setActiveTab] = useState(initialTab)

	// Sync tab if URL changes while on the same page
	useEffect(() => {
		if (catParam) {
			const matched = ICT_CATEGORIES.find(c => c.id === catParam)
			if (matched) setActiveTab(matched)
		}
	}, [catParam])

	return (
		<section className="w-full pt-10 pb-24 bg-slate-50 relative overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 translate-x-1/2 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
				<div className="flex flex-col gap-10">
					{/* Section Header */}
					<div className="max-w-3xl">
						<h2 className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-2 flex items-center gap-3">
							<span className="w-8 h-px bg-secondary" />
							Divisiones Marathon
						</h2>
						<h3 className="text-4xl md:text-5xl font-black text-slate-950 font-riccione tracking-tight leading-none mb-4">
							División <span className="text-secondary">ICT Networks</span>
						</h3>
					</div>

					{/* Interactive Tabs */}
					<div className="flex flex-wrap gap-2 md:gap-4 border-b border-slate-200 pb-4">
						{ICT_CATEGORIES.map((cat) => (
							<button
								key={cat.id}
								onClick={() => setActiveTab(cat)}
								className={cn(
									"px-6 py-3 rounded-t-xl font-bold transition-all duration-300 flex items-center gap-2 relative",
									activeTab.id === cat.id
										? "text-secondary bg-white shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] translate-y-[-2px]"
										: "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
								)}
							>
								<cat.icon className={cn("size-4", activeTab.id === cat.id ? "text-secondary" : "text-slate-400")} />
								{cat.label}
								{activeTab.id === cat.id && (
									<motion.div
										layoutId="activeTabICT"
										className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"
									/>
								)}
							</button>
						))}
					</div>

					{/* Content Area */}
					<div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeTab.id}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
								className="flex flex-col lg:flex-row w-full"
							>
								{/* Left: Spotlight Hero */}
								<div className="relative w-full lg:w-2/5 h-[300px] lg:h-auto overflow-hidden text-white flex flex-col justify-end p-8 md:p-12 shrink-0">
									<div className="absolute inset-0">
										<img
											src={activeTab.image}
											alt={activeTab.label}
											className="h-full w-full object-cover scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
									</div>
									<div className="relative z-10 space-y-4">
										<div className="size-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
											<activeTab.icon className="w-6 h-6 text-white" />
										</div>
										<h4 className="text-3xl md:text-4xl font-black font-riccione tracking-tight">{activeTab.label}</h4>
										<p className="text-slate-200 leading-relaxed font-light">
											{activeTab.description}
										</p>
									</div>
								</div>

								{/* Right: Applications Grid */}
								<div className="flex-1 p-8 md:p-12 space-y-8 min-w-0">
									<div>
										<h5 className="text-3xl font-black text-slate-900 mb-6 font-riccione">Aplicaciones de Red</h5>

										<div className={cn(
											"grid gap-8",
											activeTab.sections.length > 1 ? "md:grid-cols-2" : "max-w-xl"
										)}>
											{activeTab.sections.map((section) => (
												<div key={section.title} className="space-y-4">
													<div className="flex items-center gap-4">
														<div className={cn("h-8 w-1", section.borderColor, "bg-current opacity-20")} />
														<h6 className={cn("text-base font-black uppercase tracking-[0.2em]", section.color)}>
															{section.title}
														</h6>
													</div>
													<span className="text-[11px] font-medium text-slate-400">Entrega Inmediata disponible</span>
													<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
														{section.items.map((item) => (
															<div
																key={item.label}
																className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 border border-transparent transition-all duration-300"
															>
																<div className={cn("size-8 shrink-0 rounded-lg flex items-center justify-center transition-colors", section.bgColor)}>
																	<item.icon className={cn("size-[22px]", section.color)} />
																</div>
																<span className="text-base font-bold text-slate-700 group-hover:text-slate-950 transition-colors pt-0.5">
																	{item.label}
																</span>
															</div>
														))}
													</div>
												</div>
											))}
										</div>
									</div>

									{/* Brand Carousel Section */}
									<BrandCarousel categoryId={activeTab.id} />

									{/* CTA Banner */}
									<div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
										<p className="text-slate-500 text-sm font-light">¿Necesitas asesoría técnica para tu infraestructura de red?</p>
										<a 
											href="https://wa.me/5212226906700?text=Hola,%20necesito%20asesoría%20técnica%20para%20mi%20infraestructura%20de%20red."
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button 
												variant="secondary"
												size="lg"
												className="px-8 py-6 rounded-xl font-bold text-sm transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest leading-none"
											>
												Contactar Especialista
											</Button>
										</a>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	)
}
