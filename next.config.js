const { readFileSync } = require("fs");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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

const nextConfig = {
  target: "serverless",
  redirects() {
    return netlifyRedirects;
  },
  env: {
    STRIPE_KEY_POSTFIX,
    STRIPE_PK: process.env[`STRIPE_PK${STRIPE_KEY_POSTFIX}`],
  },
  future: {
    webpack5: true,
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
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
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
  ],
  nextConfig
);
