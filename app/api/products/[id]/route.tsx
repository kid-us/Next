import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

// Get single product
export const GET = (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: id, name: "Egg" }, { status: 200 });
};

// Update product
export const PUT = async (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(
    { message: "Product updated successfully" },
    { status: 200 }
  );
};

// Delete Product
export const DELETE = (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(
    { message: "Product deleted successfully!" },
    { status: 200 }
  );
};
