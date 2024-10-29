import * as React from "react";

export function useMediaQuery(breakPoint: string) {
  const [matchMediaQuery, setMatchMediaQuery] = React.useState<
    boolean | undefined
  >(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(breakPoint);
    const onChange = () => {
      setMatchMediaQuery(window.matchMedia(breakPoint).matches);
    };
    mql.addEventListener("change", onChange);
    setMatchMediaQuery(window.matchMedia(breakPoint).matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!matchMediaQuery;
}
