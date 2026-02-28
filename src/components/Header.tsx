import Image from "next/image";
import Link from "next/link";
import { SITE, toTelHref, toWhatsAppHref } from "@/lib/site";

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 11.9c0 4.7-3.8 8.6-8.6 8.6-1.4 0-2.7-.3-3.9-.9L4 20l.4-3.7c-.7-1.2-1.1-2.7-1.1-4.3C3.3 7.2 7.2 3.3 12 3.3c4.7 0 8.5 3.9 8.5 8.6Z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.6c.2-.3.5-.4.9-.3l.9.3c.3.1.5.4.5.7l-.1.9c0 .2-.1.4-.3.5l-.4.2c.5 1 1.3 1.8 2.3 2.3l.2-.4c.1-.2.3-.3.5-.3l.9-.1c.3 0 .6.2.7.5l.3.9c.1.4 0 .7-.3.9-.3.2-.6.3-.9.3-2.7-.2-5-2.4-5.2-5.2 0-.3.1-.7.3-.9Z"
        className="fill-current"
        opacity="0.9"
      />
    </svg>
  );
}

export function Header() {
  const logoVariant = (process.env.NEXT_PUBLIC_LOGO_VARIANT || "A").toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--brand-blue)]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          {logoVariant === "B" ? (
            <div className="relative">
              <Image
                src="/brand/logo.png"
                alt="Logo WENDYAM FINANCE"
                width={520}
                height={140}
                className="h-10 w-auto select-none sm:h-[52px]"
                sizes="(min-width: 640px) 208px, 160px"
                quality={95}
                priority
              />
            </div>
          ) : (
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[rgba(0,0,0,.06)] shadow-[0_10px_22px_rgba(0,0,0,.22)] sm:h-[52px] sm:w-[52px]">
              <div className="relative h-full w-full overflow-hidden rounded-full p-2.5 sm:p-3">
                <Image
                  src="/brand/logo.png"
                  alt="Logo WENDYAM FINANCE"
                  fill
                  className="select-none object-cover object-[50%_10%]"
                  sizes="52px"
                  quality={95}
                  priority
                />
              </div>
            </div>
          )}
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">{SITE.name}</div>
            <div className="text-[11px] text-white/70">{SITE.slogan}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link className="hover:text-white" href="/services">
            Services
          </Link>
          <Link className="hover:text-white" href="/a-propos">
            À propos
          </Link>
          <Link className="hover:text-white" href="/conformite">
            Conformité
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 text-xs text-white/75 sm:flex">
          <a
            href={toTelHref(SITE.phonePrimaryE164)}
            className="wf-btn inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-white/85 transition hover:bg-white/10"
          >
            Appeler
          </a>
          <a
            href={toWhatsAppHref(
              SITE.whatsappE164,
              "Bonjour WENDYAM FINANCE, je souhaite un accompagnement."
            )}
            className="wf-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-white/85 transition hover:bg-white/10"
            target="_blank"
            rel="noreferrer"
            aria-label="Contacter sur WhatsApp"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgba(152,0,1,.65),transparent)]" />
      </div>
    </header>
  );
}
