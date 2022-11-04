async function getRewrites() {
  const rewrites = [
    {
      source: "/nl/over-ons", // url that the user visits
      destination: "/about", // the route that is rendered
      locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
    },
    {
      source: "/fr/a-propos",
      destination: "/about",
      locale: false,
    },
    {
      source: "/about",
      destination: "/about",
    },
  ];
  return rewrites;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fr", "nl"],
    defaultLocale: "en",
  },
  // This works, but it can't be changed during runtime
  async rewrites() {
    return getRewrites();
  },

  // This doesn't work at all, you get a 404
  serverRuntimeConfig: {
    async rewrites() {
      return getRewrites();
    },
  },
};

module.exports = nextConfig;
