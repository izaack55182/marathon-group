import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/misc'
import Logo from './logo'
import { MobileNavigation } from './public-mobile-navigation'
import { Factory, Layers, BookOpen, Handshake, Zap, Cpu, Network, Lightbulb, Wrench, Server, Database, Plug, Wind, Ship, Plane, Car, Building, Trophy, Bed, Hospital, ChevronDown } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
export function Header() {
	return (
		<>
			<header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
				<div className="flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
					<div className="flex items-center gap-10">
						<div className="flex items-center gap-3">
							<Logo variant="long" className="h-10 w-auto hidden md:block" />
							<Logo variant="icon" className="h-10 w-auto block md:hidden" />
						</div>

						<div className="hidden md:flex">
							<NavigationMenu viewport={false}>
								<NavigationMenuList>
									{/* INICIO (DROPDOWN) */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="bg-transparent text-base font-semibold hover:bg-accent/50">
											Inicio
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
												{[
													{ label: 'Participación Industrial', desc: 'Presencia en sectores clave.', icon: Factory, href: '/#industrial-participation' },
													{ label: 'Divisiones', desc: 'Especialización por industria.', icon: Layers, href: '/#divisiones' },
													{ label: 'Marcas y catálogos', desc: 'Nuestra oferta completa.', icon: BookOpen, href: '/#alianzas' },
													{ label: 'Alianzas comerciales', desc: 'Socios estratégicos.', icon: Handshake, href: '/#alianzas' },
												].map((item) => (
													<li key={item.label}>
														<NavigationMenuLink asChild>
															<Link
																to={item.href}
																className="flex items-start gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															>
																<div className="mt-1 flex-shrink-0 text-red-500">
																	<item.icon className="w-5 h-5" />
																</div>
																<div className="space-y-1">
																	<div className="text-sm font-medium leading-none">{item.label}</div>
																	<p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
																		{item.desc}
																	</p>
																</div>
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* ELECTRICA (DROPDOWN) */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="bg-transparent text-base font-semibold hover:bg-accent/50">
											Electrica
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
												{[
													{ label: 'Cableado eléctrico', desc: 'Soluciones de conducción segura.', icon: Zap, id: 'cableado' },
													{ label: 'Automatización y control', desc: 'Sistemas inteligentes de gestión.', icon: Cpu, id: 'automatizacion' },
													{ label: 'Canalización', desc: 'Protección y organización de redes.', icon: Network, id: 'canalizacion' },
													{ label: 'Iluminación', desc: 'Eficiencia y diseño lumínico.', icon: Lightbulb, id: 'iluminacion' },
													{ label: 'Herramientas y accesorios', desc: 'Equipamiento profesional.', icon: Wrench, id: 'herramientas' },
												].map((item) => (
													<li key={item.label}>
														<NavigationMenuLink asChild>
															<Link
																to={`/electrica?cat=${item.id}`}
																className="flex items-start gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															>
																<div className="mt-1 flex-shrink-0 text-red-500">
																	<item.icon className="w-5 h-5" />
																</div>
																<div className="space-y-1">
																	<div className="text-sm font-medium leading-none">{item.label}</div>
																	<p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
																		{item.desc}
																	</p>
																</div>
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>

									<NavigationMenuItem>
										<NavigationMenuTrigger className="bg-transparent text-base font-semibold hover:bg-accent/50">
											ICT Networks
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
												{[
													{ label: 'Cableado estructurado', desc: 'Infraestructura de red confiable.', icon: Network, id: 'cableado-estructurado' },
													{ label: 'Data center', desc: 'Soluciones para centros de datos.', icon: Database, id: 'data-center' },
													{ label: 'Racks y gabinetes', desc: 'Gestión y soporte de equipos.', icon: Server, id: 'racks-gabinetes' },
													{ label: 'Ethernet industrial', desc: 'Conectividad robusta para plantas.', icon: Plug, id: 'ethernet-industrial' },
												].map((item) => (
													<li key={item.label}>
														<NavigationMenuLink asChild>
															<Link
																to={`/ict-networks?cat=${item.id}`}
																className="flex items-start gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															>
																<div className="mt-1 flex-shrink-0 text-blue-500">
																	<item.icon className="w-5 h-5" />
																</div>
																<div className="space-y-1">
																	<div className="text-sm font-medium leading-none">{item.label}</div>
																	<p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
																		{item.desc}
																	</p>
																</div>
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>

					<div className="flex items-center gap-1.5 md:gap-2">
						<div className="hidden md:flex items-center gap-3">
							<Link to="/contact" className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-base font-semibold hover:bg-accent/50')}>
								Contacto
							</Link>
							<Link to="/#" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'bg-transparent text-base font-semibold hover:bg-accent/50')}>
								Iniciar sesión
							</Link>
						</div>
						<div className="flex md:hidden items-center gap-1">
							<div className="block md:hidden">
								<MobileNavigation />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
