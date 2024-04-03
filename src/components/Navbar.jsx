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
    <aside className="h-screen flex flex-col bg-dark-grey text-content-navbar-light fixed top-0 left-0">
      <div
        className="w-[30px] h-[30px] rounded-full bg-light-grey dark:bg-themeDarkPage absolute top-0 right-[-30px] shadow-dark-grey"
        style={{ boxShadow: "-15px -15px 0 0 #171818" }}
      ></div>
      <div
        className="w-[30px] h-[30px] rounded-full bg-light-grey dark:bg-themeDarkPage absolute bottom-0 right-[-30px] shadow-dark-grey"
        style={{ boxShadow: "-15px 15px 0 0 #171818" }}
      ></div>
      <header className="flex items-center p-[30px] text-[12px]  relative">
        <div className="flex flex-1 items-center gap-[5px] tracking-wider">
          <Image src="/logo-icon-light.svg" width={21} height={21} alt="logo" />
          {!closedNavbar ? <p>ZATHARA</p> : ""}
        </div>
        <ButtonNavbar />
      </header>
      <nav
        className={`h-full flex flex-col border-t border-solid border-gray-800 transition-all overflow-hidden ${
          !closedNavbar ? "w-[240px] " : "w-[85px] "
        } `}
      >
        <ul className="h-full flex flex-col ">
          <LinkNav name="dashboard" icon={<LuLayoutDashboard />} />
          <LinkNav name="tasks" icon={<LuClipboardList />} />
          <LinkNav name="account" icon={<LuUser />} />
          <LinkNav
            name="notifications"
            classExtra="mt-auto"
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
