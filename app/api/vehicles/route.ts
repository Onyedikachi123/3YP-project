// /app/api/vehicles/route.ts
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json([
//     {
//       id: "car001",
//       make: "Toyota",
//       model: "Corolla",
//       color: "Silver",
//       plate: "TBWR206HF",
//       battery: 100,
//       health: "Healthy",
//     },
//   ]);
// }

import { NextResponse } from "next/server";
import { vehicles } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(vehicles);
}

export async function POST(req: Request) {
  const body = await req.json();
  const id = `car${Date.now()}`;
  vehicles.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}

