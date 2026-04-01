import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { TELEGRAM_URL } from "@/constants/links";
import styles from "./ContactSection.module.css";

export default async function ContactSection({ locale }) {
  const tHome = await getTranslations({ locale, namespace: "home" });
  const tAside = await getTranslations({ locale, namespace: "aside" });

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>{tHome("contactTitle")}</h2>
      <Link
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactButton}
      >
        {tAside("telegram")}
      </Link>
    </section>
  );
}
