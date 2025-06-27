import { axiosInstance } from "@/services/axios-instance";
import { ServiceType } from "@/types";
import { AxiosResponse } from "axios";

export const getServices = async (): Promise<ServiceType[]> => {
  // "use cache";
  return (
    await axiosInstance.get<unknown, AxiosResponse<{ data: ServiceType[] }>>(
      "/services"
    )
  ).data.data;
};

export const getService = async ({
  id,
}: {
  id: string;
}): Promise<ServiceType> => {
  // "use cache";
  return (
    await axiosInstance.get<unknown, AxiosResponse<ServiceType>>(
      `/services/${id}`
    )
  ).data;
};

export const getServicesLanding = async (): Promise<
  { service: ServiceType; position: number }[]
> => {
  // "use cache";
  return (
    await axiosInstance.get<
      unknown,
      AxiosResponse<{ service: ServiceType; position: number }[]>
    >("/services/landing")
  ).data;
};
