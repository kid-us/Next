import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import { prisma } from "@/lib/client";

// Get Products
export const GET = async (request: NextRequest) => {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
};

// Post Products
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = productSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: {
      name: body.name,
    },
  });

  if (product)
    return NextResponse.json(
      { error: "Product name already exist" },
      { status: 400 }
    );

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
};
