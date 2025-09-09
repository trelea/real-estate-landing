import { Separator } from "@/components/ui/separator";
import { Apartment, Commercial, House, Terrain } from "../types";
import { CircleCheckBig, Eye, MapPinHouse } from "lucide-react";
import OffertCarousel from "./offert-carousel";
import OffertDesc from "./offert-desc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Link } from "@/i18n/navigation";
import OffertMap from "./offert-map";
import { getTranslations } from "next-intl/server";
import OffertPageContact from "./offert-page-contact";

export default async function OffertPage({
  offert,
  table,
  locale,
}: {
  offert: Apartment | House | Commercial | Terrain;
  table?: { label: string; value: React.ReactNode }[];
  locale: string;
}) {
  const t = await getTranslations("common");

  {/* @ts-ignore */}
  const [street = "", sector = "", country = ""] = offert.location[`street_${locale}`]?.split(",").map(s => s.trim()) || [];

  return (
    <article className="flex flex-col gap-4 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {/* @ts-ignore */}
          {street} {sector && `, sect. ${sector}`} {country && `, mun. ${country}`}
        </h1>
        {/* <div className="flex gap-4 items-center h-4">
          <span className="text-xs md:text-sm text-gray-500">
            {t("property_id")}: <strong>{offert.id}</strong>
          </span>
          <Separator orientation="vertical" className="h-4 w-2 bg-gray-300" />
          <span className="text-xs lg:text-sm text-gray-500 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <strong>{offert.views}</strong>
          </span>
        </div> */}
      </div>

      <div className="w-full h-full flex flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-2/3 h-full flex flex-col gap-6">
          <OffertCarousel media={offert.media} />

          {/* PIDARASINS SUKA */}
          {/*               
Furnished
With appliances
Independent heating
Air conditioning
Thermo-pane windows
Panoramic windows
Underfloor heating
Parquet flooring
High ceilings
Armored door
Alarm systems
Intercom
Excludes ground floor
Excludes top floor
Middle floor placement
Elevator
Parking space
Kindergarten
Electricity
Gas
Sewage
Supermarket
Water supply
School
Children's playground
Hospital / clinic
Paved road

filter and deselct the places like kinder gardden ,market ,school ,children's playground ,hospital / clinic ,paved road
           */}
          {offert.features.length > 0 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-xl md:text-2xl font-bold">
                {t("caracteristics")}
              </h1>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {offert.features.map((feature) => (
                  <li key={feature.id}>
                    <div className="flex items-center gap-2">
                      <CircleCheckBig className="w-6 h-6 stroke-primary" />
                      <span className="text-base font-medium">
                        {/* @ts-ignore */}
                        {feature[locale]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator className="bg-gray-200" />

          {offert.desc_ro && (
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-xl md:text-2xl font-bold">
                {t("description")}
              </h1>
              <OffertDesc
                // @ts-ignore
                desc={offert[`desc_${locale}`]}
                maxLength={500}
              />
            </div>
          )}
        </div>
        <div className="w-full xl:w-1/3 h-full flex-col gap-4 flex">
          <OffertPageContact offert={offert} />

          <Card className="h-full w-full m-0 p-4 py-6">
            <CardHeader className="flex items-center gap-6 m-0 p-0">
              <CardTitle className="text-sm md:text-base font-semibold">
                {t("contacts")}
              </CardTitle>
              <CardDescription>
                <ul className="flex items-center gap-3">
                  {offert.user.profile.telegram && (
                    <li>
                      <Link href={offert.user.profile.telegram} target="_blank">
                        <FaTelegram className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
                      </Link>
                    </li>
                  )}
                  {offert.user.profile.viber && (
                    <li>
                      <Link
                        href={`viber://chat?number=${offert.user.profile.viber}`}
                        target="_blank"
                      >
                        <FaViber className="h-6 w-6 md:h-8 md:w-8 text-violet-500" />
                      </Link>
                    </li>
                  )}
                  {offert.user.profile.whatsapp && (
                    <li>
                      <Link
                        href={`https://wa.me/${offert.user.profile.whatsapp}`}
                        target="_blank"
                      >
                        <FaWhatsapp className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
                      </Link>
                    </li>
                  )}
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-0 m-0 gap-0">
            <CardHeader className="p-0 m-0 px-4 py-6">
              <CardTitle className="p-0 m-0 font-bold text-xl md:text-2xl text-primary">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(offert.price)}
              </CardTitle>
            </CardHeader>
            <CardContent className="m-0 p-0 w-full">
              <Table className="w-full">
                <TableBody className="w-full">
                  {table?.map((key, _) => (
                    <TableRow
                      key={_}
                      className={_ % 2 === 0 ? "bg-gray-100" : "bg-transparent"}
                    >
                      <TableCell className="text-sm md:text-base p-4">
                        {key.label}:
                      </TableCell>
                      <TableCell className="text-sm md:text-base">
                        <strong className="break-words">{key.value}</strong>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="m-0 p-2">
            <CardContent className="m-0 p-0">
              <OffertMap
                apiKey={process.env.MAPS_API as string}
                lat={Number(offert.location.lat)}
                lng={Number(offert.location.lng)}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
}
