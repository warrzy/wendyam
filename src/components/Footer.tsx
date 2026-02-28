import Link from "next/link";
import { SITE, toMailtoHref, toTelHref, toWhatsAppHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="wf-footer mt-16 border-t border-white/10 bg-[color:var(--brand-blue)] text-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:px-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold tracking-wide">{SITE.legalName}</div>
          <div className="mt-2 text-sm text-white/70">{SITE.slogan}</div>
          <div className="mt-5 text-sm text-white/75">{SITE.disclaimer}</div>
        </div>

        <div className="text-sm text-white/75">
          <div className="font-medium text-white/90">Coordonnées</div>
          <div className="mt-3 grid gap-2">
            <div>{SITE.address}</div>
            <div>
              <a className="hover:text-white" href={toTelHref(SITE.phonePrimaryE164)}>
                {SITE.phonePrimaryDisplay}
              </a>
            </div>
            <div>
              <a
                className="hover:text-white"
                href={toWhatsAppHref(SITE.whatsappE164)}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {SITE.whatsappDisplay}
              </a>
            </div>
            <div>
              <a className="hover:text-white" href={toMailtoHref(SITE.email)}>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm text-white/75">
          <div className="font-medium text-white/90">Informations</div>
          <div className="mt-3 grid gap-2">
            <div>SARL – Burkina Faso</div>
            <div>RCCM: {SITE.rccm}</div>
            <div>IFU: {SITE.ifu}</div>
            <div>Capital: {SITE.capital}</div>
            <div>Date: {SITE.incorporationDate}</div>
            <div>Régime fiscal: {SITE.fiscalRegime}</div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <Link className="text-white/70 hover:text-white" href="/mentions-legales">
              Mentions légales
            </Link>
            <Link className="text-white/70 hover:text-white" href="/confidentialite">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-6 text-xs text-white/60 sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</div>
          <div className="hidden sm:block">Ouagadougou • {SITE.country}</div>
        </div>
      </div>
    </footer>
  );
}
