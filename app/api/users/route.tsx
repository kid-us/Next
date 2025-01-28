import { NextRequest, NextResponse } from "next/server";

// GET
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Lorem" },
    { id: 4, name: "Ipsum" },
    { id: 5, name: "Dolor" },
  ]);
}

// POST
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json(
      {
        error: "Name required.",
      },
      { status: 400 }
    );

  return NextResponse.json(
    {
      id: 1,
      name: body.name,
    },
    { status: 200 }
  );
}
