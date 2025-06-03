import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
const ObjectId = require("mongoose").Types.ObjectId;
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

export async function PUT(
  request: Request,
  { params }: { params: { anime: string } }
): Promise<NextResponse> {
  const { anime } = params;

  try {
    // Primero validar el formato del ID
    if (!ObjectId.isValid(anime)) {
      return NextResponse.json(
        { error: "Invalid anime ID format" },
        { status: 400 }
      );
    }

    await connect();
    const body = await request.json();
    console.log("body");
    console.log(body);
    const currentAnime = await Anime.findById(anime);
    if (!currentAnime) {
      return NextResponse.json({ error: "Anime not found" }, { status: 404 });
    }

    // Verificar si hay cambios reales
    let hasChanges = false;
    for (const key in body) {
      if (JSON.stringify(currentAnime[key]) !== JSON.stringify(body[key])) {
        hasChanges = true;
        break;
      }
    }

    if (!hasChanges) {
      return NextResponse.json(
        { error: "No changes detected" },
        { status: 400 }
      );
    }
    // Corregir formato de géneros si es necesario
    if (body.genres && Array.isArray(body.genres)) {
      body.genres = body.genres.flatMap((genre: any) =>
        typeof genre === "string"
          ? genre.split(",").map((g) => g.trim())
          : genre
      );
    }
    const result = await Anime.updateOne(
      { _id: new ObjectId(anime) },
      { $set: body }
    );

    return NextResponse.json(
      { success: true, message: "Anime updated successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Error updating anime: ${errorMessage}` },
      { status: 500 }
    );
  }
}
