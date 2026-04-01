import Link from "next/link";
import styles from "./ContactActions.module.css";
import { TELEGRAM_URL } from "@/constants/links";

export default function ContactActions({ telegramLabel, availableText }) {
  return (
    <div className={styles.contact}>
      <Link
        href={TELEGRAM_URL}
        className={styles.telegramButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {telegramLabel}
      </Link>
      <div className={styles.available}>
        <div className={styles.circleOuter}>
          <div className={styles.circleInner} />
        </div>
        <span className={styles.availableText}>{availableText}</span>
      </div>
    </div>
  );
}
