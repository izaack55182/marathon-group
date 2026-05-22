import { DottedMap } from "@/components/ui/dotted-map"
import { motion } from "motion/react"
import { TESTIMONIALS_DATA } from "../constants"

export function Testimonials() {
    return (
        <section className="relative w-full py-24 lg:py-32 bg-[#0a0f14] overflow-hidden text-white">
            {/* Background Dotted Map with expanded width and enhanced visibility */}
            <div className="absolute top-1/2 left-[62%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280%] sm:w-[200%] md:w-[150%] lg:w-[120%] h-[150%] z-0 opacity-60 md:opacity-40 pointer-events-none flex items-center justify-center transition-all duration-700">
                {/* Horizontal fades to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f14] via-transparent to-[#0a0f14] z-10" />
                {/* Vertical fades to blend top and bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f14] via-transparent to-[#0a0f14] z-10" />

                <DottedMap
                    className="w-full h-full text-white/50"
                    dotRadius={0.3}
                    mapSamples={20000}
                    markers={[
                        { lat: 23.6345, lng: -102.5528, size: 0.8 },
                        { lat: 51.1656, lng: 10.4515, size: 0.8 },
                    ]}
                    markerColor="#ef4444"
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 lg:px-20 max-w-[1400px]">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
                            Casos de Éxito
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
                    >
                        {TESTIMONIALS_DATA.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
                    >
                        {TESTIMONIALS_DATA.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
                    {/* Top horizontal line for the grid */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />

                    {TESTIMONIALS_DATA.items.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`group px-6 py-10 lg:px-12 lg:py-12 flex flex-col justify-between min-h-[280px] md:min-h-[340px] relative transition-all duration-500 hover:bg-white/[0.03] rounded-2xl md:rounded-none ${i < TESTIMONIALS_DATA.items.length - 1 ? "md:border-r md:border-white/10" : ""
                                }`}
                        >
                            {/* Decorative active top border on hover */}
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

                            <div className="mb-12 relative">
                                {/* Large decorative quote mark */}
                                <span className="absolute -top-6 -left-4 text-7xl text-white/5 font-serif select-none pointer-events-none group-hover:text-red-500/10 transition-colors duration-500">
                                    "
                                </span>
                                <p className="text-white/90 text-lg lg:text-xl leading-relaxed font-light italic relative z-10 antialiased">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-5 mt-auto">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/20 shadow-xl overflow-hidden backdrop-blur-md group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-500">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-500"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-semibold tracking-wide text-base group-hover:text-red-50 transition-colors duration-300">
                                        {t.author}
                                    </h4>
                                    <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                        {t.position}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
