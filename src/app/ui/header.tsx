"use client";

import {
  LuPanelLeftClose,
  LuPanelLeftOpen,
  LuMoon,
  LuSun,
  LuBell,
} from "react-icons/lu";

import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2 px-4 bg-white shadow flex items-center mb-5 justify-end gap-5">
      <button className="header-button mr-auto">
        <LuPanelLeftClose />
      </button>
      <button className="header-button">
        <LuMoon />
      </button>
      <Link href="/notifications" className="header-button">
        <LuBell />
      </Link>
      <div className="w-10 h-10 rounded-full bg-gray-500"></div>
    </header>
  );
}
