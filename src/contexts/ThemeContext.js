import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, darkerTheme } from "../theme";
import { getLocalTheme } from "../helpers/functions";

export const ThemeToggleContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [selectedTheme, setSelectedTheme] = useState(getLocalTheme());

  useEffect(() => {
    toggleTheme();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    toggleTheme();
    // eslint-disable-next-line
  }, [selectedTheme]);

  const toggleTheme = () => {
    if (selectedTheme === "dark") {
      setTheme(darkTheme);
    } else if (selectedTheme === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkerTheme);
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
