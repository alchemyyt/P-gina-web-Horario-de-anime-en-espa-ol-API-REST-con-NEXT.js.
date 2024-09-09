import connect from "@/lib/db";
import Anime from "@/lib/models/anime";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
const ObjectId = require("mongoose").Types.ObjectId; //esto revisa si el objeto es valido
export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const searchKeywords = searchParams.get("keywords") as string;

    const page: any = parseInt(searchParams.get("page") || "1");
    const limit: any = parseInt(searchParams.get("limit") || "10");
    await connect();
    const filter: any = {
    };
    if (searchKeywords) {
      filter.$or = [
        //esto es una opcion de mongoose
        { season: { $regex: searchKeywords, $options: "i" }},
      ];
    }
    const skip = (page - 1) * limit;
    const Animes = await Anime.find(filter)
      .sort({ createdAt: "asc" })
      .skip(skip)
      .limit(limit);
      const totalAnimes = await Anime.countDocuments(filter);
      const totalPages = Math.ceil(totalAnimes / limit);
      
    return new NextResponse(JSON.stringify({Animes,limit,totalPages,totalAnimes}), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Animes" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newAnime = new Anime(body);
    await newAnime.save();

    return new NextResponse(
      JSON.stringify({ message: "Anime is created", Anime: newAnime }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating Anime" + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { animeId, newAnimename } = body;

    await connect();
    if (!animeId || !newAnimename) {
      return new NextResponse(
        JSON.stringify({ message: "ID or new Anime name not found" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(animeId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid Anime id" }), {
        status: 400,
      });
    }

    const updatedAnime = await Anime.findOneAndUpdate(
      { _id: new ObjectId(animeId) },
      { Animename: newAnimename },
      { new: true }
    );

    if (!updatedAnime) {
      return new NextResponse(
        JSON.stringify({ message: "Anime not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Anime is updated", Anime: updatedAnime }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating Anime" + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const animeId = searchParams.get("animeId");

    if (!animeId) {
      return new NextResponse(JSON.stringify({ message: "ID not found" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(animeId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid Anime id" }), {
        status: 400,
      });
    }

    await connect();

    const deletedAnime = await Anime.findByIdAndDelete(
      new Types.ObjectId(animeId)
    );

    if (!deletedAnime) {
      return new NextResponse(
        JSON.stringify({ message: "Anime not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Anime is deleted", Anime: deletedAnime }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error is deleting Anime" + error.message, {
      status: 500,
    });
  }
};
