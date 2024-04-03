"use client";
import { usePathname } from "next/navigation";
import ButtonTheme from "./ButtonTheme";

const Header = () => {
  const pathName = usePathname()?.replace("/", "");

  return (
    <header className="flex items-center justify-between pb-[30px] ">
      <h1 className="text-[30px] font-extrabold capitalize text-dark-blue dark:text-light-grey">
        {pathName}
      </h1>
      <ButtonTheme />
    </header>
  );
};

export default Header;
