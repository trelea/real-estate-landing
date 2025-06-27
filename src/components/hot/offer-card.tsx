import React from "react";
import { Card, CardDescription } from "../ui/card";
import { Bed, Flame, Map, Scaling } from "lucide-react";
import Image from "next/image";
import {
  Apartment,
  Commercial,
  House,
  Terrain,
} from "@/features/offerts/types";
import { Link } from "@/i18n/navigation";

interface Props {
  offert: (Apartment | House | Commercial | Terrain) &
    Partial<{
      type: "APARTMENT" | "HOUSE" | "COMMERCIAL" | "TERRAIN";
    }>;
  type?: Partial<"apartments" | "houses" | "commercials" | "terrains">;
}
export const OfferCard: React.FC<Props> = ({ offert, type }) => {
  return (
    <Card className="m-0 p-0 shadow w-full h-fit gap-0 rounded-2xl relative">
      <Link
        href={`${type ?? offert?.type?.toLowerCase()}/${offert.id}`}
        className="w-full h-full absolute top-0 left-0 z-10"
      ></Link>
      <div className="w-full h-full relative overflow-hidden">
        {offert.hot && (
          <div className="absolute top-1.5 left-1.5 flex items-center justify-center gap-2 bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-full">
            <Flame className="size-4 fill-white stroke-white" />
            <span className="text-xs text-white font-semibold">HOT</span>
          </div>
        )}
        <Image
          src={offert.media?.at(0)?.url || "/assets/logo-blue.png"}
          height={200}
          width={500}
          alt="Dialog"
          loading="lazy"
          className={`h-[200px] shadow rounded-t-2xl border-b ${
            offert.media?.at(0)?.url
              ? "object-cover object-center"
              : "p-20 object-contain"
          }`}
        />
      </div>

      <CardDescription className="m-0 p-0 py-4 px-2 flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-semibold text-xl">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(offert.price)}
          </h1>
          <label className="flex items-center gap-1">
            <Map className="size-3 text-primary" />
            <h6 className="text-xs">Pe harta</h6>
          </label>
        </div>
        <p className="text-balance font-semibold text-base text-foreground">
          {offert.location.street_ro.slice(0, 30)}
          {offert.location.street_ro.length > 25 && "..."}
        </p>

        <ul className="flex items-center font-medium text-xs gap-4">
          <li className="flex items-center gap-1">
            <Scaling className="size-3.5" />
            {/* @ts-ignore */}
            <p>{offert?.surface || offert?.area || 0}mp</p>
          </li>
          <li className="flex items-center gap-1">
            {/* @ts-ignore */}
            {offert?.rooms && (
              <>
                <Bed className="size-3.5" />
                {/* @ts-ignore */}
                <p>{offert?.rooms} camere</p>
              </>
            )}
          </li>
        </ul>
      </CardDescription>
    </Card>
  );
};
