// /app/api/drivers/route.ts
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json([
//     {
//       id: "driver001",
//       name: "Jake Olatunde",
//       ratings: 4.0,
//       station: "Lekki Station",
//       status: "Clock In",
//     },
//   ]);
// }
// GET all drivers | POST new driver

import { NextResponse } from "next/server";
import { drivers } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(drivers);
}

export async function POST(req: Request) {
  const body = await req.json();
  const id = `driver${Date.now()}`;
  drivers.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}
