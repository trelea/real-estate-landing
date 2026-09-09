import { HotSection } from "@/components/hot/hot";
import { getGarage } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";
import { getTranslations } from "next-intl/server";
import { formatLocation } from "@/utils/location";

export default async function GaragePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const garage = await getGarage({ id: parseInt(id) });
  const t = await getTranslations("common");
  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          locale={locale}
          offert={garage}
          table={[
            {
              label: t("offert_type"),
              value: garage.offert.includes("SALE")
                ? t("sale")
                : garage.offert.includes("RENT")
                ? t("rent")
                : t("sale"),
            },
            {
              label: t("category"),
              value: t("garages"),
            },
            {
              label: t("location"),
              value: formatLocation(garage.location, locale),
            },
            {
              label: t("address"),
              // @ts-ignore
              value: garage.location[`street_${locale}`],
            },
            {
              label: t("area"),
              value: `${garage.area} m²`,
            },
          ]}
        />
        <HotSection />
      </div>
    </section>
  );
}
