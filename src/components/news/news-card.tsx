import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "@/i18n/navigation";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import { BlogType } from "@/types";
import { getLocale, getTranslations } from "next-intl/server";

interface Props {
  blog: BlogType;
}

export const NewsCard: React.FC<Props> = async ({
  blog: { thumbnail, created_at, content, id },
}) => {
  const locale = await getLocale();
  const t = await getTranslations("news");
  return (
    <Card className="m-0 p-2 shadow rounded-2xl gap-4 h-full">
      <Image
        src={thumbnail || "/assets/logo-blue.png"}
        alt={content.title_ro}
        width={500}
        height={228}
        className={`h-56 w-full shadow rounded-xl ${
          thumbnail ? "object-cover" : "p-20 object-contain"
        }`}
      />
      <div className="flex-col flex gap-8 justify-between h-full">
        <CardHeader className="m-0 p-0 flex flex-col-reverse text-balance gap-2">
          <CardTitle className="font-semibold text-lg md:text-xl">
            {/* @ts-ignore */}
            {content[`title_${locale}`]}
          </CardTitle>
          <CardDescription className="text-xs">
            {new Intl.DateTimeFormat(locale, {
              dateStyle: "medium",
            }).format(new Date(created_at))}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end w-full m-0 p-0 px-2 pb-4">
          <Link
            href={`blogs/${id}`}
            className="flex gap-1 items-center text-[#006AFF]"
          >
            <span className="text-base">{t("more")}</span>
            <CircleArrowRight className="size-5" />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};
