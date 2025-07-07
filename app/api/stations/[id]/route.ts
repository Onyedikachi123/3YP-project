// GET, PATCH, DELETE single station

import { NextResponse } from "next/server";
import { stations, findItem, deleteItem } from "@/lib/mocks";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const station = findItem(stations, params.id);
  return NextResponse.json(station ?? { error: "Not found" }, { status: station ? 200 : 404 });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const station = findItem(stations, params.id);
  if (!station) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(station, await req.json());
  return NextResponse.json(station);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const ok = deleteItem(stations, params.id);
  return NextResponse.json({ deleted: ok });
}
