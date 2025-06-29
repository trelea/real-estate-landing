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
import { parseArrayParam, parseParam } from "@/utils/parser";

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
    first_line: parseParam(params.first_line as unknown as string, "boolean"),
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
    housing_conditions: parseArrayParam(
      params.housing_conditions as unknown as string,
      "number"
    ),
    features: parseArrayParam(params.features as unknown as string, "number"),
    destinations: parseArrayParam(
      params.destinations as unknown as string,
      "number"
    ),
    placeings: parseArrayParam(params.placeings as unknown as string, "number"),
  };
  const commercialsHotOfferts = await getCommercialsHotOfferts({
    limit: 3,
  });
  const { data: commercialsOfferts, meta } = await getCommercialsOfferts({
    limit: 15,
    ...(parsedParams as unknown as Record<string, any>),
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
            type="commercials"
          />
        </CommercialsFilter>
        <HotSection />
      </div>
    </section>
  );
}
