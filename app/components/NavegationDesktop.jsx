"use client";
import { React } from "react";
import Link from "next/link";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
export default function NavegationDesktop() {
  return (
    <header className=" hidden lg:flex items-center justify-between content-center w-full shadow-xl shadow-amber-200 border-2 border-amber-600 bg-amber-400">
      <Link href="/" className="font-bold text-2xl pl-2" title="Ir al inicio">
        <img
          src="https://drive.usercontent.google.com/download?id=1bucpCkjp13062kQkYABu-2qCzvynSYuS&authuser=0"
          alt="logo horario-de-anime-en-español.lat"
        />
      </Link>
      <Menu />
      <SocialMedia />
    </header>
  );
}
