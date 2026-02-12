import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not set" },
      { status: 500 }
    );
  }

  const providedSecret =
    request.headers.get("x-revalidate-secret") ??
    new URL(request.url).searchParams.get("secret");

  if (!providedSecret || providedSecret !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidateTag("companies");
  return NextResponse.json({ ok: true, revalidated: ["companies"] });
};


