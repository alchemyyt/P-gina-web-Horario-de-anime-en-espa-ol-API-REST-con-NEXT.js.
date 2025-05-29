import Link from "next/link";
import React from "react";

export default function page() {
  const genresNames = [
    "accion",
    "aventura",
    "vanguardia",
    "ganador-de-premios",
    "boys-love",
    "comedia",
    "drama",
    "fantasia",
    "girls-love",
    "gourmet",
    "horror",
    "misterio",
    "romance",
    "ciencia-ficcion",
    "recuentos-de-la-vida",
    "deportes",
    "sobrenatural",
    "suspenso",
  ];
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="font-bold text-2xl mt-6 text-center">
        Horario de anime en español{" "}
        <span className="text-amber-900 text-3xl">Generos</span>
      </h1>
      <p>
        ¡Bienvenido a la página de{" "}
        <strong>animes en español latino por géneros</strong>! 🎬✨ Si eres fan
        de <strong>shonen</strong>, <strong>shojo</strong>,{" "}
        <strong>isekai</strong>, <strong>acción</strong>,{" "}
        <strong>romance</strong>, ¡o cualquier otro género, has llegado al lugar
        indicado! 🙌 Aquí podrás explorar todos los títulos más populares de
        cada género, organizados de manera sencilla para que encuentres lo que
        buscas sin esfuerzo. 🚀 Ya sea que busques los últimos estrenos o
        revivir tus animes favoritos, tenemos algo para cada tipo de fan. 📅
        Disfruta de los animes en plataformas como <em>Crunchyroll</em>,{" "}
        <em>Netflix</em>, <em>Funimation</em> y mucho más. ¡Haz que tu
        experiencia de maratón anime sea mucho más emocionante! 🍿🔥
      </p>
      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {genresNames.map((element) => (
          <Link
            key={element}
            href={`./generos/${element}`}
            className=" relative rounded-lg m-2"
            title={element}
          >
            <li className="font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
              <h2>{element}</h2>
            </li>
          </Link>
        ))}
      </ul>
      <p>
        ¡Gracias por explorar nuestra colección de{" "}
        <strong>animes en español latino</strong> organizados por géneros! 😄🎉
        Si te encantan las historias de <strong>acción</strong>,{" "}
        <strong>aventura</strong>, <strong>romance</strong> o cualquier otro
        tipo de anime, ¡aquí siempre encontrarás algo nuevo que te enganchará!
        🚀 No olvides seguir navegando por nuestra página, ya que constantemente
        actualizamos las mejores opciones para que disfrutes de tus géneros
        favoritos. 🍥 Si tienes alguna sugerencia o comentario, ¡no dudes en
        compartirlo con nosotros! 💬👋 Nos encantaría saber qué piensas. ¡Hasta
        la próxima, y que disfrutes del maratón de anime! 🎬🍿
      </p>
    </main>
  );
}
