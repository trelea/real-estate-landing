import { HotSection } from "@/components/hot/hot";
import { getTerrain } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";
import { getTranslations } from "next-intl/server";

export default async function TerrainPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const terrain = await getTerrain({ id: parseInt(id) });
  const t = await getTranslations("common");
  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          locale={locale}
          offert={terrain}
          table={[
            {
              label: t("offert_type"),
              value: terrain.offert,
            },
            {
              label: t("category"),
              value: t("terrains"),
            },
            {
              label: t("location"),
              value: (
                <>
                  {/* @ts-ignore */}
                  {terrain.location.location_category[locale]}
                  {", "}
                  {/* @ts-ignore */}
                  {terrain.location.location_subcategory[locale]}
                </>
              ),
            },
            {
              label: t("address"),
              // @ts-ignore
              value: terrain.location[`street_${locale}`],
            },
            {
              label: t("terrain_destinations"),
              value: (
                <ul>
                  {terrain.usability.map((c) => (
                    // @ts-ignore
                    <li key={c.id}>{c[locale]}</li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
        <HotSection />
      </div>
    </section>
  );
}
