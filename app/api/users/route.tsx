import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import { prisma } from "@/prisma/client";

// GET
export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

// POST
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = userSchema.safeParse(body);

  if (validation.error)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    {
      id: 1,
      name: body.name,
    },
    { status: 200 }
  );
}
