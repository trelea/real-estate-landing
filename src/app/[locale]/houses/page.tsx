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
import { parseArrayParam, parseParam } from "@/utils/parser";

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

  const parsedParams = {
    page: parseParam(params.page as unknown as string, "number"),
    sort: params.sort,
    offert: parseArrayParam(params.offert as unknown as string, "string") as (
      | "SALE"
      | "RENT"
    )[],
    location_category: parseArrayParam(
      params.location_category as unknown as string,
      "number"
    ),
    location_subcategory: parseArrayParam(
      params.location_subcategory as unknown as string,
      "number"
    ),
    floors: parseArrayParam(params.floors as unknown as string, "number"),
    price_from: parseParam(params.price_from as unknown as string, "number"),
    price_to: parseParam(params.price_to as unknown as string, "number"),
    price_square_from: parseParam(
      params.price_square_from as unknown as string,
      "number"
    ),
    price_square_to: parseParam(
      params.price_square_to as unknown as string,
      "number"
    ),
    surface_from: parseParam(
      params.surface_from as unknown as string,
      "number"
    ),
    surface_to: parseParam(params.surface_to as unknown as string, "number"),
    floor_from: parseParam(params.floor_from as unknown as string, "number"),
    floor_to: parseParam(params.floor_to as unknown as string, "number"),
    housing_stocks: parseArrayParam(
      params.housing_stocks as unknown as string,
      "number"
    ),
    housing_conditions: parseArrayParam(
      params.housing_conditions as unknown as string,
      "number"
    ),
    features: parseArrayParam(params.features as unknown as string, "number"),
  };
  const housesHotOfferts = await getHousesHotOfferts({
    limit: 3,
  });
  const { data: housesOfferts, meta } = await getHousesOfferts({
    limit: 15,
    ...(parsedParams as unknown as Record<string, any>),
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
