import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets d’Investissement",
  description:
    "Étude, chiffrage, rentabilité et dossier structuré pour vos projets d’investissement. Cabinet non bancaire à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Étude & Réalisation de Projets d’Investissement
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          De l’idée au dossier crédible : hypothèses, chiffrage, scénarios, analyse de
          rentabilité et plan de déploiement. Cabinet de conseil — non bancaire.
        </p>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-white/75">
            <li>Porteurs de projets</li>
            <li>PME lançant un investissement (extension, équipement, nouvelle activité)</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-white/90">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-white/75">
            <li>Dossier structuré et défendable</li>
            <li>Clarté sur coûts, revenus, rentabilité et risques</li>
            <li>Meilleure préparation à la mobilisation de partenaires</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Cadrage et collecte d’informations",
              "Diagnostic et scénarios",
              "Modélisation et analyse",
              "Dossier final et accompagnement",
            ].map((t) => (
              <div key={t} className="wf-card wf-dark-card rounded-2xl border p-4">
                <div className="text-sm font-semibold text-white/90">{t}</div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="wf-btn mt-6 inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,.22)] transition hover:bg-[color:var(--btn-primary-hover)]"
          >
            Soumettre un projet
          </a>
        </div>
      </section>
    </div>
  );
}
