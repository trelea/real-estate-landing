"use client";

import React, { HTMLAttributes } from "react";
import { Carousel } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const OffersCarousel: React.FC<Props> = ({ children, className }) => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel plugins={[plugin.current]} className={className}>
      {children}
    </Carousel>
  );
};
