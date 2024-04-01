import { useClosedNavbar } from "@/context/ClosedNavbarContext";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const ButtonNavbar = () => {
  const [closedNavbar, handleClosedNavbar] = useClosedNavbar();

  return (
    <button
      className={`p-2 rounded bg-medium-gray text-xs cursor-pointer transition-all ${
        closedNavbar ? "absolute top-[-3px] right-[-15px]" : ""
      }`}
      onClick={() => handleClosedNavbar()}
    >
      {!closedNavbar ? <LuArrowLeft /> : <LuArrowRight />}
    </button>
  );
};

export default ButtonNavbar;
