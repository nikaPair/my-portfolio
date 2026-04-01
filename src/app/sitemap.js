import { SITE_URL } from "@/constants/links";
import { routing } from "@/i18n/routing";

export default function sitemap() {
  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date("2026-04-02"),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
