import createBrandedIcon from "@/shared/lib/createBrandedIcon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return createBrandedIcon({ size, borderRadius: 8, fontSize: 18 });
}
