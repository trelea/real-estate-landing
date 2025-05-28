export type StatusType = "PUBLIC" | "PRIVATE" | (string & {});

export type ContentType = {
  id: string;
  created_at: string;
  updated_at: string;
  title_ro: string;
  title_ru: string;
  title_en: string;
  desc_ro: string;
  desc_ru: string;
  desc_en: string;
  content_ro: string;
  content_ru: string;
  content_en: string;
};

export type ServiceType = {
  id: string;
  created_at: string;
  updated_at: string;
  thumbnail: string;
  status: BlogStatus;
  views: number;
  content: ContentType;
};

export type BlogType = ServiceType;

export type AboutUsType = {
  id: string;
  created_at: string;
  updated_at: string;
  content_ro: string;
  content_ru: string;
  content_en: string;
};
export type PrivacyPolicyType = AboutUsType;
export type TermsAndConditionsType = AboutUsType;
