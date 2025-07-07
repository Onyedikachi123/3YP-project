// /app/api/riders/route.ts
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json([
//     {
//       id: "rider001",
//       name: "Jake Olatunde",
//       phone: "+2348169071955",
//       email: "jakeolatunde@gmail.com",
//       subscription: "Active",
//     },
//   ]);
// }

import { NextResponse } from "next/server";
import { riders } from "@/lib/mocks";

export async function GET() {
  return NextResponse.json(riders);
}

export async function POST(req: Request) {
  const body = await req.json();
  const id = `rider${Date.now()}`;
  riders.push({ id, ...body });
  return NextResponse.json({ id }, { status: 201 });
}

