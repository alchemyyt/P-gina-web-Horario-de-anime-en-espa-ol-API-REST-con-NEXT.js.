import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async () => {
  try {
    await connect();
    const Animes = await Anime.find({ airing: true });
    return new NextResponse(JSON.stringify(Animes), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Animes" + error.message, {
      status: 500,
    });
  }
};
