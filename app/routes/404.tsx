import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import type { Route } from './+types/404'

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: '404 - Not Found' },
		{ name: 'description', content: 'The page you are looking for does not exist.' },
	]
}

export default function NotFound() {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 text-slate-900 relative overflow-hidden">
			{/* Background Decorative Elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full" />
				<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
				<div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
			</div>

			<div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
				{/* Icon Container with Glassmorphism */}
				<div className="relative mb-8 group">
					<div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
					<div className="relative bg-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl scale-95 md:scale-100 transition-all duration-500 hover:shadow-red-500/10">
						<Icon name="404-not-found" className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl" />
					</div>
				</div>

				<div className="space-y-6">
					<div className="space-y-2">
						<h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 font-riccione">
							Ruta <span className="text-red-600">No Encontrada</span>
						</h1>
						<p className="text-xl md:text-2xl font-light text-slate-500 tracking-tight">
							El nodo solicitado no responde o ha sido desmantelado.
						</p>
					</div>

					<p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
						Lo sentimos, la página que buscas no existe. Verifica la URL o utiliza el botón inferior para regresar a la central de operaciones.
					</p>

					<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button asChild size="lg" className="h-14 px-10 rounded-none bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20">
							<Link to="/">
								<Icon name="house" size="sm" className="mr-2" />
								Volver al Inicio
							</Link>
						</Button>
					</div>
				</div>

				{/* System ID Decortive */}
				<div className="mt-16 flex flex-col items-center gap-2 opacity-30 select-none">
					<div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
					<span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">
						Error Code: 0x404_MARATHON_SERIAL
					</span>
				</div>
			</div>
		</div>
	)
}
