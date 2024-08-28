"use client";
import { createAnime } from "../../actions/anime-actions";
import { toast } from "sonner";
const page = () => {
  return (
    <main>
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
            placeholder="Vertical"
            defaultValue="verticalImage.com"
          />
          <input
            type="text"
            name="horizontalImage"
            placeholder="Horizontal"
            defaultValue="horizontalImage.com"
          />
        </label>
        <label className="">
          <div className="">Titulos</div>
          <input
            type="text"
            name="originalTitle"
            placeholder="Japones"
            defaultValue="Titulo en japones"
          />
          <input
            type="text"
            name="enTitle"
            placeholder="Ingles"
            defaultValue="Titulo en ingles"
          />
          <input
            type="text"
            name="esTitle"
            placeholder="Español"
            defaultValue="Titulo en español"
          />
        </label>
        <label className="">
          <div className="">Sipnopsis</div>
          <input
            type="text"
            name="synopsis"
            placeholder="Sipnopsis"
            defaultValue="Argumento del anime"
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
          <select name="season">
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
            placeholder="genres"
            className="w-full h-24"
            defaultValue={`[{"genreName": "accion", "genreUrl": "yrl"},{"genreName": "romance", "genreUrl": "yrl"}]`}
          />
        </label>
        <label className="">
          <div className="">Studios</div>
          <input
            type="text"
            name="studios"
            placeholder="studios"
            className="w-full h-24"
            defaultValue={`[{ "studioName": "toei", "studioUrl": "url" },{ "studioName": "toei", "studioUrl": "url" }]`}
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
            defaultValue="https://www.crunchyroll.com/"
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
          <input
            type="text"
            name="doblajeWikiUrl"
            placeholder="wiki url"
            defaultValue="https://doblaje.fandom.com/es/wiki/Alya_Sometimes_Hides_Her_Feelings_in_Russian"
          />
        </label>
        <label className="">
          <div className="">Actores de voz</div>
          <input
            type="text"
            name="voiceActors"
            placeholder="actores de voz"
            className="w-full h-24"
            defaultValue={`[{ "voiceActorName": "nombre", "wikiUrl": "url", "character":"personaje" },{ "voiceActorName": "nomnre", "wikiUrl": "url", "character":"personaje" },{ "voiceActorName": "nomnre", "wikiUrl": "url", "character":"personaje" },{ "voiceActorName": "nomnre", "wikiUrl": "url", "character":"personaje" }]`}
          />
        </label>
        <button>save</button>
      </form>
    </main>
  );
};

export default page;
