import { HotSection } from "@/components/hot/hot";
import {
  getLocationCategories,
  getTerrainFeatures,
  getTerrainUsabilities,
} from "@/features/filters/api";
import {
  getTerrainsHotOfferts,
  getTerrainsOfferts,
} from "@/features/offerts/api";
import OffertsGrid from "@/features/offerts/components/offerts-grid";
import TerrainsFilter from "@/features/offerts/components/terrains-filter";
import { parseArrayParam, parseParam } from "@/utils/parser";

export default async function Terrains({
  searchParams,
  params,
}: {
  searchParams: Promise<
    Partial<{
      page: number;
      sort: "price_asc" | "price_desc" | "area_asc" | "area_desc";
      offert: ("SALE" | "RENT")[];
      location_category: number[];
      location_subcategory: number[];
      price_from: number;
      price_to: number;
      surface_from: number;
      surface_to: number;
      usabilities: number[];
      features: number[];
    }>
  >;
  params: Promise<{ locale: string }>;
}) {
  const _params = await searchParams;
  const { locale } = await params;
  const parsedParams = {
    page: parseParam(_params.page as unknown as string, "number"),
    sort: _params.sort,
    offert: parseArrayParam(_params.offert as unknown as string, "string") as (
      | "SALE"
      | "RENT"
    )[],
    location_category: parseArrayParam(
      _params.location_category as unknown as string,
      "number"
    ),
    location_subcategory: parseArrayParam(
      _params.location_subcategory as unknown as string,
      "number"
    ),
    price_from: parseParam(_params.price_from as unknown as string, "number"),
    price_to: parseParam(_params.price_to as unknown as string, "number"),
    surface_from: parseParam(
      _params.surface_from as unknown as string,
      "number"
    ),
    surface_to: parseParam(_params.surface_to as unknown as string, "number"),
    usabilities: parseArrayParam(
      _params.usabilities as unknown as string,
      "number"
    ),
    features: parseArrayParam(_params.features as unknown as string, "number"),
  };
  const terrainsHotOfferts = await getTerrainsHotOfferts({
    limit: 3,
  });
  const { data: terrainsOfferts, meta } = await getTerrainsOfferts({
    limit: 15,
    ...(parsedParams as unknown as Record<string, any>),
  });
  const locationCategories = await getLocationCategories();
  const usabilities = await getTerrainUsabilities();
  const features = await getTerrainFeatures();

  return (
    <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <TerrainsFilter
          locale={locale}
          meta={meta}
          locationCategories={locationCategories}
          usabilities={usabilities}
          features={features}
        >
          <OffertsGrid
            offerts={[...terrainsHotOfferts, ...terrainsOfferts]}
            type="terrains"
          />
        </TerrainsFilter>
        <HotSection />
      </div>
    </section>
  );
}
