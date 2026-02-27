import { headers } from "next/headers";
import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot
};

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 6;

const memoryRate = new Map<string, { count: number; resetAt: number }>();

async function getClientIp(): Promise<string> {
  const h = await headers();
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const xrip = h.get("x-real-ip");
  return xrip || "unknown";
}

function rateLimitKey(ip: string) {
  return `contact:${ip}`;
}

function hitRateLimit(ip: string): boolean {
  const key = rateLimitKey(ip);
  const now = Date.now();
  const entry = memoryRate.get(key);

  if (!entry || now > entry.resetAt) {
    memoryRate.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  memoryRate.set(key, entry);
  return entry.count > RATE_MAX;
}

async function readPayload(req: Request): Promise<Payload> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await req.json()) as Payload;
    return body;
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    const get = (k: string) => {
      const v = form.get(k);
      return typeof v === "string" ? v : undefined;
    };
    return {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      service: get("service"),
      message: get("message"),
      company: get("company"),
    };
  }

  return {};
}

function validate(p: Payload) {
  const missing: string[] = [];
  if (!p.name) missing.push("name");
  if (!p.phone) missing.push("phone");
  if (!p.service) missing.push("service");
  if (!p.message) missing.push("message");
  return missing;
}

export async function POST(req: Request) {
  const ip = await getClientIp();

  if (hitRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 }
    );
  }

  const payload = await readPayload(req);

  if (payload.company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const missing = validate(payload);
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: "missing_fields", fields: missing },
      { status: 400 }
    );
  }

  // TODO: Envoi email (SMTP) sur VPS
  // - Ajouter nodemailer
  // - Configurer env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO
  // - Envoyer un email avec les informations
  // Pour l’instant, on journalise côté serveur.
  // Ne jamais logguer des données sensibles en production si non nécessaire.
  console.log("[CONTACT]", {
    ip,
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    service: payload.service,
    message: payload.message,
  });

  const accept = req.headers.get("accept") || "";
  if (accept.includes("text/html")) {
    return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
