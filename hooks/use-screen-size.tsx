"use client";

import { useState, useEffect } from "react";

type ScreenSize = "mobile" | "tablet" | "desktop" | "large";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else if (window.innerWidth < 1536) {
        setScreenSize("desktop");
      } else {
        setScreenSize("large");
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
}
