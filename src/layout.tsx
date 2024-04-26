import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Home from "./Home";
import Footer from "./components/Footer";

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
      root.style.backgroundColor = darkMode === "dark" ? "#000" : "#FFF";
    }
  }, [darkMode]);

  return (
    <div className="text-black dark:text-gray-200 bg-white dark:bg-black">
      <Header
        isDarkMode={darkMode === "dark"}
        toggleDarkMode={toggleDarkMode}
      />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
