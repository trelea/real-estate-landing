interface Multilingual {
  ro: string;
  ru: string;
  en: string;
}

interface LocationLike {
  location_category?: Multilingual | null;
  location_subcategory?: Multilingual | null;
}

/**
 * Formats "Category, Subcategory" tolerating a missing side.
 * A location can lose its category or subcategory when the referenced
 * record is deleted (FK is ON DELETE SET NULL), so neither is guaranteed.
 */
export const formatLocation = (
  location: LocationLike | null | undefined,
  locale: string
): string =>
  [location?.location_category, location?.location_subcategory]
    .map((entry) => entry?.[locale as keyof Multilingual])
    .filter(Boolean)
    .join(", ");
