import { parseWithZod } from '@conform-to/zod'
import type { ActionFunctionArgs, MetaFunction } from 'react-router'
import { data } from 'react-router'
import { Container } from '@/components/ui/container'
import { getMeta } from '@/utils/misc'
import { ContactForm } from '../components/contact-us-form'
import { ContactInfoCards } from '../components/contact-info-cards'
import { ContactUsSchema } from '../schemas'

export async function loader() {
    return {
        title: 'Contacto — Marathon Group',
        description: 'Ponte en contacto con Marathon Group. Dirección, horarios, correo y teléfono.',
    }
}

export async function action({ request, context }: ActionFunctionArgs) {
    const formData = await request.formData()
    const submission = parseWithZod(formData, { schema: ContactUsSchema })
    if (submission.status !== 'success') {
        return data(
            { result: submission.reply() },
            { status: submission.status === 'error' ? 400 : 200 }
        )
    }

    const { firstName, lastName, email, phoneCode, phone, message } = submission.value
    //const env = context.env
    //const response = await sendEmail({
    //     to: 'contacto@marathongroup.mx',
    //     subject: `Nuevo mensaje de contacto de ${firstName} ${lastName}`,
    //     text: `De: ${firstName} ${lastName}\nCorreo: ${email}\nTeléfono: +${phoneCode} ${phone}\nMensaje: ${message}`,
    // })
    //return dataWithSuccess('Mensaje enviado correctamente', request)
}

export default function ContactUs() {
    return (
        <Container size="default" padding="lg">
            <div className="flex flex-col lg:flex-row gap-3 items-start justify-center">
                {/* Left: Form */}
                <div className="w-full max-w-2xl">
                    <ContactForm />
                </div>

                {/* Right: Info Cards */}
                <div className="w-full lg:w-68 xl:w-72 shrink-0">
                    <ContactInfoCards />
                </div>
            </div>
        </Container>
    )
}

export const meta: MetaFunction<typeof loader> = ({ data, matches, location }: any) => {
    return getMeta({
        title: data?.title,
        description: data?.description,
        matches,
        pathname: location.pathname,
    })
}
