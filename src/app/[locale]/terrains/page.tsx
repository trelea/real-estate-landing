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

export default async function Terrains({
  searchParams,
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
}) {
  const params = await searchParams;
  const terrainsHotOfferts = await getTerrainsHotOfferts({
    limit: 3,
  });
  const { data: terrainsOfferts, meta } = await getTerrainsOfferts({
    limit: 15,
    ...params,
  });
  const locationCategories = await getLocationCategories();
  const usabilities = await getTerrainUsabilities();
  const features = await getTerrainFeatures();

  return (
    <section className="pt-14 sm:pt-24 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl py-10 md:py-14">
        <TerrainsFilter
          meta={meta}
          locationCategories={locationCategories}
          usabilities={usabilities}
          features={features}
        >
          <OffertsGrid offerts={[...terrainsHotOfferts, ...terrainsOfferts]} />
        </TerrainsFilter>
        <HotSection />
      </div>
    </section>
  );
}
