import { z } from 'zod'

import {
    NameSchema,
    LastNameSchema,
    EmailSchema,
    PhoneSchema,
    PhoneCodeSchema,
} from "@/features/user/schemas"

export const ContactUsSchema = z.object({
    firstName: NameSchema,
    lastName: LastNameSchema,
    email: EmailSchema,
    phoneCode: PhoneCodeSchema.default('52'),
    phone: PhoneSchema,
    message: z.
        string({ required_error: 'El mensaje es requerido' })
        .min(5)
        .max(500)
})