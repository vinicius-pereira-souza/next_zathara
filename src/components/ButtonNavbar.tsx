import { useClosedNavbar } from "@/context/ClosedNavbarContext";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const ButtonNavbar = () => {
  const [closedNavbar, handleClosedNavbar] = useClosedNavbar();

  return (
    <button
      className={`absolute right-[-13px] p-2 rounded-full bg-gray-600  hover:bg-gray-800 text-xs cursor-pointer transition-all`}
      onClick={() => handleClosedNavbar()}
    >
      {!closedNavbar ? <LuArrowLeft /> : <LuArrowRight />}
    </button>
  );
};

export default ButtonNavbar;
