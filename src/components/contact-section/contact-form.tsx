"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { formAction } from "./form-action";
import { useTranslations } from "next-intl";

interface Props {}

export const ContactForm: React.FC<Props> = ({}) => {
  const t = useTranslations("contacts.form");

  return (
    // @ts-ignore
    <form className="flex flex-col gap-6 w-full" action={formAction}>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm text-foreground/80">
            {t("name.label")}
          </Label>
          <Input
            required
            type="text"
            name="name"
            className="w-full text-sm focus-visible:ring-0 focus-visible:outline-none py-2.5 h-fit"
            placeholder={t("name.placeholder")}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm text-foreground/80">
            {t("phone.label")}
          </Label>
          <Input
            required
            type="tel"
            name="tel"
            className="w-full text-sm focus-visible:ring-0 focus-visible:outline-none py-2.5 h-fit"
            placeholder={t("phone.placeholder")}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-sm text-foreground/80">
            {t("email.label")}
          </Label>
          <Input
            required
            type="email"
            name="email"
            className="w-full text-sm focus-visible:ring-0 focus-visible:outline-none py-2.5 h-fit"
            placeholder={t("email.placeholder")}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        {t("btn")}
      </Button>
    </form>
  );
};
