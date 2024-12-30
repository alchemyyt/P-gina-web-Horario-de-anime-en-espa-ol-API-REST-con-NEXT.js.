import Link from "next/link";
import React from "react";
import { getData } from "../services/getData";

export default async function Page() {
  const seasonsNames = await getData(`es/animes/seasons`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h2 className="text-2xl font-bold">Temporadas</h2>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {seasonsNames.map((element) => (
          <Link
            key={element}
            href={`./temporadas/${element.season}-${element.year}`}
            className=" relative rounded-lg m-2"
          >
            <li className="font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
              {`${element.season}-${element.year}`}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
