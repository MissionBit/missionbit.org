export function getOrigin(): string {
  const defaultOrigin = "https://www.missionbit.org";
  if (typeof window !== "undefined") {
    return window.location.origin;
  } else if (typeof process !== "undefined") {
    return process.env.URL?.replace(/\/$/, "") || defaultOrigin;
  }
  return defaultOrigin;
}

export function absoluteUrl(pathOrUrl: string) {
  return pathOrUrl.startsWith("/") ? `${getOrigin()}${pathOrUrl}` : pathOrUrl;
}

export default absoluteUrl;
