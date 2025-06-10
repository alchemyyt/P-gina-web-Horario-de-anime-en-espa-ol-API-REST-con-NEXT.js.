import React from "react";
import { getData } from "../services/getData";
import Link from "next/link";
export default async function AnimeCard(props) {
  const dayData = await getData(props.endPoint);
  return (
    <div className=" max-w-full">
      <h2 className="text-center font-bold text-2xl lg:mt-6 px-1 bg-slate-200 border-2 border-gray-400 my-6 ">
        {props.title}
      </h2>
      <ul className=" flex flex-1 overflow-x-scroll gap-4 lg:flex-row lg:flex-wrap lg:justify-center lg: lg:overflow-auto  ">
        {dayData.map((element) => (
          <Link
            key={element._id}
            href={element._id}
            className=" relative rounded-lg m-1"
            title={element.titles.esTitle}
          >
            <figure
              key={element._id}
              className="w-56 h-72 overflow-hidden rounded-lg"
            >
              <img
                className=" transition-all duration-300 hover:brightness-50 rounded-lg"
                src={element.images.verticalImage}
                alt={element.titles.esTitle}
                title={element.titles.esTitle}
                width={216}
                height={302}
              />
            </figure>
            <figcaption className=" absolute bottom-0 overflow-hidden font-bold text-center text-black bg-white/30 font-bold p-1 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full ">
              {element.titles.esTitle}
            </figcaption>
          </Link>
        ))}
      </ul>
    </div>
  );
}
