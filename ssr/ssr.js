import createVueApp from '@/app.js'
import * as cheerio from 'cheerio'
import { renderToString } from 'vue/server-renderer'

export default async function ssr(html) {
    const $ = cheerio.load(html)
    const appContainer = $('#app')

    // create app
    const template = appContainer.html()
    const app = createVueApp(template)

    // render it
    const vueRender = await renderToString(app)

    // replace html of container with rendered html
    appContainer.html(vueRender)

    // pass the unrendered html to js
    const injectedTemplate = JSON.stringify(template)
    $('head').append(`
        <script>
            window.SSR_TEMPLATE = ${injectedTemplate}
        </script>
    `)

    return $.html()
}