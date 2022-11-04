# Next.js Internationalized Routing Middleware Demo

See the [NextJS internationalized routing discussion](https://github.com/vercel/next.js/discussions/18485#discussioncomment-3731075) on GitHub.

Demo deployed on Vercel: https://next-js-internationalized-routing-middleware-demo.vercel.app/

This is an attempt to have the same functionality as NuxtJS i18n configs as discussed in the discussion above.

## Why?

Next.js is great, but the best way to approach full URL i18n was not clear. I'm not sure if the approach of this demo is, but it certainly seems better than what I previously attempted using [Optional Catch-All Routes](https://github.com/EddyVinck/nextjs-translated-paths-demo).

## Working solution: using middleware + rewrites

Each page template has a separate file.

In `/middleware.ts` we dynamically get a rewrites configuration from a (simulated) backend. If the requested pathname is in the rewrites, we pick what page template to use by rewriting to that path.

In the page template files, you would need to call to your backend or CMS to get the relevant data for that page.

Relevant Next.js documentation:

- [Middleware](https://nextjs.org/docs/advanced-features/middleware)
- [Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites)

## What's not in this demo

- Dynamic routes
- Language switch
- `<link rel="alternate" hreflang="lang_code" href="url_of_page" />` in the `<head>` tag
- Any other i18n markup you might need

## Ideas that have been tried

### Works

- ✅ Middleware + rewrites
- ✅ [A single Optional Catch-All Route page than handles everything](https://github.com/EddyVinck/nextjs-translated-paths-demo)

### Didn't work

- ❌ `serverRuntimeConfig` rewrites don't work

## NuxtJS example

This is the example configuration of NuxtJS that was attempted to be replicated in this demo.

In this demo, the structure is not exactly the same, but the idea is the same: you define what URL pathnames correspond to what page template.

You can find the configuration in `getRewritesFromBackend.ts`.

```js
// nuxt.config.js
i18n: {
  parsePages: false,
  pages: {
    about: {
      en: '/about',
      fr: '/a-propos',
    },
    'services/index': {
      en: '/services',
      fr: '/offres',
    },
    'services/development/index': {
      en: '/services/development',
      fr: '/offres/developement',
    },
    'services/development/app/index': {
      en: '/services/development/app',
      fr: '/offres/developement/app',
    },
    'services/development/website/index': {
      en: '/services/development/website',
      fr: '/offres/developement/site-web',
    },
    'services/coaching/index': {
      en: '/services/coaching',
      fr: '/offres/formation',
    }
  }
}
```
