export const SITE = {
  name: "WENDYAM FINANCE",
  legalName: "WENDYAM FINANCE SARL",
  slogan: "UN SOUTIEN, UNE SOLUTION, UN AVENIR",
  city: "Ouagadougou",
  country: "Burkina Faso",
  address: "10 BP 649 OUAGADOUGOU 10",
  email: "contact@wendyam-finance.com",
  phonePrimaryE164: "+22625465625",
  phonePrimaryDisplay: "+226 25 46 56 25",
  phonesOther: [
    { e164: "+22666648825", display: "+226 66 64 88 25" },
    { e164: "+22671921951", display: "+226 71 92 19 51" },
  ],
  whatsappE164: "+22671921951",
  whatsappDisplay: "+226 71 92 19 51",
  rccm: "BF OUA 01 2025 B12 20168",
  ifu: "00294900X",
  capital: "10 000 000 FCFA",
  fiscalRegime: "RSI",
  incorporationDate: "16 décembre 2025",
  manager: "Monsieur Yamba KABORÉ",
  disclaimer:
    "Wendyam Finance intervient en tant que structure financière.",
} as const;

export function toTelHref(e164: string) {
  return `tel:${e164.replace(/\s+/g, "")}`;
}

export function toMailtoHref(email: string) {
  return `mailto:${email}`;
}

export function toWhatsAppHref(e164: string, text?: string) {
  const digits = e164.replace(/\D/g, "");
  if (!text) return `https://wa.me/${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
