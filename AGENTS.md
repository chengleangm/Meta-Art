# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 14 e-commerce app using the App Router. Route files live in `app/`, with one folder per page or route segment such as `app/shop/page.tsx`, `app/shop/[slug]/page.tsx`, and `app/cart/page.tsx`. Shared UI components live in `components/`. Cross-page React state belongs in `context/`, currently cart and language providers. Product, category, model, filament, translation, and admin data helpers live in `lib/`. Static assets are stored in `public/`, for example `public/images/logo/metaart.png`.

## Build, Test, and Development Commands

Use npm with the committed `package-lock.json`.

- `npm install`: install dependencies.
- `npm run dev`: start the local development server.
- `npm run build`: create a production Next.js build.
- `npm start`: run the production build after `npm run build`.
- `npm run lint`: run Next.js ESLint checks using `next/core-web-vitals`.

## Coding Style & Naming Conventions

Write TypeScript and React function components. Keep page entry points named `page.tsx` and colocate route-specific client components inside the matching route folder, as in `app/shop/[slug]/ProductDetail.tsx`. Use PascalCase for components and context providers, camelCase for functions and variables, and descriptive data module names such as `products.ts` or `categories.ts`.

Prefer the `@/*` import alias configured in `tsconfig.json` for root-relative imports. Keep TypeScript strict-mode clean. Style UI with Tailwind CSS utility classes and reuse theme values from `tailwind.config.ts` where possible, including `lime-accent`, `dark-bg`, and the configured sans font stack.

## Testing Guidelines

No automated test framework is currently configured. For changes, run `npm run lint` and `npm run build` before opening a pull request. If tests are added, place unit tests near the code they cover or under a clear `__tests__/` folder, and use names like `ComponentName.test.tsx` or `moduleName.test.ts`.

## Commit & Pull Request Guidelines

The current history starts with a descriptive initial commit: `Initial commit - Meta Art 3D printing e-commerce (...)`. Continue using concise, imperative or descriptive commit messages that state the user-facing change, for example `Add cart quantity controls` or `Fix bilingual checkout copy`.

Pull requests should include a short summary, linked issue if applicable, screenshots for visible UI changes, and notes on verification commands run. Call out changes to product data, translations, middleware, or checkout behavior because these affect user-facing flows.

## Security & Configuration Tips

Do not commit secrets or local environment files. Keep generated build output such as `.next/` and dependencies such as `node_modules/` out of commits. Review `middleware.ts` carefully when changing routing or access behavior.
