"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./ProjectPreviewModal.module.css";

export default function ProjectPreviewModal({ activePreviewLink, onClose }) {
  const t = useTranslations("projects.preview");

  if (!activePreviewLink) {
    return null;
  }

  return (
    <div className={styles.previewOverlay} onClick={onClose}>
      <div
        className={styles.previewModal}
        style={{ backgroundColor: activePreviewLink.backgroundColor ?? "#0d1324" }}
        role="dialog"
        aria-modal="true"
        aria-label={t("dialogLabel", { label: activePreviewLink.label })}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.previewHeader}>
          {activePreviewLink.logo ? (
            <Image
              src={activePreviewLink.logo}
              alt={`${activePreviewLink.label} logo`}
              width={activePreviewLink.logoWidth ?? 130}
              height={activePreviewLink.logoHeight ?? 32}
            />
          ) : (
            <p className={styles.previewTitle}>{activePreviewLink.label}</p>
          )}
          <button
            type="button"
            className={styles.previewCloseButton}
            onClick={onClose}
            aria-label={t("close")}
          >
            ×
          </button>
        </div>
        <iframe
          title={activePreviewLink.label}
          src={activePreviewLink.href}
          className={styles.previewFrame}
          loading="lazy"
        />
        <div className={styles.previewFooter}>
          <span className={styles.previewHint}>{t("hint")}</span>
          <Link
            href={activePreviewLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.previewLink}
          >
            {t("openInNewTab")}
          </Link>
        </div>
      </div>
    </div>
  );
}
