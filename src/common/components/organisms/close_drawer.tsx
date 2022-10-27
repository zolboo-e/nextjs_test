"use client";

//
import { useCallback, useEffect, useState } from "react";

//
import { useDrawer } from "common/zustand";

export const CloseDrawer: React.FC = () => {
  const closeDrawer = useDrawer((state) => state.close);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => {
    if (windowWidth < 640 && window.innerWidth >= 640) {
      closeDrawer();
    }
    setWindowWidth(window.innerWidth);
  }, [closeDrawer, windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return null;
};
