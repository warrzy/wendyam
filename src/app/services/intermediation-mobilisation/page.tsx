import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Intermédiation & Mobilisation de Financement",
  description:
    "Préparation du dossier, mise en relation et accompagnement dans la recherche de financement (cabinet non bancaire) à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <ServicePageShell
      title="Intermédiation & Mobilisation de Financement"
      description="Nous vous accompagnons dans la structuration des informations financières et la préparation d’un dossier crédible. Nous intervenons en cabinet de conseil — non bancaire."
      ctaLabel="Nous contacter"
      ctaHref="/contact"
    >
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">CADRAGE</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>PME recherchant un financement ou un partenaire</li>
            <li>Projets nécessitant un dossier solide</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-black/85">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>Dossier plus crédible et mieux présenté</li>
            <li>Argumentaire chiffré, cohérent et documenté</li>
            <li>Meilleure préparation aux échanges avec des partenaires</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">DÉROULÉ</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Diagnostic et cadrage",
              "Structuration du dossier",
              "Ciblage et mise en relation (selon contexte)",
              "Suivi et accompagnement",
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
