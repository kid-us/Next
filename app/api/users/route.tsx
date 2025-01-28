import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Lorem" },
    { id: 4, name: "Ipsum" },
    { id: 5, name: "Dolor" },
  ]);
}
