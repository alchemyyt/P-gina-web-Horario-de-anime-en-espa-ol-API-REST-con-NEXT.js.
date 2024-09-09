import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
    const genre = context.params.genre;
  try {
    if (!genre) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missig season" }),
        { status: 404 }
      );
    }
    await connect();
    const filter: any = {
      genres:genre
    };
    const genreAnimes = await Anime.find(filter);
    return new NextResponse(JSON.stringify(genreAnimes), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Anime" + error.message, {
      status: 500,
    });
  }
};
