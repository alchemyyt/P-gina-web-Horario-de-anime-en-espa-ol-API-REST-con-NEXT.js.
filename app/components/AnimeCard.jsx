import React from "react";
import { getData } from "../services/getData";
import Link from "next/link";
export default async function AnimeCard(props) {
  const dayData = await getData(props.day);
  return (
    <div>
      <h2 className="">{props.dia}</h2>
      <ul className=" flex overflow-x-scroll gap-1 lg:flex-row lg:flex-wrap lg:max-w-1">
        {dayData.map((element) => (
          <Link
            key={element._id}
            href={element._id}
            className=" relative rounded-lg"
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
            <figcaption className=" absolute bottom-0 overflow-hidden font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 ">
              {element.titles.esTitle}
            </figcaption>
          </Link>
        ))}
      </ul>
    </div>
  );
}
