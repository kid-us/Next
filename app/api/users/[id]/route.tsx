import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

// Get single user
export const GET = (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  if (id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json({
    id: id,
    name: "Lorem",
  });
};

// Update user
export const PUT = async (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  const body = await request.json();

  const validation = userSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
};

// Delete
export const DELETE = (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ message: "User deleted successfully!" });
};
