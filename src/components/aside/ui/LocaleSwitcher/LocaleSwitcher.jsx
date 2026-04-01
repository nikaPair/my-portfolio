"use client";

import { useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("aside");

  const switchLocale = useCallback(
    (targetLocale) => {
      if (targetLocale === locale) {
        return;
      }
      window.location.href = `/${targetLocale}${pathname}`;
    },
    [locale, pathname],
  );

  return (
    <nav className={styles.nav} aria-label={t("localeSwitcherAria")}>
      <button
        type="button"
        className={`${styles.link} ${locale === "ru" ? styles.linkActive : ""}`}
        title={t("localeRuTitle")}
        onClick={() => switchLocale("ru")}
      >
        {t("localeRu")}
      </button>
      <span className={styles.separator} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`${styles.link} ${locale === "en" ? styles.linkActive : ""}`}
        title={t("localeEnTitle")}
        onClick={() => switchLocale("en")}
      >
        {t("localeEn")}
      </button>
    </nav>
  );
}
