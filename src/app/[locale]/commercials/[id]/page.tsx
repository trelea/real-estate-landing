import { HotSection } from "@/components/hot/hot";
import { getCommercial } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";
import { getTranslations } from "next-intl/server";

export default async function CommercialPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const commercial = await getCommercial({ id: parseInt(id) });
  const t = await getTranslations("common");
  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          locale={locale}
          offert={commercial}
          table={[
            {
              label: t("offert_type"),
              value: commercial.offert,
            },
            {
              label: t("category"),
              value: t("commercial_spaces"),
            },
            {
              label: t("location"),
              value: (
                <>
                  {/* @ts-ignore */}
                  {commercial.location.location_category[locale]}
                  {", "}
                  {/* @ts-ignore */}
                  {commercial.location.location_subcategory[locale]}
                </>
              ),
            },
            {
              label: t("address"),
              // @ts-ignore
              value: commercial.location[`street_${locale}`],
            },
            {
              label: t("object_destination"),
              value: (
                <ul>
                  {commercial.commercial_destinations.map((c) => (
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
