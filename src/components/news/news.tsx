import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { NewsCarousel } from "./news-carousel";
import { NewsCard } from "./news-card";
import { getBlogsLanding } from "@/features/blogs/api";

interface Props {}

export const NewsSection: React.FC<Props> = async ({}) => {
  const blogs = await getBlogsLanding();
  if (blogs.length === 0) return null;

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
          {blogs.map((blog) => (
            <CarouselItem
              key={blog.id}
              className="sm:basis-1/2 lg:basis-1/3 w-full"
            >
              <NewsCard blog={blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </NewsCarousel>
    </article>
  );
};
