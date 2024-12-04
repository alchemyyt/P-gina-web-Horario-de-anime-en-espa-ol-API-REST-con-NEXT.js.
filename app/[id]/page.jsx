import React from "react";
import Link from "next/link";
import { getData } from "../services/getData";
export default async function Page({ params }) {
  const { id } = params;
  const animeData = await getData(`es/animes/${id}`);
  return (
    <main className="flex flex-col items-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h2 className="text-2xl font-bold">{animeData.titles.esTitle}</h2>
      <img
        src={animeData.images.horizontalImage}
        alt={animeData.titles.esTitle}
        className="m-3"
      />
      <p className="m-3">{animeData.synopsis}</p>
      <div className=" lg:flex lg:gap-2 lg:items-first lg:m-auto">
        <section>
          <h2 className="text-xl font-bold  bg-slate-200 border-2 border-gray-400 ">
            Donde ver?
          </h2>
          <ul>
            <Link href={animeData.streamingService.animeUrl} className="">
              <li className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
                {animeData.streamingService.siteName}
              </li>
            </Link>
          </ul>
        </section>
        <ul className="text-left m-auto mt-3 lg:m-0">
          <li>
            <h2 className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 ">
              Hora de estreno
            </h2>
          </li>
          <li>
            <img
              src="https://a.storyblok.com/f/178900/36x36/28ba98a391/mexico-flag.png"
              alt="mexico-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/b48f44e520/costa-rica-flag.png"
              alt="costa-rica-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/ecb8e4cb20/guatemala-flag.png"
              alt="guatemala-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/d345856721/honduras-flag.png"
              alt="honduras-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/a671b6f660/nicaragua-flag.png"
              alt="nicaragua-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/18a09ed2ed/el-salvador-flag.png"
              alt="el-salvador-flag-icon"
              className="w-6 m-1 inline"
            />
            {` / ${animeData.broadcast.mx}`}
          </li>
          <li>
            <img
              src="https://a.storyblok.com/f/178900/36x36/06dc3ea84d/colombia-flag.png"
              alt="colombia-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/5a902b2c9a/ecuador-flag.png"
              alt="ecuador-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/91ca2f9cd4/panama-flag.png"
              alt="panama-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/4c4e2e3d41/peru-flag.png"
              alt="peru-flag-icon"
              className="w-6 m-1 inline"
            />
            {` / ${animeData.broadcast.co}`}
          </li>
          <li>
            <img
              src="https://a.storyblok.com/f/178900/36x36/c202196168/bolivia-flag.png"
              alt="bolivia-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/4f71e16522/puerto-rico-flag.png"
              alt="puerto-rico-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/d1e8dac389/republica-dominicana-flag.png"
              alt="republica-dominicana-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/37c31b9d31/venezuela-flag.png"
              alt="venezuela-flag-icon"
              className="w-6 m-1 inline"
            />
            {` / ${animeData.broadcast.ve}`}
          </li>

          <li>
            <img
              src="https://a.storyblok.com/f/178900/36x36/114dfbc7d3/chile-flag.png"
              alt="chile-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/5dc57ca01a/argentina-flag.png"
              alt="argentina-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/67ee92bb7b/paraguay-flag.png"
              alt="paraguay-flag-icon"
              className="w-6 m-1 inline"
            />
            <img
              src="https://a.storyblok.com/f/178900/36x36/2d3a115338/uruguay-flag.png"
              alt="uruguay-flag-icon"
              className="w-6 m-1 inline"
            />
            {` / ${animeData.broadcast.ar}`}
          </li>
          <li>
            <img
              src="https://a.storyblok.com/f/178900/36x36/2e5e6cb815/spain-flag.png"
              alt="spain-flag-icon"
              className="w-6 m-1 inline"
            />
            {` / ${animeData.broadcast.es}`}
          </li>
        </ul>
        <ul className="mt-6 lg:m-0">
          <li>
            <h2 className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 ">
              Informacion
            </h2>
          </li>
          <li>
            <span className="font-bold">Temporada</span>:
            <Link
              href={`./temporadas/${animeData.season}-${animeData.year}`}
              className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
            >
              {` ${animeData.season} ${animeData.year}`}
            </Link>
          </li>
          <li>
            <span className="font-bold">Duracion: </span>
            {animeData.duration} min
          </li>
          <li className="text-center">
            <span className="font-bold">Dia de estreno: </span>
            {animeData.broadcast.day}
          </li>
        </ul>
        <ul className="mt-6 lg:m-0">
          <li>
            <h2 className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 ">
              Titulos
            </h2>
          </li>
          <li className="mx-3">
            <h3 className=" font-bold">Japones</h3>
            {animeData.titles.originalTitle}
          </li>
          <li className="mx-3">
            <h3 className=" font-bold">Ingles</h3>
            {animeData.titles.enTitle}
          </li>
          <li className="mx-3">
            <h3 className=" font-bold">Español</h3>
            {animeData.titles.esTitle}
          </li>
        </ul>
        <ul className="mt-6 lg:m-0  ">
          <li>
            <h2 className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 ">
              Generos
            </h2>
          </li>
          {animeData.genres.map((element) => (
            <li key={element._id}>
              <Link
                href={`./generos/${element}`}
                className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
              >
                {element}
              </Link>
            </li>
          ))}
        </ul>
        <section>
          <h2 className="font-bold text-xl text-center mt-6 lg:m-0  bg-slate-200 border-2 border-gray-400 ">
            Estudio
          </h2>
          <Link
            href={`./${animeData.studio}`}
            className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
          >
            <p>{animeData.studio}</p>
          </Link>
        </section>

        <section>
          <h2 className="font-bold text-xl text-center mt-6 lg:m-0  bg-slate-200 border-2 border-gray-400 ">
            Actores de doblaje
          </h2>
          <ul>
            {animeData.voiceActors.map((element) => (
              <li key={element._id}>
                {element.character}:
                <Link
                  href={element.wikiUrl}
                  className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
                  key={element._id}
                >
                  {` ${element.voiceActorName} `}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={animeData.doblajeWikiUrl}
                className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
              >
                <p>Wiki</p>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
