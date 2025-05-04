import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface Props {}

export const MobileNavigation: React.FC<Props> = ({}) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="p-0 m-0">
        <Menu className="size-8 p-1.5 text-foreground" />
      </DrawerTrigger>
      <DrawerContent className="pl-6">
        <DrawerHeader className="py-10">
          <DrawerTitle className="sr-only"></DrawerTitle>
          <DrawerDescription>
            <Link href={"#"}>
              <Image
                src={"/assets/logo-blue.png"}
                alt="dialog imobil blue logo"
                width={120}
                height={42}
              />
            </Link>
          </DrawerDescription>
        </DrawerHeader>

        <ul className="flex flex-col items-start gap-8 text-base font-normal">
          <li>
            <Accordion type="single" collapsible className="p-0 m-0">
              <AccordionItem value="estate" className="m-0 p-0">
                <AccordionTrigger className="m-0 p-0 text-base font-normal hover:no-underline">
                  Imobiliare
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col items-start gap-6 text-sm font-normal pl-6 pt-8">
                    <li>
                      <Link href={"#"} className="hover:text-primary">
                        Apartamente
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="hover:text-primary">
                        Case
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="hover:text-primary">
                        Spații comerciale
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="hover:text-primary">
                        Terenuri
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="hover:text-primary">
                        Investiții
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
      </DrawerContent>
    </Drawer>
  );
};
