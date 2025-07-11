// /app/api/stations/route.ts
// ✅ Changed filename from `route.ts` to `route.js`
import { NextResponse } from "next/server";
import { stations } from "@/lib/mocks";

// ✅ Removed type annotation on `req: Request`
export async function GET() {
  return NextResponse.json(stations);
}

export async function POST(req) {
  const body = await req.json();
  const id = `station${Date.now()}`;
  stations.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}
