import { routing } from "./routing";

export default function resolvePreferredLocale(acceptLanguageHeader) {
  if (!acceptLanguageHeader) {
    return routing.defaultLocale;
  }

  const headerLower = acceptLanguageHeader.toLowerCase();

  for (const locale of routing.locales) {
    if (headerLower.includes(locale)) {
      return locale;
    }
  }

  return routing.defaultLocale;
}
