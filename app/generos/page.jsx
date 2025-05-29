import Link from "next/link";
import React from "react";

export default function page() {
  const genresNames = [
    "accion",
    "aventura",
    "vanguardia",
    "ganador-de-premios",
    "boys-love",
    "comedia",
    "drama",
    "fantasia",
    "girls-love",
    "gourmet",
    "horror",
    "misterio",
    "romance",
    "ciencia-ficcion",
    "recuentos-de-la-vida",
    "deportes",
    "sobrenatural",
    "suspenso",
  ];
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="font-bold text-2xl mt-6 text-center">
        Horario de anime en español{" "}
        <span className="text-amber-900 text-3xl">Generos</span>
      </h1>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {genresNames.map((element) => (
          <Link
            key={element}
            href={`./generos/${element}`}
            className=" relative rounded-lg m-2"
            title={element}
          >
            <li className="font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
              <h2>{element}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
