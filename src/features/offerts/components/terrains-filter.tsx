"use client";

import PaginationOfferts from "@/components/pagination/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  LocationCategory,
  TerrainFeature,
  TerrainUtility,
} from "@/features/filters/types";
import { SlidersHorizontal } from "lucide-react";
import { parseAsInteger, useQueryStates } from "nuqs";
import { parseAsString } from "nuqs";
import { parseAsArrayOf } from "nuqs";

export const FilterComponent = ({
  query,
  setQuery,
  locationCategories,
  usabilities,
  features,
}: {
  query: any;
  setQuery: (query: any) => void;
  locationCategories: LocationCategory[];
  usabilities: TerrainUtility[];
  features: TerrainFeature[];
}) => {
  return (
    <Accordion type="multiple" className="m-0 p-0 w-full">
      {/* offert */}
      <AccordionItem value="OFFERT">
        <AccordionTrigger className="font-semibold text-base">
          Offert
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={query.offert?.includes("SALE")}
              onCheckedChange={(checked) =>
                setQuery({
                  offert: checked
                    ? [...(query.offert ?? []), "SALE"]
                    : query.offert?.filter((o: any) => o !== "SALE"),
                })
              }
            />
            <span>Sale</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={query.offert?.includes("RENT")}
              onCheckedChange={(checked) =>
                setQuery({
                  offert: checked
                    ? [...(query.offert ?? []), "RENT"]
                    : query.offert?.filter((o: any) => o !== "RENT"),
                })
              }
            />
            <span>Rent</span>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* location */}
      <AccordionItem value="LOCATION">
        <AccordionTrigger className="font-semibold text-base">
          Location
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {locationCategories.map((category) => (
            <Accordion key={category.id} type="single" collapsible>
              <AccordionItem value={category.id.toString()} className="m-0 p-0">
                <AccordionTrigger className="m-0 p-0">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={query.location_category?.includes(category.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setQuery({
                            location_category: [
                              ...(query.location_category ?? []),
                              category.id,
                            ],
                            location_subcategory: [
                              ...(query.location_subcategory ?? []),
                              ...category.subcategories.map(
                                (subcategory) => subcategory.id
                              ),
                            ],
                          });
                        } else {
                          setQuery({
                            location_category: query.location_category?.filter(
                              (id: any) => id !== category.id
                            ),
                            location_subcategory:
                              query.location_subcategory?.filter(
                                (id: any) =>
                                  !category.subcategories.some(
                                    (subcategory: any) => subcategory.id === id
                                  )
                              ),
                          });
                        }
                      }}
                    />
                    <span>{category.ro}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="m-0 p-0 flex flex-col gap-1">
                  {category.subcategories.map((subcategory) => (
                    <div
                      key={subcategory.id}
                      className="flex items-center gap-2 pl-6"
                    >
                      <Checkbox
                        checked={query.location_subcategory?.includes(
                          subcategory.id
                        )}
                        onCheckedChange={(checked) =>
                          setQuery({
                            location_subcategory: checked
                              ? [
                                  ...(query.location_subcategory ?? []),
                                  subcategory.id,
                                ]
                              : query.location_subcategory?.filter(
                                  (id: any) => id !== subcategory.id
                                ),
                          })
                        }
                      />
                      <span>{subcategory.ro}</span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
      {/* price */}
      <AccordionItem value="PRICE">
        <AccordionTrigger className="font-semibold text-base">
          Price
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <span>From</span>
              <Input
                type="number"
                placeholder="From"
                value={query.price_from ?? ""}
                onChange={(e) =>
                  // if 0 then set to null
                  setQuery({
                    price_from:
                      Number(e.target.value) === 0
                        ? null
                        : Number(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <span>To</span>
              <Input
                type="number"
                placeholder="To"
                value={query.price_to ?? ""}
                onChange={(e) =>
                  setQuery({
                    price_to:
                      Number(e.target.value) === 0
                        ? null
                        : Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* surface */}
      <AccordionItem value="SURFACE">
        <AccordionTrigger className="font-semibold text-base">
          Surface
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <span>From</span>
              <Input
                type="number"
                placeholder="From"
                value={query.surface_from ?? ""}
                onChange={(e) =>
                  setQuery({
                    surface_from:
                      Number(e.target.value) === 0
                        ? null
                        : Number(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <span>To</span>
              <Input
                type="number"
                placeholder="To"
                value={query.surface_to ?? ""}
                onChange={(e) =>
                  setQuery({
                    surface_to:
                      Number(e.target.value) === 0
                        ? null
                        : Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* usabilities */}
      <AccordionItem value="USABILITIES">
        <AccordionTrigger className="font-semibold text-base">
          Usabilities
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {usabilities.map((usability) => (
            <div key={usability.id} className="flex items-center gap-2">
              <Checkbox
                checked={query.usabilities?.includes(usability.id)}
                onCheckedChange={(checked) =>
                  setQuery({
                    usabilities: checked ? [usability.id] : [],
                  })
                }
              />
              <span>{usability.ro}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      {/* features */}
      <AccordionItem value="FEATURES">
        <AccordionTrigger className="font-semibold text-base">
          Features
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <Checkbox
                checked={query.features?.includes(feature.id)}
                onCheckedChange={(checked) =>
                  setQuery({
                    features: checked ? [feature.id] : [],
                  })
                }
              />
              <span>{feature.ro}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default function TerrainsFilter({
  children,
  meta,
  locationCategories,
  usabilities,
  features,
}: {
  children: React.ReactNode;
  meta: { page: number; limit: number; total: number; last_page: number };
  locationCategories: LocationCategory[];
  usabilities: TerrainUtility[];
  features: TerrainFeature[];
}) {
  const [query, setQuery] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
      sort: parseAsString,
      offert: parseAsArrayOf(parseAsString),
      location_category: parseAsArrayOf(parseAsInteger),
      location_subcategory: parseAsArrayOf(parseAsInteger),
      price_from: parseAsInteger,
      price_to: parseAsInteger,
      surface_from: parseAsInteger,
      surface_to: parseAsInteger,
      usabilities: parseAsArrayOf(parseAsInteger),
      features: parseAsArrayOf(parseAsInteger),
    },
    { shallow: false }
  );
  return (
    <div className="w-full flex gap-6 pb-10">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2 xl:flex-row xl:justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl md:text-3xl font-bold">Terrains</h1>
            <span className="text-xs md:text-sm text-muted-foreground">
              Found <strong>{meta.total}</strong> terrains
            </span>
          </div>

          <div className="flex items-center gap-2 justify-between">
            <h1 className="text-base font-medium hidden">Sort by</h1>

            <Select
              onValueChange={(value) =>
                setQuery({ sort: value === "default" ? null : value })
              }
              defaultValue={query.sort ?? undefined}
            >
              <SelectTrigger className="w-52 text-base">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>

                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="area_asc">Area: Low to High</SelectItem>
                <SelectItem value="area_desc">Area: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="xl:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="p-6">
                    <FilterComponent
                      features={features}
                      locationCategories={locationCategories}
                      query={query}
                      setQuery={setQuery}
                      usabilities={usabilities}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        {children}

        <PaginationOfferts
          next={() =>
            setQuery(({ page, ..._ }) => ({ page: (page as number) + 1, ..._ }))
          }
          prev={() =>
            setQuery(({ page, ..._ }) => ({ page: (page as number) - 1, ..._ }))
          }
          access={(page) => setQuery({ ...query, page })}
          meta={meta}
        />
      </div>

      <div className=" flex-col gap-6 w-72 hidden xl:flex">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-bold">Filters</h1>
          <Button variant={"ghost"}>Clear</Button>
        </div>
        <Card className="p-0 m-0 w-72">
          <CardContent className="w-full">
            <FilterComponent
              features={features}
              locationCategories={locationCategories}
              query={query}
              setQuery={setQuery}
              usabilities={usabilities}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
