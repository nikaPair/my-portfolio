import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL, AUTHOR_NAME } from "@/constants/links";
import buildJsonLd from "@/shared/lib/buildJsonLd";
import "./globals.css";

const OG_LOCALES = { ru: "ru_RU", en: "en_US" };

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "metadata" });
  const canonicalUrl = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: AUTHOR_NAME }],
    creator: AUTHOR_NAME,
    manifest: "/site.webmanifest",
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
      apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale] ?? "en_US",
      url: canonicalUrl,
      siteName: t("siteName"),
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.png",
          width: 1024,
          height: 714,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}`])),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: "metadata" });
  const jsonLd = buildJsonLd({
    locale,
    title: t("title"),
    description: t("description"),
  });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
