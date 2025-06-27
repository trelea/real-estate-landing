import { axiosInstance } from "@/services/axios-instance";
import { AxiosResponse } from "axios";
import {
  ApartmentFeature,
  CommercialDestination,
  CommercialFeature,
  CommercialPlaceing,
  HouseFeature,
  HousingCondition,
  HousingStock,
  LocationCategory,
  TerrainFeature,
  TerrainUtility,
} from "../types";

export const getLocationCategories = async () =>
  (
    await axiosInstance.get<unknown, AxiosResponse<LocationCategory[]>>(
      "/locations/categories/all"
    )
  ).data;

export const getHousingStocks = async () =>
  (
    await axiosInstance.get<unknown, AxiosResponse<{ data: HousingStock[] }>>(
      "/housing-stocks",
      {
        params: {
          page: 1,
          limit: 1000,
        },
      }
    )
  ).data.data;

export const getHousingConditions = async () =>
  (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{ data: HousingCondition[] }>
    >("/housing-conditions", {
      params: {
        page: 1,
        limit: 1000,
      },
    })
  ).data.data;

export const getApartmentFeatures = async () =>
  (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{ data: ApartmentFeature[] }>
    >("/apartments/features", {
      params: {
        page: 1,
        limit: 1000,
      },
    })
  ).data.data;

export const getCommercialDestinations = async () =>
  (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{ data: CommercialDestination[] }>
    >("/commercials/destinations", {
      params: {
        page: 1,
        limit: 1000,
      },
    })
  ).data.data;

export const getCommercialPlaceings = async () =>
  (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{ data: CommercialPlaceing[] }>
    >("/commercials/placings", {
      params: {
        page: 1,
        limit: 1000,
      },
    })
  ).data.data;

export const getCommercialFeatures = async () =>
  (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{ data: CommercialFeature[] }>
    >("/commercials/features", {
      params: {
        page: 1,
        limit: 1000,
      },
    })
  ).data.data;

export const getHouseFeatures = async () =>
  (
    await axiosInstance.get<unknown, AxiosResponse<{ data: HouseFeature[] }>>(
      "/houses/features",
      {
        params: {
          page: 1,
          limit: 1000,
        },
      }
    )
  ).data.data;

export const getTerrainUsabilities = async () =>
  (
    await axiosInstance.get<unknown, AxiosResponse<{ data: TerrainUtility[] }>>(
      "/terrains/usabilities",
      {
        params: {
          page: 1,
          limit: 1000,
        },
      }
    )
  ).data.data;

export const getTerrainFeatures = async () =>
  (
    await axiosInstance.get<unknown, AxiosResponse<{ data: TerrainFeature[] }>>(
      "/terrains/features",
      {
        params: {
          page: 1,
          limit: 1000,
        },
      }
    )
  ).data.data;
