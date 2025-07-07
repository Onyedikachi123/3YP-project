// /app/api/stations/route.ts
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json([
//     {
//       id: "station001",
//       name: "Abuja Station 1",
//       address: "No 27, Monrovia street, Wuse 2, Abuja",
//     },
//     {
//       id: "station002",
//       name: "Abuja Station 2",
//       address: "Zone 6, Abuja",
//     },
//   ]);
// }

// GET all stations | POST new station

import { NextResponse } from "next/server";
import { stations } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(stations);
}

export async function POST(req: Request) {
  const body = await req.json();
  const id = `station${Date.now()}`;
  stations.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}

