// ✅ Changed filename extension to `.js` instead of `.ts`
import { NextResponse } from "next/server";
import { drivers } from "@/lib/mocks";

// ✅ Removed `: Request` type annotation
export async function GET() {
  return NextResponse.json(drivers);
}

export async function POST(req) {
  const body = await req.json();
  const id = `driver${Date.now()}`;
  drivers.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}
