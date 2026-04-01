"use client";

import { useState } from "react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
import { EXPERIENCE_ENTRIES } from "./model/constants";
import ExperienceItem from "./ui/ExperienceItem";
import styles from "./Experience.module.css";

export default function Experience() {
  const [openedId, setOpenedId] = useState(null);
  const t = useTranslations("experience");
  const messages = useMessages();

  const toggleItem = (itemId) => {
    setOpenedId((current) => (current === itemId ? null : itemId));
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.list}>
          {EXPERIENCE_ENTRIES.map((item) => {
            const itemMessages = messages.experience?.items?.[item.id];
            const details = Array.isArray(itemMessages?.details) ? itemMessages.details : [];

            return (
              <ExperienceItem
                key={item.id}
                item={item}
                isOpen={openedId === item.id}
                onToggle={() => toggleItem(item.id)}
                t={t}
                details={details}
              />
            );
          })}

          <article className={styles.prospectCard}>
            <div className={styles.companyMeta}>
              <div className={styles.prospectIcon} aria-hidden="true">
                <Image src="/images/experience/question.svg" alt="" width={48} height={48} />
              </div>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{t("prospectTitle")}</h3>
                <p className={styles.itemDescription}>{t("prospectBody")}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
