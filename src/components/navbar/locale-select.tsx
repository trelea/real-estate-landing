"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useLocale } from "next-intl";
import { LocaleType } from "@/i18n/routing";
import { useRouter } from "@/i18n/navigation";

interface Props {}

export const LocaleSelect: React.FC<Props> = ({}) => {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = React.useTransition();

  const onLocaleChange = React.useCallback(
    (locale: LocaleType) =>
      startTransition(() => {
        router.replace(
          {
            pathname:
              "/" +
              window.location.pathname.split(/\/(en|ro|ru)\//)[2] +
              window.location.search,
          },
          { locale }
        );
      }),
    [locale]
  );

  return (
    <Select
      onValueChange={onLocaleChange}
      disabled={isPending}
      defaultValue={locale}
    >
      <SelectTrigger className="border-none shadow-none m-0 p-0 text-sm">
        <SelectValue
          className="focus-visible:ring-0 focus:ring-0 hover:cursor-pointer ring-0 "
          placeholder={locale}
        />
      </SelectTrigger>
      <SelectContent className="min-w-fit border-none">
        <SelectGroup>
          <SelectItem value={"ro"} className="text-xs hover:cursor-pointer">
            Ro
          </SelectItem>
          <SelectItem value={"ru"} className="text-xs hover:cursor-pointer">
            Ru
          </SelectItem>
          <SelectItem value={"en"} className="text-xs hover:cursor-pointer">
            En
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
