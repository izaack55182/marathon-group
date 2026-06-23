import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { Form as RouterForm, type FormProps as RouterFormProps } from 'react-router'

// UTILS
import { cn } from '@/utils/misc'
import { cva, type VariantProps } from 'class-variance-authority'

// COMPONENTS
import { Button } from './button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'
import { Icon } from './icon'

/**
 * Variantes del contenedor principal.
 * 'glass' replica el fondo rosado granulado de la imagen.
 */
const formContentVariants = cva('flex flex-col w-full gap-4 transition-all relative', {
	variants: {
		align: {
			default: '',
			center: 'items-center',
		},
		variant: {
			default: '',
			glass: `
				rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden
				bg-[#f53b8e] text-white
				before:absolute before:inset-0 before:z-0
				before:bg-[radial-gradient(at_20%_30%,#4d0220_0px,transparent_50%),radial-gradient(at_80%_10%,#4d0220_0px,transparent_40%)]
				after:absolute after:inset-0 after:z-[1] after:opacity-30 after:mix-blend-overlay
				after:bg-[url("data:image/svg+xml,%3Csvg_viewBox='0_0_200_200'_xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter_id='n'%3E%3CfeTurbulence_type='fractalNoise'_baseFrequency='0.65'_numOctaves='3'_stitchTiles='stitch'/%3E%3C/filter%3E%3Crect_width='100%25'_height='100%25'_filter='url(%23n)'/%3E%3C/svg%3E")]
			`,
		},
	},
	defaultVariants: {
		align: 'default',
		variant: 'default',
	},
})

export interface FormContentProps
	extends HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof formContentVariants> { }

export const FormContent = forwardRef<HTMLDivElement, FormContentProps>(
	({ children, className, align, variant, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(formContentVariants({ align, variant }), className)} {...props}>
				<div className="relative z-10 w-full flex flex-col gap-4">{children}</div>
			</div>
		)
	}
)

export const FormRow = ({ children, className }: { children: ReactNode; className?: string }) => {
	return (
		<div className={cn('flex w-full flex-col gap-4 md:flex-row items-end', className)}>
			{children}
		</div>
	)
}

export const FormCollapsible = ({ label, children }: { label?: string; children: ReactNode }) => {
	return (
		<Collapsible className="w-full flex flex-col justify-center">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t border-border" />
				</div>
				<div className="relative flex justify-center">
					<CollapsibleTrigger asChild>
						<Button className="group bg-card text-muted-foreground" variant="link">
							{label ?? 'Ver más'}
							<Icon
								name="chevron-down"
								className={
									'ml-2 h-4 w-4 group-data-[state=open]:rotate-180 transform duration-300 ease-in-out'
								}
							/>
						</Button>
					</CollapsibleTrigger>
				</div>
			</div>
			<CollapsibleContent className="space-y-4 pt-4">{children}</CollapsibleContent>
		</Collapsible>
	)
}

export const FormFooter = ({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) => {
	return <div className={cn('mt-4 border-t border-border pt-6 flex items-center justify-end gap-3', className)}>{children}</div>
}

export const FormErrors = ({
	errors,
}: {
	errors: Record<string, string[]> | string[] | null | undefined
}) => {
	const errorsToRender: string[] = []

	if (Array.isArray(errors)) {
		errorsToRender.push(...errors)
	} else if (errors) {
		for (const errorList of Object.values(errors)) {
			errorsToRender.push(...errorList)
		}
	}

	if (!errorsToRender.length) return null

	return (
		<div className="flex flex-col gap-1.5 p-4 rounded-xl border border-border">
			{errorsToRender.map((error, index) => (
				<div key={index} className="flex items-center gap-2 text-muted-foreground">
					<Icon name="circle-alert" className="size-4 shrink-0 opacity-80" />
					<span className="text-sm font-medium tracking-tight">{error}</span>
				</div>
			))}
		</div>
	)
}


export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	description?: string
	icon?: string
	iconClassName?: string
	variant?: 'default' | 'settings'
}

export function Section({ title, description, icon, iconClassName, children, className, variant = 'default', ...props }: SectionProps) {
	const isSettings = variant === 'settings'
	return (
		<div className={cn('flex flex-col gap-3', className)} {...props}>
			{(title || description || icon) && (
				<div className={cn('flex items-center gap-3', !isSettings && 'mb-2', className?.includes('text-center') && 'justify-center')}>
					{icon && (
						<div className="flex size-9 items-center justify-center rounded-lg bg-muted border border-border shrink-0">
							<Icon name={icon as any} className={cn('size-5 text-muted-foreground', iconClassName)} />
						</div>
					)}
					<div className="flex flex-col gap-0.5">
						{title && (
							<h3 className={cn(
								isSettings ? 'text-sm font-semibold text-foreground' : 'text-xl font-bold text-foreground leading-none'
							)}>
								{title}
							</h3>
						)}
						{description && (
							<p className={cn(
								isSettings ? 'text-xs text-muted-foreground/70' : 'text-sm text-muted-foreground/80 font-medium mt-2'
							)}>
								{description}
							</p>
						)}
					</div>
				</div>
			)}
			<div className={cn(isSettings ? 'flex flex-col' : 'flex flex-col gap-4')}>{children}</div>
		</div>
	)
}

export const Form = forwardRef<HTMLFormElement, RouterFormProps>(
	({ className, children, ...props }, ref) => {
		return (
			<RouterForm
				ref={ref}
				className={cn('flex flex-col gap-8', className)}
				{...props}
			>
				{children}
			</RouterForm>
		)
	}
)
Form.displayName = 'Form'
