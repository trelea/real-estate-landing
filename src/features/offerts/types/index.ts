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
    name: string;
  };
  location_subcategory: {
    id: number;
    name: string;
  };
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

export interface HousingStock {
  id: number;
  name: string;
}

export interface Feature {
  id: number;
  name: string;
}

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
  housing_conditions: { id: number }[];
  features: Feature[];
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
  housing_stock: { id: number; name: string };
  housing_conditions: { id: number }[];
  commercial_destinations: { id: number; name: string }[];
  commercial_placings: { id: number; name: string }[];
  features: { id: number; name: string }[];
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
  housing_conditions: { id: number }[];
  features: Feature[];
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
  usability: { id: number }[];
  features: { id: number }[];
  media: Media[];
  views: number;
  created_at: string;
  updated_at: string;
}
