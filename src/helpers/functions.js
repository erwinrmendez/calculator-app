export const getLocalTheme = () => {
  return (
    localStorage.getItem("theme") ||
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
};

export const saveThemeToLocal = (theme) => {
  localStorage.setItem("theme", theme);
};
