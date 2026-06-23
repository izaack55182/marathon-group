import { useRef, useId, type ElementRef } from 'react'
import { unstable_useControl as useControl, type FieldMetadata } from '@conform-to/react'
import { cn } from '@/utils/misc'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/select'
import { Field, FieldError } from './field'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function SelectField({
	meta,
	options,
	labelProps,
	placeholder,
	className,
	triggerClassName,
	contentClassName,
	variant,
	disabled
}: {
	meta: FieldMetadata<any, any, any> | undefined
	options: { id: string | number; label: string; shortLabel?: string; icon?: string }[]
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
	placeholder?: string
	className?: string
	triggerClassName?: string
	contentClassName?: string
	variant?: 'settings' | 'default'
	disabled?: boolean
}) {
	const triggerRef = useRef<ElementRef<typeof SelectTrigger>>(null)
	const fallbackId = useId()

	if (!meta) return null

	const control = useControl(meta as any)
	const id = meta.id ?? fallbackId

	const selectedOption = options.find(o => String(o.id) === String(control.value))

	return (
		<Field meta={meta} labelProps={labelProps} className={className} variant={variant}>
			{/* Native hidden select for form submission */}
			<select
				name={meta.name}
				defaultValue={(meta.initialValue as any) ?? ''}
				className="sr-only"
				ref={control.register}
				aria-hidden
				tabIndex={-1}
				onFocus={() => {
					triggerRef.current?.focus()
				}}
			>
				<option value="" />
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.label}
					</option>
				))}
			</select>

			<Select
				value={(control.value as any) ?? ''}
				onValueChange={control.change as any}
				onOpenChange={(open) => {
					if (!open) {
						control.blur()
					}
				}}
				disabled={disabled}
			>
				<SelectTrigger
					ref={triggerRef}
					className={cn(
						triggerClassName
					)}
				>
					<SelectValue placeholder={placeholder ?? 'Seleccionar...'}>
						{selectedOption ? (
							<div className="flex items-center gap-2">
								{selectedOption.icon && (
									<Avatar className="size-7 border-none bg-transparent">
										<AvatarImage src={selectedOption.icon} className="object-contain" />
										<AvatarFallback className="bg-transparent text-[10px]">
											{selectedOption.label.substring(0, 2)}
										</AvatarFallback>
									</Avatar>
								)}
								<span>{selectedOption.shortLabel ?? selectedOption.label}</span>
							</div>
						) : null}
					</SelectValue>
				</SelectTrigger>
				<SelectContent className={cn('max-h-60', contentClassName)}>
					<SelectGroup>
						{options.map((option) => (
							<SelectItem key={option.id} value={String(option.id)}>
								<div className="flex items-center gap-3 py-1">
									{option.icon && (
										<Avatar className="size-7 border-none bg-transparent">
											<AvatarImage src={option.icon} className="object-contain" />
											<AvatarFallback className="bg-transparent text-[10px]">
												{option.label.substring(0, 2)}
											</AvatarFallback>
										</Avatar>
									)}
									<span className="font-medium">{option.label}</span>
								</div>
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<FieldError errors={meta.errors} id={meta.errorId} />
		</Field>
	)
}
