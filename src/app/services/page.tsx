import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les services de conseil et d’accompagnement financier de WENDYAM FINANCE à Ouagadougou.",
};

const SERVICES = [
  {
    title: "Appui & Conseil en Finance",
    desc: "Pilotage, analyse et décisions financières plus claires.",
    href: "/services/appui-conseil-finance",
  },
  {
    title: "Étude & Réalisation de Projets d’Investissement",
    desc: "Étude, chiffrage, rentabilité, dossier solide.",
    href: "/services/projets-investissement",
  },
  {
    title: "Structuration & Gestion d’Entreprises",
    desc: "Organisation, reporting, outils de gestion adaptés.",
    href: "/services/structuration-gestion",
  },
  {
    title: "Intermédiation & Mobilisation de Financement",
    desc: "Préparation du dossier et accompagnement non bancaire.",
    href: "/services/intermediation-mobilisation",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-surface rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--brand-red)] sm:text-4xl">
          Nos services
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/70 sm:text-base">
          Choisissez l’accompagnement adapté à votre situation. Nous intervenons en tant que
          cabinet de conseil et d’accompagnement financier — non bancaire.
        </p>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {SERVICES.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="wf-reveal wf-card wf-soft-card rounded-3xl border p-8 transition hover:border-[rgba(15,42,68,.18)]"
          >
            <div className="text-lg font-semibold text-black/90">{s.title}</div>
            <div className="mt-2 text-sm text-black/60">{s.desc}</div>
            <div className="mt-6 text-xs font-medium text-[color:var(--gold)]">
              Voir le service →
            </div>
          </a>
        ))}
      </section>

      <section className="wf-reveal wf-card wf-surface mt-10 rounded-3xl border p-8">
        <h2 className="text-xl font-semibold text-[color:var(--brand-red)]">FAQ</h2>
        <div className="mt-5 grid gap-3">
          {[{
            q: "WENDYAM FINANCE est-il une banque ?",
            a: "Non. WENDYAM FINANCE est un cabinet de conseil et d’accompagnement financier. Nous ne sommes pas un établissement bancaire, ni un établissement de crédit.",
          },{
            q: "Travaillez-vous uniquement au Burkina Faso ?",
            a: "Nous sommes basés à Ouagadougou et intervenons également en Afrique selon les besoins et la nature des missions.",
          },{
            q: "Quels délais pour un premier retour ?",
            a: "En général sous 24 à 48h (jours ouvrables) après réception de votre demande.",
          }].map((i) => (
            <div key={i.q} className="wf-card wf-soft-card rounded-2xl border p-4">
              <div className="text-sm font-semibold text-black/85">{i.q}</div>
              <div className="mt-1 text-sm text-black/60">{i.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
