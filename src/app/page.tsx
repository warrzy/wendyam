import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-10 sm:pb-16">
      <section className="wf-reveal wf-card wf-hero wf-dark rounded-3xl border p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
              <span className="font-medium text-white">Autorité</span>
              <span className="text-white/25">•</span>
              <span className="font-medium text-white">Croissance</span>
              <span className="text-white/25">•</span>
              <span className="font-medium text-white">Confiance</span>
            </div>

            <div className="wf-hero-carousel mt-7" aria-label="Hero">
              <div className="wf-hero-carousel-slide wf-hero-carousel-text">
                <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl">
                  UN SOUTIEN,
                  <br />
                  UNE SOLUTION,
                  <br />
                  UN AVENIR
                </h1>
              </div>

              <div className="wf-hero-carousel-slide wf-hero-carousel-image" aria-hidden="true">
                <Image
                  src="/brand/pile-de-billets-franc-cfa-2h14ej8-removebg-preview.png"
                  alt="Illustration financière"
                  width={900}
                  height={700}
                  className="wf-hero-image wf-hero-image-plain"
                  priority
                />
              </div>
            </div>

            <div className="mt-6 wf-slogan-ticker wf-baseline-vertical" aria-label="Baseline">
              <div>
                <span>Structuration · dossiers solides · trajectoire claire</span>
                <span>Structuration · dossiers solides · trajectoire claire</span>
                <span>Structuration · dossiers solides · trajectoire claire</span>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Cabinet stratégique financier africain : cadrage, analyse, livrables et accompagnement.
            </p>
            <p className="mt-3 text-sm text-white/65">Ouagadougou — interventions sur demande.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demande"
                className="wf-btn inline-flex items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
              >
                Demander un accompagnement
              </a>
              <a
                href="/contact"
                className="wf-btn inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Contact rapide
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="wf-visual-static" aria-label="Méthode (secondaire)">
              <div className="text-xs font-semibold tracking-[0.24em] text-white/60">MÉTHODE</div>
              <div className="mt-3 text-lg font-semibold text-white/85">Trajectoire de mission</div>
              <div className="mt-5 grid gap-3">
                {[
                  { t: "Cadrage", d: "Objectif, périmètre, informations clés." },
                  { t: "Diagnostic", d: "Lecture financière, risques, leviers." },
                  { t: "Dossier", d: "Argumentaire, chiffrage, pièces & livrables." },
                  { t: "Accompagnement", d: "Suivi, ajustements, mise en œuvre." },
                ].map((s) => (
                  <div key={s.t} className="wf-visual-static-item">
                    <div className="text-sm font-semibold text-white/85">{s.t}</div>
                    <div className="mt-1 text-xs text-white/60">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="wf-card-marquee" aria-label="Services (défilement)">
              <div>
                {[
                  {
                    title: "Appui & Conseil",
                    desc: "Pilotage, analyse, décisions plus claires.",
                    href: "/services/appui-conseil-finance",
                  },
                  {
                    title: "Mobilisation",
                    desc: "Préparation du dossier, accompagnement non bancaire.",
                    href: "/services/intermediation-mobilisation",
                  },
                  {
                    title: "Investissement",
                    desc: "Étude, chiffrage, rentabilité, dossier solide.",
                    href: "/services/projets-investissement",
                  },
                  {
                    title: "Structuration",
                    desc: "Organisation, reporting, outils adaptés.",
                    href: "/services/structuration-gestion",
                  },
                ]
                  .concat([
                    {
                      title: "Appui & Conseil",
                      desc: "Pilotage, analyse, décisions plus claires.",
                      href: "/services/appui-conseil-finance",
                    },
                    {
                      title: "Mobilisation",
                      desc: "Préparation du dossier, accompagnement non bancaire.",
                      href: "/services/intermediation-mobilisation",
                    },
                    {
                      title: "Investissement",
                      desc: "Étude, chiffrage, rentabilité, dossier solide.",
                      href: "/services/projets-investissement",
                    },
                    {
                      title: "Structuration",
                      desc: "Organisation, reporting, outils adaptés.",
                      href: "/services/structuration-gestion",
                    },
                  ])
                  .map((s, idx) => (
                    <a
                      key={`${s.href}-${idx}`}
                      href={s.href}
                      className="wf-card group w-[240px] shrink-0 rounded-2xl border border-white/15 bg-white/5 p-5 text-white transition hover:border-white/25 hover:bg-white/10 sm:w-[260px]"
                    >
                      <div className="text-sm font-semibold text-white">{s.title}</div>
                      <div className="mt-2 text-sm text-white/70">{s.desc}</div>
                      <div className="mt-4 text-xs font-medium text-[color:var(--gold)]">Découvrir →</div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wf-reveal wf-card wf-surface mt-12 rounded-3xl border p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-1">
            <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
              CONFIANCE
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--brand-bordeaux)] sm:text-3xl">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              Un service conçu pour réduire les allers‑retours : rapide, clair, orienté exécution.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#demande"
                className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
              >
                Démarrer en 2 minutes
              </a>
              <a
                href="/contact"
                className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 transition hover:bg-black/[0.02]"
              >
                Parler à un conseiller
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {[
              { t: "Confidentialité", d: "Traitement discret et protection des données." },
              { t: "Rigueur", d: "Hypothèses explicites, traçabilité, cohérence." },
              { t: "Transparence", d: "Options comparées, décisions éclairées." },
              { t: "Livrables", d: "Dossier, plan financier, notes et recommandations." },
            ].map((i) => (
              <div key={i.t} className="wf-card rounded-2xl border border-black/10 bg-white/75 p-5">
                <div className="text-sm font-semibold text-[color:var(--brand-bordeaux)]">{i.t}</div>
                <div className="mt-2 text-sm text-black/65">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--brand-red)]">
            Qui sommes‑nous
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
            WENDYAM FINANCE est un cabinet de conseil et d’accompagnement financier basé à
            Ouagadougou, conçu pour répondre aux réalités des entreprises et des particuliers
            en Afrique. Nous privilégions une approche rigoureuse, documentée et orientée
            résultats.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Ancrage local • Ouagadougou
            </div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Méthode claire • livrables
            </div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Confidentialité • discrétion
            </div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Transparence • conformité
            </div>
          </div>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--brand-red)]">
            Notre méthode
          </h2>
          <div className="relative mt-6">
            <div className="absolute left-3 top-1 bottom-1 w-px bg-[rgba(152,0,1,.18)]" />
            <div className="grid gap-3">
              {[
                { t: "Analyse", d: "Cadrage de l’objectif et collecte des informations utiles." },
                { t: "Diagnostic", d: "Évaluation de la situation, des risques et des leviers." },
                { t: "Proposition", d: "Options claires, chiffrées et argumentées." },
                { t: "Accompagnement", d: "Mise en œuvre, suivi et ajustements." },
              ].map((step, idx) => (
                <div key={step.t} className="relative pl-10">
                  <div className="absolute left-0 top-5 grid h-6 w-6 place-items-center rounded-full border border-[rgba(152,0,1,.28)] bg-white text-xs font-semibold text-[color:var(--brand-red)]">
                    {idx + 1}
                  </div>
                  <div className="wf-card rounded-2xl border border-[rgba(152,0,1,.12)] bg-white p-4">
                    <div className="text-sm font-semibold text-black/85">{step.t}</div>
                    <div className="mt-1 text-sm text-black/60">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wf-reveal wf-card wf-dark mt-14 rounded-3xl border p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-1">
            <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--gold)]">
              CONFORMITÉ
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Conformité & Transparence
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Informations claires, données protégées, engagements explicites.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-white/85 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">SARL • Burkina Faso</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">RCCM: BF OUA 01 2025 B12 20168</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">IFU: 00294900X</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">Capital: 10 000 000 FCFA</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">Date: 16 décembre 2025</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">Régime fiscal: RSI</div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/75">
          WENDYAM FINANCE intervient en tant que cabinet de conseil et d’accompagnement financier et n’est pas un établissement bancaire, ni un établissement de crédit.
        </div>
      </section>

      <section
        id="demande"
        className="wf-reveal wf-card wf-surface mt-14 rounded-3xl border p-8"
      >
        <h2 className="text-xl font-semibold text-[color:var(--brand-red)]">Demander un accompagnement</h2>
        <p className="mt-3 text-sm text-black/65">
          Réponse sous 24–48h (jours ouvrables). Vos informations restent confidentielles.
        </p>

        <form
          className="mt-6 grid gap-4 md:grid-cols-2"
          method="post"
          action="/api/contact"
        >
          <input
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <label className="grid gap-2 text-sm text-black/70">
            Nom
            <input
              name="name"
              required
              className="wf-input h-12 rounded-2xl border px-4"
              placeholder="Votre nom"
            />
          </label>
          <label className="grid gap-2 text-sm text-black/70">
            Téléphone
            <input
              name="phone"
              required
              className="wf-input h-12 rounded-2xl border px-4"
              placeholder="Ex: +226 ..."
            />
          </label>
          <label className="grid gap-2 text-sm text-black/70 md:col-span-2">
            Service demandé
            <select
              name="service"
              required
              className="wf-input h-12 rounded-2xl border px-4"
              defaultValue=""
            >
              <option value="" disabled>
                Choisir un service
              </option>
              <option>Appui & Conseil en Finance</option>
              <option>Étude & Projets d’Investissement</option>
              <option>Structuration & Gestion d’Entreprises</option>
              <option>Intermédiation & Mobilisation de Financement</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-black/70 md:col-span-2">
            Description courte
            <textarea
              name="message"
              required
              rows={4}
              className="wf-input rounded-2xl border p-4"
              placeholder="Expliquez brièvement votre besoin..."
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
            >
              Recevoir un premier retour
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
