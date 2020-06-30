const { createWriteStream, readFileSync } = require("fs");
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

const SLASH_REDIRECT = /^(\/\S+)\s+(\S+)(?:\s+(\d+)!?)?$/;
const netlifyRedirects = [];
readFileSync("_redirects", "utf-8")
  .split(/\r?\n/)
  .forEach((line) => {
    const match = line.match(SLASH_REDIRECT);
    if (match) {
      netlifyRedirects.push({
        source: match[1],
        destination: match[2],
        statusCode: +(match[3] || "301"),
      });
    }
  });

const STRIPE_KEY_POSTFIX =
  process.env.STRIPE_KEY_POSTFIX ||
  (process.env.NODE_ENV === "production" && process.env.CONTEXT === "production"
    ? "_LIVE"
    : "_TEST");

console.log(`NODE_ENV=${process.env.NODE_ENV}`);
console.log(`CONTEXT=${process.env.CONTEXT || ""}`);
console.log(`STRIPE_KEY_POSTFIX=${STRIPE_KEY_POSTFIX}`);

const nextConfig = {
  target: "serverless",
  experimental: {
    redirects() {
      return netlifyRedirects;
    },
  },
  env: {
    STRIPE_KEY_POSTFIX,
    STRIPE_PK: process.env[`STRIPE_PK${STRIPE_KEY_POSTFIX}`],
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
