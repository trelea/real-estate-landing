import { Link } from "@/i18n/navigation";
import { AtSign, Smartphone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { NavigationGroup } from "./navagiation-group";
import { LocaleSelect } from "./locale-select";
import { MobileNavigation } from "./mibile-navigation";
import { ContentType } from "@/types";
import { getServices } from "@/features/services/api";
import { LocaleType } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface Props {
  locale: LocaleType;
}

const Navbar: React.FC<Props> = async ({ locale }) => {
  const t = await getTranslations("navbar");
  const services = await getServices();

  return (
    <header className="fixed z-50 w-full shadow">
      {/* <section className="py-2 px-6 sm:px-11 lg:px-20 hidden sm:flex w-full relative text-white h-fit justify-between z-50">
        <Image
          src={"/assets/header.png"}
          alt="header"
          fill={true}
          className="h-full object-center object-cover"
          priority={false}
        />
        <ul className="flex items-center gap-8 z-50">
          <li className="flex gap-0.5 items-center hover:cursor-pointer">
            <Smartphone className="size-4" />
            <h6 className="text-xs font-light">+373 60 888 816</h6>
          </li>
          <li className="flex gap-0.5 items-center hover:cursor-pointer">
            <Smartphone className="size-4" />
            <h6 className="text-xs font-light">+373 60 888 816</h6>
          </li>
        </ul>

        <ul className="flex items-center gap-8 z-50">
          <li className="flex gap-0.5 items-center hover:cursor-pointer">
            <AtSign className="size-4" />
            <h6 className="text-xs font-light">dialog@imobil.md</h6>
          </li>
        </ul>
      </section> */}
      <nav className="py-2 px-6 sm:px-11 lg:px-20 shadow flex items-center justify-between relative z-50 bg-background">
        {/* logo */}
        <div className="shrink w-fit">
          <Link href={"/"}>
            <Image
              src={"/assets/logo-blue.png"}
              alt="Dialog Imobil blue logo"
              width={120}
              height={42}
            />
          </Link>
        </div>
        {/* navigation */}
        <div className="hidden xl:block xl:flex-none">
          <ul className="flex items-center gap-8 text-sm font-normal">
            <li>
              <NavigationGroup
                width={200}
                label={t("real_estate")}
                items={[
                  {
                    label: t("apartments"),
                    href: { pathname: "/apartments" },
                  },
                  {
                    label: t("houses"),
                    href: { pathname: "/houses" },
                  },
                  {
                    label: t("commercial_spaces"),
                    href: { pathname: "/commercials" },
                  },
                  {
                    label: t("lands"),
                    href: { pathname: "/terrains" },
                  },
                  {
                    label: t("investments"),
                    href: { pathname: "" },
                  },
                ]}
              />
            </li>
            <li>
              <NavigationGroup
                width={200}
                label={t("services")}
                items={services.map(({ content, id }) => ({
                  label: content[`title_${locale}` as keyof ContentType],
                  href: { pathname: `/services/${id}` },
                }))}
              />
            </li>
            <li>
              <Link href={"/mortgage"} className="hover:text-primary">
                {t("mortgage")}
              </Link>
            </li>
            <li>
              <Link href={"/about-us"} className="hover:text-primary">
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link href={"/blogs"} className="hover:text-primary">
                {t("real_estate_news")}
              </Link>
            </li>
            <li>
              <Link href={"/contacts"} className="hover:text-primary">
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </div>
        {/* locale switcher and contact */}
        <div className="space-x-4 flex h-fit justify-end shrink w-fit items-center">
          <Button className="hidden sm:block text-sm rounded-lg w-fit h-fit py-2.5 px-4">
            <Link href={"tel:+37360788889"}>
              {t("consult_expert")}
            </Link>
          </Button>

          <div className="pl-4 sm:border-l">
            <LocaleSelect />
          </div>

          <div className="xl:hidden">
            <MobileNavigation services={services} locale={locale} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
