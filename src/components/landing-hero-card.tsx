import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { UrlObject } from "url";

interface Props {
  title: string;
  href?: UrlObject;
  img: {
    src: string;
    alt: string;
  };
  clasName?: React.HTMLAttributes<HTMLElement>["className"];
}

export const LandingHeroCard: React.FC<Props> = ({
  title,
  img: { alt, src },
  href,
  clasName,
}) => {
  return (
    <Card
      className={cn(
        "border-2 rounded-xl sm:rounded-2xl border-background bg-white/80 m-0 p-0 w-full hover:bg-white/90 relative h-32 sm:h-52 xl:h-56 hover:cursor-pointer",
        clasName
      )}
    >
      {href && (
        <Link
          href={href as UrlObject}
          className="h-full w-full absolute top-0 right-0 left-0 bottom-0 z-10"
        ></Link>
      )}

      <CardHeader className="m-0 p-2 sm:p-4 relative z-10">
        <CardTitle className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl p-0 m-0">
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
