// get local theme
export const getLocalTheme = () => {
  const localTheme = localStorage.getItem("theme");

  if (localTheme) {
    return localTheme;
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
};

// save theme to local
export const saveThemeToLocal = (theme) => {
  localStorage.setItem("theme", theme);
};
