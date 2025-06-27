import React from "react";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { OfferCard } from "./offer-card";
import { OffersCarousel } from "./offers-carousel";
import { getHotOfferts } from "@/features/offerts/api";

interface Props {}

export const HotSection: React.FC<Props> = async ({}) => {
  const hotOfferts = await getHotOfferts({ limit: 20 });
  if (!hotOfferts.length) return null;

  return (
    <article className="w-full flex flex-col gap-8">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-foreground">
        Oferte Hot
      </h1>
      <OffersCarousel className="w-full">
        <CarouselContent className="w-full">
          {hotOfferts.map((offert, _) => (
            <CarouselItem
              key={offert.id}
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
