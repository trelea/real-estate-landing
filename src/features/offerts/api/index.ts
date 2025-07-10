import { axiosInstance } from "@/services/axios-instance";
import { AxiosResponse } from "axios";
import { Apartment, Commercial, House, Terrain } from "../types";

export const getApartmentsOfferts = async ({
  limit,
  page,
  sort,
  ...filter
}: { limit: number } & Partial<{
  page: number;
  sort: "price_asc" | "price_desc" | "area_asc" | "area_desc";
  offert: ("SALE" | "RENT")[];
  location_category: number[];
  location_subcategory: number[];
  rooms: number[];
  sanitaries: number[];
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
}>) => {
  return (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{
        data: Apartment[];
        meta: { page: number; limit: number; total: number; last_page: number };
      }>
    >("/offerts/apartments", {
      params: { limit, page, sort, filter: JSON.stringify(filter) },
    })
  ).data;
};

export const getApartmentsHotOfferts = async ({ limit }: { limit: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<Apartment[]>>(
      "/offerts/apartments/hot",
      {
        params: { limit },
      }
    )
  ).data;
};

export const getHousesOfferts = async ({
  limit,
  page,
  sort,
  ...filter
}: { limit: number } & Partial<{
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
}>) => {
  // "use cache";
  return (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{
        data: House[];
        meta: { page: number; limit: number; total: number; last_page: number };
      }>
    >("/offerts/houses", {
      params: { limit, page, sort, filter: JSON.stringify(filter) },
    })
  ).data;
};

export const getHousesHotOfferts = async ({ limit }: { limit: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<House[]>>(
      "/offerts/houses/hot",
      {
        params: { limit },
      }
    )
  ).data;
};

export const getCommercialsOfferts = async ({
  limit,
  page,
  sort,
  ...filter
}: { limit: number } & Partial<{
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
}>) => {
  // "use cache";
  return (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{
        data: Commercial[];
        meta: { page: number; limit: number; total: number; last_page: number };
      }>
    >("/offerts/commercials", {
      params: { limit, page, sort, filter: JSON.stringify(filter) },
    })
  ).data;
};

export const getCommercialsHotOfferts = async ({
  limit,
}: {
  limit: number;
}) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<Commercial[]>>(
      "/offerts/commercials/hot",
      {
        params: { limit },
      }
    )
  ).data;
};

export const getTerrainsOfferts = async ({
  limit,
  page,
  sort,
  ...filter
}: { limit: number } & Partial<{
  page: number;
  sort: "price_asc" | "price_desc" | "area_asc" | "area_desc";
  offert: ("SALE" | "RENT")[];
  location_category: number[];
  location_subcategory: number[];
  price_from: number;
  price_to: number;
  surface_from: number;
  surface_to: number;
  utilities: number[];
  features: number[];
}>) => {
  // "use cache";
  return (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{
        data: Terrain[];
        meta: { page: number; limit: number; total: number; last_page: number };
      }>
    >("/offerts/terrains", {
      params: { limit, page, sort, filter: JSON.stringify(filter) },
    })
  ).data;
};

export const getTerrainsHotOfferts = async ({ limit }: { limit: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<Terrain[]>>(
      "/offerts/terrains/hot",
      {
        params: { limit },
      }
    )
  ).data;
};

export const getHotOfferts = async ({ limit }: { limit: number }) => {
  return (
    await axiosInstance.get<
      unknown,
      AxiosResponse<
        (
          | (Apartment & { type: "apartments" })
          | (House & { type: "houses" })
          | (Commercial & { type: "commercials" })
          | (Terrain & { type: "terrains" })
        )[]
      >
    >("/offerts/hot", {
      params: { limit },
    })
  ).data;
};

export const getApartment = async ({ id }: { id: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<Apartment>>(
      `/apartments/${id}`
    )
  ).data;
};

export const getHouse = async ({ id }: { id: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<House>>(`/houses/${id}`)
  ).data;
};

export const getCommercial = async ({ id }: { id: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<Commercial>>(
      `/commercials/${id}`
    )
  ).data;
};

export const getTerrain = async ({ id }: { id: number }) => {
  return (
    await axiosInstance.get<unknown, AxiosResponse<Terrain>>(`/terrains/${id}`)
  ).data;
};
