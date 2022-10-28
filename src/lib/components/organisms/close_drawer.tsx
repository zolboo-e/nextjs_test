"use client";

//
import { useCallback, useEffect, useState } from "react";

//
import { drawerId } from "lib/components";

export const CloseDrawer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => {
    if (windowWidth < 640 && window.innerWidth >= 640) {
      const element = document.getElementById(drawerId);
      if (element instanceof HTMLInputElement) {
        element.checked = false;
      }
    }
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return null;
};
