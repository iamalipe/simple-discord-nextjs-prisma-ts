"use client";

import { create } from "zustand";

export interface ThemeStore {
  currentTheme: string;
  onChange: (newTheme: string) => void;
}

export const useTheme = create<ThemeStore>((set) => ({
  currentTheme: "dark",
  onChange: (newTheme) => {
    localStorage.setItem("useTheme", newTheme);
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    htmlElement.setAttribute("data-theme", newTheme);
    return set({
      currentTheme: newTheme,
    });
  },
}));
