import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useRouteChange(onRouteChange) {
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      // Route is changing
      onRouteChange(prevLocationRef.current, location.pathname);
      prevLocationRef.current = location.pathname;
    }
  }, [location.pathname, onRouteChange]);
}
