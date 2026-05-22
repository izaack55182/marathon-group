import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/utils/misc'

import Logo from './logo'

export function MobileNavigation() {
	const [open, setOpen] = useState(false)
	const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

	const menuItems = [
		{ label: 'Inicio', href: '/', icon: 'house' as const },
		{ label: 'Participación Industrial', href: '/#industrial-participation', icon: 'factory' as const },
		{ label: 'Divisiones', href: '/#divisiones', icon: 'layout-grid' as const },
		{ label: 'Marcas y catálogos', href: '/#alianzas', icon: 'book-open' as const },
		{ label: 'Alianzas comerciales', href: '/#alianzas', icon: 'handshake' as const },
	] as const

	const electricalLinks = [
		{ label: 'Cableado eléctrico', id: 'cableado', icon: 'zap' as const },
		{ label: 'Automatización y control', id: 'automatizacion', icon: 'settings' as const },
		{ label: 'Canalización', id: 'canalizacion', icon: 'network' as const },
		{ label: 'Iluminación', id: 'iluminacion', icon: 'sun' as const },
		{ label: 'Herramientas y accesorios', id: 'herramientas', icon: 'wrench' as const },
	] as const

	const ictLinks = [
		{ label: 'Cableado estructurado', id: 'cableado-estructurado', icon: 'network' as const },
		{ label: 'Data center', id: 'data-center', icon: 'server' as const },
		{ label: 'Racks y gabinetes', id: 'racks-gabinetes', icon: 'server-crash' as const },
		{ label: 'Ethernet industrial', id: 'ethernet-industrial', icon: 'plug' as const },
	] as const

	const toggleSubmenu = (name: string) => {
		setActiveSubmenu(activeSubmenu === name ? null : name)
	}

	return (
		<div className="md:hidden">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="size-11 rounded-2xl hover:bg-muted/50 border border-transparent active:border-border/50 transition-all"
					>
						<Icon name="menu" className="size-6 text-foreground" />
						<span className="sr-only">Abrir menú</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="right"
					className="w-[300px] sm:w-[380px] bg-white border-l border-slate-100 p-0 flex flex-col"
				>
					<SheetHeader className="p-8 text-left border-b border-slate-100 relative z-10">
						<div className="flex items-center justify-between">
							<Logo variant="long" className="w-32" />
							<div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
								v7.14
							</div>
						</div>
					</SheetHeader>

					<nav className="flex-1 overflow-y-auto p-6 relative z-10 space-y-8">
						{/* General Menu */}
						<div className="space-y-3">
							<div className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
								Menú General
							</div>
							<div className="flex flex-col gap-1">
								{menuItems.map((item) => (
									<Link
										key={item.label}
										to={item.href}
										onClick={() => setOpen(false)}
										className="flex items-center gap-4 px-4 py-3 rounded-2xl group hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
									>
										<div className="size-9 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-red-500/10 group-hover:text-red-500 transition-colors">
											<Icon
												name={item.icon}
												className="size-4.5 transition-transform duration-300 group-hover:scale-110"
											/>
										</div>
										<span className="font-bold text-base tracking-tight text-slate-700 group-hover:text-slate-900">
											{item.label}
										</span>
									</Link>
								))}
							</div>
						</div>

						{/* Divisions Submenus */}
						<div className="space-y-4">
							<div className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
								Divisiones Especializadas
							</div>

							{/* Electrica Accordion */}
							<div className="space-y-1">
								<button
									onClick={() => toggleSubmenu('electrica')}
									className={cn(
										"flex items-center justify-between w-full px-4 py-4 rounded-2xl group transition-all border",
										activeSubmenu === 'electrica'
											? "bg-red-50 border-red-100/50 text-red-600"
											: "hover:bg-slate-50 border-transparent hover:border-slate-100 text-slate-700"
									)}
								>
									<div className="flex items-center gap-4">
										<div className={cn(
											"size-9 rounded-xl flex items-center justify-center transition-colors",
											activeSubmenu === 'electrica' ? "bg-red-500 text-white" : "bg-slate-100 text-slate-500"
										)}>
											<Icon name="zap" className="size-4.5" />
										</div>
										<span className="font-bold text-base tracking-tight">División Eléctrica</span>
									</div>
									<Icon
										name="chevron-down"
										className={cn("size-4 transition-transform duration-300", activeSubmenu === 'electrica' && "rotate-180")}
									/>
								</button>

								{activeSubmenu === 'electrica' && (
									<div className="pl-4 pr-2 py-2 space-y-1 animate-in slide-in-from-top-2 duration-300">
										{electricalLinks.map((sub) => (
											<Link
												key={sub.id}
												to={`/division/electrica?cat=${sub.id}`}
												onClick={() => setOpen(false)}
												className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-slate-500 hover:text-red-600 group"
											>
												<Icon name={sub.icon} className="size-4 opacity-50 group-hover:opacity-100" />
												<span className="text-sm font-medium">{sub.label}</span>
											</Link>
										))}
									</div>
								)}
							</div>

							{/* ICT Accordion */}
							<div className="space-y-1">
								<button
									onClick={() => toggleSubmenu('ict')}
									className={cn(
										"flex items-center justify-between w-full px-4 py-4 rounded-2xl group transition-all border",
										activeSubmenu === 'ict'
											? "bg-blue-50 border-blue-100/50 text-blue-600"
											: "hover:bg-slate-50 border-transparent hover:border-slate-100 text-slate-700"
									)}
								>
									<div className="flex items-center gap-4">
										<div className={cn(
											"size-9 rounded-xl flex items-center justify-center transition-colors",
											activeSubmenu === 'ict' ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"
										)}>
											<Icon name="network" className="size-4.5" />
										</div>
										<span className="font-bold text-base tracking-tight">ICT Networks</span>
									</div>
									<Icon
										name="chevron-down"
										className={cn("size-4 transition-transform duration-300", activeSubmenu === 'ict' && "rotate-180")}
									/>
								</button>

								{activeSubmenu === 'ict' && (
									<div className="pl-4 pr-2 py-2 space-y-1 animate-in slide-in-from-top-2 duration-300">
										{ictLinks.map((sub) => (
											<Link
												key={sub.id}
												to={`/division/ict-networks?cat=${sub.id}`}
												onClick={() => setOpen(false)}
												className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-slate-500 hover:text-blue-600 group"
											>
												<Icon name={sub.icon} className="size-4 opacity-50 group-hover:opacity-100" />
												<span className="text-sm font-medium">{sub.label}</span>
											</Link>
										))}
									</div>
								)}
							</div>
						</div>
					</nav>

					<div className="p-6 border-t border-slate-100">
						<Link
							to="/login"
							onClick={() => setOpen(false)}
							className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-base hover:bg-slate-800 transition-all active:scale-[0.98]"
						>
							<Icon name="users" className="size-4" />
							Iniciar sesión
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
