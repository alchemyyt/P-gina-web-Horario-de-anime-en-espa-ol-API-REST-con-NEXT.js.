import React from "react";
import Link from "next/link";
import { getData } from "../../services/getData";
export default async function Page({ params }) {
  const { studio } = params;
  const animeData = await getData(`es/animes/studios/${studio}`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h2 className="text-2xl font-bold">{studio}</h2>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {animeData.map((element) => (
          <Link
            key={element._id}
            href={`../${element._id}`}
            className=" relative rounded-lg m-2"
          >
            <figure
              key={element._id}
              className=" w-60 h-82 overflow-hidden rounded-lg"
            >
              <img
                className=" transition-all duration-300 hover:brightness-50 rounded-lg"
                src={element.images.verticalImage}
                alt={element.titles.esTitle}
              />
            </figure>
            <figcaption className=" absolute bottom-0 overflow-hidden font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full ">
              {element.titles.esTitle}
            </figcaption>
          </Link>
        ))}
      </ul>
    </main>
  );
}
