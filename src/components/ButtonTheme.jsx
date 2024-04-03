import { useTheme } from "@/hook/useTheme";
import { LuSun, LuMoonStar } from "react-icons/lu";

const ButtonTheme = () => {
  const { theme, toggleThemeValue } = useTheme();

  return (
    <button
      onClick={() => toggleThemeValue()}
      className="p-2 rounded transition-all  hover:bg-slate-300  hover:text-gray-90000 text-lg text-dark-blue dark:text-light-grey dark:hover:bg-medium-gray cursor-pointer"
    >
      {theme === "light" ? <LuMoonStar /> : <LuSun />}
    </button>
  );
};

export default ButtonTheme;
