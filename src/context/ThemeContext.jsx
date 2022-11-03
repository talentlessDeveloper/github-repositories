import { useState, useEffect, createContext } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storageRef = window.localStorage.getItem("color-theme");
    if (typeof storageRef === "string") {
      return storageRef;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setColorTheme] = useState(getInitialTheme);

  // useEffect(() => {
  //   const checkTheme = (value) => {
  //     const root = window.document.documentElement;
  //     const isDark = value === "dark";

  //     root.classList.remove(isDark ? "light" : "dark");
  //     root.classList.add(value);
  //     window.localStorage.setItem("color-theme", value);
  //   };
  //   checkTheme(theme);
  // }, [theme]);

  const setTheme = (value) => {
    const root = window.document.documentElement;
    const isDark = value === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(value);
    setColorTheme(value);
    window.localStorage.setItem("color-theme", value);
  };

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        setTheme(e.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
