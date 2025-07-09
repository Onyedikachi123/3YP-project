// app/api/drivers/[id]/route.ts

import type { NextRequest } from "next/server"; // ✅ correct type
import { NextResponse } from "next/server";
import { drivers, findItem, deleteItem } from "@/lib/mocks";

/* GET */
export async function GET(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  const driver = findItem(drivers, context.params.id);
  return NextResponse.json(driver ?? { error: "Not found" }, {
    status: driver ? 200 : 404,
  });
}

/* PATCH */
export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const driver = findItem(drivers, context.params.id);
  if (!driver)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(driver, await req.json());
  return NextResponse.json(driver);
}

/* DELETE */
export async function DELETE(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  const ok = deleteItem(drivers, context.params.id);
  return NextResponse.json({ deleted: ok });
}
