import { getImageProps } from "next/image";
import React from "react";
import { LandingHeroCard } from "./landing-hero-card";
import { getTranslations } from "next-intl/server";

interface Props {}

export const LandingHero: React.FC<Props> = async ({}) => {
  const t = await getTranslations("banner");

  // This is the LCP element. It is rendered as a single <picture> rather than
  // three breakpoint-switched <Image>s on purpose: with three of them, making
  // the banner eager would download all three (CSS `hidden` does not stop an
  // eager <img> from loading), while keeping them lazy delayed the LCP paint.
  // <source media> lets the browser pick exactly one candidate and fetch it
  // immediately at high priority.
  const banner = (src: string, sizes: string) =>
    getImageProps({
      src,
      alt: "Hero Banner Image",
      fill: true,
      // The banner is rendered at `brightness-50` behind headline text, so it
      // is decorative. q65 is indistinguishable here and costs ~40% fewer
      // bytes than q80 on the LCP element.
      quality: 65,
      sizes,
    }).props;

  const phone = banner("/assets/phone-hero-banner.png", "100vw");
  const tablet = banner("/assets/tablet-hero-banner.png", "100vw");
  // `sizes` is a CSS-pixel hint that the browser multiplies by DPR, so "100vw"
  // made every retina desktop pick the 3840w candidate (273KB). The fixed
  // 960px cap resolves to the 1920w candidate at DPR2 (~112KB) and trades a
  // little sharpness on a darkened backdrop for less time-to-LCP.
  const desktop = banner(
    "/assets/desktop-hero-banner.png",
    "(max-width: 1023px) 100vw, 960px",
  );

  return (
    <section className="relative pt-10 sm:pt-12 h-fit w-full">
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet={phone.srcSet}
          sizes={phone.sizes}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={tablet.srcSet}
          sizes={tablet.sizes}
        />
        <img
          {...desktop}
          className="absolute brightness-50"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="w-full px-6 sm:px-11 lg:px-20 flex justify-center items-center">
        <div className="relative h-full z-10 py-10 sm:py-14 flex flex-col justify-between gap-8 sm:gap-12 w-full max-w-7xl">
          <div className="flex justify-center">
            <h1 className="text-center font-semibold text-[32px] sm:text-[56px] text-background text-balance">
              {t("title")}
              {/* <br />
              {t("subtitle")} */}
            </h1>
          </div>

          <div className="grid grid-cols-6 lg:flex gap-2 sm:gap-4">
            <LandingHeroCard
              clasName="col-span-3 w-full"
              title={t("apartments")}
              href={{ pathname: "/apartments" }}
              img={{
                src: "/assets/apartments.png",
                alt: "Apartments Category",
              }}
            />

            <LandingHeroCard
              clasName="col-span-3 sm:hidden"
              title={t("commercial_spaces")}
              href={{ pathname: "/commercials" }}
              img={{
                src: "/assets/offices.png",
                alt: "Commercial Spaces Category",
              }}
            />

            <LandingHeroCard
              clasName="col-span-2 sm:hidden"
              title={t("houses")}
              href={{ pathname: "/houses" }}
              img={{ src: "/assets/houses.png", alt: "Houses Category" }}
            />

            <LandingHeroCard
              clasName="sm:col-span-3 sm:block hidden"
              title={t("houses")}
              href={{ pathname: "/houses" }}
              img={{ src: "/assets/houses.png", alt: "Houses Category" }}
            />

            <LandingHeroCard
              clasName="sm:col-span-2 sm:block hidden"
              title={t("commercial_spaces")}
              href={{ pathname: "/commercials" }}
              img={{
                src: "/assets/offices.png",
                alt: "Commercial Spaces Category",
              }}
            />

            <LandingHeroCard
              clasName="col-span-2"
              title={t("lands")}
              href={{ pathname: "/terrains" }}
              img={{ src: "/assets/lands.png", alt: "Lands Category" }}
            />

            <LandingHeroCard
              clasName="col-span-2"
              title={t("investments")}
              href={{ pathname: "https://dialoginvest.md/" }}
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
