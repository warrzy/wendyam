import { SITE, toWhatsAppHref } from "@/lib/site";

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

export function WhatsAppFloat() {
  return (
    <a
      href={toWhatsAppHref(
        SITE.whatsappE164,
        "Bonjour WENDYAM FINANCE, je souhaite un accompagnement."
      )}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(94,0,0,.92)] px-4 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur transition hover:bg-[rgba(94,0,0,.97)]"
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,#C8A45D_0%,#B8744E_100%)] text-[#2b0000]">
        <IconWhatsApp className="h-5 w-5" />
      </span>
      <span className="hidden sm:block">Discuter sur WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
