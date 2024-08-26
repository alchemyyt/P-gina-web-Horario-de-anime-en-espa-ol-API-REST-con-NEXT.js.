import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
  const broadcastDay = context.params.day;
  try {
    if (!broadcastDay) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missig broadcastDay" }),
        { status: 404 }
      );
    }
    await connect();

    const Animes = await Anime.find({
      airing: true,
      "broadcast.day": broadcastDay,
    });
    return new NextResponse(JSON.stringify(Animes), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Animes" + error.message, {
      status: 500,
    });
  }
};
