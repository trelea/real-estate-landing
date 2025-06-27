import { HotSection } from "@/components/hot/hot";
import {
  getCommercialDestinations,
  getCommercialFeatures,
  getCommercialPlaceings,
  getHousingConditions,
  getLocationCategories,
} from "@/features/filters/api";
import {
  getCommercialsHotOfferts,
  getCommercialsOfferts,
} from "@/features/offerts/api";
import CommercialsFilter from "@/features/offerts/components/commercials-filter";
import OffertsGrid from "@/features/offerts/components/offerts-grid";

export default async function Commercials({
  searchParams,
}: {
  searchParams: Promise<
    Partial<{
      page: number;
      sort: "price_asc" | "price_desc" | "area_asc" | "area_desc";
      offert: ("SALE" | "RENT")[];
      location_category: number[];
      location_subcategory: number[];
      floors: number[];
      first_line: boolean;
      price_from: number;
      price_to: number;
      price_square_from: number;
      price_square_to: number;
      surface_from: number;
      surface_to: number;
      floor_from: number;
      floor_to: number;
      housing_conditions: number[];
      features: number[];
      destinations: number[];
      placeings: number[];
    }>
  >;
}) {
  const params = await searchParams;
  const commercialsHotOfferts = await getCommercialsHotOfferts({
    limit: 3,
  });
  const { data: commercialsOfferts, meta } = await getCommercialsOfferts({
    limit: 15,
    ...params,
  });

  const locationCategories = await getLocationCategories();
  const commercialDestinations = await getCommercialDestinations();
  const commercialPlaceings = await getCommercialPlaceings();
  const commercialFeatures = await getCommercialFeatures();
  const housingConditions = await getHousingConditions();
  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <CommercialsFilter
          locationCategories={locationCategories}
          commercialDestinations={commercialDestinations}
          commercialPlaceings={commercialPlaceings}
          commercialFeatures={commercialFeatures}
          housingConditions={housingConditions}
          meta={meta}
        >
          <OffertsGrid
            offerts={[...commercialsHotOfferts, ...commercialsOfferts]}
          />
        </CommercialsFilter>
        <HotSection />
      </div>
    </section>
  );
}
