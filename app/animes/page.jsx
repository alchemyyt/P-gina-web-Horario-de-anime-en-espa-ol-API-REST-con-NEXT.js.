// app/animes/page.jsx
import React from "react";
import { getData } from "../services/getData";
import Link from "next/link";

// Componente principal de la página que obtiene los datos
export default async function Page({ searchParams }) {
  // Obtenemos el número de página desde los parámetros de la URL (por defecto es 1)
  const currentPage = searchParams.page || 1;

  // Realizamos la solicitud de datos con la página actual
  const animesData = await getData(`es/animes?page=${currentPage}`);

  return (
    <main>
      <h1 className="font-bold text-2xl mt-6 text-center">
        Horario de anime en español{" "}
        <span className="text-amber-900 text-3xl">Todos Animes</span>
      </h1>
      <div>
        {/* Mostrar los animes */}
        <ul className="flex flex-wrap items-center justify-center">
          {animesData.Animes.map((element) => (
            <Link
              key={element._id}
              href={element._id}
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
              <figcaption className="absolute bottom-0 overflow-hidden font-bold text-center text-amber-500 m-1 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full">
                <h3>{element.titles.esTitle}</h3>
              </figcaption>
            </Link>
          ))}
        </ul>

        {/* Paginación */}
        <div className="flex justify-center mt-4">
          {/* Botón de "Anterior" */}
          {currentPage > 1 && (
            <Link
              href={`?page=${parseInt(currentPage) - 1}`}
              title="anterior pagina"
            >
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-md">
                Anterior
              </button>
            </Link>
          )}

          {/* Botones de las páginas */}
          {Array.from({ length: animesData.totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Link key={pageNumber} href={`?page=${pageNumber}`}>
                <button
                  disabled={currentPage === pageNumber}
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:rounded-none ${
                    currentPage === pageNumber
                      ? "bg-gray-500 text-white cursor-not-allowed opacity-50" // Cambiar opacidad cuando está deshabilitado
                      : ""
                  }`}
                >
                  {pageNumber}
                </button>
              </Link>
            )
          )}

          {/* Botón de "Siguiente" */}
          {currentPage < animesData.totalPages && (
            <Link
              href={`?page=${parseInt(currentPage) + 1}`}
              title="siguiente pagina"
            >
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-md">
                Siguiente
              </button>
            </Link>
          )}
        </div>
      </div>
      <h2>Pagina numero {currentPage}</h2>
    </main>
  );
}
