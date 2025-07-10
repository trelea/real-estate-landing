import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/i18n/routing";
import { BlogType } from "@/types";
import { CircleChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

interface Props {
  blog: BlogType;
  locale: LocaleType;
}

export const BlogCard: React.FC<Props> = async ({ blog, locale }) => {
  const t = await getTranslations("news");
  return (
    <Card className="rounded-2xl m-0 p-3 flex flex-col gap-8">
      <Link href={`/blogs/${blog.id}`} className="flex flex-col-reverse gap-4">
        <CardHeader className="flex flex-col-reverse gap-2 m-0 p-0">
          <CardTitle className="font-semibold text-xl text-foreground m-0 p-0">
            {blog.content[`title_${locale}`]}
          </CardTitle>
          <CardDescription className="text-xs text-foreground/50 m-0 p-0">
            {new Intl.DateTimeFormat(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(blog.created_at))}
          </CardDescription>
        </CardHeader>

        <CardContent className="m-0 p-0">
          <Image
            src={blog.thumbnail || "/assets/logo-blue.png"}
            alt={blog.content[`title_${locale}`] || "Logo"}
            width={500}
            height={500}
            quality={80}
            className={`w-full h-60 object-center rounded-lg shadow border/50  ${
              !blog.thumbnail ? "object-contain p-20" : "object-cover"
            }`}
            loading="lazy"
          />
        </CardContent>
      </Link>
      <CardFooter className="m-0 p-0 flex justify-end">
        <Link href={`/blogs/${blog.id}`} className="flex items-center gap-2">
          <span className="text-base text-primary">{t("more")}</span>
          <CircleChevronRight className="size-5 text-primary" />
        </Link>
      </CardFooter>
    </Card>
  );
};
