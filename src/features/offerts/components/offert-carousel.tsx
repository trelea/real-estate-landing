"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Media } from "../types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function OffertCarousel({ media }: { media: Media[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="w-full h-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full h-full bg-transparent rounded-lg overflow-hidden transition-all duration-300 mb-4 relative">
            <Image
              src={media[currentIndex].url}
              alt={media[currentIndex].url}
              width={1000}
              height={1000}
              className="w-full min-h-[240px] max-h-[500px] object-cover rounded-md hover:scale-105 transition-all duration-300"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none p-0 m-0 h-[80%] min-w-[80%] flex justify-center items-center">
          <div className="h-full w-full flex justify-center items-center bg-white rounded-2xl relative">
            <Image
              src={media[currentIndex].url}
              alt={media[currentIndex].url}
              width={1000}
              height={1000}
              className="rounded-2xl h-full w-full object-contain"
            />

            <div className="absolute right-0 flex w-full justify-between gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                    api?.scrollTo(currentIndex - 1);
                  }
                }}
                className="bg-white rounded-full ml-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (currentIndex < media.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                    api?.scrollTo(currentIndex + 1);
                  }
                }}
                className="bg-white rounded-full mr-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Carousel
        className="w-full h-full bg-transparent mt-4"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full h-full bg-transparent flex px-0.5">
          {media.map((media, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 bg-transparent"
              onClick={() => {
                setCurrentIndex(index);
                api?.scrollTo(index);
              }}
            >
              <div
                className={`w-full h-full max-h-28 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentIndex === index
                    ? "border-2 border-primary/100"
                    : "border-2 border-transparent"
                }`}
              >
                <Image
                  src={media.url}
                  alt={media.url}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-[325%] sm:-top-[280%] md:-top-[270%] lg:-top-[260%] xl:-top-[250%] right-0 flex w-full justify-between gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                api?.scrollTo(currentIndex - 1);
              }
            }}
            className="bg-white rounded-full ml-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (currentIndex < media.length - 1) {
                setCurrentIndex(currentIndex + 1);
                api?.scrollTo(currentIndex + 1);
              }
            }}
            className="bg-white rounded-full mr-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </Carousel>
    </div>
  );
}
