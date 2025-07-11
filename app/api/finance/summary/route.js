// /app/api/finance/summary/route.ts
// ✅ Changed filename from `.ts` to `.js`
import { NextResponse } from "next/server";

// ✅ Removed all TypeScript-specific syntax (none present in this case)
export async function GET() {
  return NextResponse.json({
    month: "July",
    totalRevenue: 12400000,
    tripsCompleted: 320,
    subscriptionsActive: 150,
  });
}

