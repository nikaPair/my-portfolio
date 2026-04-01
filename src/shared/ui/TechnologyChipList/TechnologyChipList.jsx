import styles from "./TechnologyChipList.module.css";

export default function TechnologyChipList({ technologies }) {
  return (
    <div className={styles.technologies}>
      {technologies.map((tech) => (
        <span key={tech} className={styles.technology}>
          {tech}
        </span>
      ))}
    </div>
  );
}
