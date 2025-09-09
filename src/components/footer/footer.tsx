import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getServices } from "@/features/services/api";
import { getLocale } from "next-intl/server";
import { ContentType } from "@/types";

interface Props {}

export const Footer: React.FC<Props> = async ({ }) => {
  const t = await getTranslations("footer");
  const services = await getServices();
  const locale = await getLocale();

  return (
    <footer className="px-6 sm:px-11 lg:px-20 py-12 w-full bg-[#163259] flex flex-col gap-12 text-white">
      <div className="flex flex-col gap-14 xl:gap-0 xl:flex-row">
        <div className="flex-1 flex flex-col gap-8">
          <Link href={"/"}>
            <Image
              src={"/assets/logo-white.png"}
              alt="Dialog Imobil white logo"
              width={142}
              height={50}
            />
          </Link>
          <p className="text-base text-balance text-white">
            {t("description")}
          </p>
        </div>
        <div className="flex-1 flex justify-between flex-col gap-14 sm:flex-row sm:gap-2">
          <nav className="flex flex-col gap-7">
            <h1 className="font-bold text-xl">Dialog Imobil</h1>
            <ul className="text-base flex flex-col gap-6">
              <li>
                <Link href={"/about-us"}>{t("about_us")}</Link>
              </li>
              <li>
                <Link href={"/blogs"}>{t("real_estate_news")}</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>{t("privacy_policy")}</Link>
              </li>
              <li>
                <Link href={"/terms-and-conditions"}>
                  {t("terms_and_conditions")}
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-7">
            <h1 className="font-bold text-xl">{t("services")}</h1>
            <ul className="text-base flex flex-col gap-6">
              {services.map((content, id) => (
                <li key={id}>
                  <Link href={`/services/${content.id}`}>
                    {content.content[`title_${locale}` as keyof ContentType]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col gap-7">
            <h1 className="font-bold text-xl">{t("social_media")}</h1>
            <ul className="text-base flex items-center gap-4">
              <li className="bg-white size-10 rounded-full text-[#163259] flex justify-center items-center p-2">
                <Link href={"#"}>
                  <Facebook />
                </Link>
              </li>
              <li className="bg-white size-10 rounded-full text-[#163259] flex justify-center items-center p-2">
                <Link href={"#"}>
                  <Linkedin />
                </Link>
              </li>
              <li className="bg-white size-10 rounded-full text-[#163259] flex justify-center items-center p-2">
                <Link href={"#"}>
                  <Instagram />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Separator className="w-full bg-[#1E406E] text-[#1E406E]" />
      <div className="text-base flex justify-center lg:justify-between items-center">
        <ul className="hidden lg:flex gap-8">
          <li className="hover:cursor-pointer hover:underline">
            <Link href={"/privacy-policy"}>{t("privacy_policy")}</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href={"/terms-and-conditions"}>
              {t("terms_and_conditions")}
            </Link>
          </li>
        </ul>

        <span className="font-medium text-sm sm:text-base">
          © 2025 Dialog Imobil | {t("all_rights_reserved")}
        </span>
      </div>
    </footer>
  );
};
