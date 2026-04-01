"use client";

import { useTranslations } from "next-intl";
import { POINT_KEYS } from "./model/constants";
import AboutMediaCarousel from "./ui/AboutMediaCarousel";
import styles from "./About.module.css";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className={styles.aboutCard}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.content}>
        <AboutMediaCarousel t={t} />
        <div className={styles.points}>
          {POINT_KEYS.map((pointKey, index) => (
            <article
              key={pointKey}
              className={`${styles.point} ${index < POINT_KEYS.length - 1 ? styles.pointWithDivider : ""}`}
            >
              <h3 className={styles.pointTitle}>{t(`points.${pointKey}.title`)}</h3>
              <p className={styles.pointDescription}>{t(`points.${pointKey}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
