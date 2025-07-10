export type MultiLanguageType = {
  ru: string;
  en: string;
  ro: string;
};

export type LocationCategory = {
  id: number;
  subcategories: LocationCategory[];
} & MultiLanguageType;

export type HousingStock = {
  id: number;
} & MultiLanguageType;

export type HousingCondition = {
  id: number;
} & MultiLanguageType;

export type ApartmentFeature = {
  id: number;
} & MultiLanguageType;

export type CommercialDestination = {
  id: number;
} & MultiLanguageType;

export type CommercialPlaceing = {
  id: number;
} & MultiLanguageType;

export type CommercialFeature = {
  id: number;
} & MultiLanguageType;

export type HouseFeature = {
  id: number;
} & MultiLanguageType;

export type TerrainUtility = {
  id: number;
} & MultiLanguageType;

export type TerrainFeature = {
  id: number;
} & MultiLanguageType;
