import { SITE_URL, AUTHOR_NAME, TELEGRAM_URL } from "@/constants/links";

export default function buildJsonLd({ locale, title, description }) {
  const canonicalUrl = `${SITE_URL}/${locale}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: title,
      url: canonicalUrl,
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: canonicalUrl,
      mainEntity: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: SITE_URL,
        jobTitle: "Frontend Developer",
        knowsAbout: ["React", "Next.js", "TypeScript", "Electron"],
        sameAs: [TELEGRAM_URL, "https://www.linkedin.com/in/nika-pair"],
      },
      description,
    },
  ];
}
