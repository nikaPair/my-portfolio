"use client";
import React from "react";
import styles from "./Projects.module.css";
import { COMPACT_PROJECTS_CONSTANTS, PROJECTS_CONSTANTS } from "./model/constants";
import Project from "./ui/Project/Project";
import CompactProject from "./ui/CompactProject/CompactProject";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.topProjects}>
        {PROJECTS_CONSTANTS.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.compactProjects}>
        {COMPACT_PROJECTS_CONSTANTS.map((project) => (
          <CompactProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
