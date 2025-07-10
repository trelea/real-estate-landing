import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ServiceType } from "@/types";
import { LocaleType } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface Props {
  services: ServiceType[];
  locale: LocaleType;
}

export const MobileNavigation: React.FC<Props> = async ({
  services,
  locale,
}) => {
  const t = await getTranslations("navbar");

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="p-0 m-0">
        <Menu className="size-8 p-1.5 text-foreground" />
      </DrawerTrigger>
      <DrawerContent className="pl-6">
        <DrawerHeader className="py-10">
          <DrawerTitle className="sr-only" />
          <DrawerDescription>
            <Link href="/">
              <Image
                src="/assets/logo-blue.png"
                alt="dialog imobil blue logo"
                width={120}
                height={42}
              />
            </Link>
          </DrawerDescription>
        </DrawerHeader>

        <ul className="flex flex-col items-start gap-8 text-base font-normal">
          <li>
            <Accordion
              type="single"
              collapsible
              className="p-0 m-0 flex flex-col items-start gap-8 text-base font-normal"
            >
              <AccordionItem value="estate" className="m-0 p-0 border-none">
                <AccordionTrigger className="m-0 p-0 text-base font-normal hover:no-underline">
                  {t("real_estate")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col items-start gap-6 text-sm font-normal pl-6 pt-8">
                    <li>
                      <Link href="/apartments" className="hover:text-primary">
                        {t("apartments")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/houses" className="hover:text-primary">
                        {t("houses")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/commercials" className="hover:text-primary">
                        {t("commercial_spaces")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/terrains" className="hover:text-primary">
                        {t("lands")}
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-primary">
                        {t("investments")}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services" className="m-0 p-0 border-none">
                <AccordionTrigger className="m-0 p-0 text-base font-normal hover:no-underline">
                  {t("services")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col items-start gap-6 text-sm font-normal pl-6 pt-8">
                    {services.map(({ id, content }) => (
                      <li key={id}>
                        <Link
                          href={`/services/${id}`}
                          className="hover:text-primary"
                        >
                          {content[`title_${locale}`]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          <li>
            <Link href="/about-us" className="hover:text-primary">
              {t("about_us")}
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-primary">
              {t("real_estate_news")}
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:text-primary">
              {t("contacts")}
            </Link>
          </li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
};
