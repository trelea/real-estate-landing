import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { MortgageCalculator } from "@/components/mortgage/mortgage-section";
import PrimaCasaPrograms from "@/components/mortgage/button-group";


interface Props {

}

const MortgagePage: React.FC<Props> = async() => {
  const t = await getTranslations("mortgage");

  return (
    <React.Fragment>
      <div className="bg-gray-100">
        <section className="pt-10 sm:pt-12 h-fit w-full px-6 sm:px-11 lg:px-20 flex flex-col items-center">
          <div className="w-full max-w-7xl flex flex-col gap-8 pt-10 pb-6">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">{t("section_title")}</h1>
              <div className="mt-4 text-gray-700">
                <h2 className="text-xl lg:text-2xl font-bold">{t("section_subtitle")}</h2>
                <p className="mt-2 text-gray-700">
                  {t("section_subtitle_desc")}
                </p>
              </div>
              
              <div className="w-full">
                <Image
                  src="/assets/broker.webp"
                  alt="Broker Consultation"
                  className="mt-4 rounded-lg shadow-md object-cover w-full h-48 sm:h-64 lg:h-[400px]"
                  width={1200}
                  height={400}
                  quality={100}
                />
              </div>

              <div className="mt-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-2">{t("benefits_title")}</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>{t("benefits_1")}</li>
                  <li>{t("benefits_2")}</li>
                  <li>{t("benefits_3")}</li>
                  <li>{t("benefits_4")}</li>
                  <li>{t("benefits_5")}</li>
                  <li>{t("benefits_6")}</li>
                </ul>
                </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-xl lg:text-2xl font-bold">{t("programs_title")}</h2>
              <PrimaCasaPrograms />
            </div>
          </div>

          <MortgageCalculator />

          <div className="max-w-7xl w-full mt-5 mb-10 text-gray-700">
            <h2 className="text-xl lg:text-2xl font-bold">{t("footer_title")}</h2>
            <p className="mt-2 text-gray-700">
              {t("footer_desc")} <a href="tel:+37360788889" className="text-blue-500 font-bold">+373 60 788889</a>
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MortgagePage;