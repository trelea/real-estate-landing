import { LocaleType } from "@/i18n/routing";
import { axiosInstance } from "@/services/axios-instance";
import { type AboutUsType } from "@/types";
import { AxiosResponse } from "axios";

export const getAboutUsContent = async ({
  locale,
}: {
  locale: Partial<LocaleType>;
}) => {
  "use cache";
  const { data } = await axiosInstance.get<unknown, AxiosResponse<AboutUsType>>(
    "/about-us"
  );

  return data[`content_${locale}`];
};
