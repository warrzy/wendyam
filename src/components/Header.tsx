import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

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
      </div>

      <div className="hidden sm:block">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgba(152,0,1,.65),transparent)]" />
      </div>
    </header>
  );
}
