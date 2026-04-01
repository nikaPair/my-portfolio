"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../Experience.module.css";

const PANEL_TRANSITION = { duration: 0.28, ease: "easeInOut" };
const TOGGLE_TRANSITION = { duration: 0.2, ease: "easeOut" };

export default function ExperienceItem({ item, isOpen, onToggle, t, details }) {
  return (
    <article className={styles.item}>
      <button
        type="button"
        className={styles.itemHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
      >
        <div className={styles.companyMeta}>
          <Image src={item.iconSrc} alt="" width={40} height={40} className={styles.itemIcon} />
          <div className={styles.itemBody}>
            <h3 className={styles.itemTitle}>{item.company}</h3>
            <p className={styles.itemRole}>{t(`items.${item.id}.role`)}</p>
          </div>
        </div>
        <div className={styles.itemPeriodWrap}>
          <span className={styles.itemPeriod}>{t(`items.${item.id}.period`)}</span>
          <motion.span
            className={styles.itemToggle}
            aria-hidden="true"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={TOGGLE_TRANSITION}
          >
            +
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={`${item.id}-panel`}
            className={styles.itemPanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={PANEL_TRANSITION}
            aria-hidden={!isOpen}
          >
            <div className={styles.itemPanelInner}>
              <div className={styles.metaRow}>
                <span className={styles.metaChip}>{t(`items.${item.id}.period`)}</span>
                <span className={styles.metaChip}>{t(`items.${item.id}.duration`)}</span>
                <span className={styles.metaChip}>{t(`items.${item.id}.location`)}</span>
              </div>

              <p className={styles.itemDescription}>{t(`items.${item.id}.description`)}</p>

              <h4 className={styles.sectionTitle}>{t("sectionTasks")}</h4>
              <ul className={styles.itemDescriptionList}>
                {details.map((detail, i) => (
                  <li key={`${item.id}-${i}`} className={styles.itemDescriptionItem}>
                    {detail}
                  </li>
                ))}
              </ul>

              <h4 className={styles.sectionTitle}>{t("sectionStack")}</h4>
              <div className={styles.stackList}>
                {item.stack.map((tech) => (
                  <span key={tech} className={styles.stackChip}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
