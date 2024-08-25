import connect from '@/lib/db';
import Anime from '@/lib/models/anime';
import { NextResponse } from 'next/server';
import { Types } from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId; //esto revisa si el objeto es valido
export const GET = async () => {
  try {
    await connect();
    const Animes = await Anime.find();
    return new NextResponse(JSON.stringify(Animes), { status: 200 });
  } catch (error: any) {
    return new NextResponse('Error in fetching Animes' + error.message, {
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
      JSON.stringify({ message: 'Anime is created', Anime: newAnime }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse('Error in creating Anime' + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { AnimeId, newAnimename } = body;

    await connect();
    if (!AnimeId || !newAnimename) {
      return new NextResponse(
        JSON.stringify({ message: 'ID or new Animename not found' }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(AnimeId)) {
      return new NextResponse(JSON.stringify({ message: 'Invalid Anime id' }), {
        status: 400,
      });
    }

    const updatedAnime = await Anime.findOneAndUpdate(
      { _id: new ObjectId(AnimeId) },
      { Animename: newAnimename },
      { new: true }
    );

    if (!updatedAnime) {
      return new NextResponse(
        JSON.stringify({ message: 'Anime not found in the database' }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: 'Anime is updated', Anime: updatedAnime }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse('Error in updating Anime' + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const AnimeId = searchParams.get('AnimeId');

    if (!AnimeId) {
      return new NextResponse(JSON.stringify({ message: 'ID not found' }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(AnimeId)) {
      return new NextResponse(JSON.stringify({ message: 'Invalid Anime id' }), {
        status: 400,
      });
    }

    await connect();

    const deletedAnime = await Anime.findByIdAndDelete(
      new Types.ObjectId(AnimeId)
    );

    if (!deletedAnime) {
      return new NextResponse(
        JSON.stringify({ message: 'Anime not found in the database' }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: 'Anime is deleted', Anime: deletedAnime }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse('Error in deleting Anime' + error.message, {
      status: 500,
    });
  }
};
