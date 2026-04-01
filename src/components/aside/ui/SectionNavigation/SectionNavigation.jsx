"use client";

import useSectionScrollSpy from "@/shared/lib/useSectionScrollSpy";
import styles from "./SectionNavigation.module.css";

export default function SectionNavigation({ sections }) {
  const { activeSection, scrollToSection } = useSectionScrollSpy(sections);

  return (
    <nav className={styles.menu}>
      {sections.map((section) => {
        const isActive = section.id === activeSection;

        return (
          <button
            key={section.id}
            type="button"
            className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ""}`}
            onClick={() => scrollToSection(section.id)}
            aria-current={isActive ? "true" : undefined}
          >
            {section.label}
          </button>
        );
      })}
    </nav>
  );
}
