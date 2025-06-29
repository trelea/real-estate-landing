import { HotSection } from "@/components/hot/hot";
import { getCommercial } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";

export default async function CommercialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const commercial = await getCommercial({ id: parseInt(id) });
  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          offert={commercial}
          table={[
            {
              label: "Offert Type",
              value: commercial.offert,
            },
            {
              label: "Category",
              value: "Commercial Spaces",
            },
            {
              label: "Location",
              value: (
                <>
                  {commercial.location.location_category.ro}
                  {", "}
                  {commercial.location.location_subcategory.ro}
                </>
              ),
            },
            { label: "Addres", value: commercial.location.street_ro },
            {
              label: "Object Destination",
              value: (
                <ul>
                  {commercial.commercial_destinations.map((c) => (
                    <li key={c.id}>{c.ro}</li>
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
