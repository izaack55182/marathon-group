import handle from 'hono-react-router-adapter/cloudflare-pages'
// @ts-ignore - build will be present after react-router build
import * as build from '../build/server'
import server from '../server'
import { getLoadContext } from '../server'

export const onRequest = handle(build, server, {
    getLoadContext: (event: any) => {
        // En Cloudflare Pages, las variables de entorno reales están en event.env
        const c = event.context.hono.context

        // Nos aseguramos de que el env de Cloudflare esté en el contexto de Hono
        c.env = Object.assign({}, c.env, event.env)

        return getLoadContext(c)
    }
})