import React, { useState } from "react";
import Link from "next/link";
export default function Menu() {
  return (
    <nav className="flex flex-col lg:flex-row ">
      <Link
        href="/animes"
        className="lg:ml-6 text-xl font-bold hover:text-amber-950 duration-300 "
      >
        Animes
      </Link>
      <Link
        href="/temporadas"
        className="lg:ml-6 text-xl font-bold hover:text-amber-950 duration-300 "
      >
        Temporadas
      </Link>
      <Link
        href="/generos"
        className="lg:ml-6 text-xl font-bold hover:text-amber-950 duration-300 "
      >
        Generos
      </Link>
    </nav>
  );
}
