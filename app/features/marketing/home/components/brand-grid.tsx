import { useState, useEffect, useRef } from 'react'
import { cn } from '@/utils/misc'
import { BRAND_SLOTS } from '../constants'

export function BrandGrid() {
    const [activeSlot, setActiveSlot] = useState<number | null>(null)
    const [slotIndices, setSlotIndices] = useState<number[]>(new Array(8).fill(0))
    const queueRef = useRef<number[]>([])

    useEffect(() => {
        const triggerRandomChange = () => {
            if (queueRef.current.length === 0) {
                const newQueue = Array.from({ length: 8 }, (_, i) => i)
                for (let i = newQueue.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1))
                    const temp = newQueue[i]!
                    newQueue[i] = newQueue[j]!
                    newQueue[j] = temp
                }
                queueRef.current = newQueue
            }
            const nextSlotIdx = queueRef.current.pop()
            if (nextSlotIdx !== undefined) {
                setActiveSlot(nextSlotIdx)

                setTimeout(() => {
                    setSlotIndices(prev => {
                        const newIndices = [...prev]
                        const brandPool = BRAND_SLOTS[nextSlotIdx]
                        if (brandPool) {
                            newIndices[nextSlotIdx] = ((newIndices[nextSlotIdx] ?? 0) + 1) % brandPool.length
                        }
                        return newIndices
                    })
                    setActiveSlot(null)
                }, 700)
            }
        }

        const interval = setInterval(triggerRandomChange, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="alianzas" className="relative w-full py-16 bg-white overflow-hidden">
            <div className="relative z-10 w-full max-w-5xl mx-auto mt-4 pt-8 border-t border-slate-200/50">
                <div className="text-center mb-16 max-w-4xl mx-auto px-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500 mb-4">
                        Ecosistema de Integraciones
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-riccione">
                        Alianzas Comerciales
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
                        En Marathon Group estamos seguros de que la creación de alianzas comerciales permite a nuestros clientes y usuarios posicionarse como los más competitivos en el mercado, asegurando su operación día con día y soluciones inmediatas que se adapten a sus necesidades.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12 items-center px-4">
                    {BRAND_SLOTS.map((brands: string[], slotIdx: number) => {
                        const currentIdx = slotIndices[slotIdx] ?? 0
                        const nextIdx = (currentIdx + 1) % brands.length
                        const currentBrand = brands[currentIdx] ?? 'brand'
                        const nextBrand = brands[nextIdx] ?? 'brand'

                        return (
                            <div key={slotIdx} className="relative h-20 md:h-28 w-full flex justify-center items-center overflow-hidden">
                                <div
                                    className={cn(
                                        "flex flex-col items-center justify-start w-full h-full",
                                        activeSlot === slotIdx
                                            ? "transition-transform duration-700 ease-in-out -translate-y-full"
                                            : "translate-y-0"
                                    )}
                                >
                                    {/* Current Brand */}
                                    <div className="flex shrink-0 items-center justify-center w-full h-full">
                                        <img
                                            src={`/images/aliance-commercial/${currentBrand}.png`}
                                            alt={currentBrand}
                                            className="h-20 md:h-30 w-auto object-contain transition-transform hover:scale-105 duration-300"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none'
                                                const label = document.createElement('span')
                                                label.className = "text-[11px] font-bold text-slate-500 uppercase tracking-tighter text-center px-2"
                                                label.innerText = currentBrand
                                                e.currentTarget.parentElement?.appendChild(label)
                                            }}
                                        />
                                    </div>
                                    {/* Next Brand (enters from below) */}
                                    <div className="flex shrink-0 items-center justify-center w-full h-full">
                                        <img
                                            src={`/images/aliance-commercial/${nextBrand}.png`}
                                            alt={nextBrand}
                                            className="h-20 md:h-30 w-auto object-contain transition-transform hover:scale-105 duration-300"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none'
                                                const label = document.createElement('span')
                                                label.className = "text-[11px] font-bold text-slate-500 uppercase tracking-tighter text-center px-2"
                                                label.innerText = nextBrand
                                                e.currentTarget.parentElement?.appendChild(label)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
