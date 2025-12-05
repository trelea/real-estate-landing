"use client";

import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
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
import { useTranslations } from "next-intl";
import { useRef } from "react";

interface Props {
  services: ServiceType[];
  locale: LocaleType;
}

export const MobileNavigation: React.FC<Props> = ({
  services,
  locale,
}) => {
  const t = useTranslations("navbar");
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = () => {
    // Close the drawer when any link is clicked
    closeRef.current?.click();
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="p-0 m-0">
        <Menu className="size-8 p-1.5 text-foreground" />
      </DrawerTrigger>
      <DrawerContent className="pl-6">
        <DrawerHeader className="py-10">
          <DrawerTitle className="sr-only" />
          <DrawerDescription>
            <Link href="/" onClick={handleLinkClick}>
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
                      <Link 
                        href="/apartments" 
                        className="hover:text-primary"
                        onClick={handleLinkClick}
                      >
                        {t("apartments")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/houses" 
                        className="hover:text-primary"
                        onClick={handleLinkClick}
                      >
                        {t("houses")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/commercials" 
                        className="hover:text-primary"
                        onClick={handleLinkClick}
                      >
                        {t("commercial_spaces")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/terrains" 
                        className="hover:text-primary"
                        onClick={handleLinkClick}
                      >
                        {t("lands")}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://dialoginvest.md/" 
                        className="hover:text-primary"
                        onClick={handleLinkClick}
                      >
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
                          onClick={handleLinkClick}
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
            <Link 
              href="/mortgage" 
              className="hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("mortgage")}
            </Link>
          </li>

          <li>
            <Link 
              href="/about-us" 
              className="hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("about_us")}
            </Link>
          </li>
          <li>
            <Link 
              href="/blogs" 
              className="hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("real_estate_news")}
            </Link>
          </li>
          <li>
            <Link 
              href="/contacts" 
              className="hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("contacts")}
            </Link>
          </li>
        </ul>

        {/* Hidden close button for programmatic control */}
        <DrawerClose ref={closeRef} className="sr-only" />
      </DrawerContent>
    </Drawer>
  );
};