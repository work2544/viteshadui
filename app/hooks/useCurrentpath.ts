import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export const useCurrentpath = (defaultpath: string) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(
    location.pathname === defaultpath ? defaultpath : location.pathname
  );
  useEffect(() => {
    console.log(currentPath);
    if (location) {
      if (currentPath !== decodeURIComponent(location.hash.split("#")[1])) {
        setCurrentPath(decodeURIComponent(location.hash.split("#")[1]));
      }
    }
  }, [location, currentPath]);
  return { location, currentPath };
};
