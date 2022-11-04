async function getRewrites() {
  const rewrites = [
    {
      source: "/over-ons", // url that the user visits
      destination: "/about", // the route that is rendered
    },
    {
      source: "/a-propos",
      destination: "/about",
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

  // This doesn't work at all
  serverRuntimeConfig: {
    async rewrites() {
      return getRewrites();
    },
  },
};

module.exports = nextConfig;
