# Vue SSR Postprocessing

A proof-of-concept for adding **Server-Side Rendering (SSR)** to a classical CMS without changing the CMS itself. A reverse proxy sits in front of the CMS, receives the generated HTML, runs a Vue SSR transformation on the page, and returns the transformed document to the browser. The CMS keeps producing the same HTML; the proxy post-processes it before it reaches the user.

For a detailed explanation of the idea, the architecture, and how the transformation works, see the blog post:

**[Adding Server-Side Rendering to a Classical CMS](https://gweiermann.de/blog/vue-ssr-postprocessing-cms/)**

---

## Running the project

Two processes need to run:

1. **Vue dev server** (Vite) — serves the app in development and is the “backend” the proxy talks to:
   ```sh
   npm run dev
   ```

2. **SSR reverse proxy** — in a **second terminal**, start the proxy that fetches from the dev server and applies SSR:
   ```sh
   npm run ssr-server
   ```

Use the URL shown by the SSR server (e.g. `http://localhost:3000`) to view the post-processed, server-rendered page.

---

## Project setup

```sh
npm install
```