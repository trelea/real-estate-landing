import { Link } from "@/i18n/navigation";
import { AtSign, Smartphone } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
// import { TbBuildingSkyscraper } from "react-icons/tb";
import { NavigationGroup } from "./navagiation-group";
import { LocaleSelect } from "./locale-select";
import { MobileNavigation } from "./mibile-navigation";
// import {
//   PiHouseLine,
//   PiBankLight,
//   PiPlantLight,
//   PiBuildingOfficeLight,
//   PiShoppingBagOpenLight,
// } from "react-icons/pi";

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="fixed z-50 w-full shadow">
      <section className="py-2 px-6 sm:px-11 lg:px-20 hidden sm:flex w-full relative text-white h-fit justify-between z-50">
        <Image
          src={"/assets/header.png"}
          alt="header"
          fill={true}
          className="h-full object-center object-cover"
          priority={false}
        />
        <ul className="flex items-center gap-8 z-50">
          <li className="flex gap-0.5 items-center hover:cursor-pointer">
            <Smartphone className="size-4" />
            <h6 className="text-xs font-light">+373 60 888 816</h6>
          </li>
          <li className="flex gap-0.5 items-center hover:cursor-pointer">
            <Smartphone className="size-4" />
            <h6 className="text-xs font-light">+373 60 888 816</h6>
          </li>
        </ul>

        <ul className="flex items-center GiGreenhousegap-8 z-50">
          <li className="flex gap-0.5 items-center hover:cursor-pointer">
            <AtSign className="size-4" />
            <h6 className="text-xs font-light">dialog@imobil.md</h6>
          </li>
        </ul>
      </section>
      <nav className="py-2 px-6 sm:px-11 lg:px-20 shadow flex items-center justify-between relative z-50 bg-background">
        {/* logo */}
        <div className="shrink w-fit">
          <Link href={"#"}>
            <Image
              src={"/assets/logo-blue.png"}
              alt="dialog imobil blue logo"
              width={120}
              height={42}
            />
          </Link>
        </div>
        {/* bavigation */}
        <div className="hidden xl:block xl:flex-none">
          <ul className="flex items-center gap-8 text-sm font-normal">
            <li>
              <NavigationGroup
                width={200}
                label="Imobiliare"
                items={[
                  {
                    label: "Apartamente",
                    href: { pathname: "" },
                    // icon: <TbBuildingSkyscraper />,
                    // icon: <PiBuildingOfficeLight />,
                  },
                  {
                    label: "Case",
                    href: { pathname: "" },
                    // icon: <PiHouseLine />,
                  },
                  {
                    label: "Spații comerciale",
                    href: { pathname: "" },
                    // icon: <PiShoppingBagOpenLight />,
                  },
                  {
                    label: "Terenuri",
                    href: { pathname: "" },
                    //  icon: <PiPlantLight />
                  },
                  {
                    label: "Investiții",
                    href: { pathname: "" },
                    // icon: <PiBankLight />
                  },
                ]}
              />
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary">
                Servicii
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary">
                Despre Noi
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary">
                Știri imobiliare
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary">
                Contacte
              </Link>
            </li>
          </ul>
        </div>
        {/* locale switcher ans contact */}
        <div className="space-x-4 flex h-fit justify-end shrink w-fit items-center">
          <Button className="hidden sm:block text-sm rounded-lg w-fit py-2.5 px-4">
            Consultare expert
          </Button>

          <div className="pl-4 sm:border-l">
            <LocaleSelect />
          </div>

          <div className="xl:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
