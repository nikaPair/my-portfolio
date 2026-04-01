"use client";

import React from "react";
import { useTranslations } from "next-intl";
import useModalBodyLock from "@/shared/lib/useModalBodyLock";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectPreviewModal from "./ProjectPreviewModal/ProjectPreviewModal";

export default function Project({ project }) {
  const tItems = useTranslations("projects.items");
  const tAria = useTranslations("projects.aria");

  const displayTitle = tItems(`${project.i18nKey}.title`);
  const displayHeading = tItems(`${project.i18nKey}.heading`);

  const isFirstProject = project.id === "askbefore.eu";
  const heading = isFirstProject ? displayHeading : displayTitle;

  const projectLinks = React.useMemo(() => {
    if (project.links?.length) return project.links;
    if (project.linkHref) return [{ label: project.linkLabel, href: project.linkHref }];
    if (project.linkLabelFromI18n)
      return [{ label: tItems(`${project.i18nKey}.linkLabel`), href: undefined }];
    return [];
  }, [project, tItems]);

  const logoWidth = project.logoWidth ?? 130;
  const logoHeight = project.logoHeight ?? 32;
  const [activePreviewLink, setActivePreviewLink] = React.useState(null);
  const primaryPreviewLink = projectLinks.find(({ href }) => Boolean(href)) ?? null;

  const openPreview = React.useCallback(
    (selectedLink) => {
      const targetLink = selectedLink?.href ? selectedLink : primaryPreviewLink;
      if (!targetLink) return;

      setActivePreviewLink({
        ...targetLink,
        backgroundColor: project.backgroundColor,
        logo: project.logo,
        logoWidth,
        logoHeight,
      });
    },
    [primaryPreviewLink, project.backgroundColor, project.logo, logoHeight, logoWidth],
  );

  const closePreview = React.useCallback(() => setActivePreviewLink(null), []);

  useModalBodyLock(Boolean(activePreviewLink), closePreview);

  const openAriaLabel = primaryPreviewLink
    ? tAria("openProject", { title: displayTitle })
    : undefined;

  return (
    <>
      <ProjectCard
        project={project}
        heading={heading}
        logoWidth={logoWidth}
        logoHeight={logoHeight}
        projectLinks={projectLinks}
        isFirstProject={isFirstProject}
        hasPreview={Boolean(primaryPreviewLink)}
        onOpenPreview={openPreview}
        onOpenPreviewLink={openPreview}
        openAriaLabel={openAriaLabel}
      />
      <ProjectPreviewModal activePreviewLink={activePreviewLink} onClose={closePreview} />
    </>
  );
}
