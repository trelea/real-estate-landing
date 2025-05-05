import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { OfferCard } from "./offer-card";
import { OffersCarousel } from "./offers-carousel";

interface Props {}

const offers: { price: number; street: string; area: number; rooms: number }[] =
  [
    { price: 45000, street: "Strada Alba Iulia", area: 55, rooms: 2 },
    { price: 80000, street: "Strada Bucuresti", area: 75, rooms: 3 },
    { price: 120000, street: "Strada Stefan Cel Mare", area: 100, rooms: 4 },
    { price: 35000, street: "Strada Ion Creanga", area: 40, rooms: 1 },
    { price: 75000, street: "Strada Pushkin", area: 70, rooms: 3 },
    { price: 65000, street: "Strada Dacia", area: 60, rooms: 2 },
    { price: 90000, street: "Strada Calea Iesilor", area: 80, rooms: 3 },
    { price: 50000, street: "Strada Vasile Alecsandri", area: 58, rooms: 2 },
    { price: 110000, street: "Strada Petru Rares", area: 95, rooms: 4 },
    { price: 60000, street: "Strada Mihai Eminescu", area: 63, rooms: 2 },
    { price: 95000, street: "Strada Tighina", area: 85, rooms: 3 },
    { price: 40000, street: "Strada Cuza Voda", area: 45, rooms: 1 },
    { price: 85000, street: "Strada Valea Trandafirilor", area: 78, rooms: 3 },
    { price: 70000, street: "Strada Grigore Vieru", area: 66, rooms: 2 },
    { price: 120000, street: "Strada Alexandru cel Bun", area: 102, rooms: 4 },
  ];

export const HotSection: React.FC<Props> = ({}) => {
  return (
    <article className="w-full flex flex-col gap-8">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-foreground">
        Oferte Hot
      </h1>
      <OffersCarousel className="w-full">
        <CarouselContent className="w-full">
          {offers.map((offer, _) => (
            <CarouselItem
              key={_}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full"
            >
              <OfferCard product={offer} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </OffersCarousel>
    </article>
  );
};
