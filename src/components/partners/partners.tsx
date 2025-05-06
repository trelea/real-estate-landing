import React from "react";
import { PartnersCarousel } from "./partners-carousel";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";

interface Props {}

export const PartnersSection: React.FC<Props> = ({}) => {
  return (
    <article className="w-full flex flex-col gap-8">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-foreground">
        Partenerii noștri
      </h1>

      <PartnersCarousel>
        <CarouselContent className="w-full inset-shadow inset-shadow-white">
          {["maib", "micb", "victoria-bank", "exim-bank", "bcr"].map(
            (partner, key) => (
              <CarouselItem
                key={key}
                className="basis-1/2 sm:basis-1/3 xl:basis-1/4 w-full flex justify-center items-center h-80 sm:h-96 py-2"
              >
                <Image
                  src={`/assets/partners/${partner}.png`}
                  alt={partner}
                  width={500}
                  height={500}
                  className="h-full w-full object-contain p-4 sm:p-10 lg:p-16 grayscale hover:grayscale-0 transition duration-500 hover:scale-125"
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </PartnersCarousel>
    </article>
  );
};
