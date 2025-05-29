import React from "react";
import Link from "next/link";
import { getData } from "../../services/getData";
export default async function Page({ params }) {
  const { genre } = params;
  const animeData = await getData(`es/animes/genres/${genre}`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="text-2xl font-bold">{genre}</h1>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {animeData.map((element) => (
          <Link
            key={element._id}
            href={`../${element._id}`}
            className=" relative rounded-lg m-2"
            title={element.titles.esTitle}
          >
            <figure
              key={element._id}
              className=" w-60 h-82 overflow-hidden rounded-lg"
            >
              <img
                className=" transition-all duration-300 hover:brightness-50 rounded-lg"
                src={element.images.verticalImage}
                alt={element.titles.esTitle}
                title={element.titles.esTitle}
              />
            </figure>
            <figcaption className=" absolute bottom-0 overflow-hidden font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full ">
              <h2>{element.titles.esTitle}</h2>
            </figcaption>
          </Link>
        ))}
      </ul>
    </main>
  );
}
