import Image from "next/image";
import NavList from "./nav-list";

export default function Sidebar() {
  return (
    <aside className="min-h-screen fixed top-0 left-0 bg-white px-4 py-6 w-[250px] flex flex-col">
      <div className="flex items-center gap-3 text-xl font-extrabold uppercase text-gray-900 mb-8">
        <Image src="/icon-logo.svg" alt="icon Logo" width={42} height={42} />
        <span>zathara</span>
      </div>
      <nav className="flex-1 flex flex-col">
        <NavList />
      </nav>
    </aside>
  );
}
