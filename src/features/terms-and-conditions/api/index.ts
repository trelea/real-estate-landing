import { LocaleType } from "@/i18n/routing";
import { axiosInstance } from "@/services/axios-instance";
import { type TermsAndConditionsType } from "@/types";
import { AxiosResponse } from "axios";

export const getTermsAndConditionsContent = async ({
  locale,
}: {
  locale: Partial<LocaleType>;
}) => {
  // "use cache";
  const data = await axiosInstance.get<
    unknown,
    AxiosResponse<TermsAndConditionsType>
  >("/terms-and-conditions");

  return data.data[`content_${locale}`];
};
