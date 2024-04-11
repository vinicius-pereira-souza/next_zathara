"use client";
import { useContext } from "react";
import { useClosedNavbar } from "@/context/ClosedNavbarContext";
import Image from "next/image";
import { AuthContent } from "@/context/AuthContext";

const AtavarUser = () => {
  const [closedNavbar] = useClosedNavbar();
  const { currentUser } = useContext(AuthContent);

  return (
    <div
      className={`select-none py-[20px] px-[30px] ${
        closedNavbar ? "" : "flex items-center gap-2"
      }`}
    >
      {currentUser?.photoURL ? (
        <Image
          className="rounded-full"
          src={currentUser?.photoURL}
          alt="user avatar"
          width={35}
          height={35}
          draggable={false}
        />
      ) : (
        <Image
          src="/generic-user.png"
          className="rounded-full"
          alt="user avatar"
          width={35}
          height={35}
          draggable={false}
        />
      )}
      {!closedNavbar ? (
        <div className="flex flex-col">
          <span className="text-[13px]">
            {currentUser ? currentUser.displayName : " "}
          </span>
          <span className="text-gray-700 text-[11px]">
            {currentUser ? currentUser.email : " "}
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AtavarUser;
