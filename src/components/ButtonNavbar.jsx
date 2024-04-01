import { useClosedNavbar } from "@/context/ClosedNavbarContext";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const ButtonNavbar = () => {
  const [closedNavbar, handleClosedNavbar] = useClosedNavbar();

  return (
    <button
      className={`p-2 rounded bg-medium-gray text-xs cursor-pointer transition-all ${
        closedNavbar
          ? "absolute top-[50%] translate-y-[-50%] right-[-15px]"
          : ""
      }`}
      onClick={() => handleClosedNavbar()}
    >
      {!closedNavbar ? <LuArrowLeft /> : <LuArrowRight />}
    </button>
  );
};

export default ButtonNavbar;
