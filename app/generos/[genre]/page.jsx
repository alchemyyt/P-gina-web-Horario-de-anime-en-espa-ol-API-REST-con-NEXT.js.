import React from "react";
import Link from "next/link";
import { getData } from "../../services/getData";
export default async function Page({ params }) {
  const { genre } = params;
  const animeData = await getData(`es/animes/genres/${genre}`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="text-2xl font-bold">{genre}</h1>
      <p>
        Bienvenido a nuestra colección de animes en{" "}
        <strong>español latino</strong> organizados por géneros. 🎬🔥 Si eres
        fanático del genero <strong>{genre}</strong> o deseas explorar más sobre
        este emocionante tipo de anime, ¡estás en el lugar adecuado! Aquí
        encontrarás los mejores títulos de la temporada, listados y fácilmente
        accesibles para que disfrutes al máximo. 🍿✨ No importa si eres nuevo
        en el anime o un veterano, tenemos algo para todos. ¡Explora, descubre y
        empieza tu maratón de anime ahora mismo! 🚀🎥
      </p>

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
            <figcaption className=" abs absolute bottom-0 overflow-hidden font-bold text-center text-black bg-white/30 font-bold p-1 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full  ">
              <h2>{element.titles.esTitle}</h2>
            </figcaption>
          </Link>
        ))}
      </ul>
      <p>
        ¡Gracias por explorar nuestra selección de animes de{" "}
        <strong>{genre}</strong> en <strong>español latino</strong>! 🌟🎉
        Siempre estamos actualizando nuestra lista con los mejores títulos para
        que no te pierdas nada. Si has encontrado tu nuevo anime favorito, no
        dudes en seguirnos para estar al tanto de las últimas novedades. 📅💥
        Nos encantaría saber tu opinión, ¡déjanos tus comentarios y sugerencias!
        👇 Hasta la próxima, y que disfrutes de tu maratón. 🎬🍿
      </p>
    </main>
  );
}
