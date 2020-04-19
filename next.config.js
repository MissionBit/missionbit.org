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

module.exports = nextConfig;
