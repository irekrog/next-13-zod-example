import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    id: 9567856781235345,
  });
}
