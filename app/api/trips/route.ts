// /app/api/trips/route.ts
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json([
//     {
//       id: "trip001",
//       carId: "car001",
//       riderId: "rider001",
//       driverId: "driver001",
//       fareTotal: 12000,
//       pickup: "Abuja Station 1",
//       dropoff: "Abuja Station 2",
//     },
//   ]);
// }

import { trips } from "@/lib/mocks";
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(trips);
}
export async function POST(req: Request) {
  const body = await req.json();
  const id = `trip${Date.now()}`;
  trips.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}
