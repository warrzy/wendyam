import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données pour les demandes envoyées à WENDYAM FINANCE.",
};

export default function PrivacyPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Cette page décrit comment WENDYAM FINANCE traite les informations transmises via les
          formulaires du site.
        </p>
      </section>

      <section className="mt-8 grid gap-3">
        {[{
          t: "Données collectées",
          d: "Nom, téléphone, email (si fourni), service demandé et informations décrivant votre besoin.",
        },{
          t: "Finalité",
          d: "Répondre à votre demande, proposer un accompagnement et assurer le suivi des échanges.",
        },{
          t: "Durée de conservation",
          d: "Conservation limitée au temps nécessaire au traitement et au suivi, selon la nature de la demande.",
        },{
          t: "Sécurité",
          d: "Mesures organisationnelles et techniques raisonnables pour limiter l’accès aux informations.",
        },{
          t: "Vos droits",
          d: `Vous pouvez demander l’accès, la rectification ou l’opposition au traitement, dans la mesure applicable. Contact: ${SITE.email}.`,
        }].map((b) => (
          <div key={b.t} className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
            <div className="text-lg font-semibold text-white/90">{b.t}</div>
            <div className="mt-3 text-sm leading-relaxed text-white/75">{b.d}</div>
          </div>
        ))}

        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8 text-sm text-white/70">
          {SITE.disclaimer}
        </div>
      </section>
    </div>
  );
}
