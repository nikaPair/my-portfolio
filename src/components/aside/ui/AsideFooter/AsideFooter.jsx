import Link from "next/link";
import styles from "./AsideFooter.module.css";

export default function AsideFooter({ linkedinAriaLabel = "LinkedIn" }) {
  return (
    <div className={styles.footer}>
      <span className={styles.footerLeft}>© 2026</span>
      <Link
        href="https://www.linkedin.com/in/nika-pair"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkedinAriaLabel}
        className={styles.footerLinkedinLink}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.footerLinkedinIcon}
        >
          <path
            d="M12.8803 0H1.19625C0.55781 0 0 0.446245 0 1.05916V12.4346C0 13.0508 0.55781 13.6 1.19625 13.6H12.8769C13.5187 13.6 14 13.0472 14 12.4346V1.05916C14.0037 0.446245 13.5188 0 12.8803 0ZM4.33969 11.3363H2.33406V5.2785H4.33969V11.3363ZM3.40625 4.35746H3.39187C2.75 4.35746 2.33437 3.8933 2.33437 3.31227C2.33437 2.72061 2.76094 2.26737 3.41719 2.26737C4.07344 2.26737 4.475 2.71727 4.48938 3.31227C4.48906 3.8933 4.07344 4.35746 3.40625 4.35746ZM11.6697 11.3363H9.6641V8.024C9.6641 7.23047 9.3722 6.68829 8.64656 6.68829C8.09219 6.68829 7.76406 7.05257 7.61812 7.40744C7.56344 7.53494 7.54875 7.70859 7.54875 7.88587V11.3363H5.54313V5.2785H7.54875V6.12151C7.84062 5.71777 8.29656 5.13673 9.3575 5.13673C10.6741 5.13673 11.67 5.97975 11.67 7.79723L11.6697 11.3363Z"
            fill="#999999"
          />
        </svg>
      </Link>
      <a href="mailto:nikapair@yandex.ru" className={styles.footerRight}>
        nikapair@yandex.ru
      </a>
    </div>
  );
}
