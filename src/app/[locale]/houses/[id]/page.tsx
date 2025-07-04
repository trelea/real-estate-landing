import { HotSection } from "@/components/hot/hot";
import { getHouse } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";
import { getTranslations } from "next-intl/server";

export default async function HousePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const house = await getHouse({ id: parseInt(id) });
  const t = await getTranslations("common");
  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          locale={locale}
          offert={house}
          table={[
            {
              label: t("offert_type"),
              value: house.offert,
            },
            {
              label: t("category"),
              value: t("houses"),
            },
            {
              label: t("location"),
              value: (
                <>
                  {/* @ts-ignore */}
                  {house.location.location_category[locale]}
                  {", "}
                  {/* @ts-ignore */}
                  {house.location.location_subcategory[locale]}
                </>
              ),
            },
            {
              label: t("address"),
              // @ts-ignore
              value: house.location[`street_${locale}`],
            },
            {
              label: t("property_condition"),
              value: (
                <ul>
                  {house.housing_conditions.map((c) => (
                    // @ts-ignore
                    <li key={c.id}>{c[locale]}</li>
                  ))}
                </ul>
              ),
            },
            {
              label: t("housing_stock"),
              // @ts-ignore
              value: house.housing_stock[locale],
            },
          ]}
        />
        <HotSection />
      </div>
    </section>
  );
}
