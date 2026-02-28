import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gouvernance",
  description: "Informations de gouvernance de WENDYAM FINANCE.",
};

export default function GouvernancePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-hero wf-dark rounded-3xl border p-6 sm:p-10 lg:p-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
          <span className="font-medium text-white">GOUVERNANCE</span>
          <span className="text-white/25">•</span>
          <span className="font-medium text-white">{SITE.legalName}</span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Gouvernance
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Page en cours de finalisation.
        </p>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
            DIRIGEANT
          </div>
          <div className="mt-3 text-lg font-semibold text-[color:var(--brand-bordeaux)]">
            {SITE.manager}
          </div>
          <div className="mt-4 text-sm text-black/70">
            {SITE.disclaimer}
          </div>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
            IDENTIFICATION
          </div>
          <div className="mt-4 grid gap-2 text-sm text-black/70">
            <div>RCCM: {SITE.rccm}</div>
            <div>IFU: {SITE.ifu}</div>
            <div>Capital: {SITE.capital}</div>
            <div>Date: {SITE.incorporationDate}</div>
            <div>Régime fiscal: {SITE.fiscalRegime}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
