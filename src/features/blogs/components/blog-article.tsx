import { LocaleType } from "@/i18n/routing";
import { BlogType } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  blog: BlogType;
  locale: LocaleType;
}

export const BlogArticle: React.FC<Props> = ({ blog, locale }) => {
  return (
    <article className="flex flex-col gap-8 py-9 sm:py-14">
      <header className="text-center text-balance flex flex-col gap-4">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-[40px]">
          {blog.content[`title_${locale}`]}
        </h1>
        <p className="text-sm text-foreground/50 sm:text-base">
          {blog.content[`desc_${locale}`]}
        </p>
      </header>

      <Image
        src={blog.thumbnail || "/assets/logo-blue.png"}
        alt={blog.content[`title_${locale}`] || "Logo"}
        width={500}
        height={500}
        quality={80}
        loading="lazy"
        className={`w-full h-full max-h-[500px] object-center min-h-56 shadow-lg rounded-2xl border ${
          blog.thumbnail
            ? "object-cover"
            : "object-contain p-16 sm:p-32 md:p-40"
        }`}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: blog.content[`content_${locale}`],
        }}
      ></div>
    </article>
  );
};
