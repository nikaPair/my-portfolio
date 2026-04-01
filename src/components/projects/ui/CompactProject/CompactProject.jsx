"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import useModalBodyLock from "@/shared/lib/useModalBodyLock";
import TechnologyChipList from "@/shared/ui/TechnologyChipList/TechnologyChipList";
import styles from "./CompactProject.module.css";
import ProjectPreviewModal from "../Project/ProjectPreviewModal/ProjectPreviewModal";

export default function CompactProject({ project }) {
  const tItems = useTranslations("projects.items");
  const tAria = useTranslations("projects.aria");

  const displayTitle = tItems(`${project.i18nKey}.title`);
  const displayDescription = tItems(`${project.i18nKey}.description`);

  const [activePreviewLink, setActivePreviewLink] = React.useState(null);

  const openPreview = React.useCallback(() => {
    if (!project.linkHref) return;

    setActivePreviewLink({
      label: project.linkLabel ?? displayTitle,
      href: project.linkHref,
      backgroundColor: project.backgroundColor,
      logo: project.logo,
      logoWidth: project.logoWidth,
      logoHeight: project.logoHeight,
    });
  }, [
    project.backgroundColor,
    project.linkHref,
    project.linkLabel,
    project.logo,
    project.logoHeight,
    project.logoWidth,
    displayTitle,
  ]);

  const closePreview = React.useCallback(() => setActivePreviewLink(null), []);

  useModalBodyLock(Boolean(activePreviewLink), closePreview);

  return (
    <>
      <div
        className={styles.card}
        style={{ backgroundColor: project.backgroundColor }}
        onClick={openPreview}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPreview();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={tAria("openProject", { title: displayTitle })}
      >
        <div className={styles.content}>
          {project.logo ? (
            <div className={styles.logoWrap}>
              <Image
                src={project.logo}
                alt={`${displayTitle} logo`}
                width={project.logoWidth ?? 120}
                height={project.logoHeight ?? 24}
              />
            </div>
          ) : null}
          <h3 className={styles.title}>{displayTitle}</h3>
          <p className={styles.description}>{displayDescription}</p>
          <TechnologyChipList technologies={project.technologies} />
        </div>
        <div className={styles.bottomContent}>
          <span className={styles.linkLabel}>{project.linkLabel}</span>
          {project.image ? (
            <div className={styles.imageWrap}>
              <Image
                src={project.image}
                alt={`${displayTitle} preview`}
                width={520}
                height={210}
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          ) : null}
        </div>
      </div>
      <ProjectPreviewModal activePreviewLink={activePreviewLink} onClose={closePreview} />
    </>
  );
}
