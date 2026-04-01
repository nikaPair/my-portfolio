import { headers } from "next/headers";
import { redirect } from "next/navigation";
import resolvePreferredLocale from "@/i18n/resolvePreferredLocale";

export default async function RootRedirectPage() {
  const requestHeaders = await headers();
  const locale = resolvePreferredLocale(requestHeaders.get("accept-language"));

  redirect(`/${locale}`);
}
