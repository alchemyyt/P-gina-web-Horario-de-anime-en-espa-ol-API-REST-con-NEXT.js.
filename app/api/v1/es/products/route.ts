import connect from "@/lib/db";
import Product from "@/lib/models/product";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
const ObjectId = require("mongoose").Types.ObjectId; //esto revisa si el objeto es valido
export const GET = async () => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching products" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newproduct = new Product(body);
    await newproduct.save();

    return new NextResponse(
      JSON.stringify({ message: "product is created", product: newproduct }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating product" + error.message, {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { productId, newproductname } = body;

    await connect();
    if (!productId || !newproductname) {
      return new NextResponse(
        JSON.stringify({ message: "ID or new productname not found" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(productId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid product id" }),
        {
          status: 400,
        }
      );
    }

    const updatedproduct = await Product.findOneAndUpdate(
      { _id: new ObjectId(productId) },
      { productname: newproductname },
      { new: true }
    );

    if (!updatedproduct) {
      return new NextResponse(
        JSON.stringify({ message: "product not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "product is updated",
        product: updatedproduct,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating product" + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return new NextResponse(JSON.stringify({ message: "ID not found" }), {
        status: 400,
      });
    }

    if (!Types.ObjectId.isValid(productId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid product id" }),
        {
          status: 400,
        }
      );
    }

    await connect();

    const deletedproduct = await Product.findByIdAndDelete(
      new Types.ObjectId(productId)
    );

    if (!deletedproduct) {
      return new NextResponse(
        JSON.stringify({ message: "product not found in the database" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "product is deleted",
        product: deletedproduct,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in deleting product" + error.message, {
      status: 500,
    });
  }
};
