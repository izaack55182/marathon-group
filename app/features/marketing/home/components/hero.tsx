import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { HERO_DATA } from '../constants'

export function Hero() {
	return (
		<section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
			{/* BACKGROUND IMAGE WITH OVERLAY */}
			<div className="absolute inset-0 z-0">
				<img
					src={HERO_DATA.images.background}
					alt="Datacenter Racks"
					className="h-full w-full object-cover scale-105"
				/>
				<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* TEXT CONTENT */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="flex-1 text-left"
				>
					<motion.h1 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-6"
					>
						{HERO_DATA.title} <br />
						<span className="text-red-600">{HERO_DATA.titleAccent}</span>
					</motion.h1>
					
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="max-w-xl text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8 border-l-4 border-red-600 pl-6"
					>
						{HERO_DATA.description}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						<Button
							size="lg"
							className="h-16 px-10 rounded-none bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-lg transition-all duration-300 hover:scale-105 active:scale-95"
						>
							{HERO_DATA.ctaText}
						</Button>
					</motion.div>
				</motion.div>

				{/* PRODUCT IMAGE (FLOATING) */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 1, ease: 'backOut' }}
					className="flex-1 flex justify-center lg:justify-end relative"
				>
					<motion.div
						animate={{ 
							y: [0, -20, 0],
							rotate: [0, 2, 0]
						}}
						transition={{ 
							duration: 6, 
							repeat: Infinity, 
							ease: "easeInOut" 
						}}
						className="relative z-10"
					>
						<img
							src={HERO_DATA.images.product}
							alt="Fiber Optic Jumper"
							className="w-[300px] md:w-[450px] lg:w-[600px] h-auto drop-shadow-[0_20px_50px_rgba(239,68,68,0.3)]"
						/>
					</motion.div>
					
					{/* SUBTLE GLOW BEHIND PRODUCT */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/20 blur-[100px] rounded-full" />
				</motion.div>
			</div>

			{/* SCROLL INDICATOR */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
			>
				<span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
				<div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
			</motion.div>
		</section>
	)
}
