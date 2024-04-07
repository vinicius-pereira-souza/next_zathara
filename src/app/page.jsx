"use client";
import Image from "next/image";
import ButtonSumit from "@/components/ButtonSumit";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("login");

  const handlePageState = () => {
    if (page === "login") {
      setPage("register");
    } else {
      setPage("login");
    }
  };

  return (
    <main className="min-h-screen bg-white-200 flex items-center justify-center">
      <div className="flex-1 min-h-screen">
        <Image
          src="https://source.unsplash.com/random"
          alt="page account image"
          width={500}
          height={500}
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="min-h-screen w-[50vw] py-8 px-[90px]">
        <h1 className="text-[32px] font-semibold text-gray-550">
          {page === "login" ? "Login" : "Create Account"}
        </h1>
        <div className="w-[50px] h-[3px] bg-gray-550 mt-2"></div>

        <form>
          <Input
            type="email"
            name="email"
            id="email"
            text="E-mail"
            placeholder="example@example.com"
          />
          <Input
            type="password"
            name="password"
            id="password"
            text="Password"
            placeholder="Enter Your Password"
          />
          {page === "login" ? (
            <ButtonSumit text="Login" />
          ) : (
            <ButtonSumit text="Create an account" />
          )}
        </form>
        <div>
          <span className="block mt-4 text-gray-550 text-[15px]">
            Not a user yet?{" "}
            <button
              onClick={handlePageState}
              className="text-blue-550 font-semibold underline decoration-2"
            >
              Create an account
            </button>
          </span>
          <div className="flex items-center my-[18px] text-white-145 font-semibold">
            <span className="flex-1 h-[3px]  bg-white-145"></span>
            <span className="mx-10">or</span>
            <span className="flex-1 h-[3px]  bg-white-145"></span>
          </div>
          <button className="googleButton">
            <Image
              src="/google-icon.png"
              alt="google icon"
              width={27}
              height={27}
              className="max-w-full"
            />
            <span className="block w-full">sign up with Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}
