import { Icon } from '@/components/ui/icon'

type InfoCard = {
	icon: React.ReactNode
	title: string
	lines: string[]
}

const cards: InfoCard[] = [
	{
		icon: <Icon name="map-pin" size="sm" className="text-primary" />,
		title: 'Dirección Matriz',
		lines: [
			'Av. 4 Poniente 1712 - A Col. Centro',
			'Puebla, México C.P. 72000',
			'',
			'Lun a Vie · 8:30 – 18:00',
			'Sábado · 9:00 – 13:00',
		],
	},
	{
		icon: <Icon name="mail" size="sm" className="text-primary" />,
		title: 'Correo',
		lines: [
			'contacto@marathongroup.mx',
			'matriz@marathongroup.mx',
		],
	},
	{
		icon: <Icon name="phone" size="sm" className="text-primary" />,
		title: 'Teléfono',
		lines: ['(222) 690 67 00'],
	},
]

export function ContactInfoCards() {
	return (
		<div className="flex flex-col gap-4 w-full">
			{cards.map((card) => (
				<div
					key={card.title}
					className="relative group rounded-2xl overflow-hidden bg-card border border-border backdrop-blur-xl shadow-sm px-6 py-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
				>
					{/* Subtle top accent line */}
					<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

					{/* Icon + Title */}
					<div className="flex items-center gap-2.5 mb-3">
						<span className="flex items-center justify-center size-8 rounded-lg bg-primary/10 ring-1 ring-primary/20 shrink-0">
							{card.icon}
						</span>
						<h3 className="text-sm font-bold text-foreground tracking-tight">
							{card.title}
						</h3>
					</div>

					{/* Lines */}
					<div className="space-y-0.5 pl-1">
						{card.lines.map((line, i) =>
							line === '' ? (
								<div key={i} className="h-2" />
							) : (
								<p
									key={i}
									className="text-sm text-muted-foreground leading-relaxed"
								>
									{line}
								</p>
							)
						)}
					</div>
				</div>
			))}
		</div>
	)
}
