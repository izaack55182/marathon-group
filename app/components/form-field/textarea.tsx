import { useRef, useState, useId, type ComponentProps, type ComponentPropsWithoutRef, useEffect } from 'react'
import { useFetcher } from 'react-router'
import { type FieldMetadata, getTextareaProps, useField, type FieldName } from '@conform-to/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/misc'
import { Field, FieldError } from './field'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { flushSync } from 'react-dom'

const textareaVariants = cva(
	'flex min-h-[120px] w-full rounded-lg border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all',
	{
		variants: {
			variant: {
				default: 'border-input bg-background focus-visible:ring-primary',
				settings: 'border-border bg-background focus:border-primary min-h-[100px]',
				ghost: 'bg-transparent border-none p-0 shadow-none focus-visible:ring-0 min-h-[40px] resize-none',
				description: 'bg-transparent border-none p-0 shadow-none focus-visible:ring-0 text-[15px] text-muted-foreground/70 placeholder:text-muted-foreground/50 leading-relaxed min-h-[40px] resize-none',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)

/**
 * Atomic Textarea Component following the Conform pattern.
 */
export function TextareaField({
	meta,
	labelProps,
	textareaProps,
	className,
	variant = 'default',
}: {
	meta: FieldMetadata<any, any, any> | undefined
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
	textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
	className?: string
	variant?: VariantProps<typeof textareaVariants>['variant']
}) {
	if (!meta) return null

	return (
		<Field meta={meta} labelProps={labelProps} className={className} variant={variant}>
			<textarea
				{...getTextareaProps(meta)}
				{...(textareaProps as any)}
				className={cn(
					textareaVariants({ variant, className: textareaProps?.className }),
					meta.errors && 'border-destructive'
				)}
			/>
			<FieldError errors={meta.errors} id={meta.errorId} />
		</Field>
	)
}

export function TextareaEditable({
	intent,
	editableId,
	name,
	labelProps,
	textareaProps,
	children,
	inputClassName,
	buttonClassName,
	className,
	buttonLabel,
	action,
}: {
	intent: string
	editableId: string | number
	name: FieldName<any>
	textareaProps: ComponentPropsWithoutRef<typeof Textarea>
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
	children?: React.ReactNode
	className?: string
	inputClassName?: string
	buttonClassName?: string
	buttonLabel?: string
	action?: string
}) {
	const [meta] = useField(name)
	const fetcher = useFetcher({ key: intent })
	const [edit, setEdit] = useState(false)
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const originalValueRef = useRef<string>('')
	const [localValue, setLocalValue] = useState<string | undefined>(undefined)
	const fallbackId = useId()

	// Manejar errores del fetcher localmente
	const fetcherError = fetcher.data && typeof fetcher.data === 'object' && 'error' in fetcher.data
		? [String(fetcher.data.error)]
		: (fetcher.data && typeof fetcher.data === 'object' && 'errors' in (fetcher.data as any)
			? (fetcher.data as any).errors[name]
			: undefined)

	const errors = fetcherError || meta.errors
	const hasError = !!errors?.length

	// Revertir optimistic on server error
	useEffect(() => {
		if (fetcher.data && typeof fetcher.data === 'object' && 'status' in fetcher.data && fetcher.data.status === 'error') {
			setLocalValue(undefined)
		}
	}, [fetcher.data])

	if (!meta) return null

	const isSubmitting = fetcher.state !== 'idle'
	const id = meta.id ?? meta.name ?? fallbackId
	const errorId = errors?.length ? `${id}-error` : undefined

	const displayValue = localValue ?? textareaProps.defaultValue ?? meta.value ?? meta.initialValue

	return (
		<Field meta={meta} labelProps={labelProps} className={cn('w-full', className)}>
			{edit ? (
				<div className="relative w-full">
					<Textarea
						ref={textareaRef}
						{...getTextareaProps(meta)}
						key={String(localValue ?? textareaProps.defaultValue)}
						aria-invalid={errorId ? true : undefined}
						aria-describedby={errorId}
						className={cn('min-h-[100px] resize-none', hasError && "border-destructive", inputClassName)}
						disabled={isSubmitting}
						{...(textareaProps as any)}
						defaultValue={displayValue as any}
						autoFocus
						onFocus={(e) => {
							originalValueRef.current = e.currentTarget.value
						}}
						onKeyDown={(event) => {
							if (event.key === 'Escape') {
								flushSync(() => {
									setEdit(false)
									setLocalValue(undefined)
								})
								buttonRef.current?.focus()
							}
							if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
								event.currentTarget.blur()
							}
						}}
						onBlur={(event) => {
							const newValue = event.currentTarget.value
							if (newValue !== originalValueRef.current) {
								setLocalValue(newValue) // Update local state immediately
								const formData = new FormData()
								formData.append(meta.name, newValue)
								formData.append('id', String(editableId))
								formData.append('intent', intent)
								fetcher.submit(formData, { method: 'POST', action })
							}
							flushSync(() => {
								setEdit(false)
							})
						}}
					/>
					{children}
				</div>
			) : (
				<Button
					variant="input"
					size="input"
					type="button"
					ref={buttonRef}
					disabled={isSubmitting}
					onClick={(event) => {
						event.stopPropagation()
						flushSync(() => {
							setEdit(true)
						})
						textareaRef.current?.focus()
					}}
					aria-label={buttonLabel}
					className={cn(
						'w-full justify-start h-auto min-h-[40px]',
						buttonClassName,
						isSubmitting && 'opacity-60 cursor-wait',
						hasError && 'border-destructive/30 bg-destructive/5'
					)}
				>
					<div className="flex flex-col text-left w-full">
						<div className="flex items-start justify-between w-full">
							<div className="flex-1">
								{displayValue ? (
									<span className={cn("whitespace-pre-wrap", hasError && "text-destructive")}>{displayValue as any}</span>
								) : !errorId ? (
									<span className="text-muted-foreground">{textareaProps.placeholder ?? 'Agregar...'}</span>
								) : (
									<span className="text-destructive opacity-50">Campo requerido</span>
								)}
							</div>
							{hasError && <Icon name="circle-alert" className="size-3 text-destructive mt-1 ml-2" />}
						</div>
						{children}
					</div>
				</Button>
			)}
			<FieldError id={errorId} errors={errors} />
		</Field>
	)
}
