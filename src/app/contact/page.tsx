import type { Metadata } from "next";
import { SITE, toMailtoHref, toTelHref, toWhatsAppHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez WENDYAM FINANCE à Ouagadougou. Réponse sous 24–48h. WhatsApp et click-to-call disponibles.",
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-surface rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--brand-red)] sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/70 sm:text-base">
          Parlez-nous de votre situation. Réponse sous 24 à 48h (jours ouvrables).
        </p>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-[color:var(--brand-red)]">Formulaire</h2>
          <form className="mt-6 grid gap-4" method="post" action="/api/contact">
            <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

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

            <label className="grid gap-2 text-sm text-black/70">
              Email (optionnel)
              <input
                name="email"
                className="wf-input h-12 rounded-2xl border px-4"
                placeholder="Vous@exemple.com"
                type="email"
              />
            </label>

            <label className="grid gap-2 text-sm text-black/70">
              Service
              <select
                name="service"
                required
                className="wf-input h-12 rounded-2xl border px-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir
                </option>
                <option>Appui & Conseil en Finance</option>
                <option>Étude & Projets d’Investissement</option>
                <option>Structuration & Gestion d’Entreprises</option>
                <option>Intermédiation & Mobilisation de Financement</option>
                <option>Autre</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm text-black/70">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="wf-input rounded-2xl border p-4"
                placeholder="Décrivez brièvement votre besoin..."
              />
            </label>

            <button
              type="submit"
              className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
            >
              Envoyer la demande
            </button>

            <div className="text-xs text-black/55">
              Vos informations sont traitées de manière strictement confidentielle.
            </div>
          </form>
        </div>

        <div className="wf-reveal wf-card wf-surface rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-[color:var(--brand-red)]">Coordonnées</h2>
          <div className="mt-5 grid gap-3 text-sm text-black/70">
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Adresse: {SITE.address}, {SITE.city}, {SITE.country}
            </div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Téléphone principal: {" "}
              <a className="text-black hover:underline" href={toTelHref(SITE.phonePrimaryE164)}>
                {SITE.phonePrimaryDisplay}
              </a>
            </div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Autres numéros: {" "}
              <a className="text-black hover:underline" href={toTelHref(SITE.phonesOther[0].e164)}>
                {SITE.phonesOther[0].display}
              </a>
              {" • "}
              <a className="text-black hover:underline" href={toTelHref(SITE.phonesOther[1].e164)}>
                {SITE.phonesOther[1].display}
              </a>
              {" "}
              <span className="ml-2 rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs text-black/70">
                WhatsApp
              </span>
            </div>
            <div className="wf-card wf-soft-card rounded-2xl border p-4">
              Email: {" "}
              <a className="text-black hover:underline" href={toMailtoHref(SITE.email)}>
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={toWhatsAppHref(
                SITE.whatsappE164,
                "Bonjour WENDYAM FINANCE, je souhaite un accompagnement."
              )}
              target="_blank"
              rel="noreferrer"
              className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
            >
              WhatsApp
            </a>
            <a
              href={toTelHref(SITE.phonePrimaryE164)}
              className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 transition hover:bg-black/[0.02]"
            >
              Appeler
            </a>
          </div>

          <div className="wf-card mt-6 rounded-2xl border border-black/10 bg-white p-4 text-xs text-black/55">
            {SITE.disclaimer}
          </div>
        </div>
      </section>
    </div>
  );
}
