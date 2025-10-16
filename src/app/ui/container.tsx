import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className=" ml-[250px]">{children}</div>;
}
