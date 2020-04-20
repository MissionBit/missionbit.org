const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const slashRedirects = [
  "about",
  "gala",
  "gala/sponsorship",
  "programs",
  "events",
  "get-involved",
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
].map(({ source, destination }) => ({
  source,
  destination,
  statusCode: 301,
}));

const nextConfig = {
  target: "serverless",
  experimental: {
    redirects() {
      return [...slashRedirects, ...legacyRedirects];
    },
  },
};

module.exports = withPlugins(
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
  nextConfig
);
