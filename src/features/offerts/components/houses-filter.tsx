"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parseAsInteger, useQueryStates } from "nuqs";
import { parseAsString } from "nuqs";
import { parseAsArrayOf } from "nuqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  HouseFeature,
  HousingCondition,
  HousingStock,
  LocationCategory,
} from "@/features/filters/types";
import { Input } from "@/components/ui/input";
import PaginationOfferts from "@/components/pagination/pagination";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";

const FilterComponent = ({
  query,
  setQuery,
  locationCategories,
  housingStocks,
  housingConditions,
  houseFeatures,
  locale,
}: {
  query: any;
  setQuery: (query: any) => void;
  locationCategories: LocationCategory[];
  housingStocks: HousingStock[];
  housingConditions: HousingCondition[];
  houseFeatures: HouseFeature[];
  locale: string;
}) => {
  const t = useTranslations("filters");
  return (
    <Accordion type="multiple" className="m-0 p-0 w-full">
      {/* offert */}
      <AccordionItem value="OFFERT">
        <AccordionTrigger className="font-semibold text-base">
          {t("offert")}
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
          {t("location")}
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
                    {/* @ts-ignore */}
                    <span>{category[locale]}</span>
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
                      {/* @ts-ignore */}
                      <span>{subcategory[locale]}</span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
      {/* floors */}
      <AccordionItem value="FLOORS">
        <AccordionTrigger className="font-semibold text-base">
          {t("floors")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={query.floors?.includes(1)}
              onCheckedChange={(checked) =>
                setQuery({
                  floors: checked
                    ? [...(query.floors ?? []), 1]
                    : query.floors?.filter((f: any) => f !== 1),
                })
              }
            />
            <span>1 floor</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={query.floors?.includes(2)}
              onCheckedChange={(checked) =>
                setQuery({
                  floors: checked
                    ? [...(query.floors ?? []), 2]
                    : query.floors?.filter((f: any) => f !== 2),
                })
              }
            />
            <span>2 floors</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={query.floors?.includes(3)}
              onCheckedChange={(checked) =>
                setQuery({
                  floors: checked
                    ? [...(query.floors ?? []), 3]
                    : query.floors?.filter((f: any) => f !== 3),
                })
              }
            />
            <span>3+ floors</span>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* price */}
      <AccordionItem value="PRICE">
        <AccordionTrigger className="font-semibold text-base">
          {t("price")}
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
      {/* price square */}
      <AccordionItem value="PRICE_SQUARE">
        <AccordionTrigger className="font-semibold text-base">
          {t("price_square")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <span>From</span>
              <Input
                type="number"
                placeholder="From"
                value={query.price_square_from ?? ""}
                onChange={(e) =>
                  setQuery({
                    price_square_from:
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
                value={query.price_square_to ?? ""}
                onChange={(e) =>
                  setQuery({
                    price_square_to:
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
          {t("surface")}
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
      {/* floor */}
      <AccordionItem value="FLOOR">
        <AccordionTrigger className="font-semibold text-base">
          {t("floor")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <span>From</span>
              <Input
                type="number"
                placeholder="From"
                value={query.floor_from ?? ""}
                onChange={(e) =>
                  setQuery({
                    floor_from:
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
                value={query.floor_to ?? ""}
                onChange={(e) =>
                  setQuery({
                    floor_to:
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
      {/* housing stock */}
      <AccordionItem value="HOUSING_STOCK">
        <AccordionTrigger className="font-semibold text-base">
          {t("housing_stock")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {housingStocks.map((stock) => (
            <div key={stock.id} className="flex items-center gap-2">
              <Checkbox
                checked={query.housing_stocks?.includes(stock.id)}
                onCheckedChange={(checked) =>
                  setQuery({
                    housing_stocks: checked
                      ? [...(query.housing_stocks ?? []), stock.id]
                      : query.housing_stocks?.filter(
                          (s: any) => s !== stock.id
                        ),
                  })
                }
              />
              {/* @ts-ignore */}
              <span>{stock[locale]}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      {/* housing conditions */}
      <AccordionItem value="HOUSING_CONDITIONS">
        <AccordionTrigger className="font-semibold text-base">
          {t("housing_conditions")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {housingConditions.map((condition) => (
            <div key={condition.id} className="flex items-center gap-2">
              <Checkbox
                checked={query.housing_conditions?.includes(condition.id)}
                onCheckedChange={(checked) =>
                  setQuery({
                    housing_conditions: checked
                      ? [...(query.housing_conditions ?? []), condition.id]
                      : query.housing_conditions?.filter(
                          (c: any) => c !== condition.id
                        ),
                  })
                }
              />
              {/* @ts-ignore */}
              <span>{condition[locale]}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      {/* features */}
      <AccordionItem value="FEATURES">
        <AccordionTrigger className="font-semibold text-base">
          {t("features")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {houseFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <Checkbox
                checked={query.features?.includes(feature.id)}
                onCheckedChange={(checked) =>
                  setQuery({
                    features: checked
                      ? [...(query.features ?? []), feature.id]
                      : query.features?.filter((f: any) => f !== feature.id),
                  })
                }
              />
              {/* @ts-ignore */}
              <span>{feature[locale]}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default function HousesFilter({
  children,
  meta,
  locationCategories,
  housingStocks,
  housingConditions,
  houseFeatures,
  locale,
}: {
  children: React.ReactNode;
  meta: { page: number; limit: number; total: number; last_page: number };
  locationCategories: LocationCategory[];
  housingStocks: HousingStock[];
  housingConditions: HousingCondition[];
  houseFeatures: HouseFeature[];
  locale: string;
}) {
  const t = useTranslations("filters");
  const [query, setQuery] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
      sort: parseAsString,
      offert: parseAsArrayOf(parseAsString),
      location_category: parseAsArrayOf(parseAsInteger),
      location_subcategory: parseAsArrayOf(parseAsInteger),
      // filters
      floors: parseAsArrayOf(parseAsInteger),
      price_from: parseAsInteger,
      price_to: parseAsInteger,
      price_square_from: parseAsInteger,
      price_square_to: parseAsInteger,
      surface_from: parseAsInteger,
      surface_to: parseAsInteger,
      floor_from: parseAsInteger,
      floor_to: parseAsInteger,
      housing_stocks: parseAsArrayOf(parseAsInteger),
      housing_conditions: parseAsArrayOf(parseAsInteger),
      features: parseAsArrayOf(parseAsInteger),
    },
    { shallow: false, history: "push", throttleMs: 1000, scroll: true }
  );
  const [localFilters, setLocalFilters] = useState({
    offert: query.offert,
    location_category: query.location_category,
    location_subcategory: query.location_subcategory,
    floors: query.floors,
    price_from: query.price_from,
    price_to: query.price_to,
    price_square_from: query.price_square_from,
    price_square_to: query.price_square_to,
    surface_from: query.surface_from,
    surface_to: query.surface_to,
    floor_from: query.floor_from,
    floor_to: query.floor_to,
    housing_stocks: query.housing_stocks,
    housing_conditions: query.housing_conditions,
    features: query.features,
  });

  const updateLocalFilters = (partial: any | ((prev: any) => any)) => {
    if (typeof partial === "function") {
      setLocalFilters((prev: any) => ({ ...prev, ...partial(prev) }));
    } else {
      setLocalFilters((prev: any) => ({ ...prev, ...partial }));
    }
  };

  useEffect(() => {
    setLocalFilters({
      offert: query.offert,
      location_category: query.location_category,
      location_subcategory: query.location_subcategory,
      floors: query.floors,
      price_from: query.price_from,
      price_to: query.price_to,
      price_square_from: query.price_square_from,
      price_square_to: query.price_square_to,
      surface_from: query.surface_from,
      surface_to: query.surface_to,
      floor_from: query.floor_from,
      floor_to: query.floor_to,
      housing_stocks: query.housing_stocks,
      housing_conditions: query.housing_conditions,
      features: query.features,
    });
  }, [query]);
  return (
    <div className="w-full flex gap-6 pb-10">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2 xl:flex-row xl:justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl md:text-3xl font-bold">{t("houses")}</h1>
            <span className="text-xs md:text-sm text-muted-foreground">
              {t("found")} <strong>{meta.total}</strong> {t("houses")}
            </span>
          </div>

          <div className="flex items-center gap-2 justify-between">
            <h1 className="text-base font-medium hidden">{t("sort_by")}</h1>

            <Select
              onValueChange={(value) =>
                setQuery({ sort: value === "default" ? null : value })
              }
              defaultValue={query.sort ?? undefined}
            >
              <SelectTrigger className="w-52 text-base">
                <SelectValue placeholder={t("sort_by")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">{t("default")}</SelectItem>

                <SelectItem value="price_asc">
                  {t("price")}: {t("low_to_high")}
                </SelectItem>
                <SelectItem value="price_desc">
                  {t("price")}: {t("high_to_low")}
                </SelectItem>
                <SelectItem value="area_asc">
                  {t("area")}: {t("low_to_high")}
                </SelectItem>
                <SelectItem value="area_desc">
                  {t("area")}: {t("high_to_low")}
                </SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={() => setQuery(localFilters)}
              className="hidden xl:inline-flex"
            >
              Apply
            </Button>

            <div className="xl:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>{t("title")}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>{t("title")}</SheetTitle>
                  </SheetHeader>
                  <ScrollArea className="h-[calc(100vh-100px)]">
                    <div className="p-6">
                      <FilterComponent
                        query={localFilters}
                        setQuery={updateLocalFilters}
                        locationCategories={locationCategories}
                        housingStocks={housingStocks}
                        housingConditions={housingConditions}
                        houseFeatures={houseFeatures}
                        locale={locale}
                      />
                      <div className="mt-4 flex gap-2">
                        <Button
                          className="w-full"
                          onClick={() => setQuery(localFilters)}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </ScrollArea>
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
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <div className="flex items-center gap-2">
            <Button
              variant={"ghost"}
              onClick={() =>
                updateLocalFilters({
                  offert: [],
                  location_category: [],
                  location_subcategory: [],
                  floors: [],
                  price_from: null,
                  price_to: null,
                  price_square_from: null,
                  price_square_to: null,
                  surface_from: null,
                  surface_to: null,
                  floor_from: null,
                  floor_to: null,
                  housing_stocks: [],
                  housing_conditions: [],
                  features: [],
                })
              }
            >
              {t("clear")}
            </Button>
            <Button onClick={() => setQuery(localFilters)}>Apply</Button>
          </div>
        </div>
        <Card className="p-0 m-0 w-72">
          <CardContent className="w-full">
            <FilterComponent
              query={localFilters}
              setQuery={updateLocalFilters}
              locationCategories={locationCategories}
              housingStocks={housingStocks}
              housingConditions={housingConditions}
              houseFeatures={houseFeatures}
              locale={locale}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
