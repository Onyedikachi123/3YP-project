import { NextResponse } from "next/server";
import { drivers, findItem, deleteItem } from "@/lib/mocks";

// ✅ Removed type annotation on `context` parameter
export async function GET(_req, context) {
  const driver = findItem(drivers, context.params.id);
  return NextResponse.json(driver ?? { error: "Not found" }, {
    status: driver ? 200 : 404,
  });
}

export async function PATCH(req, context) {
  const driver = findItem(drivers, context.params.id);
  if (!driver)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(driver, await req.json());
  return NextResponse.json(driver);
}

export async function DELETE(_req, context) {
  const ok = deleteItem(drivers, context.params.id);
  return NextResponse.json({ deleted: ok });
}
