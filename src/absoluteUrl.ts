export function getOrigin(origin?: string): string {
  if (origin !== undefined) {
    return origin;
  }
  const defaultOrigin =
    process.env.NODE_ENV === "production"
      ? "https://www.missionbit.org"
      : "http://localhost:3000";
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.URL?.replace(/\/$/, "") ?? defaultOrigin;
}

export function absoluteUrl(pathOrUrl: string, origin?: string): string {
  return pathOrUrl.startsWith("/")
    ? `${getOrigin(origin)}${pathOrUrl}`
    : pathOrUrl;
}

export default absoluteUrl;
