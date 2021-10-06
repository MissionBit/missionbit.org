const { readFileSync } = require("fs");
const withPlugins = require("next-compose-plugins");
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
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
