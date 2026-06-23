
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
		icon: '/images/services/project-consulting.webp',
	},
	{
		title: 'Entregas Express',
		description:
			'Contamos con alianzas estratégicas terrestres y aéreas para cumplir con las demandas de tiempo de nuestros clientes.',
		icon: '/images/services/express-deliveries.webp',
	},
	{
		title: 'Logística',
		description:
			'Comprendemos que la manipulación de nuestros materiales y la entrega de los productos en tiempo son esenciales para nuestros clientes.',
		icon: '/images/services/logistics.webp',
	},
	{
		title: 'Suministro',
		description:
			'Con el equipo de empresas que representamos, cubrimos la cadena de abastecimiento de productos de mayor rotación.',
		icon: '/images/services/supply.webp',
	},
]

export const INDUSTRIAL_DATA = {
	headline: 'Brindamos atención especializada a cualquier sector de la Industria.',
	phone: '222 690 6700',
	ctaText: '¡Contáctanos!',
	images: {
		background: '/images/services/infrastructure.webp',
		worker: '/images/services/worker.webp',
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
		image: '/images/industrial-participation/automotive-participation.webp',
		description: 'Sistemas de automatización y cableado para líneas de producción vehicular.',
	},
	{
		title: 'Gas & oil',
		image: '/images/industrial-participation/gas-participation.webp',
		description: 'Infraestructura crítica y redes robustas para entornos extremos.',
	},
	{
		title: 'Textil',
		image: '/images/industrial-participation/textil-participation.webp',
		description: 'Soluciones de conectividad para maquinaria textil de alta precisión.',
	},
	{
		title: 'TI',
		image: '/images/industrial-participation/ti-participation.webp',
		description: 'Data centers y redes de datos de alto rendimiento.',
	},
	{
		title: 'Minería',
		image: '/images/industrial-participation/mining-participation.webp',
		description: 'Comunicaciones y automatización para operaciones mineras seguras.',
	},
	{
		title: 'Química',
		image: '/images/industrial-participation/chemical-participation.webp',
		description: 'Redes de control y monitoreo para plantas de procesamiento químico.',
	},
	{
		title: 'Retail',
		image: '/images/industrial-participation/retail-participation.webp',
		description: 'Sistemas de comunicación e infraestructura para grandes superficies.',
	},
	{
		title: 'Acerera',
		image: '/images/industrial-participation/steelmaker-participation.webp',
		description: 'Infraestructura de red vital para entornos de salud críticos.',
	},
	{
		title: 'Hospitales',
		image: '/images/industrial-participation/hospital-participation.webp',
		description: 'Infraestructura de red vital para entornos de salud críticos.',
	}, {
		title: 'Alimenticia',
		image: '/images/industrial-participation/food-participation.webp',
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
					icon: '/images/divisions/accesories-and-tools.webp',
					color: '#84cc16', // lime-500
				},
				{
					title: 'Cableado eléctrico',
					icon: '/images/divisions/electrical-wiring.webp',
					color: '#ef4444', // red-500
				},
				{
					title: 'Automatización y control',
					icon: '/images/divisions/automation-and-control.webp',
					color: '#f97316', // orange-500
				},
				{
					title: 'Canalización',
					icon: '/images/divisions/canalization.webp',
					color: '#f59e0b', // amber-500
				},
				{
					title: 'Iluminación',
					icon: '/images/divisions/ilumination.webp',
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
					icon: '/images/divisions/structure-wiring.webp',
					color: '#ef4444',
				},
				{
					title: 'Racks y Gabinetes',
					icon: '/images/divisions/racks-division.webp',
					color: '#f59e0b',
				},
				{
					title: 'Data Center',
					icon: '/images/divisions/data-center-division.webp',
					color: '#3b82f6',
				},
				{
					title: 'Ethernet Industrial',
					icon: '/images/divisions/ethernet-industrial-division.webp',
					color: '#10b981',
				},
			],
		},
	],
}

export const TESTIMONIALS_DATA = {
	title: 'Opiniones',
	description: 'En Marathon Group estamos seguros de que la creación de alianzas comerciales permite a nuestros clientes y usuarios posicionarse como los más competitivos en el mercado.',
	items: [
		{
			quote: 'Excelente servicio y atención, los recomiendo ampliamente, los mejores en el mercado.',
			author: 'Antonio Flores',
			position: 'Ingeniero ICT',
		},
		{
			quote: 'Muy buen servicio siempre son muy confiables y los mejores precios sin dudarlo.',
			author: 'Omar Pérez',
			position: 'Ingeniero Helukabel',
		},
		{
			quote: 'Todo muy rápido y puntual. Muy buen especialista.',
			author: 'Juan Escobar',
			position: 'Ingeniero CFE',
		},
	],
}

export const BRAND_SLOTS = [
	['aplicaciones-ilsa', 'argo', 'aritex', 'aronal'],
	['audi', 'bachoco', 'basf', 'bmw'],
	['deacero', 'demek', 'dti', 'durr'],
	['eisenmann', 'grupo-acerero', 'hirshchmann', 'ims'],
	['pemex', 'polaquimia', 'proa', 'rassini'],
	['schaeffler', 'sigosa', 'simec', 'skytex'],
	['tenaris-tamsa', 'tenco', 'ternium', 'thyssenkrupp'],
	['ti-america', 'treofan', 'tubacero', 'viscofan', 'volkwagen'],
]

