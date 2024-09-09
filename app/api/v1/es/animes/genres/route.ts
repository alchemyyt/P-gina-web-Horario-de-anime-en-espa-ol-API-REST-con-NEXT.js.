import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
  try {
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
    return new NextResponse(JSON.stringify(genresNames), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Anime" + error.message, {
      status: 500,
    });
  }
};
