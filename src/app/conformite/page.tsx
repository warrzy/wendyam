import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agréments & Conformité",
  description:
    "Informations légales et engagements de conformité et confidentialité de WENDYAM FINANCE (SARL – Burkina Faso).",
};

export default function CompliancePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Agréments & Conformité
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          La confiance se construit sur des informations claires. Nous affichons nos
          références et rappelons la nature exacte de nos activités.
        </p>
      </section>

      <section className="mt-8 grid gap-3 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">Informations légales</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
            <div className="wf-card wf-dark-card rounded-2xl border p-4">
              Forme juridique: SARL
            </div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">
              Pays / Ville: {SITE.country} – {SITE.city}
            </div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">RCCM: {SITE.rccm}</div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">IFU: {SITE.ifu}</div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">Capital: {SITE.capital}</div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">Valeurs: {SITE.values}</div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">Régime fiscal: {SITE.fiscalRegime}</div>
            <div className="wf-card wf-dark-card rounded-2xl border p-4">Adresse: {SITE.address}</div>
          </div>
        </div>

        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">Mention légale</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            {SITE.disclaimer}
          </p>

          <h3 className="mt-8 text-base font-semibold text-white/90">Protection des données</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Nous collectons uniquement les informations nécessaires pour traiter votre
            demande (nom, téléphone, email si fourni, et éléments décrivant votre besoin).
            Elles ne sont pas partagées à des tiers sans nécessité liée au traitement.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <a className="text-white/70 hover:text-white" href="/confidentialite">
              Politique de confidentialité
            </a>
            <a className="text-white/70 hover:text-white" href="/mentions-legales">
              Mentions légales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
