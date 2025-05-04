import Image from "next/image";
import React from "react";
import { HeroCard } from "./hero-card";

interface Props {}

export const HeroBanner: React.FC<Props> = ({}) => {
  return (
    <section className="relative pt-14 sm:pt-20 h-fit">
      {/* PHONE VERSION IMAGE */}
      <Image
        src={"/assets/phone-hero-banner.png"}
        alt="Hero Banner Image"
        className="absolute brightness-50 sm:hidden"
        fill
        quality={80}
        loading="lazy"
      />
      {/* TABLET VERSION IMAGE */}
      <Image
        src={"/assets/tablet-hero-banner.png"}
        alt="Hero Banner Image"
        className="hidden sm:block absolute brightness-50 lg:hidden"
        fill
        quality={80}
        loading="lazy"
      />
      {/* DESTOP VERSION IMAGE */}
      <Image
        src={"/assets/desktop-hero-banner.png"}
        alt="Hero Banner Image"
        className="hidden lg:block absolute brightness-50"
        fill
        quality={80}
        loading="lazy"
      />
      <div className="relative h-full z-10 py-8 sm:py-14 px-6 sm:px-11 lg:px-20 flex flex-col justify-between gap-8 sm:gap-12">
        <div className="flex justify-center">
          <h1 className="text-center font-semibold text-[32px] sm:text-[40px] text-background text-balance">
            Locuința potrivită.
            <br />
            Agenția potrivită.
          </h1>
        </div>
        <div className="grid grid-cols-6 lg:flex w-full gap-2 sm:gap-4">
          <HeroCard
            clasName="col-span-3"
            title="Apartamente"
            img={{ src: "/assets/apartments.png", alt: "Apartments Category" }}
          />

          <HeroCard
            clasName="col-span-3 sm:hidden"
            title="Spații comerciale"
            img={{
              src: "/assets/offices.png",
              alt: "Commercial Spaces Category",
            }}
          />

          <HeroCard
            clasName="col-span-2 sm:hidden"
            title="Case"
            img={{ src: "/assets/houses.png", alt: "Houses Category" }}
          />

          <HeroCard
            clasName="sm:col-span-3 sm:block hidden"
            title="Case"
            img={{ src: "/assets/houses.png", alt: "Houses Category" }}
          />

          <HeroCard
            clasName="sm:col-span-2 sm:block hidden"
            title="Spații comerciale"
            img={{
              src: "/assets/offices.png",
              alt: "Commercial Spaces Category",
            }}
          />

          <HeroCard
            clasName="col-span-2"
            title="Terenuri"
            img={{ src: "/assets/lands.png", alt: "Lands Category" }}
          />

          <HeroCard
            clasName="col-span-2"
            title="Investiții"
            img={{
              src: "/assets/investments.png",
              alt: "Investments Category",
            }}
          />
        </div>
      </div>
    </section>
  );
};
