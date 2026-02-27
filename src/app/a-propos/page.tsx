import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Vision, mission et valeurs de WENDYAM FINANCE, cabinet de conseil et d’accompagnement financier à Ouagadougou.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          À propos
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          Une expertise financière ancrée, une ambition panafricaine. Basé à {SITE.city},
          WENDYAM FINANCE accompagne PME, porteurs de projets et particuliers avec rigueur,
          transparence et confidentialité.
        </p>
      </section>

      <section className="mt-8 grid gap-3 lg:grid-cols-3">
        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8 lg:col-span-2">
          <h2 className="text-xl font-semibold text-white">Vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            Contribuer à une culture financière plus claire et plus structurée, pour des
            décisions mieux maîtrisées et un impact durable au Burkina Faso et en Afrique.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            Apporter un accompagnement financier fiable, méthodique et adapté aux réalités
            locales : analyser, structurer, sécuriser et accompagner la mise en œuvre.
          </p>
        </div>

        <div className="wf-reveal wf-card wf-dark wf-dark-card rounded-3xl border p-8">
          <h2 className="text-xl font-semibold text-white">Valeurs</h2>
          <div className="mt-5 grid gap-3">
            {[
              {
                t: "Transparence",
                d: "Informations claires, options argumentées, décisions éclairées.",
              },
              {
                t: "Rigueur",
                d: "Méthode, cohérence, livrables structurés et suivis.",
              },
              {
                t: "Confidentialité",
                d: "Protection des informations et respect de la discrétion.",
              },
              {
                t: "Impact local",
                d: "Solutions réalistes, adaptées au terrain et aux enjeux africains.",
              },
            ].map((v) => (
              <div key={v.t} className="wf-card wf-dark-card rounded-2xl border p-4">
                <div className="text-sm font-semibold text-white/90">{v.t}</div>
                <div className="mt-1 text-sm text-white/70">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-reveal wf-card wf-dark wf-dark-card mt-8 rounded-3xl border p-8 text-sm text-white/70">
        {SITE.disclaimer}
      </section>
    </div>
  );
}
