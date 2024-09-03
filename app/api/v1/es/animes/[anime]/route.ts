import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
  const animeId = context.params.anime;
  try {
    if (!animeId) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missig animeId" }),
        { status: 404 }
      );
    }
    await connect();

    const specificAnime = await Anime.findById(animeId);
    return new NextResponse(JSON.stringify(specificAnime), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Anime" + error.message, {
      status: 500,
    });
  }
};
