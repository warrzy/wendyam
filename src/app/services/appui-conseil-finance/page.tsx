import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Appui & Conseil en Finance",
  description:
    "Pilotage financier, analyse et optimisation pour mieux décider. Cabinet de conseil non bancaire à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <ServicePageShell
      title="Appui & Conseil en Finance"
      description="Nous vous aidons à comprendre vos chiffres, structurer votre suivi financier et prendre des décisions sereines. Cabinet de conseil et d’accompagnement financier — non bancaire."
      ctaLabel="Nous contacter"
      ctaHref="/contact"
    >
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">CADRAGE</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>PME souhaitant améliorer leur pilotage, trésorerie et rentabilité</li>
            <li>Entrepreneurs préparant une phase de structuration ou de financement</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-black/85">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>Visibilité renforcée sur la trésorerie et les marges</li>
            <li>Indicateurs de pilotage adaptés à votre activité</li>
            <li>Décisions mieux argumentées et risques mieux encadrés</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">DÉROULÉ</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Analyse",
              "Diagnostic",
              "Proposition d’un plan d’amélioration",
              "Accompagnement et suivi",
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
