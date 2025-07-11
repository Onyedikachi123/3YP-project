// /app/api/admin/logs/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, action: "Trip rerouted", by: "Super Admin", timestamp: "2025-07-06T10:10:00Z" },
    { id: 2, action: "Vehicle updated", by: "Admin", timestamp: "2025-07-06T09:30:00Z" },
  ]);
}
