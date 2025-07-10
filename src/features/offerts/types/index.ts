import {
  HousingStock,
  ApartmentFeature,
  CommercialDestination,
  CommercialFeature,
  CommercialPlaceing,
  HouseFeature,
  TerrainFeature,
  TerrainUtility,
  HousingCondition,
  MultiLanguageType,
} from "@/features/filters/types";

export interface Profile {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  surname: string;
  contact: string | null;
  thumbnail: string | null;
  viber?: string | null;
  whatsapp?: string | null;
  telegram?: string | null;
}

export interface User {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  role: "ADMIN" | "USER";
  profile: Profile;
}

export interface Location {
  id: number;
  location_category: {
    id: number;
  } & MultiLanguageType;
  location_subcategory: {
    id: number;
  } & MultiLanguageType;
  lat: number;
  lng: number;
  street_ro: string;
  street_ru: string;
  street_en: string;
  created_at: string;
  updated_at: string;
}

export interface Media {
  id: number;
  url: string;
  created_at: string;
  updated_at: string;
}

// export interface HousingStock {
//   id: number;
//   name: string;
// }

// export interface Feature {
//   id: number;
//   name: string;
// }

export interface Apartment {
  id: number;
  offert: ("SALE" | "RENT")[];
  user: User;
  price: number;
  price_square: number;
  hot: boolean;
  status: boolean | "PUBLIC" | "PRIVATE";
  desc_ro: string;
  desc_ru: string;
  desc_en: string;
  location: Location;
  rooms: number;
  sanitaries: number;
  surface: number;
  floor: number;
  floors: number;
  housing_stock: HousingStock;
  housing_conditions: HousingCondition[];
  features: ApartmentFeature[];
  media: Media[];
  views: number;
  created_at: string;
  updated_at: string;
}

export interface Commercial {
  id: number;
  offert: ("SALE" | "RENT")[];
  user: User;
  price: number;
  price_square: number;
  hot: boolean;
  status: boolean | "PUBLIC" | "PRIVATE";
  desc_ro: string;
  desc_ru: string;
  desc_en: string;
  location: Location;
  area: number;
  rooms: number;
  floor: number;
  floors: number;
  housing_stock: HousingStock;
  housing_conditions: HousingCondition[];
  commercial_destinations: CommercialDestination[];
  commercial_placings: CommercialPlaceing[];
  features: CommercialFeature[];
  media: Media[];
  views: number;
  created_at: string;
  updated_at: string;
}

export interface House {
  id: number;
  offert: ("SALE" | "RENT")[];
  user: User;
  price: number;
  price_square: number;
  hot: boolean;
  status: boolean | "PUBLIC" | "PRIVATE";
  desc_ro: string;
  desc_ru: string;
  desc_en: string;
  location: Location;
  floors: number;
  rooms: number;
  bathrooms: number;
  area: number;
  balcony: number;
  housing_stock: HousingStock;
  housing_conditions: HousingCondition[];
  features: HouseFeature[];
  media: Media[];
  views: number;
  created_at: string;
  updated_at: string;
}

export interface Terrain {
  id: number;
  offert: ("SALE" | "RENT")[];
  user: User;
  price: number;
  hot: boolean;
  status: boolean | "PUBLIC" | "PRIVATE";
  desc_ro: string;
  desc_ru: string;
  desc_en: string;
  location: Location;
  area: number;
  usability: TerrainUtility[];
  features: TerrainFeature[];
  media: Media[];
  views: number;
  created_at: string;
  updated_at: string;
}
