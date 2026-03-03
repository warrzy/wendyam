export const SITE = {
  name: "WENDYAM FINANCE",
  legalName: "WENDYAM FINANCE SARL",
  slogan: "UN SOUTIEN, UNE SOLUTION, UN AVENIR",
  values: "Intégrité, efficience, innovation",
  city: "Ouagadougou",
  country: "Burkina Faso",
  address: "10 BP 649 OUAGADOUGOU 10",
  email: "contact@wendyam-finance.com",
  phonePrimaryE164: "+22625465625",
  phonePrimaryDisplay: "+226 25 46 56 25",
  phonesOther: [
    { e164: "+22666648825", display: "+226 66 64 88 25" },
  ],
  rccm: "BF OUA 01 2025 B12 20168",
  ifu: "00294900X",
  capital: "10 000 000 FCFA",
  fiscalRegime: "RSI",
  manager: "Gérant Monsieur Kaboré",
  disclaimer:
    "Wendyam Finance intervient en tant que structure financière.",
} as const;

export function toTelHref(e164: string) {
  return `tel:${e164.replace(/\s+/g, "")}`;
}

export function toMailtoHref(email: string) {
  return `mailto:${email}`;
}
