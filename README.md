## Browser Extension Starter Template
This project is a boilerplate for building new chrome extensions. It is initialized with:

* [WXT](https://wxt.dev/) (browser extension framework)
* [React](https://react.dev/)
* [TailwindCSS](https://tailwindcss.com/)
* [shadcn](https://ui.shadcn.com/) (component design system)
* [trpc-chrome](https://github.com/jlalmes/trpc-chrome) (typesafe messaging interface)


If you're looking to initialize a chrome extension using Plasmo instead, checkout the `plasmo` branch.

## Adding new components
New components can be added via the shadcn cli like so:
```
pnpm dlx shadcn@latest add tooltip 
```

## Getting Started

First, run the development server:

```bash
pnpm i
pnpm dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `./output/chrome-mv3-dev`.

For further guidance, [visit our Documentation](https://docs.wxt.dev/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```
