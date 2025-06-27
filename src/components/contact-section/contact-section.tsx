import { Link } from "@/i18n/navigation";
import { Clock4, Mail, MapPinned, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ContactForm } from "./contact-form";
import React from "react";

interface Props {}

export const ContactSection: React.FC<Props> = ({}) => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 py-14 sm:py-16">
      <article className="flex flex-col gap-6 sm:gap-8 sm:col-span-2 lg:col-span-1">
        <h1 className="text-2xl font-semibold text-foreground sm:text-4xl">
          Aveți nevoie de o consultare?
        </h1>
        <p className="text-sm sm:text-base text-foreground/50">
          Morbi eu mi ut urna luctus fringilla et vitae erat. Vivamus venenatis
          ut lectus sed suscipit. In sagittis eleifend urna, in mattis est
          gravida eu. Integer eu mollis lectus, in convallis ante. Nam semper
          dui libero, ut dapibus ipsum interdum sit amet. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
      </article>

      <ul className="flex flex-col gap-6 lg:col-start-1">
        <li className="flex items-center gap-4">
          <Phone className="size-6 aspect-square text-primary" />
          <Link href={""}>
            <span className="text-base text-foreground">+373 696 123 123</span>
          </Link>
        </li>
        <li className="flex items-center gap-4">
          <Mail className="size-6 aspect-square text-primary" />
          <Link href={""}>
            <span className="text-base text-foreground">contact@dialog.md</span>
          </Link>
        </li>
        <li className="flex items-center gap-4">
          <MapPinned className="size-6 aspect-square text-primary" />
          <Link href={""}>
            <span className="text-base text-foreground">
              Str. Stefan cel Mare 1/6
            </span>
          </Link>
        </li>
        <li className="flex items-center gap-4">
          <Clock4 className="size-6 aspect-square text-primary" />
          <Link href={""}>
            <span className="text-base text-foreground">
              Luni - Vineri:
              <br />
              08:00 - 17:00
            </span>
          </Link>
        </li>
      </ul>

      {/* form */}
      <div className="w-full lg:flex lg:justify-end lg:row-span-2 lg:col-start-2 lg:row-start-1">
        <Card className="gap-3 w-full lg:max-w-sm h-fit rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground m-0 p-0">
              Completează campurile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
