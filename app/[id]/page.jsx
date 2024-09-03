import React from "react";
import Link from "next/link";
import { getData } from "../services/getData";
export default async function Page({ params }) {
  const { id } = params;
  const animeData = await getData(`es/animes/${id}`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <h1 className="text-2xl font-bold">{animeData.titles.esTitle}</h1>
      <img
        src={animeData.images.horizontalImage}
        alt={animeData.titles.esTitle}
        className="m-3"
      />
      <p className="m-3">{animeData.synopsis}</p>
      <ul className="text-right m-auto">
        <li>
          <h2 className="font-bold text-xl text-center">Hora de estreno</h2>
        </li>
        <li>🇲🇽🇨🇷🇬🇹🇭🇳🇳🇮🇸🇻/{animeData.broadcast.mx}</li>
        <li>🇨🇴🇪🇨🇵🇦🇵🇪/{animeData.broadcast.co}</li>
        <li>🇧🇴🇵🇷🇩🇴🇻🇪/{animeData.broadcast.ve}</li>
        <li>🇨🇱🇦🇷🇵🇾🇺🇾/{animeData.broadcast.ar}</li>
        <li>🇪🇸/{animeData.broadcast.es}</li>
      </ul>
      <ul>
        <li>
          <h2 className="font-bold text-xl text-center">Informacion</h2>
        </li>
        <li>
          <span className="font-bold">Temporada</span>:
          <Link
            href={`./${animeData.season}-${animeData.year}`}
            className="text-amber-700"
          >
            {` ${animeData.season} ${animeData.year}`}
          </Link>
        </li>
        <li>
          <span className="font-bold">Duracion: </span>
          {animeData.duration} min
        </li>
        <li>
          <span className="font-bold">Estatus: </span>
          {animeData.airing}
        </li>
        <li className="text-center">
          <span className="font-bold">Dia de estreno: </span>
          {animeData.broadcast.day}
        </li>
      </ul>
      <ul>
        <li>{animeData.titles.originalTitle}</li>
        <li>{animeData.titles.enTitle}</li>
        <li>{animeData.titles.esTitle}</li>
      </ul>
      <ul>
        {animeData.genres.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <p>{animeData.studio}</p>
      <ul>
        <li>{animeData.streamingService.siteName}</li>
      </ul>
      <p>{animeData.doblajeWikiUrl}</p>
      <ul>
        {animeData.voiceActors.map((element, index) => (
          <li
            key={index}
          >{`${element.voiceActorName}:${element.character}`}</li>
        ))}
      </ul>
    </main>
  );
}
