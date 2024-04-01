"use client";
import { useClosedNavbar } from "@/context/ClosedNavbarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkNav = ({ name, icon, classExtra }) => {
  const pathname = usePathname();
  const [closedNavbar] = useClosedNavbar();

  return (
    <li className={`${classExtra ? classExtra : ""}`}>
      <Link
        className={`flex items-center gap-4 py-5 px-[30px] transition-all capitalize hover:bg-medium-gray relative ${
          pathname === "/" + name
            ? "bg-medium-gray border-l-[3px] border-solid border-light-grey"
            : ""
        } `}
        href={`/${name}`}
      >
        <div className="text-[22px]">{icon}</div>
        {!closedNavbar ? <div className="text-[14px]">{name}</div> : ""}
      </Link>
    </li>
  );
};

export default LinkNav;
