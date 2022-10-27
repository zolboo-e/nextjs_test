"use client";
import { useCallback, useEffect, useState } from "react";
import create from "zustand";

interface IDrawerState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
export const useDrawer = create<IDrawerState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const CloseDrawerOnMobile: React.FCC = ({ children }) => {
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

  return <>{children}</>;
};
