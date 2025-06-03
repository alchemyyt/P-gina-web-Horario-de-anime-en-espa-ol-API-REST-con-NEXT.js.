"use server";
import axios from "axios";
import { cookies } from "next/headers";

export const createAnime = async (formData) => {
  console.log("creating");
  const stringToJson = (string) => {
    try {
      return JSON.parse(string);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  };

  const stringToArray = (string) => {
    if (!string) return [];
    return string.split(" ").filter((item) => item.trim() !== "");
  };

  // Verificar autenticación primero
  const cookieStore = cookies();
  const token = cookieStore.get("tokenName")?.value;

  if (!token) {
    console.error("No se encontró token de autenticación");
    return { error: "No autorizado", status: 401 };
  }

  let airing = formData.get("airing") === "on";
  const genres = formData.get("genres");
  const voiceActors = formData.get("voiceActors");
  const domain = process.env.DOMAIN;

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

  const postHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  try {
    const response = await axios.post(
      `${domain}api/v1/es/animes`,
      newAnime,
      postHeader
    );
    return { status: response.status, data: response.data };
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return {
      error: error.response?.data?.message || "Error del servidor",
      status: error.response?.status || 500,
    };
  }
};
export const updateAnime = async (id, formData) => {
  if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
    console.error("Invalid anime ID format:", id);
    return { error: "Invalid anime ID format", status: 400 };
  }

  const stringToJson = (string) => {
    try {
      return JSON.parse(string);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  };

  const stringToArray = (string) => {
    if (!string) return [];
    return string.split(" ").filter((item) => item.trim() !== "");
  };

  // Verificar autenticación
  const cookieStore = cookies();
  const token = cookieStore.get("tokenName")?.value;

  if (!token) {
    console.error("No se encontró token de autenticación");
    return { error: "No autorizado", status: 401 };
  }

  let airing = formData.get("airing") === "on";
  const genres = formData.get("genres");
  const voiceActors = formData.get("voiceActors");
  const domain = process.env.DOMAIN;

  const updatedAnime = {
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

  const putHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  try {
    const response = await axios.put(
      `${domain}api/v1/es/animes/${id}`,
      updatedAnime,
      putHeader
    );
    return { status: response.status, data: response.data };
  } catch (error) {
    console.error("Error updating anime data:", error);
    return {
      error: error.response?.data?.message || "Error del servidor",
      status: error.response?.status || 500,
    };
  }
};
