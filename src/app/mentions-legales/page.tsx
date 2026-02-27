import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de WENDYAM FINANCE (SARL – Burkina Faso).",
};

export default function LegalPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Mentions légales
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Les informations ci-dessous sont fournies à titre de transparence et de conformité.
        </p>
      </section>

      <section className="wf-reveal wf-card wf-dark wf-dark-card mt-8 rounded-3xl border p-8">
        <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Dénomination: {SITE.name}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Forme juridique: SARL</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Pays / Ville: {SITE.country} – {SITE.city}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Adresse: {SITE.address}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">RCCM: {SITE.rccm}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">IFU: {SITE.ifu}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Capital social: {SITE.capital}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Date de constitution: {SITE.incorporationDate}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Régime fiscal: {SITE.fiscalRegime}</div>
          <div className="wf-card wf-dark-card rounded-2xl border p-4">Gérance: {SITE.manager}</div>
        </div>

        <div className="wf-card wf-dark-card mt-6 rounded-2xl border p-4 text-sm text-white/70">
          <div className="font-semibold text-white/90">Nature d’activité</div>
          <div className="mt-2">{SITE.disclaimer}</div>
        </div>

        <div className="wf-card wf-dark-card mt-6 rounded-2xl border p-4 text-xs text-white/65">
          Hébergement: à compléter selon votre prestataire (VPS / datacenter).<br />
          Propriété intellectuelle: les contenus du site ne peuvent être reproduits sans autorisation.
        </div>
      </section>
    </div>
  );
}
