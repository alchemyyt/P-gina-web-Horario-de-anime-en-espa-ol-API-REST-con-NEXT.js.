import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
  const studio = context.params.studio;
  try {
    if (!studio) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missig studio" }),
        { status: 404 }
      );
    }
    await connect();
    const filter: any = {
      studio: studio,
    };
    const genreAnimes = await Anime.find(filter);
    return new NextResponse(JSON.stringify(genreAnimes), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Anime" + error.message, {
      status: 500,
    });
  }
};
