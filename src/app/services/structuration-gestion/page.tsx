import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structuration & Gestion d’Entreprises",
  description:
    "Organisation, procédures, reporting et outils de gestion adaptés à votre croissance. Cabinet non bancaire à Ouagadougou.",
};

export default function ServicePage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Structuration & Gestion d’Entreprises
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Nous mettons en place les bases d’une entreprise solide : organisation,
          responsabilisation, procédures et outils de suivi. Cabinet de conseil — non
          bancaire.
        </p>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">À qui s’adresse ce service</h2>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-white/75">
            <li>PME en croissance</li>
            <li>Entreprises en phase de formalisation ou de réorganisation</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-white/90">Bénéfices</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-white/75">
            <li>Processus plus fiables et meilleure coordination</li>
            <li>Reporting clair pour diriger et convaincre</li>
            <li>Outils simples et adaptés à votre réalité</li>
          </ul>
        </div>

        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">Processus</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Analyse",
              "Diagnostic",
              "Proposition",
              "Mise en place des outils",
              "Suivi et amélioration continue",
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
            Structurer mon entreprise
          </a>
        </div>
      </section>
    </div>
  );
}
