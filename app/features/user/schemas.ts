import { z } from 'zod'

/**
 * Primitive schemas for User entity fields.
 * Use these to compose larger schemas for forms, API validations, etc.
 */

export const UsernameSchema = z
	.string({ required_error: 'El nombre de usuario es requerido' })
	.min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
	.max(20, 'El nombre de usuario no puede exceder los 20 caracteres')
	.regex(/^[a-zA-Z0-9_]+$/, 'El nombre de usuario solo puede contener letras, números y guiones bajos')
	.transform((value) => value.toLowerCase())


export const NameSchema = z
	.string({ required_error: 'El nombre es requerido' })
	.min(2, 'El nombre debe tener al menos 2 caracteres')
	.max(40, 'El nombre no puede exceder los 40 caracteres')
	.trim()


export const FirstNameSchema = z
	.string({ required_error: 'El nombre es requerido' })
	.min(2, 'El nombre debe tener al menos 2 caracteres')
	.max(40, 'El nombre no puede exceder los 40 caracteres')
	.trim()

export const LastNameSchema = z
	.string({ required_error: 'El apellido es requerido' })
	.min(2, 'El apellido debe tener al menos 2 caracteres')
	.max(40, 'El apellido no puede exceder los 40 caracteres')
	.trim()

export const EmailSchema = z
	.string({ required_error: 'El correo electrónico es requerido' })
	.email('El formato del correo electrónico no es válido')
	.min(5, 'El correo electrónico es demasiado corto')
	.max(100, 'El correo electrónico es demasiado largo')
	.transform((value) => value.toLowerCase().trim())

export const PasswordSchema = z
	.string({ required_error: 'La contraseña es requerida' })
	.min(8, 'La contraseña debe tener al menos 8 caracteres')
	.max(100, 'La contraseña es demasiado larga')

export const RoleSchema = z.enum(['admin', 'user', 'manager'], {
	required_error: 'El rol es requerido',
	invalid_type_error: 'Rol no válido',
})

export const AvatarSchema = z
	.string()
	.url('La URL del avatar no es válida')
	.optional()
	.or(z.literal(''))

export const BioSchema = z
	.string()
	.max(160, 'La biografía no puede exceder los 160 caracteres')
	.optional()

export const PhoneSchema = z
	.string({ required_error: 'El número de teléfono es requerido' })
	.min(7, 'El número de teléfono es demasiado corto')
	.max(15, 'El número de teléfono no puede exceder los 15 caracteres')
	.regex(/^[+]?[0-9\s-]+$/, 'El formato del número de teléfono no es válido')
	.trim()

export const PhoneCodeSchema = z
	.string()
	.max(6, 'La extensión no puede exceder los 6 caracteres')
	.regex(/^[0-9]+$/, 'La extensión solo puede contener números')
	.optional()
	.or(z.literal(''))

