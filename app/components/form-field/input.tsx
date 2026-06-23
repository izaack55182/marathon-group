import { type FieldMetadata, getInputProps } from '@conform-to/react'
import { cn } from '@/utils/misc'
import { Field, FieldError } from './field'

/**
 * Atomic Input Component following the Conform pattern.
 */
export function InputField({
	meta,
	labelProps,
	type = 'text',
	inputProps,
	className,
}: {
	meta: FieldMetadata<string | number | undefined | null>
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
	type?: "text" | "number" | "email" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "checkbox" | "radio" | "range" | "file" | "hidden" | "color"
	inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>
	className?: string
}) {
	return (
		<Field meta={meta} labelProps={labelProps} className={className}>
			<input
				{...getInputProps(meta, { type, ariaAttributes: true })}
				{...inputProps}
				className={cn(
					'flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
					inputProps?.className
				)}
			/>
			<FieldError errors={meta.errors} id={meta.errorId} />
		</Field>
	)
}
