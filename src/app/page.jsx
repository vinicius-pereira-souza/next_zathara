"use client";
import Input from "@/components/Input";
import { useState } from "react";
import { LuUser, LuMail, LuLock } from "react-icons/lu";

export default function Home() {
  const [page, setPage] = useState("login");

  const changeComponentRender = () => {
    if (page == "login") {
      setPage("register");
    } else {
      setPage("login");
    }
  };

  return (
    <main>
      <div>imagem de fundo</div>
      {page == "login" ? (
        <div>
          <h1>Login</h1>
          <form>
            <div>
              <button>Sign in with Google</button>
            </div>
            <Input
              type="email"
              icon={<LuMail />}
              placeholder="exemplo.exemplo@gmail.com"
            />
            <Input type="password" icon={<LuLock />} placeholder="**********" />
            <button onClick={changeComponentRender}>
              Already have a registration?{" "}
            </button>
            <input type="submit" value="Sign in" />
          </form>
        </div>
      ) : (
        <div>
          <h1>Create your account</h1>
          <form>
            <div>
              <button>Sign in with Google</button>
            </div>
            <Input type="text" icon={<LuUser />} placeholder="name" />
            <Input
              type="email"
              icon={<LuMail />}
              placeholder="exemplo.exemplo@gmail.com"
            />
            <Input type="password" icon={<LuLock />} placeholder="**********" />
            <button onClick={changeComponentRender}>
              Already have a registration?
            </button>
            <input type="submit" value="REGISTER" />
          </form>
        </div>
      )}
    </main>
  );
}
