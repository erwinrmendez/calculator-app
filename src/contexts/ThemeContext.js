import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, darkerTheme } from "../theme";
import { getLocalTheme, saveThemeToLocal } from "../helpers/functions";

export const ThemeToggleContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState(getLocalTheme());

  useEffect(() => {
    // listen for theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        setSelectedTheme(e.matches ? "dark" : "light")
      );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (e) =>
          setSelectedTheme(e.matches ? "dark" : "light")
        );
    };
  }, []);

  // change theme when selectedTheme is changed
  useEffect(() => {
    saveThemeToLocal(selectedTheme);
    toggleTheme(selectedTheme);
  }, [selectedTheme]);

  const toggleTheme = (selectedTheme) => {
    switch (selectedTheme) {
      case "dark":
        setTheme(darkTheme);
        break;
      case "light":
        setTheme(lightTheme);
        break;
      case "darker":
        setTheme(darkerTheme);
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggleContext.Provider value={{ selectedTheme, setSelectedTheme }}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
