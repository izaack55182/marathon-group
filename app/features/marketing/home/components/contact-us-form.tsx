import { useActionData, Form, Link, useNavigation } from 'react-router'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'

import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { FormContent, FormRow, FormFooter } from '@/components/ui/form'
import { SelectField } from '@/components/form-field/select'
import { ErrorList } from '@/components/form-field/error-list'
import { InputField } from '@/components/form-field/input'
import { TextareaField } from "@/components/form-field/textarea"
import { PHONE_CODES } from '@/constants/phone-codes'

import { ContactUsSchema } from '../schemas'

export function ContactForm() {
    const lastResult = useActionData() as any
    const navigation = useNavigation()

    // En React Router, el estado 'submitting' se obtiene del objeto navigation
    const isSubmitting = navigation.state === 'submitting'

    const [form, fields] = useForm({
        lastResult: lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: ContactUsSchema })
        },
        defaultValue: {
            phoneCode: '52',
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    })
    return (
        <div className="w-full relative group">
            {/* Subtle background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10 group-hover:from-primary/15 transition-all duration-700" />

            <div className="p-8 sm:p-10 bg-background/60 backdrop-blur-2xl border border-border/50 shadow-2xl shadow-primary/5 rounded-3xl relative overflow-hidden ring-1 ring-white/5">
                {/* Decorative top gradient line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="mb-10 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
                        <Icon name="calendar" className="size-3.5" />
                        <span>Contacto</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                        ¿Cómo podemos ayudarte?
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                        Déjanos tus datos y nuestro equipo se pondrá en contacto contigo lo antes posible.
                    </p>
                </div>

                <Form method="POST" id={form.id} onSubmit={form.onSubmit} noValidate>
                    <FormContent className="p-0 bg-transparent shadow-none border-none gap-6">

                        <FormRow className="gap-6">
                            <InputField
                                labelProps={{ children: 'Nombre' }}
                                meta={fields.firstName}
                                inputProps={{ placeholder: 'Ej. Juan', autoComplete: 'given-name' }}
                            />
                            <InputField
                                labelProps={{ children: 'Apellido' }}
                                meta={fields.lastName}
                                inputProps={{ placeholder: 'Ej. Pérez', autoComplete: 'family-name' }}
                            />
                        </FormRow>

                        <InputField
                            labelProps={{ children: 'Email' }}
                            meta={fields.email}
                            type="email"
                            inputProps={{ placeholder: 'juan@gmail.com', autoComplete: 'email' }}
                        />

                        <FormRow className="gap-6">
                            <SelectField
                                labelProps={{ children: 'Código' }}
                                meta={fields.phoneCode}
                                placeholder="+52"
                                options={PHONE_CODES}
                                className="md:max-w-[200px]"
                            />
                            <InputField
                                labelProps={{ children: 'Teléfono' }}
                                meta={fields.phone}
                                type="tel"
                                inputProps={{ placeholder: '(123) 456-7891' }}
                            />
                        </FormRow>

                        <TextareaField
                            labelProps={{ children: '¿En qué te podemos ayudar?' }}
                            meta={fields.message}
                            textareaProps={{ placeholder: 'Cuéntanos un poco sobre tu proyecto o dudas...', className: 'min-h-[120px] resize-none' }}
                        />

                        <FormFooter className="pt-4 flex-col items-center gap-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-14 rounded-xl text-base font-semibold tracking-wide bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 active:scale-[0.98] group/btn overflow-hidden relative"
                                disabled={isSubmitting}
                            >
                                {/* Button hover effect */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />

                                <span className="relative z-10 flex items-center justify-center">
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                    <Icon
                                        name={isSubmitting ? "loader" : "arrow-right"}
                                        className={isSubmitting ? "ml-2 size-5 animate-spin" : "ml-2 size-5 group-hover/btn:translate-x-1 transition-transform"}
                                    />
                                </span>
                            </Button>

                            <p className="text-[12px] text-muted-foreground text-center leading-relaxed max-w-sm mt-2">
                                Al hacer clic en enviar, confirmas que has leído y aceptas nuestro{' '}
                                <Link to="/privacy-policy" className="text-foreground font-semibold hover:underline">
                                    Aviso de Privacidad
                                </Link>{' '}
                                y nuestros{' '}
                                <Link to="/terms-of-service" className="text-foreground font-semibold hover:underline">
                                    Términos de Servicio
                                </Link>.
                            </p>
                        </FormFooter>

                        <ErrorList errors={form.errors} id={form.errorId} />

                    </FormContent>
                </Form>
            </div>
        </div>
    )
}