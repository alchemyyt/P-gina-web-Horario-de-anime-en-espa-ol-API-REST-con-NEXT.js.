import React from "react";
import { getData } from "../services/getData";
import Link from "next/link";
export default async function AnimeCard(props) {
  const dayData = await getData(props.endPoint);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl lg:mt-6 px-2 bg-slate-200 border-2 border-gray-400 my-6 ">
        {props.title}
      </h2>
      <ul className=" flex overflow-x-scroll gap-1 lg:flex-row lg:flex-wrap lg:justify-center lg:overflow-auto bg-slate-100 ">
        {dayData.map((element) => (
          <Link
            key={element._id}
            href={element._id}
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
              {element.titles.esTitle}
            </figcaption>
          </Link>
        ))}
      </ul>
    </div>
  );
}
