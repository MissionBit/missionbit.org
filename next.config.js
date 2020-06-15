const { createWriteStream } = require("fs");
const { join } = require("path");
const { SitemapStream } = require("sitemap");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { PHASE_EXPORT } = require("next/constants");

function withSitemap(nextConfig = {}) {
  return {
    ...nextConfig,
    async exportPathMap(defaultPathMap, options) {
      if (typeof nextConfig.exportPathMap === "function") {
        defaultPathMap = await nextConfig.exportPathMap(
          defaultPathMap,
          options
        );
      }
      if (!options.dev) {
        const sitemap = new SitemapStream({
          hostname: "https://www.missionbit.org",
        });
        sitemap.pipe(createWriteStream(join(options.outDir, "sitemap.xml")));
        Object.keys(defaultPathMap).forEach((path) => {
          if (/^\/(laptop|404|index)(\/?|$)/.test(path)) {
            return;
          }
          const programsEventsOrIndex = /^\/(programs|events)?$/.test(path);
          sitemap.write({
            url: path,
            changefreq: programsEventsOrIndex ? "daily" : "weekly",
            priority: programsEventsOrIndex ? 1.0 : 0.6,
          });
        });
        sitemap.end();
      }
      return defaultPathMap;
    },
  };
}

const slashRedirects = [
  "about",
  "gala",
  "gala/sponsorship",
  "programs",
  "events",
  "get-involved",
  "laptop",
  "laptop/windows",
  "laptop/mac",
].map((path) => ({
  source: `/${path}/`,
  statusCode: 301,
  destination: `/${path}`,
}));

const legacyRedirects = [
  { source: "/about-us/", destination: "/about" },
  { source: "/workshops/", destination: "/programs" },
  { source: "/careerprep/", destination: "/programs" },
  { source: "/volunteer/", destination: "/get-involved" },
  { source: "/demo-day/", destination: "/events" },
  { source: "/studentProjects/", destination: "/programs" },
  { source: "/showcase/", destination: "/programs" },
  { source: "/30k30days/", destination: "/get-involved" },
  { source: "/employment/", destination: "/programs" },
  { source: "/exposure/", destination: "/programs" },
  { source: "/hackathon/", destination: "/programs" },
  { source: "/jobs/instructor.html", destination: "/about#jobs" },
  { source: "/jobs/ta.html", destination: "/about#jobs" },
  { source: "/laptop/mac.html", destination: "/laptop/mac" },
  {
    source: "/laptop/mac",
    statusCode: 302,
    destination:
      "https://docs.google.com/document/d/e/2PACX-1vRamxceeyg7TPuFtbJb6xfrjKfP9Q4C8Vk192C3hAVmFqbejbucv4ID_7S9i3jgu8o8O4odgEsIXV0i/pub",
  },
  // TODO:
  // * /teacher-resources
].map(({ source, destination, statusCode = 301 }) => ({
  source,
  destination,
  statusCode,
}));

const STRIPE_PK_NAME =
  process.env.NODE_ENV === "production" ? "STRIPE_PK_LIVE" : "STRIPE_PK_TEST";

const nextConfig = {
  target: "serverless",
  experimental: {
    redirects() {
      return [...slashRedirects, ...legacyRedirects];
    },
  },
  env: {
    STRIPE_PK: process.env[STRIPE_PK_NAME],
    STRIPE_PK_NAME,
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer,
    withSourceMaps,
    [
      optimizedImages,
      {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: "images",
        imagesName: "[name]-[hash].[ext]",
        handleImages: ["jpeg", "png", "svg", "webp", "gif"],
        optimizeImages: true,
        optimizeImagesInDev: false,
        responsive: {},
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        // Disabled gifsicle, does not compile in zeit environment and we do not use gifs
        gifsicle: false,
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: "default",
          quality: 75,
        },
      },
    ],
    [withSitemap, {}, [PHASE_EXPORT]],
  ],
  nextConfig
);
