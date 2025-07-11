// /app/api/trips/[id]/route.js
import { NextResponse } from "next/server";
import { trips, findItem, deleteItem } from "@/lib/mocks";

// ✅ Removed `NextRequest` type and made `context.params` a regular object
export async function GET(_req, context) {
  const { id } = await context.params; // ✅ kept the await
  const trip = findItem(trips, id);
  return NextResponse.json(trip ?? { error: "Not found" }, {
    status: trip ? 200 : 404,
  });
}

export async function PATCH(req, context) {
  const { id } = await context.params; // ✅ kept the await
  const trip = findItem(trips, id);
  if (!trip) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(trip, await req.json());
  return NextResponse.json(trip);
}

export async function DELETE(_req, context) {
  const { id } = await context.params; // ✅ kept the await
  const ok = deleteItem(trips, id);
  return NextResponse.json({ deleted: ok });
}
