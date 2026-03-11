export const HERO_DATA = {
	title: 'ICT',
	titleAccent: 'Networks',
	description: 'Ofrecemos suministros de cableados completos de voz/datos y comunicaciones, dando soluciones hechas a la medida.',
	ctaText: 'Contáctanos',
	images: {
		background: '/images/marketing/racks-ict-marathon.webp',
		product: '/images/marketing/fiber-optic-jumper.webp',
	}
}

export type SolutionItem = {
	title: string
	description: string
	icon: string
}

export const SOLUTIONS: SolutionItem[] = [
	{
		title: 'Asesoría de proyectos',
		description:
			'Ofrecemos asesoría en la especificación técnica de proyectos, contamos con amplia experiencia en los diferentes ámbitos industriales.',
		icon: '/images/services/project-consulting.png',
	},
	{
		title: 'Entregas Express',
		description:
			'Contamos con alianzas estratégicas terrestres y aéreas para cumplir con las demandas de tiempo de nuestros clientes.',
		icon: '/images/services/express-deliveries.png',
	},
	{
		title: 'Logística',
		description:
			'Comprendemos que la manipulación de nuestros materiales y la entrega de los productos en tiempo son esenciales para nuestros clientes.',
		icon: '/images/services/logistics.png',
	},
	{
		title: 'Suministro',
		description:
			'Con el equipo de empresas que representamos, cubrimos la cadena de abastecimiento de productos de mayor rotación.',
		icon: '/images/services/supply.png',
	},
]

export const INDUSTRIAL_DATA = {
	headline: 'Brindamos atención especializada a cualquier sector de la Industria.',
	phone: '222 690 6700',
	ctaText: '¡Contáctanos!',
	images: {
		background: '/images/services/infrastructure.jpg',
		worker: '/images/services/worker.png',
	}
}

export const CHART_DATA = [38, 52, 45, 61, 55, 72, 68, 80, 74, 88, 82, 95]

export type ParticipationItem = {
	title: string
	image: string
	description?: string
}

export const PARTICIPATION_DATA: ParticipationItem[] = [
	{
		title: 'Automotriz',
		image: '/images/industrial-participation/automotive-participation.jpg',
		description: 'Sistemas de automatización y cableado para líneas de producción vehicular.',
	},
	{
		title: 'Gas & oil',
		image: '/images/industrial-participation/gas-participation.jpg',
		description: 'Infraestructura crítica y redes robustas para entornos extremos.',
	},
	{
		title: 'Textil',
		image: '/images/industrial-participation/textil-participation.jpg',
		description: 'Soluciones de conectividad para maquinaria textil de alta precisión.',
	},
	{
		title: 'TI',
		image: '/images/industrial-participation/ti-participation.jpg',
		description: 'Data centers y redes de datos de alto rendimiento.',
	},
	{
		title: 'Minería',
		image: '/images/industrial-participation/mining-participation.jpg',
		description: 'Comunicaciones y automatización para operaciones mineras seguras.',
	},
	{
		title: 'Química',
		image: '/images/industrial-participation/chemical-participation.jpg',
		description: 'Redes de control y monitoreo para plantas de procesamiento químico.',
	},
	{
		title: 'Retail',
		image: '/images/industrial-participation/retail-participation.jpg',
		description: 'Sistemas de comunicación e infraestructura para grandes superficies.',
	},
	{
		title: 'Acerera',
		image: '/images/industrial-participation/steelmaker-participation.jpg',
		description: 'Infraestructura de red vital para entornos de salud críticos.',
	},
	{
		title: 'Hospitales',
		image: '/images/industrial-participation/hospital-participation.jpg',
		description: 'Infraestructura de red vital para entornos de salud críticos.',
	}, {
		title: 'Alimenticia',
		image: '/images/industrial-participation/food-participation.jpg',
		description: 'Infraestructura de red vital para entornos de salud críticos.',
	},
]

export const QUALITY_SERVICE_DATA = {
	tagline: '¡Conócenos!',
	title: 'Servicio, calidad y compromiso nos respaldan.',
	metrics: [
		{
			value: '1226',
			label: 'Clientes Satisfechos',
			icon: 'users',
		},
		{
			value: '732',
			label: 'Proyectos',
			icon: 'wrench',
		},
		{
			value: '65',
			label: 'Expertos Calificados',
			icon: 'star',
		},
	],
	image: '/images/marketing/quality-service.jpg',
}

export const DIVISIONS_DATA = {
	title: 'Nuestras Divisiones',
	description:
		'Suministramos soluciones integrales de la más alta calidad en materiales eléctrico y de ITC (Tecnologías de la Información y Comunicación).',
	categories: [
		{
			id: 'electrica',
			label: 'Eléctrica',
			items: [
				{
					title: 'Herramientas y accesorios',
					icon: '/images/divisions/accesories-and-tools.png',
					color: '#84cc16', // lime-500
				},
				{
					title: 'Cableado eléctrico',
					icon: '/images/divisions/electrical-wiring.png',
					color: '#ef4444', // red-500
				},
				{
					title: 'Automatización y control',
					icon: '/images/divisions/automation-and-control.png',
					color: '#f97316', // orange-500
				},
				{
					title: 'Canalización',
					icon: '/images/divisions/canalization.png',
					color: '#f59e0b', // amber-500
				},
				{
					title: 'Iluminación',
					icon: '/images/divisions/ilumination.png',
					color: '#3b82f6', // blue-500
				},
			],
		},
		{
			id: 'ict',
			label: 'ICT Networks',
			items: [
				{
					title: 'Cableado Estructurado',
					icon: '/images/divisions/structure-wiring.png',
					color: '#ef4444',
				},
				{
					title: 'Racks y Gabinetes',
					icon: '/images/divisions/racks-division.png',
					color: '#f59e0b',
				},
				{
					title: 'Data Center',
					icon: '/images/divisions/data-center-division.png',
					color: '#3b82f6',
				},
				{
					title: 'Ethernet Industrial',
					icon: '/images/divisions/ethernet-industrial-division.png',
					color: '#10b981',
				},
			],
		},
	],
}
