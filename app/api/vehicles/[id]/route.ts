import { NextResponse } from "next/server";
import { vehicles, findItem, deleteItem } from "@/lib/mocks";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const vehicle = findItem(vehicles, params.id);
  return NextResponse.json(vehicle ?? { error: "Not found" }, { status: vehicle ? 200 : 404 });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const vehicle = findItem(vehicles, params.id);
  if (!vehicle) return NextResponse.json({ error: "Not found" }, { status: 404 });
  Object.assign(vehicle, await req.json());
  return NextResponse.json(vehicle);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const ok = deleteItem(vehicles, params.id);
  return NextResponse.json({ deleted: ok });
}
