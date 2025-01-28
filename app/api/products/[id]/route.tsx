import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import { prisma } from "@/lib/client";

// Get single product
export const GET = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product, { status: 200 });
};

// Update product
export const PUT = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  if (product.name === body.name)
    return NextResponse.json(
      { error: "Product name already exists" },
      { status: 400 }
    );

  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct, { status: 200 });
};

// Delete Product
export const DELETE = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  await prisma.product.delete({ where: { id: product.id } });

  return NextResponse.json(
    { message: "Product deleted successfully!" },
    { status: 200 }
  );
};
