// /app/api/vehicles/route.ts
// ✅ Removed TypeScript type annotation `: Request`
import { NextResponse } from "next/server";
import { vehicles } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(vehicles);
}

export async function POST(req) { // ✅ Removed `: Request`
  const body = await req.json();
  const id = `car${Date.now()}`;
  vehicles.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}

