"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Apartment, Commercial, House, Terrain } from "../types";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function OffertPageContact({
  offert,
}: {
  offert: Apartment | House | Commercial | Terrain;
}) {
  const t = useTranslations("common");
  const [showContact, setShowContact] = useState(false);
  return (
    <Card className="h-full w-full m-0 p-4">
      <CardHeader className="flex items-center gap-6 m-0 p-0">
        <CardTitle>
          <div>
            <Avatar className="h-[80px] w-[80px] md:h-24 md:w-24">
              <AvatarImage
                src={offert.user.profile.thumbnail as string}
                className="aspect-square object-cover object-center h-[80px] w-[80px] md:h-24 md:w-24"
              />
              <AvatarFallback>
                {offert.user.profile.surname.at(0)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </CardTitle>
        <CardDescription className="flex flex-col gap-0">
          <h3 className="text-base md:text-lg font-semibold">
            {offert.user.profile.surname} {offert.user.profile.name}
          </h3>
          <h6 className="text-xs md:text-sm text-gray-500 font-medium">
            {t("agent_imobiliar")}
          </h6>
          {showContact ? (
            <Link
              className="text-base md:text-lg lg:text-xl font-semibold text-primary"
              href={`tel:${offert.user.profile.contact}`}
              target="_blank"
            >
              {offert.user.profile.contact?.replace("+373", "0")}
            </Link>
          ) : (
            <h6 className="text-sm md:text-base font-semibold text-primary">
              {offert.user.profile.contact?.replace("+373", "0").slice(0, 4)}
              *****
            </h6>
          )}

          <div className="flex flex-col gap-1">
            {!showContact && (
              <Button
                className="w-full"
                onClick={() => {
                  setShowContact(true);
                }}
              >
                {t("show_contact")}
              </Button>
            )}

            <Button className="w-full" variant="outline">
              <Link href={`tel:${offert.user.profile.contact}`} target="_blank">
                {t("request_call")}
              </Link>
            </Button>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
