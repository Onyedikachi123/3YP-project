// /app/api/trips/route.ts
// ✅ Changed file extension from `route.ts` to `route.js`
import { trips } from "@/lib/mocks";
import { NextResponse } from "next/server";

// ✅ Removed TypeScript annotations like `req: Request`
export async function GET() {
  return NextResponse.json(trips);
}

export async function POST(req) {
  const body = await req.json();
  const id = `trip${Date.now()}`;
  trips.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}

