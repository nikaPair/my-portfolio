import Image from "next/image";
import TechnologyChipList from "@/shared/ui/TechnologyChipList/TechnologyChipList";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project,
  heading,
  logoWidth,
  logoHeight,
  projectLinks,
  isFirstProject,
  hasPreview,
  onOpenPreview,
  onOpenPreviewLink,
  openAriaLabel,
}) {
  return (
    <div
      className={`${styles.project} ${hasPreview ? styles.projectClickable : ""}`}
      style={{ backgroundColor: project.backgroundColor }}
      onClick={onOpenPreview}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && hasPreview) {
          event.preventDefault();
          onOpenPreview();
        }
      }}
      role={hasPreview ? "button" : undefined}
      tabIndex={hasPreview ? 0 : undefined}
      aria-label={hasPreview ? openAriaLabel : undefined}
    >
      <div className={styles.projectHeader}>
        <div className={styles.logoWrap}>
          <div
            className={styles.logo}
            style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}
          >
            <Image
              src={project.logo}
              alt={`${heading} logo`}
              width={logoWidth}
              height={logoHeight}
            />
          </div>
          <div className={styles.titleWrap}>
            <h3 className={styles.title}>{heading}</h3>
            <TechnologyChipList technologies={project.technologies} />
          </div>
        </div>
        <div className={styles.projectLinks}>
          {projectLinks.map((projectLink) =>
            projectLink.href ? (
              <button
                type="button"
                className={styles.projectLinkButton}
                key={projectLink.label}
                onClick={(event) => {
                  event.stopPropagation();
                  onOpenPreviewLink(projectLink);
                }}
              >
                {projectLink.label}
              </button>
            ) : (
              <span className={styles.projectLink} key={projectLink.label}>
                {projectLink.label}
              </span>
            ),
          )}
        </div>
      </div>
      <div className={`${styles.imageWrap} ${isFirstProject ? styles.imageWrapEnd : ""}`}>
        {isFirstProject ? (
          <>
            <Image
              src={project.image}
              alt={`${heading} — desktop`}
              width={700}
              height={400}
              sizes="(max-width: 1200px) 100vw, 700px"
              className={`${styles.image} ${styles.imageRight} ${styles.imageDesktopFirst}`}
            />
            <Image
              src="/images/projects/askbefore-tablet.png"
              alt={`${heading} — tablet`}
              width={700}
              height={400}
              sizes="(max-width: 1200px) 100vw, 700px"
              className={`${styles.image} ${styles.imageTabletFirst}`}
            />
          </>
        ) : (
          <Image
            src={project.image}
            alt={`${heading} screenshot`}
            width={700}
            height={400}
            sizes="(max-width: 1200px) 100vw, 700px"
            className={styles.image}
          />
        )}
      </div>
    </div>
  );
}
