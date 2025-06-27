import { axiosInstance } from "@/services/axios-instance";
import { BlogType } from "@/types";
import { AxiosResponse } from "axios";

export const getBlogs = async (): Promise<BlogType[]> => {
  // "use cache";
  return (
    await axiosInstance.get<unknown, AxiosResponse<{ data: BlogType[] }>>(
      "/blogs",
      {
        params: {
          limit: 1000,
        },
      }
    )
  ).data.data;
};

export const getBlogsLanding = async (): Promise<BlogType[]> => {
  // "use cache";
  return (
    await axiosInstance.get<unknown, AxiosResponse<{ data: BlogType[] }>>(
      "/blogs",
      {
        params: {
          limit: 3,
        },
      }
    )
  ).data.data;
};

export const getBlog = async ({ id }: { id: string }): Promise<BlogType> => {
  // "use cache";
  return (
    await axiosInstance.get<unknown, AxiosResponse<BlogType>>(`/blogs/${id}`)
  ).data;
};
