import { Link } from 'react-router'
import { Icon } from '@/components/ui/icon'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'

export function Footer() {
	return (
		<footer className="relative w-full bg-white border-t border-slate-100 overflow-hidden">

			<div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

					{/* Column 1: Brand & About */}
					<div className="flex flex-col gap-6">
						<Link to="/" className="inline-block w-fit">
							<Icon name="marathon-light" className="h-8 md:h-10 w-auto" />
						</Link>
						<p className="text-slate-600 font-light leading-relaxed text-sm">
							Suministramos soluciones integrales de la más alta calidad en materiales eléctricos y de tecnologías de la información. Comprometidos con la excelencia operativa.
						</p>
						<div className="flex items-center gap-4 mt-2">
							<a href="https://www.facebook.com/MarathonGroupMexico/" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all duration-300">
								<Icon name='facebook' className="w-4 h-4" />
							</a>
							<a href="https://www.instagram.com/marathongroupmx/" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all duration-300">
								<Icon name='instagram' className="w-4 h-4" />
							</a>
							<a href="https://www.linkedin.com/company/marathongroup-mexico/" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all duration-300">
								<Icon name='linkedin' className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Column 2: Solutions / Divisions */}
					<div className="flex flex-col gap-6">
						<h3 className="text-slate-900 text-xl font-bold font-riccione tracking-wide">Soluciones</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<Link to="/#servicios" className="text-slate-600 hover:text-red-600 text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
									<Icon name='arrow-right' className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
									División Eléctrica
								</Link>
							</li>
							<li>
								<Link to="/#servicios" className="text-slate-600 hover:text-red-600 text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
									<Icon name='arrow-right' className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
									ICT Networks
								</Link>
							</li>
							<li>
								<Link to="/#servicios" className="text-slate-600 hover:text-red-600 text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
									<Icon name='arrow-right' className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
									Automatización
								</Link>
							</li>
							<li>
								<Link to="/#servicios" className="text-slate-600 hover:text-red-600 text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
									<Icon name='arrow-right' className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
									Soporte Técnico
								</Link>
							</li>
						</ul>
					</div>
					{/* Column 3: Contact */}
					<div className="flex flex-col gap-6">
						<h3 className="text-slate-900 text-xl font-bold font-riccione tracking-wide">Contacto</h3>
						<ul className="flex flex-col gap-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
								<span className="text-slate-600 text-sm font-light leading-relaxed">
									Av. 4 Poniente 1712 - A Col. Centro<br />
									Puebla, México C.P. 72000
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-red-600 shrink-0" />
								<a href="tel:2226906700" className="text-slate-600 hover:text-red-600 text-sm font-light transition-colors">
									222 690 6700
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-red-600 shrink-0" />
								<a href="mailto:contacto@marathongroup.mx" className="text-slate-600 hover:text-red-600 text-sm font-light transition-colors">
									contacto@marathongroup.mx
								</a>
							</li>
						</ul>
					</div>

					{/* Column 4: Newsletter */}
					<div className="flex flex-col gap-6">
						<h3 className="text-slate-900 text-xl font-bold font-riccione tracking-wide">Mantente Informado</h3>
						<p className="text-slate-600 text-sm font-light">
							Suscríbete a nuestro boletín para recibir noticias sobre nuevos productos y tecnologías.
						</p>
						<form className="flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
							<div className="relative">
								<input
									type="email"
									placeholder="Tu correo electrónico"
									className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all font-light"
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-red-600 hover:bg-red-500 text-white font-medium text-sm py-3 rounded-lg transition-colors duration-300"
							>
								Suscribirse
							</button>
						</form>
					</div>

				</div>

				{/* Copyright & Legal */}
				<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-xs font-light text-slate-400 tracking-wider">
						&copy; {new Date().getFullYear()} MARATHON GROUP. TODOS LOS DERECHOS RESERVADOS.
					</p>
					<div className="flex items-center gap-6">
						<Link to="#" className="text-xs font-light text-slate-400 hover:text-red-600 transition-colors">
							Aviso de Privacidad
						</Link>
						<Link to="#" className="text-xs font-light text-slate-400 hover:text-red-600 transition-colors">
							Términos y Condiciones
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
