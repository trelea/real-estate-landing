import { HotSection } from "@/components/hot/hot";
import { getApartment } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";
import { getTranslations } from "next-intl/server";

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const apartment = await getApartment({ id: parseInt(id) });
  const t = await getTranslations("common");

  console.log(apartment.offert[0]);

  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          locale={locale}
          offert={apartment}
          table={[
            {
              label: t("offert_type"),
              value: apartment.offert[0] === "SALE" ? t("sale") : t("rent"),
            },
            {
              label: t("category"),
              value: t("apartments"),
            },
            {
              label: t("location"),
              value: (
                <>
                  {/* @ts-ignore */}
                  {apartment.location.location_category[locale]}
                  {", "}
                  {/* @ts-ignore */}
                  {apartment.location.location_subcategory[locale]}
                </>
              ),
            },
            {
              label: t("address"),
              // @ts-ignore
              value: apartment.location[`street_${locale}`],
            },
            {
              label: t("rooms"),
              value: apartment.rooms,
            },
            {
              label: t("total_surface"),
              value: apartment.surface.toString().concat("m²"),
            },
            {
              label: t("floors"),
              value: apartment.floor
                .toString()
                .concat("/")
                .concat(apartment.floors.toString()),
            },
            {
              label: t("bath_rooms"),
              value: apartment.sanitaries,
            },
            {
              label: t("property_condition"),
              value: (
                <ul>
                  {apartment.housing_conditions.map((c) => (
                    // @ts-ignore
                    <li key={c.id}>{c[locale]}</li>
                  ))}
                </ul>
              ),
            },
            {
              label: t("housing_stock"),
              // @ts-ignore
              value: apartment.housing_stock[locale],
            },
          ]}
        />
        <HotSection />
      </div>
    </section>
  );
}
