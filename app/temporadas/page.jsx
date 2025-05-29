import Link from "next/link";
import React from "react";
import { getData } from "../services/getData";

export default async function Page() {
  const seasonsNames = await getData(`es/animes/seasons`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="font-bold text-2xl mt-6 text-center">
        Horario de anime en español{" "}
        <span className="text-amber-900 text-3xl">Temporadas</span>
      </h1>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {seasonsNames.map((element) => (
          <Link
            key={element}
            href={`./temporadas/${element.season}-${element.year}`}
            className=" relative rounded-lg m-2"
            title={`${element.season}-${element.year}`}
          >
            <li className="font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
              <h2>{`${element.season}-${element.year}`}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