import type { IconName } from '@/components/ui/icons/types'

export type CategoryItem = {
	label: string
	icon: IconName
}

export type CategorySection = {
	title: string
	color: string
	borderColor: string
	bgColor: string
	items: CategoryItem[]
}

export type Category = {
	id: string
	label: string
	icon: IconName
	description: string
	image: string
	sections: CategorySection[]
}

export const ELECTRICA_CATEGORIES: Category[] = [
	{
		id: 'cableado',
		label: 'Cableado eléctrico',
		icon: 'zap',
		description: 'Contamos con una amplia gama de cables eléctricos flexibles especiales para diferentes aplicaciones de baja, media y alta tensión.',
		image: '/images/electrical-division/electrical-wiring.webp',
		sections: [
			{
				title: 'Cableado Industrial',
				color: 'text-primary',
				borderColor: 'border-primary',
				bgColor: 'bg-primary/5',
				items: [
					{ label: 'Energía Eléctrica', icon: 'zap' },
					{ label: 'Energía Eólica', icon: 'wind' },         // ⚠️ agregar wind.svg
					{ label: 'Buques', icon: 'ship' },                  // ⚠️ agregar ship.svg
					{ label: 'Aeropuertos', icon: 'plane' },            // ⚠️ agregar plane.svg
					{ label: 'Automóvil', icon: 'car' },               // ⚠️ agregar car.svg
				]
			},
			{
				title: 'Cableado Empresarial',
				color: 'text-secondary',
				borderColor: 'border-secondary',
				bgColor: 'bg-secondary/5',
				items: [
					{ label: 'Oficinas', icon: 'building' },            // ⚠️ agregar building.svg
					{ label: 'Estadios y Sitios', icon: 'trophy' },    // ⚠️ agregar trophy.svg
					{ label: 'Hotelería', icon: 'bed' },                // ⚠️ agregar bed.svg
					{ label: 'Hospitales', icon: 'hospital' },         // ⚠️ agregar hospital.svg
				]
			}
		]
	},
	{
		id: 'automatizacion',
		label: 'Automatización y control',
		icon: 'cpu',                                                    // ⚠️ agregar cpu.svg
		description: 'Distribuimos una amplia gama de equipos electrónicos para los procesos de automatización y control de líneas de producción industrial.',
		image: '/images/electrical-division/automatization-control.webp',
		sections: [
			{
				title: 'Sistemas de Control',
				color: 'text-primary',
				borderColor: 'border-primary',
				bgColor: 'bg-primary/5',
				items: [
					{ label: 'PLC y HMI', icon: 'cpu' },               // ⚠️ agregar cpu.svg
					{ label: 'Sensores', icon: 'zap' },
					{ label: 'Actuadores', icon: 'wrench' },
				]
			}
		]
	},
	{
		id: 'canalizacion',
		label: 'Canalización',
		icon: 'network',
		description: 'Comercializamos una extensa variedad de soportería los cuales permiten el cuidado de los conductores, protegiéndolos de daños mecánicos, químicos, altas temperaturas y humedad; así como canalización flexible para aplicaciones especiales.',
		image: '/images/electrical-division/canalization.webp',
		sections: [
			{
				title: 'Sistemas de Soporte',
				color: 'text-primary',
				borderColor: 'border-primary',
				bgColor: 'bg-primary/5',
				items: [
					{ label: 'Charola de Malla', icon: 'network' },
					{ label: 'Tubería Conduit', icon: 'wrench' },
				]
			}
		]
	},
	{
		id: 'iluminacion',
		label: 'Iluminación',
		icon: 'lightbulb',                                              // ⚠️ agregar lightbulb.svg
		description: 'Disponemos de múltiples opciones en iluminación industrial, comercial y residencial; así como generación de energía fotovoltaica.',
		image: '/images/electrical-division/ilumination.webp',
		sections: [
			{
				title: 'Iluminación LED',
				color: 'text-primary',
				borderColor: 'border-primary',
				bgColor: 'bg-primary/5',
				items: [
					{ label: 'Industrial High-Bay', icon: 'lightbulb' }, // ⚠️ agregar lightbulb.svg
					{ label: 'Oficinas / Panel', icon: 'building' },     // ⚠️ agregar building.svg
				]
			}
		]
	},
	{
		id: 'herramientas',
		label: 'Herramientas y accesorios',
		icon: 'wrench',
		description: 'Contamos con herramientas y accesorios eléctricos de la más alta calidad, los cuales se adaptan a las necesidades de nuestros clientes. Estamos enfocamos en proveer soluciones a la medida a través de marcas premium como Milwaukee, Panduit, Burndy y Raco. Garantizando así un excelente desempeño y cumplimiento a los requerimientos del usuario final.',
		image: '/images/electrical-division/tools.webp',
		sections: [
			{
				title: 'Equipamiento',
				color: 'text-primary',
				borderColor: 'border-primary',
				bgColor: 'bg-primary/5',
				items: [
					{ label: 'Herramienta Manual', icon: 'wrench' },
					{ label: 'Equipos de Medición', icon: 'zap' },
				]
			}
		]
	}
]

