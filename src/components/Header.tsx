"use client";
import { usePathname } from "next/navigation";
import ButtonTheme from "./ButtonTheme";

const Header = () => {
  const pathName = usePathname();
  function extrairUltimoSegmento(pathname) {
    const regex = /\/([^/]+)\/?$/;

    const match = regex.exec(pathname);

    return match ? match[1] : "";
  }

  return (
    <header className="flex items-center justify-between pb-[30px] ">
      <h1 className="text-[30px] font-extrabold capitalize text-dark-blue dark:text-light-grey">
        {extrairUltimoSegmento(pathName)}
      </h1>
      <ButtonTheme />
    </header>
  );
};

export default Header;
