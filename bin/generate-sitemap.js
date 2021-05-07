#!/usr/bin/env node
const { createWriteStream, readFileSync } = require("fs");
const { join } = require("path");
const { SitemapStream } = require("sitemap");

const sitemap = new SitemapStream({
  hostname: "https://www.missionbit.org",
});
const NEXT_DIST_DIR = ".next";
const readJSONSync = (fn) => JSON.parse(readFileSync(fn, { encoding: "utf8" }));
const ssrAndHtmlPages = readJSONSync(
  join(NEXT_DIST_DIR, "serverless", "pages-manifest.json")
);

const isSitemapPath = (path) =>
  !/^\/(api|_next|_error|laptop|index|404|donate\/.*)(\/|$)/.test(path);

const sitemapEntry = (path) =>
  /^\/(programs|events|gala)?$/.test(path)
    ? { url: path, changefreq: "daily", priority: 1.0 }
    : { url: path, changefreq: "weekly", priority: 0.6 };

sitemap.pipe(createWriteStream(join(NEXT_DIST_DIR, "static", "sitemap.xml")));
for (const path of Object.keys(ssrAndHtmlPages)) {
  if (isSitemapPath(path)) {
    sitemap.write(sitemapEntry(path));
  }
}
sitemap.end();
