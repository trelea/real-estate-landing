import { HotSection } from "@/components/hot/hot";
import {
  getHouseFeatures,
  getHousingConditions,
  getHousingStocks,
  getLocationCategories,
} from "@/features/filters/api";
import { getHousesHotOfferts, getHousesOfferts } from "@/features/offerts/api";
import HousesFilter from "@/features/offerts/components/houses-filter";
import OffertsGrid from "@/features/offerts/components/offerts-grid";

export default async function Houses({
  searchParams,
}: {
  searchParams: Promise<
    Partial<{
      page: number;
      sort: "price_asc" | "price_desc" | "area_asc" | "area_desc";
      offert: ("SALE" | "RENT")[];
      location_category: number[];
      location_subcategory: number[];
      // filters
      floors: number[];
      price_from: number;
      price_to: number;
      price_square_from: number;
      price_square_to: number;
      surface_from: number;
      surface_to: number;
      floor_from: number;
      floor_to: number;
      housing_stocks: number[];
      housing_conditions: number[];
      features: number[];
    }>
  >;
}) {
  const params = await searchParams;
  const housesHotOfferts = await getHousesHotOfferts({
    limit: 3,
  });
  const { data: housesOfferts, meta } = await getHousesOfferts({
    limit: 15,
    ...params,
  });
  const locationCategories = await getLocationCategories();
  const housingStocks = await getHousingStocks();
  const housingConditions = await getHousingConditions();
  const houseFeatures = await getHouseFeatures();

  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <HousesFilter
          meta={meta}
          locationCategories={locationCategories}
          housingStocks={housingStocks}
          housingConditions={housingConditions}
          houseFeatures={houseFeatures}
        >
          <OffertsGrid
            offerts={[...housesHotOfferts, ...housesOfferts]}
            type="houses"
          />
        </HousesFilter>

        <HotSection />
      </div>
    </section>
  );
}
