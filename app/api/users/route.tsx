import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import { prisma } from "@/prisma/client";

// GET User
export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

// Create new user
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = userSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Check email
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json(
      { error: "Email address already exist" },
      { status: 400 }
    );

  // Create
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 200 });
};
