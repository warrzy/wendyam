import Image from "next/image";
import type { CSSProperties } from "react";
import { SITE } from "@/lib/site";

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
                    src="/brand/lieux-africa-2-zsolt-adobe-stock-597216344-2993525705.jpg"
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

            <div className="mt-6 wf-fx-ticker" aria-label="Devises">
              <div>
                <span>EUR / XOF : 655,957</span>
                <span className="text-white/30">•</span>
                <span>USD / XOF : 603,410</span>
                <span className="text-white/30">•</span>
                <span>XOF / EUR : 0,001524</span>
                <span className="text-white/30">•</span>
                <span>XOF / USD : 0,001657</span>
                <span className="text-white/30">•</span>
                <span>EUR / XOF : 655,957</span>
                <span className="text-white/30">•</span>
                <span>USD / XOF : 603,410</span>
                <span className="text-white/30">•</span>
                <span>XOF / EUR : 0,001524</span>
                <span className="text-white/30">•</span>
                <span>XOF / USD : 0,001657</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-white/70">Ouagadougou et partout où vous êtes</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              STRUCTURE FINANCIÈRE AFRICAINE
            </p>

            <div className="mt-7 flex flex-col gap-2 sm:mt-8 sm:gap-3 sm:flex-row">
              <a
                href="#contact"
                className="wf-btn inline-flex h-10 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-5 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)] sm:h-11 sm:px-6"
              >
                Nous contacter
              </a>
              <a
                href="/contact"
                className="wf-btn inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-transparent px-4 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white sm:h-11 sm:px-5"
              >
                Contact rapide
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="wf-visual-static" aria-label="Rubrique">
              <div className="text-xs font-semibold tracking-[0.24em] text-white/60">RUBRIQUE</div>
              <div className="mt-3 text-lg font-semibold text-white/85">Nos offres</div>
              <div className="mt-5 grid gap-3">
                {[
                  "Mobile Money et transfert",
                  "Change manuel",
                  "Produits financiers",
                  "Accompagnement",
                ].map((t) => (
                  <div key={t} className="wf-visual-static-item">
                    <div className="text-sm font-semibold text-white/85">{t}</div>
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
            À propos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
            WENDYAM FINANCE est une structure financière basée à Ouagadougou.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/70 sm:text-base">
            Notre rôle : offrir des produits financiers adaptés à votre besoin de croissance.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Ancrage local • Ouagadougou</div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Méthode claire • livrables</div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Confidentialité • discrétion</div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">Transparence • conformité</div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-6 sm:p-8">
          <div className="text-xs font-semibold tracking-[0.22em] text-[color:var(--brand-red)]">
            VALEURS
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--brand-bordeaux)] sm:text-3xl">
            Nos Valeurs
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
            Intégrité • Efficacité • Loyauté
          </p>
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
