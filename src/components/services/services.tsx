import React from "react";
import { ServiceCard } from "./service-card";
import { Headset } from "lucide-react";

interface Props {}

export const ServicesSection: React.FC<Props> = ({}) => {
  return (
    <article className="w-full flex flex-col gap-8">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-foreground">
        Serviciile noastre
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <ServiceCard
          className="sm:row-span-2 xl:row-span-1 xl:col-span-2 xl:flex-row xl:justify-between xl:items-center"
          title="Case Elegante"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          button={{
            label: "Explorează case",
          }}
          img={{ src: "/assets/kitchen.png", alt: "Kitchen" }}
        />

        <ServiceCard
          className="sm:h-full"
          title="Suport Tehnic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          icon={
            <Headset className="rounded-full p-3 text-primary bg-primary/10 size-11 sm:size-12 shadow" />
          }
        />

        <ServiceCard
          className="sm:h-full"
          title="Suport Tehnic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          icon={
            <Headset className="rounded-full p-3 text-primary bg-primary/10 size-11 sm:size-12 shadow" />
          }
        />

        <ServiceCard
          className="sm:h-full"
          title="Suport Tehnic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          icon={
            <Headset className="rounded-full p-3 text-primary bg-primary/10 size-11 sm:size-12 shadow" />
          }
        />

        <ServiceCard
          className="sm:row-span-2 xl:hidden"
          title="Apartamente Moderne"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          button={{
            label: "Caută apartamente",
          }}
          img={{ src: "/assets/modern-apartments.png", alt: "Kitchen" }}
        />

        <ServiceCard
          className="sm:h-full"
          title="Suport Tehnic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          icon={
            <Headset className="rounded-full p-3 text-primary bg-primary/10 size-11 sm:size-12 shadow" />
          }
        />

        <ServiceCard
          className="hidden xl:flex xl:row-span-1 xl:col-span-2 xl:flex-row xl:justify-between xl:items-center"
          title="Apartamente Moderne"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra est augue."
          button={{
            label: "Caută apartamente",
          }}
          img={{ src: "/assets/modern-apartments.png", alt: "Kitchen" }}
        />
      </div>
    </article>
  );
};
