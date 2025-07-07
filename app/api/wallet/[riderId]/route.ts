// /app/api/wallet/[riderId]/route.ts
import { NextResponse } from "next/server";

export async function GET(_: Request, context: { params: { riderId: string } }) {
  const { riderId } = context.params;
  return NextResponse.json({
    riderId,
    balance: 5200,
    currency: "NGN",
  });
}
