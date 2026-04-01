import createBrandedIcon from "@/shared/lib/createBrandedIcon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return createBrandedIcon({ size, borderRadius: 40, fontSize: 100 });
}
