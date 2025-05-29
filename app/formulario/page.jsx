"use client";
import { createAnime } from "../../actions/anime-actions";
import { toast } from "sonner";
import VoiceActorsForm from "../components/VoiceActorsForm";
import { useState } from "react";
const page = () => {
  const [voiceActors, setVoiceActors] = useState([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="p-6 text-center bg-amber-200 border-amber-600 border-2">
        Formulario del API REST de Anime En Español
      </h1>
      <form
        action={async (formData) => {
          try {
            const status = await createAnime(formData); //esto ejecuata la funcion osea crea el anime y agarra lo que retorna en este caso el estatus
            if (status === 200) {
              toast.success("Anime created successfully status:" + status);
            } else {
              console.error("Error creating anime:", status);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        }}
      >
        <label className="">
          <div className="">Contraseña</div>
          <input type="text" name="password" placeholder="Password" />
        </label>
        <label className="">
          <div className="">Imagenes</div>
          <input
            type="text"
            name="verticalImage"
            placeholder="verticalImageUrl"
          />
          <input
            type="text"
            name="horizontalImage"
            placeholder="horizontalImageUrl"
          />
        </label>
        <label className="">
          <div className="">Titulos</div>
          <input type="text" name="originalTitle" placeholder="Japones" />
          <input type="text" name="enTitle" placeholder="Ingles" />
          <input type="text" name="esTitle" placeholder="Español" />
        </label>
        <label className="">
          <div className="">Sipnopsis</div>
          <input
            type="text"
            name="synopsis"
            placeholder="Sipnopsis"
            className="w-full h-24"
          />
        </label>
        <label className="block">
          <div className="inline">Esta en emision?</div>
          <input
            className="inline"
            type="checkbox"
            name="airing"
            defaultChecked="true"
          />
        </label>
        <label className="">
          <div className="">Temporada</div>
          <select name="season" defaultValue={"summer"}>
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
            defaultValue="23"
          />
        </label>
        <label className="">
          <div className="">Año de emision</div>
          <input
            type="number"
            name="year"
            placeholder="Año"
            defaultValue="2024"
          />
        </label>
        <label className="">
          <div className="">Datos de emision</div>
          <select name="day">
            <option defaultValue="monday">monday</option>
            <option defaultValue="tuesday">tuesday</option>
            <option defaultValue="wednesday">wednesday</option>
            <option defaultValue="thursday">thursday</option>
            <option defaultValue="friday">friday</option>
            <option defaultValue="saturday">saturday</option>
            <option defaultValue="sunday">sunday</option>
          </select>
          mx
          <input type="time" name="mx" defaultValue="00:00" />
          co
          <input type="time" name="co" defaultValue="00:00" />
          ve
          <input type="time" name="ve" defaultValue="00:00" />
          ar
          <input type="time" name="ar" defaultValue="00:00" />
          es
          <input type="time" name="es" defaultValue="00:00" />
        </label>
        <label className="">
          <div className="">Generos</div>
          <input
            type="text"
            name="genres"
            placeholder="elemento1 elemento2 elemento3"
            className="w-full h-24"
          />
        </label>
        <label className="">
          <div className="">Studio</div>
          <input
            type="text"
            name="studio"
            placeholder="studio"
            className="w-full h-24"
          />
        </label>
        <label className="">
          <div className="">Servicios de stream</div>
          <input
            type="text"
            name="siteName"
            placeholder="crunchyroll"
            defaultValue="crunchyroll"
          />
          <input
            type="text"
            name="animeUrl"
            placeholder="https://www.crunchyroll.com/"
          />
          <input
            type="text"
            name="siteIcon"
            placeholder="Icon url"
            defaultValue="https://cdn.icon-icons.com/icons2/3132/PNG/512/crunchyroll_social_network_network_connection_communication_icon_192251.png"
          />
        </label>
        <label className="">
          <div className="">Wiki url</div>
          <input type="text" name="doblajeWikiUrl" placeholder="wiki url" />
        </label>
        <label className="">
          <div className="">Actores de voz</div>
          <VoiceActorsForm onChange={(actors) => setVoiceActors(actors)} />s
        </label>
        <button>save</button>
      </form>
    </main>
  );
};

export default page;
