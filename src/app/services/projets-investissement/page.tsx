import type { Metadata } from "next";
import { ServicePageShell } from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Projets d’Investissement",
  description:
    "Étude, chiffrage, rentabilité et dossier structuré pour vos projets d’investissement à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <ServicePageShell
      title="Étude & Réalisation de Projets d’Investissement"
      description="De l’idée au dossier crédible : hypothèses, chiffrage, scénarios, analyse de rentabilité et plan de déploiement."
      ctaLabel="Nous contacter"
      ctaHref="/contact"
    >
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">CADRAGE</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>Porteurs de projets</li>
            <li>PME lançant un investissement (extension, équipement, nouvelle activité)</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-black/85">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-black/70">
            <li>Dossier structuré et défendable</li>
            <li>Clarté sur coûts, revenus, rentabilité et risques</li>
            <li>Meilleure préparation à la mobilisation de partenaires</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">DÉROULÉ</div>
          <h2 className="mt-3 text-xl font-semibold text-[color:var(--brand-bordeaux)]">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Cadrage et collecte d’informations",
              "Diagnostic et scénarios",
              "Modélisation et analyse",
              "Dossier final et accompagnement",
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
