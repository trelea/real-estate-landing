import { HotSection } from "@/components/hot/hot";
import { getHouse } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";

export default async function HousePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const house = await getHouse({ id: parseInt(id) });
  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          offert={house}
          table={[
            {
              label: "Offert Type",
              value: house.offert,
            },
            {
              label: "Category",
              value: "Houses",
            },
            {
              label: "Location",
              value: (
                <>
                  {house.location.location_category.ro}
                  {", "}
                  {house.location.location_subcategory.ro}
                </>
              ),
            },
            { label: "Addres", value: house.location.street_ro },
            {
              label: "Property Condition",
              value: (
                <ul>
                  {house.housing_conditions.map((c) => (
                    <li key={c.id}>{c.ro}</li>
                  ))}
                </ul>
              ),
            },
            {
              label: "Housing Stock",
              value: house.housing_stock.ro,
            },
          ]}
        />
        <HotSection />
      </div>
    </section>
  );
}
