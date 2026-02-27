import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ServicePageShell({
  title,
  description,
  children,
  ctaLabel = "Nous contacter",
  ctaHref = "/contact",
}: Props) {
  return (
    <div className="py-10 sm:py-16">
      <section className="wf-reveal wf-card wf-hero wf-dark rounded-3xl border p-6 sm:p-10 lg:p-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
          <span className="font-medium text-white">SERVICE</span>
          <span className="text-white/25">•</span>
          <span className="font-medium text-white">WENDYAM FINANCE</span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={ctaHref}
            className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--btn-border)] bg-[color:var(--btn-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[color:var(--btn-primary-hover)]"
          >
            {ctaLabel}
          </a>
          <a
            href="/services"
            className="wf-btn inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Tous les services
          </a>
        </div>
      </section>

      {children}

      <section className="wf-reveal wf-card wf-dark mt-8 rounded-3xl border p-6 text-sm text-white/70">
        WENDYAM FINANCE intervient en tant que cabinet de conseil et d’accompagnement financier et n’est pas un établissement bancaire, ni un établissement de crédit.
      </section>
    </div>
  );
}
