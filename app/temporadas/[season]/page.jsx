import React from "react";
import { getData } from "../../services/getData";
import Link from "next/link";
export default async function page({ params }) {
  const { season } = params;
  let palabras = season.split("-");
  const seasonData = await getData(
    `es/animes/seasons/${palabras[0]}?year=${palabras[1]}`
  );
  return (
    <main>
      <h1 className="text-center font-bold text-2xl  ">{`${palabras[0]}-${palabras[1]}`}</h1>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {seasonData.map((element) => (
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
