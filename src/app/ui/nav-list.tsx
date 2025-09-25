"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LuLayoutDashboard,
  LuCircleCheckBig,
  LuUser,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import clsx from "clsx";

import { TypeNavLink } from "@/lib/types";

const links: Partial<TypeNavLink>[] = [
  {
    text: "Dashboard",
    href: "/dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    text: "Tasks",
    href: "/tasks",
    icon: <LuCircleCheckBig />,
  },
  { text: "Account", href: "/account", icon: <LuUser /> },
];

export default function NavList() {
  return (
    <ul className="flex-1 flex flex-col">
      {links.map(({ text, icon, href }: Partial<TypeNavLink>) => (
        <NavLink text={text} icon={icon} href={href} />
      ))}

      <NavLink
        text="Settings"
        icon={<LuSettings />}
        href="/settings"
        classList="mt-auto mb-0"
      />
    </ul>
  );
}

export function NavLink({ text, icon, href, classList }: Partial<TypeNavLink>) {
  const pathname = usePathname();

  return (
    <>
      <li
        className={clsx(
          classList,
          "flex items-center gap-3 px-4 rounded-lg text-sm mb-2",
          pathname === href
            ? "bg-blue-500 text-white font-bold"
            : "text-gray-500",
        )}
      >
        <span className="text-xl">{icon}</span>
        <Link className="py-3 w-full" href={`${href}`}>
          {text}
        </Link>
      </li>
    </>
  );
}
