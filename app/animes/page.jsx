"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function Page() {
  const [totalPages, setTotalPages] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const header = {
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_PASSWORD}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3000/api/v1/es/animes?page=${currentPage}`,
        header
      );
      setData(response.data.Animes);
      setTotalPages(response.data.totalPages);
    };
    fetchData();
  }, [currentPage]);

  // Lógica para calcular el índice inicial y final de los elementos a mostrar
  const currentItems = data;
  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(currentItems);
  // Componentes para mostrar los datos y la paginación
  return (
    <main>
      <div>
        <ul className=" flex  flex-wrap  items-center justify-center ">
          {currentItems.map((element) => (
            <Link
              key={element._id}
              href={element._id}
              className=" relative rounded-lg m-2"
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
              <figcaption className=" absolute bottom-0 overflow-hidden font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full ">
                {element.titles.esTitle}
              </figcaption>
            </Link>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          {currentPage > 1 && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-md"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`
                  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:rounded-none ${
                    currentPage === pageNumber ? "bg-blue-500 text-white" : ""
                  }
                `}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}

          {currentPage < totalPages && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-md"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
