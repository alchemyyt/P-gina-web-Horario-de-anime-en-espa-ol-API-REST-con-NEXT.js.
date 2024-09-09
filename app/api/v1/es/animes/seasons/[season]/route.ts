import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
    const season = context.params.season;
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year") 
  try {
    if (!season) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missig season" }),
        { status: 404 }
      );
    }
    await connect();
    const filter: any = {
      season:season,
      year:year
    };
    const seasonAnimes = await Anime.find(filter);
    return new NextResponse(JSON.stringify(seasonAnimes), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Anime" + error.message, {
      status: 500,
    });
  }
};
