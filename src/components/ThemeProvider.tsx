import { useEffect, useState } from "react";

const ThemeProvider: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
  onClick={() => setDarkMode(!darkMode)}
  className={`fixed top-4 right-4 p-2 rounded-md shadow-md transition-colors duration-300 border-2 border-blue-400 dark:border-gray-600
    ${darkMode ? "bg-gray-700 text-gray-300" : "bg-[#9ec5f7] text-blue-900"} font-bold`}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

  );
};

export default ThemeProvider;
