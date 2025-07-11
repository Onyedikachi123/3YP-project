// /app/api/riders/[id]/route.js
import { NextResponse } from "next/server";
import { riders, findItem, deleteItem } from "@/lib/mocks";

// ✅ Removed TypeScript types from function parameters
export async function GET(_req, context) {
  const rider = findItem(riders, context.params.id);
  return NextResponse.json(rider ?? { error: "Not found" }, {
    status: rider ? 200 : 404,
  });
}

export async function PATCH(req, context) {
  const rider = findItem(riders, context.params.id);
  if (!rider) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(rider, await req.json());
  return NextResponse.json(rider);
}

export async function DELETE(_req, context) {
  const ok = deleteItem(riders, context.params.id);
  return NextResponse.json({ deleted: ok });
}
