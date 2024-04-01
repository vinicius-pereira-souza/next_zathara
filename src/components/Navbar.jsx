"use client";
import LinkNav from "./LinkNav";
import Image from "next/image";
import {
  LuLayoutDashboard,
  LuClipboardList,
  LuBell,
  LuUser,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import ButtonLogout from "./ButtonLogout";
import AtavarUser from "./AtavarUser";
import ButtonNavbar from "./ButtonNavbar";
import { useClosedNavbar } from "@/context/ClosedNavbarContext";

const Navbar = () => {
  const [closedNavbar] = useClosedNavbar();

  return (
    <aside className="min-h-screen bg-dark-grey py-[30px] text-content-navbar-light fixed top-0 left-0">
      <div
        className="w-[30px] h-[30px] rounded-full bg-light-grey absolute top-0 right-[-30px] shadow-dark-grey"
        style={{ boxShadow: "-15px -15px 0 0 #171818" }}
      ></div>
      <div
        className="w-[30px] h-[30px] rounded-full bg-light-grey absolute bottom-0 right-[-30px] shadow-dark-grey"
        style={{ boxShadow: "-15px 15px 0 0 #171818" }}
      ></div>
      <header className="flex items-center px-[30px] text-[12px] mb-[30px] relative">
        <div className="flex flex-1 items-center gap-[5px] font-KaiseiOpti ">
          <Image src="/logo-icon-light.svg" width={21} height={21} alt="logo" />
          {!closedNavbar ? <p>ZATHARA</p> : ""}
        </div>
        <ButtonNavbar />
      </header>
      <nav
        className={`min-h-screen border-t border-solid border-gray-800 transition-all overflow-x-hidden ${
          !closedNavbar ? "w-[240px] " : "w-[85px] "
        }`}
      >
        <ul>
          <LinkNav name="dashboard" icon={<LuLayoutDashboard />} />
          <LinkNav name="tasks" icon={<LuClipboardList />} />
          <LinkNav name="account" icon={<LuUser />} />
          <LinkNav
            name="notifications"
            classExtra="mt-[37%]"
            icon={<LuBell />}
          />
          <LinkNav name="settings" icon={<LuSettings />} />
        </ul>
        <AtavarUser navClosed={closedNavbar} />
        <ButtonLogout icon={<LuLogOut />} navClosed={closedNavbar} />
      </nav>
    </aside>
  );
};

export default Navbar;
