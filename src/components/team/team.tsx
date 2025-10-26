import React from "react";
import { TeamCarousel } from "./team-carousel";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { MemberCard } from "./member-card";
import { getAgents } from "@/features/agents/api";
import { getTranslations } from "next-intl/server";

interface Props {}

export const TeamSection: React.FC<Props> = async ({}) => {
  const t = await getTranslations("team");
  const agents = await getAgents();
  if (agents.length === 0) return null;

  return (
    <article className="w-full flex flex-col gap-12 sm:gap-14">
      <div className="text-center flex flex-col gap-6">
        <h1 className="font-bold text-2xl sm:text-4xl text-foreground">
          {t("title")}
        </h1>
        {/* <p className="text-balance text-muted-foreground text-sm sm:text-base">
          {t("desc")}
        </p> */}
      </div>

      <TeamCarousel className="w-full">
        <CarouselContent className="w-full">
          {agents.map((member, _) => (
            <CarouselItem
              key={_}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full h-full"
            >
              {/* @ts-ignore */}
              <MemberCard member={member.user.profile} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </TeamCarousel>
    </article>
  );
};
