import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
  img?: React.HTMLProps<HTMLImageElement>;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  button?: Partial<{
    label: string;
    href: string;
  }>;
}

export const ServiceCard: React.FC<Props> = ({
  title,
  description,
  className,
  icon,
  img,
  button,
}) => {
  return (
    <Card
      className={cn(
        "p-6 m-0 h-fit rounded-2xl flex flex-col-reverse gap-4",
        className
      )}
    >
      {/* content */}
      <div className="h-full flex flex-col justify-center gap-3 sm:gap-4 w-full">
        {/* icon */}
        {icon && icon}

        <CardHeader className="p-0 m-0 w-full flex flex-col gap-3 sm:gap-4">
          <CardTitle className="font-bold text-xl sm:text-2xl w-full">
            {title}
          </CardTitle>
          <CardDescription className="m-0 p-0 sm:text-base w-full">
            {description}
          </CardDescription>
        </CardHeader>

        {/* button */}
        {button && (
          <CardFooter className="m-0 p-0 w-full h-fit">
            <Link href={button.href as string}>
              <Button className="m-0 p-0 w-fit h-fit flex items-center gap-1 py-3 px-4">
                <h6 className="font-medium text-sm sm:text-base">
                  {button.label}
                </h6>
                <MoveUpRight className="size-5 p-1 sm:size-6" />
              </Button>
            </Link>
          </CardFooter>
        )}
      </div>

      {/* image */}
      {img && (
        <Image
          src={img.src || "/assets/logo-blue.png"}
          alt={img?.alt as string}
          height={500}
          width={500}
          className="w-full xl:max-w-[280px] h-[200px] sm:h-[230px] xl:h-[320px] object-cover rounded-xl shadow"
        />
      )}
    </Card>
  );
};
