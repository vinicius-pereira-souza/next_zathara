"use client";
import { useState } from "react";

export default function ToggleNavbar() {
  const [closedNavbar, SetClosedNavbar] = useState(false);

  const handleClosedNavbar = () => {
    SetClosedNavbar(!closedNavbar);
  };

  return [closedNavbar, handleClosedNavbar];
}
