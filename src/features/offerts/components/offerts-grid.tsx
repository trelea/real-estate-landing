import { OfferCard } from "@/components/hot/offer-card";
import { Apartment, Commercial, Garage, House, Terrain } from "../types";
import { randomUUID } from "node:crypto";

export default function OffertsGrid({
  offerts,
  type,
}: {
  offerts: Apartment[] | House[] | Commercial[] | Terrain[] | Garage[];
  type?: Partial<
    "apartments" | "houses" | "commercials" | "terrains" | "garages"
  >;
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {offerts.map((offert) => (
        <OfferCard key={randomUUID()} offert={offert} type={type} />
      ))}
    </div>
  );
}
