import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import { prisma } from "@/lib/client";

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
  { params: { id } }: { params: { id: string } }
) => {
  const body = await request.json();

  const validation = userSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
};

// Delete
export const DELETE = async (
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({ where: { id: user.id } });

  return NextResponse.json({ message: "User deleted successfully!" });
};
