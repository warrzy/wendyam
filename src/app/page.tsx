import Image from "next/image";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <div className="overflow-x-hidden pb-10 sm:pb-16">
      <section className="wf-reveal wf-card wf-hero wf-dark rounded-3xl border p-6 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
              <span className="font-medium text-white">Autorité</span>
              <span className="text-white/25">•</span>
              <span className="font-medium text-white">Croissance</span>
              <span className="text-white/25">•</span>
              <span className="font-medium text-white">Confiance</span>
            </div>

            <div
              className="wf-hero-carousel mt-7"
              aria-label="Hero"
              style={
                {
                  "--wf-hero-slide-step": "5s",
                  "--wf-hero-slide-count": 5,
                } as CSSProperties
              }
            >
              <div className="wf-hero-carousel-slide wf-hero-carousel-text" style={{ "--wf-hero-slide-index": 0 } as CSSProperties}>
                <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl">
                  UN SOUTIEN,
                  <br />
                  UNE SOLUTION,
                  <br />
                  UN AVENIR
                </h1>
              </div>

              <div
                className="wf-hero-carousel-slide wf-hero-carousel-image"
                aria-hidden="true"
                style={{ "--wf-hero-slide-index": 1 } as CSSProperties}
              >
                <div className="wf-hero-media">
                  <Image
                    src="/brand/pile-de-billets-franc-cfa-2h14ej8-removebg-preview.png"
                    alt="Illustration"
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 520px, 92vw"
                    className="wf-hero-media-img"
                    priority
                  />
                </div>
              </div>

              <div
                className="wf-hero-carousel-slide wf-hero-carousel-image"
                aria-hidden="true"
                style={{ "--wf-hero-slide-index": 2 } as CSSProperties}
              >
                <div className="wf-hero-media">
                  <Image
                    src="/brand/finance-afrique.jpg"
                    alt="Illustration"
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 520px, 92vw"
                    className="wf-hero-media-img"
                  />
                </div>
              </div>

              <div
                className="wf-hero-carousel-slide wf-hero-carousel-image"
                aria-hidden="true"
                style={{ "--wf-hero-slide-index": 3 } as CSSProperties}
              >
                <div className="wf-hero-media">
                  <Image
                    src="/brand/bourses-afrique-696x462.jpg"
                    alt="Illustration"
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 520px, 92vw"
                    className="wf-hero-media-img"
                  />
                </div>
              </div>

              <div
                className="wf-hero-carousel-slide wf-hero-carousel-image"
                aria-hidden="true"
                style={{ "--wf-hero-slide-index": 4 } as CSSProperties}
              >
                <div className="wf-hero-media">
                  <Image
                    src="/brand/generation-716b8051-b934-479c-83e8-15ed8f122d80.webp"
                    alt="Illustration"
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 520px, 92vw"
                    className="wf-hero-media-img"
                  />
                </div>
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
                href="#contact"
                className="wf-btn inline-flex items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
              >
                Nous contacter
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
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
            À PROPOS
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--brand-bordeaux)] sm:text-3xl">
            Cabinet stratégique financier africain
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
            WENDYAM FINANCE est un cabinet de conseil et d’accompagnement financier basé à
            Ouagadougou. Notre rôle : clarifier la situation, structurer les informations utiles et
            produire des livrables exploitables pour la décision et l’exécution.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Ancrage local • Ouagadougou</div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Méthode claire • livrables</div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Confidentialité • discrétion</div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Transparence • conformité</div>
          </div>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
            SERVICES
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--brand-bordeaux)] sm:text-3xl">
            Domaines d’intervention
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                t: "Appui & Conseil en Finance",
                d: "Analyse, cadrage, arbitrage et recommandations.",
                href: "/services/appui-conseil-finance",
              },
              {
                t: "Intermédiation & Mobilisation",
                d: "Préparation des dossiers et accompagnement.",
                href: "/services/intermediation-mobilisation",
              },
              {
                t: "Étude & Projets d’Investissement",
                d: "Chiffrage, rentabilité, structuration du projet.",
                href: "/services/projets-investissement",
              },
              {
                t: "Structuration & Gestion d’Entreprises",
                d: "Outils, organisation, reporting et pilotage.",
                href: "/services/structuration-gestion",
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="wf-card group rounded-2xl border border-black/10 bg-white/75 p-5 text-black transition hover:bg-white"
              >
                <div className="text-sm font-semibold text-[color:var(--brand-bordeaux)]">{s.t}</div>
                <div className="mt-2 text-sm text-black/65">{s.d}</div>
                <div className="mt-4 text-xs font-medium text-[color:var(--brand-red)]">Détails →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
            MÉTHODE
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--brand-bordeaux)] sm:text-3xl">
            Notre méthode de travail
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

        <div className="wf-reveal wf-card wf-dark rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--gold)]">
            CONFORMITÉ
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Conformité & Transparence
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Informations claires, données protégées, engagements explicites.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">SARL • Burkina Faso</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">RCCM: BF OUA 01 2025 B12 20168</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">IFU: 00294900X</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">Capital: 10 000 000 FCFA</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">Date: 16 décembre 2025</div>
            <div className="wf-card rounded-2xl border border-white/15 bg-white/5 p-4">Régime fiscal: RSI</div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/75">
            WENDYAM FINANCE intervient en tant que cabinet de conseil et d’accompagnement financier et n’est pas un établissement bancaire, ni un établissement de crédit.
          </div>
        </div>
      </section>

      <section id="contact" className="wf-reveal wf-card wf-surface mt-14 rounded-3xl border p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
              CONTACT
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--brand-bordeaux)] sm:text-3xl">
              Nous contacter
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
              Expliquez brièvement votre besoin. Réponse sous 24 à 48h (jours ouvrables). Vos informations restent confidentielles.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-black/70">
              <div className="wf-card wf-soft-card rounded-2xl border p-4">Ouagadougou — interventions sur demande.</div>
              <div className="wf-card wf-soft-card rounded-2xl border p-4">WhatsApp et click-to-call disponibles.</div>
            </div>
          </div>

          <div>
            <form className="grid gap-4 md:grid-cols-2" method="post" action="/api/contact">
              <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
              <label className="grid gap-2 text-sm text-black/70">
                Nom
                <input name="name" required className="wf-input h-12 rounded-2xl border px-4" placeholder="Votre nom" />
              </label>
              <label className="grid gap-2 text-sm text-black/70">
                Téléphone
                <input name="phone" required className="wf-input h-12 rounded-2xl border px-4" placeholder="Ex: +226 ..." />
              </label>
              <label className="grid gap-2 text-sm text-black/70 md:col-span-2">
                Service
                <select name="service" required className="wf-input h-12 rounded-2xl border px-4" defaultValue="">
                  <option value="" disabled>
                    Choisir
                  </option>
                  <option>Appui & Conseil en Finance</option>
                  <option>Étude & Projets d’Investissement</option>
                  <option>Structuration & Gestion d’Entreprises</option>
                  <option>Intermédiation & Mobilisation de Financement</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-black/70 md:col-span-2">
                Message
                <textarea name="message" required rows={4} className="wf-input rounded-2xl border p-4" placeholder="Votre message..." />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
