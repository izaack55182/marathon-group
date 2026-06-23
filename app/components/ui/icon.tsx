// CORE
import type { SVGProps } from 'react'
// TYPES
import type { IconName } from '@/components/ui/icons/types'
// UTILS
import { cn } from '@/utils/misc'

// The sprite is served from /public, always available at this static URL
const href = '/sprite.svg'

const sizeClassName = {
	font: 'size-[1em]',
	xs: 'size-3',
	sm: 'size-4',
	md: 'size-5',
	lg: 'size-6',
	xl: 'size-7',
} as const

type Size = keyof typeof sizeClassName

const childrenSizeClassName = {
	font: 'gap-1.5',
	xs: 'gap-1.5',
	sm: 'gap-1.5',
	md: 'gap-2',
	lg: 'gap-2',
	xl: 'gap-3',
} satisfies Record<Size, string>

export type IconSizes = keyof typeof sizeClassName

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName
	testId?: string
	className?: string
	size?: IconSizes
	/**
	 * When true, skips the default `fill-none stroke-current` classes.
	 * Use for SVG icons that have their own internal fills/colors (logos, illustrations).
	 */
	raw?: boolean
}

/**
 * Icon component wrapper for SVG icons.
 * @returns SVG icon as a react component
 */
export function Icon({ name, size = 'font', testId, className, children, raw = false, ...props }: IconProps) {
	if (children) {
		return (
			<span className={`inline-flex items-center ${childrenSizeClassName[size]}`}>
				<Icon name={name} size={size} className={className} raw={raw} {...props} />
				{children}
			</span>
		)
	}
	return (
		<svg
			className={cn(
				sizeClassName[size],
				!raw && 'inline-block flex-shrink-0 self-center fill-none stroke-current',
				raw && 'inline-block flex-shrink-0 self-center',
				className
			)}
			data-testid={testId}
			data-name={name}
			{...props}
		>
			<title>{name}</title>
			<use href={`${href}#${name}`} />
		</svg>
	)
}

export { href }
export type { IconName }
