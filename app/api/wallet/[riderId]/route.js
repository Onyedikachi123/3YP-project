// /app/api/wallet/[riderId]/route.ts
import { NextResponse } from "next/server";

export async function GET(_, context) { // ✅ Removed `: Request` and type on `context`
  const { riderId } = context.params;
  return NextResponse.json({
    riderId,
    balance: 5200,
    currency: "NGN",
  });
}

