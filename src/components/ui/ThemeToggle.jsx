import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 rounded-xl border border-gray-300 bg-white shadow hover:shadow-md transition"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;