export const ICT_CATEGORIES: Category[] = [
	{
		id: 'cableado-estructurado',
		label: 'Cableado estructurado',
		icon: 'network',
		description: 'Soluciones de infraestructura de red de alto rendimiento para garantizar una conectividad fluida y escalable.',
		image: '/images/ict-division/structured-cabling.webp',
		sections: [
			{
				title: 'Redes Corporativas',
				color: 'text-secondary',
				borderColor: 'border-secondary',
				bgColor: 'bg-secondary/5',
				items: [
					{ label: 'Cobre Cat 6/6A/7', icon: 'network' },
					{ label: 'Fibra Óptica OM4/OM5', icon: 'git-branch' },
					{ label: 'Sistemas de Gestión', icon: 'globe' },
				]
			},
			{
				title: 'Seguridad y Datos',
				color: 'text-indigo-600',
				borderColor: 'border-indigo-600',
				bgColor: 'bg-indigo-50/5',
				items: [
					{ label: 'Seguridad Física', icon: 'shield' },
					{ label: 'Puntos de Acceso WiFi', icon: 'wifi' },  // ⚠️ agregar wifi.svg
				]
			}
		]
	},
	{
		id: 'data-center',
		label: 'Data center',
		icon: 'server',
		description: 'Soluciones críticas para centros de datos que requieren máxima confiabilidad, enfriamiento y eficiencia energética.',
		image: '/images/ict-division/data-center.webp',
		sections: [
			{
				title: 'Infraestructura Crítica',
				color: 'text-secondary',
				borderColor: 'border-secondary',
				bgColor: 'bg-secondary/5',
				items: [
					{ label: 'Contención de Pasillos', icon: 'server' },
					{ label: 'PDU Inteligentes', icon: 'plug' },
					{ label: 'Fibra de Alta Densidad', icon: 'network' },
				]
			}
		]
	},
	{
		id: 'racks-gabinetes',
		label: 'Racks y gabinetes',
		icon: 'server',
		description: 'Sistemas de alojamiento y organización profesional para equipos activos y pasivos de red.',
		image: '/images/ict-division/gabineters.webp',
		sections: [
			{
				title: 'Gestión de Equipos',
				color: 'text-secondary',
				borderColor: 'border-secondary',
				bgColor: 'bg-secondary/5',
				items: [
					{ label: 'Gabinetes de Piso', icon: 'server' },
					{ label: 'Racks de 2 Postes', icon: 'server' },
					{ label: 'Gestores de Cableado', icon: 'layers' },
				]
			}
		]
	},
	{
		id: 'ethernet-industrial',
		label: 'Ethernet industrial',
		icon: 'plug',
		description: 'Conectividad robusta y blindada diseñada para resistir los entornos industriales más exigentes.',
		image: '/images/ict-division/ethernet-industrial.webp',
		sections: [
			{
				title: 'Planta de Producción',
				color: 'text-secondary',
				borderColor: 'border-secondary',
				bgColor: 'bg-secondary/5',
				items: [
					{ label: 'Switching Industrial', icon: 'cpu' },    // ⚠️ agregar cpu.svg
					{ label: 'Cables M12 / IP67', icon: 'plug' },
					{ label: 'Conectividad Fieldbus', icon: 'network' },
				]
			}
		]
	}
]

export const CATEGORY_BRANDS: Record<string, { folder: string; items: string[] }> = {
	// Electrica
	'cableado': {
		folder: 'electrical-division/electrical-cabling',
		items: ['viakon', 'ascable-recael', 'helukabel', 'general-cable', 'stabiloy', 'tfkable', 'bendel']
	},
	'automatizacion': {
		folder: 'electrical-division/automatization',
		items: ['celduc', 'lumberg-automation', 'phoenix-contact', 'power-electronics']
	},
	'canalizacion': {
		folder: 'electrical-division/canalization',
		items: ['charofil', 'igus', 'jupiter', 'panduir', 'tecnotray', 'unex']
	},
	'iluminacion': {
		folder: 'electrical-division/ilumination',
		items: ['beghelli', 'dialight', 'killarl', 'luceco']
	},
	'herramientas': {
		folder: 'electrical-division/tools',
		items: ['burndy', 'klein-tools', 'milwaukey', 'panduit', 'phoenix-contact', 'raco']
	},
	// ICT (Unified folder for brand assets)
	'cableado-estructurado': {
		folder: 'ict-division/structured-cable',
		items: ['leoni', 'optral', 'datwyler']
	},
	'data-center': {
		folder: 'ict-division/structured-cable',
		items: ['leoni', 'optral', 'datwyler']
	},
	'racks-gabinetes': {
		folder: 'ict-division/structured-cable',
		items: ['leoni', 'optral', 'datwyler', 'nvent-hoffman']
	},
	'ethernet-industrial': {
		folder: 'ict-division/structured-cable',
		items: ['hirschmann']
	},
}
