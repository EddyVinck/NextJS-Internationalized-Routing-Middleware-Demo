# Next.js Runtime Config i18n Rewrites

https://github.com/vercel/next.js/discussions/18485#discussioncomment-3731075

This is an attempt to have the same functionality as NuxtJS i18n configs, but with NextJS `serverRuntimeConfig` rewrites instead.

## Ideas

### Need to try

❓ Middleware

### Don't work

❌ `serverRuntimeConfig` rewrites don't work

## NuxtJS example

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
