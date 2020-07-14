#!/usr/bin/env node
const { createWriteStream, readFileSync } = require("fs");
const { SitemapStream } = require("sitemap");
const sitemap = new SitemapStream({
  hostname: "https://www.missionbit.org",
});

sitemap.pipe(createWriteStream("out_publish/sitemap.xml"));
for (const rule of readFileSync("out_publish/_redirects", {
  encoding: "utf8",
}).split(/\n/)) {
  const match = rule.match(/^(\/\S*)\s+(\/\S*)\s+200$/);
  if (!match) {
    continue;
  }
  const path = match[1];
  if (/^\/(api|_next|laptop|index|404|donate\/.*)(\/|$)/.test(path)) {
    continue;
  }
  const pollDaily = /^\/(programs|events|bridge)?/.test(path);
  sitemap.write({
    url: path,
    changefreq: pollDaily ? "daily" : "weekly",
    priority: pollDaily ? 1.0 : 0.6,
  });
}
sitemap.end();
