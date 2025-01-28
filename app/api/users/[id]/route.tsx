import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import { prisma } from "@/prisma/client";

// Get single user
export const GET = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

  if (!user)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json(user);
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
