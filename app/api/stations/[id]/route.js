// /app/api/stations/[id]/route.js
import { NextResponse } from "next/server";
import { stations, findItem, deleteItem } from "@/lib/mocks";

// ✅ Removed all type annotations (Request, params)
export async function GET(_, { params }) {
  const station = findItem(stations, params.id);
  return NextResponse.json(station ?? { error: "Not found" }, {
    status: station ? 200 : 404,
  });
}

export async function PATCH(req, { params }) {
  const station = findItem(stations, params.id);
  if (!station) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(station, await req.json());
  return NextResponse.json(station);
}

export async function DELETE(_, { params }) {
  const ok = deleteItem(stations, params.id);
  return NextResponse.json({ deleted: ok });
}
