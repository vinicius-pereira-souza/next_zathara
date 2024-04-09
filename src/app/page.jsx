"use client";
import Image from "next/image";
import ButtonSumit from "@/components/ButtonSumit";
import Input from "@/components/Input";
import { useState } from "react";
import useAuthentication from "@/hook/useAuthentication";

export default function Home() {
  const { createUser, loginUser, isLoading, isError } = useAuthentication();
  const [page, setPage] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handlePageState = () => {
    if (page === "login") {
      setPage("register");
    } else {
      setPage("login");
    }

    setEmail("");
    setPassword("");
    setconfirmPassword("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (page === "login") {
      await loginUser({ email, password });
    } else if (page === "register") {
      if (password === confirmPassword) {
        await createUser({ email, password });
      }
    }
  };

  return (
    <main className="min-h-screen bg-white-200 flex items-center justify-center">
      <div className="flex-1 min-h-screen ">
        <Image
          src="https://source.unsplash.com/random"
          alt="page account image"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="min-h-screen w-[50vw] py-8 px-[90px]">
        <h1 className="text-[32px] font-semibold text-gray-550">
          {page === "login" ? "Login" : "Create Account"}
        </h1>
        <div className="w-[50px] h-[3px] bg-gray-550 "></div>

        <form onSubmit={handleFormSubmit}>
          <Input
            type="email"
            name="email"
            id="email"
            text="E-mail"
            placeholder="example@example.com"
            state={email}
            setState={setEmail}
          />
          <Input
            type="password"
            name="password"
            id="password"
            text="Password"
            placeholder="Enter Your Password"
            state={password}
            setState={setPassword}
          />
          {page !== "login" ? (
            <Input
              type="password"
              name="password"
              id="password"
              text="Confirm Password"
              placeholder="Confirm Password"
              state={confirmPassword}
              setState={setconfirmPassword}
            />
          ) : (
            ""
          )}
          {page === "login" ? (
            <ButtonSumit text={isLoading ? "Loading..." : "Login"} />
          ) : (
            <ButtonSumit
              text={isLoading ? "Loading..." : "Create an account"}
            />
          )}
          {isError ? (
            <span className="block text-center text-[14px] text-red-500 mt-2">
              {isError}
            </span>
          ) : (
            ""
          )}
        </form>
        <div>
          <span className="block mt-4 text-gray-550 text-[15px]">
            Not a user yet?{" "}
            <button
              onClick={handlePageState}
              className="text-blue-550 font-semibold underline decoration-2"
            >
              {page === "login" ? "Create an account" : "Sign in"}
            </button>
          </span>
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
