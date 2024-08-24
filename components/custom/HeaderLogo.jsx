"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import LogoDark from "@/assets/images/logo/TradeHub.svg";
import LogoWhite from "@/assets/images/logo/TradeHub-white.svg";

export default function HeaderLogo() {
  const { theme } = useTheme();

  return (
    <Image
      className="h-10 aspect-ratio"
      src={theme === "dark" ? LogoWhite : LogoDark}
      alt=""
      width={"200"}
      height={"50"}
    ></Image>
  );
}
