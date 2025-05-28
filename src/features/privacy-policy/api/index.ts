import { LocaleType } from "@/i18n/routing";
import { axiosInstance } from "@/services/axios-instance";
import { type PrivacyPolicyType } from "@/types";
import { AxiosResponse } from "axios";

export const getPrivacyPolicyContent = async ({
  locale,
}: {
  locale: Partial<LocaleType>;
}) => {
  "use cache";
  const { data } = await axiosInstance.get<
    unknown,
    AxiosResponse<PrivacyPolicyType>
  >("/privacy-policy");

  return data[`content_${locale}`];
};
