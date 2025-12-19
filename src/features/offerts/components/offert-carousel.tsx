"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Media } from "../types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function OffertCarousel({ media }: { media: Media[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      api?.scrollTo(currentIndex - 1);
    } else {
      setCurrentIndex(media.length - 1);
      api?.scrollTo(media.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1);
      api?.scrollTo(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      api?.scrollTo(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isDialogOpen) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDialogOpen, currentIndex, api, media.length]);

  return (
    <div className="w-full h-full">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="w-full h-full bg-transparent rounded-lg overflow-hidden transition-all duration-300 mb-4 relative">
            <Image
              src={media[currentIndex].url}
              alt={media[currentIndex].url}
              width={1000}
              height={1000}
              className="w-full lg:h-[500px] object-cover rounded-md  transition-all duration-300"
            />

            <div className="absolute bottom-0 left-0 w-full flex justify-center items-center pb-4 lg:pb-10">
              <Image
                src={"/assets/logo-white.png"}
                alt="logo"
                width={1000}
                height={1000}
                className="w-20 lg:w-40 h-auto"
              />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-transparent shadow-none border-none p-0 m-0 h-fit sm:h-[80%] min-w-[80%] flex justify-center items-center">
          <div className="h-fit sm:h-full w-full flex justify-center border-none items-center bg-transparent shadow-none rounded-2xl relative">
            <Image
              src={media[currentIndex].url}
              alt={media[currentIndex].url}
              width={1000}
              height={1000}
              className="rounded-2xl h-full w-full object-contain bg-transparent"
            />
            <div className="absolute bottom-0 sm:bottom-40 md:bottom-20 lg:bottom-0 left-0 w-full flex justify-center items-center pb-10 md:pb-10 lg:pb-20">
              <Image
                src={"/assets/logo-white.png"}
                alt="logo"
                width={1000}
                height={1000}
                className="w-20 md:w-40 lg:w-60 xl:w-80 2xl:w-96 h-auto"
              />
            </div>

            <div className="absolute right-0 flex w-full justify-between gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="bg-white rounded-full ml-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
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
                className={`w-full h-full max-h-28 rounded-lg overflow-hidden transition-all duration-300 relative ${
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

                <div className="absolute bottom-0 left-0 w-full flex justify-center items-center pb-2">
                  <Image
                    src={"/assets/logo-white.png"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-20 h-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-[230%] sm:-top-[280%] md:-top-[270%] lg:-top-[275%] right-0 flex w-full justify-between gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="bg-white rounded-full ml-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="bg-white rounded-full mr-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </Carousel>
    </div>
  );
}
