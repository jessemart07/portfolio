# Jesse Codes portfolio

Built with Next.js and Tailwind CSS, deployed with Vercel.

## Local development

Use Node 24 LTS (minimum supported Node version: 22.13). Copy `.env.example` to `.env.local` and set
`NEXT_PUBLIC_WEB_FORMS_API_KEY` to the existing Web3Forms access key. Then run:

```sh
npm ci
npm run dev
```

The contact form submits directly to Web3Forms, as it did before the revamp.
Without a key, it displays an email alternative and disables submission.
Keep the same environment variable configured in Vercel and rebuild after changing it.
Local environment files are ignored by Git and excluded from the source archive.

## Verification and production

```sh
npm test
npm run build
npm start
```

Contact tests use mocked responses and send no email. See
`IMPLEMENTATION_HANDOVER.md` for implementation and verification details.


## Dependency maintenance

The project uses Next.js 16.3.8 and React 19.3.0. `npm run build` runs ESLint
before compiling, so lint failures still prevent a production build.
Build tools are listed under `devDependencies`.

Runtime dependencies pass `npm audit --omit=dev`. The complete audit still
reports seven build-tool findings propagated from the same unpatched `braces`
advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. The glob patterns
used by linting and Tailwind come from this repository, not visitor input.
Recheck this advisory during future dependency updates.

ESLint 9.39.5 is the latest version compatible with the React plugin included
by the current Next.js lint configuration. ESLint 10 is outside that plugin’s
declared peer range; no forced peer resolution is used.
