import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const AboutUsSection = async () => {
  const t = await getTranslations("about");

  return (
    <article className="w-full xl:flex xl:gap-14">
      <Image
        src={"/assets/aboutus.png"}
        alt="About Us"
        width={1000}
        height={1000}
        loading="lazy"
        className="hidden xl:block flex-1 object-contain shadow-lg rounded-3xl max-h-[500px]"
      />
      <Card className="p-6 sm:p-0 m-0 shadow border/75 rounded-2xl sm:border-none sm:shadow-none xl:flex-1 bg-background/[0.5%] sm:bg-transparent">
        <CardHeader className="m-0 p-0">
          <CardTitle className="font-bold text-2xl sm:text-4xl">
            {t("title")}
          </CardTitle>
          <CardDescription className="m-0 p-0 text-balance mt-4 sm:mt-6 text-sm sm:text-base">
            {t("desc")}
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="m-0 p-0 mt-8 sm:mt-14 xl:flex xl:items-end w-full h-full">
          <ul className="flex flex-col gap-8 font-bold sm:grid grid-cols-3 w-full">
            <li className="flex flex-col gap-2 sm:gap-3">
              <h1 className="text-[40px] sm:text-5xl text-primary">98%</h1>
              <h6 className="text-sm sm:text-base">{t("one")}</h6>
            </li>
            <li className="flex flex-col gap-2 sm:gap-3">
              <h1 className="text-[40px] sm:text-5xl text-primary">15+</h1>
              <h6 className="text-sm sm:text-base">{t("two")}</h6>
            </li>
            <li className="flex flex-col gap-2 sm:gap-3">
              <h1 className="text-[40px] sm:text-5xl text-primary">400+</h1>
              <h6 className="text-sm sm:text-base">{t("three")}</h6>
            </li>
          </ul>
        </CardContent> */}
      </Card>
    </article>
  );
};
