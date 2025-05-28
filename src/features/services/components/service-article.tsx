import { LocaleType } from "@/i18n/routing";
import { ServiceType } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  service: ServiceType;
  locale: LocaleType;
}

export const ServiceArticle: React.FC<Props> = ({ service, locale }) => {
  return (
    <article className="flex flex-col gap-8 py-9 sm:py-14">
      <header className="text-center text-balance flex flex-col gap-4">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-[40px]">
          {service.content[`title_${locale}`]}
        </h1>
        <p className="text-sm text-foreground/50 sm:text-base">
          {service.content[`desc_${locale}`]}
        </p>
      </header>

      <Image
        src={service.thumbnail || "/assets/logo-blue.png"}
        alt={service.content[`title_${locale}`] || "Logo"}
        width={500}
        height={500}
        quality={80}
        loading="lazy"
        className={`w-full h-full max-h-[500px] object-center min-h-56 shadow-lg rounded-2xl border ${
          service.thumbnail
            ? "object-cover"
            : "object-contain p-16 sm:p-32 md:p-40"
        }`}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: service.content[`content_${locale}`],
        }}
      ></div>
    </article>
  );
};
