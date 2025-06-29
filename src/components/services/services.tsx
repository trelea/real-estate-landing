import React from "react";
import { ServiceCard } from "./service-card";
import { getServicesLanding } from "@/features/services/api";
import { getLocale, getTranslations } from "next-intl/server";

interface Props {}

export const ServicesSection: React.FC<Props> = async ({}) => {
  const t = await getTranslations("services");
  const locale = await getLocale();
  const data = await getServicesLanding();
  if (data.length === 0) return null;

  return (
    <article className="w-full flex flex-col gap-8">
      <h1 className="text-center font-bold text-2xl sm:text-4xl text-foreground">
        {t("our_services")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.at(0) && (
          <ServiceCard
            className="sm:row-span-2 xl:row-span-1 xl:col-span-2 xl:flex-row xl:justify-between xl:items-center"
            // @ts-ignore
            title={data.at(0)?.service.content[`title_${locale}`] as string}
            description={
              // @ts-ignore
              data.at(0)?.service.content[`desc_${locale}`] as string
            }
            button={{
              label: t("more"),
              href: `services/${data.at(0)?.service.id}`,
            }}
            img={{ src: data.at(0)?.service.thumbnail, alt: "Kitchen" }}
          />
        )}

        {data.at(1) && (
          <ServiceCard
            className="sm:row-span-2 xl:row-span-1 xl:col-span-2 xl:flex-row xl:justify-between xl:items-center"
            // @ts-ignore
            title={data.at(1)?.service.content[`title_${locale}`] as string}
            description={
              // @ts-ignore
              data.at(1)?.service.content[`desc_${locale}`] as string
            }
            button={{
              label: t("more"),
              href: `services/${data.at(1)?.service.id}`,
            }}
            img={{ src: data.at(1)?.service.thumbnail, alt: "Kitchen" }}
          />
        )}

        {data.at(2) && (
          <ServiceCard
            className="sm:row-span-2 xl:row-span-1 xl:col-span-2 xl:flex-row xl:justify-between xl:items-center"
            // @ts-ignore
            title={data.at(2)?.service.content[`title_${locale}`] as string}
            description={
              // @ts-ignore
              data.at(2)?.service.content[`desc_${locale}`] as string
            }
            button={{
              label: t("more"),
              href: `services/${data.at(2)?.service.id}`,
            }}
            img={{ src: data.at(2)?.service.thumbnail, alt: "Kitchen" }}
          />
        )}

        {data.at(3) && (
          <ServiceCard
            className="sm:row-span-2 xl:row-span-1 xl:col-span-2 xl:flex-row xl:justify-between xl:items-center"
            // @ts-ignore
            title={data.at(3)?.service.content[`title_${locale}`] as string}
            description={
              // @ts-ignore
              data.at(3)?.service.content[`desc_${locale}`] as string
            }
            button={{
              label: t("more"),
              href: `services/${data.at(3)?.service.id}`,
            }}
            img={{ src: data.at(3)?.service.thumbnail, alt: "Kitchen" }}
          />
        )}
      </div>
    </article>
  );
};
