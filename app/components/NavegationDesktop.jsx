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
          src="https://i.imghippo.com/files/SIoJ6042pyc.png"
          alt="logo horario-de-anime-en-español.lat"
          title="Logo de horario-de-anime-en-español.lat"
          border="0"
          className="h-20 absolute inset-x-0 inset-y-0"
        ></img>
      </Link>
      <Menu />
      <SocialMedia />
    </header>
  );
}
