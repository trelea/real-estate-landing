"use server";
import { axiosInstance } from "@/services/axios-instance";
import { AxiosResponse } from "axios";

export type UserCarouselType = {
  id: string;
  priority: number;
  user: {
    id: string;
    email: string;
    role: string;
    profile: {
      name: string;
      surname: string;
      thumbnail?: string;
    };
  };
};

export const getAgents = async () => {
  // "use cache";
  return (
    await axiosInstance.get<unknown, AxiosResponse<UserCarouselType[]>>(
      "/users-carousel"
    )
  ).data;
};
