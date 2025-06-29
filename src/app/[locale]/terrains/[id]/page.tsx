import { HotSection } from "@/components/hot/hot";
import { getTerrain } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";

export default async function TerrainPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const terrain = await getTerrain({ id: parseInt(id) });
  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          offert={terrain}
          table={[
            {
              label: "Offert Type",
              value: terrain.offert,
            },
            {
              label: "Category",
              value: "Apartments",
            },
            {
              label: "Location",
              value: (
                <>
                  {terrain.location.location_category.ro}
                  {", "}
                  {terrain.location.location_subcategory.ro}
                </>
              ),
            },
            { label: "Addres", value: terrain.location.street_ro },
            {
              label: "Terrain Destinations",
              value: (
                <ul>
                  {terrain.usability.map((c) => (
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
