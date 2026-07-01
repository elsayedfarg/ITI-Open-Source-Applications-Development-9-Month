import { create } from "zustand";

const getInitialMode = () => {
  try {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme-mode");
    return stored ? stored : "light";
  } catch {
    return "light";
  }
};

export const useThemeStore = create((set) => ({
  mode: getInitialMode(),
  toggleTheme: () =>
    set((state) => {
      const next = state.mode === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme-mode", next);
      } catch (err) {
        // non-fatal: ignore storage errors but log in dev
        console.warn("Failed to persist theme mode", err);
      }
      return { mode: next };
    }),
}));
