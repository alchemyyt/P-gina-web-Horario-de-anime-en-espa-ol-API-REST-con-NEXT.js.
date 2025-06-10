import React from "react";
import { getData } from "../services/getData";
import Link from "next/link";
export default async function page() {
  const animesData = await getData(`es/schedule`);
  return (
    <div>
      <h1>Admin</h1>
      <Link href={"/admin/formulario"}>Crear</Link>
      <ul className="flex flex-wrap items-center justify-center">
        {animesData.map((element) => (
          <Link
            key={`admin/edit/${element._id}`}
            href={`admin/edit/${element._id}`}
            className="relative rounded-lg m-2"
            title={element.titles.esTitle}
          >
            <figure
              key={element._id}
              className="w-60 h-82 overflow-hidden rounded-lg"
            >
              <img
                className="transition-all duration-300 hover:brightness-50 rounded-lg"
                src={element.images.verticalImage}
                alt={element.titles.esTitle}
                title={element.titles.esTitle}
              />
            </figure>
            <figcaption className=" absolute bottom-0 overflow-hidden font-bold text-center text-black bg-white/30 font-bold p-1 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full ">
              <h3>{element.titles.esTitle}</h3>
            </figcaption>
          </Link>
        ))}
      </ul>
    </div>
  );
}
