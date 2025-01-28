import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

// Get Products
export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "Milk" },
    { id: 2, name: "Egg" },
    { id: 3, name: "Yogurt" },
    { id: 4, name: "Cheese" },
    { id: 5, name: "Butter" },
  ]);
};

// Post Products
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = productSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    {
      message: `Product ${body.name} created successfully`,
    },
    { status: 201 }
  );
};
