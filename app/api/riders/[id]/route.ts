// /app/api/riders/[id]/route.ts
// import { NextResponse } from "next/server";

// export async function GET(_: Request, context: { params: { id: string } }) {
//   const { id } = context.params;
//   return NextResponse.json({
//     id,
//     name: "Jake Olatunde",
//     email: "jakeolatunde@gmail.com",
//     phone: "+2348169071955",
//     subscription: "Active",
//   });
// }

import { NextResponse } from "next/server";
import { riders, findItem, deleteItem } from "@/lib/mocks";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const rider = findItem(riders, params.id);
  return NextResponse.json(rider ?? { error: "Not found" }, { status: rider ? 200 : 404 });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const rider = findItem(riders, params.id);
  if (!rider) return NextResponse.json({ error: "Not found" }, { status: 404 });
  Object.assign(rider, await req.json());
  return NextResponse.json(rider);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const ok = deleteItem(riders, params.id);
  return NextResponse.json({ deleted: ok });
}

