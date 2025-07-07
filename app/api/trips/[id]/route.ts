// /app/api/trips/[id]/route.ts
// import { NextResponse } from "next/server";

// export async function GET(request: Request, context: { params: { id: string } }) {
//   const { id } = context.params;
//   return NextResponse.json({
//     id,
//     carId: "car001",
//     riderId: "rider001",
//     driverId: "driver001",
//     fareTotal: 12000,
//     pickup: "Abuja Station 1",
//     dropoff: "Abuja Station 2",
//   });
// }
// ✅ FIXED: No duplicate declarations
// app/api/trips/[id]/route.ts
import { trips, findItem, deleteItem } from "@/lib/mocks";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } } // ✅ plain object
) {
  const trip = findItem(trips, params.id);
  return NextResponse.json(
    trip ?? { error: "Not found" },
    { status: trip ? 200 : 404 }
  );
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const trip = findItem(trips, params.id);
  if (!trip) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(trip, await req.json());
  return NextResponse.json(trip);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const ok = deleteItem(trips, params.id);
  return NextResponse.json({ deleted: ok });
}


// 🔧 Removed local findItem() and deleteItem() implementations
