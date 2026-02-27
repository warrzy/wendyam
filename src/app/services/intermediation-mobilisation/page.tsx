import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intermédiation & Mobilisation de Financement",
  description:
    "Préparation du dossier, mise en relation et accompagnement dans la recherche de financement (cabinet non bancaire) à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Intermédiation & Mobilisation de Financement
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Nous vous accompagnons dans la structuration des informations financières et la
          préparation d’un dossier crédible. Nous intervenons en cabinet de conseil — non
          bancaire.
        </p>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-white/75">
            <li>PME recherchant un financement ou un partenaire</li>
            <li>Projets nécessitant un dossier solide</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-white/90">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-white/75">
            <li>Dossier plus crédible et mieux présenté</li>
            <li>Argumentaire chiffré, cohérent et documenté</li>
            <li>Meilleure préparation aux échanges avec des partenaires</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Diagnostic et cadrage",
              "Structuration du dossier",
              "Ciblage et mise en relation (selon contexte)",
              "Suivi et accompagnement",
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
            Préparer mon dossier
          </a>
        </div>
      </section>

      <section className="wf-reveal wf-card wf-dark wf-dark-card mt-8 rounded-3xl border p-6 text-sm text-white/70">
        WENDYAM FINANCE intervient en tant que cabinet de conseil et d’accompagnement
        financier et n’est pas un établissement bancaire, ni un établissement de crédit.
      </section>
    </div>
  );
}
