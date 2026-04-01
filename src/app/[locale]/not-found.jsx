import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "16px",
        padding: "24px",
        textAlign: "center",
        fontFamily: "var(--font-inter)",
      }}
    >
      <h1 style={{ fontSize: "72px", fontWeight: 700, margin: 0, color: "var(--color-brand)" }}>
        404
      </h1>
      <h2 style={{ fontSize: "24px", fontWeight: 500, margin: 0 }}>{t("title")}</h2>
      <p style={{ fontSize: "16px", color: "var(--color-text-muted)", maxWidth: "400px" }}>
        {t("description")}
      </p>
      <Link
        href="/"
        style={{
          marginTop: "8px",
          padding: "12px 24px",
          borderRadius: "var(--radius-pill)",
          background: "var(--color-brand)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
