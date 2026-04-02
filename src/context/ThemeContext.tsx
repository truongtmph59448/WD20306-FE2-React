import { createContext, useContext, useState } from "react";
import { ConfigProvider, theme } from "antd";

export type ThemeMode = "light" | "dark";

export type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const antdTheme = {
    algorithm: themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      <ConfigProvider theme={antdTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
