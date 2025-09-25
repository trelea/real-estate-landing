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
import { useTranslations } from "next-intl";
import { parseAsInteger, useQueryStates } from "nuqs";
import { parseAsString } from "nuqs";
import { parseAsArrayOf } from "nuqs";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";

export const FilterComponent = ({
  query,
  setQuery,
  locationCategories,
  usabilities,
  features,
  locale,
}: {
  query: any;
  setQuery: (query: any) => void;
  locationCategories: LocationCategory[];
  usabilities: TerrainUtility[];
  features: TerrainFeature[];
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
            <span>{t("sale")}</span>
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
            <span>{t("rent")}</span>
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
      {/* price */}
      <AccordionItem value="PRICE">
        <AccordionTrigger className="font-semibold text-base">
          {t("price")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <span>{t("from")}</span>
              <Input
                type="number"
                placeholder={t("from")}
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
              <span>{t("to")}</span>
              <Input
                type="number"
                placeholder={t("to")}
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
          {t("surface")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <div>
              <span>{t("from")}</span>
              <Input
                type="number"
                placeholder={t("from")}
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
              <span>{t("to")}</span>
              <Input
                type="number"
                placeholder={t("to")}
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
          {t("usabilities")}
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
              {/* @ts-ignore */}
              <span>{usability[locale]}</span>
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
              {/* @ts-ignore */}
              <span>{feature[locale]}</span>
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
  locale,
}: {
  children: React.ReactNode;
  meta: { page: number; limit: number; total: number; last_page: number };
  locationCategories: LocationCategory[];
  usabilities: TerrainUtility[];
  features: TerrainFeature[];
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
      price_from: parseAsInteger,
      price_to: parseAsInteger,
      surface_from: parseAsInteger,
      surface_to: parseAsInteger,
      usabilities: parseAsArrayOf(parseAsInteger),
      features: parseAsArrayOf(parseAsInteger),
    },
    { shallow: false }
  );
  const [localFilters, setLocalFilters] = useState({
    offert: query.offert,
    location_category: query.location_category,
    location_subcategory: query.location_subcategory,
    price_from: query.price_from,
    price_to: query.price_to,
    surface_from: query.surface_from,
    surface_to: query.surface_to,
    usabilities: query.usabilities,
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
      price_from: query.price_from,
      price_to: query.price_to,
      surface_from: query.surface_from,
      surface_to: query.surface_to,
      usabilities: query.usabilities,
      features: query.features,
    });
  }, [query]);
  return (
    <div className="w-full flex gap-6 pb-10">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2 xl:flex-row xl:justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl md:text-3xl font-bold">{t("terrains")}</h1>
            <span className="text-xs md:text-sm text-muted-foreground">
              {t("found")} <strong>{meta.total}</strong> {t("terrains")}
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
                        features={features}
                        locationCategories={locationCategories}
                        query={localFilters}
                        setQuery={updateLocalFilters}
                        usabilities={usabilities}
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
                  price_from: null,
                  price_to: null,
                  surface_from: null,
                  surface_to: null,
                  usabilities: [],
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
              features={features}
              locationCategories={locationCategories}
              query={localFilters}
              setQuery={updateLocalFilters}
              usabilities={usabilities}
              locale={locale}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
