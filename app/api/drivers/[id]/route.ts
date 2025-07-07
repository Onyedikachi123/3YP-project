// /app/api/drivers/[id]/route.ts
// import { NextResponse } from "next/server";

// export async function GET(_: Request, context: { params: { id: string } }) {
//   const { id } = context.params;
//   return NextResponse.json({
//     id,
//     name: "Jake Olatunde",
//     ratings: 4.0,
//     station: "Lekki Station",
//     status: "Clock In",
//   });
// }

// GET, PATCH, DELETE single driver

import { NextResponse } from "next/server";
import { drivers, findItem, deleteItem } from "@/lib/mocks";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const driver = findItem(drivers, params.id);
  return NextResponse.json(driver ?? { error: "Not found" }, { status: driver ? 200 : 404 });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const driver = findItem(drivers, params.id);
  if (!driver) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(driver, await req.json());
  return NextResponse.json(driver);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const ok = deleteItem(drivers, params.id);
  return NextResponse.json({ deleted: ok });
}

