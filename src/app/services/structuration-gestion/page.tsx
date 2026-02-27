import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Structuration & Gestion d’Entreprises",
  description:
    "Organisation, procédures, reporting et outils de gestion adaptés à votre croissance. Cabinet non bancaire à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <ServicePageShell
      title="Structuration & Gestion d’Entreprises"
      description="Nous mettons en place les bases d’une entreprise solide : organisation, responsabilisation, procédures et outils de suivi. Cabinet de conseil — non bancaire."
      ctaLabel="Nous contacter"
      ctaHref="/contact"
    >
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">CADRAGE</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>PME en croissance</li>
            <li>Entreprises en phase de formalisation ou de réorganisation</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-black/85">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>Processus plus fiables et meilleure coordination</li>
            <li>Reporting clair pour diriger et convaincre</li>
            <li>Outils simples et adaptés à votre réalité</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">DÉROULÉ</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Analyse",
              "Diagnostic",
              "Proposition",
              "Mise en place des outils",
              "Suivi et amélioration continue",
            ].map((t) => (
              <div key={t} className="wf-card wf-soft-card rounded-2xl border p-4">
                <div className="text-sm font-semibold text-black/85">{t}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-black/55">
            Réponse sous 24–48h (jours ouvrables). Vos informations restent confidentielles.
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
