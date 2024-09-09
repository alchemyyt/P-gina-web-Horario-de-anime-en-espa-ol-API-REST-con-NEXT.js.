"use server";
import axios from "axios";

export const createAnime = async (formData) => {
  const stringToJson = (string) => {
    return JSON.parse(string);
  };
  const stringToArray = (string) => {
    let miArray = string.split(" ");
    return miArray;
  };
  const currentUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  let airing = formData.get("airing");
  const genres = formData.get("genres");
  const voiceActors = formData.get("voiceActors");
  const password = formData.get("password");

  if (airing === "on") {
    airing = true;
  } else {
    airing = false;
  }
  const postHeader = {
    headers: {
      authorization: `Bearer ${password}`,
    },
  };
  const newAnime = {
    images: {
      verticalImage: formData.get("verticalImage"),
      horizontalImage: formData.get("horizontalImage"),
    },
    titles: {
      originalTitle: formData.get("originalTitle"),
      enTitle: formData.get("enTitle"),
      esTitle: formData.get("esTitle"),
    },
    synopsis: formData.get("synopsis"),
    airing: airing,
    season: formData.get("season"),
    duration: formData.get("duration"),
    year: formData.get("year"),
    broadcast: {
      day: formData.get("day"),
      mx: formData.get("mx"),
      co: formData.get("co"),
      ve: formData.get("ve"),
      ar: formData.get("ar"),
      es: formData.get("es"),
    },
    genres: stringToArray(genres),
    studio: formData.get("studio"),
    streamingService: {
      siteName: formData.get("siteName"),
      animeUrl: formData.get("animeUrl"),
      siteIcon: formData.get("siteIcon"),
    },
    doblajeWikiUrl: formData.get("doblajeWikiUrl"),
    voiceActors: stringToJson(voiceActors),
  };
  try {
    const response = await axios.post(
        `https://horario-de-anime-en-castellano.vercel.app/api/v1/es/animes`,
      newAnime,
      postHeader
    );
    return response.status; // para poder retornar directo tuve que hacer un try catch con .then no retornaba
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return error.response?.status || 500; // Return error status or 500 for internal server errors
  }
};
/*Para llara esta funcion en el criente LLamo una funcion que recibe un event que en este caso nextjs es formData osea esto es una funcion dentro de una funcion (createAnime esta dentro de una funcion anonima asincrona ) para usar el cliente asyncrona para esperar los datos */
