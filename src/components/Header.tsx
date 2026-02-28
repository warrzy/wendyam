"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--brand-blue)]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 sm:h-[52px] sm:w-[52px]">
            <div className="relative h-full w-full">
              <Image
                src="/brand/logo.png"
                alt="Logo WENDYAM FINANCE"
                fill
                className="select-none object-contain"
                sizes="52px"
                quality={95}
                priority
              />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold tracking-wide text-white sm:text-sm">{SITE.name}</div>
            <div className="text-[10px] text-white/70 sm:text-[11px]">{SITE.slogan}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm md:flex">
          <Link
            className="wf-btn inline-flex items-center justify-center rounded-full border border-[rgba(200,162,74,.18)] bg-[color:var(--brand-red)] px-4 py-2 text-white transition hover:bg-[color:var(--brand-bordeaux)]"
            href="/"
          >
            Accueil
          </Link>
          <Link
            className="wf-btn inline-flex items-center justify-center rounded-full border border-[rgba(200,162,74,.18)] bg-[color:var(--brand-red)] px-4 py-2 text-white transition hover:bg-[color:var(--brand-bordeaux)]"
            href="/gouvernance"
          >
            Gouvernance
          </Link>
          <Link
            className="wf-btn inline-flex items-center justify-center rounded-full border border-[rgba(200,162,74,.18)] bg-[color:var(--brand-red)] px-4 py-2 text-white transition hover:bg-[color:var(--brand-bordeaux)]"
            href="/contact"
          >
            Contacts
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="wf-btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
            <path
              d="M5 7h14M5 12h14M5 17h14"
              className="stroke-current"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="hidden sm:block">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgba(152,0,1,.65),transparent)]" />
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="Fermer"
            className="absolute inset-0 bg-black/55"
            onClick={() => setMobileOpen(false)}
          />
          <div className="wf-dark absolute right-0 top-0 h-full w-[min(340px,86vw)] border-l border-white/10 bg-[rgba(7,26,47,.94)] p-5 text-white shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-white/90">Navigation</div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="wf-btn inline-flex h-9 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold text-white/85 transition hover:bg-white/10"
              >
                Fermer
              </button>
            </div>

            <nav className="mt-5 grid gap-2 text-sm">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="wf-btn rounded-2xl border border-[rgba(200,162,74,.18)] bg-[color:var(--brand-red)] px-4 py-3 text-white transition hover:bg-[color:var(--brand-bordeaux)]"
              >
                Accueil
              </Link>
              <Link
                href="/gouvernance"
                onClick={() => setMobileOpen(false)}
                className="wf-btn rounded-2xl border border-[rgba(200,162,74,.18)] bg-[color:var(--brand-red)] px-4 py-3 text-white transition hover:bg-[color:var(--brand-bordeaux)]"
              >
                Gouvernance
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="wf-btn rounded-2xl border border-[rgba(200,162,74,.18)] bg-[color:var(--brand-red)] px-4 py-3 text-white transition hover:bg-[color:var(--brand-bordeaux)]"
              >
                Contacts
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
