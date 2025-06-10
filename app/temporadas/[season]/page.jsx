import React from "react";
import { getData } from "../../services/getData";
import Link from "next/link";
export default async function page({ params }) {
  const { season } = params;
  let palabras = season.split("-");
  const seasonData = await getData(
    `es/animes/seasons/${palabras[0]}?year=${palabras[1]}`
  );
  let seasonName = palabras[0];
  let year = palabras[1];
  function translateSeasonToSpanish(seasonInEnglish) {
    const seasons = {
      winter: "Invierno",
      summer: "Verano",
      spring: "Primavera",
      fall: "Otoño",
    };

    return seasons[seasonInEnglish] || seasonInEnglish;
  }
  return (
    <main>
      <h1 className="text-center font-bold text-2xl  ">{`${translateSeasonToSpanish(
        seasonName
      )}-${year}`}</h1>
      <p className="text-center mx-4">
        ¡Bienvenido a nuestra página de{" "}
        <strong>
          animes en español latino de la temporada{" "}
          {translateSeasonToSpanish(seasonName)} {year}
        </strong>
        ! 📅🎬 Si eres fanático de los estrenos de anime y te gustaría saber qué
        títulos se están emitiendo en esta temporada, ¡has llegado al lugar
        adecuado! Aquí encontrarás una lista organizada de los mejores animes de
        la temporada {translateSeasonToSpanish(seasonName)}, del año {year}.
        🌸🍂 ¿Buscas los últimos estrenos de{" "}
        {translateSeasonToSpanish(seasonName)}? ¡Tenemos todos los detalles para
        que no te pierdas nada! 🚀🍿
      </p>
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
            <figcaption className="  absolute bottom-0 overflow-hidden font-bold text-center text-black bg-white/30 font-bold p-1 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full ">
              <h2>{element.titles.esTitle}</h2>
            </figcaption>
          </Link>
        ))}
      </ul>
      <p className="text-center mx-4">
        ¡Gracias por visitar nuestra página de{" "}
        <strong>
          animes en español latino de la temporada{" "}
          {translateSeasonToSpanish(seasonName)} {year}
        </strong>
        ! 😄🎉 Mantente al tanto de los últimos estrenos de anime de esta
        temporada. Si encontraste algún anime que te gustaría ver o tienes
        alguna recomendación, ¡no dudes en seguir explorando nuestra página para
        más contenido actualizado! 📅💥 ¡Nos encantaría saber tu opinión! 🎬👋
        ¡Hasta la próxima, y que disfrutes de tu maratón de anime! 🍿🔥
      </p>
      s
    </main>
  );
}
