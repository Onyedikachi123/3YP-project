// /app/api/finance/summary/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    month: "July",
    totalRevenue: 12400000,
    tripsCompleted: 320,
    subscriptionsActive: 150,
  });
}
