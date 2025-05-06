import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { NewsCarousel } from "./news-carousel";
import { NewsCard } from "./news-card";

interface Props {}

const news: {
  src: string;
  title: string;
  date: string;
  href: string;
}[] = [
  {
    src: "/assets/logo-blue.png",
    title: "Housing Market Trends Show Steady Growth in 2025",
    date: "2025-05-06",
    href: "#",
  },
  {
    src: "/assets/logo-blue.png",
    title: "Top 5 Cities for Real Estate Investment This Year",
    date: "2025-04-28",
    href: "#",
  },
  {
    src: "/assets/logo-blue.png",
    title: "New Regulations Impacting Residential Developments",
    date: "2025-04-15",
    href: "#",
  },
];

export const NewsSection: React.FC<Props> = ({}) => {
  return (
    <article className="w-full flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl sm:text-4xl text-foreground">
          Știri imobiliare
        </h1>
        <Button className="m-0 p-0 flex flex-row items-center gap-1.5 sm:gap-2 text-sm sm:text-base py-3 px-4 h-fit w-fit">
          <span>Vezi toate</span>
          <MoveUpRight className="size-5 p-1 sm:size-6" />
        </Button>
      </div>

      <NewsCarousel>
        <CarouselContent className="w-full">
          {news.map((_new, _) => (
            <CarouselItem key={_} className="sm:basis-1/2 lg:basis-1/3 w-full">
              <NewsCard new={_new} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </NewsCarousel>
    </article>
  );
};
