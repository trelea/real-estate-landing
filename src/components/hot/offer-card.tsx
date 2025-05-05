import React from "react";
import { Card, CardDescription } from "../ui/card";
import { Bed, Map, Scaling } from "lucide-react";
import Image from "next/image";

interface Props {
  product: { price: number; street: string; area: number; rooms: number };
}
export const OfferCard: React.FC<Props> = ({ product }) => {
  return (
    <Card className="m-0 p-0 shadow w-full h-fit gap-0 relative rounded-2xl">
      <Image
        src={"/assets/logo-blue.png"}
        height={200}
        width={500}
        alt="Dialog"
        loading="lazy"
        className="h-[200px] object-contain p-20 shadow rounded-t-2xl border-b"
      />
      <CardDescription className="m-0 p-0 py-4 px-2 flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-semibold text-xl">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(product.price)}
          </h1>
          <label className="flex items-center gap-1">
            <Map className="size-3 text-primary" />
            <h6 className="text-xs">Pe harta</h6>
          </label>
        </div>
        <p className="text-balance font-semibold text-base text-foreground">
          {product.street}
        </p>

        <ul className="flex items-center font-medium text-xs gap-4">
          <li className="flex items-center gap-1">
            <Scaling className="size-3.5" />
            <p>{product.area}mp</p>
          </li>
          <li className="flex items-center gap-1">
            <Bed className="size-3.5" />
            <p>{product.rooms} camere</p>
          </li>
        </ul>
      </CardDescription>
    </Card>
  );
};
