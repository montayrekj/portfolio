import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Layout() {
  const [darkMode, setDarkMode] = useState("");

  const toggleDarkMode = (darkMode: boolean) => {
    const theme = darkMode ? "dark" : "light";
    setDarkMode(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (!darkMode) {
      setDarkMode(localStorage.getItem("theme") === "dark" ? "dark" : "light");
    } else {
      const root = document.getElementsByTagName("html")[0];
      root.setAttribute("class", darkMode);
    }
  }, [darkMode]);

  return (
    <>
      <Header
        isDarkMode={darkMode === "dark"}
        toggleDarkMode={toggleDarkMode}
      />
      <RouterProvider router={router} />
    </>
  );
}
