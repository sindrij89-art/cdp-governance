import { NextRequest, NextResponse } from "next/server";

/* ------------------------------------------------------------------ */
/*  Lightweight in-memory rate limiter                                 */
/*  NOT production-grade — resets on server restart / cold start.      */
/*  Maximum 5 submissions per IP per 15-minute window.                 */
/* ------------------------------------------------------------------ */
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_MAX;
}

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */
interface OgiPayload {
  name: string;
  email: string;
  company: string;
  channel: string;
  description: string;
}

const VALID_CHANNELS = ["Email", "Phone", "LinkedIn", "Other"];

function validatePayload(body: OgiPayload): Record<string, string> | null {
  const fields: Record<string, string> = {};

  if (!body.name?.trim()) fields.name = "Name is required.";
  if (!body.email?.trim()) {
    fields.email = "Valid work email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    fields.email = "Valid work email address is required.";
  }
  if (!body.channel || !VALID_CHANNELS.includes(body.channel)) {
    fields.channel = "Primary outbound channel is required.";
  }
  if (!body.description?.trim()) {
    fields.description = "Please describe your current outbound.";
  }

  return Object.keys(fields).length > 0 ? fields : null;
}

/* ------------------------------------------------------------------ */
/*  POST /api/ogi-enquiry                                              */
/* ------------------------------------------------------------------ */
export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error: "RATE_LIMITED",
        message: "Too many submissions. Please try again later.",
      },
      { status: 429 }
    );
  }

  try {
    const body: OgiPayload = await request.json();

    const fieldErrors = validatePayload(body);
    if (fieldErrors) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", fields: fieldErrors },
        { status: 400 }
      );
    }

    const sanitised = {
      name: body.name.trim().slice(0, 200),
      email: body.email.trim().toLowerCase().slice(0, 254),
      company: (body.company || "").trim().slice(0, 200),
      channel: body.channel,
      description: (body.description || "").trim().slice(0, 2000),
      form_type: "ogi_fit_review",
      source_url: request.headers.get("referer") || null,
      user_agent: request.headers.get("user-agent") || null,
      created_at: new Date().toISOString(),
    };

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const res = await fetch(`${supabaseUrl}/rest/v1/pilot_applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(sanitised),
      });

      if (!res.ok) {
        console.error("Supabase insert failed:", res.status);
        return NextResponse.json(
          { ok: false, error: "SERVER_ERROR" },
          { status: 500 }
        );
      }

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    console.log("OGI fit review received (no backend configured).");

    return NextResponse.json(
      {
        ok: false,
        error: "NOT_CONFIGURED",
        message:
          "Supabase integration not configured. To enable, add SUPABASE_URL and SUPABASE_ANON_KEY to .env.local.",
      },
      { status: 501 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "VALIDATION_ERROR", fields: {} },
      { status: 400 }
    );
  }
}
