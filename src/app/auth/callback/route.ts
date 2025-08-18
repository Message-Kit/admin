import supa from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (code) {
        await supa.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(new URL("/", request.url));
}