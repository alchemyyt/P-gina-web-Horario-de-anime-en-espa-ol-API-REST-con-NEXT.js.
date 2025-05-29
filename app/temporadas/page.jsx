import Link from "next/link";
import React from "react";
import { getData } from "../services/getData";

export default async function Page() {
  const seasonsNames = await getData(`es/animes/seasons`);
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="font-bold text-2xl mt-6 text-center">
        Horario de anime en español{" "}
        <span className="text-amber-900 text-3xl">Temporadas</span>
      </h1>
      <p>
        ¡Bienvenido a la sección de <strong>animes en español latino</strong>{" "}
        organizados por <strong>temporada y año</strong>! 🎬📅 Si eres un
        verdadero fanático del anime, aquí encontrarás todos los títulos más
        destacados de cada temporada, desde los últimos lanzamientos hasta los
        clásicos que siguen siendo populares. ¡Explora por temporada, por año, y
        encuentra todos los estrenos y episodios disponibles en plataformas como{" "}
        <em>Crunchyroll</em>, <em>Netflix</em>, <em>Funimation</em>, y más! 🌟🚀
        Con nuestra organización por <strong>temporada</strong> y{" "}
        <strong>año</strong>, podrás estar al tanto de cada estreno sin perderte
        ni un solo episodio. ¡Haz de tu maratón de anime una experiencia
        perfecta! 🍿✨
      </p>

      <ul className=" flex flex-wrap justify-center gap-1  bg-slate-100 h-min">
        {seasonsNames.map((element) => (
          <Link
            key={element}
            href={`./temporadas/${element.season}-${element.year}`}
            className=" relative rounded-lg m-2"
            title={`${element.season}-${element.year}`}
          >
            <li className="font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
              <h2>{`${element.season}-${element.year}`}</h2>
            </li>
          </Link>
        ))}
      </ul>
      <p>
        ¡Gracias por explorar nuestra colección de animes organizados por
        temporada y año! 😄🍥 Si estás buscando los estrenos más recientes o
        quieres revivir los grandes éxitos del pasado, sigue navegando por
        nuestras categorías. ¡Siempre estamos actualizando la lista con los
        animes más esperados en español latino! 🎉 No olvides dejarnos tus
        comentarios y sugerencias, ¡nos encantaría saber qué piensas! 💬👋 Hasta
        pronto, ¡y que disfrutes al máximo de tus animes favoritos! 🚀🍿
      </p>
    </main>
  );
}
