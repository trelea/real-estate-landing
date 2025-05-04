import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href?: string;
  img: {
    src: string;
    alt: string;
  };
  clasName?: React.HTMLAttributes<HTMLElement>["className"];
}

export const HeroCard: React.FC<Props> = ({
  title,
  img: { alt, src },
  href,
  clasName,
}) => {
  return (
    <Card
      className={cn(
        "border-2 rounded-xl sm:rounded-2xl border-background bg-white/80 m-0 p-0 w-full hover:bg-white/90 relative h-32 sm:h-52 xl:h-56",
        clasName
      )}
    >
      <CardHeader className="m-0 p-2 sm:p-4 relative z-10">
        <CardTitle className="font-semibold text-base sm:text-lg xl:text-xl  2xl:text-2xl p-0 m-0">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="m-0 p-0 h-full ">
        <Image
          src={src}
          alt={alt}
          className="absolute z-0 object-contain object-bottom-right bottom-0 right-0 rounded-xl sm:rounded-2xl"
          fill
          loading="lazy"
          quality={80}
        />
      </CardContent>
    </Card>
  );
};
