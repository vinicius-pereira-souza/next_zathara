import { useClosedNavbar } from "@/context/ClosedNavbarContext";
import Image from "next/image";

const AtavarUser = () => {
  const [closedNavbar] = useClosedNavbar();

  return (
    <div
      className={` py-[20px] px-[30px] ${
        closedNavbar ? "" : "flex items-center gap-2"
      }`}
    >
      <Image src="/user-exemplo.png" alt="user avatar" width={35} height={35} />
      {!closedNavbar ? (
        <div className="flex flex-col">
          <span className="text-[13px]">Vinicius</span>
          <span className="text-gray-700 text-[11px]">exemplo@gmail.com</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AtavarUser;
