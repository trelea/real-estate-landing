import { defineRouting } from "next-intl/routing";

export type LocaleType = "ro" | "ru" | "en";

export const routing = defineRouting({
  locales: ["ro", "ru", "en"] as LocaleType[],
  defaultLocale: "ro" as LocaleType,
});
