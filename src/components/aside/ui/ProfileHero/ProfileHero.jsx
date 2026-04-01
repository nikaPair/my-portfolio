import Image from "next/image";
import styles from "./ProfileHero.module.css";
import SectionNavigation from "../SectionNavigation/SectionNavigation";

export default function ProfileHero({ sections, heroTitle, heroDescription, avatarAlt }) {
  return (
    <>
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          <Image
            src="/images/avatar.png"
            alt={avatarAlt}
            width={100}
            height={100}
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.mobileNavigation}>
          <SectionNavigation sections={sections} />
        </div>
      </div>

      <div className={styles.text}>
        <h1 className={styles.title}>{heroTitle}</h1>
        <p className={styles.description}>{heroDescription}</p>
      </div>
    </>
  );
}
