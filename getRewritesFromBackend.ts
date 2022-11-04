export const getRewritesFromBackend = async () => {
  // wait for 50ms to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 50));

  return rewrites;
};

const rewrites = {
  // pathname: {
  //   rewriteUrl: "rewriteUrl"
  // },
  "/a-propos": /* url that the user visits */ {
    locale: "fr",
    rewriteUrl: "/about", // the route that is rendered
  },
  "/over-ons": {
    locale: "nl",
    rewriteUrl: "/about",
  },
  "/about": {
    locale: "en",
    rewriteUrl: "/about",
  },
  "/offres": {
    locale: "fr",
    rewriteUrl: "/services",
  },
  "/diensten": {
    locale: "nl",
    rewriteUrl: "/services",
  },
  "/services": {
    locale: "en",
    rewriteUrl: "/services",
  },
  "/offres/developement": {
    locale: "fr",
    rewriteUrl: "/services/development",
  },
  "/diensten/ontwikkeling": {
    locale: "nl",
    rewriteUrl: "/services/development",
  },
  "/services/development": {
    locale: "en",
    rewriteUrl: "/services/development",
  },
  "/offres/developement/app": {
    locale: "fr",
    rewriteUrl: "/services/development/app",
  },
  "/diensten/ontwikkeling/app": {
    locale: "nl",
    rewriteUrl: "/services/development/app",
  },
  "/services/development/app": {
    locale: "en",
    rewriteUrl: "/services/development/app",
  },
  "/offres/developement/site-web": {
    locale: "fr",
    rewriteUrl: "/services/development/website",
  },
  "/diensten/ontwikkeling/website": {
    locale: "nl",
    rewriteUrl: "/services/development/website",
  },
  "/services/development/website": {
    locale: "en",
    rewriteUrl: "/services/development/website",
  },
};
