import { createContext, useContext, useState, useEffect } from "react";

export const BuildTimeContext = createContext<undefined | number>(undefined);

export function useBuildTime(): number {
  const buildTime = useContext(BuildTimeContext);
  if (buildTime === undefined) {
    throw new Error("Missing expected BuildTimeContext.Provider from Layout");
  }
  return buildTime;
}

export function useRenderTime(): number {
  const buildTime = useBuildTime();
  const [renderTime, setRenderTime] = useState(buildTime);
  useEffect(() => setRenderTime(Date.now()), [buildTime]);
  return renderTime;
}
