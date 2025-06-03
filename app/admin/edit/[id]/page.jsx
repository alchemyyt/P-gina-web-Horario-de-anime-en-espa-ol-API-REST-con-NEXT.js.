"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { updateAnime } from "../../../../actions/anime-actions";
import { toast } from "sonner";
import { getData } from "../../../services/getData";
export default function Page({ params }) {
  const { id } = params;
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(`es/animes/${id}`);
        setAnimeData(data);
      } catch (err) {
        console.error(err);
        setError(err);
        toast.error("Error al cargar los datos del anime");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  const handleSubmit = async (formData) => {
    try {
      const result = await updateAnime(id, formData);
      console.log(result);
      if (result.status === 200) {
        toast.success(`Anime editado exitosamente: ${result.data.message}`);
      } else {
        toast.error(
          `Error al editar anime: ${result.error || "Error desconocido"}`
        );
      }
    } catch (error) {
      toast.error("Error inesperado al procesar la solicitud");
      console.error("Error:", error);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los datos</div>;
  if (!animeData) return <div>No se encontraron datos</div>;
  let voiceActorString = JSON.stringify(animeData.voiceActors, null, 2);
  return (
    <main className="flex flex-col items-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6">
      <h1 className="text-2xl font-bold">{animeData.titles.esTitle} edit</h1>
      <form action={handleSubmit}>
        <label className="">
          <div className="">Imagenes</div>
          <p>Vertical</p>
          <textarea
            name="verticalImage"
            placeholder="verticalImageUrl"
            defaultValue={animeData.images.verticalImage}
            class="block p-2.5 w-full "
          />
          <p>Horizonttal</p>
          <textarea
            name="horizontalImage"
            placeholder="horizontalImageUrl"
            defaultValue={animeData.images.horizontalImage}
            class="block p-2.5 w-full "
          />
        </label>
        <label className="">
          <div className="">Titulos</div>
          <p>Japones</p>
          <input
            type="text"
            name="originalTitle"
            placeholder="Japones"
            defaultValue={animeData.titles.originalTitle}
            class="block p-2.5 w-full "
          />
          <p>Ingles</p>
          <input
            type="text"
            name="enTitle"
            placeholder="Ingles"
            defaultValue={animeData.titles.enTitle}
            class="block p-2.5 w-full "
          />
          <p>Español</p>
          <input
            type="text"
            name="esTitle"
            placeholder="Español"
            defaultValue={animeData.titles.esTitle}
            class="block p-2.5 w-full "
          />
        </label>
        <label className="">
          <div className="">Sipnopsis</div>
          <textarea
            name="synopsis"
            placeholder="Escribe la sinopsis aquí..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              min-h-[120px] whitespace-pre-wrap resize-y"
            rows={5}
            defaultValue={animeData?.synopsis || ""}
          />
        </label>
        <label className="block">
          <div className="inline">Esta en emision?</div>
          <input
            className="inline"
            type="checkbox"
            name="airing"
            defaultChecked={animeData.airing}
          />
        </label>
        <label className="">
          <div className="">Temporada</div>
          <select name="season" defaultValue={animeData.season}>
            <option defaultValue="winter">winter</option>
            <option defaultValue="spring">spring</option>
            <option defaultValue="summer">summer</option>
            <option defaultValue="fall">fall</option>
          </select>
        </label>
        <label className="">
          <div className="">Duracion de episodios en minutos</div>
          <input
            type="number"
            name="duration"
            placeholder="Duracion"
            defaultValue={animeData.duration}
          />
        </label>
        <label className="">
          <div className="">Año de emision</div>
          <input
            type="number"
            name="year"
            placeholder="Año"
            defaultValue={animeData.year}
          />
        </label>
        <label className="">
          <div className="">Datos de emision</div>
          <select name="day" defaultValue={animeData.broadcast.day}>
            <option defaultValue="monday">monday</option>
            <option defaultValue="tuesday">tuesday</option>
            <option defaultValue="wednesday">wednesday</option>
            <option defaultValue="thursday">thursday</option>
            <option defaultValue="friday">friday</option>
            <option defaultValue="saturday">saturday</option>
            <option defaultValue="sunday">sunday</option>
          </select>
          mx
          <input type="time" name="mx" defaultValue={animeData.broadcast.mx} />
          co
          <input type="time" name="co" defaultValue={animeData.broadcast.co} />
          ve
          <input type="time" name="ve" defaultValue={animeData.broadcast.ve} />
          ar
          <input type="time" name="ar" defaultValue={animeData.broadcast.ar} />
          es
          <input type="time" name="es" defaultValue={animeData.broadcast.es} />
        </label>
        <label className="">
          <div className="">Generos</div>
          <input
            type="text"
            name="genres"
            placeholder="elemento1 elemento2 elemento3"
            className="w-full"
            defaultValue={animeData.genres}
          />
        </label>
        <label className="">
          <div className="">Studio</div>
          <input
            type="text"
            name="studio"
            placeholder="studio"
            className="w-full "
            defaultValue={animeData.studio}
          />
        </label>
        <label className="">
          <div className="">Servicios de stream</div>
          <input
            type="text"
            name="siteName"
            placeholder="crunchyroll"
            defaultValue={animeData.streamingService.siteName}
          />
          <input
            type="text"
            name="animeUrl"
            placeholder="https://www.crunchyroll.com/"
            defaultValue={animeData.streamingService.animeUrl}
          />
          <input
            type="text"
            name="siteIcon"
            placeholder="Icon url"
            defaultValue={animeData.streamingService.siteIcon}
          />
        </label>
        <label className="">
          <div className="">Wiki url</div>
          <input
            type="text"
            name="doblajeWikiUrl"
            placeholder="wiki url"
            defaultValue={animeData.doblajeWikiUrl}
          />
        </label>
        <label className="">
          <div className="">Actores de voz</div>
          <textarea
            name="voiceActors"
            placeholder="actores"
            defaultValue={voiceActorString}
            className="w-full"
            rows={10}
          />
        </label>
        <button
          type="submit"
          className="w-full bg-amber-400  text-center block mx-auto rounded-md"
        >
          Update
        </button>
      </form>
    </main>
  );
}
