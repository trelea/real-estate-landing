import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="px-6 sm:px-11 lg:px-20 py-12 w-full bg-[#163259] flex flex-col gap-12 text-white">
      <div className="flex flex-col gap-14 xl:gap-0 xl:flex-row">
        <div className="flex-1 flex flex-col gap-8">
          <Link href={"/"}>
            <Image
              src={"/assets/logo-white.png"}
              alt="Dialog Imobil white logo"
              width={142}
              height={50}
            />
          </Link>
          <p className="text-base text-balance text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            est augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam viverra est augue.
          </p>
        </div>
        <div className="flex-1 flex justify-between flex-col gap-14 sm:flex-row sm:gap-0">
          <nav className="flex flex-col gap-7">
            <h1 className="font-bold text-xl">Dialog Imobil</h1>
            <ul className="text-base flex flex-col gap-6">
              <li>
                <Link href={"/about-us"}>Despre noi</Link>
              </li>
              <li>
                <Link href={"#"}>Știri imobiliare</Link>
              </li>
              <li>
                <Link href={"#"}>Politica de confidențialitate</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Codul de etică</Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-7">
            <h1 className="font-bold text-xl">Servicii</h1>
            <ul className="text-base flex flex-col gap-6">
              <li>
                <Link href={"#"}>Apartamente</Link>
              </li>
              <li>
                <Link href={"#"}>Case</Link>
              </li>
              <li>
                <Link href={"#"}>Spații comerciale</Link>
              </li>
              <li>
                <Link href={"#"}>Terenuri</Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-7">
            <h1 className="font-bold text-xl">Social Media</h1>
            <ul className="text-base flex items-center gap-4">
              <li className="bg-white size-10 rounded-full text-[#163259] flex justify-center items-center p-2">
                <Link href={"#"}>
                  <Facebook />
                </Link>
              </li>
              <li className="bg-white size-10 rounded-full text-[#163259] flex justify-center items-center p-2">
                <Link href={"#"}>
                  <Linkedin />
                </Link>
              </li>
              <li className="bg-white size-10 rounded-full text-[#163259] flex justify-center items-center p-2">
                <Link href={"#"}>
                  <Instagram />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Separator className="w-full bg-[#1E406E] text-[#1E406E]" />
      <div className="text-base flex justify-center lg:justify-between items-center">
        <ul className="hidden lg:flex gap-8">
          <li className="hover:cursor-pointer hover:underline">
            <Link href={"/privacy-policy"}> Politica de confidențialitate</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href={"/terms-and-conditions"}>Termenii și Condițiile</Link>
          </li>
        </ul>

        <span className="font-medium text-sm sm:text-base">
          © 2025 Dialog Imobil | Toate drepturile rezervate.
        </span>
      </div>
    </footer>
  );
};
