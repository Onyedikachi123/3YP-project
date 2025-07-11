// /app/api/vehicles/[id]/route.js
import { NextResponse } from "next/server";
import { vehicles, findItem, deleteItem } from "@/lib/mocks";

// ✅ Removed type annotations from parameters
export async function GET(_req, context) {
  const vehicle = findItem(vehicles, context.params.id);
  return NextResponse.json(vehicle ?? { error: "Not found" }, {
    status: vehicle ? 200 : 404,
  });
}

export async function PATCH(req, context) {
  const vehicle = findItem(vehicles, context.params.id);
  if (!vehicle) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(vehicle, await req.json());
  return NextResponse.json(vehicle);
}

export async function DELETE(_req, context) {
  const ok = deleteItem(vehicles, context.params.id);
  return NextResponse.json({ deleted: ok });
}
