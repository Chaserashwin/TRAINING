import { createContext, useEffect, useState } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

// const isDarkInitially = () => {
//   if (localStorage.theme === "dark") return true;
//   return false;
// };

export const ThemeContext = createContext();
//   {
//   isDark: false, //state that will indicate if the theme is dark or not
//   themeToggle: () => {}, //function to toggle between light and dark theme
// }

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
