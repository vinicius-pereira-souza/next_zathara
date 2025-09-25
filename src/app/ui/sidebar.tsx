import Image from "next/image";
import NavList from "./nav-list";
import { LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  return (
    <aside className="min-h-screen fixed top-0 left-0 bg-white px-4 pt-3 w-[250px] flex flex-col shadow">
      <div className="flex items-center gap-3 text-lg font-extrabold uppercase text-gray-900 mb-8">
        <Image src="/icon-logo.svg" alt="icon Logo" width={35} height={35} />
        <span>zathara</span>
      </div>
      <nav className="flex-1 flex flex-col">
        <NavList />
      </nav>
      <div className="mt-3 py-3 border-t border-gray-300">
        <button className="flex items-center gap-3 py-3 px-4 rounded-lg text-sm text-gray-500 hover:text-red-500 hover:bg-blue-50 w-full transition-all">
          <span className="text-xl">
            <LuLogOut />
          </span>
          Logout
        </button>
      </div>
    </aside>
  );
}
