import { createContext, useContext, useState } from "react";

// Hier definieren wir was der Context enthält
type ThemeContextType = {
  // isDark ist true wenn Dark Mode aktiv ist
  isDark: boolean;
  // toggleTheme wechselt zwischen Light und Dark
  toggleTheme: () => void;
};

// Context erstellen - wie eine globale Variable für die ganze App
const ThemeContext = createContext<ThemeContextType | null>(null);

// ThemeProvider umhüllt die ganze App und gibt allen Komponenten Zugriff
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // isDark startet mit false = Light Mode
  const [isDark, setIsDark] = useState(false);

  // toggleTheme wechselt zwischen true und false
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div style={{ background: isDark ? "#1a1a1a" : "#ffffff", minHeight: "100vh", color: isDark ? "#ffffff" : "#000000" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// useTheme ist ein custom Hook - damit können alle Komponenten den Context nutzen
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme muss innerhalb von ThemeProvider verwendet werden");
  }
  return context;
}