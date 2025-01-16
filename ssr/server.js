import express from 'express'
import axios from 'axios'
import ssr from "./ssr.js"

const proxyPort = 9090
const reverseProxy = `http://localhost:${proxyPort}`
const actualWebsite = "http://localhost:5173"

const app = express()

app.get('*', async (req, res) => {
    const targetUrl = actualWebsite + req.url

    try {
        const response = await axios.get(targetUrl, {
            headers: { ...req.headers, host: new URL(reverseProxy).host },
            responseType: 'document'
        })

        res.set(response.headers)
        res.status(response.status)

        if (response.headers.get('content-type').includes('text/html')) {
            res.send(await ssr(response.data))
        } else {
            res.send(response.data)
        }
    } catch(err) {
        res.status(err.status)
    }
})

app.listen(proxyPort, () => {
    console.log(`Reverse proxy server listening on port ${proxyPort}`)
})