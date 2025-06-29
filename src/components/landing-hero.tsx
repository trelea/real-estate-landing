import Image from "next/image";
import React from "react";
import { LandingHeroCard } from "./landing-hero-card";

interface Props {}

export const LandingHero: React.FC<Props> = ({}) => {
  return (
    <section className="relative pt-14 sm:pt-20 h-fit w-full">
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
      <div className="w-full px-6 sm:px-11 lg:px-20 flex justify-center items-center">
        <div className="relative h-full z-10 py-8 sm:py-14 flex flex-col justify-between gap-8 sm:gap-12 w-full max-w-7xl">
          <div className="flex justify-center">
            <h1 className="text-center font-semibold text-[32px] sm:text-[40px] text-background text-balance">
              Locuința potrivită.
              <br />
              Agenția potrivită.
            </h1>
          </div>

          <div className="grid grid-cols-6 lg:flex gap-2 sm:gap-4">
            <LandingHeroCard
              clasName="col-span-3 w-full"
              title="Apartamente"
              href={{ pathname: "/apartments" }}
              img={{
                src: "/assets/apartments.png",
                alt: "Apartments Category",
              }}
            />

            <LandingHeroCard
              clasName="col-span-3 sm:hidden"
              title="Spații comerciale"
              href={{ pathname: "/commercials" }}
              img={{
                src: "/assets/offices.png",
                alt: "Commercial Spaces Category",
              }}
            />

            <LandingHeroCard
              clasName="col-span-2 sm:hidden"
              title="Case"
              href={{ pathname: "/houses" }}
              img={{ src: "/assets/houses.png", alt: "Houses Category" }}
            />

            <LandingHeroCard
              clasName="sm:col-span-3 sm:block hidden"
              title="Case"
              href={{ pathname: "/houses" }}
              img={{ src: "/assets/houses.png", alt: "Houses Category" }}
            />

            <LandingHeroCard
              clasName="sm:col-span-2 sm:block hidden"
              title="Spații comerciale"
              href={{ pathname: "/commercials" }}
              img={{
                src: "/assets/offices.png",
                alt: "Commercial Spaces Category",
              }}
            />

            <LandingHeroCard
              clasName="col-span-2"
              title="Terenuri"
              href={{ pathname: "/terrains" }}
              img={{ src: "/assets/lands.png", alt: "Lands Category" }}
            />

            <LandingHeroCard
              clasName="col-span-2"
              title="Investiții"
              img={{
                src: "/assets/investments.png",
                alt: "Investments Category",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
