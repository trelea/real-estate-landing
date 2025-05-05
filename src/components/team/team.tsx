import React from "react";
import { TeamCarousel } from "./team-carousel";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { MemberCard } from "./member-card";

interface Props {}

const members: {
  name: string;
  surname: string;
  role: string;
  src: string;
}[] = [
  {
    name: "John",
    surname: "Doe",
    role: "Developer",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Jane",
    surname: "Smith",
    role: "Designer",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Alice",
    surname: "Johnson",
    role: "Manager",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Bob",
    surname: "Brown",
    role: "Product Owner",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Charlie",
    surname: "Davis",
    role: "QA Engineer",
    src: "/assets/logo-blue.png",
  },
  {
    name: "David",
    surname: "Wilson",
    role: "DevOps Engineer",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Eve",
    surname: "Martinez",
    role: "Business Analyst",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Frank",
    surname: "Moore",
    role: "UX Researcher",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Grace",
    surname: "Taylor",
    role: "Project Manager",
    src: "/assets/logo-blue.png",
  },
  {
    name: "Henry",
    surname: "Anderson",
    role: "System Architect",
    src: "/assets/logo-blue.png",
  },
];

export const TeamSection: React.FC<Props> = ({}) => {
  return (
    <article className="w-full flex flex-col gap-12 sm:gap-14">
      <div className="text-center flex flex-col gap-6">
        <h1 className="font-bold text-2xl sm:text-4xl text-foreground">
          Echipa noastră
        </h1>
        <p className="text-balance text-muted-foreground text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          est augue, ac posuere nunc mattis eget.
        </p>
      </div>

      <TeamCarousel className="w-full">
        <CarouselContent className="w-full">
          {members.map((member, _) => (
            <CarouselItem
              key={_}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 w-full"
            >
              <MemberCard member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </TeamCarousel>
    </article>
  );
};
