// /app/api/riders/route.ts
// ✅ Changed filename from `.ts` to `.js`
import { NextResponse } from "next/server";
import { riders } from "@/lib/mocks";

// ✅ Removed `Request` type annotation
export async function GET() {
  return NextResponse.json(riders);
}

export async function POST(req) {
  const body = await req.json();
  const id = `rider${Date.now()}`;
  riders.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}

