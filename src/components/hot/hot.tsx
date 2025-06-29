import React from "react";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { OfferCard } from "./offer-card";
import { OffersCarousel } from "./offers-carousel";
import { getHotOfferts } from "@/features/offerts/api";
import { randomUUID } from "node:crypto";
import { getTranslations } from "next-intl/server";

interface Props {}

export const HotSection: React.FC<Props> = async ({}) => {
  const t = await getTranslations("hot");
  const hotOfferts = await getHotOfferts({ limit: 20 });
  if (!hotOfferts.length) return null;

  return (
    <article className="w-full flex flex-col gap-8">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-foreground">
        {t("hot")}
      </h1>
      <OffersCarousel className="w-full">
        <CarouselContent className="w-full">
          {hotOfferts.map((offert, _) => (
            <CarouselItem
              key={randomUUID()}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full"
            >
              <OfferCard offert={offert as any} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </OffersCarousel>
    </article>
  );
};
