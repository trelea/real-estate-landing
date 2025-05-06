import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "@/i18n/navigation";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
  new: { src: string; title: string; date: string; href: string };
}

export const NewsCard: React.FC<Props> = ({
  new: { title, src, date, href },
}) => {
  return (
    <Card className="m-0 p-2 shadow rounded-2xl gap-4 h-full">
      <Image
        src={src}
        alt={title}
        width={500}
        height={228}
        className="h-56 w-full object-contain p-20 shadow rounded-xl"
      />
      <div className="flex-col flex gap-8 justify-between h-full">
        <CardHeader className="m-0 p-0 flex flex-col-reverse text-balance gap-2">
          <CardTitle className="font-semibold text-lg md:text-xl">
            {title}
          </CardTitle>
          <CardDescription className="text-xs">{date}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end w-full m-0 p-0 px-2 pb-4">
          <Link href={href} className="flex gap-1 items-center text-[#006AFF]">
            <span className="text-base">Mai mult</span>
            <CircleArrowRight className="size-5" />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};
