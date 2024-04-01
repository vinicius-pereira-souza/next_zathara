"use client";
import { useState } from "react";

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
      {page == "login" ? (
        <div>
          <h1>login</h1>
          <button onClick={changeComponentRender}>
            Ainda não possui cadastro?
          </button>
        </div>
      ) : (
        <div>
          <h1>register</h1>
          <button onClick={changeComponentRender}>Já possui cadastro?</button>
        </div>
      )}
    </main>
  );
}
