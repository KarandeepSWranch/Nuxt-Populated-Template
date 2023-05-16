# Example-App

This is a [sidebase merino](https://sidebase.io/) app implementation. This project uses the following technologies for a great developer- and user-experience:

-   [TypeScript](https://www.typescriptlang.org/)
-   [Nuxt 3](https://nuxt.com)
-   [Prisma ORM](https://sidebase.io/sidebase/components/prisma)
-   [Nuxt-Auth](https://sidebase.io/nuxt-auth/getting-started)
-   [tRPC 10](https://sidebase.io/sidebase/components/trpc)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [GitHub Actions based CI](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
-   [Swagger Typescript API Schema Generation](https://www.npmjs.com/package/swagger-typescript-api)
-   [Vuetify](https://vuetifyjs.com/en/)
-   [Pinia](https://pinia.vuejs.org/introduction.html)
-   [Lodash](https://lodash.com/)
-   [Nuxt SEO Kit](https://github.com/harlan-zw/nuxt-seo-kit)
-   [Unplugin Icons](https://github.com/antfu/unplugin-icons)
-   [Zod](https://github.com/colinhacks/zod)

## How to get going?

This is a straight-forward setup with minimal templating and scaffolding. You can view more information on the installed modules above inorder to configure them to your liking.

Some tasks you should probably do in the beginning are:

-   [ ] replace this generic README with a more specific one
-   [ ] install the following extensions (\*_ = important, _ = recommended):
    -   [ ] [\*\*Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    -   [ ] [\*\*Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    -   [ ] [\*\*Typescript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
    -   [ ] [\*Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    -   [ ] [\*Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
    -   [ ] [\*Pretty Typescript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
    -   [ ] [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    -   [ ] [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
-   [ ] enable [Volar takeover mode](https://nuxt.com/docs/getting-started/installation#prerequisites) to ensure a smooth editor setup
-   [ ] [install Nuxt 3 devtools](https://github.com/nuxt/devtools#installation) if you want to use them
-   [ ] Prisma: Edit your `prisma/prisma.schema` to your liking
-   [ ] Prisma: Run `npx prisma db push` to sync the schema to your database & generate the Prisma Client
-   [ ] Auth: Configure your auth providers to the [NuxtAuthHandler](./server/api/auth/[...].ts)
-   [ ] Auth, optional: Enable global protection by setting `enableGlobalAppMiddleware: true` in [your nuxt.config.ts](./nuxt.config.ts). Delete the local middleware in the [protected.vue](./pages/protected.vue) page if you do

### Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

### Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```
