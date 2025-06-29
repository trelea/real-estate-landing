import { HotSection } from "@/components/hot/hot";
import { getApartment } from "@/features/offerts/api";
import OffertPage from "@/features/offerts/components/offert-page";

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const apartment = await getApartment({ id: parseInt(id) });

  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <OffertPage
          offert={apartment}
          table={[
            {
              label: "Offert Type",
              value: apartment.offert,
            },
            {
              label: "Category",
              value: "Apartments",
            },
            {
              label: "Location",
              value: (
                <>
                  {apartment.location.location_category.ro}
                  {", "}
                  {apartment.location.location_subcategory.ro}
                </>
              ),
            },
            { label: "Addres", value: apartment.location.street_ro },
            {
              label: "Rooms",
              value: apartment.rooms,
            },
            {
              label: "Total Surface",
              value: apartment.surface.toString().concat("mp"),
            },
            {
              label: "Floors",
              value: apartment.floor
                .toString()
                .concat("/")
                .concat(apartment.floors.toString()),
            },
            {
              label: "Bath Rooms",
              value: apartment.sanitaries,
            },
            {
              label: "Property Condition",
              value: (
                <ul>
                  {apartment.housing_conditions.map((c) => (
                    <li key={c.id}>{c.ro}</li>
                  ))}
                </ul>
              ),
            },
            {
              label: "Housing Stock",
              value: apartment.housing_stock.ro,
            },
          ]}
        />
        <HotSection />
      </div>
    </section>
  );
}
