"use client";

import { useMemo, useState } from "react";
import { SITE, toMailtoHref, toTelHref } from "@/lib/site";

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.5 4.5c.7-1 2-1.4 3.1-1l2 .7c.9.3 1.5 1.2 1.4 2.1l-.3 2a2 2 0 0 1-1.1 1.5l-.8.4a13.8 13.8 0 0 0 6.8 6.8l.4-.8a2 2 0 0 1 1.5-1.1l2-.3c1-.1 1.8.5 2.1 1.4l.7 2c.3 1.1 0 2.4-1 3.1-.8.6-1.8.9-2.8.8-8.7-.6-15.7-7.6-16.3-16.3-.1-1 .2-2 .8-2.8Z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 7.5A3 3 0 0 1 7.5 4.5h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
        className="stroke-current"
        strokeWidth="1.5"
      />
      <path
        d="m6.75 8.25 4.7 3.52a1.5 1.5 0 0 0 1.8 0l4.7-3.52"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TopBar() {
  const [open, setOpen] = useState(false);

  const allPhones = useMemo(() => {
    return [
      { e164: SITE.phonePrimaryE164, display: SITE.phonePrimaryDisplay, label: "Principal" },
      ...SITE.phonesOther.map((p) => ({ ...p, label: "" })),
    ];
  }, []);

  return (
    <div className="relative z-50 border-b border-white/10 bg-[rgba(7,26,47,.92)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(7,26,47,.82)]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 py-2 text-[12px] text-white/80 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-3 md:flex">
          <span className="font-semibold tracking-wide text-white/90">{SITE.legalName}</span>
          <span className="h-4 w-px bg-white/15" />
          <span className="text-white/70">{SITE.city}</span>
          <span className="h-4 w-px bg-white/15" />
          <span>RCCM: {SITE.rccm}</span>
          <span className="h-4 w-px bg-white/15" />
          <span>IFU: {SITE.ifu}</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={toTelHref(SITE.phonePrimaryE164)}
            className="wf-btn inline-flex items-center gap-2 rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-3 py-1 text-white shadow-[0_14px_34px_rgba(0,0,0,.22)] transition hover:bg-[color:var(--btn-primary-hover)]"
          >
            <IconPhone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{SITE.phonePrimaryDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="wf-btn inline-flex items-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-3 py-1 text-white shadow-[0_14px_34px_rgba(0,0,0,.22)] transition hover:bg-[color:var(--btn-primary-hover)]"
          >
            Autres numéros
          </button>

          <a
            href={toMailtoHref(SITE.email)}
            className="wf-btn hidden items-center gap-2 rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-3 py-1 text-white shadow-[0_14px_34px_rgba(0,0,0,.22)] transition hover:bg-[color:var(--btn-primary-hover)] sm:inline-flex"
          >
            <IconMail className="h-3.5 w-3.5" />
            {SITE.email}
          </a>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button
            aria-label="Fermer"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="wf-dark absolute right-4 top-4 w-[min(520px,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-[rgba(7,26,47,.92)] p-5 text-white shadow-2xl backdrop-blur sm:right-6 sm:top-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white/90">Autres numéros</div>
                <div className="mt-1 text-xs text-white/70">
                  Choisis le contact le plus adapté. Réponse sous 24–48h (jours ouvrables).
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="wf-btn rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-3 py-1 text-xs font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,.22)] transition hover:bg-[color:var(--btn-primary-hover)]"
              >
                Fermer
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {allPhones.map((p) => (
                <a
                  key={p.e164}
                  href={toTelHref(p.e164)}
                  className="wf-btn flex items-center justify-between rounded-xl border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-4 py-3 text-white shadow-[0_14px_34px_rgba(0,0,0,.18)] transition hover:bg-[color:var(--btn-primary-hover)]"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white/90">{p.display}</span>
                    <span className="text-xs text-white/65">{p.label || SITE.address}</span>
                  </div>
                  <span className="text-xs text-white/70">Appeler</span>
                </a>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
              {SITE.disclaimer}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
