"use client";

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
            className="wf-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/85 transition hover:bg-white/10"
          >
            <IconPhone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{SITE.phonePrimaryDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          <a
            href={toMailtoHref(SITE.email)}
            className="wf-btn hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/85 transition hover:bg-white/10 sm:inline-flex"
          >
            <IconMail className="h-3.5 w-3.5" />
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
