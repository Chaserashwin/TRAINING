import { createContext, useEffect, useState } from "react";

const isDarkInitially = () => {
  if (localStorage.theme === "dark") return true;
  return false;
};

const ThemeContext = createContext({
  isDark: false, //state that will indicate if the theme is dark or not
  themeToggle: () => {}, //function to toggle between light and dark theme
});

export const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(isDarkInitially);

  const themeToggler = () => {
    setIsDark((val) => !val);
  };

  useEffect(() => {
    if (isDark) localStorage.theme = "dark";
    else localStorage.theme = "light";
  }, [isDark]);

  return (
    <ThemeContextProvider
      value={{
        isDark,
        themeToggle: themeToggler,
      }}
    >
      {props.children}
    </ThemeContextProvider>
  );
};

export default ThemeContext;
