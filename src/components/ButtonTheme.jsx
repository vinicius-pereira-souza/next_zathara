import { useTheme } from "@/context/ThemeContext";
import { LuSun, LuMoonStar } from "react-icons/lu";

const ButtonTheme = () => {
  const { theme, toggleThemeValue } = useTheme();

  return (
    <button
      onClick={() => toggleThemeValue()}
      className="p-2 rounded transition-all hover:bg-slate-300 hover:text-gray-90000 text-lg text-dark-blue cursor-pointer"
    >
      {theme == "light" ? <LuMoonStar /> : <LuSun />}
    </button>
  );
};

export default ButtonTheme;
