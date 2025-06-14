"use client";
import { React, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
export default function NavegationMobile() {
  const [clickedMenu, setClickedMenu] = useState(false);
  const router = useRouter();
  const handleClickMenu = () => {
    setClickedMenu(!clickedMenu);
  };
  return (
    <div>
      <header className="  flex lg:hidden  items-center justify-between border-2 shadow-xl shadow-amber-200 border-amber-600  bg-amber-400 px-4">
        <IoIosArrowBack
          className=" h-10 w-10  text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <Link href="/" title="Ir al inicio">
          <img
            src="https://alchemy.sirv.com/3.png"
            alt="logo horario-de-anime-en-español.lat"
            title="Logo de horario-de-anime-en-español.lat"
            border="0"
          ></img>
        </Link>
        <FiMenu
          className="h-10 w-10  text-black cursor-pointer"
          onClick={handleClickMenu}
        />
      </header>
      {clickedMenu && (
        <div className="absolute top-16 right-0 rounded-lg border-2 shadow-xl shadow-amber-200 border-amber-600  bg-amber-400 z-10 flex flex-col items-center text-center lg:hidden p-3 pt-9">
          {clickedMenu ? <Menu /> : null}
          <IoClose
            className="cursor-pointer border border-black rounded-full h-7 w-7 m-2 absolute right-0 top-0"
            onClick={handleClickMenu}
          />
          <SocialMedia />
        </div>
      )}
    </div>
  );
}
