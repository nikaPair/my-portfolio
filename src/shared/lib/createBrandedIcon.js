import { ImageResponse } from "next/og";
import { BRAND_COLOR, BRAND_MONOGRAM } from "@/constants/branding";

export default function createBrandedIcon({ size, borderRadius, fontSize }) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND_COLOR,
        borderRadius,
        color: "#fff",
        fontSize,
        fontWeight: 700,
        fontFamily: "sans-serif",
        letterSpacing: "-0.02em",
      }}
    >
      {BRAND_MONOGRAM}
    </div>,
    { ...size },
  );
}
