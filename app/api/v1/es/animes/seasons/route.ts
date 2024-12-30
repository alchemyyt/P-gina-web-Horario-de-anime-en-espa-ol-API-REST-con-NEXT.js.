import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
export const GET = async (request: Request, context: { params: any }) => {
  try {
    const seasonsNames = [{ season: "summer", year: "2024" }];
    return new NextResponse(JSON.stringify(seasonsNames), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Anime" + error.message, {
      status: 500,
    });
  }
};
